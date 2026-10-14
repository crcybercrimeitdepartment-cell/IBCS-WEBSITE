/* ==========================================================================
   CAREERS DATA STORE - LEVEL 1 MAIN HOME PAGE DATA
   ========================================================================== */

export const beamGradients = {
  'fill-rose-300': 'bg-[conic-gradient(from_0deg,transparent_0_270deg,#D4AF37_320deg,#FFF8DC_360deg)]',
  'fill-sky-300': 'bg-[conic-gradient(from_0deg,transparent_0_270deg,#E5C158_320deg,#FFF8DC_360deg)]',
  'fill-emerald-300': 'bg-[conic-gradient(from_0deg,transparent_0_270deg,#D4AF37_320deg,#FFF8DC_360deg)]',
  'fill-amber-300': 'bg-[conic-gradient(from_0deg,transparent_0_270deg,#E5C158_320deg,#FFF8DC_360deg)]',
  'fill-violet-300': 'bg-[conic-gradient(from_0deg,transparent_0_270deg,#D4AF37_320deg,#FFF8DC_360deg)]',
  'fill-teal-300': 'bg-[conic-gradient(from_0deg,transparent_0_270deg,#E5C158_320deg,#FFF8DC_360deg)]',
  'fill-indigo-300': 'bg-[conic-gradient(from_0deg,transparent_0_270deg,#D4AF37_320deg,#FFF8DC_360deg)]',
  'fill-pink-300': 'bg-[conic-gradient(from_0deg,transparent_0_270deg,#E5C158_320deg,#FFF8DC_360deg)]',
  'fill-red-300': 'bg-[conic-gradient(from_0deg,transparent_0_270deg,#D4AF37_320deg,#FFF8DC_360deg)]',
};

/**
 * Careers Page Description from IBCS_Careers_Page_Description_Aligned.docx
 */
export const careersPageDescription =
  "Explore career opportunities at IBCS and take the next step toward building a rewarding professional future in technology. Discover current vacancies, review recruitment rules and eligibility criteria, access official recruitment advertisements, and stay updated with the latest announcements and notices. Our Careers Portal enables candidates to submit applications online, complete required document verification, track application status, and share their resumes for future opportunities. We aim to make recruitment information accessible, organised, and transparent, helping aspiring professionals connect their skills, knowledge, and ambitions with emerging opportunities across software development, artificial intelligence, cybersecurity, and other technology domains.";

/**
 * 1. Main Home Career Cards Data (8 Categories)
 */
export const careerCardsData = [
  {
    id: 'vacancies',
    title: 'Current Vacancy',
    description: 'Explore active job openings and career opportunities.',
    iconName: 'Briefcase',
    iconColor: 'text-[#D4AF37]',
    blobColor: 'fill-[#D4AF37]/25',
    view: 'vacancies',
  },
  {
    id: 'policies',
    title: 'Recruitment Rules/Policies',
    description: 'Review official eligibility rules and hiring guidelines.',
    iconName: 'Scale',
    iconColor: 'text-[#E5C158]',
    blobColor: 'fill-[#D4AF37]/25',
    view: 'policies',
  },
  {
    id: 'verification',
    title: 'Document Verification Department',
    description: 'Verify required credentials and certificate checks.',
    iconName: 'ClipboardCheck',
    iconColor: 'text-[#D4AF37]',
    blobColor: 'fill-[#D4AF37]/25',
    view: 'verification',
  },
  {
    id: 'portal',
    title: 'Online Application Portal',
    description: 'Register and submit your online candidate applications.',
    iconName: 'Globe',
    iconColor: 'text-[#E5C158]',
    blobColor: 'fill-[#D4AF37]/25',
    view: 'portal',
  },
  {
    id: 'advertisements',
    title: 'Recruitment Advertisements',
    description: 'Browse official notifications and employment circulars.',
    iconName: 'Megaphone',
    iconColor: 'text-[#D4AF37]',
    blobColor: 'fill-[#D4AF37]/25',
  },
  {
    id: 'press',
    title: 'Press Release and Notices',
    description: 'Latest official announcements, circulars, and updates.',
    iconName: 'Newspaper',
    iconColor: 'text-[#E5C158]',
    blobColor: 'fill-[#D4AF37]/25',
  },
  {
    id: 'status',
    title: 'Check Application Status',
    description: 'Track your submitted application progress in real-time.',
    iconName: 'UserCheck',
    iconColor: 'text-[#D4AF37]',
    blobColor: 'fill-[#D4AF37]/25',
  },
  {
    id: 'resume',
    title: 'Submit Resume',
    description: 'Upload your CV and profile for future hiring pools.',
    iconName: 'FileUp',
    iconColor: 'text-[#E5C158]',
    blobColor: 'fill-[#D4AF37]/25',
  },
];

/**
 * 2. Current Vacancies Data (4 Cards)
 */
