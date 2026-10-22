# SYPD Website: Pre-Handoff Audit

**Date:** 30 September 2026
**Scope:** Local build (`next dev` on localhost:3000). All 8 routes were reviewed in light and dark mode at 1440px and 375px, the source code was read, and the site's claims were checked against the two SYPD PDFs in `src/`.
**Method:** Read-only. No project files were changed during the audit.

**Verdict:** The site looks polished, but it is **not ready to hand off**. The light-mode design is solid. Underneath it, the forms don't work, several claims could mislead donors, and the pages are extremely heavy.

---

## Ratings

| Area | Score | Why |
|---|---|---|
| Visual design (light mode) | 7.5/10 | Consistent logo palette, clean card system, good mobile menu, no sideways scrolling at 375px |
| Dark mode | 3/10 | White panels with white text; dark blue text on navy backgrounds |
| Content and credibility | 3/10 | Staff names with no source, mismatched photos, unsupported 501(c)(3) claims |
| Functionality | 2/10 | Donation, contact and newsletter forms only pretend to work |
| Performance | 2/10 | 43 MB hero video, 59 MB Stories page, 1.1 GB `public/` folder |
| Accessibility | 4/10 | Pop-ups can't be used by keyboard, contrast failures, no reduced-motion support |
| SEO and sharing | 3/10 | Same title on every page, no link previews, "0+" in the server HTML |
| Code quality | 6/10 | `tsc` has 0 errors; ESLint has 8 errors and 38 warnings; 1,241 lines of unused code |
| **Overall** | **4/10** | |

---

## 1. Blockers: fix before launch

### 1.1 The donation flow fakes success
- `src/components/DonationModal.tsx:63-71`: `handleCompleteDonation` waits 1.2 seconds, then shows a success screen with confetti. Nothing is sent anywhere. There is no API route, server action or payment SDK in the project.
- The card fields are prefilled with a fake card number, expiry and CVC: `4242 •••• •••• 8821`, `08/28`, `891` (`DonationModal.tsx:333, 345, 356`).
- The receipt number comes from `Math.random()` during render, so it changes on every re-render (`DonationModal.tsx:437`).
- Blank donor fields are quietly replaced with `donor@humanity.org` and "Friend of SYPD" (`DonationModal.tsx:237-243`).
- The flow accepts $0 or negative custom amounts.
- It claims "256-bit bank-grade encryption · Tax-deductible receipt issued", "501(c)(3) Eligible" and "escrow routing documentation will be emailed" (`DonationModal.tsx:388-445`).
- **Fix:** Send donors to a hosted checkout (such as Stripe Checkout), or to a page listing bank and mobile-money details (EVC Plus, Zaad, Sahal). Don't collect card numbers in a custom form.

### 1.2 Unsupported US tax claims
- The site says "501(c)(3) Tax-Exempt", "Make a Tax-Deductible Donation" and "100% Tax-Deductible" (`src/components/HeroSection.tsx:82`, `src/components/FinalCTA.tsx:36, 53`, and the donation modal).
- Neither the SYPD Profile nor the 2024–2028 Strategic Plan mentions 501(c)(3) status or tax deductibility.
- **Fix:** Remove these claims unless SYPD has a US-registered entity. This is a legal risk.

### 1.3 The contact form discards every message
- `src/app/contact/page.tsx:32-36` only sets `isSubmitted = true`, then tells the user that a confirmation receipt was sent.
- The same page presents this form as the channel for AAP, safeguarding and whistleblowing complaints, "handled confidentially within 48 hours". Those reports currently go nowhere.
- **Fix:** Connect the form to a real backend (an email service or form provider), or replace it with the `mailto:` and phone links.

### 1.4 The organogram shows staff who can't be verified
- Only 2 of the 16 names appear in either PDF: **Abdinoor Ibrahim** (Board Chair, through his email address) and **Hassan Ali** (Executive Director). The other 14 can't be found in any source document.
- Six headshots are each used for two different named people (`src/data/sypdData.ts`):
  - `board-chair.jpg`: "Mr Abdinoor Ibrahim Noor" and "Mr Guled Barre"
  - `exec-director.jpg`: "Mr Hassan Ali" and "Mr Omar Farah"
  - `mel-head.jpg`: "Mr Mohamed Abdi" and "Mr Abdirahman Shire"
  - `hr-head.jpg`: "Ms Faduma Ahmed" and "Ms Marian Jama"
  - `programs-head.jpg`: "Mr Ahmed Mohamed" and "Mr Liban Hassan"
  - `po-climate.jpg`: "Mr Dahir Hassan" and "Eng. Daud Warsame"
- The photos look like stock or AI-generated images.
- The chart shows a "VACANT" position publicly.
- **Fix:** Get the real staff list and real photos from SYPD, or show roles only.

### 1.5 Beneficiary stories show photos of other people
- "Amina Adan Hassan, 55" is captioned over `slide-girl.png`, a group photo of schoolgirls. Abdi Mohamed Ali's story has the same problem. See `src/app/stories/page.tsx:107-116` and `src/data/sypdData.ts:424, 436, 448`.
- Amina's story does come from the Strategic Plan. The full names "Hassan Ahmed Ali" and "Abdi Mohamed Ali" don't appear in either PDF.
- **Consent:** The page publishes a full name, age and IDP camp location for someone whose family was affected by clan violence. Confirm informed consent, or anonymise, under do-no-harm practice.

### 1.6 The `public/` folder is 1.1 GB, and 942 MB of it is never used
- `public/` holds 1,286 files (1,118 MB). The code references only 296 files (176 MB).
- Unused files:
  - `public/images/DKH_Project_Video_V1.mp4`: 647 MB
  - 982 unreferenced files under `public/images/Gallery/*` (original JPGs, extra shots, `context.txt`, `gallery_manifest.json`): 290 MB
  - `slide-youth.webp`: 5 MB, a byte-identical copy of `hero-loop.webp`
  - 5 create-next-app SVGs (`next.svg`, `vercel.svg` and others)
- All of this ships with every deploy.

---

## 2. Dark mode

Dark mode is the default for any visitor whose device is set to dark.

- **White panels with white text.** The `html.dark .bg-white` override is inside `@layer base` (`src/app/globals.css:99-107`), so Tailwind's utility classes override it. Forty `bg-white` surfaces stay white, while `html.dark .text-primary` (`globals.css:78`, not in a layer) turns headings white. For example, the contact form heading "Send a Formal Inquiry or Dispatch" is invisible, at a contrast ratio of 1.05:1.
- **Accent blue disappears.** `text-action-orange` (#07438C) on dark cards is 1.86:1 across 58 uses. It affects section kickers such as "Explore the Platform", "SYPD's National Operations" and "Multilateral Trust…".
- **Final CTA text.** The paragraph and guarantee strip use `text-surface-variant`, a background token, as their text colour (`src/components/FinalCTA.tsx:26, 50`), which gives 1.25:1 in dark mode. The donation modal subtitle has the same problem (`DonationModal.tsx:103`).
- **Footer links vanish on hover.** `hover:text-primary` gives 1.07:1 in dark mode (26 places).
- **Theme flash.** The theme class is applied in `useEffect` (`src/context/ThemeContext.tsx:19-33`), so dark-mode users see a light page first on every load.
- **Logo.** The dark letters of the logo disappear on the dark header. It needs a white version.
- **Fallback:** If time is short, launch with light mode only.

---

## 3. Performance

This matters most for visitors on Somali mobile data.

| Issue | Where | Detail |
|---|---|---|
| Hero video | `src/components/HeroSection.tsx:15-24` | `hero-video.mp4` is 43.5 MB and 160 seconds long, autoplays on mobile, and has no pause control. The webm (41 MB) is listed second, so it is never used. |
| Hidden fallback download | `HeroSection.tsx:25-29` | The `<img>` fallback inside `<video>` (`hero-loop.webp`, 5 MB animated) downloads on every visit anyway. |
| Stories page | `src/components/FieldGalleryShowcase.tsx:196-241`, `src/components/ui/carousel-squeeze.tsx:321-325, 534` | 25 carousels autoplay every 2 seconds, even off-screen. The page downloads 226 images (59 MB) on load, and none of them lazy-load. |
| Image optimisation turned off | `next.config.ts:5` | Because of `unoptimized: true`, every image is served at its original size. |
| Logo | `Navbar.tsx:52-59`, `Footer.tsx:32` | A 2932×1436 PNG (1.86 MB) loads on every page and displays about 48px tall. It visibly pops in late. |
| Page hero images | all route pages | 1.2–1.6 MB PNGs. The hero photo cards appear empty until they finish loading, even on localhost. |
| Team photos | `public/images/team` | 0.65–0.76 MB each, displayed at 185px. |
| Partner logo | `public/images/partners/direct-aid.svg` | 1.26 MB, because the SVG wraps a 4021×1724 raster image. |
| Unused font stylesheet | `src/app/layout.tsx:28-31` | The Material Symbols stylesheet blocks rendering and is used 0 times. |
| Third-party font | `carousel-squeeze.tsx:109-117, 397` | 25 duplicate `<style>` blocks load the Geist font from `cdn.21st.dev`. |
| Whole pages are client-side | all 8 `page.tsx` files | Every page starts with `"use client"`, even though Home and About have no state. |
| Global bundle | `AppLayout.tsx` → `DonationModal` | framer-motion and canvas-confetti load on every page. |

**Fixes:**
1. Delete the unused 942 MB.
2. Re-encode the hero video to a 10–20 second loop under 5 MB, and show only the poster on mobile.
3. Remove `unoptimized: true`. `sharp` is already installed.
4. Add `sizes` to the images that use `fill`.
5. Lazy-load the Stories galleries and show about 6 with a "view all" link.
6. Remove the Material Symbols link.

---

## 4. Accessibility

**Contrast checks**

| Pair | Ratio | Result |
|---|---|---|
| peace-slate on surface (light) | 7.14 | Pass |
| White on action blue | 9.59 | Pass |
| peace-slate on surface (dark) | 7.65 | Pass |
| Green #6CB739 text on white | 2.48 | **Fail** (70 `text-secondary` uses) |
| Action blue #07438C on dark card #09182d | 1.86 | **Fail** |
| FinalCTA `text-surface-variant` on primary (dark) | 1.25 | **Fail** |
| `hover:text-primary` (dark) | 1.07 | **Fail** |
| Tertiary text (dark), `about/page.tsx:148` | 1.90 | **Fail** |
| peace-slate/60 on surface-container, `about/page.tsx:226` | 2.70 | **Fail** |

**Other issues**

- **Pop-ups don't work by keyboard.** The donation modal has no `role="dialog"` or `aria-modal`, doesn't close on Escape, and doesn't trap focus, move focus in, return focus afterwards, or lock page scrolling. I tested this in the browser. The organogram profile modal (`OrganogramChart.tsx:288`) has the same gaps. The gallery lightbox (`FieldGalleryShowcase.tsx:355`) doesn't respond to Escape or the arrow keys.
- **Organogram cards are clickable `<div>`s** (`OrganogramChart.tsx:43`), so keyboard users can't open any profile.
- **Animations ignore reduced-motion settings.** No CSS respects `prefers-reduced-motion` (marquee, glows, shimmer, pulses, hero video).
- **Duplicate marquee links.** The partner marquee has 52 focusable links, 26 of them duplicates, and none are `aria-hidden` (`src/app/page.tsx:214`).
- **Unlinked form labels.** On the contact form and in the donation modal, labels aren't connected to their inputs: no `id` or `htmlFor`.
- **Placeholder-only inputs.** The newsletter field (`Footer.tsx:143`), project search (`projects/page.tsx:139`) and gallery search (`FieldGalleryShowcase.tsx:169`) have placeholder text but no label.
- **Missing ARIA attributes.**
  - The icon-only clear button in the gallery search has no label (`FieldGalleryShowcase.tsx:177`).
  - The mobile menu button has no `aria-expanded` (`Navbar.tsx:103`).
  - Toggle buttons (amounts, frequency, filters, pillar tabs) have no `aria-pressed`.
- **Focus outlines removed.** `focus:outline-none` is set on the logo links and the menu button (`Navbar.tsx:49, 106`, `Footer.tsx:29`).
- **Uninformative alt text.** Lightbox thumbnails use "Thumb N" (`FieldGalleryShowcase.tsx:437`).

---

## 5. SEO and sharing

- **Same title everywhere.** All 8 pages use the title "SYPD · Sustainable Development & Peace Building Initiatives". The pages are client components, so they can't export `metadata`. Move `"use client"` down into child components, then add a `metadata` export to each page.
- **No link previews.** There are no Open Graph or Twitter tags, so links shared on WhatsApp, LinkedIn or Facebook show no preview.
- **No crawler files.** `/robots.txt` and `/sitemap.xml` both return 404.
- **Default favicon.** `src/app/favicon.ico` is the default create-next-app icon, and it takes priority over the logo set in `layout.tsx:16`.
- **Unbranded 404.** The site uses Next's default 404 page. There is no `not-found.tsx`.
- **Counters show "0+" in the HTML.** The server HTML says "0+ Projects Implemented" and "0+ Districts" until JavaScript runs (`TrustAndMetricsStrip.tsx:97, 115`). Search engines and no-JS visitors see zero.
- **Skipped heading levels.**
  - Home goes from h1 to h3 (`TrustAndMetricsStrip.tsx:149`).
  - Contact has no h2 at all.
  - About, Partners and Where We Work go from h2 to h4.

---

## 6. Broken or misleading functionality

- **Fake newsletter.** The footer signup uses `setTimeout` to fake a success message (`Footer.tsx:12-19`).
- **Placeholder social links.** All 4 footer social icons link to `href="#"` (`Footer.tsx:48, 55, 62, 69`).
- **Footer pillar links don't work.** All 6 "Strategic Pillars" links in the footer (for example `/programs#gender-inclusion`, `Footer.tsx:84-101`) open Climate Resilience. The Programs page has no element ids and never reads the URL hash. Confirmed in the browser.
- **Gallery label bugs.**
  - The overlay reads "Photo 0$1" because of a literal `$` in the JSX (`FieldGalleryShowcase.tsx:88`).
  - The description says "Photo 010 of 10", and "of 10" is hard-coded while each gallery has 9 photos (line 83).
  - The hint "Click any slat or photo for lightbox" is wrong: clicking a slat only moves the carousel (`carousel-squeeze.tsx:435`).
- **Exit animations never run.** `DonationModal.tsx:73` returns `null` before `AnimatePresence` renders.
- **No-op animation classes.** `animate-in`, `zoom-in-95` and `slide-in-*` do nothing, because the plugin they need isn't installed.

---

## 7. Design feedback

### Working well
- The navy and green palette taken from the logo is applied consistently. Card radii, spacing and type hierarchy are coherent.
- The Projects page is strong. Search and sector filters work, the cards are easy to scan, and real budgets and donor names build credibility.
- The interactive map of operating areas is a good idea.
- Mobile holds up: no page scrolls sideways at 375px, and the menu is clean.
- The donation modal looks clean and trustworthy. It just needs to be real.

### What I would change
- **Copy tone.** Phrases like "A Complete Portal Into SYPD's National Operations", "Multilateral Trust & Institutional Fiduciary Integrity", "Uncompromising Stewardship & Audited Distribution" and "Send a Formal Inquiry or Dispatch" sound corporate or generated, and cold for an NGO. Plainer, warmer language with real people would land better with donors. "CHEFGS" means nothing to visitors.
- **Badge overload.** Each homepage card has a category pill, a badge, a tag and a CTA label competing for attention. Keep one.
- **Every hero looks the same.** Each page uses an eyebrow pill, a two-tone headline, a glass photo card and chips. That's consistent, but it gives no sense of place. Give Stories and Where We Work a different, photo-led hero.
- **The homepage card grid repeats the navigation.** Its 6 cards match the 6 menu items, and `youth-workshop.png` appears on two of them. Replace the grid with one strong story, the key numbers and one clear CTA.
- **Logo.** At 48px the tagline can't be read. It needs a white version for dark backgrounds.
- **Floating theme toggle.** On mobile it covers body text (the About hero and the 404 message) and duplicates the toggle in the menu. Remove it.
- **Stories is too long.** The page is about 19,500px tall on desktop and 34,000px on mobile.
- **Programs reads like an internal logframe** ("Indicators", "Assumption: Cooperative weather"). Summarise it for the public and link the Strategic Plan PDF. The PDFs currently sit in `src/`, so they aren't served.
- **Layout bugs.**
  - The Tier 4 organogram cards overlap each other by about 12px at 1440px.
  - The map pin labels collide in Hirshabelle (Matabaan, Mahaas and Beledweyne).
  - The map's details panel has a large empty gap between the description and the interventions box.
  - The last sector chip on Projects ("Emergency & Shelter") is clipped by 13px at 1440px, and its row gets a horizontal scrollbar.
  - The final CTA's guarantee strip wraps unevenly: two items on one line, then one on its own.
  - The metric badges wrap or truncate on mobile ("Zero Defau…").

---

## 8. Facts to confirm with the client

| Claim on the site | What the source documents say |
|---|---|
| "5 Federal Member States" (Hero, Home, About, Where We Work) | The Strategic Plan lists 4: South West, Jubaland, Hirshabelle and Galmudug. Banadir is not a member state. The Profile also mentions Somaliland and Kenya. |
| "20 Years", "2004 – 2024+" | Founded 24 August 2004, which makes it 22 years in 2026. |
| "30+ partners" (7 places) | The Profile says 30+, but the site lists only 26. Add the missing partners or change the number. |
| "Searchable… 150+ projects" | The Profile says 150+, but the site shows 18. Say "selected projects". |
| "Zero Default", "Clean Audits", 88% / 7% / 5% spending split, "zero unqualified audit discrepancies" | Not in either PDF. "Audit" appears only as the title "Board Auditor". |
| Spending split labels | The bar says "5% Resource Development" but the legend says "5% Fundraising" (`TrustAndMetricsStrip.tsx:180` vs `205`). |
| USAID shown as a current "Verified Partner" | USAID wound down its programmes in 2025. Label it as a past donor if that's the case. Logo use for the UN, EU and other partners usually needs their permission. |
| Hotline | "+252 61 5522100" (`partners/page.tsx:222`) vs "toll-free hotline (2340)" (`galleryData.ts:49, 62`). |
| Emails | Both `sypd.org` and `sypdsomalia.org` appear, and both are in the Profile. Confirm which is live. There are 9 role mailboxes (secretary@, treasury@ and others) that I couldn't verify. The landline "850823" has no country code. |
| Staff names | See 1.4. Only Abdinoor Ibrahim and Hassan Ali can be verified. |

**Spelling to standardise:**
- Place names: Balcad / Bal'ad; Habaasweyne / Habasweyne; Beledsalaam / Beled Salam; South-West / Southwest.
- British vs American English: `authorises`, `catalogue` and `Programme` sit alongside American spellings elsewhere.

---

## 9. Code housekeeping

- **ESLint:** 8 errors and 38 warnings (33 of the warnings are unused variables or imports).
  - Errors in live code: `set-state-in-effect` (`DonationModal.tsx:43`, `ThemeContext.tsx:23`), `purity` from `Math.random` (`DonationModal.tsx:437`), `refs` (`carousel-squeeze.tsx:213`) and `immutability` (`ThemeContext.tsx:24`).
- **TypeScript:** `tsc --noEmit` reports 0 errors.
- **Dead code:** 1,241 lines are never imported: `CorePillarsBento`, `GeographicFootprint`, `QuickDonateWidget`, `Testimonials`, `UnifiedSlicedCarousel`, `UrgentCampaignSpotlight`, `ui/circular-gallery` and `src/types/index.ts`.
- **Duplicate folders:** the root `components/ui/*` and `lib/utils.ts` are one-line re-exports that nothing imports.
- **Leftover files:** `scratch_find_images.py`, the default create-next-app `README.md` and the default SVGs in `public/`.
- **Dev comments** left in `OrganogramChart.tsx:37, 199` ("user's reference image", "Style of Simphiwe Hamilton").
- **Theme tokens:**
  - `--color-action-orange` is actually blue (#07438C) and duplicates `--color-sypd-blue`.
  - `--color-surface-container-lowest` is defined only under `html.dark`, so the 12 uses of `bg-surface-container-lowest` do nothing in either theme.
  - `--font-inter: var(--font-inter)` refers to itself (`globals.css:47`).
- **Deprecated prop:** `priority` on `next/image` is deprecated in Next 16 (use `preload`). It's used in 9 places.
- **No git repository.** Initialise one before handoff so changes can be tracked.

---

## Suggested fix order

- [ ] **1. Honesty fixes.** Remove or replace the fake donation, contact and newsletter flows, and remove the 501(c)(3) and tax-deductible claims.
- [ ] **2. Real people** (needs the client). Get the real staff names and photos, confirm beneficiary photos and consent, and verify the audit and partner claims.
- [ ] **3. Weight.** Delete the unused 942 MB, re-encode the hero video, re-enable image optimisation and lazy-load Stories.
- [ ] **4. Dark mode.** Fix the `@layer` override and the text tokens, or launch with light mode only.
- [ ] **5. Metadata and accessibility.** Add per-page titles, OG tags, a favicon, a branded 404, `robots.txt` and a sitemap. Make the modals keyboard-accessible, link the form labels and support reduced motion.
- [ ] **6. Polish.** Do a copy pass, fix the layout bugs, fix the footer links, and remove dead code and leftover files.
