// ============================================================================
// IBCS IT SERVICES - CARD 19: DATA BACKUP & DISASTER RECOVERY SERVICES
// Complete Data Configuration parsed from IBCS_IT_Services_Card_19_Data_Backup_Disaster_Recovery_Services.docx
// ============================================================================

export const headerInfo = {
  category: "IBCS IT SERVICES",
  cardTitle: "CARD 19 — DATA BACKUP & DISASTER RECOVERY SERVICES",
  title: 'Data Backup & Disaster Recovery',
  subtitle: "Service Scope and Capability Overview",
  description: 'IBCS Data Backup & Disaster Recovery focuses on planning data protection, backup processes, recovery procedures, and continuity measures for digital systems. Our approach considers recovery priorities, data integrity, backup verification, and operational dependencies to help organisations prepare for data loss and service disruptions.'
};

export const cloudContent = [];


export const steps = [
  {
    number: '01',
    name: 'Identify',
    lines: [
      'Identify critical data',
      'and systems.'
    ],
    color: 'blue',
    x: 120,
    y: 695,
    w: 279,
    h: 205,
    cx: 250,
    cy: 734
  },
  {
    number: '02',
    name: 'Backup',
    lines: [
      'Automatic and',
      'scheduled backups.'
    ],
    color: 'cyan',
    x: 447,
    y: 750,
    w: 307,
    h: 188,
    cx: 599,
    cy: 781
  },
  {
    number: '03',
    name: 'Monitor',
    lines: [
      'Continuous monitoring',
      'and health checks.'
    ],
    color: 'purple',
    x: 808,
    y: 754,
    w: 305,
    h: 185,
    cx: 963,
    cy: 781
  },
  {
    number: '04',
    name: 'Recover',
    lines: [
      'Quick restoration',
      'during any disaster.'
    ],
    color: 'orange',
    x: 1161,
    y: 695,
    w: 277,
    h: 208,
    cx: 1308,
    cy: 734
  }
];

export const palettes = {
  blue: ['#c8efff', '#00a9ff', '#0062ec'],
  cyan: ['#aafaff', '#00c8e5', '#008cba'],
  purple: ['#e6cfff', '#9c45ff', '#4c0cce'],
  orange: ['#ffecba', '#ffab13', '#ff6900']
};

/**
 * All 60 Service Capabilities extracted verbatim from the Word document:
 * IBCS_IT_Services_Card_19_Data_Backup_Disaster_Recovery_Services.docx
 */
export const capabilities = [
  {
    "id": 1,
    "number": "01",
    "title": "Backup Strategy and Recovery Objectives",
    "description": "IBCS can help define a backup strategy around business-critical data, application dependencies, recovery priorities, and operational constraints. Planning may establish recovery time objectives, recovery point objectives, retention periods, and responsible owners. Targets should be agreed with business and technical stakeholders and treated as objectives until tested. A practical strategy should address both routine data loss and larger disruptions affecting multiple services."
  },
  {
    "id": 2,
    "number": "02",
    "title": "Backup Scope and Asset Classification",
    "description": "IBCS can support identification of systems and information that require backup, including databases, application files, configuration, virtual machines, cloud workloads, and approved user data. Scope should distinguish essential records from reproducible or temporary data. Asset owners should confirm retention and recovery needs. An explicit inventory reduces the risk that important dependencies are omitted and helps align backup effort with business impact."
  },
  {
    "id": 3,
    "number": "03",
    "title": "Backup Policy and Retention Design",
    "description": "IBCS can help document backup frequency, retention periods, copy types, storage locations, access permissions, and deletion rules for covered systems. Retention should reflect business requirements, contractual obligations, and applicable policies. Longer retention can increase storage costs and exposure, so it should have a clear purpose. Policy exceptions should be approved, recorded, and periodically reviewed by the responsible owner."
  },
  {
    "id": 4,
    "number": "04",
    "title": "Full, Incremental, and Differential Backups",
    "description": "IBCS can help evaluate full, incremental, and differential backup methods based on recovery needs, data change rates, storage capacity, and restore complexity. A method that minimises daily storage may require more steps during recovery. The chosen approach should be validated with representative restore tests. Backup design should also consider application consistency and the dependencies required to bring recovered systems back into a usable state."
  },
  {
    "id": 5,
    "number": "05",
    "title": "Backup Scheduling and Automation",
    "description": "IBCS can support scheduling and automation of backup jobs to provide repeatable execution and reduce reliance on manual steps. Schedules should account for data-change windows, service load, dependency order, and retention requirements. Job results need actionable alerts and clear ownership. Automation can improve consistency, but it must be monitored and periodically tested to detect configuration drift, missed jobs, and silent failures."
  },
  {
    "id": 6,
    "number": "06",
    "title": "Application-Consistent Backups",
    "description": "IBCS can help assess whether backups need application-aware coordination to capture data in a consistent state. Databases and transactional applications may require supported snapshot methods, quiescing, log handling, or vendor-specific procedures. A file-level copy alone may not be sufficient for every workload. The method should be tested with the application owner and documented alongside the steps needed to restore service correctly."
  },
  {
    "id": 7,
    "number": "07",
    "title": "Database Backup and Point-in-Time Recovery",
    "description": "IBCS can support database backup planning, including full backups, transaction logs, and point-in-time recovery where the platform supports it. Recovery procedures should specify prerequisites, ordering, and validation checks. Access to backup files and database credentials must be controlled. Point-in-time recovery should be demonstrated in a test environment before being relied upon for a critical database or business workflow."
  },
  {
    "id": 8,
    "number": "08",
    "title": "Virtual Machine and Server Backups",
    "description": "IBCS can help plan backup coverage for virtual machines and servers, including system configuration, attached storage, application data, and required dependencies. The design should consider platform snapshots, guest-level agents, and application consistency. Restore procedures should specify whether the goal is file recovery, machine recovery, or service restoration. Successful snapshot creation alone does not prove that a complete workload can be recovered."
  },
  {
    "id": 9,
    "number": "09",
    "title": "Cloud Workload Backup",
    "description": "IBCS can support backup planning for selected cloud workloads and services, taking account of provider capabilities, service-specific retention, access policies, and regional requirements. Responsibility for backup may be shared between the provider and customer, depending on the service model. The plan should identify what the provider protects and what the organisation must configure. Recovery access and export options should be checked before an outage occurs."
  },
  {
    "id": 10,
    "number": "10",
    "title": "SaaS Data Backup Considerations",
    "description": "IBCS can help assess backup needs for approved software-as-a-service platforms, including business records, files, configuration, and collaboration content. Native retention or recycle-bin features may not provide the same protection as an independent backup. Available export methods, API limits, metadata preservation, and recovery options should be evaluated. The scope should identify which data types can be protected and which provider limitations remain."
  },
  {
    "id": 11,
    "number": "11",
    "title": "Endpoint and User Data Backup",
    "description": "IBCS can support backup planning for approved endpoint and user data, including work files and essential local configuration. The approach should define supported devices, synchronisation behaviour, exclusions, and recovery access. Personal data should be handled according to organisational policy and user privacy requirements. Endpoint protection should be tested for lost or replaced devices and should not rely solely on users remembering to copy files manually."
  },
  {
    "id": 12,
    "number": "12",
    "title": "Configuration and Infrastructure Backup",
    "description": "IBCS can help capture relevant infrastructure configuration, such as network settings, system policies, application configuration, infrastructure-as-code repositories, and approved service definitions. Secrets should be stored separately in suitable protected systems rather than embedded in ordinary configuration exports. Versioning can help identify changes and support rollback. Recovery procedures should include validation that restored settings are compatible with the current platform and dependencies."
  },
  {
    "id": 13,
    "number": "13",
    "title": "Backup Storage Architecture",
    "description": "IBCS can support selection of backup storage suited to capacity, performance, access, retention, and recovery needs. Options may include local repositories, network storage, object storage, or managed backup services. Design should consider failure domains, connectivity, operational ownership, and growth. Storage selection should not rely on capacity alone; the organisation also needs a reliable method to locate, verify, and restore the required recovery point."
  },
  {
    "id": 14,
    "number": "14",
    "title": "Off-Site and Geographic Separation",
    "description": "IBCS can help assess whether backup copies should be stored separately from the primary environment or in another geographic location. Separation can reduce exposure to local equipment failure and some site-level incidents. Data residency, transfer costs, latency, and access requirements should be considered. A remote copy is useful only if it is protected, retained as intended, and accessible through a tested recovery process."
  },
  {
    "id": 15,
    "number": "15",
    "title": "Immutable and Protected Backup Copies",
    "description": "IBCS can support evaluation of immutable or otherwise protected backup copies that reduce the risk of unauthorised alteration or deletion. The design should review retention locks, administrative permissions, credential separation, and recovery access. Immutability settings need careful testing to avoid preventing legitimate cleanup or restoration. Such controls can improve resilience but do not remove the need for secure administration and periodic recovery exercises."
  },
  {
    "id": 16,
    "number": "16",
    "title": "Backup Encryption and Key Management",
    "description": "IBCS can help define encryption requirements for backup data in transit and at rest, including key ownership, access, rotation, and recovery procedures. Encryption should be tested alongside restore workflows because lost keys can make intact backups unusable. Keys and credentials should not be stored only with the backups they protect. The approach should match the storage platform and the sensitivity of the information."
  },
  {
    "id": 17,
    "number": "17",
    "title": "Backup Access Control and Separation of Duties",
    "description": "IBCS can support access design that limits who may create, modify, delete, or restore backup copies. Separate administrative roles and protected credentials may reduce the risk of a single compromised account affecting both production and backups. Emergency access should be controlled and logged. Permissions should be reviewed periodically and aligned with recovery responsibilities rather than granted broadly for convenience."
  },
  {
    "id": 18,
    "number": "18",
    "title": "Backup Monitoring and Alerting",
    "description": "IBCS can help configure monitoring for backup completion, duration, capacity, failures, missed schedules, and unusual changes in job behaviour. Alerts should reach an assigned owner and include enough context to support investigation. Repeated warnings should be tracked until resolved. Monitoring rules should be tested because a dashboard that appears healthy is not useful if failures are not detected or notifications are not delivered."
  },
  {
    "id": 19,
    "number": "19",
    "title": "Backup Verification and Integrity Checks",
    "description": "IBCS can support verification of backup sets using available integrity checks, catalog validation, metadata inspection, and suitable test restores. Verification methods should be documented for each backup type. A successful integrity check can show that certain structural or checksum checks passed, but it does not prove that the application will function after recovery. Functional restore testing remains an important part of validation."
  },
  {
    "id": 20,
    "number": "20",
    "title": "Restore Testing and Recovery Drills",
    "description": "IBCS can help plan and conduct authorised restore tests using representative data and workloads. Tests may verify access, completeness, dependencies, application startup, and business-level correctness. Test conditions and results should be recorded, including time taken and any manual steps. Recovery exercises should be scheduled according to risk and changed when systems, backup methods, or dependencies are materially updated."
  },
  {
    "id": 21,
    "number": "21",
    "title": "File-Level Recovery",
    "description": "IBCS can support procedures for restoring selected files or folders from approved backup copies. The process should confirm the requested version, destination, permissions, and whether the restored content may overwrite newer work. Restored files should be checked for completeness and usability. Access to sensitive content must remain restricted, and the requester’s authority should be verified before information is recovered or transferred."
  },
  {
    "id": 22,
    "number": "22",
    "title": "System-Level Recovery",
    "description": "IBCS can help plan recovery of a complete server or virtual machine when file-level restoration is insufficient. Procedures may include rebuilding the target, restoring system state, reconnecting storage, validating network identity, and checking application dependencies. Recovery steps should account for conflicts if the original system remains active. System recovery should be tested in a controlled environment before it becomes the assumed method for a major outage."
  },
  {
    "id": 23,
    "number": "23",
    "title": "Bare-Metal Recovery Planning",
    "description": "IBCS can support planning for bare-metal recovery where supported, including required installation media, drivers, configuration records, backup access, and hardware or virtual platform compatibility. The process should define how boot media is secured and maintained. Recovery steps need to be documented for the intended platform. Hardware differences and unavailable drivers can affect recovery, so representative testing is important."
  },
  {
    "id": 24,
    "number": "24",
    "title": "Disaster Recovery Strategy",
    "description": "IBCS can help define a disaster recovery strategy for disruptions that make primary systems unavailable or unusable. Planning may cover alternate infrastructure, backup access, recovery sequencing, personnel responsibilities, and business communication. The strategy should identify critical dependencies and realistic restoration targets. A documented plan should be tested and updated as the environment changes, rather than treated as a guarantee that every service can be restored within a stated time."
  },
  {
    "id": 25,
    "number": "25",
    "title": "Business Impact Analysis Support",
    "description": "IBCS can support a business impact analysis by helping identify essential services, supporting technology, acceptable downtime, data-loss tolerance, and operational consequences of disruption. Business owners should determine criticality and approve recovery priorities. The analysis should consider dependencies across teams and external providers. Results can guide investment in backup and recovery capabilities, but assumptions and unresolved decisions should be clearly recorded."
  },
  {
    "id": 26,
    "number": "26",
    "title": "Recovery Time and Recovery Point Objectives",
    "description": "IBCS can help translate business requirements into measurable recovery time objectives and recovery point objectives for selected services. Recovery time describes the targeted period to restore a service, while recovery point describes the targeted data-loss window. Objectives should account for dependencies, restoration steps, capacity, and available personnel. They should be reported as targets until demonstrated through realistic exercises and measured evidence."
  },
  {
    "id": 27,
    "number": "27",
    "title": "Recovery Runbooks and Procedures",
    "description": "IBCS can support development of recovery runbooks with prerequisites, access requirements, sequence of operations, verification checks, communication steps, and escalation criteria. Instructions should be specific to the systems and recovery method in scope. Sensitive credentials should be retrieved from approved secret-management systems, not written directly into the runbook. Procedures should be reviewed after exercises and changes so that they remain accurate."
  },
  {
    "id": 28,
    "number": "28",
    "title": "Recovery Order and Dependency Mapping",
    "description": "IBCS can help document the order in which systems and services should be restored, based on dependencies and business priorities. Identity, networking, storage, databases, applications, and external services may need to be available in a defined sequence. The order should be validated with technical owners. Restoring individual servers without their dependencies may not restore the business service, so dependency mapping is important for realistic recovery planning."
  },
  {
    "id": 29,
    "number": "29",
    "title": "Alternate Site and Recovery Environment Planning",
    "description": "IBCS can support evaluation of alternate recovery environments, including standby capacity, network access, identity services, storage, configuration, and operational access. The environment may be warm, cold, or continuously available depending on business needs and cost. Readiness should be verified through planned tests. An alternate environment should not be described as operationally ready until its dependencies and recovery procedures have been exercised."
  },
  {
    "id": 30,
    "number": "30",
    "title": "High Availability and Disaster Recovery Distinction",
    "description": "IBCS can help distinguish high availability measures from disaster recovery arrangements. High availability aims to reduce interruption during certain component or service failures, while disaster recovery addresses broader restoration after a disruptive event. The two approaches can complement one another but have different dependencies and costs. Design decisions should reflect the failure scenarios the organisation needs to withstand and the downtime it can reasonably accept."
  },
  {
    "id": 31,
    "number": "31",
    "title": "Cloud Disaster Recovery Options",
    "description": "IBCS can support evaluation of cloud recovery options such as replicated workloads, infrastructure templates, snapshots, alternate regions, or rebuild-from-backup approaches where available. The design should consider service quotas, identity access, network configuration, data transfer, and regional dependencies. Recovery costs and provider limitations should be documented. A cloud recovery plan needs practical exercises rather than relying only on architecture diagrams or service descriptions."
  },
  {
    "id": 32,
    "number": "32",
    "title": "Cross-Region and Cross-Account Recovery",
    "description": "IBCS can help assess separation of recovery resources across regions or accounts where the platform supports it. Design should consider independent credentials, permissions, replication lag, data residency, and access during an account-level incident. Replication does not automatically protect against every logical deletion or corrupted update. Recovery copies should have appropriate retention and be tested against the scenarios they are intended to address."
  },
  {
    "id": 33,
    "number": "33",
    "title": "Replication and Recovery Consistency",
    "description": "IBCS can support evaluation of replication for databases, files, virtual machines, or application state. The plan should define acceptable lag, consistency requirements, failover behaviour, and what happens when replication is interrupted. Synchronous and asynchronous methods have different performance and data-loss trade-offs. Replication can reproduce accidental deletion or corruption, so it should complement rather than automatically replace independent backups."
  },
  {
    "id": 34,
    "number": "34",
    "title": "Failover and Failback Planning",
    "description": "IBCS can help document failover to a recovery environment and failback to the primary environment after the disruption is resolved. Procedures should address routing, identity, data synchronisation, application validation, and prevention of split-brain operation where relevant. Authority to declare failover or return to primary service should be explicit. Failback should be planned and tested because it can be as complex as the initial recovery."
  },
  {
    "id": 35,
    "number": "35",
    "title": "Ransomware Recovery Readiness",
    "description": "IBCS can support review of backup and recovery arrangements against ransomware scenarios, including protected copies, isolated administrative access, restore validation, and recovery sequencing. Decisions should consider whether backups or credentials may have been affected. Recovery should be coordinated with authorised security and business leaders after the environment is assessed. The existence of immutable copies reduces some risks but does not guarantee that all recovery data is clean or complete."
  },
  {
    "id": 36,
    "number": "36",
    "title": "Recovery from Accidental Deletion or Corruption",
    "description": "IBCS can help prepare procedures for recovery from accidental deletion, incorrect updates, data corruption, or application errors. The process should identify the affected data, desired recovery point, dependencies, and potential impact of overwriting valid changes. Point-in-time recovery or selective restoration may be appropriate where supported. Investigation and approval should precede destructive restoration so that recovery does not compound the original problem."
  },
  {
    "id": 37,
    "number": "37",
    "title": "Database Recovery and Transaction Consistency",
    "description": "IBCS can support database recovery planning that accounts for transaction logs, application dependencies, referential integrity, and consistency across related data stores. The plan should define validation queries or business checks appropriate to the application. Restoring a database may not restore external systems or queued transactions to the same point. Recovery tests should include the wider workflow when the business outcome depends on multiple components."
  },
  {
    "id": 38,
    "number": "38",
    "title": "Application Recovery and Configuration Validation",
    "description": "IBCS can help restore applications and validate required configuration, secrets, certificates, integrations, scheduled jobs, and service accounts. Recovery procedures should distinguish application binaries from persistent data and environment-specific settings. After restoration, critical user journeys and dependent services should be checked. A service process starting successfully is only one indicator and should not replace validation of actual application behaviour."
  },
  {
    "id": 39,
    "number": "39",
    "title": "Network and Security Service Recovery",
    "description": "IBCS can support recovery planning for essential network and security services, including DNS, identity, VPN, firewall configuration, endpoint management, and monitoring. Recovery order should account for the access required to restore other systems. Configuration copies should be protected and validated before use. Restoring connectivity without required security controls can create additional exposure, so operational readiness and security validation should be considered together."
  },
  {
    "id": 40,
    "number": "40",
    "title": "Backup and Recovery for Remote Offices",
    "description": "IBCS can help plan protection and recovery for remote offices or distributed sites where connectivity, local equipment, and support availability may differ. The plan should identify which data is centrally protected, what remains local, and how recovery access will work during a network outage. Local procedures should be understandable to authorised staff. Testing should reflect realistic bandwidth and access constraints rather than assume central support is always immediately available."
  },
  {
    "id": 41,
    "number": "41",
    "title": "Recovery for Remote and Hybrid Work",
    "description": "IBCS can support planning for recovery of approved remote-work services, including endpoint data, identity access, collaboration platforms, and secure connectivity. Procedures should consider loss of a device, unavailable home connectivity, and disruption to central services. Privacy and device ownership rules must be respected. Recovery should provide a safe path to restore work access without weakening authentication or exposing business information through unapproved transfer methods."
  },
  {
    "id": 42,
    "number": "42",
    "title": "Backup for Development and Test Environments",
    "description": "IBCS can help determine appropriate backup coverage for development, testing, staging, and demonstration environments. Requirements may differ from production but can include source repositories, test data, environment configuration, and valuable test results. Data should be synthetic or appropriately protected where possible. The plan should identify which environments can be rebuilt and which contain information or configuration that would be costly to recreate."
  },
  {
    "id": 43,
    "number": "43",
    "title": "Backup and Recovery for SaaS and Business Applications",
    "description": "IBCS can support recovery planning for selected business applications and SaaS services, including available exports, configuration capture, retention, and restoration constraints. Provider-native features and independent backup products should be evaluated against the required recovery scenarios. The plan should clarify what can be restored by the provider and what the customer must perform. Service terms and technical limits should be verified before relying on a recovery path."
  },
  {
    "id": 44,
    "number": "44",
    "title": "Backup Capacity and Storage Forecasting",
    "description": "IBCS can help estimate backup storage requirements using data volume, change rate, retention, compression, replication, and growth assumptions. Forecasts should account for full-backup schedules and temporary space needed during recovery or maintenance. Storage thresholds and expansion lead times should be monitored. Capacity planning should be revisited when workloads, retention policies, or backup methods change, because a previously adequate repository may become insufficient."
  },
  {
    "id": 45,
    "number": "45",
    "title": "Backup Performance and Window Management",
    "description": "IBCS can support analysis of backup duration, source-system impact, network use, and competition with production workloads. Scheduling or architecture changes may reduce interference with business operations. Tests should include realistic data volumes and change rates. A backup window should be evaluated alongside recovery speed and consistency, since faster execution is not beneficial if it produces incomplete protection or makes restoration too difficult."
  },
  {
    "id": 46,
    "number": "46",
    "title": "Backup Cost and Retention Optimisation",
    "description": "IBCS can help review backup costs across storage tiers, retention periods, data duplication, retrieval charges, and operational overhead. Optimisation should preserve required recovery points and applicable retention obligations. Lifecycle rules and deletion policies need careful testing before activation. Recommendations should state the assumptions and trade-offs involved rather than prioritise lower cost at the expense of unacknowledged recovery or compliance needs."
  },
  {
    "id": 47,
    "number": "47",
    "title": "Backup Job Failure Investigation",
    "description": "IBCS can support investigation of failed or incomplete backup jobs by reviewing error records, access, capacity, connectivity, source-system state, and recent configuration changes. The process should establish whether the latest valid recovery point is still available and whether temporary mitigation is needed. Repeated failures should be tracked to resolution. Reports should distinguish a single job failure from a broader loss of backup coverage."
  },
  {
    "id": 48,
    "number": "48",
    "title": "Backup Catalog and Recovery Point Inventory",
    "description": "IBCS can help maintain an inventory of available backup sets, recovery points, source assets, retention expiry, and restore prerequisites. The inventory should be reconciled with actual platform records and include ownership for resolving missing or stale entries. Clear catalog information reduces delays during an incident. It should not be treated as proof of recoverability without appropriate integrity checks and restoration tests."
  },
  {
    "id": 49,
    "number": "49",
    "title": "Backup Reporting and Management Review",
    "description": "IBCS can support reports summarising backup coverage, job outcomes, failures, storage capacity, restore-test results, and unresolved risks. Reports should define the period, systems included, and any missing data. Success percentages can hide gaps in critical assets, so reporting should show important exceptions and coverage by service. Management review can use these records to prioritise remediation and approve changes to protection requirements."
  },
  {
    "id": 50,
    "number": "50",
    "title": "Backup Policy Compliance Review",
    "description": "IBCS can help review whether backup practices align with the organisation’s approved policies, retention rules, and service requirements. The assessment may compare documented scope with configured jobs, access controls, and recovery evidence. Findings should be based on the criteria supplied or agreed for the engagement. A technical review should not be described as formal regulatory certification unless a qualified and authorised process explicitly provides that outcome."
  },
  {
    "id": 51,
    "number": "51",
    "title": "Recovery Exercise Design",
    "description": "IBCS can support design of recovery exercises with defined objectives, scenarios, participants, safety conditions, success criteria, and evidence requirements. Exercises may test a single file restore, an application recovery, or a broader site scenario. Scope should be appropriate to operational risk and available resources. Exercise outcomes should identify manual steps, dependency issues, actual timings, and corrective actions rather than simply record that the test occurred."
  },
  {
    "id": 52,
    "number": "52",
    "title": "Recovery Time Measurement and Gap Analysis",
    "description": "IBCS can help measure actual recovery time during a defined exercise and compare it with the agreed recovery objective. Measurement should state when the clock starts and what counts as service restoration, including functional validation where relevant. Gaps should be analysed by step and dependency. A single exercise may not represent every incident, so conclusions should include the conditions tested and factors that could change results."
  },
  {
    "id": 53,
    "number": "53",
    "title": "Recovery Point Measurement and Data Validation",
    "description": "IBCS can support assessment of actual data recovery points by comparing recovered records or timestamps with the defined incident or failure time. The method should account for application transaction boundaries and data that changes across connected systems. Data completeness should be verified using suitable checks. Recovery point results should describe the sample and method, rather than infer exact loss across all data without sufficient evidence."
  },
  {
    "id": 54,
    "number": "54",
    "title": "Recovery Access and Credential Readiness",
    "description": "IBCS can help verify that authorised responders can access backup systems, recovery consoles, encryption keys, and required infrastructure during an outage. Emergency access should be controlled, tested, and documented, with credentials protected separately from the systems they unlock. Access testing should not expose secrets in reports. Recovery procedures can fail even when backups exist if the people restoring them cannot obtain the required permissions."
  },
  {
    "id": 55,
    "number": "55",
    "title": "Third-Party Backup and Recovery Coordination",
    "description": "IBCS can support coordination with backup vendors, cloud providers, managed service partners, and application suppliers when recovery depends on external capabilities. The plan should identify support entitlements, escalation contacts, required identifiers, and dependencies on provider actions. External recovery timelines may be outside the organisation’s direct control. Assumptions should be verified against service terms and tested where the provider offers a suitable exercise path."
  },
  {
    "id": 56,
    "number": "56",
    "title": "Recovery Communications and Stakeholder Updates",
    "description": "IBCS can help prepare recovery communications that describe the affected services, known impact, recovery progress, current limitations, and user actions. Updates should use verified information and follow approved communication channels. Sensitive technical details should be restricted to appropriate audiences. Recovery messaging should avoid promising a completion time unless the estimate is supported and authorised, and it should explain when the next update will be provided where agreed."
  },
  {
    "id": 57,
    "number": "57",
    "title": "Post-Recovery Validation and Monitoring",
    "description": "IBCS can support post-recovery checks for service functionality, data integrity, security controls, integrations, scheduled jobs, and monitoring coverage. Restored systems should be observed for a defined period appropriate to the incident. Any temporary workaround or control gap should be documented with an owner. Recovery is not complete merely because infrastructure is online; the business service and its key dependencies should be validated."
  },
  {
    "id": 58,
    "number": "58",
    "title": "Recovery Lessons Learned and Improvement Plan",
    "description": "IBCS can help document lessons from backup failures, restore tests, and disaster recovery exercises. The review may identify outdated runbooks, missing access, capacity limits, unclear ownership, and manual steps that delay restoration. Actions should have owners and validation criteria. Improvements should be tracked to completion and re-tested where practical so that the organisation can determine whether the changes addressed the original recovery gap."
  },
  {
    "id": 59,
    "number": "59",
    "title": "Backup and Recovery Handover",
    "description": "IBCS can support handover of backup inventories, schedules, retention rules, runbooks, recovery contacts, test results, and unresolved limitations to authorised teams. Knowledge-transfer sessions can explain routine monitoring and the sequence of recovery tasks. Sensitive credentials should remain in approved secret-management systems. A structured handover helps the receiving team operate the solution and understand which recovery capabilities have actually been tested."
  },
  {
    "id": 60,
    "number": "60",
    "title": "Backup and Recovery Scope, RTO and RPO Responsibilities",
    "description": "IBCS can help define the backup and recovery scope by identifying covered systems and datasets, backup frequency, retention, recovery dependencies, and the parties responsible for each activity. Recovery Time Objectives and Recovery Point Objectives should be agreed with service owners and reflect business needs and technical constraints. The plan should state who authorises recovery, validates restored data, and accepts residual risk. Actual recovery outcomes depend on the environment and must be validated through testing."
  }
];

export default {
  headerInfo,
  cloudContent,
  steps,
  palettes,
  capabilities
};
