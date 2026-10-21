import { helpIllustration } from '../../components/CloudinaryLinks';

// Comprehensive Structured Data for the About Us Center Page
export const heroData = {
  title: "About Us",
  subtitle: "IB Cyber Security Private Limited (IBCS) is a software product-based technology company focused on designing, developing, and delivering intelligent software solutions for a digitally connected world. Our areas of focus include Artificial Intelligence, cybersecurity, cyber crime investigation, law enforcement technology, digital forensics, legal technology, government solutions, and data intelligence. We aim to build secure, scalable, and future-ready products for government departments, enterprises, institutions, and individuals through technology-driven innovation, responsible development, and continuous improvement.",
  searchPlaceholder: "Search topics like mission, history, identity, legal compliance...",
  ctaText: "EXPLORE TOPICS",
  ctaAlert: "Explore our 18 comprehensive organizational topics below.",
  illustrationSrc: helpIllustration,
  illustrationAlt: "About Us corporate illustration",
  brandName: "About Us",
  popularSearches: ["Mission & Vision", "History", "Identity", "What We Do", "Legal & Compliance", "Partnership"]
};

export const sponsorBrands = [
  { id: 1, type: 'serif', prefix: 'EST.', name: 'Our Legacy' },
  { id: 2, type: 'mono', badge: 'VERIFIED & COMPLIANT' },
  { id: 3, type: 'italic', name: 'Values First' },
  { id: 4, type: 'sans', name: 'Global Impact' }
];

export const aboutPhilosophy = {
  quote: "“Building sustainable, human-centric solutions with unwavering ethical standards, transparent governance, and community-first impact.”",
  tagline: "Our Guiding Philosophy",
  pillars: [
    {
      step: "01",
      title: "Roots & Identity",
      subtitle: "Name heritage & culture",
      category: "IDENTITY & STORY"
    },
    {
      step: "02",
      title: "Vision & Mission",
      subtitle: "Strategic roadmap & goals",
      category: "MISSION & GOALS"
    },
    {
      step: "03",
      title: "Work & Impact",
      subtitle: "Initiatives & achievements",
      category: "OPERATIONS"
    },
    {
      step: "04",
      title: "Trust & Ethics",
      subtitle: "Compliance & legal standards",
      category: "LEGAL & POLICIES"
    }
  ]
};

export const aboutPillarsData = aboutPhilosophy.pillars;
export const statsData = aboutPhilosophy.pillars;

export const helpCategories = [
  { id: 'ALL', label: 'All Topics' },
  { id: 'IDENTITY & STORY', label: 'Identity & Story' },
  { id: 'MISSION & GOALS', label: 'Mission & Goals' },
  { id: 'OPERATIONS', label: 'Operations & Work' },
  { id: 'LEGAL & POLICIES', label: 'Legal & Policies' }
];

export const coursesData = [
  {
    id: 'about-1',
    category: 'IDENTITY & STORY',
    title: 'Meaning Behind Our Name',
    summary: 'The story, heritage, and symbolic meaning that inspired our organization name and cultural values.',
    details: [
      'Reflects our founding vision of breaking barriers and bringing impactful, transparent solutions to people.',
      'Embodies a synergy between visionary thinking, technological innovation, and deeply rooted human empathy.',
      'Represents our continuous commitment to trust, integrity, and long-term community value creation.'
    ],
    additionalText: 'Every initiative we undertake carries forward the promise and responsibility embedded within our name.',
    linkText: 'VIEW DETAILS →',
    iconType: 'sparkles',
    readTime: '2 min read'
  },
  {
    id: 'about-2',
    category: 'MISSION & GOALS',
    title: 'Organization Overview',
    summary: 'Our organizational philosophy, world outlook, and modern approach to collective progress.',
    details: [
      'We view progress as a shared journey where innovation must serve people and foster positive societal change.',
      'A collaborative environment that empowers talent, encourages creativity, and welcomes new ideas.',
      'Long-term sustainable impact takes priority over short-lived gains in every decision we make.'
    ],
    additionalText: 'We believe that by aligning purpose with disciplined execution, we can solve complex challenges for our community.',
    linkText: 'VIEW DETAILS →',
    iconType: 'chart',
    readTime: '3 min read'
  },
  {
    id: 'about-3',
    category: 'IDENTITY & STORY',
    title: 'Identity',
    summary: 'The distinctive characteristics, shared values, and core principles that shape our organizational DNA.',
    details: [
      'Authenticity, transparency, and relentless focus on user empowerment guide everything we build.',
      'A diverse and inclusive culture celebrating varied perspectives, cultural backgrounds, and multidisciplinary skills.',
      'Uncompromising dedication to quality, continuous self-improvement, and ethical conduct.'
    ],
    additionalText: 'Our identity is not just a brand statement—it is lived daily by every member of our team and community.',
    linkText: 'VIEW DETAILS →',
    iconType: 'shield',
    readTime: '2 min read'
  },
  {
    id: 'about-4',
    category: 'IDENTITY & STORY',
    title: 'Introduction',
    summary: 'A comprehensive welcome to our organization, our origins, and our core areas of impact.',
    details: [
      'Established with a passion to deliver modern, reliable, and accessible solutions for individuals and teams.',
      'Operating across digital platforms with high standards of efficiency, creativity, and customer support.',
      'Trusted by thousands of users and partners who rely on our ecosystem daily.'
    ],
    additionalText: 'Whether you are a new visitor, partner, or community member, we welcome you to discover our journey.',
    linkText: 'VIEW DETAILS →',
    iconType: 'rocket',
    readTime: '3 min read'
  },
  {
    id: 'about-5',
    category: 'OPERATIONS',
    title: 'What We Do',
    summary: 'An overview of our key services, digital products, programs, and operational initiatives.',
    details: [
      'Designing and developing intuitive, high-performance digital tools and user-friendly platforms.',
      'Providing end-to-end guidance, technical support, and continuous feature enhancements.',
      'Connecting communities and businesses with resources, insights, and modern workflow solutions.'
    ],
    additionalText: 'Our offerings are continuously updated to stay ahead of evolving industry demands and user expectations.',
    linkText: 'VIEW DETAILS →',
    iconType: 'laptop',
    readTime: '3 min read'
  },
  {
    id: 'about-6',
    category: 'MISSION & GOALS',
    title: 'Mission & Vision',
    summary: 'Our driving mission to empower individuals and our long-term vision for global community impact.',
    details: [
      'Mission: To deliver intuitive, scalable, and secure solutions that simplify workflows and enrich lives.',
      'Vision: To become a globally recognized benchmark in ethical innovation, customer satisfaction, and technological excellence.',
      'Core Values: Integrity, Innovation, Empathy, Community, and Accountability.'
    ],
    additionalText: 'Our mission guides our daily decisions, while our vision keeps our eyes set firmly on the horizon.',
    linkText: 'VIEW DETAILS →',
    iconType: 'lightning',
    readTime: '3 min read'
  },
  {
    id: 'about-7',
    category: 'OPERATIONS',
    title: 'Activity',
    summary: 'Current projects, active community engagements, workshops, and ongoing development cycles.',
    details: [
      'Regular product sprints, user-feedback roundtables, and system optimizations.',
      'Active participation in community outreach, technology forums, and educational webinars.',
      'Collaborative initiatives with partners to test new ideas and build sustainable community projects.'
    ],
    additionalText: 'We maintain an active, dynamic calendar of events, releases, and collaborative meetups throughout the year.',
    linkText: 'VIEW DETAILS →',
    iconType: 'palette',
    readTime: '2 min read'
  },
  {
    id: 'about-8',
    category: 'MISSION & GOALS',
    title: 'Purpose',
    summary: 'The underlying motivation and higher calling that inspires our team and directs our journey.',
    details: [
      'Bridging gaps between complex modern technology and intuitive, human-centered experiences.',
      'Empowering people to achieve their goals with confidence, clarity, and peace of mind.',
      'Creating sustainable, positive change that extends beyond products into broader social good.'
    ],
    additionalText: 'Our purpose keeps us grounded and reminds us why every detail in our work matters.',
    linkText: 'VIEW DETAILS →',
    iconType: 'sparkles',
    readTime: '2 min read'
  },
  {
    id: 'about-9',
    category: 'MISSION & GOALS',
    title: 'Objective',
    summary: 'Our strategic benchmarks, operational targets, and measurable milestones for continued growth.',
    details: [
      'Achieve and uphold 99.9% reliability, security standards, and user satisfaction ratings.',
      'Expand cross-border accessibility and provide localized support for international communities.',
      'Consistently invest in research, talent development, and sustainable technological practices.'
    ],
    additionalText: 'We measure our success not just by numbers, but by the tangible impact felt by those we serve.',
    linkText: 'VIEW DETAILS →',
    iconType: 'chart',
    readTime: '2 min read'
  },
  {
    id: 'about-10',
    category: 'OPERATIONS',
    title: 'Achievement',
    summary: 'Key recognitions, milestones reached, community trust, and track record of proven success.',
    details: [
      'Successfully served thousands of users and established partnerships with reputable organizations.',
      'Awarded for outstanding digital experience, product performance, and customer satisfaction.',
      'Consistent positive community ratings and continuous year-over-year organic growth.'
    ],
    additionalText: 'Every achievement is a testament to the dedication of our team and the loyalty of our community.',
    linkText: 'VIEW DETAILS →',
    iconType: 'dollar',
    readTime: '3 min read'
  },
  {
    id: 'about-11',
    category: 'LEGAL & POLICIES',
    title: 'Legal & Compliance',
    summary: 'Our governance protocols, regulatory compliance certifications, and statutory commitments.',
    details: [
      'Fully compliant with corporate governance standards, statutory reporting, and consumer safety rules.',
      'Regular comprehensive audits by certified independent authorities to ensure maximum compliance.',
      'Zero-tolerance policy for unethical behavior, ensuring accountability at all organizational tiers.'
    ],
    additionalText: 'We operate with total transparency, ensuring our stakeholders and users enjoy complete peace of mind.',
    linkText: 'VIEW DETAILS →',
    iconType: 'shield',
    readTime: '4 min read'
  },
  {
    id: 'about-12',
    category: 'LEGAL & POLICIES',
    title: 'Privacy Policy',
    summary: 'How we collect, store, safeguard, and respect personal data and privacy across our platforms.',
    details: [
      'Complete adherence to international data privacy regulations including GDPR, CCPA, and regional laws.',
      'We never sell, rent, or lease personal information to third parties under any circumstances.',
      'End-to-end data encryption, strict access controls, and transparent user data rights (access, export, delete).'
    ],
    additionalText: 'Your privacy is a fundamental human right, and we design every system with privacy by default.',
    linkText: 'VIEW DETAILS →',
    iconType: 'shield',
    readTime: '4 min read'
  },
  {
    id: 'about-13',
    category: 'LEGAL & POLICIES',
    title: 'Terms & Condition',
    summary: 'The terms, user agreements, service boundaries, and mutual responsibilities governing our platforms.',
    details: [
      'Clear, accessible terms defining acceptable usage, account responsibilities, and intellectual property.',
      'Fair dispute resolution protocols, clear warranty limitations, and transparent service level standards.',
      'Advance notice given for any material updates or revisions to service agreements.'
    ],
    additionalText: 'By utilizing our services, users enter into a transparent relationship built on mutual fairness.',
    linkText: 'VIEW DETAILS →',
    iconType: 'clock',
    readTime: '4 min read'
  },
  {
    id: 'about-14',
    category: 'LEGAL & POLICIES',
    title: 'Instruction',
    summary: 'Operational guidelines, community code of conduct, and procedural directives for all users.',
    details: [
      'Step-by-step instructions for account configuration, resource access, and collaborative participation.',
      'Community standards prohibiting harassment, unauthorized distribution, and malicious behavior.',
      'Direct escalation paths and resolution channels for administrative or technical inquiries.'
    ],
    additionalText: 'Following these instructions ensures a productive, safe, and welcoming environment for everyone.',
    linkText: 'VIEW DETAILS →',
    iconType: 'rocket',
    readTime: '3 min read'
  },
  {
    id: 'about-15',
    category: 'LEGAL & POLICIES',
    title: 'Legal Disclaimer',
    summary: 'Official statements regarding the nature of information provided and limitations of liability.',
    details: [
      'All content and materials are provided for general informational and educational purposes in good faith.',
      'While we strive for 100% accuracy, we do not warrant completeness or suitability for specific legal/financial advice.',
      'External third-party links are provided for convenience; we do not endorse or control external content.'
    ],
    additionalText: 'Users are advised to seek professional counsel where specialized legal or financial guidance is required.',
    linkText: 'VIEW DETAILS →',
    iconType: 'shield',
    readTime: '2 min read'
  },
  {
    id: 'about-16',
    category: 'LEGAL & POLICIES',
    title: 'Copyright',
    summary: 'Proprietary trademarks, original content protections, media rights, and licensing standards.',
    details: [
      'All content, branding, design assets, and codebase are the proprietary property of the organization.',
      'Unauthorized reproduction, redistribution, modification, or commercial exploitation is strictly prohibited.',
      'Requests for licensing, syndication, or educational usage should be directed to our legal department.'
    ],
    additionalText: 'We respect intellectual property rights worldwide and vigorously protect our original creations.',
    linkText: 'VIEW DETAILS →',
    iconType: 'laptop',
    readTime: '2 min read'
  },
  {
    id: 'about-17',
    category: 'OPERATIONS',
    title: 'Partnership',
    summary: 'Our strategic ecosystem, corporate alliances, academic collaborations, and partner programs.',
    details: [
      'Structured collaboration frameworks for technology vendors, educational bodies, and industry leaders.',
      'Shared commitment to research, sustainable growth, mutual value creation, and continuous innovation.',
      'Dedicated partner management team, joint technical roadmaps, and co-marketing opportunities.'
    ],
    additionalText: 'We actively seek mission-aligned organizations interested in co-creating positive global impact.',
    linkText: 'VIEW DETAILS →',
    iconType: 'shoppingBag',
    readTime: '3 min read'
  },
  {
    id: 'about-18',
    category: 'IDENTITY & STORY',
    title: 'History',
    summary: 'The timeline of our foundation, formative milestones, major breakthroughs, and ongoing journey.',
    details: [
      'Inception: Founded by a passionate team eager to reimagine digital experiences with human touch.',
      'Growth: Expanded from an initial local initiative to a thriving community spanning multiple regions.',
      'Today & Tomorrow: Constantly evolving our platform architecture, embracing cutting-edge standards and new horizons.'
    ],
    additionalText: 'Every chapter in our history inspires the next step of our collective future.',
    linkText: 'VIEW DETAILS →',
    iconType: 'clock',
    readTime: '4 min read'
  }
];
