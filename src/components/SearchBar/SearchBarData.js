/**
 * @file SearchBarData.js
 * @description Centralized, structured global search index for the IBCS CRCCF React website.
 * Contains indexed searchable records across all pages, subpages, IT services, job vacancies,
 * sections, software products, skill development programs, and policy documents.
 */

// Categorized search records
export const SEARCH_INDEX = [
  // =========================================================================
  // 1. TOP-LEVEL HUBS & PRIMARY PAGES
  // =========================================================================
  {
    id: 'page-home',
    title: 'Home — IB Cyber Security',
    description: 'Intelligent software products, cybersecurity technologies, AI systems, and enterprise solutions for a digital future.',
    category: 'Pages',
    resultType: 'Page',
    parentTitle: 'IBCS Platform',
    pagePath: '#home',
    sectionId: 'home',
    keywords: ['home', 'homepage', 'ibcs', 'ib cyber security', 'main', 'landing', 'welcome'],
    searchableText: 'IB Cyber Security Private Limited intelligent software products cybersecurity enterprise digital future technology platform.'
  },
  {
    id: 'page-about-us',
    title: 'About Us — Corporate Identity & Overview',
    description: 'Learn about IBCS, our founding heritage, mission, vision, operational pillars, and ethical governance standards.',
    category: 'About Us & Legal',
    resultType: 'Page',
    parentTitle: 'Corporate',
    pagePath: '#about-us',
    sectionId: null,
    keywords: ['about us', 'company', 'organization', 'who we are', 'mission', 'vision', 'heritage', 'overview', 'philosophy'],
    searchableText: 'About Us corporate identity organization mission vision values pillars team history foundation ethics governance standards.'
  },
  {
    id: 'page-meaning-name',
    title: 'Meaning Behind Our Name — IBCS',
    description: 'Explore the 15 strategic definitions and philosophical meanings behind IBCS, from Cyber Defence to Intelligence and Solutions.',
    category: 'About Us & Legal',
    resultType: 'Page',
    parentTitle: 'About Us',
    pagePath: '#meaning-behind-our-name-page',
    sectionId: null,
    keywords: ['meaning', 'name', 'ibcs acronym', 'full form', 'abbreviation', 'significance', 'heritage', 'stand for'],
    searchableText: 'Meaning Behind Our Name IBCS Intelligence Business Cybersecurity Solutions Browser Cyber Safe Innovation Blockchain Systems Biometric.'
  },
  {
    id: 'page-copyright',
    title: 'Copyright Policies, Registration & Certificates',
    description: 'Official statutory copyright notices, intellectual property registration certificates, usage, reproduction, and licensing guidelines.',
    category: 'About Us & Legal',
    resultType: 'Policy',
    parentTitle: 'About Us',
    pagePath: '#copyright-page',
    sectionId: null,
    keywords: ['copyright', 'legal notice', 'ip registration', 'certificate', 'intellectual property', 'trademark', 'statutory', 'permission', 'infringement'],
    searchableText: 'Copyright Legal Notice declaration ownership statement permission policy reproduction usage digital content protection certificate statutory compliance.'
  },
  {
    id: 'page-software-products',
    title: 'Software Products — Enterprise Suite',
    description: 'Discover commercial software platforms, purpose use cases, technology architecture, and product roadmaps.',
    category: 'Software Products',
    resultType: 'Page',
    parentTitle: 'Products',
    pagePath: '#software-products',
    sectionId: null,
    keywords: ['software products', 'platforms', 'enterprise software', 'suite', 'applications', 'commercial software', 'solutions'],
    searchableText: 'Software Products enterprise business intelligence cybersecurity government police law enforcement roadmap architecture security apis.'
  },
  {
    id: 'page-software-library',
    title: 'Software Library — 18 Product Categories',
    description: 'Browse all 18 software product categories covering threat intelligence, forensics, law enforcement, AI, and public cyber tools.',
    category: 'Software Products',
    resultType: 'Page',
    parentTitle: 'Products',
    pagePath: '#software-library-page',
    sectionId: null,
    keywords: ['software library', 'library', 'catalog', 'software catalog', 'downloads', 'product categories', 'tools'],
    searchableText: 'Software Library commercial cybersecurity threat intelligence forensics police law enforcement government education analytics enterprise.'
  },
  {
    id: 'page-it-services',
    title: 'IT Services Hub — 20 Enterprise Offerings',
    description: 'Explore our complete suite of 20 turnkey IT services, from cloud architecture to digital forensics, software development, and AI/ML.',
    category: 'IT Services',
    resultType: 'Page',
    parentTitle: 'Services',
    pagePath: '#it-services',
    sectionId: null,
    keywords: ['it services', 'services', 'solutions', 'offerings', 'consulting', 'technology services', 'it support', 'turnkey'],
    searchableText: 'IT Services Hub 20 turnkey enterprise offerings software development web mobile cloud devops cybersecurity testing audit forensics.'
  },
  {
    id: 'page-skill-dev',
    title: 'Skill Development & Internship Programs',
    description: 'Industry-oriented professional training, university internships, practical workshops, and career development initiatives.',
    category: 'Skill Development',
    resultType: 'Page',
    parentTitle: 'Education',
    pagePath: '#skill-development-page',
    sectionId: null,
    keywords: ['skill development', 'training', 'internship', 'student training', 'courses', 'workshops', 'practical learning', 'placement'],
    searchableText: 'Skill Development technical training internships cybersecurity forensics ai machine learning data science cloud devops placement.'
  },
  {
    id: 'page-careers',
    title: 'Careers Portal — Recruitment 2026',
    description: 'Official careers and hiring portal. Explore vacancies, recruitment rules, document verification, and candidate profile registration.',
    category: 'Careers & Jobs',
    resultType: 'Page',
    parentTitle: 'Careers',
    pagePath: '#careers',
    sectionId: null,
    keywords: ['careers', 'jobs', 'recruitment', 'hiring', 'openings', 'employment', 'vacancies', 'apply', 'work with us'],
    searchableText: 'Careers Portal official recruitment 2026 vacancies eligibility rules document verification apply online candidate master profile.'
  },
  {
    id: 'page-contact-us',
    title: 'Contact Us — Department Directory & Helpdesk',
    description: 'Direct communication channels, branch locations, phone extensions, official emails, and automated AI assistance.',
    category: 'Support & Contact',
    resultType: 'Contact',
    parentTitle: 'Support',
    pagePath: '#contact',
    sectionId: null,
    keywords: ['contact', 'contact us', 'phone', 'email', 'support', 'helpdesk', 'location', 'address', 'enquiry', 'office', 'headquarters'],
    searchableText: 'Contact Us department directory administrative officers phone extensions email address office location enquiry helpdesk.'
  },
  {
    id: 'page-gallery',
    title: 'Media Gallery',
    description: 'Visual highlights, corporate events, research symposiums, technology launches, and institutional collaborations.',
    category: 'Corporate',
    resultType: 'Page',
    parentTitle: 'Corporate',
    pagePath: '#gallery',
    sectionId: null,
    keywords: ['gallery', 'photos', 'media', 'pictures', 'events', 'launches', 'images'],
    searchableText: 'Media Gallery photos images events corporate symposiums technology launches demonstrations.'
  },
  {
    id: 'page-follow',
    title: 'Follow Us — Community & Social Channels',
    description: 'Stay connected with IBCS on professional social media, updates, security alerts, and research announcements.',
    category: 'Corporate',
    resultType: 'Page',
    parentTitle: 'Corporate',
    pagePath: '#follow',
    sectionId: null,
    keywords: ['follow', 'social', 'community', 'linkedin', 'twitter', 'updates', 'connect'],
    searchableText: 'Follow Us community social media channels professional updates security bulletins alerts.'
  },

  // =========================================================================
  // 2. THE 20 TURNKEY IT SERVICES (Deep links: #it-services/01 to #it-services/20)
  // =========================================================================
  {
    id: 'it-service-01',
    title: 'Software Development Services',
    description: 'Custom enterprise software, robust microservices, cloud-native engineering, legacy modernization, and scalable APIs.',
    category: 'IT Services',
    resultType: 'Service',
    parentTitle: 'IT Services Hub',
    pagePath: '#it-services/01',
    sectionId: null,
    keywords: ['software development', 'custom software', 'backend engineering', 'microservices', 'application development', 'programming', '01'],
    searchableText: 'Software Development Services custom enterprise software microservices architecture legacy modernisations cloud-native software.'
  },
  {
    id: 'it-service-02',
    title: 'Web Development Services',
    description: 'High-throughput full-stack web applications, progressive web apps (PWAs), interactive portals, and modern frontend systems.',
    category: 'IT Services',
    resultType: 'Service',
    parentTitle: 'IT Services Hub',
    pagePath: '#it-services/02',
    sectionId: null,
    keywords: ['web development', 'website design', 'pwa', 'full stack web', 'react', 'nextjs', 'frontend', 'portals', '02'],
    searchableText: 'Web Development Services full-stack web application engineering progressive web apps high-throughput portals responsive enterprise interfaces.'
  },
  {
    id: 'it-service-03',
    title: 'Mobile Application Development Services',
    description: 'Native iOS, Android, and cross-platform Flutter/React Native apps with biometric security and real-time synchronization.',
    category: 'IT Services',
    resultType: 'Service',
    parentTitle: 'IT Services Hub',
    pagePath: '#it-services/03',
    sectionId: null,
    keywords: ['mobile app', 'ios app', 'android app', 'react native', 'flutter', 'smartphone application', '03'],
    searchableText: 'Mobile Application Development Services native iOS Android cross-platform React Native Flutter offline sync biometric security backends.'
  },
  {
    id: 'it-service-04',
    title: 'Cybersecurity Services & Threat Defense',
    description: 'Penetration testing, VAPT vulnerability assessments, SOC 24/7 monitoring, zero-trust network design, and incident response.',
    category: 'IT Services',
    resultType: 'Service',
    parentTitle: 'IT Services Hub',
    pagePath: '#it-services/04',
    sectionId: null,
    keywords: ['cybersecurity', 'vapt', 'penetration testing', 'soc', 'threat monitoring', 'vulnerability assessment', 'zero trust', 'security audit', '04'],
    searchableText: 'Cybersecurity Services penetration testing vulnerability assessments SOC monitoring zero-trust network design threat intelligence compliance audit.'
  },
  {
    id: 'it-service-05',
    title: 'IT Consulting & Technology Advisory Services',
    description: 'Strategic IT roadmap design, enterprise architecture, technology evaluation, governance, and digital transformation.',
    category: 'IT Services',
    resultType: 'Service',
    parentTitle: 'IT Services Hub',
    pagePath: '#it-services/05',
    sectionId: null,
    keywords: ['it consulting', 'technology advisory', 'digital transformation', 'strategy', 'enterprise architecture', 'cio advisory', '05'],
    searchableText: 'IT Consulting Services strategic technology advisory enterprise architecture planning digital transformation roadmaps IT governance.'
  },
  {
    id: 'it-service-06',
    title: 'Cloud Computing & Multi-Cloud Services',
    description: 'Cloud migration, AWS, Azure, GCP architecture, containerization, cost optimization, serverless, and hybrid cloud orchestration.',
    category: 'IT Services',
    resultType: 'Service',
    parentTitle: 'IT Services Hub',
    pagePath: '#it-services/06',
    sectionId: null,
    keywords: ['cloud computing', 'aws', 'azure', 'gcp', 'cloud migration', 'serverless', 'hybrid cloud', 'multi cloud', '06'],
    searchableText: 'Cloud Computing Services cloud migration multi-cloud strategy AWS Azure GCP hybrid cloud orchestration cost optimisation serverless.'
  },
  {
    id: 'it-service-07',
    title: 'DevOps & CI/CD Automation Services',
    description: 'Infrastructure as Code (Terraform), continuous integration/delivery pipelines, Docker, Kubernetes, and automated release cycles.',
    category: 'IT Services',
    resultType: 'Service',
    parentTitle: 'IT Services Hub',
    pagePath: '#it-services/07',
    sectionId: null,
    keywords: ['devops', 'automation', 'ci cd', 'kubernetes', 'docker', 'terraform', 'ansible', 'pipeline', 'deployment', '07'],
    searchableText: 'DevOps Automation Services CI/CD pipeline automation Infrastructure as Code Terraform Ansible Kubernetes Docker automated release cycles.'
  },
  {
    id: 'it-service-08',
    title: 'Network Infrastructure Services',
    description: 'Enterprise SD-WAN, high-speed routing and switching, firewall deployment, VPN gateways, and secure campus networks.',
    category: 'IT Services',
    resultType: 'Service',
    parentTitle: 'IT Services Hub',
    pagePath: '#it-services/08',
    sectionId: null,
    keywords: ['network', 'networking', 'sd wan', 'firewall', 'routing', 'switching', 'vpn', 'infrastructure', '08'],
    searchableText: 'Network Infrastructure Services enterprise networking SD-WAN architecture firewall deployment routing switching VPN gateways campus networks.'
  },
  {
    id: 'it-service-09',
    title: 'IT Infrastructure Management Services',
    description: 'Proactive 24/7/365 infrastructure monitoring, server administration, automated patching, and SLA-guaranteed system uptime.',
    category: 'IT Services',
    resultType: 'Service',
    parentTitle: 'IT Services Hub',
    pagePath: '#it-services/09',
    sectionId: null,
    keywords: ['infrastructure management', 'server management', 'system admin', 'uptime', 'monitoring', 'datacenter', '09'],
    searchableText: 'IT Infrastructure Management Services 24/7/365 infrastructure monitoring server administration proactive maintenance SLA uptime engineering.'
  },
  {
    id: 'it-service-10',
    title: 'Database Management & Optimization Services',
    description: 'Relational (PostgreSQL, MySQL, Oracle) and NoSQL (MongoDB, Redis) tuning, high-availability clustering, and failover replication.',
    category: 'IT Services',
    resultType: 'Service',
    parentTitle: 'IT Services Hub',
    pagePath: '#it-services/10',
    sectionId: null,
    keywords: ['database', 'dba', 'sql', 'nosql', 'postgresql', 'mongodb', 'database tuning', 'clustering', 'replication', '10'],
    searchableText: 'Database Management Services relational NoSQL database architecture performance tuning automated clustering failover replication.'
  },
  {
    id: 'it-service-11',
    title: 'AI & Machine Learning Services',
    description: 'Custom AI/ML model training, Natural Language Processing (NLP), computer vision, generative AI integration, and predictive analytics.',
    category: 'IT Services',
    resultType: 'Service',
    parentTitle: 'IT Services Hub',
    pagePath: '#it-services/11',
    sectionId: null,
    keywords: ['artificial intelligence', 'ai', 'machine learning', 'ml', 'nlp', 'deep learning', 'genai', 'llm', 'computer vision', '11'],
    searchableText: 'AI & Machine Learning Services custom AI/ML model development NLP predictive analytics deep learning computer vision GenAI LLM fine-tuning.'
  },
  {
    id: 'it-service-12',
    title: 'Data Analytics & Business Intelligence (BI) Services',
    description: 'Enterprise data lakes, automated ETL pipelines, Power BI & Tableau dashboards, and real-time operational data analytics.',
    category: 'IT Services',
    resultType: 'Service',
    parentTitle: 'IT Services Hub',
    pagePath: '#it-services/12',
    sectionId: null,
    keywords: ['data analytics', 'business intelligence', 'bi', 'power bi', 'tableau', 'etl', 'data warehouse', 'reporting', '12'],
    searchableText: 'Data Analytics & Business Intelligence Services enterprise data warehousing ETL pipelines PowerBI Tableau interactive dashboards analytics.'
  },
  {
    id: 'it-service-13',
    title: 'UI/UX Design & Digital Product Experience',
    description: 'User-centric interface design, wireframing, high-fidelity Figma interactive prototypes, design systems, and usability testing.',
    category: 'IT Services',
    resultType: 'Service',
    parentTitle: 'IT Services Hub',
    pagePath: '#it-services/13',
    sectionId: null,
    keywords: ['ui ux', 'ui design', 'ux design', 'figma', 'wireframing', 'user interface', 'user experience', 'prototyping', '13'],
    searchableText: 'UI/UX Design Services human-centered user experience design wireframing high-fidelity Figma prototypes design systems usability.'
  },
  {
    id: 'it-service-14',
    title: 'API Development & Enterprise Integration Services',
    description: 'RESTful and GraphQL API gateways, enterprise service bus (ESB) integrations, webhook pipelines, and secure API management.',
    category: 'IT Services',
    resultType: 'Service',
    parentTitle: 'IT Services Hub',
    pagePath: '#it-services/14',
    sectionId: null,
    keywords: ['api development', 'rest api', 'graphql', 'integration', 'webhooks', 'microservices gateway', 'middleware', '14'],
    searchableText: 'API Development & Integration Services RESTful GraphQL API design microservices gateways enterprise service bus integrations webhooks.'
  },
  {
    id: 'it-service-15',
    title: 'Quality Assurance & Software Testing Services',
    description: 'Comprehensive test automation (Playwright, Selenium), performance load testing, API validation, and security regression audits.',
    category: 'IT Services',
    resultType: 'Service',
    parentTitle: 'IT Services Hub',
    pagePath: '#it-services/15',
    sectionId: null,
    keywords: ['qa', 'quality assurance', 'software testing', 'automation testing', 'selenium', 'load testing', 'manual testing', 'bug tracking', '15'],
    searchableText: 'Quality Assurance & Software Testing Services automated regression testing performance load testing API test automation security testing.'
  },
  {
    id: 'it-service-16',
    title: 'Technical Support & IT Maintenance Services',
    description: 'Tier 1 to Tier 3 helpdesk ticketing, remote desktop support, critical security patches, user provisioning, and preventive care.',
    category: 'IT Services',
    resultType: 'Service',
    parentTitle: 'IT Services Hub',
    pagePath: '#it-services/16',
    sectionId: null,
    keywords: ['technical support', 'it support', 'helpdesk', 'troubleshooting', 'maintenance', 'patching', 'tier 1 tier 2 tier 3', '16'],
    searchableText: 'Technical Support & IT Maintenance Services Tier 1 to Tier 3 helpdesk support incident response system patches maintenance.'
  },
  {
    id: 'it-service-17',
    title: 'IT Audit & Regulatory Compliance Services',
    description: 'Statutory compliance audits for ISO 27001, SOC 2, CERT-In guidelines, GDPR, HIPAA, and IT governance frameworks.',
    category: 'IT Services',
    resultType: 'Service',
    parentTitle: 'IT Services Hub',
    pagePath: '#it-services/17',
    sectionId: null,
    keywords: ['it audit', 'compliance', 'iso 27001', 'soc 2', 'cert in', 'gdpr', 'regulatory compliance', 'risk assessment', '17'],
    searchableText: 'IT Audit & Compliance Services ISO 27001 SOC 2 HIPAA GDPR CERT-In compliance audits security posture assessments risk mitigation.'
  },
  {
    id: 'it-service-18',
    title: 'Digital Forensics & Incident Response Services',
    description: 'Evidence extraction, cyber breach forensics, chain-of-custody documentation, ransomware recovery, and legal expert reporting.',
    category: 'IT Services',
    resultType: 'Service',
    parentTitle: 'IT Services Hub',
    pagePath: '#it-services/18',
    sectionId: null,
    keywords: ['digital forensics', 'incident response', 'dfir', 'cyber crime', 'evidence', 'chain of custody', 'ransomware recovery', 'investigation', '18'],
    searchableText: 'Digital Forensics & Incident Response Services cyber breach investigation evidentiary forensic analysis chain of custody ransomware.'
  },
  {
    id: 'it-service-19',
    title: 'Data Backup & Disaster Recovery Services',
    description: 'Automated hybrid backups, recovery point objective (RPO/RTO) planning, failover clustering, and continuous business continuity.',
    category: 'IT Services',
    resultType: 'Service',
    parentTitle: 'IT Services Hub',
    pagePath: '#it-services/19',
    sectionId: null,
    keywords: ['data backup', 'disaster recovery', 'business continuity', 'rpo rto', 'failover', 'cloud backup', 'replication', '19'],
    searchableText: 'Data Backup & Disaster Recovery Services automated off-site cloud backups RPO/RTO disaster recovery orchestration failover business continuity.'
  },
  {
    id: 'it-service-20',
    title: 'IT Procurement & Enterprise Deployment Services',
    description: 'Turnkey hardware procurement, OEM software volume licensing, network equipment rollout, and lifecycle hardware management.',
    category: 'IT Services',
    resultType: 'Service',
    parentTitle: 'IT Services Hub',
    pagePath: '#it-services/20',
    sectionId: null,
    keywords: ['it procurement', 'hardware procurement', 'software licensing', 'deployment', 'vendor management', 'asset management', '20'],
    searchableText: 'IT Procurement & Deployment Services hardware enterprise software procurement vendor licensing management asset lifecycle tagging rollout.'
  },

  // =========================================================================
  // 3. JOB VACANCIES & CAREER OPPORTUNITIES (Deep links to job previews)
  // =========================================================================
  {
    id: 'job-hr-exec',
    title: 'HR Executive Vacancy',
    description: 'Support end-to-end recruitment, candidate screening, interview coordination, and HR operations. Code: IBCS-HR-EXEC-2026-001.',
    category: 'Careers & Jobs',
    resultType: 'Job Vacancy',
    parentTitle: 'Careers Portal',
    pagePath: '#/job-detail-preview?jobCode=IBCS-HR-EXEC-2026-001',
    sectionId: null,
    keywords: ['hr executive', 'recruitment', 'human resources', 'screening', 'onboarding', 'talent acquisition', 'jobs'],
    searchableText: 'HR Executive IBCS-HR-EXEC-2026-001 HR Department Entry Level Open recruitment candidate screening interview coordination onboarding.'
  },
  {
    id: 'job-hr-admin',
    title: 'HR Admin Vacancy',
    description: 'Employee records management, office administration, and internal communication workflows. Code: IBCS-HR-EXEC-2026-002.',
    category: 'Careers & Jobs',
    resultType: 'Job Vacancy',
    parentTitle: 'Careers Portal',
    pagePath: '#/job-detail-preview?jobCode=IBCS-HR-EXEC-2026-002',
    sectionId: null,
    keywords: ['hr admin', 'hr administration', 'employee records', 'office coordinator', 'documentation'],
    searchableText: 'HR Admin IBCS-HR-EXEC-2026-002 HR Department Entry Level Open employee records office administration internal coordination documentation.'
  },
  {
    id: 'job-hr-asst-mgr',
    title: 'HR Assistant Manager Vacancy',
    description: 'HR operations coordination, recruitment oversight, team supervision, and statutory compliance. Code: IBCS-HR-ASSTMGR-2026-003.',
    category: 'Careers & Jobs',
    resultType: 'Job Vacancy',
    parentTitle: 'Careers Portal',
    pagePath: '#/job-detail-preview?jobCode=IBCS-HR-ASSTMGR-2026-003',
    sectionId: null,
    keywords: ['hr assistant manager', 'hr manager', 'hr operations', 'recruitment oversight', 'mid-level hr'],
    searchableText: 'HR Assistant Manager IBCS-HR-ASSTMGR-2026-003 HR Department Mid-Level Open team supervision recruitment oversight employee management.'
  },
  {
    id: 'job-pydev',
    title: 'Junior Python Full Stack Developer Vacancy',
    description: 'Build backend APIs with Django/FastAPI, modern React user interfaces, and robust database models. Code: IBCS-IT-PYFS-2026-001.',
    category: 'Careers & Jobs',
    resultType: 'Job Vacancy',
    parentTitle: 'Careers Portal',
    pagePath: '#/job-detail-preview?jobCode=IBCS-IT-PYFS-2026-001',
    sectionId: null,
    keywords: ['python developer', 'full stack developer', 'django', 'fastapi', 'react', 'javascript', 'backend developer', 'software engineer'],
    searchableText: 'Junior Python Full Stack Developer IBCS-IT-PYFS-2026-001 IT Department Django FastAPI React REST APIs PostgreSQL frontend backend.'
  },
  {
    id: 'job-qa-eng',
    title: 'QA Engineer Vacancy',
    description: 'Develop automated test suites, execute manual verification, API testing, and defect reporting. Code: IBCS-IT-QA-ENG-2026-001.',
    category: 'Careers & Jobs',
    resultType: 'Job Vacancy',
    parentTitle: 'Careers Portal',
    pagePath: '#/job-detail-preview?jobCode=IBCS-IT-QA-ENG-2026-001',
    sectionId: null,
    keywords: ['qa engineer', 'tester', 'test automation', 'software tester', 'selenium', 'playwright', 'quality assurance'],
    searchableText: 'QA Engineer IBCS-IT-QA-ENG-2026-001 IT Department Open test automation manual testing regression API testing defect reporting.'
  },
  {
    id: 'job-mobdev',
    title: 'Mobile Application Developer Vacancy',
    description: 'Build native Android/iOS and cross-platform React Native apps with real-time sync. Code: IBCS-IT-MAD-2026-001.',
    category: 'Careers & Jobs',
    resultType: 'Job Vacancy',
    parentTitle: 'Careers Portal',
    pagePath: '#/job-detail-preview?jobCode=IBCS-IT-MAD-2026-001',
    sectionId: null,
    keywords: ['mobile developer', 'android developer', 'ios developer', 'react native', 'flutter', 'app developer'],
    searchableText: 'Mobile Application Developer IBCS-IT-MAD-2026-001 IT Department Open Android iOS React Native mobile app development APIs UI.'
  },
  {
    id: 'job-graphic-des',
    title: 'Graphic Designer Vacancy',
    description: 'Create brand identities, digital assets, product UI visuals, illustrations, and presentations. Code: IBCS-DES-GD-2026-001.',
    category: 'Careers & Jobs',
    resultType: 'Job Vacancy',
    parentTitle: 'Careers Portal',
    pagePath: '#/job-detail-preview?jobCode=IBCS-DES-GD-2026-001',
    sectionId: null,
    keywords: ['graphic designer', 'designer', 'ui designer', 'visual designer', 'photoshop', 'illustrator', 'branding'],
    searchableText: 'Graphic Designer IBCS-DES-GD-2026-001 Design & Creative Department Open brand assets marketing visual digital design UI assets.'
  },
  {
    id: 'job-devops-eng',
    title: 'Junior DevOps Engineer Vacancy',
    description: 'Implement CI/CD automation, cloud infrastructure deployment, Docker containers, and monitoring. Code: IBCS-IT-JDEVOPS-2026-001.',
    category: 'Careers & Jobs',
    resultType: 'Job Vacancy',
    parentTitle: 'Careers Portal',
    pagePath: '#/job-detail-preview?jobCode=IBCS-IT-JDEVOPS-2026-001',
    sectionId: null,
    keywords: ['devops engineer', 'cloud engineer', 'ci cd', 'docker', 'kubernetes', 'aws', 'linux', 'automation'],
    searchableText: 'Junior DevOps Engineer IBCS-IT-JDEVOPS-2026-001 IT Department Open CI/CD pipelines Docker Kubernetes Linux server monitoring.'
  },
  {
    id: 'job-sec-eng',
    title: 'Cyber Security Engineer Vacancy',
    description: 'Perform vulnerability assessments, network defense, penetration testing, and security hardening. Code: IBCS-IT-JSECURITY-2026-001.',
    category: 'Careers & Jobs',
    resultType: 'Job Vacancy',
    parentTitle: 'Careers Portal',
    pagePath: '#/job-detail-preview?jobCode=IBCS-IT-JSECURITY-2026-001',
    sectionId: null,
    keywords: ['cyber security engineer', 'security analyst', 'soc analyst', 'penetration tester', 'infosec', 'cyber defense'],
    searchableText: 'Cyber Security Engineer IBCS-IT-JSECURITY-2026-001 Cyber Security Department Open vulnerability assessment network defense VAPT SIEM.'
  },
  {
    id: 'job-ccio',
    title: 'Cyber Crime Investigation Officer Vacancy',
    description: 'Digital evidence analysis, cyber crime case tracking, chain of custody, and forensic reporting. Code: IBCS-IT-JCCIO-2026-001.',
    category: 'Careers & Jobs',
    resultType: 'Job Vacancy',
    parentTitle: 'Careers Portal',
    pagePath: '#/job-detail-preview?jobCode=IBCS-IT-JCCIO-2026-001',
    sectionId: null,
    keywords: ['cyber crime investigation officer', 'ccio', 'investigation officer', 'forensics investigator', 'cyber crime', 'police tech'],
    searchableText: 'Cyber Crime Investigation Officer IBCS-IT-JCCIO-2026-001 Cyber Crime Investigation Department digital evidence case tracking forensic analysis.'
  },
  {
    id: 'job-aiml-eng',
    title: 'AI / ML Engineer Vacancy',
    description: 'Design machine learning pipelines, NLP algorithms, computer vision models, and data intelligence. Code: IBCS-IT-AIML-2026-001.',
    category: 'Careers & Jobs',
    resultType: 'Job Vacancy',
    parentTitle: 'Careers Portal',
    pagePath: '#/job-detail-preview?jobCode=IBCS-IT-AIML-2026-001',
    sectionId: null,
    keywords: ['ai engineer', 'ml engineer', 'machine learning', 'artificial intelligence', 'data scientist', 'python', 'deep learning'],
    searchableText: 'AI/ML Engineer IBCS-IT-AIML-2026-001 IT Department Open machine learning deep learning NLP computer vision model training algorithms.'
  },
  {
    id: 'job-data-analyst',
    title: 'Data Analyst Vacancy',
    description: 'Extract business insights, build interactive data dashboards, write SQL queries, and perform trend analysis. Code: IBCS-IT-DANALYST-2026-001.',
    category: 'Careers & Jobs',
    resultType: 'Job Vacancy',
    parentTitle: 'Careers Portal',
    pagePath: '#/job-detail-preview?jobCode=IBCS-IT-DANALYST-2026-001',
    sectionId: null,
    keywords: ['data analyst', 'business analyst', 'sql', 'power bi', 'excel', 'analytics', 'reporting'],
    searchableText: 'Data Analyst IBCS-IT-DANALYST-2026-001 IT Department Open SQL business intelligence PowerBI reporting data visualization statistical analysis.'
  },

  // =========================================================================
  // 4. CAREER PORTAL SECTIONS & WORKFLOWS
  // =========================================================================
  {
    id: 'career-current-vacancies',
    title: 'Current Vacancies Overview',
    description: 'Explore full-time, part-time, internship, and remote opportunities currently active in the organization.',
    category: 'Careers & Jobs',
    resultType: 'Page',
    parentTitle: 'Careers Portal',
    pagePath: '#/vacancies',
    sectionId: null,
    keywords: ['vacancies', 'current vacancies', 'open positions', 'job listings', 'careers list'],
    searchableText: 'Current Vacancies full time part time internship remote opportunities active recruitment openings.'
  },
  {
    id: 'career-recruitment-rules',
    title: 'Recruitment Rules & Eligibility Policies',
    description: 'Statutory recruitment guidelines, qualification thresholds, age eligibility, and selection procedures.',
    category: 'Careers & Jobs',
    resultType: 'Policy',
    parentTitle: 'Careers Portal',
    pagePath: '#/policies',
    sectionId: null,
    keywords: ['recruitment rules', 'hiring policies', 'eligibility', 'selection process', 'qualifications', 'criteria'],
    searchableText: 'Recruitment Rules and Policies eligibility criteria qualification standards selection process statutory compliance hiring framework.'
  },
  {
    id: 'career-document-verification',
    title: 'Document Verification Department',
    description: 'Candidate document verification, credential checks, academic qualification verification, and background checks.',
    category: 'Careers & Jobs',
    resultType: 'Page',
    parentTitle: 'Careers Portal',
    pagePath: '#/verification',
    sectionId: null,
    keywords: ['document verification', 'certificate verification', 'credential check', 'background verification', 'verification department'],
    searchableText: 'Document Verification Department credential check certificate verification academic records background screening verification.'
  },
  {
    id: 'career-online-portal',
    title: 'Online Application Portal',
    description: 'Register and submit candidate master profile, upload credentials, and apply directly for active positions.',
    category: 'Careers & Jobs',
    resultType: 'Page',
    parentTitle: 'Careers Portal',
    pagePath: '#/portal',
    sectionId: null,
    keywords: ['online portal', 'application portal', 'candidate registration', 'apply online', 'form submission'],
    searchableText: 'Online Application Portal candidate registration form submit application upload documents profile portal.'
  },
  {
    id: 'career-advertisements',
    title: 'Recruitment Advertisements & Circulars',
    description: 'Official employment advertisements, public notifications, newspaper notices, and circulars.',
    category: 'Careers & Jobs',
    resultType: 'Document',
    parentTitle: 'Careers Portal',
    pagePath: '#/advertisement',
    sectionId: null,
    keywords: ['advertisements', 'recruitment advertisement', 'circulars', 'employment notice', 'public notification'],
    searchableText: 'Recruitment Advertisements official circulars employment notices public notifications gazette advertisements.'
  },
  {
    id: 'career-press-notices',
    title: 'Press Release & Notices',
    description: 'Official press releases, recruitment schedule updates, examination notices, and organizational bulletins.',
    category: 'Careers & Jobs',
    resultType: 'Document',
    parentTitle: 'Careers Portal',
    pagePath: '#/press',
    sectionId: null,
    keywords: ['press release', 'notices', 'announcements', 'news', 'updates', 'bulletin'],
    searchableText: 'Press Release and Notices official announcements exam schedule interview notices updates bulletins.'
  },
  {
    id: 'career-app-status',
    title: 'Check Application Status',
    description: 'Real-time application tracking using candidate Registration ID and date of birth/mobile verification.',
    category: 'Careers & Jobs',
    resultType: 'Service',
    parentTitle: 'Careers Portal',
    pagePath: '#/status',
    sectionId: null,
    keywords: ['application status', 'check status', 'track application', 'registration id', 'applicant login'],
    searchableText: 'Check Application Status track application registration ID applicant login status result verification.'
  },
  {
    id: 'career-submit-resume',
    title: 'Submit Resume & Talent Pool',
    description: 'Upload your resume and portfolio to our future talent repository for prospective hiring and upcoming projects.',
    category: 'Careers & Jobs',
    resultType: 'Service',
    parentTitle: 'Careers Portal',
    pagePath: '#/resume',
    sectionId: null,
    keywords: ['submit resume', 'upload cv', 'talent pool', 'future openings', 'curriculum vitae'],
    searchableText: 'Submit Resume upload CV portfolio talent pool future hiring opportunities candidate database.'
  },

  // =========================================================================
  // 5. SOFTWARE PRODUCT SUITE (Subpages)
  // =========================================================================
  {
    id: 'prod-introduction',
    title: 'Product Introduction — Software Products',
    description: 'Overview of IBCS commercial software platforms engineered for intelligent, secure enterprise operations.',
    category: 'Software Products',
    resultType: 'Product',
    parentTitle: 'Software Products',
    pagePath: '#product-introduction',
    sectionId: null,
    keywords: ['product introduction', 'overview', 'features', 'software architecture', 'platforms'],
    searchableText: 'Product Introduction purpose-built software products scalable architecture digital enterprise solutions.'
  },
  {
    id: 'prod-purpose-usecases',
    title: 'Purpose & Use Cases — Software Products',
    description: 'Real-world business applications, operational workflows, government digital services, and threat defense scenarios.',
    category: 'Software Products',
    resultType: 'Product',
    parentTitle: 'Software Products',
    pagePath: '#purpose-use-cases',
    sectionId: null,
    keywords: ['purpose', 'use cases', 'applications', 'scenarios', 'business value'],
    searchableText: 'Purpose and Use Cases enterprise workflows government applications cybersecurity scenarios digital transformation.'
  },
  {
    id: 'prod-vision-mission',
    title: 'Vision & Mission — Software Products',
    description: 'Engineering philosophy, long-term product vision, and commitment to cyber safety and digital empowerment.',
    category: 'Software Products',
    resultType: 'Product',
    parentTitle: 'Software Products',
    pagePath: '#vision-mission',
    sectionId: null,
    keywords: ['vision', 'mission', 'product vision', 'goals', 'philosophy'],
    searchableText: 'Vision and Mission software product engineering long-term goals cyber safety digital empowerment.'
  },
  {
    id: 'prod-roadmap',
    title: 'Product Roadmap & Innovation Pipeline',
    description: 'Upcoming feature releases, planned AI integrations, architecture milestones, and technological evolution.',
    category: 'Software Products',
    resultType: 'Product',
    parentTitle: 'Software Products',
    pagePath: '#product-roadmap',
    sectionId: null,
    keywords: ['product roadmap', 'roadmap', 'milestones', 'timeline', 'future releases', 'pipeline'],
    searchableText: 'Product Roadmap innovation pipeline upcoming features AI integration cloud architecture releases.'
  },
  {
    id: 'prod-tech-arch',
    title: 'Technology & Architecture — Software Products',
    description: 'System modularity, high-concurrency microservices, data isolation, fault tolerance, and security specifications.',
    category: 'Software Products',
    resultType: 'Product',
    parentTitle: 'Software Products',
    pagePath: '#technology-architecture',
    sectionId: null,
    keywords: ['technology architecture', 'architecture', 'microservices', 'tech stack', 'infrastructure'],
    searchableText: 'Technology and Architecture system modularity microservices data isolation fault tolerance scalability.'
  },
  {
    id: 'prod-security-compliance',
    title: 'Security & Compliance — Software Products',
    description: 'End-to-end encryption, role-based access control (RBAC), audit logging, and global regulatory compliance.',
    category: 'Software Products',
    resultType: 'Product',
    parentTitle: 'Software Products',
    pagePath: '#security-compliance',
    sectionId: null,
    keywords: ['security', 'compliance', 'rbac', 'encryption', 'gdpr', 'audit logs'],
    searchableText: 'Security and Compliance encryption RBAC audit logging regulatory compliance ISO CERT-In standards.'
  },
  {
    id: 'prod-integrations-apis',
    title: 'Integrations & APIs — Software Products',
    description: 'Seamless third-party ecosystem integrations, enterprise webhook triggers, and secure RESTful/GraphQL endpoints.',
    category: 'Software Products',
    resultType: 'Product',
    parentTitle: 'Software Products',
    pagePath: '#integrations-apis',
    sectionId: null,
    keywords: ['integrations', 'apis', 'rest api', 'webhooks', 'endpoints', 'connectors'],
    searchableText: 'Integrations and APIs third-party integrations webhooks RESTful GraphQL endpoints enterprise connectors.'
  },
  {
    id: 'prod-benefits-impact',
    title: 'Product Benefits & Strategic Impact',
    description: 'Operational efficiency gains, cost reductions, robust risk mitigation, and tangible organizational value.',
    category: 'Software Products',
    resultType: 'Product',
    parentTitle: 'Software Products',
    pagePath: '#product-benefits-impact',
    sectionId: null,
    keywords: ['benefits', 'impact', 'roi', 'advantages', 'value proposition'],
    searchableText: 'Product Benefits and Impact operational efficiency cost reduction risk mitigation ROI organizational value.'
  },

  // =========================================================================
  // 6. HOMEPAGE 24 CORE TECHNOLOGY & DOMAIN SECTIONS
  // =========================================================================
  {
    id: 'sec-sdpe',
    title: 'Software Development & Product Engineering',
    description: 'End-to-end product design, scalable architecture, secure microservices, and continuous engineering excellence.',
    category: 'Security & Technology',
    resultType: 'Technology',
    parentTitle: 'Homepage',
    pagePath: '#sdpe-page',
    sectionId: 'products-platforms',
    keywords: ['sdpe', 'software development', 'product engineering', 'architecture', 'software design'],
    searchableText: 'Software Development and Product Engineering full-lifecycle development enterprise systems code quality.'
  },
  {
    id: 'sec-ip',
    title: 'Intellectual Property & Proprietary Innovations',
    description: 'Patents, software copyrights, algorithmic proprietary rights, and institutional IP assets.',
    category: 'About Us & Legal',
    resultType: 'Technology',
    parentTitle: 'Homepage',
    pagePath: '#ip-page',
    sectionId: 'intellectual-property',
    keywords: ['intellectual property', 'ip', 'patents', 'copyrights', 'proprietary technology', 'assets'],
    searchableText: 'Intellectual Property patents software copyrights proprietary algorithms IP protection innovations.'
  },
  {
    id: 'sec-spc',
    title: 'Software Product Commercialisation',
    description: 'Go-to-market strategies, software licensing models, enterprise product delivery, and commercial software scale.',
    category: 'Software Products',
    resultType: 'Technology',
    parentTitle: 'Homepage',
    pagePath: '#spc-page',
    sectionId: 'software-commercialisation-section',
    keywords: ['software commercialisation', 'commercialization', 'licensing', 'go to market', 'product monetization'],
    searchableText: 'Software Product Commercialisation licensing monetization go-to-market enterprise software rollout.'
  },
  {
    id: 'sec-pdl',
    title: 'Product Development Lifecycle (PDLC)',
    description: 'Discovery, prototyping, agile sprints, security hardening, user testing, deployment, and ongoing maintenance.',
    category: 'Security & Technology',
    resultType: 'Technology',
    parentTitle: 'Homepage',
    pagePath: '#pdl-page',
    sectionId: 'product-development-lifecycle',
    keywords: ['pdlc', 'product development lifecycle', 'agile', 'sprints', 'prototyping', 'testing'],
    searchableText: 'Product Development Lifecycle discovery prototyping agile sprints security hardening testing deployment.'
  },
  {
    id: 'sec-ope',
    title: 'Our Product Ecosystem',
    description: 'Connected software modules spanning cyber defense, administrative workflows, forensic inspection, and AI analytics.',
    category: 'Software Products',
    resultType: 'Technology',
    parentTitle: 'Homepage',
    pagePath: '#our-product-ecosystem-page',
    sectionId: 'our-product-ecosystem',
    keywords: ['product ecosystem', 'ecosystem', 'interconnected platforms', 'integrated suite'],
    searchableText: 'Our Product Ecosystem interconnected software platforms cyber defense analytics workflow integration.'
  },
  {
    id: 'sec-ot',
    title: 'Our Technology Stack & Frameworks',
    description: 'State-of-the-art tech stack including high-speed reactive frontends, resilient distributed backends, and low-latency storage.',
    category: 'Security & Technology',
    resultType: 'Technology',
    parentTitle: 'Homepage',
    pagePath: '#our-technology-page',
    sectionId: 'our-technology',
    keywords: ['our technology', 'tech stack', 'frameworks', 'languages', 'databases', 'infrastructure'],
    searchableText: 'Our Technology technology stack modern frameworks reactive frontends distributed backends databases.'
  },
  {
    id: 'sec-ai',
    title: 'Artificial Intelligence & Intelligent Software',
    description: 'Embedded machine intelligence, autonomous decision engines, pattern recognition, and adaptive user interfaces.',
    category: 'Security & Technology',
    resultType: 'Technology',
    parentTitle: 'Homepage',
    pagePath: '#artificial-intelligence-intelligent-software-page',
    sectionId: 'artificial-intelligence-intelligent-software',
    keywords: ['artificial intelligence', 'ai', 'intelligent software', 'machine learning', 'automation', 'neural networks'],
    searchableText: 'Artificial Intelligence and Intelligent Software autonomous decision engines pattern recognition adaptive systems.'
  },
  {
    id: 'sec-cloud-saas',
    title: 'Cloud, SaaS & Digital Platforms',
    description: 'Multi-tenant Software-as-a-Service (SaaS), auto-scaling cloud topologies, high-availability deployments, and zero downtime.',
    category: 'Security & Technology',
    resultType: 'Technology',
    parentTitle: 'Homepage',
    pagePath: '#cloud-saas-digital-platforms-page',
    sectionId: 'cloud-saas-digital-platforms',
    keywords: ['cloud', 'saas', 'digital platforms', 'multi-tenant', 'cloud computing', 'scalability'],
    searchableText: 'Cloud SaaS and Digital Platforms multi-tenant cloud architecture auto-scaling high availability.'
  },
  {
    id: 'sec-data-analytics',
    title: 'Data Analytics & Intelligence Technology',
    description: 'Big data ingestion, stream processing, predictive telemetry, visual dashboards, and actionable intelligence.',
    category: 'Security & Technology',
    resultType: 'Technology',
    parentTitle: 'Homepage',
    pagePath: '#data-analytics-intelligence-technology-page',
    sectionId: 'data-analytics-intelligence-technology',
    keywords: ['data analytics', 'intelligence technology', 'big data', 'telemetry', 'dashboards', 'data processing'],
    searchableText: 'Data Analytics and Intelligence Technology big data stream processing predictive telemetry insights.'
  },
  {
    id: 'sec-apis-integration',
    title: 'APIs, Integration & Digital Connectivity',
    description: 'Enterprise bus interconnects, secure Webhooks, OpenAPI-compliant contracts, and legacy middleware bridges.',
    category: 'Security & Technology',
    resultType: 'Technology',
    parentTitle: 'Homepage',
    pagePath: '#apis-integration-page',
    sectionId: 'apis-integration-digital-connectivity',
    keywords: ['apis', 'integration', 'digital connectivity', 'middleware', 'webhooks', 'interoperability'],
    searchableText: 'APIs Integration and Digital Connectivity enterprise connectors Webhooks OpenAPI legacy bridge.'
  },
  {
    id: 'sec-edu-training',
    title: 'Education, Training & Skill Development Technology',
    description: 'Interactive cyber ranges, virtual lab simulations, technical curricula, and industry competency benchmarks.',
    category: 'Skill Development',
    resultType: 'Technology',
    parentTitle: 'Homepage',
    pagePath: '#education-training-page',
    sectionId: 'education-training-skill-development-technology',
    keywords: ['education', 'training technology', 'cyber ranges', 'virtual labs', 'e-learning'],
    searchableText: 'Education Training and Skill Development Technology virtual labs interactive cyber ranges training platforms.'
  },
  {
    id: 'sec-enterprise-biz',
    title: 'Enterprise & Business Software Products',
    description: 'Mission-critical enterprise tools, ERP modules, compliance trackers, CRM integrations, and automated workflows.',
    category: 'Software Products',
    resultType: 'Technology',
    parentTitle: 'Homepage',
    pagePath: '#enterprise-business-page',
    sectionId: 'enterprise-business-software-products',
    keywords: ['enterprise software', 'business products', 'erp', 'crm', 'workflow automation'],
    searchableText: 'Enterprise and Business Software Products ERP automation workflows enterprise management tools.'
  },
  {
    id: 'sec-gov-tech',
    title: 'Government & Public Technology',
    description: 'E-governance platforms, secure citizen service portals, law enforcement backbones, and public administrative systems.',
    category: 'Security & Technology',
    resultType: 'Technology',
    parentTitle: 'Homepage',
    pagePath: '#government-public-page',
    sectionId: 'government-public-technology',
    keywords: ['government tech', 'public technology', 'e-governance', 'citizen services', 'public sector'],
    searchableText: 'Government and Public Technology e-governance citizen portals public sector administrative platforms.'
  },
  {
    id: 'sec-inv-tech',
    title: 'Investigation, Legal & Institutional Technology',
    description: 'Digital evidence management, chain-of-custody tracking, case dossier tools, and legal compliance workflows.',
    category: 'Security & Technology',
    resultType: 'Technology',
    parentTitle: 'Homepage',
    pagePath: '#investigation-legal-page',
    sectionId: 'investigation-legal-institutional-technology',
    keywords: ['investigation tech', 'legal tech', 'evidence management', 'chain of custody', 'law enforcement'],
    searchableText: 'Investigation Legal and Institutional Technology digital evidence chain of custody case management.'
  },
  {
    id: 'sec-soft-arch',
    title: 'Software Architecture & Product Engineering',
    description: 'Domain-driven design, event-driven architectures, distributed caching, and zero-trust engineering standards.',
    category: 'Security & Technology',
    resultType: 'Technology',
    parentTitle: 'Homepage',
    pagePath: '#software-architecture-page',
    sectionId: 'software-architecture-product-engineering',
    keywords: ['software architecture', 'system design', 'event-driven', 'domain driven design', 'microservices'],
    searchableText: 'Software Architecture and Product Engineering domain-driven design event-driven distributed systems.'
  },
  {
    id: 'sec-global-infra',
    title: 'Global Infrastructure & Managed Services',
    description: 'Geographically redundant datacenters, edge caching, automated failover networks, and cloud managed services.',
    category: 'Security & Technology',
    resultType: 'Technology',
    parentTitle: 'Homepage',
    pagePath: '#global-infrastructure-page',
    sectionId: 'global-infrastructure-managed-services',
    keywords: ['global infrastructure', 'managed services', 'datacenters', 'edge computing', 'cloud infrastructure'],
    searchableText: 'Global Infrastructure and Managed Services datacenters edge computing failover network operations.'
  },
  {
    id: 'sec-devops-cont',
    title: 'DevOps & Continuous Delivery Systems',
    description: 'Continuous integration, automated canary deployments, security vulnerability scanners in pipeline, and telemetry.',
    category: 'Security & Technology',
    resultType: 'Technology',
    parentTitle: 'Homepage',
    pagePath: '#devops-page',
    sectionId: 'devops-continuous-delivery',
    keywords: ['devops', 'continuous delivery', 'canary deployment', 'pipelines', 'cicd'],
    searchableText: 'DevOps and Continuous Delivery CI/CD pipelines canary deployment automated testing release engineering.'
  },
  {
    id: 'sec-digital-exp',
    title: 'Digital Experience Design (DXD)',
    description: 'Accessible, touch-first responsive interfaces, fluid animations, contextual micro-interactions, and design systems.',
    category: 'Security & Technology',
    resultType: 'Technology',
    parentTitle: 'Homepage',
    pagePath: '#digital-experience-page',
    sectionId: 'digital-experience-design',
    keywords: ['digital experience', 'dxd', 'ux design', 'ui design', 'accessibility', 'micro interactions'],
    searchableText: 'Digital Experience Design accessible responsive interfaces fluid animations design system tokens.'
  },
  {
    id: 'sec-reg-comp',
    title: 'Regulatory Compliance & Governance',
    description: 'Enterprise compliance frameworks, data privacy safeguarding (DPDP, GDPR), audit readiness, and security controls.',
    category: 'About Us & Legal',
    resultType: 'Policy',
    parentTitle: 'Homepage',
    pagePath: '#regulatory-compliance-page',
    sectionId: 'regulatory-compliance-governance',
    keywords: ['regulatory compliance', 'governance', 'dpdp act', 'gdpr', 'iso', 'audit readiness', 'security controls'],
    searchableText: 'Regulatory Compliance and Governance DPDP Act GDPR ISO 27001 data privacy audit readiness controls.'
  },
  {
    id: 'sec-ai-innov',
    title: 'AI Innovation, Research & Advanced Intelligence Automation',
    description: 'Frontier AI research, natural language understanding, neural anomaly detection, and automated threat reasoning.',
    category: 'Security & Technology',
    resultType: 'Technology',
    parentTitle: 'Homepage',
    pagePath: '#ai-innovation-page',
    sectionId: 'ai-innovation-research-advanced-intelligence-automation',
    keywords: ['ai innovation', 'ai research', 'frontier ai', 'anomaly detection', 'threat reasoning', 'deep learning'],
    searchableText: 'AI Innovation Research and Advanced Intelligence Automation neural anomaly detection threat reasoning AI models.'
  },
  {
    id: 'sec-iot-edge',
    title: 'IoT & Smart Edge Systems',
    description: 'Edge computing architectures, real-time sensor processing, embedded security firmware, and IoT device telemetry.',
    category: 'Security & Technology',
    resultType: 'Technology',
    parentTitle: 'Homepage',
    pagePath: '#iot-page',
    sectionId: 'iot-smart-edge-systems',
    keywords: ['iot', 'smart edge', 'edge computing', 'embedded systems', 'sensors', 'telemetry', 'firmware'],
    searchableText: 'IoT and Smart Edge Systems edge computing sensor telemetry embedded security firmware connected devices.'
  },
  {
    id: 'sec-nextgen',
    title: 'Next-Generation Digital Innovation & Decentralised Intelligence',
    description: 'Blockchain ledgers, cryptographic proofs, decentralized data verification, smart contracts, and Web3 security.',
    category: 'Security & Technology',
    resultType: 'Technology',
    parentTitle: 'Homepage',
    pagePath: '#nextgen-page',
    sectionId: 'next-generation-digital-innovation-decentralised-intelligence',
    keywords: ['blockchain', 'next generation', 'decentralised intelligence', 'cryptographic', 'smart contracts', 'web3'],
    searchableText: 'Next-Generation Digital Innovation Decentralised Intelligence blockchain cryptographic proofs smart contracts Web3.'
  },
  {
    id: 'sec-cyber-security',
    title: 'Cybersecurity & Digital Security',
    description: 'Comprehensive cyber defense architectures, active threat intelligence, encryption standards, and digital resilience.',
    category: 'Security & Technology',
    resultType: 'Technology',
    parentTitle: 'Homepage',
    pagePath: '#cybersecurity-digital-security-page',
    sectionId: 'cybersecurity-digital-security',
    keywords: ['cybersecurity', 'digital security', 'threat defense', 'encryption', 'security operations', 'firewall'],
    searchableText: 'Cybersecurity and Digital Security active threat defense encryption standards security architecture resilience.'
  },
  {
    id: 'sec-intro',
    title: 'Introduction — Corporate Profile & Mission',
    description: 'Official introduction to IB Cyber Security Private Limited, company credentials, leadership vision, and objectives.',
    category: 'About Us & Legal',
    resultType: 'Page',
    parentTitle: 'Homepage',
    pagePath: '#introduction-page',
    sectionId: 'introduction',
    keywords: ['introduction', 'company profile', 'about ibcs', 'overview', 'corporate mission'],
    searchableText: 'Introduction IB Cyber Security Private Limited corporate profile product company vision Cyber Safe India.'
  },

  // =========================================================================
  // 7. SKILL DEVELOPMENT & TRAINING COURSES (32 Programs)
  // =========================================================================
  {
    id: 'skill-soft-dev-train',
    title: 'Software Development Training',
    description: 'Hands-on software development training covering full-stack programming, clean architecture, and modern frameworks.',
    category: 'Skill Development',
    resultType: 'Course',
    parentTitle: 'Skill Development',
    pagePath: '#skill-development-page',
    sectionId: null,
    keywords: ['software training', 'coding course', 'full stack training', 'programming course'],
    searchableText: 'Software Development Training coding programming full stack clean architecture software engineering.'
  },
  {
    id: 'skill-soft-dev-intern',
    title: 'Software Development Internship',
    description: 'Real-world software engineering internship working alongside senior developers on live enterprise platforms.',
    category: 'Skill Development',
    resultType: 'Course',
    parentTitle: 'Skill Development',
    pagePath: '#skill-development-page',
    sectionId: null,
    keywords: ['software internship', 'coding internship', 'engineering intern', 'developer internship'],
    searchableText: 'Software Development Internship practical coding industry projects live platforms mentoring.'
  },
  {
    id: 'skill-cyber-train',
    title: 'Cybersecurity Training Program',
    description: 'Comprehensive cyber defense, ethical hacking, vulnerability assessment, and security operations training.',
    category: 'Skill Development',
    resultType: 'Course',
    parentTitle: 'Skill Development',
    pagePath: '#skill-development-page',
    sectionId: null,
    keywords: ['cybersecurity training', 'ethical hacking', 'infosec course', 'vapt training', 'security course'],
    searchableText: 'Cybersecurity Training ethical hacking network security vulnerability assessments VAPT SOC.'
  },
  {
    id: 'skill-cyber-intern',
    title: 'Cybersecurity Internship',
    description: 'Industry internship in SOC operations, penetration testing, malware analysis, and real-time incident defense.',
    category: 'Skill Development',
    resultType: 'Course',
    parentTitle: 'Skill Development',
    pagePath: '#skill-development-page',
    sectionId: null,
    keywords: ['cybersecurity internship', 'security intern', 'soc intern', 'ethical hacking intern'],
    searchableText: 'Cybersecurity Internship SOC operations penetration testing threat defense malware investigation.'
  },
  {
    id: 'skill-forensics-train',
    title: 'Digital Forensics Training',
    description: 'Digital evidence handling, memory forensics, mobile device extraction, and chain-of-custody protocols.',
    category: 'Skill Development',
    resultType: 'Course',
    parentTitle: 'Skill Development',
    pagePath: '#skill-development-page',
    sectionId: null,
    keywords: ['digital forensics training', 'forensics course', 'evidence analysis', 'cyber forensics'],
    searchableText: 'Digital Forensics Training digital evidence memory forensics disk analysis chain of custody.'
  },
  {
    id: 'skill-forensics-intern',
    title: 'Digital Forensics Internship',
    description: 'Practical casework in digital forensics labs assisting authorized investigators in evidentiary analysis.',
    category: 'Skill Development',
    resultType: 'Course',
    parentTitle: 'Skill Development',
    pagePath: '#skill-development-page',
    sectionId: null,
    keywords: ['digital forensics internship', 'forensics intern', 'lab intern', 'cyber crime lab'],
    searchableText: 'Digital Forensics Internship forensic lab casework digital evidence extraction investigation.'
  },
  {
    id: 'skill-ai-ml-train',
    title: 'Artificial Intelligence & Machine Learning Training',
    description: 'Machine learning fundamentals, neural networks, computer vision, natural language processing, and Python models.',
    category: 'Skill Development',
    resultType: 'Course',
    parentTitle: 'Skill Development',
    pagePath: '#skill-development-page',
    sectionId: null,
    keywords: ['ai training', 'ml course', 'machine learning training', 'data science course', 'python ai'],
    searchableText: 'Artificial Intelligence & Machine Learning Training deep learning NLP neural networks Python algorithms.'
  },
  {
    id: 'skill-ai-ml-intern',
    title: 'Artificial Intelligence & Machine Learning Internship',
    description: 'Work with production AI/ML pipelines, LLM fine-tuning, automated feature engineering, and model deployment.',
    category: 'Skill Development',
    resultType: 'Course',
    parentTitle: 'Skill Development',
    pagePath: '#skill-development-page',
    sectionId: null,
    keywords: ['ai internship', 'ml intern', 'machine learning internship', 'data science intern'],
    searchableText: 'Artificial Intelligence & Machine Learning Internship model deployment LLM training data pipelines.'
  },
  {
    id: 'skill-cloud-devops-train',
    title: 'Cloud Computing & DevOps Training',
    description: 'AWS, Azure, Docker containerization, Kubernetes orchestration, and automated CI/CD pipeline masterclass.',
    category: 'Skill Development',
    resultType: 'Course',
    parentTitle: 'Skill Development',
    pagePath: '#skill-development-page',
    sectionId: null,
    keywords: ['cloud training', 'devops training', 'aws course', 'docker course', 'kubernetes training'],
    searchableText: 'Cloud Computing & DevOps Training AWS Azure Docker Kubernetes CI/CD infrastructure automation.'
  },
  {
    id: 'skill-cyber-law',
    title: 'Cyber Law & Digital Compliance Training',
    description: 'IT Act 2000 provisions, DPDP Act 2023 regulations, digital evidence law, and international cyber frameworks.',
    category: 'Skill Development',
    resultType: 'Course',
    parentTitle: 'Skill Development',
    pagePath: '#skill-development-page',
    sectionId: null,
    keywords: ['cyber law', 'it act', 'dpdp act', 'compliance training', 'legal technology course'],
    searchableText: 'Cyber Law & Digital Compliance Training IT Act 2000 DPDP Act digital evidence statutory compliance.'
  }
];

// Available Search Category Filters
export const SEARCH_CATEGORIES = [
  'ALL',
  'IT Services',
  'Careers & Jobs',
  'Software Products',
  'Security & Technology',
  'Skill Development',
  'About Us & Legal',
  'Support & Contact'
];

// Popular / Trending Quick Suggestions when input is empty
export const QUICK_SUGGESTIONS = [
  { label: 'Cybersecurity Services', query: 'cybersecurity' },
  { label: 'Job Vacancies', query: 'vacancy' },
  { label: 'Python Full Stack Developer', query: 'python developer' },
  { label: 'AI & Machine Learning', query: 'machine learning' },
  { label: 'Cloud Computing', query: 'cloud' },
  { label: 'Document Verification', query: 'verification' },
  { label: 'Software Products Suite', query: 'software products' },
  { label: 'Meaning Behind Name', query: 'meaning' }
];

/**
 * Intelligent Smart Search scoring algorithm:
 * - Matches complete words, partial words, prefixes, and phrases.
 * - Searches across title, keywords, parentTitle, category, and searchableText.
 * - Prioritizes exact matches, title matches, keyword matches, and full-phrase containment.
 * - Deduplicates results pointing to identical destinations.
 */
export function searchWebsite(query = '', selectedCategory = 'ALL') {
  const cleanQuery = (query || '').trim().toLowerCase();
  if (!cleanQuery) return [];

  const queryTerms = cleanQuery.split(/\s+/).filter(Boolean);

  const scoredResults = [];

  for (const item of SEARCH_INDEX) {
    // Category filter check
    if (selectedCategory !== 'ALL' && item.category !== selectedCategory) {
      continue;
    }

    const titleLower = item.title.toLowerCase();
    const descLower = (item.description || '').toLowerCase();
    const parentLower = (item.parentTitle || '').toLowerCase();
    const categoryLower = item.category.toLowerCase();
    const searchableLower = (item.searchableText || '').toLowerCase();
    const keywordsLower = (item.keywords || []).map((k) => k.toLowerCase());

    let score = 0;

    // 1. Exact Title Match
    if (titleLower === cleanQuery) {
      score += 1500;
    } else if (titleLower.startsWith(cleanQuery)) {
      score += 800;
    } else if (titleLower.includes(cleanQuery)) {
      score += 450;
    }

    // 2. Keyword Matches
    if (keywordsLower.some((k) => k === cleanQuery)) {
      score += 400;
    } else if (keywordsLower.some((k) => k.includes(cleanQuery))) {
      score += 250;
    }

    // 3. Parent Title & Category Matches
    if (parentLower.includes(cleanQuery)) {
      score += 150;
    }
    if (categoryLower.includes(cleanQuery)) {
      score += 120;
    }

    // 4. Description & Body Text Matches
    if (descLower.includes(cleanQuery)) {
      score += 100;
    }
    if (searchableLower.includes(cleanQuery)) {
      score += 80;
    }

    // 5. Multi-term coverage check
    if (queryTerms.length > 1) {
      let termsMatched = 0;
      for (const term of queryTerms) {
        if (
          titleLower.includes(term) ||
          keywordsLower.some((k) => k.includes(term)) ||
          descLower.includes(term) ||
          searchableLower.includes(term)
        ) {
          termsMatched++;
          score += 40;
        }
      }
      if (termsMatched === queryTerms.length) {
        score += 200; // Bonus for containing every search term
      }
    } else if (score === 0) {
      // Check if any keyword or title term starts with query
      const words = (titleLower + ' ' + searchableLower).split(/[\s,.-]+/);
      if (words.some((w) => w.startsWith(cleanQuery))) {
        score += 60;
      }
    }

    if (score > 0) {
      scoredResults.push({ item, score });
    }
  }

  // Sort descending by relevance score
  scoredResults.sort((a, b) => b.score - a.score);

  // Return deduplicated item array
  const seenPaths = new Set();
  const finalResults = [];

  for (const { item } of scoredResults) {
    const key = `${item.pagePath}-${item.title}`;
    if (!seenPaths.has(key)) {
      seenPaths.add(key);
      finalResults.push(item);
    }
  }

  return finalResults;
}
