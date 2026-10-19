// ============================================================================
// IBCS IT SERVICES - CARD 18: DIGITAL FORENSICS & INCIDENT RESPONSE SERVICES
// Complete Data Configuration parsed from IBCS_IT_Services_Card_18_Digital_Forensics_Incident_Response_Services.docx
// ============================================================================

export const headerInfo = {
  category: "IBCS IT SERVICES",
  cardTitle: "CARD 18 — DIGITAL FORENSICS & INCIDENT RESPONSE SERVICES",
  badge: "EVIDENCE • ANALYSIS • RESPONSE",
  title: "Digital Forensics & Incident Response",
  subtitle: "Service Scope and Capability Overview",
  headlineLine1: "Digital Forensics &",
  headlineLine2: "Incident Response",
  headlineSub: "",
  description: "IBCS Digital Forensics & Incident Response focuses on technology capabilities that support digital evidence handling, incident analysis, forensic investigation workflows, and response coordination. Depending on the defined scope, solutions may assist authorised teams with structured evidence management, incident documentation, and technical investigation processes.",
  descriptionLines: [
    "IBCS Digital Forensics & Incident Response focuses on",
    "technology capabilities that support digital evidence handling,",
    "incident analysis, forensic investigation workflows, and response",
    "coordination. Depending on the defined scope, solutions may",
    "assist authorised teams with structured evidence management,",
    "incident documentation, and technical investigation processes."
  ]
};

export const pillars = [
  { icon: 'fingerprint', line1: 'Evidence', line2: 'Integrity' },
  { icon: 'lock', line1: 'Secure', line2: 'Chain' },
  { icon: 'shield', line1: 'Forensic', line2: 'Analysis' },
  { icon: 'users', line1: 'Incident', line2: 'Response' }
];

export const services = [
  {
    id: 1,
    title: ['Evidence', 'Preservation'],
    copy: ['Secure digital', 'evidence with hash.'],
    icon: 'document',
    color: '#43bdff',
    x: 330,
    y: 58,
    w: 264,
    cx: 550,
    cy: 110,
    rotation: 2.5,
    side: 'left'
  },
  {
    id: 2,
    title: ['Cloud Forensic', 'Analysis'],
    copy: ['Investigate cloud', 'workloads and logs.'],
    icon: 'cloud',
    color: '#30f5c5',
    x: 215,
    y: 233,
    w: 264,
    cx: 435,
    cy: 285,
    rotation: 1.8,
    side: 'left'
  },
  {
    id: 3,
    title: ['Incident', 'Triage'],
    copy: ['Rapid initial scoping', 'and impact check.'],
    icon: 'identity',
    color: '#e170ff',
    x: 185,
    y: 398,
    w: 264,
    cx: 405,
    cy: 450,
    rotation: 1,
    side: 'left'
  },
  {
    id: 4,
    title: ['Timeline', 'Reconstruction'],
    copy: ['Correlate multi-source', 'attack milestones.'],
    icon: 'chart',
    color: '#ffc658',
    x: 205,
    y: 568,
    w: 264,
    cx: 425,
    cy: 620,
    rotation: 1,
    side: 'left'
  },
  {
    id: 5,
    title: ['Chain of', 'Custody'],
    copy: ['Document custody', 'and audit tracking.'],
    icon: 'gear',
    color: '#47acff',
    x: 250,
    y: 733,
    w: 264,
    cx: 470,
    cy: 785,
    rotation: 1.8,
    side: 'left'
  },
  {
    id: 6,
    title: ['Volatile Memory', 'Capture'],
    copy: ['Preserve RAM state', 'and live connections.'],
    icon: 'lock',
    color: '#ff689f',
    x: 948,
    y: 58,
    w: 264,
    cx: 992,
    cy: 110,
    rotation: -2.5,
    side: 'right'
  },
  {
    id: 7,
    title: ['Malware & Artifact', 'Analysis'],
    copy: ['Identify persistence', 'and command links.'],
    icon: 'users',
    color: '#ffc04c',
    x: 1063,
    y: 233,
    w: 264,
    cx: 1107,
    cy: 285,
    rotation: -1.8,
    side: 'right'
  },
  {
    id: 8,
    title: ['Network Traffic', 'Inspection'],
    copy: ['Analyse packet flows', 'and proxy records.'],
    icon: 'database',
    color: '#d96bff',
    x: 1093,
    y: 398,
    w: 264,
    cx: 1137,
    cy: 450,
    rotation: -1,
    side: 'right'
  },
  {
    id: 9,
    title: ['Root-Cause', 'Investigation'],
    copy: ['Trace intrusion vectors', 'and lateral moves.'],
    icon: 'search',
    color: '#40f9cb',
    x: 1073,
    y: 568,
    w: 264,
    cx: 1117,
    cy: 620,
    rotation: -1,
    side: 'right'
  },
  {
    id: 10,
    title: ['Containment &', 'Remediation'],
    copy: ['Isolate threats and', 'validate clean recovery.'],
    icon: 'tools',
    color: '#49bbff',
    x: 1028,
    y: 733,
    w: 264,
    cx: 1072,
    cy: 785,
    rotation: -1.8,
    side: 'right'
  }
];

/**
 * All 57 Service Capabilities extracted verbatim from the Word document:
 * IBCS_IT_Services_Card_18_Digital_Forensics_Incident_Response_Services.docx
 */
export const capabilities = [
  {
    "id": 1,
    "number": "01",
    "title": "Digital Forensics Service Scope",
    "description": "IBCS can support authorised digital forensic activities involving computers, mobile devices, servers, cloud services, and other digital systems, subject to the agreed scope and applicable authority. Work may focus on preserving relevant information, documenting technical observations, and supporting incident investigations. The engagement should identify the systems, objectives, permissions, evidence boundaries, and reporting expectations before collection or analysis begins."
  },
  {
    "id": 2,
    "number": "02",
    "title": "Forensic Response Coordination and Evidence Preservation",
    "description": "During a suspected cyber incident, IBCS can support the coordination of forensic response activities within an authorised scope. Priorities may include preserving relevant logs and devices, documenting actions and timestamps, identifying potential evidence sources, maintaining chain-of-custody records, and coordinating with incident leads and legal or compliance stakeholders. Evidence collection should use appropriate procedures and avoid unnecessary changes to original data. This section focuses on investigation readiness and evidence integrity, rather than organisation-wide incident policy design."
  },
  {
    "id": 3,
    "number": "03",
    "title": "Incident Triage and Initial Assessment",
    "description": "IBCS can support initial triage to understand the reported event, affected assets, observable symptoms, likely scope, and immediate business impact. The process may review alerts, relevant logs, recent changes, and information supplied by authorised stakeholders. Early conclusions should be labelled as preliminary until corroborated. Triage helps determine whether specialist investigation, containment, recovery, or additional escalation is appropriate."
  },
  {
    "id": 4,
    "number": "04",
    "title": "Authority, Consent, and Rules of Engagement",
    "description": "IBCS can help document the authority and permissions required before examining devices, accounts, networks, or hosted environments. Rules of engagement should identify approved targets, actions, time windows, exclusions, contacts, and stop conditions. Access to third-party or personal systems requires appropriate authorisation. Work should not extend beyond the approved scope, and legal questions about authority should be referred to qualified counsel or the responsible organisation."
  },
  {
    "id": 5,
    "number": "05",
    "title": "Evidence Identification and Scoping",
    "description": "IBCS can help identify potential evidence sources based on the incident questions and the systems involved. Sources may include endpoint logs, server records, email metadata, authentication events, cloud audit trails, mobile device artefacts, and relevant network telemetry. The evidence plan should prioritise sources likely to answer defined questions while accounting for volatility and retention limits. Not every source will be available or relevant to every investigation."
  },
  {
    "id": 6,
    "number": "06",
    "title": "Evidence Preservation",
    "description": "IBCS can support preservation of relevant digital information using procedures appropriate to the source and investigation. Preservation may involve restricting routine changes, capturing volatile information when justified, retaining original exports, and recording the actions performed. Steps should minimise unnecessary alteration and be approved by the responsible owner. The chosen method depends on the device, operating state, encryption, available tools, and urgency of the incident."
  },
  {
    "id": 7,
    "number": "07",
    "title": "Chain of Custody Documentation",
    "description": "IBCS can help maintain chain-of-custody records for evidence handled during an authorised engagement. Records may document the item or dataset, source, collector, date and time, transfer history, storage location, and access events. Procedures should match the organisation’s evidentiary requirements. Complete documentation improves traceability but does not by itself establish authenticity, admissibility, or the legal sufficiency of evidence."
  },
  {
    "id": 8,
    "number": "08",
    "title": "Forensic Acquisition Planning",
    "description": "IBCS can support planning for forensic acquisition of storage media, device data, logs, or other relevant sources. The plan should identify the collection method, required permissions, expected impact, storage capacity, encryption considerations, and validation steps. Acquisition methods must be appropriate to the source and objective. Where full imaging is unsuitable or unavailable, the limitation and alternative collection method should be documented clearly."
  },
  {
    "id": 9,
    "number": "09",
    "title": "Forensic Image Integrity Verification",
    "description": "IBCS can help verify acquired forensic images or exported evidence using appropriate integrity checks, such as cryptographic hashes where supported. Records should state the tool or method, relevant algorithm, timing, and comparison result. Hash agreement supports verification that the compared data has not changed, but it does not prove that the source was complete or that the original data was accurate. Conclusions should remain precise."
  },
  {
    "id": 10,
    "number": "10",
    "title": "Volatile Data Collection Considerations",
    "description": "IBCS can support assessment of whether volatile information, such as running processes, active connections, or memory contents, should be collected before it disappears. Such collection can alter system state and may carry operational or privacy implications. Decisions should consider incident urgency, authorisation, system stability, and the investigative question. The method, timing, and unavoidable changes should be documented as part of the evidence record."
  },
  {
    "id": 11,
    "number": "11",
    "title": "Endpoint Forensic Analysis",
    "description": "IBCS can help analyse authorised endpoint artefacts such as event logs, application traces, file metadata, persistence indicators, and execution records. The analysis should use a documented method and distinguish direct observations from interpretation. Findings may help reconstruct a sequence of events or identify areas requiring further review. Endpoint artefacts can be incomplete, overwritten, or affected by normal system activity, so corroboration is important."
  },
  {
    "id": 12,
    "number": "12",
    "title": "Windows System Artefact Review",
    "description": "IBCS can support review of relevant Windows artefacts, including event logs, registry information, scheduled tasks, service records, and other system traces available within the approved scope. Analysis should account for operating-system version and collection limitations. Artefacts should be interpreted in context rather than treated as conclusive in isolation. Findings should identify the source and explain how it relates to the incident question."
  },
  {
    "id": 13,
    "number": "13",
    "title": "Linux and Unix System Artefact Review",
    "description": "IBCS can help review relevant Linux or Unix records, such as authentication logs, service configuration, shell histories where available, scheduled jobs, and system event information. Collection should respect access controls and preserve context such as timestamps and system configuration. Logs may be rotated, altered, or incomplete. Conclusions should note gaps and distinguish evidence of an action from assumptions about who performed it."
  },
  {
    "id": 14,
    "number": "14",
    "title": "macOS Forensic Review",
    "description": "IBCS can support authorised review of macOS artefacts, system logs, application records, file metadata, and device security information where available. The analysis should account for operating-system protections, encryption, privacy settings, and the method used to collect information. Some artefacts may be inaccessible or change with normal device use. Reporting should identify the evidence examined and the limitations affecting interpretation."
  },
  {
    "id": 15,
    "number": "15",
    "title": "Mobile Device Forensics",
    "description": "IBCS can help assess relevant data from mobile devices when appropriate consent or authority and a suitable acquisition method are available. Potential sources may include device logs, application data, system records, and backup contents permitted by the scope. Access depends on device model, operating-system version, lock state, encryption, and available tooling. The engagement should explain collection limits and avoid promising recovery of data that may not be accessible."
  },
  {
    "id": 16,
    "number": "16",
    "title": "Mobile Application Artefact Analysis",
    "description": "IBCS can support examination of application-related artefacts on authorised mobile devices or backups, where technically available. Analysis may consider application databases, local files, cache records, timestamps, and configuration information. Results must be interpreted with awareness that application versions and operating-system behaviour affect what is stored. The scope should avoid collecting unrelated personal content and should document any limits caused by encryption or application protections."
  },
  {
    "id": 17,
    "number": "17",
    "title": "Email Incident Investigation",
    "description": "IBCS can help investigate email-related incidents using authorised message metadata, mail-system logs, security alerts, and relevant message content where permitted. Questions may include suspicious delivery, account misuse, unusual forwarding, or possible phishing. Findings should distinguish sender display information from verified technical indicators. Email evidence may be incomplete or altered by forwarding and gateway processing, so conclusions should rely on multiple corroborating sources where possible."
  },
  {
    "id": 18,
    "number": "18",
    "title": "Phishing and Malicious Message Analysis",
    "description": "IBCS can support analysis of suspected phishing messages by reviewing headers, URLs, attachments, sender authentication indicators, and related security telemetry. Any risky attachment or link should be handled in a controlled analysis environment. Results may identify suspicious patterns and recommended defensive actions. Technical indicators are not always conclusive on their own, and users should not be asked to open suspicious content as part of routine evidence gathering."
  },
  {
    "id": 19,
    "number": "19",
    "title": "Cloud Audit Log Investigation",
    "description": "IBCS can help review cloud audit logs and identity records for authorised investigations involving unusual access, configuration changes, resource creation, or data movement. Scope should specify accounts, subscriptions, projects, regions, and relevant time windows. Log availability depends on service configuration and retention. Findings should account for clock differences, shared automation identities, and provider limitations before attributing an action to a particular user."
  },
  {
    "id": 20,
    "number": "20",
    "title": "Identity and Account Compromise Investigation",
    "description": "IBCS can support investigation of suspected account compromise by reviewing authentication events, session activity, token issuance, MFA changes, password resets, and permission changes where available. Analysis should consider legitimate travel, automation, shared devices, and identity-provider behaviour. Any containment action should be coordinated with authorised owners. Findings should distinguish confirmed account events from the still-unproven identity or intent of the person behind them."
  },
  {
    "id": 21,
    "number": "21",
    "title": "Network Log and Traffic Analysis",
    "description": "IBCS can help analyse authorised network records such as firewall events, DNS logs, proxy records, flow data, and packet captures where available. The analysis may look for unusual connections, repeated failures, suspicious destinations, or timing relationships between systems. Visibility depends on network design, encryption, and retention. Reports should explain what the data can and cannot show and avoid inferring content that was not captured."
  },
  {
    "id": 22,
    "number": "22",
    "title": "Malware Triage and Behavioural Assessment",
    "description": "IBCS can support controlled triage of suspected malicious files or behaviours using approved tools and isolated environments. Work may examine file metadata, signatures, static indicators, execution behaviour, and observed network activity. The analysis should avoid running unknown files on production systems. Results should describe observed behaviour and confidence, because obfuscation, environment checks, and limited samples can prevent a definitive conclusion."
  },
  {
    "id": 23,
    "number": "23",
    "title": "Ransomware Incident Support",
    "description": "IBCS can help assess ransomware-related indicators, affected assets, service impact, available backups, and containment priorities within an authorised response. Actions should be coordinated with the incident commander and relevant security, infrastructure, legal, and business owners. Evidence should be preserved where feasible without delaying necessary containment. Recovery decisions should account for verified backup condition and dependencies; successful restoration cannot be assumed from backup status alone."
  },
  {
    "id": 24,
    "number": "24",
    "title": "Business Email Compromise Investigation",
    "description": "IBCS can support investigation of suspected business email compromise by reviewing account activity, message rules, forwarding settings, authentication events, and relevant payment or approval communications where authorised. The work may help establish a timeline and identify control gaps. Financial or legal decisions should be handled by the designated business and professional advisers. Reports should avoid declaring fraud or attributing intent unless evidence and appropriate authority support that conclusion."
  },
  {
    "id": 25,
    "number": "25",
    "title": "Insider-Risk Investigation Support",
    "description": "IBCS can help examine authorised technical records relevant to a suspected insider-related event, such as access logs, file activity, administrative changes, and data-transfer indicators. The scope should be approved and privacy-aware, with access restricted to those who need the information. Technical anomalies do not alone establish motive or misconduct. Findings should separate recorded activity from conclusions that require HR, legal, or other investigative processes."
  },
  {
    "id": 26,
    "number": "26",
    "title": "Data Exfiltration Assessment",
    "description": "IBCS can support investigation of suspected unauthorised data movement by reviewing available egress logs, cloud audit records, file access events, endpoint telemetry, and transfer records. The analysis should identify the data sources, period, and limitations examined. Encrypted traffic or missing logs may prevent confirmation of content or destination. Reports should state whether evidence shows access, transfer activity, or only indicators consistent with possible exfiltration."
  },
  {
    "id": 27,
    "number": "27",
    "title": "Timeline Reconstruction",
    "description": "IBCS can help build an incident timeline by correlating timestamps from logs, devices, cloud platforms, identity systems, and reported events. Time zones, clock drift, event ingestion delays, and timestamp semantics should be considered. Each entry should reference its evidence source and confidence. A timeline is an analytical reconstruction, so uncertain sequences and missing periods should be clearly marked rather than filled with assumptions."
  },
  {
    "id": 28,
    "number": "28",
    "title": "Root-Cause and Contributing-Factor Analysis",
    "description": "IBCS can support analysis of the technical and procedural factors that enabled or prolonged an incident. The work may examine initial access, privilege changes, persistence, detection gaps, exposed services, configuration weaknesses, and response delays where evidence is available. Root-cause statements should be supported by reproducible observations or corroborating records. If the cause remains uncertain, the report should say so and identify what additional evidence could help."
  },
  {
    "id": 29,
    "number": "29",
    "title": "Incident Containment Planning",
    "description": "IBCS can help plan proportionate containment measures such as isolating affected endpoints, disabling compromised credentials, restricting access, blocking known malicious indicators, or suspending a vulnerable integration. Actions should be selected by authorised incident leaders with awareness of business impact and evidence preservation. Containment can interrupt legitimate services, so dependencies and rollback conditions should be considered. Recommendations should reflect the specific incident rather than use a fixed response for every case."
  },
  {
    "id": 30,
    "number": "30",
    "title": "Threat Indicator Identification",
    "description": "IBCS can support identification and documentation of indicators observed during an investigation, such as suspicious domains, file hashes, IP addresses, process names, or account events. Each indicator should include context, source, time range, and confidence where known. Indicators may be shared only through approved channels and with suitable handling labels. A match can support triage but should not automatically be treated as proof of malicious activity in every environment."
  },
  {
    "id": 31,
    "number": "31",
    "title": "Threat Hunting Support",
    "description": "IBCS can help define focused threat-hunting questions based on an incident hypothesis, known indicators, and available telemetry. Hunting may search for related authentication events, unusual process activity, persistence, or suspicious network patterns within an authorised environment. Queries and scope should be recorded so results can be repeated. Absence of a match does not prove that a threat is absent, especially where visibility or retention is limited."
  },
  {
    "id": 32,
    "number": "32",
    "title": "Detection Rule Review",
    "description": "IBCS can support review of security detection logic, alert thresholds, data sources, and escalation criteria in light of investigation findings. Work may identify missing telemetry, noisy rules, or opportunities to detect related behaviours. Changes should be tested against known benign and suspicious examples where feasible. Detection tuning should preserve visibility for meaningful events and should not be represented as complete coverage of all possible attacker techniques."
  },
  {
    "id": 33,
    "number": "33",
    "title": "Security Alert Validation",
    "description": "IBCS can help validate security alerts by comparing the alert context with endpoint, identity, network, cloud, and application records available to the response team. The aim is to determine whether the event is likely benign, suspicious, or requires further investigation. Labels should reflect confidence and supporting evidence. Alert closure should include a rationale and any residual uncertainty rather than relying only on the alert product’s severity score."
  },
  {
    "id": 34,
    "number": "34",
    "title": "Incident Eradication Planning",
    "description": "IBCS can support planning for removal of identified malicious artefacts, compromised access paths, persistence mechanisms, and unsafe configurations after sufficient investigation and approval. Eradication should address the known cause and consider related systems that may also be affected. Changes need validation and a recovery plan. The absence of a known indicator after cleanup does not guarantee that every related threat has been removed."
  },
  {
    "id": 35,
    "number": "35",
    "title": "Recovery Validation and Monitoring",
    "description": "IBCS can help define checks for restoring affected systems and verifying expected functionality after containment or remediation. Validation may cover service health, access permissions, security controls, data integrity, and monitoring. Recovery should be coordinated with system owners and business stakeholders. Enhanced monitoring may be appropriate for a defined period, but its coverage and duration should be documented and matched to available telemetry."
  },
  {
    "id": 36,
    "number": "36",
    "title": "Incident Communication Support",
    "description": "IBCS can help prepare technical status updates for authorised stakeholders during an incident. Updates should describe verified impact, actions completed, open questions, current risks, and required decisions without exposing unnecessary sensitive details. Communications should identify the source and time of the update. Public, customer, legal, or regulatory notifications should be approved by the designated communications and legal owners rather than issued solely on technical advice."
  },
  {
    "id": 37,
    "number": "37",
    "title": "Evidence Preservation During Response",
    "description": "IBCS can support coordination between incident containment and evidence preservation so that important records are retained where practical. Response plans should identify when logs, memory, disk images, cloud exports, or message records may be lost through routine operations. Urgent safety or business-continuity actions may take precedence, and that trade-off should be documented. Evidence preservation should never exceed the authority and scope of the engagement."
  },
  {
    "id": 38,
    "number": "38",
    "title": "Forensic Tool Selection and Validation",
    "description": "IBCS can help select appropriate forensic or response tools based on source type, operating environment, investigation question, reproducibility, and evidence-handling needs. Tool versions and relevant settings should be recorded. Where the result is important, a second method or independent check may improve confidence. Tools can have limitations and errors, so conclusions should not rely on a tool’s output without contextual evaluation."
  },
  {
    "id": 39,
    "number": "39",
    "title": "Forensic Analysis Workstation and Storage",
    "description": "IBCS can support planning for controlled forensic workstations and evidence storage with appropriate access restriction, capacity, auditability, and backup arrangements. Storage should match the sensitivity and retention requirements of the case. Evidence copies and working copies should be distinguished where practical. Access, transfer, and disposal procedures should be documented so that investigative materials are not casually mixed with ordinary operational files."
  },
  {
    "id": 40,
    "number": "40",
    "title": "Evidence Encryption and Secure Transfer",
    "description": "IBCS can help protect evidence during storage and transfer using approved encryption and access-control methods. Transfer procedures should identify recipients, authorised channels, integrity checks, and acknowledgement of receipt. Keys and credentials must be managed separately from the protected evidence. Security controls should preserve practical access for authorised investigators while reducing the risk of disclosure, loss, or unauthorised modification."
  },
  {
    "id": 41,
    "number": "41",
    "title": "Forensic Findings and Technical Reporting",
    "description": "IBCS can prepare technical reports describing the scope, methods, evidence sources, observations, timeline, analysis, limitations, and conclusions supported by the available information. Reports should separate facts from interpretation and identify confidence or unresolved questions where useful. Sensitive details should be restricted to authorised readers. The report should not claim legal findings, attribution, or admissibility beyond the evidence and authority of the engagement."
  },
  {
    "id": 42,
    "number": "42",
    "title": "Investigation Status and Evidence Register",
    "description": "IBCS can help maintain an investigation register that tracks evidence items, sources, collection status, analysis tasks, open questions, and relevant decisions. Entries should be factual and traceable to supporting records. Access should be limited according to case sensitivity. A structured register improves coordination across responders and helps ensure that unresolved evidence gaps remain visible through reporting and handover."
  },
  {
    "id": 43,
    "number": "43",
    "title": "Legal and Law-Enforcement Coordination",
    "description": "IBCS can support technical coordination with an organisation’s authorised legal advisers or law-enforcement contacts when requested and permitted. Evidence should be transferred only through approved procedures with clear receipt records and scope. The service does not replace legal counsel or confer investigative powers. Any formal disclosure, preservation request, or chain-of-custody requirement should be confirmed with the responsible authority."
  },
  {
    "id": 44,
    "number": "44",
    "title": "Privacy and Sensitive Data Handling",
    "description": "IBCS can help limit collection and review to information relevant to the authorised investigation, with appropriate controls for personal, confidential, or regulated data. Access, storage, retention, and sharing should follow approved policies and applicable requirements. Reports should avoid including unnecessary raw data. When unrelated sensitive information is encountered, the handling path should be documented and escalated to the appropriate owner."
  },
  {
    "id": 45,
    "number": "45",
    "title": "Cloud Snapshot and Evidence Export Coordination",
    "description": "IBCS can support authorised collection of relevant cloud snapshots, audit exports, resource configuration, and service records where the platform permits. The plan should account for permissions, service-specific retention, regional boundaries, and potential impact on live operations. Export methods and timestamps should be recorded. Cloud provider capabilities vary, and not all underlying infrastructure evidence may be available to the customer or investigator."
  },
  {
    "id": 46,
    "number": "46",
    "title": "Database and Transaction Log Investigation",
    "description": "IBCS can help review database audit records, query logs, transaction metadata, access events, and backup records relevant to a defined incident. The analysis should minimise impact on production systems and avoid unnecessary extraction of sensitive records. Findings should distinguish a database operation from the identity or intent behind it. Missing logging or shared credentials may limit attribution and should be recorded explicitly."
  },
  {
    "id": 47,
    "number": "47",
    "title": "Web Server and Application Incident Analysis",
    "description": "IBCS can support analysis of authorised web and application logs for suspicious requests, authentication failures, unexpected file changes, error patterns, and unusual administrative activity. The work may correlate reverse-proxy, application, identity, and hosting records. Logging configuration and time consistency affect completeness. Findings should describe observed requests or events and avoid asserting successful compromise unless supporting evidence demonstrates that outcome."
  },
  {
    "id": 48,
    "number": "48",
    "title": "Compromised Website Investigation Support",
    "description": "IBCS can help assess a suspected website compromise by reviewing approved web files, deployment records, server logs, administrator activity, and relevant integrity information. Containment and restoration should be coordinated with the site owner and hosting provider. A clean file comparison or successful redeployment does not alone prove that every persistence mechanism has been removed. The investigation should identify remaining unknowns and recommend suitable validation."
  },
  {
    "id": 49,
    "number": "49",
    "title": "Credential Exposure Response",
    "description": "IBCS can support response to suspected credential exposure by helping identify affected identities, systems, logs, and access paths within the approved scope. Remediation may include credential rotation, session revocation, token replacement, and review of privileged activity when authorised. Credentials should not be copied into reports or tickets. Response should consider dependent services and automation so that rotation does not create avoidable outages."
  },
  {
    "id": 50,
    "number": "50",
    "title": "Third-Party Incident Coordination",
    "description": "IBCS can help coordinate technical information sharing with cloud providers, software vendors, managed service providers, or other affected partners during an incident. Requests should specify relevant time windows, identifiers, observed symptoms, and needed evidence. Sharing should follow contractual, privacy, and security requirements. External parties may have different retention and response times, so dependencies and outstanding requests should be tracked transparently."
  },
  {
    "id": 51,
    "number": "51",
    "title": "Incident Tabletop Exercise",
    "description": "IBCS can support tabletop exercises in which stakeholders walk through a simulated incident and discuss decisions, responsibilities, communication, and recovery. Scenarios may be tailored to the organisation’s systems and risk profile. Exercises should have clear objectives and a facilitator, and should record gaps and action owners. A tabletop tests decision processes but does not prove that technical controls or recovery systems will work under live conditions."
  },
  {
    "id": 52,
    "number": "52",
    "title": "Technical Incident Response Playbooks",
    "description": "IBCS can help develop playbooks for defined scenarios such as compromised accounts, suspicious endpoints, malware alerts, data exposure, or service disruption. Each playbook should state triggers, initial checks, decision points, escalation, containment options, evidence considerations, and recovery validation. Procedures should reflect approved authority and actual tooling. Playbooks need periodic review and practical exercises so they remain usable as systems and threats change."
  },
  {
    "id": 53,
    "number": "53",
    "title": "Post-Incident Review and Lessons Learned",
    "description": "IBCS can support a post-incident review that examines timeline, impact, response actions, communication, control gaps, and opportunities for improvement. The review should focus on evidence and process learning rather than unsupported blame. Actions should have owners and verification criteria. Lessons learned should feed into detection, prevention, training, recovery planning, and documentation updates, with progress reviewed after the immediate incident has closed."
  },
  {
    "id": 54,
    "number": "54",
    "title": "Forensic Readiness Assessment",
    "description": "IBCS can help assess whether systems are prepared to preserve and provide useful evidence when an incident occurs. Review areas may include logging coverage, retention, time synchronisation, access controls, evidence storage, escalation procedures, and staff awareness. Recommendations should prioritise evidence sources that matter to the organisation’s risks. Readiness is dependent on ongoing configuration and maintenance, not merely the completion of a one-time assessment."
  },
  {
    "id": 55,
    "number": "55",
    "title": "Investigation Scope and Limitations Statement",
    "description": "IBCS can help document investigation boundaries, unavailable systems, inaccessible encrypted data, retention gaps, sampling constraints, and reliance on information supplied by others. The statement should explain how each limitation affects the conclusions. Missing evidence should not be described as proof that an event did not occur. Clear limitations help decision-makers understand what the investigation established and what remains unresolved."
  },
  {
    "id": 56,
    "number": "56",
    "title": "Case Handover and Knowledge Transfer",
    "description": "IBCS can support handover of the incident timeline, evidence register, technical findings, containment status, open questions, and recommended follow-up actions to authorised owners. Handover should preserve references to source material and maintain access controls. Sessions may explain the methods used and limitations encountered. A structured transfer helps response teams continue remediation and future monitoring without losing important investigative context."
  },
  {
    "id": 57,
    "number": "57",
    "title": "Forensic Retention and Secure Disposal",
    "description": "IBCS can help document retention and disposal requirements for evidence and working copies at the end of an engagement. Decisions should reflect legal holds, organisational policy, contractual terms, and authorised instructions. Disposal methods should be appropriate to the storage medium and sensitivity. Evidence should not be deleted merely because an engagement ends if preservation obligations or unresolved requirements remain."
  }
];

export default {
  headerInfo,
  pillars,
  services,
  capabilities
};
