/* ==========================================================================
   CARRERS DATA STORE - ALL APPLICATION DATA IN A SINGLE FILE
   ========================================================================== */

/**
 * Beam Gradients for StatCard border animation
 */
export const beamGradients = {
  'fill-rose-300': 'bg-[conic-gradient(from_0deg,transparent_0_270deg,#f43f5e_320deg,#fb7185_360deg)]',
  'fill-sky-300': 'bg-[conic-gradient(from_0deg,transparent_0_270deg,#0284c7_320deg,#38bdf8_360deg)]',
  'fill-emerald-300': 'bg-[conic-gradient(from_0deg,transparent_0_270deg,#059669_320deg,#34d399_360deg)]',
  'fill-amber-300': 'bg-[conic-gradient(from_0deg,transparent_0_270deg,#d97706_320deg,#fbbf24_360deg)]',
  'fill-violet-300': 'bg-[conic-gradient(from_0deg,transparent_0_270deg,#7c3aed_320deg,#a78bfa_360deg)]',
  'fill-teal-300': 'bg-[conic-gradient(from_0deg,transparent_0_270deg,#0d9488_320deg,#2dd4bf_360deg)]',
  'fill-indigo-300': 'bg-[conic-gradient(from_0deg,transparent_0_270deg,#4f46e5_320deg,#818cf8_360deg)]',
  'fill-pink-300': 'bg-[conic-gradient(from_0deg,transparent_0_270deg,#db2777_320deg,#f472b6_360deg)]',
  'fill-red-300': 'bg-[conic-gradient(from_0deg,transparent_0_270deg,#ef4444_320deg,#f87171_360deg)]',
};

/**
 * 1. Main Home Career Cards Data (8 Categories)
 */
export const careerCardsData = [
  {
    id: 'vacancies',
    title: 'Current Vacancy',
    description: 'Explore active job openings and career opportunities.',
    iconName: 'Briefcase',
    iconColor: 'text-rose-600',
    blobColor: 'fill-rose-300',
    view: 'vacancies',
  },
  {
    id: 'policies',
    title: 'Recruitment Rules/Policies',
    description: 'Review official eligibility rules and hiring guidelines.',
    iconName: 'Scale',
    iconColor: 'text-sky-600',
    blobColor: 'fill-sky-300',
    view: 'policies',
  },
  {
    id: 'verification',
    title: 'Document Verification Department',
    description: 'Verify required credentials and certificate checks.',
    iconName: 'ClipboardCheck',
    iconColor: 'text-emerald-600',
    blobColor: 'fill-emerald-300',
    view: 'verification',
  },
  {
    id: 'portal',
    title: 'Online Application Portal',
    description: 'Register and submit your online candidate applications.',
    iconName: 'Globe',
    iconColor: 'text-amber-600',
    blobColor: 'fill-amber-300',
    view: 'portal',
  },
  {
    id: 'advertisements',
    title: 'Recruitment Advertisements',
    description: 'Browse official notifications and employment circulars.',
    iconName: 'Megaphone',
    iconColor: 'text-violet-600',
    blobColor: 'fill-violet-300',
  },
  {
    id: 'press',
    title: 'Press Release and Notices',
    description: 'Latest official announcements, circulars, and updates.',
    iconName: 'Newspaper',
    iconColor: 'text-teal-600',
    blobColor: 'fill-teal-300',
  },
  {
    id: 'status',
    title: 'Check Application Status',
    description: 'Track your submitted application progress in real-time.',
    iconName: 'UserCheck',
    iconColor: 'text-indigo-600',
    blobColor: 'fill-indigo-300',
  },
  {
    id: 'resume',
    title: 'Submit Resume',
    description: 'Upload your CV and profile for future hiring pools.',
    iconName: 'FileUp',
    iconColor: 'text-pink-600',
    blobColor: 'fill-pink-300',
  },
];

/**
 * 2. Current Vacancies Data (4 Cards)
 */
export const currentVacanciesData = [
  {
    id: '01',
    title: 'Job Vacancy',
    description: 'Browse active job vacancies and roles.',
    iconName: 'Briefcase',
    iconColor: 'text-rose-600',
    blobColor: 'fill-rose-300',
  },
  {
    id: '02',
    title: 'Full Time',
    description: 'Explore permanent & full-time career positions.',
    iconName: 'Clock',
    iconColor: 'text-sky-600',
    blobColor: 'fill-sky-300',
  },
  {
    id: '03',
    title: 'Part Time',
    description: 'Flexible part-time roles & hourly opportunities.',
    iconName: 'Calendar',
    iconColor: 'text-amber-600',
    blobColor: 'fill-amber-300',
  },
  {
    id: '04',
    title: 'Internship',
    description: 'Student fellowships & practical training programs.',
    iconName: 'GraduationCap',
    iconColor: 'text-emerald-600',
    blobColor: 'fill-emerald-300',
  },
  {
    id: '05',
    title: 'Remote Job',
    description: 'Work-from-anywhere & remote positions.',
    iconName: 'Globe',
    iconColor: 'text-indigo-600',
    blobColor: 'fill-indigo-300',
  },
  {
    id: '06',
    title: 'Post Vacancy',
    description: 'Post new requirements and openings.',
    iconName: 'Users',
    iconColor: 'text-teal-600',
    blobColor: 'fill-teal-300',
  },
  {
    id: '07',
    title: 'Vacancy Card 1',
    description: 'View detailed vacancy information.',
    iconName: 'LayoutGrid',
    iconColor: 'text-emerald-600',
    blobColor: 'fill-emerald-300',
  },
  {
    id: '08',
    title: 'Vacancy Card 2',
    description: 'Explore department-wise opportunities.',
    iconName: 'AppWindow',
    iconColor: 'text-violet-600',
    blobColor: 'fill-violet-300',
  },
];

/**
 * 3. Recruitment Policies Data (16 Cards with Complete Detailed Fields)
 */
export const recruitmentCardsData = [
  {
    id: "01",
    step: "STEP 01",
    title: "Recruitment Policy and Employment Overview",
    tagline: "Framework & Core Principles",
    shortDescription: "Comprehensive guidelines and governance protocols defining fair, transparent institutional hiring standards.",
    accentColor: "#1e293b",
    accentLight: "#f1f5f9",
    accentBorder: "border-[#1e293b]",
    textAccent: "text-[#1e293b]",
    icon: "BookOpen",
    statusBadge: "Standard Policy 2026",
    lastUpdated: "04 Oct 2026",
    details: {
      headline: "Statutory Hiring Protocols & Institutional Governance Code",
      summary: "Defines the core principles governing direct selections, affirmative action rosters, and fair recruitment benchmarks across all cadres.",
      stats: [
        { label: "Policy Code", value: "POL-2026/01" },
        { label: "Cadres Covered", value: "All Grades" },
        { label: "Compliance", value: "100% Certified" },
        { label: "Mode", value: "Direct Selection" }
      ],
      keyHighlights: [
        "Transparent multi-tier assessment standards across general and technical cadres",
        "Mandatory public gazette notifications with 30-day candidate application windows",
        "Strict anti-bias scoring algorithms and multi-stage normalization formulas",
        "Comprehensive guidelines for reservation quotas and special category allowances"
      ],
      eligibilitySummary: "Applicable to all aspirants, state recruitment boards, and authorized hiring committees.",
      steps: [
        "Consult the Cadre-Specific Policy Appendix for your targeted post.",
        "Review reservation quota eligibility benchmarks and validity certificates.",
        "Verify minimum educational qualifications and accreditation criteria.",
        "Proceed to the online application portal during the active registration window."
      ],
      primaryAction: "Download Policy Document (PDF)",
      secondaryAction: "View Selection Standards"
    }
  },
  {
    id: "02",
    step: "STEP 02",
    title: "Career Development and Progress",
    tagline: "Pathways & Skill Advancement",
    shortDescription: "Structured roadmaps empowering workforce mobility, professional promotions, and continuous learning.",
    accentColor: "#f58220",
    accentLight: "#fff7ed",
    accentBorder: "border-[#f58220]",
    textAccent: "text-[#f58220]",
    icon: "TrendingUp",
    statusBadge: "Active Framework",
    lastUpdated: "01 Oct 2026",
    details: {
      headline: "Continuous Professional Progression & Mobility Roadmap",
      summary: "Empowers personnel through systematic merit promotions, specialized technical tracks, and sponsored executive education.",
      stats: [
        { label: "Promotion Cycle", value: "Bi-Annual" },
        { label: "Training Hours", value: "120 Hrs / Yr" },
        { label: "Skill Tracks", value: "14 Domains" },
        { label: "Mentorship", value: "1-on-1 Assigned" }
      ],
      keyHighlights: [
        "Fast-track merit advancement for high-impact innovation and research contributions",
        "Sponsored technical certifications and postgraduate specialized degree sabbaticals",
        "Cross-departmental rotational assignments for executive leadership grooming",
        "Periodic competency assessments with individualized career mapping advisory"
      ],
      eligibilitySummary: "Open to all permanent staff completing minimum probation tenure with exemplary KPI ratings.",
      steps: [
        "Complete annual competency self-assessment through the HR portal.",
        "Select targeted upskilling tracks aligned with departmental advancement roadmaps.",
        "Participate in designated executive mentorship and project review circles.",
        "Submit candidacy dossier during the biannual career appraisal cycle."
      ],
      primaryAction: "Explore Progression Matrix",
      secondaryAction: "Download Skill Catalog (PDF)"
    }
  },
  {
    id: "03",
    step: "STEP 03",
    title: "Employee Growth and Future Opportunity",
    tagline: "Talent Nurturing & Leadership",
    shortDescription: "Long-term career roadmaps, executive succession planning, and advanced leadership opportunities.",
    accentColor: "#006d87",
    accentLight: "#e0f2fe",
    accentBorder: "border-[#006d87]",
    textAccent: "text-[#006d87]",
    icon: "Rocket",
    statusBadge: "Growth Track Open",
    lastUpdated: "28 Sep 2026",
    details: {
      headline: "Strategic Talent Incubator & Future Leadership Pipeline",
      summary: "Identifies and fast-tracks high-potential talent into organizational leadership, research directorships, and mission-critical roles.",
      stats: [
        { label: "Cohort Size", value: "120 Fellows" },
        { label: "Leadership Labs", value: "08 Modules" },
        { label: "Global Ties", value: "12 Institutes" },
        { label: "Succession Rate", value: "88% Internal" }
      ],
      keyHighlights: [
        "Executive leadership simulations led by industry stalwarts and senior administrators",
        "Direct participation in high-level strategic policy task forces and delegations",
        "Personalized career development budgets and digital innovation research grants",
        "Structured succession pipelines ensuring seamless institutional leadership continuity"
      ],
      eligibilitySummary: "Mid-level officers with minimum 3 years of commendable service and exceptional leadership potential.",
      steps: [
        "Receive institutional nomination or submit self-application with project portfolio.",
        "Complete the 360-degree leadership diagnostic assessment.",
        "Participate in the multi-stage executive panel interview.",
        "Commence the 12-month Advanced Executive Leadership Fellowship."
      ],
      primaryAction: "Apply for Leadership Fellowship",
      secondaryAction: "View Leadership Guidelines"
    }
  },
  {
    id: "04",
    step: "STEP 04",
    title: "CRCCF Employment Eligibility Criteria",
    tagline: "Mandatory Qualifications & Norms",
    shortDescription: "Detailed educational qualifications, experience benchmarks, age limits, and statutory relaxations.",
    accentColor: "#14b8a6",
    accentLight: "#f0fdfa",
    accentBorder: "border-[#14b8a6]",
    textAccent: "text-[#14b8a6]",
    icon: "FileCheck",
    statusBadge: "Gazette Norms 2026",
    lastUpdated: "03 Oct 2026",
    details: {
      headline: "Statutory Educational, Age & Professional Benchmarks",
      summary: "Defines the non-negotiable minimum qualifications, relaxation norms for reserved quotas, and degree equivalence rules.",
      stats: [
        { label: "Age Bracket", value: "18 - 35 Years" },
        { label: "Age Relaxation", value: "Up to 5 Years" },
        { label: "Min Qualification", value: "Graduate / PG" },
        { label: "Experience", value: "0 - 5 Years" }
      ],
      keyHighlights: [
        "Discipline-wise technical qualification norms compliant with AICTE & UGC standards",
        "Statutory age relaxations for SC/ST (5 yrs), OBC-NCL (3 yrs), and PwD (10 yrs)",
        "Equivalence benchmarks for foreign university degrees and distance education diplomas",
        "Clear guidelines on medical fitness requirements and physical assessment standards"
      ],
      eligibilitySummary: "All candidates must meet cutoff dates for educational credentials as per active Gazette notifications.",
      steps: [
        "Verify your discipline and reservation quota in Annexure 'A'.",
        "Ensure valid caste, income, or disability certificates are issued by competent authorities.",
        "Check cutoff dates for degree completion and marksheet issuance.",
        "Upload verified proofs during the single-sign-on application phase."
      ],
      primaryAction: "Check Your Eligibility",
      secondaryAction: "Download Criteria Chart (PDF)"
    }
  },
  {
    id: "05",
    step: "STEP 05",
    title: "CRCCF Recruitment & Selection Process",
    tagline: "Multi-Tier Evaluation Lifecycle",
    shortDescription: "End-to-end evaluation stages including screening, CBT exams, interview panels, and merit vetting.",
    accentColor: "#e11d48",
    accentLight: "#fff1f2",
    accentBorder: "border-[#e11d48]",
    textAccent: "text-[#e11d48]",
    icon: "GitMerge",
    statusBadge: "Selection Protocol",
    lastUpdated: "02 Oct 2026",
    details: {
      headline: "Standard Multi-Stage Merit Assessment Engine",
      summary: "Rigorous 3-stage selection protocol encompassing online computer tests, domain skill assessments, and final panel interviews.",
      stats: [
        { label: "Stages", value: "3 Tier System" },
        { label: "Assessment Mode", value: "CBT + Panel" },
        { label: "Negative Marking", value: "0.25 Marks" },
        { label: "Merit Weightage", value: "70% CBT / 30% Int" }
      ],
      keyHighlights: [
        "Tier-I: Comprehensive Computer-Based Test (General Awareness, Reasoning & Quantitative)",
        "Tier-II: Advanced Domain Knowledge Assessment and Practical Case Study Solving",
        "Tier-III: Comprehensive Personality, Ethics, and Leadership Panel Interaction",
        "Automated biometric matching and proctoring surveillance to ensure exam integrity"
      ],
      eligibilitySummary: "Candidates qualifying Tier-I cutoff benchmarks proceed sequentially to subsequent evaluation tiers.",
      steps: [
        "Appear for Tier-I Computer-Based Assessment on scheduled test dates.",
        "Check provisional scorecard and shortlisted candidate roll-number gazettes.",
        "Attend Tier-II Domain Evaluation at designated nodal testing centers.",
        "Appear for final verification and Panel Interview round."
      ],
      primaryAction: "View Selection Flowchart",
      secondaryAction: "Download Exam Pattern (PDF)"
    }
  },
  {
    id: "06",
    step: "STEP 06",
    title: "CRCCF Recruitment Instructions",
    tagline: "Applicant Portal Directives",
    shortDescription: "Essential step-by-step instructions for portal registration, document uploads, and fee payments.",
    accentColor: "#7c3aed",
    accentLight: "#f5f3ff",
    accentBorder: "border-[#7c3aed]",
    textAccent: "text-[#7c3aed]",
    icon: "FileText",
    statusBadge: "Advisory Active",
    lastUpdated: "Active 24/7",
    details: {
      headline: "Candidate Registration, Form Filing & Submission Guidelines",
      summary: "Detailed instructions to prevent application rejections due to incomplete dossiers, payment errors, or photo format non-compliance.",
      stats: [
        { label: "Photo Format", value: "JPG (20-50 KB)" },
        { label: "Signature", value: "JPG (10-20 KB)" },
        { label: "Document Type", value: "PDF (Max 1 MB)" },
        { label: "Payment Modes", value: "UPI, Cards, Net" }
      ],
      keyHighlights: [
        "One-Time Registration (OTR) profile creation with unique 12-digit Candidate ID",
        "Guidelines on acceptable recent passport-size photograph with white backdrop",
        "Mandatory self-attestation rules for academic transcripts and experience certificates",
        "Troubleshooting portal connection issues and real-time transaction reconciliation"
      ],
      eligibilitySummary: "Mandatory reading for all prospective aspirants prior to beginning online registration.",
      steps: [
        "Review technical specification requirements for digital photo and document scans.",
        "Complete OTR registration and verify mobile/email OTP credentials.",
        "Carefully fill academic particulars and upload verified scanned certificates.",
        "Submit online processing fee and save the Barcoded final acknowledgement slip."
      ],
      primaryAction: "Read Detailed Instructions",
      secondaryAction: "Download Guidelines Checklist"
    }
  },
  {
    id: "07",
    step: "STEP 07",
    title: "CRCCF Recruitment Guidelines",
    tagline: "Standard Operating Procedures",
    shortDescription: "Statutory benchmarks ensuring non-discriminatory, transparent, and merit-driven employment conduct.",
    accentColor: "#0284c7",
    accentLight: "#f0f9ff",
    accentBorder: "border-[#0284c7]",
    textAccent: "text-[#0284c7]",
    icon: "Scale",
    statusBadge: "Standard Guidelines",
    lastUpdated: "29 Sep 2026",
    details: {
      headline: "Statutory Governance, Integrity & Disciplinary Regulations",
      summary: "Official governance handbook establishing strict anti-malpractice rules, biometric integrity audits, and candidate grievance channels.",
      stats: [
        { label: "Integrity Code", value: "ISO 9001:2026" },
        { label: "Biometric Audit", value: "Dual Tier" },
        { label: "Appeals Window", value: "15 Calendar Days" },
        { label: "Ombudsman", value: "Active Support" }
      ],
      keyHighlights: [
        "Severe penalties and permanent debarment for impersonation, cheating, or document fraud",
        "Formal representation mechanism for answering disputed questions in official keys",
        "Special accommodations and compensatory time for candidates with benchmark disabilities",
        "Zero-tolerance code against canvassing or unauthorized placement middle-agents"
      ],
      eligibilitySummary: "Enforceable across all recruitment centers, examination supervisors, and registered candidates.",
      steps: [
        "Familiarize yourself with examination hall regulations and prohibited electronic items.",
        "Report any irregularity or malpractice directly to the Confidential Oversight Cell.",
        "Submit representation regarding examination questions within the stipulated challenge window.",
        "Keep biometric receipts safe until final recruitment clearance."
      ],
      primaryAction: "View Governance Guidelines",
      secondaryAction: "Submit Grievance Representation"
    }
  },
  {
    id: "08",
    step: "STEP 08",
    title: "CRCCF Recruitment Calendar",
    tagline: "Annual Schedules & Key Milestones",
    shortDescription: "Chronological schedule of upcoming gazette releases, exam cycles, and final joining timelines.",
    accentColor: "#059669",
    accentLight: "#ecfdf5",
    accentBorder: "border-[#059669]",
    textAccent: "text-[#059669]",
    icon: "Calendar",
    statusBadge: "Cycle 2026-27",
    lastUpdated: "Today, 09:00 AM",
    details: {
      headline: "Annual Examination Schedule, Deadlines & Intake Roadmap",
      summary: "Provides an exhaustive annual roadmap of all planned recruitment notifications, computer exams, interview cycles, and joining dates.",
      stats: [
        { label: "Current Cycle", value: "2026 - 2027" },
        { label: "Total Drives", value: "18 Major Drives" },
        { label: "Next Gazette", value: "15 Nov 2026" },
        { label: "Annual Intake", value: "3,850 Posts" }
      ],
      keyHighlights: [
        "Advance notification dates enabling candidates to structure preparation timelines",
        "Synchronized examination windows preventing clashes across major national tests",
        "Real-time countdown trackers for online registration deadlines and admit card releases",
        "Integrated SMS & email notification subscription for instant schedule revision alerts"
      ],
      eligibilitySummary: "Updated dynamically by the Central Examination Control Board on the 1st of every month.",
      steps: [
        "Filter the recruitment calendar by discipline, education level, or pay band.",
        "Subscribe to automated Google/Outlook Calendar sync for exam date alerts.",
        "Note hard deadlines for online application submission and fee payment.",
        "Check regular updates for any weather or venue-related date modifications."
      ],
      primaryAction: "Download Annual Calendar (PDF)",
      secondaryAction: "Sync Calendar to Phone"
    }
  },
  {
    id: "09",
    step: "STEP 09",
    title: "Code of Conduct & Professional Ethics",
    tagline: "Integrity & Workplace Standards",
    shortDescription: "Institutional standards for ethical workplace behavior, integrity, data privacy, and accountability.",
    accentColor: "#d97706",
    accentLight: "#fffbeb",
    accentBorder: "border-[#d97706]",
    textAccent: "text-[#d97706]",
    icon: "ShieldCheck",
    statusBadge: "Mandatory Code",
    lastUpdated: "30 Sep 2026",
    details: {
      headline: "Ethical Standards, Data Security & Professional Conduct Code",
      summary: "Foundational code outlining mandatory ethical responsibilities, confidentiality covenants, anti-harassment policies, and public service ethos.",
      stats: [
        { label: "Ethics Code", value: "Rev. 5.2" },
        { label: "Whistleblower", value: "100% Anonymous" },
        { label: "Data Privacy", value: "ISO 27001" },
        { label: "Compliance", value: "Annual Audit" }
      ],
      keyHighlights: [
        "Strict protocols preventing conflict of interest and unauthorized public disclosures",
        "Mandatory workplace diversity, inclusion, and anti-harassment training for all staff",
        "End-to-end data security and sensitive file handling compliance protocols",
        "Confidential reporting channels with robust anti-retaliation protections"
      ],
      eligibilitySummary: "Binding on all regular employees, consultants, interns, and contractual specialists.",
      steps: [
        "Read the complete Institutional Code of Professional Conduct handbook.",
        "Sign the digital Non-Disclosure and Ethics Compliance Undertaking.",
        "Complete the mandatory annual 2-hour online Ethics refresher certification.",
        "Report any ethical concern via the encrypted Ombudsman portal."
      ],
      primaryAction: "Download Ethics Code (PDF)",
      secondaryAction: "Report Ethical Concern"
    }
  },
  {
    id: "10",
    step: "STEP 10",
    title: "Training, Orientation & Skill Development",
    tagline: "Onboarding & Continuous Mastery",
    shortDescription: "Comprehensive induction bootcamps, technical workshops, and accredited professional certifications.",
    accentColor: "#4f46e5",
    accentLight: "#eef2ff",
    accentBorder: "border-[#4f46e5]",
    textAccent: "text-[#4f46e5]",
    icon: "GraduationCap",
    statusBadge: "L&D Program Active",
    lastUpdated: "04 Oct 2026",
    details: {
      headline: "Integrated Induction Academy & Skill Enhancement Framework",
      summary: "Accelerates employee mastery through structured 4-week orientation bootcamps, domain masterclasses, and hands-on laboratory simulators.",
      stats: [
        { label: "Induction Length", value: "04 Weeks" },
        { label: "Active Courses", value: "240+ Modules" },
        { label: "Certifications", value: "Global Standards" },
        { label: "LMS Platform", value: "24/7 Access" }
      ],
      keyHighlights: [
        "Four-week immersive foundational orientation covering institutional systems and workflows",
        "Self-paced digital learning portal with accredited tracks in AI, data analytics, and public law",
        "Hands-on technical simulation laboratories for practical operational readiness",
        "Quarterly masterclasses conducted by distinguished domain researchers and senior directors"
      ],
      eligibilitySummary: "Mandatory induction for newly inducted personnel; elective continuing modules for all active staff.",
      steps: [
        "Log in to the Learning Management System (LMS) with your employee credentials.",
        "Complete foundational induction milestones within the first 30 days of joining.",
        "Select targeted skill mastery modules recommended by your departmental mentor.",
        "Obtain verifiable digital credentials and milestone completion badges."
      ],
      primaryAction: "Open Learning Academy Portal",
      secondaryAction: "View Course Directory"
    }
  },
  {
    id: "11",
    step: "STEP 11",
    title: "Performance Review & Evaluation System",
    tagline: "Appraisal & KPI Benchmarks",
    shortDescription: "Transparent periodic performance appraisals, goal scoring matrices, and constructive feedback loops.",
    accentColor: "#db2777",
    accentLight: "#fdf2f8",
    accentBorder: "border-[#db2777]",
    textAccent: "text-[#db2777]",
    icon: "BarChart3",
    statusBadge: "Annual Review Code",
    lastUpdated: "01 Oct 2026",
    details: {
      headline: "Objective Merit Appraisals & Goal Alignment Engine",
      summary: "360-degree performance evaluation framework aligning individual goals with institutional mission benchmarks for transparent growth.",
      stats: [
        { label: "Cycle", value: "Bi-Annual Review" },
        { label: "Feedback Mode", value: "360-Degree" },
        { label: "KPI Tracking", value: "Real-Time Cloud" },
        { label: "Appeal Period", value: "21 Days" }
      ],
      keyHighlights: [
        "Transparent, measurable Key Performance Indicators (KPIs) mutually defined each quarter",
        "Holistic 360-degree feedback from peers, subordinates, and administrative supervisors",
        "Objective merit scoring calibrated across organizational normalization committees",
        "Constructive development plans and personalized coaching for emerging performers"
      ],
      eligibilitySummary: "All personnel completing minimum 6 months of active departmental service.",
      steps: [
        "Set and calibrate quarterly Key Result Areas (KRAs) on the performance dashboard.",
        "Submit self-evaluation portfolio highlighting key initiatives and achievements.",
        "Participate in the formal 1-on-1 performance review discussion with reporting officer.",
        "Review finalized appraisal scorecard and career progression recommendations."
      ],
      primaryAction: "Open Appraisal Portal",
      secondaryAction: "Download Evaluation Matrix"
    }
  },
  {
    id: "12",
    step: "STEP 12",
    title: "Employee Rights & Responsibilities",
    tagline: "Workplace Entitlements & Duties",
    shortDescription: "Clear statutory protections, leave entitlements, health benefits, and core workplace obligations.",
    accentColor: "#0891b2",
    accentLight: "#ecfeff",
    accentBorder: "border-[#0891b2]",
    textAccent: "text-[#0891b2]",
    icon: "HeartHandshake",
    statusBadge: "Statutory Policy",
    lastUpdated: "02 Oct 2026",
    details: {
      headline: "Comprehensive Employee Charter, Benefits & Workplace Rights",
      summary: "Guarantees fair compensation, comprehensive medical coverage, generous leave frameworks, and equal opportunity workplace safeguards.",
      stats: [
        { label: "Health Cover", value: "Family Cashless" },
        { label: "Paid Leaves", value: "30 Days / Yr" },
        { label: "Parental Leave", value: "Full Pay Norms" },
        { label: "Grievance Time", value: "Max 7 Days" }
      ],
      keyHighlights: [
        "Comprehensive cashless health insurance for employee, spouse, children, and dependent parents",
        "Statutory provident fund, gratuity, and competitive retirement pension frameworks",
        "Equal opportunity protections prohibiting discrimination on gender, caste, or background",
        "Transparent internal grievance redressal committee guaranteeing swift resolutions"
      ],
      eligibilitySummary: "Applicable to all confirmed regular employees and eligible contractual personnel.",
      steps: [
        "Review the Employee Welfare and Entitlements Charter handbook.",
        "Register dependent family members on the cashless Health Insurance portal.",
        "Apply for planned leaves and sabbatical permissions through the HR self-service portal.",
        "Utilize the confidential Employee Assistance Program for wellness support."
      ],
      primaryAction: "Download Employee Charter (PDF)",
      secondaryAction: "Access Benefits Dashboard"
    }
  },
  {
    id: "13",
    step: "STEP 13",
    title: "Volunteer & Internship Policy",
    tagline: "Fellowships & Practical Engagement",
    shortDescription: "Structured fellowship opportunities, hands-on mentorship, and student internship frameworks.",
    accentColor: "#ea580c",
    accentLight: "#fff7ed",
    accentBorder: "border-[#ea580c]",
    textAccent: "text-[#ea580c]",
    icon: "HandHeart",
    statusBadge: "Internship Open",
    lastUpdated: "04 Oct 2026",
    details: {
      headline: "Young Professional Fellowships & Practical Engagement Tracks",
      summary: "Provides students and early-career researchers with immersion into public administration, technological research, and community impact.",
      stats: [
        { label: "Duration", value: "2 to 6 Months" },
        { label: "Monthly Stipend", value: "Merit Scale" },
        { label: "Open Slots", value: "60 Fellows" },
        { label: "Certificate", value: "Govt. Accredited" }
      ],
      keyHighlights: [
        "Direct mentorship under seasoned administrators, scientists, and industry leaders",
        "Hands-on project ownership in digital transformation, governance, and policy analytics",
        "Official certification of completion and fast-track consideration for junior vacancies",
        "Competitive monthly stipend and full access to institutional research libraries"
      ],
      eligibilitySummary: "Undergraduate and postgraduate students enrolled in recognized universities with min 70% marks.",
      steps: [
        "Submit online internship application along with University No-Objection Certificate.",
        "Upload statement of purpose and selected departmental interest domain.",
        "Participate in the brief virtual screening and project matching interview.",
        "Join designated nodal laboratory / department for onboarding."
      ],
      primaryAction: "Apply for Internship / Fellowship",
      secondaryAction: "Download Internship Policy"
    }
  },
  {
    id: "14",
    step: "STEP 14",
    title: "Employee Recognition & Awards",
    tagline: "Merit Honors & Excellence Incentives",
    shortDescription: "Quarterly excellence commendations, innovative contribution honors, and performance incentives.",
    accentColor: "#ca8a04",
    accentLight: "#fefce8",
    accentBorder: "border-[#ca8a04]",
    textAccent: "text-[#ca8a04]",
    icon: "Trophy",
    statusBadge: "Rewards Matrix",
    lastUpdated: "27 Sep 2026",
    details: {
      headline: "Institutional Honors, Innovation Awards & Merit Citations",
      summary: "Celebrates exceptional performance, innovative process engineering, and outstanding public service through annual honors and bonuses.",
      stats: [
        { label: "Annual Gala", value: "15 December" },
        { label: "Award Categories", value: "08 Disciplines" },
        { label: "Cash Grants", value: "Up to ₹2,50,000" },
        { label: "President's Medal", value: "Nominated" }
      ],
      keyHighlights: [
        "Prestigious Director General's Medal for Outstanding Institutional Service",
        "Annual Innovation & Patent Grant Awards rewarding high-impact operational breakthroughs",
        "Exemplary Team Performance Citations and sponsored international conference travel",
        "Permanent roll of honor showcased in the digital institutional hall of fame"
      ],
      eligibilitySummary: "All employees and teams demonstrating exemplary service or breakthrough innovations.",
      steps: [
        "Submit peer or team nominations with detailed project impact documentation.",
        "Independent Grand Jury reviews submitted portfolios across objective impact rubrics.",
        "Final honorees announced during the Annual Institutional Foundation Day Gala.",
        "Citations, trophies, and cash honors presented during the official award convocation."
      ],
      primaryAction: "Submit Award Nomination",
      secondaryAction: "View Roll of Honor"
    }
  },
  {
    id: "15",
    step: "STEP 15",
    title: "Dummy Policy 1",
    tagline: "Supplementary Institutional Bylaw",
    shortDescription: "Flexible framework for emerging workplace initiatives, special allowances, and remote work norms.",
    accentColor: "#9333ea",
    accentLight: "#faf5ff",
    accentBorder: "border-[#9333ea]",
    textAccent: "text-[#9333ea]",
    icon: "Sparkles",
    statusBadge: "Provisionary Rev. 1",
    lastUpdated: "04 Oct 2026",
    details: {
      headline: "Adaptive Workplace Framework & Emerging Institutional Provisions",
      summary: "Governs pilot initiatives including hybrid flexible work schedules, modern digital collaboration allowances, and specialized project bonuses.",
      stats: [
        { label: "Policy Status", value: "Active Pilot" },
        { label: "Hybrid Cap", value: "2 Days / Wk" },
        { label: "Special Grant", value: "Eligible" },
        { label: "Review Window", value: "Quarterly" }
      ],
      keyHighlights: [
        "Guidelines for hybrid and remote collaborative operations with encrypted access keys",
        "Subsidies and allowances for home office ergonomics and high-speed enterprise broadband",
        "Cross-functional temporary taskforce mobilization for mission-critical assignments",
        "Streamlined digital expense reimbursement and paperless workflow management"
      ],
      eligibilitySummary: "Applicable to eligible project branches under the active modernization charter.",
      steps: [
        "Consult your project lead regarding hybrid eligibility and departmental deliverables.",
        "Register authorized workstation credentials with the central IT security cell.",
        "Submit monthly project synergy log on the digital portal.",
        "Review quarterly pilot outcomes and provide constructive policy feedback."
      ],
      primaryAction: "Download Policy Draft (PDF)",
      secondaryAction: "View Pilot Guidelines"
    }
  },
  {
    id: "16",
    step: "STEP 16",
    title: "Dummy Policy 2",
    tagline: "Extended Administrative Provision",
    shortDescription: "Comprehensive compliance guidelines governing digital transformation and inter-departmental synergy.",
    accentColor: "#10b981",
    accentLight: "#ecfdf5",
    accentBorder: "border-[#10b981]",
    textAccent: "text-[#10b981]",
    icon: "Workflow",
    statusBadge: "Provisionary Rev. 2",
    lastUpdated: "04 Oct 2026",
    details: {
      headline: "Inter-Agency Synergy & Enterprise Digital Architecture Code",
      summary: "Standardizes cross-ministerial data exchange, open-source technology integration, and sustainable paperless administration standards.",
      stats: [
        { label: "Synergy Index", value: "High Priority" },
        { label: "Paperless Uptime", value: "100% Target" },
        { label: "API Standards", value: "REST / GraphQL" },
        { label: "Green Energy", value: "Eco-Certified" }
      ],
      keyHighlights: [
        "Inter-agency protocol standardization for real-time secure verification of credentials",
        "Eco-friendly zero-paper policy mandating electronic file management systems (e-Office)",
        "Open innovation sandbox for collaborative research partnerships with premier universities",
        "Comprehensive cyber resilience and automated multi-tier disaster recovery failovers"
      ],
      eligibilitySummary: "All administrative departments, testing directorates, and autonomous affiliate centers.",
      steps: [
        "Review enterprise interoperability protocols and digital security standards.",
        "Implement e-Office paperless processing for all outgoing administrative files.",
        "Conduct quarterly cyber security compliance audits in coordination with nodal IT cells.",
        "Access inter-agency portal for unified database queries and verification."
      ],
      primaryAction: "Download Synergy Handbook",
      secondaryAction: "Access IT Architecture Code"
    }
  }
];

/**
 * 4. Document Verification Data (24 Cards)
 */
export const verificationCardsData = [
  {
    step: '01',
    title: 'Student Verification',
    description: 'VALIDATE STUDENT ENROLLMENT, ROLL NUMBER, AND ACADEMIC DEGREE STATUS.',
    themeGradient: 'from-[#22d68f] to-[#0cb675]',
    badgeGradient: 'from-[#20cb88] to-[#11b876]',
    circleBg: 'bg-[#00b074]',
    circleShadow: 'shadow-[0_10px_24px_rgba(0,176,116,0.38)]',
    outerShadow: 'shadow-[0_20px_45px_rgba(16,185,129,0.32)]',
    iconName: 'GraduationCap',
  },
  {
    step: '02',
    title: 'Employee Verification',
    description: 'CONFIRM WORK HISTORY, DESIGNATION, AND PROFESSIONAL BACKGROUND SCREENING.',
    themeGradient: 'from-[#0ea5e9] to-[#0284c7]',
    badgeGradient: 'from-[#38bdf8] to-[#0284c7]',
    circleBg: 'bg-[#0284c7]',
    circleShadow: 'shadow-[0_10px_24px_rgba(2,132,199,0.38)]',
    outerShadow: 'shadow-[0_20px_45px_rgba(14,165,233,0.32)]',
    iconName: 'UserCheck',
  },
  {
    step: '03',
    title: 'Visitor Appointment Verification',
    description: 'VALIDATE GUEST PASS, HOST APPROVAL, AND SCHEDULED MEETING SLOT.',
    themeGradient: 'from-[#f59e0b] to-[#d97706]',
    badgeGradient: 'from-[#fbbf24] to-[#d97706]',
    circleBg: 'bg-[#d97706]',
    circleShadow: 'shadow-[0_10px_24px_rgba(217,119,6,0.38)]',
    outerShadow: 'shadow-[0_20px_45px_rgba(245,158,11,0.32)]',
    iconName: 'CalendarCheck',
  },
  {
    step: '04',
    title: 'Gate Pass Verification',
    description: 'FACILITY ENTRY PERMISSION AND BARCODE-SECURED CLEARANCE CHECK.',
    themeGradient: 'from-[#8b5cf6] to-[#6d28d9]',
    badgeGradient: 'from-[#a78bfa] to-[#6d28d9]',
    circleBg: 'bg-[#6d28d9]',
    circleShadow: 'shadow-[0_10px_24px_rgba(109,40,217,0.38)]',
    outerShadow: 'shadow-[0_20px_45px_rgba(139,92,246,0.32)]',
    iconName: 'DoorOpen',
  },
  {
    step: '05',
    title: 'License Verification',
    description: 'VALIDATE GOVERNMENT PERMITS, DRIVING AND PROFESSIONAL PRACTICE LICENSES.',
    themeGradient: 'from-[#14b8a6] to-[#0f766e]',
    badgeGradient: 'from-[#2dd4bf] to-[#0f766e]',
    circleBg: 'bg-[#0f766e]',
    circleShadow: 'shadow-[0_10px_24px_rgba(20,184,166,0.38)]',
    outerShadow: 'shadow-[0_20px_45px_rgba(20,184,166,0.32)]',
    iconName: 'FileBadge',
  },
  {
    step: '06',
    title: 'Organization Verification',
    description: 'INCORPORATION DETAILS, TAX IDENTIFICATION, AND CORPORATE REGISTRATION.',
    themeGradient: 'from-[#6366f1] to-[#4338ca]',
    badgeGradient: 'from-[#818cf8] to-[#4338ca]',
    circleBg: 'bg-[#4338ca]',
    circleShadow: 'shadow-[0_10px_24px_rgba(99,102,241,0.38)]',
    outerShadow: 'shadow-[0_20px_45px_rgba(99,102,241,0.32)]',
    iconName: 'Building2',
  },
  {
    step: '07',
    title: 'Agreement Verification',
    description: 'LEGALLY BINDING CONTRACT AUDIT, TERMS CONSENT, AND STAMP INTEGRITY.',
    themeGradient: 'from-[#f43f5e] to-[#be123c]',
    badgeGradient: 'from-[#fb7185] to-[#be123c]',
    circleBg: 'bg-[#be123c]',
    circleShadow: 'shadow-[0_10px_24px_rgba(244,63,94,0.38)]',
    outerShadow: 'shadow-[0_20px_45px_rgba(244,63,94,0.32)]',
    iconName: 'FileSignature',
  },
  {
    step: '08',
    title: 'Web Domain Verification',
    description: 'DNS TXT RECORDS, WHOIS REGISTRY, AND SSL TLS CERTIFICATE AUTHENTICITY.',
    themeGradient: 'from-[#06b6d4] to-[#0891b2]',
    badgeGradient: 'from-[#22d3ee] to-[#0891b2]',
    circleBg: 'bg-[#0891b2]',
    circleShadow: 'shadow-[0_10px_24px_rgba(6,182,212,0.38)]',
    outerShadow: 'shadow-[0_20px_45px_rgba(6,182,212,0.32)]',
    iconName: 'Globe',
  },
  {
    step: '09',
    title: 'Membership Verification',
    description: 'MEMBERSHIP TIER, EXPIRY VALIDATION, AND ACTIVE SUBSCRIPTION CHECK.',
    themeGradient: 'from-[#22d68f] to-[#0cb675]',
    badgeGradient: 'from-[#20cb88] to-[#11b876]',
    circleBg: 'bg-[#00b074]',
    circleShadow: 'shadow-[0_10px_24px_rgba(0,176,116,0.38)]',
    outerShadow: 'shadow-[0_20px_45px_rgba(16,185,129,0.32)]',
    iconName: 'BadgeCheck',
  },
  {
    step: '10',
    title: 'Notice Verification',
    description: 'OFFICIAL PUBLIC CIRCULAR, AUTHENTICITY HASH, AND SIGNATORY CHECK.',
    themeGradient: 'from-[#f59e0b] to-[#d97706]',
    badgeGradient: 'from-[#fbbf24] to-[#d97706]',
    circleBg: 'bg-[#d97706]',
    circleShadow: 'shadow-[0_10px_24px_rgba(217,119,6,0.38)]',
    outerShadow: 'shadow-[0_20px_45px_rgba(245,158,11,0.32)]',
    iconName: 'BellRing',
  },
  {
    step: '11',
    title: 'Invitation Verification',
    description: 'SPECIAL EVENT ENTRY CODE, VIP INVITATION, AND ATTENDEE AUTHENTICATION.',
    themeGradient: 'from-[#8b5cf6] to-[#6d28d9]',
    badgeGradient: 'from-[#a78bfa] to-[#6d28d9]',
    circleBg: 'bg-[#6d28d9]',
    circleShadow: 'shadow-[0_10px_24px_rgba(109,40,217,0.38)]',
    outerShadow: 'shadow-[0_20px_45px_rgba(139,92,246,0.32)]',
    iconName: 'Ticket',
  },
  {
    step: '12',
    title: 'Certificate Verification',
    description: 'DIPLOMA, ACCREDITATION, COURSE COMPLETION, AND SERIAL NUMBER LOOKUP.',
    themeGradient: 'from-[#f43f5e] to-[#be123c]',
    badgeGradient: 'from-[#fb7185] to-[#be123c]',
    circleBg: 'bg-[#be123c]',
    circleShadow: 'shadow-[0_10px_24px_rgba(244,63,94,0.38)]',
    outerShadow: 'shadow-[0_20px_45px_rgba(244,63,94,0.32)]',
    iconName: 'Award',
  },
  {
    step: '13',
    title: 'ID Card Verification',
    description: 'PHOTO IDENTIFICATION, NATIONAL ID, PASSPORT, AND SMART CARD VALIDITY.',
    themeGradient: 'from-[#14b8a6] to-[#0f766e]',
    badgeGradient: 'from-[#2dd4bf] to-[#0f766e]',
    circleBg: 'bg-[#0f766e]',
    circleShadow: 'shadow-[0_10px_24px_rgba(20,184,166,0.38)]',
    outerShadow: 'shadow-[0_20px_45px_rgba(20,184,166,0.32)]',
    iconName: 'CreditCard',
  },
  {
    step: '14',
    title: 'Authorization Verification',
    description: 'EXECUTIVE MANDATE, DELEGATED AUTHORITY, AND PERMISSION LEVEL AUDIT.',
    themeGradient: 'from-[#6366f1] to-[#4338ca]',
    badgeGradient: 'from-[#818cf8] to-[#4338ca]',
    circleBg: 'bg-[#4338ca]',
    circleShadow: 'shadow-[0_10px_24px_rgba(99,102,241,0.38)]',
    outerShadow: 'shadow-[0_20px_45px_rgba(99,102,241,0.32)]',
    iconName: 'ShieldCheck',
  },
  {
    step: '15',
    title: 'Digital Signature Verification',
    description: 'ASYMMETRIC CRYPTOGRAPHIC KEY, TIMESTAMP, AND INTEGRITY INTEGRATION.',
    themeGradient: 'from-[#0ea5e9] to-[#0284c7]',
    badgeGradient: 'from-[#38bdf8] to-[#0284c7]',
    circleBg: 'bg-[#0284c7]',
    circleShadow: 'shadow-[0_10px_24px_rgba(2,132,199,0.38)]',
    outerShadow: 'shadow-[0_20px_45px_rgba(14,165,233,0.32)]',
    iconName: 'PenTool',
  },
  {
    step: '16',
    title: 'Email Address Verification',
    description: 'SMTP HANDSHAKE, DOMAIN DELIVERABILITY, AND INBOX AUTHENTICATION.',
    themeGradient: 'from-[#22d68f] to-[#0cb675]',
    badgeGradient: 'from-[#20cb88] to-[#11b876]',
    circleBg: 'bg-[#00b074]',
    circleShadow: 'shadow-[0_10px_24px_rgba(0,176,116,0.38)]',
    outerShadow: 'shadow-[0_20px_45px_rgba(16,185,129,0.32)]',
    iconName: 'Mail',
  },
  {
    step: '17',
    title: 'Mobile Number Verification',
    description: 'CARRIER NETWORK LOOKUP, SMS OTP AUTHENTICATION, AND ACTIVE LINE CHECK.',
    themeGradient: 'from-[#f59e0b] to-[#d97706]',
    badgeGradient: 'from-[#fbbf24] to-[#d97706]',
    circleBg: 'bg-[#d97706]',
    circleShadow: 'shadow-[0_10px_24px_rgba(217,119,6,0.38)]',
    outerShadow: 'shadow-[0_20px_45px_rgba(245,158,11,0.32)]',
    iconName: 'Smartphone',
  },
  {
    step: '18',
    title: 'Social Media Verification',
    description: 'VERIFIED BADGE STATUS, OFFICIAL SOCIAL HANDLES, AND LINKAGE CHECK.',
    themeGradient: 'from-[#8b5cf6] to-[#6d28d9]',
    badgeGradient: 'from-[#a78bfa] to-[#6d28d9]',
    circleBg: 'bg-[#6d28d9]',
    circleShadow: 'shadow-[0_10px_24px_rgba(109,40,217,0.38)]',
    outerShadow: 'shadow-[0_20px_45px_rgba(139,92,246,0.32)]',
    iconName: 'Share2',
  },
  {
    step: '19',
    title: 'Software Product Verification',
    description: 'LICENSE KEY AUTHENTICATION, CHECKSUM HASH, AND VERSION VERIFICATION.',
    themeGradient: 'from-[#f43f5e] to-[#be123c]',
    badgeGradient: 'from-[#fb7185] to-[#be123c]',
    circleBg: 'bg-[#be123c]',
    circleShadow: 'shadow-[0_10px_24px_rgba(244,63,94,0.38)]',
    outerShadow: 'shadow-[0_20px_45px_rgba(244,63,94,0.32)]',
    iconName: 'Code2',
  },
  {
    step: '20',
    title: 'Material Verification',
    description: 'PHYSICAL QUALITY AUDIT, MATERIAL SAFETY DATA, AND CERTIFICATION COMPLIANCE.',
    themeGradient: 'from-[#14b8a6] to-[#0f766e]',
    badgeGradient: 'from-[#2dd4bf] to-[#0f766e]',
    circleBg: 'bg-[#0f766e]',
    circleShadow: 'shadow-[0_10px_24px_rgba(20,184,166,0.38)]',
    outerShadow: 'shadow-[0_20px_45px_rgba(20,184,166,0.32)]',
    iconName: 'Boxes',
  },
  {
    step: '21',
    title: 'Book Verification',
    description: 'ISBN NUMBER VALIDATION, PUBLISHER COPYRIGHT, AND EDITION CHECK.',
    themeGradient: 'from-[#6366f1] to-[#4338ca]',
    badgeGradient: 'from-[#818cf8] to-[#4338ca]',
    circleBg: 'bg-[#4338ca]',
    circleShadow: 'shadow-[0_10px_24px_rgba(99,102,241,0.38)]',
    outerShadow: 'shadow-[0_20px_45px_rgba(99,102,241,0.32)]',
    iconName: 'BookOpen',
  },
  {
    step: '22',
    title: 'Report Verification',
    description: 'AUDIT REPORT INTEGRITY, DATA ACCURACY, AND EXECUTIVE APPROVAL CHECK.',
    themeGradient: 'from-[#0ea5e9] to-[#0284c7]',
    badgeGradient: 'from-[#38bdf8] to-[#0284c7]',
    circleBg: 'bg-[#0284c7]',
    circleShadow: 'shadow-[0_10px_24px_rgba(2,132,199,0.38)]',
    outerShadow: 'shadow-[0_20px_45px_rgba(14,165,233,0.32)]',
    iconName: 'FileText',
  },
  {
    step: '23',
    title: 'Letter Verification',
    description: 'OFFICIAL LETTERHEAD AUTHENTICITY, REFERENCE DISPATCH, AND STAMP AUDIT.',
    themeGradient: 'from-[#22d68f] to-[#0cb675]',
    badgeGradient: 'from-[#20cb88] to-[#11b876]',
    circleBg: 'bg-[#00b074]',
    circleShadow: 'shadow-[0_10px_24px_rgba(0,176,116,0.38)]',
    outerShadow: 'shadow-[0_20px_45px_rgba(16,185,129,0.32)]',
    iconName: 'MailCheck',
  },
  {
    step: '24',
    title: 'Volunteer Verification',
    description: 'COMMUNITY VOLUNTEER REGISTRATION, SERVICE HOURS, AND ENDORSEMENT.',
    themeGradient: 'from-[#f43f5e] to-[#be123c]',
    badgeGradient: 'from-[#fb7185] to-[#be123c]',
    circleBg: 'bg-[#be123c]',
    circleShadow: 'shadow-[0_10px_24px_rgba(244,63,94,0.38)]',
    outerShadow: 'shadow-[0_20px_45px_rgba(244,63,94,0.32)]',
    iconName: 'HeartHandshake',
  },
];

/**
 * 5. Online Application Portal Options Data (30 Categories)
 */
export const portalOptionsData = [
  {
    step: '01',
    title: '10th Certificate Application Form',
    description: 'OFFICIAL MATRICULATION SECONDARY SCHOOL CERTIFICATE APPLICATION AND MARKSHEET ISSUANCE.',
    fromColor: '#f43f5e',
    toColor: '#a855f7',
    iconName: 'GraduationCap',
  },
  {
    step: '02',
    title: '12th Certificate Application Form',
    description: 'HIGHER SECONDARY INTERMEDIATE ACADEMIC PASS CERTIFICATE AND MIGRATION REQUEST.',
    fromColor: '#0ea5e9',
    toColor: '#6366f1',
    iconName: 'BookOpen',
  },
  {
    step: '03',
    title: 'ITI Certificate Application Form',
    description: 'INDUSTRIAL TRAINING INSTITUTE VOCATIONAL TRADE DIPLOMA AND SKILL CERTIFICATE FORM.',
    fromColor: '#f59e0b',
    toColor: '#d97706',
    iconName: 'Wrench',
  },
  {
    step: '04',
    title: 'Diploma Certificate Application Form',
    description: 'POLYTECHNIC DIPLOMA CREDENTIAL VERIFICATION, TRANSCRIPT, AND COMPLETION CERTIFICATE.',
    fromColor: '#10b981',
    toColor: '#06b6d4',
    iconName: 'FileCheck',
  },
  {
    step: '05',
    title: 'Degree Certificate Application Form',
    description: 'UNDERGRADUATE BACHELOR DEGREE CONVOCATION CERTIFICATE AND DEGREE ATTESTATION.',
    fromColor: '#8b5cf6',
    toColor: '#ec4899',
    iconName: 'Award',
  },
  {
    step: '06',
    title: 'Master Degree Certificate Application Form',
    description: 'POSTGRADUATE MASTER DEGREE CREDENTIALS, HONORS RECORD, AND SPECIALIZATION MERIT.',
    fromColor: '#e11d48',
    toColor: '#9333ea',
    iconName: 'Medal',
  },
  {
    step: '07',
    title: 'Seminar Registration Form',
    description: 'REGISTER FOR ACADEMIC KEYNOTE SESSIONS, EXPERT DISCUSSIONS, AND SYMPOSIUM ADMISSION.',
    fromColor: '#06b6d4',
    toColor: '#3b82f6',
    iconName: 'Users',
  },
  {
    step: '08',
    title: 'Webinar Registration Form',
    description: 'ONLINE VIRTUAL WEBINAR STREAMING PASS, ACCESS LINK, AND PARTICIPATION ATTENDANCE.',
    fromColor: '#14b8a6',
    toColor: '#0f766e',
    iconName: 'Video',
  },
  {
    step: '09',
    title: 'Workshop Registration Form',
    description: 'HANDS-ON TECHNICAL PRACTICAL WORKSHOP, TOOL LABS, AND SKILL DEVELOPMENT BOOTCAMP.',
    fromColor: '#f97316',
    toColor: '#ef4444',
    iconName: 'Sparkles',
  },
  {
    step: '10',
    title: 'Institutional Training Request Form',
    description: 'CORPORATE FACULTY AND INSTITUTION-WIDE PROFESSIONAL UPSKILLING WORKSHOP REQUEST.',
    fromColor: '#6366f1',
    toColor: '#4338ca',
    iconName: 'Building2',
  },
  {
    step: '11',
    title: 'Cyber Awareness Program Request Form',
    description: 'INFORMATION SECURITY, DATA PRIVACY, AND DIGITAL HYGIENE TRAINING PROGRAM.',
    fromColor: '#ec4899',
    toColor: '#be123c',
    iconName: 'ShieldCheck',
  },
  {
    step: '12',
    title: 'Collaboration Application Form',
    description: 'INSTITUTIONAL MOU, ACADEMIC EXCHANGE, AND JOINT VENTURE COLLABORATION PROPOSAL.',
    fromColor: '#0284c7',
    toColor: '#0369a1',
    iconName: 'Handshake',
  },
  {
    step: '13',
    title: 'Partnership Application Form',
    description: 'STRATEGIC ALLIANCE, INDUSTRY AFFILIATION, AND CORPORATE SPONSORSHIP PARTNERSHIP.',
    fromColor: '#22c55e',
    toColor: '#15803d',
    iconName: 'HeartHandshake',
  },
  {
    step: '14',
    title: 'Researcher Application Form',
    description: 'RESEARCH FELLOWSHIP, SCIENTIFIC GRANT PROPOSAL, AND LAB STUDY APPLICATION.',
    fromColor: '#a855f7',
    toColor: '#7e22ce',
    iconName: 'Microscope',
  },
  {
    step: '15',
    title: 'Freelance / Consultant Application Form',
    description: 'EXPERT ADVISORY, CONTRACT CONSULTING, AND FREELANCE PROJECT SPECIALIST REGISTRATION.',
    fromColor: '#f59e0b',
    toColor: '#b45309',
    iconName: 'UserCheck',
  },
  {
    step: '16',
    title: 'Volunteer Application Form',
    description: 'COMMUNITY OUTREACH, SOCIAL SERVICE EMPOWERMENT, AND VOLUNTEER CORPS ONBOARDING.',
    fromColor: '#f43f5e',
    toColor: '#e11d48',
    iconName: 'Heart',
  },
  {
    step: '17',
    title: 'Job Application Form',
    description: 'SUBMIT CANDIDATE PROFILE, EMPLOYMENT QUALIFICATIONS, AND VACANCY APPLICATION.',
    fromColor: '#3b82f6',
    toColor: '#1d4ed8',
    iconName: 'Briefcase',
  },
  {
    step: '18',
    title: 'Event Participation Application Form',
    description: 'ANNUAL CONCLAVE, CULTURAL SUMMIT, AND INDUSTRY COMPETITION PARTICIPANT ENTRY.',
    fromColor: '#8b5cf6',
    toColor: '#6d28d9',
    iconName: 'Ticket',
  },
  {
    step: '19',
    title: 'Duplicate ID Card Application Form',
    description: 'REPLACEMENT FOR LOST, DAMAGED, OR EXPIRED OFFICIAL SMART IDENTITY CARD.',
    fromColor: '#10b981',
    toColor: '#047857',
    iconName: 'CreditCard',
  },
  {
    step: '20',
    title: 'Duplicate Certificate Application Form',
    description: 'RE-ISSUANCE OF LOST ORIGINAL CERTIFICATE WITH VERIFIED POLICE AFFIDAVIT.',
    fromColor: '#06b6d4',
    toColor: '#0e7490',
    iconName: 'Copy',
  },
  {
    step: '21',
    title: 'Software Product Purchase Request Form',
    description: 'COMMERCIAL SOFTWARE LICENSE PROCUREMENT, BILLING QUOTE, AND SUITE ORDER.',
    fromColor: '#f97316',
    toColor: '#c2410c',
    iconName: 'ShoppingCart',
  },
  {
    step: '22',
    title: 'Software Product Demo Request Form',
    description: 'SCHEDULE LIVE PRODUCT WALKTHROUGH, FEATURE DEMO, AND TRIAL ENVIRONMENT SETUP.',
    fromColor: '#ec4899',
    toColor: '#9d174d',
    iconName: 'PlaySquare',
  },
  {
    step: '23',
    title: 'Technical Support Request Form',
    description: 'SYSTEM TROUBLESHOOTING, BUG REPORTING, AND DEDICATED IT ASSISTANCE TICKET.',
    fromColor: '#6366f1',
    toColor: '#3730a3',
    iconName: 'LifeBuoy',
  },
  {
    step: '24',
    title: 'Membership Application Form',
    description: 'ENROLL IN ANNUAL IBCS PROFESSIONAL GUILD AND PRIVILEGED MEMBERSHIP PROGRAM.',
    fromColor: '#14b8a6',
    toColor: '#115e59',
    iconName: 'BadgeCheck',
  },
  {
    step: '25',
    title: 'Membership Renewal Application Form',
    description: 'EXTEND MEMBERSHIP VALIDITY, UPDATE TIER BENEFITS, AND ANNUAL RENEWAL PAYMENT.',
    fromColor: '#f59e0b',
    toColor: '#92400e',
    iconName: 'RotateCw',
  },
  {
    step: '26',
    title: 'Feedback & Suggestion Form',
    description: 'SHARE CONSTRUCTIVE FEEDBACK, FEATURE SUGGESTIONS, AND USER EXPERIENCE INPUT.',
    fromColor: '#22c55e',
    toColor: '#166534',
    iconName: 'MessageSquare',
  },
  {
    step: '27',
    title: 'Grievance Submission Form',
    description: 'FORMAL REDRESSAL ESCALATION FOR UNRESOLVED ADMINISTRATIVE AND SERVICE ISSUES.',
    fromColor: '#f43f5e',
    toColor: '#9f1239',
    iconName: 'AlertCircle',
  },
  {
    step: '28',
    title: 'Complaint Submission Form',
    description: 'LODGE VERIFIED COMPLAINT REGARDING EXAMINATION, PORTAL, OR STAFF CONDUCT.',
    fromColor: '#ef4444',
    toColor: '#b91c1c',
    iconName: 'Flag',
  },
  {
    step: '29',
    title: 'Sponsorship Application Form',
    description: 'APPLY FOR EVENT SPONSORSHIP, BRAND COLLABORATION, AND PHILANTHROPIC FUNDING.',
    fromColor: '#eab308',
    toColor: '#ca8a04',
    iconName: 'Coins',
  },
  {
    step: '30',
    title: 'General Inquiry / Information Request Form',
    description: 'SUBMIT GENERAL QUERIES, RIGHT-TO-INFORMATION REQUESTS, AND CUSTOM INQUIRIES.',
    fromColor: '#8b5cf6',
    toColor: '#4c1d95',
    iconName: 'HelpCircle',
  },
];
