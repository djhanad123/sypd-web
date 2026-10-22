export interface ProjectItem {
  id: number;
  title: string;
  activities: string;
  targetArea: string;
  dates: string;
  value: string;
  fundingAgency: string;
  contactPerson?: string;
  sector: "WASH" | "Food Security & Livelihoods" | "Education & TVET" | "Protection & GBV" | "Peacebuilding" | "Emergency & Shelter";
}

export interface StrategicPillarData {
  id: string;
  letter: string;
  title: string;
  objective: string;
  iconName: string;
  color: string;
  strategies: {
    strategy: string;
    activities: string[];
    outputs: string;
    indicators: string;
    assumptions: string;
  }[];
}

export interface AreaOffice {
  id: string;
  name: string;
  state: string;
  region: string;
  type: "HQ" | "Area Office" | "Liaison";
  coords: { x: number; y: number }; // Relative percentage or SVG coordinates
  description: string;
  keyInterventions: string;
}

export const SYPD_KEY_STATS = {
  yearsActive: "20+",
  establishedDate: "24th August 2004",
  founder: "Local Somali National",
  beneficiariesReached: "4.3 Million+",
  projectsImplemented: "150+",
  districtsCovered: "71+",
  fundingPartners: "30+",
  fundsManaged: "$30 Million+",
  statesCovered: 5,
  areaOfficesCount: 9,
  resourceMobilizationTarget: "$14,486,084.00 (2024–2028)",
};

export const SYPD_CONTACT = {
  hq: {
    title: "Mogadishu National Headquarters",
    address: "Afisiyoni Street, 2nd Avenue, opposite 21st October Secondary School, Waberi District, Banadir Region, Mogadishu, Somalia",
    telephones: ["+252 61 5522100", "+252 61 9999640"],
    officeLine: "850823",
    emails: ["info@sypd.org", "Hassan.ali@sypdsomalia.org", "chairperson@sypdsomalia.org", "sypdmog@yahoo.com"],
  },
  liaison: {
    title: "Nairobi Regional Liaison Office",
    location: "Nairobi, Kenya",
    email: "kenya@sypd.org",
  },
  website: "www.sypd.org",
};

export const SYPD_CORE_VALUES = [
  {
    letter: "I",
    title: "Integrity & Professionalism",
    description: "We are committed to conducting our operations in a transparent, honest, and accountable manner across all stakeholder engagements.",
  },
  {
    letter: "N",
    title: "Neutrality",
    description: "We embrace impartiality as a cornerstone of our organization, fostering trust, respect, and equitable treatment for all communities.",
  },
  {
    letter: "C",
    title: "Commitment",
    description: "We are motivated by a steadfast commitment to working alongside vulnerable populations and helping them rebuild resilient lives.",
  },
  {
    letter: "I",
    title: "Inclusion & Innovativeness",
    description: "We are obligated to be inclusive and creative when designing interventions, actively engaging women, youth, and marginalized groups.",
  },
  {
    letter: "S",
    title: "Sustainability",
    description: "We prioritize long-term, locally rooted solutions that create lasting positive impact, reducing dependency on perpetual foreign aid.",
  },
  {
    letter: "D",
    title: "Do-No-Harm",
    description: "We value life, ensuring our programs promote social cohesion and peaceful co-existence without exacerbating local divisions.",
  },
];

export const CHEFGS_PILLARS: StrategicPillarData[] = [
  {
    id: "climate-resilience",
    letter: "C",
    title: "Climate Resilience, Water Infrastructure and Ecosystem Rebuilding",
    objective: "To enhance climate resilience, improve water infrastructure, and promote ecosystem rebuilding initiatives to safeguard communities and ecosystems against the impacts of climate change and environmental degradation in Somalia for the next five years.",
    iconName: "Droplets",
    color: "secondary",
    strategies: [
      {
        strategy: "Implementing climate-resilient practices at community level to enhance adaptive capacity.",
        activities: ["Conducting community workshops on climate-resilient agriculture and disaster risk reduction.", "Training farmers in soil conservation and sustainable land management."],
        outputs: "Increased adoption of climate-resilient agricultural practices by communities.",
        indicators: "Percentage increase in adoption of climate-resilient farming techniques.",
        assumptions: "High community participation and favorable local security conditions.",
      },
      {
        strategy: "Developing and rehabilitating water infrastructure for reliable and equitable access to safe water.",
        activities: ["Rehabilitating and constructing water supply systems, boreholes, shallow wells, and rainwater harvesting facilities.", "Installing solar-powered pumping systems in drought-prone corridors."],
        outputs: "Improved access to safe potable water through the construction of sustainable water infrastructure.",
        indicators: "Number of water infrastructure projects completed; number of households served.",
        assumptions: "Adequate capital resources and supportive regional water authorities.",
      },
      {
        strategy: "Promoting restoration activities to rebuild degraded ecosystems and enhance biodiversity.",
        activities: ["Facilitating community tree planting campaigns and coastal mangrove rehabilitation initiatives.", "Developing participatory land-use conservation guidelines."],
        outputs: "Enhanced biodiversity and ecosystem services through community restoration efforts.",
        indicators: "Increase in vegetation cover and hectares of restored riverine/pastoral ecosystems.",
        assumptions: "Cooperative weather and collective communal land stewardship.",
      },
    ],
  },
  {
    id: "health-nutrition",
    letter: "H",
    title: "Health and Nutrition",
    objective: "To enhance access to quality healthcare services and nutritional support for vulnerable communities across Jubaland, Southwest, Hirshabelle, and Galmudug States for the next five years.",
    iconName: "Activity",
    color: "action-orange",
    strategies: [
      {
        strategy: "Improve and expand healthcare facilities and services to ensure access for vulnerable communities.",
        activities: ["Renovating and equipping rural health centers and mobile clinics in underserved districts.", "Upgrading medical diagnostic tools and essential pharmaceutical supplies."],
        outputs: "Improved infrastructure of healthcare facilities including renovated maternity and clinical blocks.",
        indicators: "Percentage increase in functional healthcare facilities in target states.",
        assumptions: "Continued medical procurement pathways and clinical staffing availability.",
      },
      {
        strategy: "Enhance the skills and knowledge of healthcare workers to provide quality care and nutritional support.",
        activities: ["Training frontline healthcare staff on best practices in healthcare delivery, maternal health, and acute malnutrition management.", "Conducting community health worker outreach sessions."],
        outputs: "Increased number of certified healthcare workers trained in clinical and nutritional support.",
        indicators: "Number of healthcare workers trained in nutrition and healthcare delivery.",
        assumptions: "Effective collaboration with Federal and State Ministries of Health.",
      },
      {
        strategy: "Distribute nutritional supplements and fortified foods to vulnerable populations.",
        activities: ["Screening and treating Moderate (MAM) and Severe Acute Malnutrition (SAM) among children under five and pregnant/lactating mothers.", "Distributing targeted nutritional supplements."],
        outputs: "Enhanced nutritional status among vulnerable populations.",
        indicators: "Measurable reduction in stunting and wasting rates among children under five.",
        assumptions: "Timely delivery of supplementary feeding supplies from humanitarian partners.",
      },
    ],
  },
  {
    id: "economic-empowerment",
    letter: "E",
    title: "Economic Empowerment & TVET",
    objective: "To promote economic empowerment and create sustainable livelihood opportunities for vulnerable populations, women, and youth in Somalia over the next five years.",
    iconName: "TrendingUp",
    color: "primary",
    strategies: [
      {
        strategy: "Offer financial literacy training, access to microfinance, and mentorship to facilitate small business establishment.",
        activities: ["Organizing entrepreneurship workshops and business development trainings.", "Delivering market-oriented Technical and Vocational Education (TVET) in ICT, tailoring, renewable solar energy, and agribusiness."],
        outputs: "Number of new sustainable micro-enterprises established by vulnerable populations.",
        indicators: "Growth in household income (in USD) among program participants.",
        assumptions: "Strong private sector linkages and microfinance repayment integrity.",
      },
      {
        strategy: "Facilitate access to markets and value chains for local producers.",
        activities: ["Providing seed grants and micro-loans for business startups.", "Supporting agricultural cooperatives and women-led community enterprises for collective marketing."],
        outputs: "Increase in income levels among targeted beneficiaries.",
        indicators: "Number of local markets accessed and value chain linkages established.",
        assumptions: "Favorable regional economic stability and market mobility.",
      },
      {
        strategy: "Implement social safety nets and cash transfer programs.",
        activities: ["Executing Cash-Based Transfers (CBT) and Cash-for-Work (CFW) programs for crisis-affected households."],
        outputs: "Increased financial stability and improved living standards during post-disaster recovery.",
        indicators: "Percentage increase in household income and dietary diversity scores.",
        assumptions: "Reliable mobile money distribution platforms across regional nodes.",
      },
    ],
  },
  {
    id: "food-security",
    letter: "F",
    title: "Food Security and Agricultural Development",
    objective: "To enhance food security and promote sustainable agricultural development across Somalia over the next five years.",
    iconName: "Wheat",
    color: "secondary",
    strategies: [
      {
        strategy: "Enhance agricultural infrastructure to increase productivity and market access for riverine and rainfed farmers.",
        activities: ["Rehabilitating gravity irrigation canals, water control sluice gates, and feeder farm roads.", "Installing solar-powered drip irrigation kits and riverboat crossings."],
        outputs: "Increased agricultural productivity and crop yields.",
        indicators: "Percentage increase in crop yield (maize, cowpeas, sesame, tomatoes) compared to baseline data.",
        assumptions: "Reliable river flows and community canal maintenance committees.",
      },
      {
        strategy: "Provide training, education, and extension services to smallholder farmers.",
        activities: ["Conducting demonstration farms on sustainable agronomy, pest management, and post-harvest storage."],
        outputs: "Improved resilience of farmers against cyclical climate and pest shocks.",
        indicators: "Number of smallholder farmers trained in modern agronomic practices.",
        assumptions: "Active farmer group attendance and peer-to-peer knowledge transfer.",
      },
      {
        strategy: "Ensure access to certified seeds, agricultural tools, and livestock restocking.",
        activities: ["Distributing drought-tolerant seed packages, hand tools, and fertilizer.", "Restocking goats and livestock for vulnerable agro-pastoral households."],
        outputs: "Restoration of household productive asset bases and food sovereignty.",
        indicators: "Number of households with replenished herds and seasonal harvest surpluses.",
        assumptions: "Disease-free livestock procurement and certified seed quality.",
      },
    ],
  },
  {
    id: "gender-inclusion",
    letter: "G",
    title: "Gender Equality, Social Inclusion and Protection",
    objective: "To advance gender equality, promote social inclusion, and support the strengthening of protection mechanisms in Somalia, ensuring the empowerment of women, youth, and persons with disabilities for the next five years.",
    iconName: "ShieldHeart",
    color: "action-orange",
    strategies: [
      {
        strategy: "Conduct training programs and awareness campaigns on gender equality, social inclusion, and protection rights.",
        activities: ["Organizing workshops on protection rights, child safeguarding, and prevention of Gender-Based Violence (GBV).", "Sensitizing traditional leaders, police, and civil society on legal frameworks."],
        outputs: "Increased awareness and understanding of protection standards and gender rights among stakeholders.",
        indicators: "Number of individuals and community leaders trained on protection rights.",
        assumptions: "Willingness of community institutions to adopt inclusive norms.",
      },
      {
        strategy: "Facilitate community-led initiatives that empower marginalized groups to participate in decision-making.",
        activities: ["Establishing community-based protection networks and psychosocial support centers in IDP settlements.", "Supporting women-headed households through dedicated legal aid and emergency shelter."],
        outputs: "Strengthened community safety nets and survivor support systems.",
        indicators: "Participation rates of women and persons with disabilities in local councils.",
        assumptions: "Safe operating environment for female community advocates.",
      },
    ],
  },
  {
    id: "stabilization-governance",
    letter: "S",
    title: "Stabilization, Governance and Land Rights",
    objective: "To contribute to stabilization and improved governance by strengthening local institutions, promoting community-led initiatives for peacebuilding, enhancing transparency, and advocating for secure land and property rights.",
    iconName: "Scale",
    color: "tertiary",
    strategies: [
      {
        strategy: "Strengthen local institutions by providing training and technical assistance in public administration.",
        activities: ["Conducting capacity-strengthening sessions for local district council officials on governance, financial management, and civic service delivery."],
        outputs: "Enhanced capacity and operational skills of local municipal administrations.",
        indicators: "Percentage increase in local institutional performance assessments.",
        assumptions: "Continued devolution and institutional commitment from Federal Member States.",
      },
      {
        strategy: "Facilitate community-led peacebuilding, inter-clan reconciliation, and mediation.",
        activities: ["Convening customary peace dialogues under acacia trees with clan elders, youth ambassadors, and religious leaders to peacefully resolve pasture and water resource disputes."],
        outputs: "Strengthened social cohesion, inter-clan trust, and active peace conciliation committees.",
        indicators: "Reduction in local armed clashes and resource dispute frequency in target corridors.",
        assumptions: "Neutrality of mediators and respect for customary dispute mechanisms.",
      },
      {
        strategy: "Empower communities through secure Housing, Land, and Property (HLP) rights.",
        activities: ["Providing legal education on land tenure, registration protocols, and dispute arbitration.", "Facilitating participatory land-use planning with local authorities to protect vulnerable IDPs from forced evictions."],
        outputs: "Development of community land use agreements reflecting the rights of vulnerable families.",
        indicators: "Number of households with secure land tenure documentation; reduced eviction rates.",
        assumptions: "Supportive municipal land registries and equitable customary arbitration.",
      },
    ],
  },
];

export const SYPD_AREA_OFFICES: AreaOffice[] = [
  {
    id: "mogadishu",
    name: "Mogadishu (National HQ)",
    state: "Banadir Region",
    region: "Banadir",
    type: "HQ",
    coords: { x: 462, y: 700 },
    description: "National Headquarters directing strategic policy, countrywide operations, donor relations, and emergency response coordination.",
    keyInterventions: "National leadership, urban IDP emergency shelter, vocational incubation, and cash assistance across Banadir camps.",
  },
  {
    id: "beledweyne",
    name: "Beledweyne Area Office",
    state: "Hirshabelle State",
    region: "Hiraan",
    type: "Area Office",
    coords: { x: 405, y: 555 },
    description: "Major regional humanitarian hub coordinating riverine flood management, emergency water filtration, and agriculture along the Shabelle River.",
    keyInterventions: "Emergency Emwatkit water purifiers at El-Jaale, river embankment flood barriers, canal rehabilitation, and goat restocking.",
  },
  {
    id: "baidoa",
    name: "Baidoa Area Office",
    state: "South-West State",
    region: "Bay",
    type: "Area Office",
    coords: { x: 330, y: 640 },
    description: "Strategic operation center serving vulnerable IDP settlements and rural agro-pastoralist communities across Bay and Bakool.",
    keyInterventions: "Multipurpose cash transfers, communal VIP latrines, shallow well rehabilitation, nutrition screening, and women TVET centers.",
  },
  {
    id: "jowhar",
    name: "Jowhar Area Office",
    state: "Hirshabelle State",
    region: "Middle Shabelle",
    type: "Area Office",
    coords: { x: 440, y: 660 },
    description: "Hub for agricultural value chain development, sustainable irrigation systems, and women's economic empowerment along the river basin.",
    keyInterventions: "Irrigation canal rehabilitation, farmer seed distribution, riverboat construction, and flood preparedness planning.",
  },
  {
    id: "buulo-burte",
    name: "Buulo-Burte Area Office",
    state: "Hirshabelle State",
    region: "Hiraan",
    type: "Area Office",
    coords: { x: 425, y: 595 },
    description: "Key intervention corridor for food security, emergency water trucking, and localized clan dialogue initiatives.",
    keyInterventions: "Cash-for-work canal clearing, emergency food distribution, and community-based peace councils.",
  },
  {
    id: "jalalaqsi",
    name: "Jalalaqsi Area Office",
    state: "Hirshabelle State",
    region: "Hiraan",
    type: "Area Office",
    coords: { x: 432, y: 625 },
    description: "Field outpost managing riverine agricultural recovery, safe sanitation, and unconditional cash transfers.",
    keyInterventions: "Unconditional cash transfers for vulnerable households and communal water tank installations.",
  },
  {
    id: "matabaan",
    name: "Matabaan Area Office",
    state: "Hirshabelle State",
    region: "Hiraan",
    type: "Area Office",
    coords: { x: 395, y: 512 },
    description: "Pastoral frontier office executing livestock disease control, solar deep-well pumping, and drought recovery.",
    keyInterventions: "Deep-well solar borehole pumps, goat restocking for pastoralists, and emergency water supply.",
  },
  {
    id: "mahaas",
    name: "Mahaas Area Office",
    state: "Hirshabelle State",
    region: "Hiraan",
    type: "Area Office",
    coords: { x: 448, y: 538 },
    description: "Field station delivering emergency health aid, temporary shelter kits, and inter-clan dialogue sessions.",
    keyInterventions: "Transitional shelter kits, non-food item distributions, and customary elder conciliation forums.",
  },
  {
    id: "balad",
    name: "Bal'ad Area Office",
    state: "Hirshabelle State",
    region: "Middle Shabelle",
    type: "Area Office",
    coords: { x: 450, y: 685 },
    description: "Corridor management hub providing agricultural training, sanitation infrastructure, and emergency nutrition support.",
    keyInterventions: "Public latrine sanitation blocks, women's agribusiness training, and cash-for-work feeder road repair.",
  },
  {
    id: "balad-hawo",
    name: "Balad-Hawo Area Office",
    state: "Jubaland State",
    region: "Gedo",
    type: "Area Office",
    coords: { x: 230, y: 610 },
    description: "Borderland operation center focusing on cross-border peacebuilding, social cohesion, and resilience against climate shocks.",
    keyInterventions: "Peacebuilding capacity workshops, agro-pastoralist input distribution, and drought mitigation.",
  },
];

export const SYPD_PARTNERS_LIST = [
  { name: "World Bank", category: "Multilateral & Bilateral", logo: "/images/partners/world-bank.svg" },
  { name: "Diakonie Katastrophenhilfe (DKH)", category: "Strategic INGO Partner", logo: "/images/partners/dkh.svg" },
  { name: "Norwegian Refugee Council (NRC)", category: "Strategic INGO Partner", logo: "/images/partners/nrc.svg" },
  { name: "Welthungerhilfe (WHH)", category: "Strategic INGO Partner", logo: "/images/partners/whh.svg" },
  { name: "United Nations OCHA / SHF", category: "United Nations Agency", logo: "/images/partners/unocha.svg" },
  { name: "World Food Programme (WFP)", category: "United Nations Agency", logo: "/images/partners/wfp.svg" },
  { name: "UNICEF Somalia", category: "United Nations Agency", logo: "/images/partners/unicef.svg" },
  { name: "FAO (Food & Agriculture Org)", category: "United Nations Agency", logo: "/images/partners/fao.svg" },
  { name: "IOM (Intl Org for Migration)", category: "United Nations Agency", logo: "/images/partners/iom.svg" },
  { name: "UN-HABITAT", category: "United Nations Agency", logo: "/images/partners/un-habitat.svg" },
  { name: "Catholic Relief Services (CRS)", category: "International NGO", logo: "/images/partners/crs.png" },
  { name: "USAID", category: "Bilateral Agency", logo: "/images/partners/usaid.svg" },
  { name: "CARE International", category: "International NGO", logo: "/images/partners/care.svg" },
  { name: "National Endowment for Democracy (NED)", category: "Democracy & Governance", logo: "/images/partners/ned.svg" },
  { name: "Penny Appeal USA", category: "International Charity", logo: "/images/partners/penny-appeal.png" },
  { name: "Direct Aid", category: "Humanitarian Partner", logo: "/images/partners/direct-aid.svg" },
  { name: "African Relief Fund (ARF)", category: "Development Partner", logo: "/images/partners/arf.png" },
  { name: "Somalia Stability Fund (SSF)", category: "Multi-Donor Fund", logo: "/images/partners/ssf.png" },
  { name: "Islamic Relief Worldwide", category: "International NGO", logo: "/images/partners/islamic-relief.svg" },
  { name: "Danish Refugee Council (DRC)", category: "International NGO", logo: "/images/partners/drc.png" },
  { name: "World Vision", category: "International NGO", logo: "/images/partners/world-vision.svg" },
  { name: "European Union", category: "European Commission", logo: "/images/partners/european-union.svg" },
  { name: "Oxfam Novib", category: "International NGO", logo: "/images/partners/oxfam.svg" },
  { name: "King Abdullah II Fund (KAFD)", category: "Foundation", logo: "/images/partners/kafd.png" },
  { name: "OIC (Org of Islamic Cooperation)", category: "Intergovernmental", logo: "/images/partners/oic.svg" },
  { name: "Somali Diaspora Alliances", category: "Diaspora Networks", logo: "/images/partners/diaspora.svg" },
];

export const SYPD_REAL_STORIES = [
  {
    id: "amina-adan-baidoa",
    name: "Amina Adan Hassan",
    age: 55,
    location: "Jarati IDP Camp, Baidoa, South-West State",
    title: "A Story of Resilience from Baidoa District",
    image: "/images/story-amina.webp",
    partner: "Diakonie Katastrophenhilfe (DKH)",
    summary: "Displaced by clan violence and four consecutive drought seasons from Bakool, Amina raised her six orphaned grandchildren with the support of SYPD cash assistance.",
    story: "Amina Adan Hassan, 55, took on the role of raising her six grandchildren after a stray bullet from clan conflict in her community killed one of her daughters. Amina supported her entire family as a farmer in Somalia's rural Bakool region with only a small plot of land and three cows. When four consecutive dry seasons dried up local wells and wiped out her livestock, Amina made the difficult decision to walk over 150 kilometers to Baidoa city. At Jarati IDP Camp, SYPD enrolled her into a multi-sectoral cash transfer initiative funded by DKH. With the dignity of cash support, Amina purchased food, safe water, and clothing for her grandchildren, and established a sustainable grocery retail stall.",
    quote: "Today, my living standard is much better than before, my livelihood is restored, and I will never forget SYPD and DKH for their tremendous solidarity.",
  },
  {
    id: "hassan-ahmed-beledweyne",
    name: "Hassan Ahmed Ali",
    age: 50,
    location: "Kurtunwaaley Village, Beledweyne, Hirshabelle State",
    title: "Support Transforms Hassan to a Successful Commercial Farmer",
    image: "/images/story-hassan.webp",
    partner: "German Federal Foreign Office (GFFO) / DKH",
    summary: "Fifty-year-old riverine farmer recovers from catastrophic river flooding and drought through agricultural inputs, solar pumps, and market access.",
    story: "Fifty-year-old Hassan Ahmed Ali is a father of eight children living in Kurtunwaaley Village along the Shabelle River. Despite having five hectares of fertile land, repeated climate extremes and flash floods had reduced his crop yields to nearly zero. SYPD provided an integrated package: tractor land preparation, certified maize and cowpea seeds, pump irrigation accessories, and hands-on agronomy extension. In his first revitalized season, Hassan harvested two sacks of maize, three sacks of cowpeas, 700 kg of tomatoes, and 135 kg of pumpkins, securing food sovereignty for his entire household.",
    quote: "I feel like it is a new dawn for us. Now, my children are going to school and I can pay their fees. We eat two nutritious meals a day compared to one. I sincerely thank SYPD.",
  },
  {
    id: "abdi-mohamed-beledweyne",
    name: "Abdi Mohamed Ali",
    age: 39,
    location: "Beledsalaam Village, Beledweyne, Hirshabelle State",
    title: "From Struggling Farmhand to Thriving Agripreneur",
    image: "/images/story-abdi.webp",
    partner: "NORAD / Welthungerhilfe (WHH)",
    summary: "Former casual laborer overcomes displacement to cultivate sorghum, beans, and watermelon through the Strengthening Resilience to Rising Food Prices project.",
    story: "Abdi Mohamed Ali, a 39-year-old father of nine from Beledsalaam, previously relied on manual day labor on others' farms to support his family. When food prices spiked, he struggled to provide even a single meal. Through community mobilization committees, Abdi was selected to receive quality seeds (sorghum, beans, watermelon, onion), farm tools, and training in Good Agricultural Practices (GAP). With irrigation support from a rehabilitated canal, Abdi achieved a bumper harvest, fed his family, and sold the surplus at the Beledweyne central market to start a small retail shop.",
    quote: "The project gave me agricultural inputs, canal water, and training. It not only restored my livelihood but enabled me to expand my children's education and build an independent business.",
  },
];

export interface OrganogramMember {
  id: string;
  name: string;
  role: string;
  department: string;
  level: "board" | "executive" | "management" | "officers";
  photo?: string;
  vacant?: boolean;
  email?: string;
  responsibilities: string[];
}

export const SYPD_BOARD_MEMBERS = [
  { name: "Abdinoor Ibrahim Noor", role: "Board Chairperson", bio: "Leads organizational governance, strategic oversight, and high-level donor diplomacy for SYPD." },
  { name: "Board Auditor", role: "Board Auditor", bio: "Oversees internal fiduciary controls, compliance monitoring, and annual external audits." },
  { name: "Board Treasurer", role: "Board Treasurer", bio: "Guides fiscal policy, investment stewardship, and budgetary compliance." },
  { name: "Board Secretary", role: "Board Secretary", bio: "Maintains board proceedings, charter compliance, and legal filings." },
  { name: "Board Fundraiser", role: "Board Fundraiser", bio: "Steers strategic resource mobilization and multilateral institutional partnerships." },
];

export const SYPD_MANAGEMENT_TEAM = [
  { name: "Hassan Ali", role: "Executive Director (ED)", dept: "Executive Office" },
  { name: "Programs Manager", role: "Head of Programs", dept: "Program Management" },
  { name: "Finance & Admin Manager", role: "Head of Finance & Operations", dept: "Finance & Admin" },
  { name: "Human Resource Manager", role: "Head of Human Capital", dept: "Human Resources" },
  { name: "MEL Manager", role: "Monitoring, Evaluation & Learning", dept: "Quality & Accountability" },
];

export const SYPD_ORGANOGRAM_DATA: OrganogramMember[] = [
  // Tier 1: Board of Directors
  {
    id: "chairperson",
    name: "Mr Abdinoor Ibrahim Noor",
    role: "Board Chairperson",
    department: "Board of Directors",
    level: "board",
    photo: "/images/team/board-chair.jpg",
    email: "chairperson@sypdsomalia.org",
    responsibilities: [
      "Leads highest decision-making body of the organization.",
      "Convenes biannual board sessions and leads organizational performance reviews.",
      "High-level diplomacy with Federal authorities and multilateral donors.",
    ],
  },
  {
    id: "board-secretary",
    name: "Mr Mohamed Abdi",
    role: "Board Secretary",
    department: "Board of Directors",
    level: "board",
    photo: "/images/team/mel-head.jpg",
    email: "secretary@sypd.org",
    responsibilities: [
      "Maintains official governance charters, records, and statutory filings.",
      "Ensures full legal compliance with Federal Member State regulations.",
    ],
  },
  {
    id: "board-treasurer",
    name: "Ms Faduma Ahmed",
    role: "Board Treasurer",
    department: "Board of Directors",
    level: "board",
    photo: "/images/team/hr-head.jpg",
    email: "treasury@sypd.org",
    responsibilities: [
      "Guides fiscal policy, investment stewardship, and budget approval.",
      "Reviews independent external audit opinions and fiduciary risk frameworks.",
    ],
  },

  // Tier 2: Executive Leadership
  {
    id: "exec-director",
    name: "Mr Hassan Ali",
    role: "Executive Director (ED)",
    department: "Executive Secretariat",
    level: "executive",
    photo: "/images/team/exec-director.jpg",
    email: "Hassan.ali@sypdsomalia.org",
    responsibilities: [
      "Directs day-to-day countrywide operations and strategic plan execution.",
      "Signs and authorises institutional grant agreements with multilateral partners.",
      "Ensures organizational alignment across all 9 area offices and 71+ districts.",
    ],
  },
  {
    id: "cfo",
    name: "Ms Sahra Osman",
    role: "Finance & Admin Manager",
    department: "Finance & Operations",
    level: "executive",
    photo: "/images/team/finance-head.jpg",
    email: "finance@sypd.org",
    responsibilities: [
      "Manages multi-currency accounting, dual-signatory controls, and CVA platforms.",
      "Oversees statutory annual audits and partner expenditure verifications.",
      "Directs procurement and financial reporting across all field hubs.",
    ],
  },
  {
    id: "director-ops",
    name: "Mr Yasin Farah",
    role: "Operations & Logistics Manager",
    department: "Field Operations",
    level: "executive",
    photo: "/images/team/ops-head.jpg",
    email: "operations@sypd.org",
    responsibilities: [
      "Coordinates rapid emergency deployments and field base infrastructure.",
      "Manages warehouse inventory, vehicle fleets, and security clearances.",
      "Guarantees delivery of agricultural inputs, water kits, and shelter materials.",
    ],
  },

  // Tier 3: Senior Management Directorate
  {
    id: "programs-manager",
    name: "Mr Ahmed Mohamed",
    role: "Head of Programs",
    department: "Program Management",
    level: "management",
    photo: "/images/team/programs-head.jpg",
    email: "programs@sypd.org",
    responsibilities: [
      "Directs technical delivery across all 6 CHEFGS Strategic Pillars.",
      "Leads active participation in UN Clusters (WASH, FSC, Protection, Shelter).",
      "Ensures quality standards, do-no-harm principles, and community participation.",
    ],
  },
  {
    id: "mel-manager",
    name: "Mr Abdirahman Shire",
    role: "MEL Manager",
    department: "Quality & Accountability",
    level: "management",
    photo: "/images/team/mel-head.jpg",
    email: "mel@sypd.org",
    responsibilities: [
      "Establishes real-time field monitoring systems and baseline evaluations.",
      "Operates the digital beneficiary feedback and AAP hotline (+252 61 5522100).",
      "Guarantees evidence generation and fidelity to proposed project indicators.",
    ],
  },
  {
    id: "hr-manager",
    name: "Ms Marian Jama",
    role: "Human Resource Manager",
    department: "Human Resources",
    level: "management",
    photo: "/images/team/hr-head.jpg",
    email: "hr@sypd.org",
    responsibilities: [
      "Directs national recruitment, field safety, and gender inclusion policies.",
      "Enforces child safeguarding, PSEA guidelines, and organizational code of conduct.",
      "Coordinates continuous professional development for field officers.",
    ],
  },
  {
    id: "field-coordinator",
    name: "Mr Dahir Hassan",
    role: "Area Hubs Coordinator",
    department: "Field Operations",
    level: "management",
    photo: "/images/team/po-climate.jpg",
    email: "field@sypd.org",
    responsibilities: [
      "Directs operational coordination across all 9 regional area offices.",
      "Supervises Beledweyne, Baidoa, Jowhar, and Balad-Hawo base managers.",
      "Maintains direct liaison with local district councils and clan elders.",
    ],
  },
  {
    id: "partnerships-lead",
    name: "Institutional Grants Officer",
    role: "Partnerships & Consortia",
    department: "Resource Mobilization",
    level: "management",
    vacant: true,
    email: "partnerships@sypd.org",
    responsibilities: [
      "Supports $14.48M 5-year resource mobilization campaigns.",
      "Drafts bilateral grant applications and multilateral consortia bids.",
    ],
  },

  // Tier 4: CHEFGS Strategic Program Officers
  {
    id: "po-climate",
    name: "Eng. Daud Warsame",
    role: "P.O. Climate Resilience & Water",
    department: "CHEFGS Pillar C",
    level: "officers",
    photo: "/images/team/po-climate.jpg",
    responsibilities: [
      "Engineering solar borehole installations and shallow well rehabilitations.",
      "Deploying Emwatkit emergency purifiers at El-Jaale camp during river floods.",
      "Tree planting campaigns and participatory river embankment flood barriers.",
    ],
  },
  {
    id: "po-health",
    name: "Dr. Halima Yusuf",
    role: "P.O. Health & Nutrition",
    department: "CHEFGS Pillar H",
    level: "officers",
    photo: "/images/team/health-officer.jpg",
    responsibilities: [
      "Screening and MAM/SAM treatment for malnourished children and mothers.",
      "Renovating underserved rural health centers and mobile clinic outposts.",
      "Training community health workers in maternal healthcare and hygiene.",
    ],
  },
  {
    id: "po-economic",
    name: "Mr Liban Hassan",
    role: "P.O. Economic TVET & Enterprise",
    department: "CHEFGS Pillar E",
    level: "officers",
    photo: "/images/team/programs-head.jpg",
    responsibilities: [
      "Vocational training in ICT, agribusiness, tailoring, and solar energy.",
      "Administering Cash-Based Transfers (CBT) and Cash-for-Work (CFW) platforms.",
      "Incubating women-led micro-enterprises with seed grants and market linkages.",
    ],
  },
  {
    id: "po-foodsec",
    name: "Mr Omar Farah",
    role: "P.O. Food Security & Agriculture",
    department: "CHEFGS Pillar F",
    level: "officers",
    photo: "/images/team/exec-director.jpg",
    responsibilities: [
      "Distributing certified drought-tolerant seeds and mechanized tillage.",
      "Canal irrigation rehabilitation and riverboat safety crossings.",
      "Livestock restocking and veterinary care for vulnerable pastoralists.",
    ],
  },
  {
    id: "po-protection",
    name: "Ms Asha Nur",
    role: "P.O. Gender & Protection",
    department: "CHEFGS Pillar G",
    level: "officers",
    photo: "/images/team/po-protection.jpg",
    responsibilities: [
      "Establishing community-based protection networks in IDP settlements.",
      "Providing GBV psychosocial support, survivor dignity kits, and legal aid.",
      "Child safeguarding workshops and inclusive leadership councils.",
    ],
  },
  {
    id: "po-stabilization",
    name: "Mr Guled Barre",
    role: "P.O. Stabilization & Land Rights",
    department: "CHEFGS Pillar S",
    level: "officers",
    photo: "/images/team/board-chair.jpg",
    responsibilities: [
      "Convening customary clan peace dialogues under acacia trees.",
      "Mediating pasture and water disputes to prevent localized armed clashes.",
      "Advocating for Housing, Land, and Property (HLP) security against forced evictions.",
    ],
  },
];

// Curated sample of representative projects from the authentic 155-project portfolio in the Profile
export const SYPD_PROJECTS_CATALOG: ProjectItem[] = [
  {
    id: 155,
    title: "Somalia Livestock Resilience and Income Generation Activity",
    activities: "Strengthen the resilience of livestock-dependent households and support sustainable income-generation opportunities through livestock-focused livelihood assistance.",
    targetArea: "Beledweyne District, Hiraan",
    dates: "15th July – 15th November 2026",
    value: "USD 30,000.00",
    fundingAgency: "Penny Appeal USA",
    contactPerson: "Imal Oxus, Program Coordinator",
    sector: "Food Security & Livelihoods",
  },
  {
    id: 154,
    title: "Somalia Empowering Women Through Education and Skills Project",
    activities: "Provide women with education, vocational, employability and livelihood skills that strengthen their economic participation and access to sustainable income-generating opportunities.",
    targetArea: "Hirshabelle State",
    dates: "1st June 2026 – 30th June 2027",
    value: "USD 2,362,167.56",
    fundingAgency: "World Bank, through Federal Republic of Somalia (MOECHE)",
    sector: "Education & TVET",
  },
  {
    id: 153,
    title: "Empowering Marginalized Groups through Economic Graduation in Somalia (EMERGE)",
    activities: "Empowering individuals to manage resources effectively through access to savings options and financial literacy training, along with training in business and soft skills.",
    targetArea: "Bay and Bakool Regions",
    dates: "2024–2025",
    value: "USD 2,010,772.00",
    fundingAgency: "World Vision",
    contactPerson: "Kelly Durney, CPCM",
    sector: "Food Security & Livelihoods",
  },
  {
    id: 152,
    title: "Women's Leadership & Entrepreneurship Training",
    activities: "Provided literacy, public speaking, and business coaching for young women.",
    targetArea: "Banadir & Hirshabelle",
    dates: "2024",
    value: "USD 402,917.00",
    fundingAgency: "NGO4Program",
    contactPerson: "Ahmed Ibrahim, Director",
    sector: "Education & TVET",
  },
  {
    id: 151,
    title: "Food Security for Vulnerable Groups Affected by Food Price Increase",
    activities: "Provision of MPCT, Cash for Work, agricultural packages (land preparation, seed, and capacity building), restocking through provision of goats.",
    targetArea: "Beledweyne District, Hiraan",
    dates: "1st July 2023 – 30th June 2024",
    value: "EUR 489,405.00",
    fundingAgency: "Welthungerhilfe (WHH)",
    contactPerson: "Sarah Hassan, Programme Officer",
    sector: "Food Security & Livelihoods",
  },
  {
    id: 150,
    title: "Vocational Training for Women in Agriculture & Renewable Energy",
    activities: "Teaching women agribusiness, climate-smart irrigation, and solar panel installation.",
    targetArea: "Banadir & Hirshabelle",
    dates: "2023–2024",
    value: "USD 225,783.00",
    fundingAgency: "NGO4Program",
    sector: "Education & TVET",
  },
  {
    id: 148,
    title: "East Africa Regional Hunger Crises Response",
    activities: "Focus on Food Security for both CVA and Multipurpose Cash Transfer (MPCT) for drought-displaced households.",
    targetArea: "Baidoa District, Bay Region",
    dates: "1st September 2022 – 28th February 2023",
    value: "EUR 638,950.00",
    fundingAgency: "Diakonie Katastrophenhilfe (DKH)",
    contactPerson: "Katrin Jullien, Head of Regional Office",
    sector: "Food Security & Livelihoods",
  },
  {
    id: 146,
    title: "Provision of Clean Water through Rehabilitation of Community Shallow Wells",
    activities: "Rehabilitation of community-owned shallow wells with animal troughs, solar pumping units, and WASH committees.",
    targetArea: "Beledweyne District, Hiraan",
    dates: "July – 15th November 2022",
    value: "USD 149,530.00",
    fundingAgency: "Penny Appeal USA",
    sector: "WASH",
  },
  {
    id: 143,
    title: "Multi-Sectoral Humanitarian Response: GBV, Skill Enhancement & Livelihoods",
    activities: "Literacy and numeracy training for vulnerable women and youth, combined with vocational skills development, emergency protection, and GBV prevention.",
    targetArea: "Beledweyne & Jowhar",
    dates: "2021–2023",
    value: "EUR 2,313,391.52",
    fundingAgency: "Diakonie Katastrophenhilfe (DKH)",
    sector: "Protection & GBV",
  },
  {
    id: 142,
    title: "Women's Economic Empowerment through TVET",
    activities: "Training women in market-driven skills like ICT, leather production, and handicrafts.",
    targetArea: "Mogadishu, Banadir",
    dates: "2021–2023",
    value: "USD 1,080,000.00",
    fundingAgency: "Direct Aid",
    sector: "Education & TVET",
  },
  {
    id: 129,
    title: "Program for Economic Development & Livelihoods (PEDAL)",
    activities: "Provided capacity building, life skills (GAP), and employment support for women and youth at risk of recruitment into violent extremism.",
    targetArea: "Hiraan Region",
    dates: "2018–2020",
    value: "USD 1,700,008.00",
    fundingAgency: "Somalia Stability Fund (SSF)",
    sector: "Peacebuilding",
  },
  {
    id: 124,
    title: "Enhancing Peace, Social Cohesion & Resilience to Recurrent Shocks",
    activities: "Education and leadership training for women and youth to prevent clan conflict and strengthen local mediation councils.",
    targetArea: "Beledweyne District",
    dates: "2016–2017",
    value: "USD 796,792.50",
    fundingAgency: "Catholic Relief Services (CRS)",
    sector: "Peacebuilding",
  },
  {
    id: 123,
    title: "Provision of Integrated WASH Services to Newly Arrived and Protracted IDPs",
    activities: "Construction of communal VIP latrines, rehabilitation of shallow wells, and training of WASH management committees.",
    targetArea: "Baidoa IDP Settlements",
    dates: "2016–2017",
    value: "USD 200,209.58",
    fundingAgency: "Somalia Humanitarian Fund (SHF / UN-OCHA)",
    sector: "WASH",
  },
  {
    id: 113,
    title: "Response, Preparedness and Mitigation of Emergencies in Complex Somali Crisis",
    activities: "Distribution of food rations, stationing of 2 Emwatkit emergency water filtration machines, and training of WASH engineers.",
    targetArea: "Beledweyne, Hiraan",
    dates: "2016–2017",
    value: "EUR 1,400,000.00",
    fundingAgency: "Diakonie Katastrophenhilfe (DKH)",
    sector: "WASH",
  },
  {
    id: 101,
    title: "Improve IDPs Access to Shelter and Protection in Rajo Camp",
    activities: "Construction of 501 CGI transitional shelters to promote protection for women and vulnerable families against GBV.",
    targetArea: "Wadajir District, Banadir",
    dates: "2014",
    value: "USD 180,450.00",
    fundingAgency: "Norwegian Refugee Council (NRC)",
    sector: "Emergency & Shelter",
  },
  {
    id: 48,
    title: "Provision of River Boats to Poor Subsistence Farmers",
    activities: "Fabrication and installation of riverboats on the Shabelle River to improve farmers' access to markets and safety during seasonal flooding.",
    targetArea: "Six Beledweyne riverine villages, Hiraan",
    dates: "2007",
    value: "USD 81,670.00",
    fundingAgency: "USAID / CARE International",
    sector: "Food Security & Livelihoods",
  },
  {
    id: 44,
    title: "Establishment of Mogadishu Youth Movement for Democracy Club (YMDC)",
    activities: "Establishment of YMDC to promote peace, civic literacy, and good governance among young people in Mogadishu.",
    targetArea: "Banadir Region",
    dates: "2007",
    value: "USD 50,000.00",
    fundingAgency: "National Endowment for Democracy (NED)",
    sector: "Peacebuilding",
  },
  {
    id: 1,
    title: "Early-Recovery Support for Subsistence Farmers",
    activities: "Provided agricultural tools, seeds, and basic livelihood support to poor subsistence farmers recovering from drought and displacement.",
    targetArea: "Hiraan riverine communities",
    dates: "January – December 2005",
    value: "USD 17,300.00",
    fundingAgency: "World Assembly of Muslim Youth (WAMY)",
    sector: "Food Security & Livelihoods",
  },
];
