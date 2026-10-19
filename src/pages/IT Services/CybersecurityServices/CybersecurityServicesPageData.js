/**
 * ============================================================================
 * CybersecurityServices.js
 * ============================================================================
 * Sourced from IBCS_IT_Services_Card_04_Cybersecurity_Services.docx.
 * 
 * This file combines:
 * 1. The complete catalog of all 50 Cybersecurity Service sections (id, title, description).
 * 2. Visual icon mappings using 'lucide-react' for each distinct service.
 * 3. Icon retrieval and rendering helper utilities (getSectionIcon, SectionIcon).
 * ============================================================================
 */

import React from 'react';
import {
  ShieldCheck,
  FileText,
  AlertTriangle,
  Boxes,
  Radar,
  Network,
  BookOpen,
  UserCheck,
  Fingerprint,
  KeyRound,
  Bug,
  Wrench,
  Target,
  Globe,
  Webhook,
  Wifi,
  Laptop,
  MailCheck,
  GraduationCap,
  BellRing,
  BarChart3,
  Eye,
  Siren,
  ShieldBan,
  SearchCode,
  Archive,
  Cloud,
  Database,
  Box,
  GitBranch,
  FileCode,
  PackageSearch,
  FolderLock,
  Lock,
  DatabaseBackup,
  HeartPulse,
  Handshake,
  Award,
  ClipboardCheck,
  TrendingUp,
  ListTodo,
  SlidersHorizontal,
  Radio,
  ScanFace,
  Swords,
  Skull,
  VenetianMask,
  Home,
  Compass,
  Sparkles,
} from 'lucide-react';

/**
 * ----------------------------------------------------------------------------
 * 1. CYBERSECURITY SECTIONS DATA (50 Comprehensive Services)
 * ----------------------------------------------------------------------------
 * Each section includes:
 * - id: Unique number from 1 to 50
 * - title: Short, descriptive service title
 * - description: Detailed explanation of objectives, methodology, and safeguards
 */
export const CYBERSECURITY_SECTIONS = [
  // --- Group 1: Foundations, Scoping & Risk Assessments (1 - 5) ---
  {
    "id": 1,
    "title": "Cybersecurity Services Overview",
    "description": "IBCS provides cybersecurity services designed to help organizations understand digital risks, strengthen protective controls, and improve their ability to respond to security issues. The work can include risk reviews, security assessments, architecture guidance, monitoring support, incident readiness, and remediation planning according to the agreed scope. Each engagement should reflect the organization’s systems, data sensitivity, operating model, and obligations. Recommendations are documented clearly, with priorities based on business impact and practical implementation needs."
  },
  {
    "id": 2,
    "title": "Cybersecurity Requirements and Scope Definition",
    "description": "Effective security work begins with a clear understanding of the systems, people, information, and business processes in scope. IBCS can work with stakeholders to define assessment boundaries, objectives, authorized activities, exclusions, deliverables, and reporting expectations. This prevents uncertainty during technical work and helps ensure that testing is performed only with appropriate permission. The scope should identify responsible contacts, operational constraints, and escalation paths before activities begin, especially where production services or sensitive data may be involved."
  },
  {
    "id": 3,
    "title": "Cyber Risk Assessment",
    "description": "A cyber risk assessment examines how threats, weaknesses, and business consequences may intersect within an organization’s environment. IBCS can help identify critical assets, plausible threat scenarios, existing safeguards, and areas where additional controls may be justified. Risks should be described in terms that technical teams and decision-makers can both understand. Ratings are estimates based on available evidence, not guarantees of future events, and should be revisited when systems, threats, or business priorities materially change."
  },
  {
    "id": 4,
    "title": "Asset Inventory and Ownership",
    "description": "Security decisions are difficult when an organization does not know which systems, devices, applications, cloud resources, and data stores it operates. IBCS can help structure an asset inventory that records ownership, purpose, location, dependencies, exposure, and business criticality. The inventory should distinguish confirmed information from unknown or outdated records. Clear ownership makes it easier to schedule patching, assess vulnerabilities, approve changes, and investigate incidents. Asset discovery methods must be authorized and adapted to the environment."
  },
  {
    "id": 5,
    "title": "Threat Modeling and Attack Surface Review",
    "description": "Threat modeling considers how an application or environment could be misused and which controls could reduce likely attack paths. IBCS can facilitate structured reviews of trust boundaries, entry points, sensitive operations, external dependencies, and abuse cases. An attack surface review may also identify exposed services, unnecessary interfaces, and overlooked administrative paths. The output should prioritize realistic scenarios and practical mitigations rather than present every theoretical possibility as equally urgent. Models should be updated when architecture or functionality changes."
  },

  // --- Group 2: Architecture, Policy & Access Control (6 - 10) ---
  {
    "id": 6,
    "title": "Security Architecture Review",
    "description": "A security architecture review examines whether protective controls are appropriately placed across applications, networks, identities, data flows, and operational processes. IBCS can assess documented designs and relevant configurations against agreed requirements and recognized practices. The review may identify excessive trust, weak separation between environments, missing auditability, or unnecessary exposure. Recommendations should explain the risk addressed and the trade-offs involved. Architecture review is most useful when performed early enough for design improvements to be incorporated without major rework."
  },
  {
    "id": 7,
    "title": "Security Policies and Standards",
    "description": "Policies and standards translate an organization’s security expectations into consistent operating rules. IBCS can help draft or review documents covering acceptable use, access management, password and authentication practices, endpoint handling, data classification, incident reporting, and change control where needed. Policy language should be understandable, enforceable, and consistent with actual business operations. Senior management and relevant legal or compliance advisers should approve formal obligations. A written policy is effective only when responsibilities, training, and review processes support it."
  },
  {
    "id": 8,
    "title": "Identity and Access Management",
    "description": "Identity and access management controls who can access systems and what actions each identity may perform. IBCS can review account provisioning, role design, privileged access, joiner-mover-leaver processes, and periodic access recertification. Permissions should follow least privilege and be tied to business responsibilities rather than accumulated indefinitely. Shared accounts and unmanaged service identities create accountability challenges and should be addressed where feasible. Implementation depends on the organization’s identity platform, operational constraints, and requirements for audit evidence."
  },
  {
    "id": 9,
    "title": "Multi-Factor Authentication Strategy",
    "description": "Multi-factor authentication can reduce the risk associated with stolen or reused passwords, particularly for administrative and remote access. IBCS can help identify where stronger authentication is most important and evaluate methods supported by the organization’s systems. Rollout planning should include enrollment, recovery, exceptions, user communication, and protection for privileged accounts. MFA does not eliminate every account compromise scenario, so it should be combined with monitoring, secure recovery procedures, and appropriate access restrictions. The final method should reflect risk and usability."
  },
  {
    "id": 10,
    "title": "Privileged Access Protection",
    "description": "Privileged accounts can make high-impact changes to infrastructure, applications, and security settings, so they require additional oversight. IBCS can assess administrator account separation, approval processes, credential storage, session monitoring, and emergency access arrangements. Administrative privileges should be granted only to authorized people and limited to the duration and tasks required where practical. Break-glass accounts need secure storage and periodic testing. Controls should be designed so that strong protection does not prevent timely response to genuine operational emergencies."
  },

  // --- Group 3: Vulnerabilities, Testing & Endpoint Security (11 - 17) ---
  {
    "id": 11,
    "title": "Vulnerability Management",
    "description": "Vulnerability management is a repeatable process for identifying weaknesses, assessing their relevance, assigning owners, and tracking remediation. IBCS can help establish scanning schedules, risk-based prioritization, exception handling, and verification after fixes. A vulnerability’s practical risk depends on exposure, exploitability, affected assets, and potential business impact, not only its severity score. Findings should include enough context for responsible teams to act. Scanning must be authorized and configured carefully to avoid disrupting fragile or business-critical systems."
  },
  {
    "id": 12,
    "title": "Patch and Configuration Management",
    "description": "Security patches and configuration changes reduce known weaknesses, but they need controlled planning and verification. IBCS can support patch prioritization, maintenance windows, test procedures, rollback planning, and records of deferred updates. Baseline configuration guidance can help reduce unnecessary services, insecure defaults, and inconsistent settings across systems. Exceptions should have a documented reason, an owner, and a review date. The right approach balances urgency with availability requirements, while recognizing that delaying critical fixes can leave known exposure unresolved."
  },
  {
    "id": 13,
    "title": "Penetration Testing Coordination",
    "description": "Penetration testing evaluates whether defined weaknesses can be exploited within an explicitly authorized scope. IBCS can help plan assessments, confirm rules of engagement, coordinate testing windows, and organize remediation tracking. Scope should specify permitted targets, prohibited actions, test accounts, data-handling rules, and emergency contacts. Testing results describe what was observed under particular conditions and do not prove that every vulnerability has been found. Retesting can help confirm selected fixes, but it should not be represented as a permanent security guarantee."
  },
  {
    "id": 14,
    "title": "Web Application Security Assessment",
    "description": "Web application assessments examine common risks in authentication, session handling, access control, input processing, business logic, configuration, and dependency use. IBCS can review applications and test agreed workflows using authorized methods. Findings should distinguish demonstrated weaknesses from potential concerns and provide practical remediation guidance. The assessment should account for roles and sensitive actions rather than testing only public pages. Testing must avoid unauthorized data access and disruptive actions, and production assessments require careful safeguards and approval."
  },
  {
    "id": 15,
    "title": "API Security Review",
    "description": "IBCS can review API-related risks as part of a broader cybersecurity assessment, focusing on whether exposed services create material risk to the organisation. The review may consider authentication and authorisation controls, data exposure, rate limiting, logging, configuration, and externally reachable endpoints. Findings should be prioritised by impact and evidence, with practical remediation options and clear limitations. API-specific implementation changes may be delivered separately under an API development engagement, depending on the agreed scope."
  },
  {
    "id": 16,
    "title": "Network Security Assessment",
    "description": "Network security assessment reviews segmentation, exposed services, administrative pathways, remote access, and relevant device configurations. IBCS can assess approved network diagrams and configuration evidence, and may coordinate authorized discovery or testing where permitted. The goal is to identify unnecessary exposure and weaknesses in how systems communicate, not to disrupt normal operations. Recommendations can include reducing open services, tightening access rules, improving separation, and documenting network ownership. Testing plans should account for fragile devices and critical services."
  },
  {
    "id": 17,
    "title": "Endpoint and Device Security",
    "description": "Endpoints such as laptops, desktops, mobile devices, and servers are common points where credentials or business data may be exposed. IBCS can review endpoint protection coverage, disk encryption, local administrator rights, update practices, device compliance, and control of removable media where relevant. Policies should reflect whether devices are organization-managed, personally owned, or used remotely. Security controls need to balance protection with practical work requirements. Findings should identify coverage gaps and specify which team owns remediation and ongoing verification."
  },

  // --- Group 4: Human Awareness, Monitoring & SIEM (18 - 22) ---
  {
    "id": 18,
    "title": "Email Security and Phishing Risk",
    "description": "Email remains a common channel for impersonation, malicious attachments, fraudulent links, and business email compromise. IBCS can review email authentication records, filtering practices, reporting workflows, account protections, and user awareness measures. Technical controls may include correctly configured SPF, DKIM, and DMARC, alongside appropriate attachment and link handling. No filter blocks every harmful message, so staff should have a simple way to report suspicious content. Simulated awareness exercises, if used, should be authorized, respectful, and focused on learning."
  },
  {
    "id": 19,
    "title": "Security Awareness and Staff Training",
    "description": "Security awareness works best when it connects safe behavior to the tasks employees perform every day. IBCS can help prepare role-relevant training on password safety, multi-factor authentication, phishing, data handling, device security, remote work, and incident reporting. Training should use clear examples and provide a straightforward route for asking questions or reporting mistakes. Attendance alone does not demonstrate behavior change, so organizations may review feedback and recurring incident patterns. Content should be refreshed as risks and internal processes evolve."
  },
  {
    "id": 20,
    "title": "Security Monitoring and Alert Triage",
    "description": "Monitoring helps an organization identify activity that may require investigation, but alerts need context and a defined response process. IBCS can help review logging coverage, alert severity, escalation rules, and triage procedures for systems within scope. Analysts should distinguish routine events from suspicious patterns and record the reasoning behind important decisions. Monitoring effectiveness depends on log quality, time synchronization, detection logic, and available staff. Alert volumes and response commitments should be matched to actual operational capacity."
  },
  {
    "id": 21,
    "title": "Security Information and Event Management",
    "description": "Security information and event management platforms can aggregate logs and correlate activity across supported systems. IBCS can assist with use-case planning, log-source selection, parsing, alert tuning, and dashboard requirements according to the environment. Collecting every available event is not always practical; sources should be selected according to risk, investigative value, and storage limits. Access to security logs must itself be protected. A SIEM is useful only when alerts are maintained, investigated, and connected to an agreed incident workflow."
  },
  {
    "id": 22,
    "title": "Threat Intelligence Integration",
    "description": "Threat intelligence can help security teams understand indicators, adversary behavior, and emerging risks relevant to their environment. IBCS can assess how approved intelligence sources may inform monitoring, prioritization, and incident investigation. Indicators should be evaluated for freshness, context, confidence, and relevance before being treated as evidence of compromise. Intelligence feeds can contain false positives or outdated data, so automated blocking requires appropriate safeguards. The value comes from connecting information to decisions rather than collecting feeds without a defined use."
  },

  // --- Group 5: Incident Readiness, Triage & Forensics (23 - 26) ---
  {
    "id": 23,
    "title": "Cybersecurity Incident Readiness Planning",
    "description": "IBCS can help organisations prepare for security incidents by defining detection and escalation criteria, decision authority, internal communications, containment priorities, and coordination among IT, security, management, and relevant external parties. Readiness activities may include scenario workshops, contact lists, tabletop exercises, and review of response playbooks. The aim is to improve preparedness before an event occurs; active forensic investigation, evidence acquisition, and incident-specific response work require a separately agreed scope."
  },
  {
    "id": 24,
    "title": "Incident Triage and Containment Support",
    "description": "During a suspected incident, early decisions should be evidence-informed and coordinated to reduce harm while preserving important information. IBCS can support triage by helping organize available alerts, affected assets, timelines, and initial containment options within the agreed engagement. Actions such as isolating a device or disabling an account can affect business operations and require appropriate authorization. The response team should record key decisions and preserve relevant evidence. Actual response capability and availability depend on the contracted scope and operating arrangements."
  },
  {
    "id": 25,
    "title": "Digital Forensics Readiness",
    "description": "Forensic readiness prepares an organization to preserve useful digital evidence if an incident or dispute occurs. IBCS can help identify relevant log sources, evidence owners, retention needs, time synchronization requirements, and procedures for handling devices or records. Collection methods should maintain integrity and document who handled the evidence and when. Legal admissibility depends on jurisdiction, process, and case circumstances, so specialist legal advice may be necessary. Readiness planning should be proportionate to the organization’s risks and investigative needs."
  },
  {
    "id": 26,
    "title": "Log Management and Retention",
    "description": "Logs support troubleshooting, security monitoring, investigations, and accountability, but they need a deliberate collection and retention strategy. IBCS can help define important log sources, access permissions, time standards, storage controls, and retention periods based on operational and regulatory needs. Logs may contain sensitive data, so access should be limited and handling rules documented. Retention should balance investigative value, storage cost, privacy, and legal obligations. Organizations should test whether required logs can actually be retrieved when needed."
  },

  // --- Group 6: Cloud, Containers & Workload Security (27 - 29) ---
  {
    "id": 27,
    "title": "Cloud Security Posture Review",
    "description": "Cloud security depends on identity settings, network exposure, storage permissions, workload configuration, monitoring, and the division of responsibilities with the provider. IBCS can review approved cloud environments against agreed controls and identify misconfigurations or gaps in governance. Recommendations may cover least-privilege roles, protected storage, logging, encryption settings, and separation of environments. Cloud services change frequently, so reviews should be repeated after significant changes. The review scope should clearly state which accounts, regions, and services are included."
  },
  {
    "id": 28,
    "title": "Cloud Identity and Storage Controls",
    "description": "Cloud identities and storage permissions can expose sensitive information when roles or sharing settings are broader than intended. IBCS can assess administrative roles, service identities, public access settings, key management practices, and access review procedures in authorized environments. Permissions should be assigned to named roles or workloads where practical, with unused access removed through a controlled process. Storage protection also requires attention to backup, lifecycle, and logging settings. Findings should explain the potential impact and provide clear, prioritized remediation steps."
  },
  {
    "id": 29,
    "title": "Container and Workload Security",
    "description": "Containerized applications introduce considerations involving image provenance, dependency contents, runtime permissions, secrets, and isolation between workloads. IBCS can review build and deployment practices, image scanning, privilege settings, and update procedures within the agreed environment. Images should come from trusted sources and be rebuilt when important components require updates. Container controls do not replace host, network, or identity security. Recommendations should account for the organization’s orchestration platform and the operational impact of changing workload configurations."
  },

  // --- Group 7: DevSecOps, Code Quality & Supply Chain (30 - 32) ---
  {
    "id": 30,
    "title": "Secure Software Development Lifecycle",
    "description": "A secure software development lifecycle integrates security activities into requirements, design, coding, review, testing, release, and maintenance. IBCS can help define practical checkpoints such as threat modeling, dependency review, secure coding guidance, and remediation ownership. The process should fit the team’s delivery model rather than create paperwork disconnected from engineering work. Security findings need clear severity rules and deadlines appropriate to risk. A mature lifecycle improves consistency, but its effectiveness depends on adoption, skills, and continuous review."
  },
  {
    "id": 31,
    "title": "Code Review and Static Analysis",
    "description": "Code review and static analysis can identify certain defects before software reaches production. IBCS can help establish review practices for sensitive code paths, authorization checks, input handling, error messages, secrets, and dependency usage. Automated tools should be configured and their findings triaged because they can miss issues or report false positives. Reviewers should understand the application’s context and focus on practical risks. These techniques complement, rather than replace, runtime testing and architecture-level security assessment."
  },
  {
    "id": 32,
    "title": "Software Composition and Dependency Risk",
    "description": "Modern applications often depend on open-source packages and external components that may contain vulnerabilities or licensing conditions. IBCS can support dependency inventories, vulnerability monitoring, update planning, and review of components with limited maintenance. Findings should be prioritized by whether the affected code is used, how it is exposed, and the available mitigations. Automated dependency alerts need human assessment to avoid treating every advisory as equally urgent. Organizations should define responsibility for updates and track exceptions until they are resolved."
  },

  // --- Group 8: Data Protection, Cryptography & Continuity (33 - 37) ---
  {
    "id": 33,
    "title": "Data Classification and Protection",
    "description": "Data classification helps determine which information needs stronger access, handling, retention, and sharing controls. IBCS can help map categories such as public, internal, confidential, and restricted data to practical safeguards agreed by the organization. Controls may include access restrictions, encryption, approved transfer methods, and limits on copying or exporting records. Classification labels should be understandable and consistently applied. The scheme must align with actual business needs and legal obligations, and should not be treated as a substitute for technical enforcement."
  },
  {
    "id": 34,
    "title": "Encryption and Key Management",
    "description": "Encryption can protect data in transit or at rest when implemented with suitable algorithms, configuration, and key controls. IBCS can review where encryption is needed, how keys are stored and rotated, who can access them, and how recovery is handled. Keys should not be embedded in source code or exposed in ordinary logs. Encryption does not protect data from every authorized misuse or compromised endpoint, so access management and monitoring remain important. Design choices should fit the system and its threat model."
  },
  {
    "id": 35,
    "title": "Backup Security and Recovery Testing",
    "description": "Backups are an important recovery control, but they can also become a target if they are broadly accessible or permanently connected to production systems. IBCS can help review backup access, separation, encryption, retention, and restoration procedures. Recovery tests should verify that critical data and services can be restored within agreed objectives. A backup job reporting success does not prove that the recovered system will operate correctly. Recovery responsibilities and priorities should be documented for different classes of business service."
  },
  {
    "id": 36,
    "title": "Business Continuity and Disaster Recovery",
    "description": "Business continuity planning considers how essential operations can continue during a serious technology disruption, while disaster recovery focuses on restoring affected systems and data. IBCS can help document dependencies, recovery priorities, communication responsibilities, and technical restoration steps. Recovery time and data-loss objectives should be approved by business owners based on impact and cost. Plans need exercises and updates after significant changes. No recovery plan can remove all disruption risk, but preparation can reduce confusion and improve coordinated decision-making."
  },
  {
    "id": 37,
    "title": "Third-Party and Supplier Security",
    "description": "External suppliers may process information, host systems, or provide software that becomes part of an organization’s risk environment. IBCS can help structure supplier reviews around data access, security practices, incident notification, subcontractors, service continuity, and exit arrangements. Assessment depth should reflect the supplier’s role and the sensitivity of the information involved. Questionnaires are useful but may need supporting evidence for higher-risk relationships. Contractual commitments and residual risks should be reviewed by the organization’s procurement, security, and legal stakeholders."
  },

  // --- Group 9: Compliance, Auditing & Metrics (38 - 42) ---
  {
    "id": 38,
    "title": "Compliance Readiness and Control Mapping",
    "description": "Compliance readiness involves comparing current practices and available evidence with a defined set of obligations or control requirements. IBCS can help map policies, technical safeguards, owners, and records to the framework selected by the organization. The work should distinguish implemented controls from planned actions and identify evidence gaps clearly. A readiness review does not itself constitute certification or legal assurance. Formal interpretations, audit conclusions, and regulatory decisions remain with the authorized auditors, regulators, and qualified advisers."
  },
  {
    "id": 39,
    "title": "Security Audit Preparation",
    "description": "Preparing for a security audit means organizing evidence, clarifying control ownership, and addressing known gaps before the formal review. IBCS can help establish an evidence register, map requested records to responsible teams, and document remediation status. Evidence should be accurate, current, and traceable to the control it supports. Missing documentation should be reported honestly rather than recreated as if it had existed earlier. The final audit opinion remains the responsibility of the independent auditor or authorized assessment body."
  },
  {
    "id": 40,
    "title": "Security Metrics and Management Reporting",
    "description": "Security reporting should help decision-makers understand exposure, progress, and areas requiring attention without hiding uncertainty behind a single score. IBCS can help define metrics such as remediation age, asset coverage, access review completion, incident response milestones, and control exceptions. Each metric needs a clear definition, source, owner, and reporting interval. Numbers should be interpreted in context and not used to imply that all risk has been removed. Reports should connect technical observations to business impact and next actions."
  },
  {
    "id": 41,
    "title": "Risk Remediation and Exception Tracking",
    "description": "Security findings often require coordination across technical teams, business owners, suppliers, and management. IBCS can help assign remediation actions, owners, target dates, evidence requirements, and verification steps. When a risk cannot be fixed immediately, the organization should record its rationale, compensating controls, approving authority, and review date. Exceptions should not become permanent by default. A tracked remediation process makes unresolved exposure visible and supports prioritization based on risk rather than convenience or the volume of open tickets."
  },
  {
    "id": 42,
    "title": "Security Configuration Baselines",
    "description": "Configuration baselines define approved settings for systems, applications, cloud resources, and network equipment. IBCS can help compare current configurations with agreed standards and identify deviations that create unnecessary risk. Baselines should be practical for the organization’s environment and include a controlled exception process for legitimate operational needs. Changes should be tested before broad application, particularly where availability is critical. Baselines need periodic review as platforms and threats evolve, and they should be supported by ownership and change records."
  },

  // --- Group 10: Connectivity, Zero Trust & Advanced Drills (43 - 50) ---
  {
    "id": 43,
    "title": "Remote Access and Secure Connectivity",
    "description": "Remote access enables staff and approved suppliers to work beyond the organization’s physical network, but it can also expand the attack surface. IBCS can review access methods, identity controls, device posture requirements, network restrictions, and logging. Access should be granted only to the systems needed for a defined role, and inactive accounts should be removed promptly. Secure connectivity also requires monitoring and clear support procedures. The chosen approach should match user workflows and the sensitivity of the resources being accessed."
  },
  {
    "id": 44,
    "title": "Zero Trust Principles and Segmentation",
    "description": "Zero trust is an approach that avoids granting broad trust solely because a user or device is inside a network boundary. IBCS can help assess identity verification, least-privilege access, device context, and segmentation opportunities according to the organization’s maturity. Implementation is usually incremental and should begin with clear use cases and asset visibility. Segmentation rules need testing to prevent unintended service interruption. Zero trust is not a single product or instant configuration; it is a set of practices that must be maintained."
  },
  {
    "id": 45,
    "title": "Security Incident Exercises and Tabletop Drills",
    "description": "Tabletop exercises let teams rehearse decisions during a simulated security incident without conducting live disruptive activity. IBCS can facilitate scenarios involving account compromise, data exposure, ransomware, supplier outages, or other relevant events. Participants review roles, escalation, communications, evidence preservation, and recovery decisions. Findings should be captured as improvement actions with owners and due dates. Exercises test coordination and assumptions, not the technical effectiveness of every control, and scenarios should be adapted to the organization’s actual operating model."
  },
  {
    "id": 46,
    "title": "Ransomware Preparedness",
    "description": "Ransomware preparedness combines prevention, detection, containment, recovery, and communication planning. IBCS can review privileged access, patching, endpoint controls, backup separation, restore testing, and incident escalation arrangements within scope. The organization should know which systems are most critical and how to recover them in a safe order. Decisions about isolation, legal notification, and external communication require defined authority. No individual safeguard guarantees protection from ransomware, so layered controls and rehearsed recovery procedures are important."
  },
  {
    "id": 47,
    "title": "Fraud, Impersonation, and Social Engineering Controls",
    "description": "Social engineering attempts to persuade people to disclose information, approve transactions, or bypass normal controls. IBCS can help review verification steps for payment changes, account recovery, executive requests, and sensitive information disclosure. Procedures should use independent confirmation channels for high-impact requests rather than relying only on the message that initiated them. Staff need a simple escalation route when a request feels unusual. Technical email controls help, but business process safeguards are also necessary to reduce impersonation risk."
  },
  {
    "id": 48,
    "title": "Security for Remote and Hybrid Work",
    "description": "Remote and hybrid work can involve home networks, personal spaces, mobile devices, and collaboration platforms outside traditional office boundaries. IBCS can help define expectations for device management, secure access, screen privacy, software updates, data sharing, and incident reporting. Controls should distinguish managed devices from personally owned equipment and reflect the sensitivity of the work. Practical guidance is more effective when staff can follow it consistently. Policies should be reviewed as work patterns, tools, and legal requirements change."
  },
  {
    "id": 49,
    "title": "Security Program Roadmap",
    "description": "A security roadmap organizes improvements into achievable stages based on risk, available resources, dependencies, and business priorities. IBCS can help group recommendations into immediate actions, near-term projects, and longer-term capability development. Each initiative should have an accountable owner, intended outcome, estimated effort, and a way to verify completion. The roadmap should acknowledge accepted risks and external dependencies instead of assuming every issue can be resolved at once. Periodic review keeps priorities aligned with changes in the organization’s environment."
  },
  {
    "id": 50,
    "title": "Continuous Security Improvement",
    "description": "Cybersecurity is an ongoing operating discipline because technology, business processes, and threat conditions continue to change. IBCS can support periodic reviews of incidents, assessment findings, control performance, staff feedback, and emerging requirements to identify practical improvements. Lessons should be translated into changes to systems, procedures, or training with clear ownership. Repeated reviews help determine whether remediation has worked and whether new gaps have appeared. Improvement should be evidence-led and proportionate, not driven solely by fear or product purchases."
  }
];

/**
 * ----------------------------------------------------------------------------
 * 2. SECTION ICONS MAPPING (1 to 50)
 * ----------------------------------------------------------------------------
 * Maps each service ID to a context-specific Lucide React icon representing its
 * domain (e.g. Shield for overview, Bug for vulnerability, Lock for encryption).
 */
export const SECTION_ICONS = {
  1: ShieldCheck,       // 1. Overview
  2: FileText,          // 2. Requirements & Scope
  3: AlertTriangle,     // 3. Cyber Risk Assessment
  4: Boxes,             // 4. Asset Inventory
  5: Radar,             // 5. Threat Modeling
  6: Network,           // 6. Security Architecture
  7: BookOpen,          // 7. Security Policies
  8: UserCheck,         // 8. Identity & Access
  9: Fingerprint,       // 9. Multi-Factor Authentication
  10: KeyRound,         // 10. Privileged Access
  11: Bug,              // 11. Vulnerability Management
  12: Wrench,           // 12. Patch & Configuration
  13: Target,           // 13. Penetration Testing
  14: Globe,            // 14. Web App Security
  15: Webhook,          // 15. API Security
  16: Wifi,             // 16. Network Security
  17: Laptop,           // 17. Endpoint & Device
  18: MailCheck,        // 18. Email Security & Phishing
  19: GraduationCap,    // 19. Security Awareness & Training
  20: BellRing,         // 20. Security Monitoring & Triage
  21: BarChart3,        // 21. SIEM
  22: Eye,              // 22. Threat Intelligence
  23: Siren,            // 23. Incident Readiness
  24: ShieldBan,        // 24. Containment Support
  25: SearchCode,       // 25. Digital Forensics
  26: Archive,          // 26. Log Management
  27: Cloud,            // 27. Cloud Posture
  28: Database,         // 28. Cloud Identity & Storage
  29: Box,              // 29. Containers & Workloads
  30: GitBranch,        // 30. Secure SDLC
  31: FileCode,         // 31. Code Review & SAST
  32: PackageSearch,    // 32. Software Composition / SCA
  33: FolderLock,       // 33. Data Classification
  34: Lock,             // 34. Encryption & Keys
  35: DatabaseBackup,   // 35. Backup Security
  36: HeartPulse,       // 36. Business Continuity
  37: Handshake,        // 37. Third-Party & Supplier
  38: Award,            // 38. Compliance Readiness
  39: ClipboardCheck,   // 39. Security Audit Prep
  40: TrendingUp,       // 40. Metrics & Reporting
  41: ListTodo,         // 41. Risk Remediation
  42: SlidersHorizontal,// 42. Configuration Baselines
  43: Radio,            // 43. Remote Access
  44: ScanFace,         // 44. Zero Trust
  45: Swords,           // 45. Tabletop Drills
  46: Skull,            // 46. Ransomware Preparedness
  47: VenetianMask,     // 47. Social Engineering
  48: Home,             // 48. Remote & Hybrid Work
  49: Compass,          // 49. Program Roadmap
  50: Sparkles,         // 50. Continuous Improvement
};

/**
 * ----------------------------------------------------------------------------
 * 3. HELPER UTILITIES
 * ----------------------------------------------------------------------------
 */

/**
 * Returns the Lucide Icon component for a given service ID.
 * Defaults to ShieldCheck if ID is not recognized.
 *
 * @param {number} id - Section ID (1-50)
 * @returns {React.ComponentType} Lucide Icon component
 */
export function getSectionIcon(id) {
  return SECTION_ICONS[id] || ShieldCheck;
}

/**
 * Reusable Icon rendering component with configurable size, stroke, and className.
 *
 * @param {Object} props
 * @param {number} props.id - Section ID (1-50)
 * @param {number} [props.size=20] - Icon width/height in px
 * @param {number} [props.strokeWidth=2.2] - SVG stroke thickness
 * @param {string} [props.className=''] - Additional CSS class names
 */
export function SectionIcon({ id, size = 20, strokeWidth = 2.2, className = '' }) {
  const Icon = SECTION_ICONS[id] || ShieldCheck;
  return React.createElement(Icon, { size, strokeWidth, className });
}
