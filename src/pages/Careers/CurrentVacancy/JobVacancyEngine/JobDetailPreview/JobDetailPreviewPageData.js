import { aimlEngineerData } from '../job details/AIMLEngineerData';
import { cyberCrimeInvestigationOfficerData } from '../job details/CyberCrimeInvestigationOfficerData';
import { cyberSecurityEngineerData } from '../job details/CyberSecurityEngineerData';
import { dataAnalystData } from '../job details/DataAnalystData';
import { graphicDesignerData } from '../job details/GraphicDesignerData';
import { hrAdminData } from '../job details/HRAdminData';
import { hrAssistantManagerData } from '../job details/HRAssistantManagerData';
import { hrExecutiveData } from '../job details/HRExecutiveData';
import { juniorDevOpsEngineerData } from '../job details/JuniorDevOpsEngineerData';
import { juniorPythonFullStackDeveloperData } from '../job details/JuniorPythonFullStackDeveloperData';
import { mobileApplicationDeveloperData } from '../job details/MobileApplicationDeveloperData';
import { qaEngineerData } from '../job details/QAEngineerData';

// ─── 12 VACANCIES DATA DICTIONARY ───────────────────────────────────────────
export const allJobsDataMap = {
  // 1. AI/ML Engineer
  'IBCS-IT-AIML-2026-001': aimlEngineerData,
  'IT-AIML-001': aimlEngineerData,

  // 2. Cyber Crime Investigation Officer
  'IBCS-IT-JCCIO-2026-001': cyberCrimeInvestigationOfficerData,
  'IT-JCCIO-001': cyberCrimeInvestigationOfficerData,

  // 3. Cyber Security Engineer
  'IBCS-IT-JSECURITY-2026-001': cyberSecurityEngineerData,
  'IT-JSECURITY-001': cyberSecurityEngineerData,

  // 4. Data Analyst
  'IBCS-IT-DANALYST-2026-001': dataAnalystData,
  'IT-DANALYST-001': dataAnalystData,

  // 5. Graphic Designer
  'IBCS-DES-GD-2026-001': graphicDesignerData,
  'DES-GD-001': graphicDesignerData,

  // 6. HR Admin
  'IBCS-HR-EXEC-2026-002': hrAdminData,
  'HR-EXEC-002': hrAdminData,

  // 7. HR Assistant Manager
  'IBCS-HR-ASSTMGR-2026-003': hrAssistantManagerData,
  'HR-ASSTMGR-003': hrAssistantManagerData,

  // 8. HR Executive
  'IBCS-HR-EXEC-2026-001': hrExecutiveData,
  'HR-EXEC-001': hrExecutiveData,

  // 9. Junior DevOps Engineer
  'IBCS-IT-JDEVOPS-2026-001': juniorDevOpsEngineerData,
  'IT-JDEVOPS-001': juniorDevOpsEngineerData,

  // 10. Junior Python Full Stack Developer
  'IBCS-IT-PYFS-2026-001': juniorPythonFullStackDeveloperData,
  'IT-PYFS-001': juniorPythonFullStackDeveloperData,

  // 11. Mobile Application Developer
  'IBCS-IT-MAD-2026-001': mobileApplicationDeveloperData,
  'IT-MAD-001': mobileApplicationDeveloperData,

  // 12. QA Engineer
  'IBCS-IT-QA-ENG-2026-001': qaEngineerData,
  'IT-QA-ENG-001': qaEngineerData,
};

// ─── STAGE PHASE CATEGORIZER HELPER ─────────────────────────────────────────
const getStagePhase = (stageNum, stageName = '') => {
  const l = stageName.toLowerCase();
  if (stageNum <= 2 || l.includes('screening') || l.includes('application submission')) return 'Foundation';
  if (l.includes('interview') || l.includes('discussion') || l.includes('hr round') || l.includes('review') || l.includes('evaluation')) return 'Interviews';
  if (l.includes('background') || l.includes('police') || l.includes('medical') || l.includes('offer') || l.includes('joining') || l.includes('onboarding') || l.includes('verification')) return 'Onboarding';
  return 'Assessments';
};

// ─── ROBUST NORMALIZER ADAPTER FOR PREVIEW PAGE ──────────────────────────────
export const normalizeJobData = (raw = {}) => {
  const posInfo = raw.positionInformation || {};
  const jobOverview = raw.jobOverview || {};
  const jobProfile = raw.jobProfile || {};
  const jobDesc = raw.jobDescription || {};
  const keyResp = raw.keyResponsibilities || {};
  const skillsComp = raw.skillsAndCompetencies || {};
  const eligCrit = raw.eligibilityCriteria || {};
  const workEnv = raw.workEnvironment || {};
  const compBen = raw.compensationAndBenefits || {};
  const whyJoin = raw.whyJoinUs || {};
  const trainProb = raw.trainingAndProbation || {};
  const recruitProc = raw.recruitmentProcess || {};
  const impDates = raw.importantDates || {};
  const reqDocs = raw.requiredDocuments || {};
  const appInfo = raw.applicationInformation || {};
  const contactInfo = raw.contactInformation || {};
  const impNotices = raw.importantNotices || {};

  // 1. Normalized Position Info
  const normalizedPosInfo = {
    jobTitle: posInfo.jobTitle || 'Job Position',
    jobCode: posInfo.jobCode || 'IBCS-JOB-2026-001',
    department: posInfo.department || 'IBCS Department',
    positionLevel: posInfo.positionLevel || 'Entry Level',
    numberOfVacancies: String(posInfo.numberOfVacancies || '30'),
    applicationStatus: posInfo.applicationStatus || 'Open',
  };

  // 2. Normalized Job Overview
  const summaryText =
    jobOverview.summary ||
    jobOverview.roleSummary ||
    jobOverview.description ||
    jobProfile.aboutPosition ||
    jobProfile.shortOverviewOfThePosition ||
    `We are seeking motivated and qualified professionals for the position of ${normalizedPosInfo.jobTitle} to join our team at ${normalizedPosInfo.department}.`;

  const normalizedOverview = {
    summary: summaryText,
    employmentType: jobOverview.employmentType || 'Permanent',
    workMode: jobOverview.workMode || 'On-site',
    jobLocations: jobOverview.jobLocations || jobOverview.jobLocation || 'Bhubaneswar, New Delhi, Hyderabad, Rourkela, Bengaluru, and Mumbai',
    contractDuration: jobOverview.contractDuration || 'Minimum 2 Years to Maximum 3 Years',
  };

  // 3. Normalized Job Profile
  const normalizedProfile = {
    aboutPosition:
      jobProfile.aboutPosition ||
      jobProfile.shortOverviewOfThePosition ||
      jobDesc.detailedDescriptionOfTheRole ||
      summaryText,
  };

  // 4. Normalized Detailed Job Description Pillars
  let normalizedPillars = [];
  if (Array.isArray(jobDesc.pillars) && jobDesc.pillars.length > 0) {
    normalizedPillars = jobDesc.pillars;
  } else if (jobDesc.detailedDescriptionOfTheRole) {
    const rawParagraphs = jobDesc.detailedDescriptionOfTheRole
      .split('\n\n')
      .map((p) => p.trim())
      .filter(Boolean);

    normalizedPillars = rawParagraphs.slice(0, 4).map((para, idx) => {
      const titles = [
        'Core Solution Engineering & Architecture',
        'Technical Development & Data Management',
        'System Integration & Quality Assurance',
        'Deployment, Security & Continuous Delivery',
      ];
      const tags = ['Core Engineering', 'Development', 'Integration', 'Operations'];
      return {
        id: idx + 1,
        title: titles[idx] || `Domain Pillar ${idx + 1}`,
        tag: tags[idx] || 'Engineering',
        description: para,
      };
    });
  }

  // 5. Normalized Key Responsibilities List
  const rawDuties =
    keyResp.responsibilitiesAndDuties ||
    keyResp.items ||
    keyResp.responsibilities ||
    [];

  const normalizedResponsibilities = Array.isArray(rawDuties)
    ? rawDuties.map((item, idx) => {
        if (typeof item === 'string') {
          const parts = item.split(':');
          const title = parts.length > 1 ? parts[0].trim() : `Responsibility #${idx + 1}`;
          const description = parts.length > 1 ? parts.slice(1).join(':').trim() : item.trim();
          return { id: idx + 1, title, description, category: normalizedPosInfo.department };
        }
        return {
          id: item.id || idx + 1,
          title: item.title || `Duty #${idx + 1}`,
          description: item.description || item.desc || '',
          category: item.category || normalizedPosInfo.department,
        };
      })
    : [];

  // 6. Normalized Skills & Competencies
  const rawTechSkills =
    skillsComp.technicalSkills ||
    skillsComp.coreSkills ||
    skillsComp.requiredSkills ||
    [];

  const normalizedTechnicalSkills = Array.isArray(rawTechSkills)
    ? rawTechSkills.map((sk) => {
        if (typeof sk === 'string') {
          const parts = sk.split(':');
          return {
            name: parts[0].replace(/^[-•]\s*/, '').trim(),
            desc: parts.length > 1 ? parts.slice(1).join(':').trim() : 'Core proficiency & competency',
          };
        }
        return {
          name: sk.name || sk.title || 'Technical Skill',
          desc: sk.desc || sk.description || 'Core competency',
        };
      })
    : [];

  const rawCompProf = skillsComp.computerProficiency || [];
  const normalizedComputerProficiency = Array.isArray(rawCompProf)
    ? rawCompProf.map((p) => (typeof p === 'string' ? p.replace(/^[-•]\s*/, '').trim() : String(p)))
    : [];

  const rawSoftSkills = skillsComp.softSkills || [];
  const normalizedSoftSkills = Array.isArray(rawSoftSkills)
    ? rawSoftSkills.map((s) => (typeof s === 'string' ? s.replace(/^[-•]\s*/, '').trim() : String(s)))
    : [];

  const rawAddReq = skillsComp.additionalRequirements || [];
  const normalizedAdditionalRequirements = Array.isArray(rawAddReq)
    ? rawAddReq.map((a) => (typeof a === 'string' ? a.replace(/^[-•]\s*/, '').trim() : String(a)))
    : [];

  // 7. Normalized Eligibility Criteria
  let rawEdu = eligCrit.educationalQualifications;
  if (!rawEdu && typeof eligCrit.educationalQualification === 'string') {
    rawEdu = eligCrit.educationalQualification
      .split(';')
      .map((s) => s.replace(/^[-•]\s*/, '').trim())
      .filter(Boolean);
  } else if (!rawEdu && Array.isArray(eligCrit.qualifications)) {
    rawEdu = eligCrit.qualifications;
  }

  const normalizedEligibility = {
    educationalQualifications: Array.isArray(rawEdu) && rawEdu.length > 0 ? rawEdu : [
      'Graduation / Post-Graduation in relevant technical or professional discipline.',
      'Recognized university degree with consistent academic record.',
    ],
    requiredExperience: eligCrit.requiredExperience || eligCrit.experience || '0–2 Years',
    ageCriteria: eligCrit.ageCriteria || eligCrit.ageLimit || 'Minimum 20 Years to Maximum 32 Years as on application closing date',
    nationality: eligCrit.nationality || eligCrit.citizenship || 'Candidate must be a Citizen of India',
  };

  // 8. Normalized Work Environment
  const normalizedWorkEnv = {
    shiftType: workEnv.shiftType || 'General Shift',
    workingDays: workEnv.workingDays || 'Monday to Saturday',
    workingHoursShiftTiming: workEnv.workingHoursShiftTiming || workEnv.shiftTiming || '9:00 AM to 7:00 PM',
    weeklyOff: workEnv.weeklyOff || 'Sunday',
  };

  // 9. Normalized Compensation & Benefits
  const normalizedCompBenefits = {
    annualCtcSalaryPackage: compBen.annualCtcSalaryPackage || compBen.annualCtc || '₹2.40 LPA – ₹4.50 LPA',
    monthlySalary: compBen.monthlySalary || 'As per CTC structure',
    pfEligibility: compBen.pfEligibility || 'PF benefits applicable as per statutory regulations.',
    esiEligibility: compBen.esiEligibility || 'ESI benefits applicable as per statutory regulations.',
    otherBenefits: Array.isArray(compBen.otherBenefits) ? compBen.otherBenefits : [
      'Paid Leave',
      'Performance-Based Incentives',
      'Annual Performance Review',
      'Career Growth Opportunities',
      'Professional Training',
      'Certification Support',
    ],
  };

  // 10. Normalized Why Join Us
  const rawWhyJoin = whyJoin.allFields || (Array.isArray(whyJoin) ? whyJoin : []);
  const normalizedWhyJoin = Array.isArray(rawWhyJoin)
    ? rawWhyJoin.map((item) => {
        if (typeof item === 'string') {
          const parts = item.split(':');
          const title = parts[0].replace(/^[-•]\s*/, '').trim();
          const description = parts.length > 1 ? parts.slice(1).join(':').trim() : '';
          return { title, description };
        }
        return {
          title: item.title || 'Career Opportunity',
          description: item.description || item.desc || '',
        };
      })
    : [];

  // 11. Normalized Training & Probation (ALL 8 FIELDS IN EXACT SEQUENCE)
  const normalizedTrainingProbation = {
    trainingPeriod: trainProb.trainingPeriod || 'Duration: 60 to 90 Days',
    trainingStipend: trainProb.trainingStipend || 'No stipend provided during training period',
    trainingSalary: trainProb.trainingSalary || 'No salary provided during training period',
    probationPeriod: trainProb.probationPeriod || 'Duration: 6 Months to 1 Year',
    probationSalary: trainProb.probationSalary || 'Applicable as per employment terms during probation',
    postProbationSalary: trainProb.postProbationSalary || 'Full CTC as per compensation structure upon confirmation',
    internshipPeriod: trainProb.internshipPeriod || trainProb.internshipDuration || 'Not Applicable',
    internshipDuration: trainProb.internshipPeriod || trainProb.internshipDuration || 'Not Applicable',
    internshipStipend: trainProb.internshipStipend || 'Not Applicable',
  };

  // 12. Normalized Recruitment Process & 21 Stages
  const rawStages = Array.isArray(recruitProc.stages) ? recruitProc.stages : [];
  let normalizedStages = rawStages;

  if (normalizedStages.length === 0 && recruitProc.selectionProcess) {
    const rawLines = recruitProc.selectionProcess.split('\n').map((l) => l.trim()).filter(Boolean);
    normalizedStages = rawLines
      .filter((l) => l.toLowerCase().startsWith('stage'))
      .map((line, idx) => {
        const parts = line.split(':');
        const name = parts.length > 1 ? parts.slice(1).join(':').trim() : line;
        const stageNum = idx + 1;
        return {
          stage: stageNum,
          name,
          desc: `Official evaluation and clearance required for ${name}.`,
          phase: getStagePhase(stageNum, name),
        };
      });
  }

  // Fallback 21 standard stages if empty
  if (normalizedStages.length === 0) {
    normalizedStages = [
      { stage: 1, name: "Application Submission & Initial Screening", desc: "Online application submission and preliminary eligibility verification.", phase: "Foundation" },
      { stage: 2, name: "Application / Document Verification", desc: "Scrutiny of submitted academic certificates and identification records.", phase: "Foundation" },
      { stage: 3, name: "Domain Fundamentals Assessment", desc: "Written evaluation of core theoretical and technical principles.", phase: "Assessments" },
      { stage: 4, name: "Core Skill Evaluation", desc: "Assessment of fundamental domain skills and knowledge.", phase: "Assessments" },
      { stage: 5, name: "Programming & Practical Assessment", desc: "Practical problem solving and technical implementation evaluation.", phase: "Assessments" },
      { stage: 6, name: "Technical Task / Case Study", desc: "Practical role-specific task evaluation.", phase: "Assessments" },
      { stage: 7, name: "Advanced Domain Assessment", desc: "Evaluation of advanced concepts and methodologies.", phase: "Assessments" },
      { stage: 8, name: "Workflow & Tools Assessment", desc: "Knowledge of tools, platforms, and industry standard environments.", phase: "Assessments" },
      { stage: 9, name: "Security & Quality Standards", desc: "Assessment of compliance, quality assurance, and industry best practices.", phase: "Assessments" },
      { stage: 10, name: "Practical Solution Task", desc: "Comprehensive role-specific solution delivery test.", phase: "Assessments" },
      { stage: 11, name: "Group Discussion (GD)", desc: "Assessment of communication, logical reasoning, and teamwork.", phase: "Interviews" },
      { stage: 12, name: "Technical Interview", desc: "Comprehensive technical interview with senior domain leads.", phase: "Interviews" },
      { stage: 13, name: "HR Round", desc: "Evaluation of culture fit, communication, and employment terms.", phase: "Interviews" },
      { stage: 14, name: "Personal Interview", desc: "Individual discussion with department heads.", phase: "Interviews" },
      { stage: 15, name: "Final Evaluation & Selection Review", desc: "Consolidated performance review across all assessment stages.", phase: "Interviews" },
      { stage: 16, name: "Background Verification", desc: "Statutory verification of past credentials and documentation.", phase: "Onboarding" },
      { stage: 17, name: "Police Verification", desc: "Statutory police verification where applicable.", phase: "Onboarding" },
      { stage: 18, name: "Medical Test", desc: "Pre-employment medical examination and fitness assessment.", phase: "Onboarding" },
      { stage: 19, name: "Final Document Verification", desc: "Final verification of original certificates and records.", phase: "Onboarding" },
      { stage: 20, name: "Selection Confirmation & Offer Letter", desc: "Formal offer letter issuance upon satisfactory clearance.", phase: "Onboarding" },
      { stage: 21, name: "Joining & Onboarding", desc: "Induction, formal joining formalities, and department orientation.", phase: "Onboarding" },
    ];
  }

  let assessmentAreasList = [];
  if (recruitProc.assessmentTestRequirement) {
    assessmentAreasList = recruitProc.assessmentTestRequirement
      .split(/,|\n/)
      .map((s) => s.replace(/^[-•]\s*/, '').trim())
      .filter((s) => Boolean(s) && !s.toLowerCase().includes('may be required') && !s.toLowerCase().includes('candidates may'));
  }

  const normalizedRecruitProcess = {
    overview:
      recruitProc.overview ||
      `The recruitment process is designed to assess candidates' technical expertise, practical abilities, communication skills, and overall suitability for the ${normalizedPosInfo.jobTitle} position.`,
    assessmentTestRequirement: recruitProc.assessmentTestRequirement || '',
    assessmentAreas: assessmentAreasList.length > 0 ? assessmentAreasList : [
      'Core Domain Knowledge',
      'Technical Aptitude',
      'Problem-Solving Abilities',
      'Tools & Platform Proficiency',
      'Group Discussion',
      'Technical Interview',
      'HR Round',
      'Personal Interview',
    ],
    numberOfInterviewRounds: recruitProc.numberOfInterviewRounds || '3 Interview Rounds',
    interviewMode: recruitProc.interviewMode || 'Online & Offline Modes',
    stages: normalizedStages,
  };

  // 13. Normalized Important Dates
  const normalizedDates = {
    applicationStartDate: impDates.applicationStartDate || '16 September 2026',
    applicationClosingDate: impDates.applicationClosingDate || '30 September 2026',
    expectedJoiningPeriod: impDates.expectedJoiningDate || impDates.expectedJoiningPeriod || '1 October 2026 – 15 October 2026',
  };

  // 14. Normalized Required Documents
  let rawDocList = reqDocs.requiredDocumentsList;
  if (!rawDocList && Array.isArray(reqDocs)) {
    rawDocList = reqDocs;
  }
  const normalizedDocuments = Array.isArray(rawDocList)
    ? rawDocList.map((doc, idx) => {
        if (typeof doc === 'string') {
          return {
            id: idx + 1,
            title: doc.trim(),
            desc: 'Official document required for verification and recruitment records.',
            mandatory: true,
            highlighted: doc.toLowerCase().includes('internship') || doc.toLowerCase().includes('degree'),
          };
        }
        return {
          id: doc.id || idx + 1,
          title: doc.title || `Document #${idx + 1}`,
          desc: doc.desc || 'Required document for onboarding.',
          mandatory: doc.mandatory !== false,
          highlighted: Boolean(doc.highlighted),
        };
      })
    : [
        { id: 1, title: 'Updated Resume / CV and Recent Photograph', desc: 'Updated CV and passport-size photographs.', mandatory: true },
        { id: 2, title: 'Identity & Address Proof', desc: 'Aadhaar Card, PAN Card, Voter ID, or Passport.', mandatory: true },
        { id: 3, title: 'Educational Qualification Certificates', desc: '10th, 12th, Degree mark sheets and passing certificates.', mandatory: true },
        { id: 4, title: 'Relevant Experience / Internship Certificate', desc: 'Certificate confirming relevant internship or practical experience.', mandatory: true, highlighted: true },
        { id: 5, title: 'Bank Account & Statutory Records', desc: 'Cancelled cheque / passbook copy for payroll records.', mandatory: true },
      ];

  // 15. Normalized Application Information
  const normalizedAppInfo = {
    applicationFee: appInfo.applicationFee || appInfo.feeRequirement || 'No Application Fee',
    applicationMode: appInfo.applicationMode || appInfo.modeOfApplication || 'Online Application Form',
    applicationDeadline: impDates.applicationClosingDate || '30 September 2026',
    submissionPortal: appInfo.submissionPortal || appInfo.applicationPortal || 'Official IBCS Career Portal',
    instructions:
      appInfo.instructions ||
      'Candidates are required to complete the online application form and provide the applicable information and supporting documents.',
  };

  // 16. Normalized Contact Information
  const normalizedContact = {
    contactPerson: contactInfo.contactPerson || 'Poonam Singh',
    designation: contactInfo.designation || 'HR Manager',
    emailAddress: contactInfo.emailAddress || contactInfo.contactEmail || contactInfo.helplineEmail || 'crrcfhr@gmail.com',
    contactNumber: contactInfo.contactNumber || contactInfo.helplineContactNumber || '+91 82493 33288',
    officialPortal: contactInfo.officialWebsite || contactInfo.officialPortal || 'https://ibcs.co.in',
  };

  // 17. Normalized Important Notices
  const normalizedNotices = {
    equalOpportunityStatement:
      impNotices.equalOpportunityStatement ||
      impNotices.equalOpportunityEmployerNotice ||
      impNotices.equalOpportunityEmployer ||
      'IB Cyber Security Private Limited provides equal employment opportunities based on talent, skills, and performance.',
    recruitmentDisclaimer:
      impNotices.recruitmentDisclaimer ||
      impNotices.documentVerificationNotice ||
      impNotices.canvasWarningNotice ||
      impNotices.cautionCanvassing ||
      'No agency or individual is authorised to charge fees for recruitment at IB Cyber Security Private Limited.',
    additionalInstructions: Array.isArray(impNotices.additionalInstructions)
      ? impNotices.additionalInstructions
      : [
          'All educational and experience credentials are verified before final confirmation.',
          'Background verification is mandatory as part of the recruitment process.',
        ],
  };

  return {
    heroImage: raw.heroImage || raw.image || raw.heroImg || null,
    positionInformation: normalizedPosInfo,
    jobOverview: normalizedOverview,
    jobProfile: normalizedProfile,
    jobDescription: {
      pillars: normalizedPillars,
      detailedDescriptionOfTheRole: jobDesc.detailedDescriptionOfTheRole || '',
    },
    keyResponsibilities: {
      responsibilitiesAndDuties: normalizedResponsibilities,
      items: normalizedResponsibilities,
    },
    skillsAndCompetencies: {
      technicalSkills: normalizedTechnicalSkills,
      computerProficiency: normalizedComputerProficiency,
      softSkills: normalizedSoftSkills,
      additionalRequirements: normalizedAdditionalRequirements,
    },
    eligibilityCriteria: normalizedEligibility,
    workEnvironment: normalizedWorkEnv,
    compensationAndBenefits: normalizedCompBenefits,
    whyJoinUs: normalizedWhyJoin,
    trainingAndProbation: normalizedTrainingProbation,
    recruitmentProcess: normalizedRecruitProcess,
    importantDates: normalizedDates,
    requiredDocuments: normalizedDocuments,
    applicationInformation: normalizedAppInfo,
    contactInformation: normalizedContact,
    importantNotices: normalizedNotices,
  };
};

// ─── RESOLVER FUNCTION FOR ANY OF THE 12 VACANCIES ──────────────────────────
export const getJobDataByCode = (jobId) => {
  if (!jobId) return normalizeJobData(aimlEngineerData);

  const cleanId = String(jobId).trim();

  // 1. Exact match in map
  if (allJobsDataMap[cleanId]) {
    return normalizeJobData(allJobsDataMap[cleanId]);
  }

  // 2. Case-insensitive / normalized match
  const lower = cleanId.toLowerCase();
  for (const [key, val] of Object.entries(allJobsDataMap)) {
    if (key.toLowerCase() === lower) {
      return normalizeJobData(val);
    }
  }

  // 3. Match by partial code or title
  for (const val of Object.values(allJobsDataMap)) {
    const code = val.positionInformation?.jobCode?.toLowerCase();
    const title = val.positionInformation?.jobTitle?.toLowerCase();
    if ((code && lower.includes(code)) || (code && code.includes(lower)) || (title && lower.includes(title))) {
      return normalizeJobData(val);
    }
  }

  // Default fallback
  return normalizeJobData(aimlEngineerData);
};

// Backwards compatibility export
export const AIML_ENGINEER_FULL_DATA = normalizeJobData(aimlEngineerData);

export default getJobDataByCode;
