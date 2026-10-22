# SYPD Website Pre-Handoff Audit

**Audit date:** September 30, 2026  
**Scope:** Visual design, accessibility, responsiveness, theming, performance, implementation integrity, and handoff readiness  
**Method:** Live review at desktop and mobile widths, light/dark theme inspection, source review, automated design scan, ESLint, and production build verification

## Executive verdict

The light-theme design is strong, credible, and distinctly SYPD, but the site is **not ready for production handoff yet**.

The visual foundation should be preserved. The remaining work is primarily production hardening: real form integrations, dark-theme repair, mobile overlay cleanup, accessibility, and media optimization.

### Ratings

| Area | Rating |
|---|---:|
| Visual design — light theme | 8/10 |
| Brand specificity | 8/10 |
| UX clarity | 7/10 |
| Responsive design | 6/10 |
| Accessibility | 4/10 |
| Performance | 3/10 |
| Handoff readiness | 4/10 |

### Technical audit score

| Dimension | Score | Main issue |
|---|---:|---|
| Accessibility | 1/4 | Severe dark-mode contrast and modal/form gaps |
| Performance | 1/4 | 43.5 MB hero video and 1.04 GB public directory |
| Responsive design | 2/4 | Good stacking, but the floating theme switcher obstructs mobile content |
| Theming | 1/4 | Dark mode makes major sections and payment fields unreadable |
| Implementation integrity | 1/4 | Donation, contact, and newsletter flows simulate success |
| **Total** | **6/20** | **Poor — fix blockers before handoff** |

## What works well

- The navy, blue, and green palette is appropriate for peacebuilding, sustainability, and institutional credibility.
- The homepage hero has excellent hierarchy, strong field imagery, and clear primary actions.
- The site feels grounded in SYPD through Somali field photography, locations, programs, metrics, and the organizational story.
- Desktop composition is polished and consistent. Cards, section rhythm, navigation, and information density are generally handled well.
- Mobile content stacks cleanly, and the navigation drawer is understandable.
- The light-theme homepage has a coherent visual journey from mission to evidence, programs, partners, and calls to action.
- The production build and ESLint pass, all eight routes prerender successfully, and no runtime console errors were found.

## Priority findings

### P0 — Dark mode is substantially broken

In dark mode, white cards remain white while `.text-primary` becomes nearly white. This makes headings, project metadata, organogram names, and payment values disappear.

Visually verified examples:

- Project cards have approximately white text on white backgrounds.
- About-page headings and Vision/Mission content become nearly invisible.
- Donation card-number, expiry, and CVC fields compute to `#f8fafc` on white: approximately **1.05:1 contrast**.
- Some dark CTA text combinations measure only **1.25:1–2.52:1**, far below the WCAG AA requirement of 4.5:1 for normal text.

Evidence:

- `src/app/globals.css:78` globally changes `.text-primary` in dark mode.
- The project contains approximately 109 `bg-white` references.
- The attempted dark overrides for `bg-white` do not reliably win in the current CSS cascade.

**Recommendation:** Rebuild dark mode through semantic surface and text tokens rather than forcing `.text-primary` to white. If this cannot be completed before handoff, temporarily remove the theme switcher and ship light-only.

### P0 — Production-looking forms simulate real transactions

The donation experience presents itself as a secure payment flow, but it currently:

- Inserts default card details.
- Accepts missing donor information by generating placeholder identity data.
- Waits 1.2 seconds and shows a fabricated success state and receipt.
- Claims bank-grade encryption and tax-deductible processing without a connected payment processor.

Evidence:

- `src/components/DonationModal.tsx:63` implements the client-only success timer.
- `src/components/DonationModal.tsx:333` contains default card details.
- `src/components/DonationModal.tsx:410` presents an authorization action.

The contact form similarly claims an inquiry was logged and a confirmation receipt dispatched, but only changes local React state:

- `src/app/contact/page.tsx:32`
- `src/app/contact/page.tsx:213`

The newsletter form also presents a local success state without a backend:

- `src/components/Footer.tsx:10`

**Recommendation:** Connect these experiences to real services, or disable them and clearly label them as preview functionality. Do not hand off the current behavior as a live production website.

### P1 — The mobile theme control obstructs content

The fixed right-edge theme switcher overlaps:

- Hero paragraphs.
- Mobile navigation items.
- Donation fields and payment-method controls.
- Page content at narrow widths.

It also duplicates the theme control already available inside the mobile menu.

Evidence: `src/components/ThemeToggle.tsx:79`

**Recommendation:** Hide the dock on mobile and whenever a modal is open. Keep theme selection inside the mobile menu or another settings surface.

### P1 — Donation modal accessibility is incomplete

The donation modal lacks:

- `role="dialog"` and `aria-modal="true"`.
- A programmatically associated title.
- Focus trapping and focus restoration.
- Escape-key handling.
- Background scroll locking.
- Properly associated form labels.

This can make the payment flow difficult or impossible to use with a keyboard or screen reader.

**Recommendation:** Implement an accessible dialog pattern and associate every label using `htmlFor` and `id`.

### P1 — Media payload is much too large

| Asset | Size |
|---|---:|
| `public/videos/hero-video.mp4` | 43.5 MB |
| `public/videos/hero-video.webm` | 41.4 MB |
| `public/images/SYPD-Logo-original.png` | 1.86 MB |
| `public/images/DKH_Project_Video_V1.mp4` | 647 MB |
| Entire `public` directory | 1.04 GB across 1,286 files |

The 647 MB DKH video was not referenced by the reviewed application code. The hero MP4 is listed before the WebM source in `src/components/HeroSection.tsx:23`, so many browsers will request the MP4.

The browser also reported an LCP warning for `/images/youth-workshop.png`.

**Recommendation:**

- Compress the hero to a short, low-bitrate loop.
- Prefer an optimized WebM/AV1 source before MP4.
- Use a static poster for reduced-motion users.
- Optimize or replace the large PNG logo.
- Remove unused media from the deployable `public` directory.
- Review gallery loading and delivery rather than deploying every source image eagerly.

### P1 — Motion accessibility is missing

The website includes autoplay video, an infinite partner marquee, pulsing elements, shimmer, floating graphics, animated counters, and entrance animations. Most do not respond to `prefers-reduced-motion`.

The codebase contains approximately 41 motion references, while reduced-motion handling was found only in the carousel component.

**Recommendation:** When reduced motion is requested:

- Replace the background video with its poster.
- Stop the partner marquee.
- Remove decorative pulses, shimmer, floating, and entrance transforms.
- Preserve useful state changes without movement.

### P2 — Form labels and focus indicators need improvement

- The footer newsletter field does not have a programmatic label.
- Several contact and donation labels are visually present but not associated using `htmlFor` and `id`.
- The project search field depends on placeholder text instead of a label.
- Approximately 19 controls remove the browser focus outline without consistently providing a visible replacement.
- The mobile menu button does not expose `aria-expanded` or `aria-controls`.

**Recommendation:** Add connected labels, visible `focus-visible` rings, and the correct expanded-state attributes.

### P2 — Placeholder links look operational

Four footer social/channel icons link to `#`:

- `src/components/Footer.tsx:48`
- `src/components/Footer.tsx:55`
- `src/components/Footer.tsx:62`
- `src/components/Footer.tsx:69`

**Recommendation:** Connect them to real destinations or remove them until the destinations are available.

### P2 — The homepage is visually over-credentialed

The site uses many pills, audit claims, badges, metrics, partner logos, and institutional phrases simultaneously. Individually they are useful, but together they compete for attention and can make genuine evidence feel like marketing decoration.

**Recommendation:** Reduce approximately 20–25% of the microcopy and badges. Keep the strongest evidence and link important claims to supporting documents.

### P2 — Important claims need visible evidence

Claims such as the following should link to verifiable documentation:

- `501(c)(3)` tax exemption.
- Zero fiduciary discrepancies/defaults.
- Clean audits.
- Tax deductibility.
- Named donor and implementation relationships.
- Beneficiary, project, district, and portfolio totals.

If any claim or person is placeholder content, remove it before public release. Staff names, roles, portraits, partner logos, and contact details should all be validated by SYPD.

### P2 — Theme hydration causes a visual flash

The theme provider initializes in light mode and applies the saved or system dark preference in a client-side effect. This creates a visible light-to-dark flash during loading.

Evidence: `src/context/ThemeContext.tsx`

**Recommendation:** Apply the resolved theme before first paint or use a server-compatible theme strategy.

### P3 — Visual identity could become more distinctive

The product-specific imagery and content are strong, but Inter, repeated rounded cards, blue pill badges, and glass overlays are common patterns. The automated detector reported three overused-font warnings in the carousel component.

**Recommendation:** Preserve the current structure while introducing a more distinctive editorial heading typeface and reducing repetitive badge/card treatments.

### P3 — Project filters need clearer overflow behavior

The desktop filter row can clip the last category without clearly signaling that the row scrolls horizontally.

**Recommendation:** Wrap the filters where space permits or add a visible fade/scroll affordance.

## Design assessment

### Design specificity

The site feels substantially authored for SYPD rather than being a completely interchangeable NGO template. Somali field imagery, regional locations, program pillars, maps, organizational history, and institutional records provide real specificity.

The parts that feel generic are primarily the typography and repeated component styling: Inter, large rounded cards, pill badges, glass overlays, and blue CTA treatments.

### Visual hierarchy

The homepage hero and major page headers are successful. Headings, imagery, and primary actions are easy to locate. Inner pages use a repeatable hero-plus-evidence structure that supports scanning.

Hierarchy weakens in areas with many small badges, metrics, and claims. Fewer competing labels would make the most important content feel more authoritative.

### Responsive behavior

The primary grids stack well, navigation collapses successfully, typography scales reasonably, and calls to action remain usable. The main responsive defect is the fixed theme dock, which obstructs content and modal controls on narrow screens.

### Emotional and institutional tone

The visual tone is confident, serious, and mission-oriented. Field imagery keeps the site human. The strongest emotional sequence is the homepage hero followed by metrics and program entry points.

Credibility is weakened when prototype behaviors imitate real financial or communication outcomes. Trust-sensitive interactions need to be genuine or clearly marked as unavailable.

## Recommended handoff sequence

1. Replace, integrate, or disable the simulated donation, contact, and newsletter flows.
2. Fix dark mode or temporarily ship light-only.
3. Remove the mobile floating theme dock and harden modal behavior.
4. Compress and prune media assets.
5. Complete keyboard, labeling, focus, contrast, and reduced-motion work.
6. Verify every institutional, financial, donor, staff, contact, and tax claim.
7. Reduce excess badges and microcopy.
8. Run a final desktop/mobile visual QA pass in both supported themes.
9. Re-run the accessibility, performance, and implementation audit.

## Verification notes

- `npm run lint`: passed.
- `npm run build`: passed.
- TypeScript compilation: passed.
- Static generation: passed for `/`, `/about`, `/contact`, `/partners`, `/programs`, `/projects`, `/stories`, and `/where-we-work`.
- Automated design detector: three overused-font warnings in `src/components/ui/carousel-squeeze.tsx`.
- Browser console: no errors; one LCP image warning.
- Desktop and mobile views were reviewed.
- Light and dark themes were reviewed.
- The temporary local development server used for review was stopped.
- No source-code fixes were made as part of this audit.
