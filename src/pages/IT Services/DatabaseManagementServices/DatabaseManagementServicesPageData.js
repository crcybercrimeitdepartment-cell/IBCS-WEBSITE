export const DATABASE_SERVICES_51 = [
  {
    id: '1',
    title: 'Database Environment Assessment',
    category: 'Assessment & Strategy',
    iconType: 'compass',
    tag: 'Assessment',
    description: 'IBCS can help assess an organisation’s database environment by reviewing database platforms, versions, workload patterns, data dependencies, operating practices, and support arrangements. The assessment may identify performance constraints, lifecycle risks, inconsistent administration, and gaps in documentation or recovery readiness. Findings can be prioritised according to business impact and technical effort, providing a practical basis for improvement without assuming that every database requires the same architecture or management approach.'
  },
  {
    id: '2',
    title: 'Database Architecture and Design',
    category: 'Assessment & Strategy',
    iconType: 'layers',
    tag: 'Architecture',
    description: 'IBCS can support database architecture and design decisions based on application needs, data structure, transaction patterns, availability objectives, growth forecasts, and operational constraints. Design work may consider relational or non-relational models, storage organisation, indexing strategy, replication, backup, and integration requirements. Decisions should document assumptions and trade-offs so the design remains understandable, maintainable, and suitable for the workload as business requirements evolve.'
  },
  {
    id: '3',
    title: 'Relational Database Administration',
    category: 'Platform Administration',
    iconType: 'database',
    tag: 'RDBMS Ops',
    description: 'IBCS can help administer supported relational database platforms through planned maintenance, configuration review, monitoring, access coordination, and operational documentation. Scope depends on the database technology, authorised permissions, and agreed service responsibilities. Administrative procedures should account for application dependencies and change-control requirements, while routine reviews can help identify capacity pressure, configuration drift, and recurring issues before they materially affect users.'
  },
  {
    id: '4',
    title: 'Non-Relational Database Administration',
    category: 'Platform Administration',
    iconType: 'network',
    tag: 'NoSQL Ops',
    description: 'IBCS can support the administration of approved non-relational databases, including document, key-value, graph, and other data models where they fit the application. Activities may include capacity review, data organisation, access configuration, monitoring, backup planning, and platform lifecycle management. Recommendations should reflect query patterns, consistency requirements, data relationships, and operational expertise rather than treating all non-relational technologies as interchangeable.'
  },
  {
    id: '5',
    title: 'Database Installation and Configuration',
    category: 'Platform Administration',
    iconType: 'server',
    tag: 'Configuration',
    description: 'IBCS can help plan and coordinate database installation and initial configuration on approved infrastructure or managed platforms. Work may include version selection, storage layout, network dependencies, service accounts, baseline settings, monitoring, and backup integration. Installation steps should follow vendor guidance and organisational controls, with configuration records retained for support and future recovery. Acceptance checks should confirm that the platform is ready for its intended workload.'
  },
  {
    id: '6',
    title: 'Database Version and Lifecycle Management',
    category: 'Lifecycle & Upgrades',
    iconType: 'git',
    tag: 'Lifecycle',
    description: 'IBCS can help track database versions, vendor support dates, compatibility constraints, and planned upgrade requirements. Lifecycle reviews may consider application dependencies, extension support, migration complexity, testing needs, and maintenance windows. Recommendations should identify risks associated with unsupported releases and outline feasible upgrade paths. The organisation should approve timing and scope, and results should be recorded so the current platform status remains visible.'
  },
  {
    id: '7',
    title: 'Database Schema Design',
    category: 'Data Modelling & Design',
    iconType: 'doc',
    tag: 'Schema Design',
    description: 'IBCS can support the design and review of database schemas that represent application entities, relationships, constraints, and business rules. Work may include naming conventions, data types, keys, referential integrity, and decisions about normalisation or deliberate denormalisation. Schema choices should be evaluated against expected query patterns and change frequency, with documentation helping application teams understand the model and maintain consistent data handling.'
  },
  {
    id: '8',
    title: 'Data Modelling and Relationship Mapping',
    category: 'Data Modelling & Design',
    iconType: 'network',
    tag: 'Data Modelling',
    description: 'IBCS can help create logical and physical data models to clarify how information is structured and connected across an application or service. Models may document entities, attributes, relationships, cardinality, and key business rules. Review with relevant stakeholders helps detect ambiguous definitions and duplicated concepts early. Well-maintained models can improve communication between developers, database administrators, analysts, and teams responsible for data quality.'
  },
  {
    id: '9',
    title: 'SQL Query Development and Review',
    category: 'Query & Performance',
    iconType: 'doc',
    tag: 'SQL Review',
    description: 'IBCS can support the development and review of SQL queries for approved application, reporting, and administrative needs. Work may address correctness, readability, parameterisation, transaction behaviour, and compatibility with the selected database platform. Queries should be tested against representative data and workload conditions before release. Review procedures can also help identify inefficient joins, unnecessary scans, or patterns that may create operational risk.'
  },
  {
    id: '10',
    title: 'Query Performance Optimisation',
    category: 'Query & Performance',
    iconType: 'trending',
    tag: 'Optimisation',
    description: 'IBCS can help investigate slow database queries by reviewing execution plans, indexes, data distribution, query structure, resource usage, and workload concurrency. Recommendations may include query rewrites, index adjustments, statistics maintenance, or changes to data access patterns. Optimisation should be validated with suitable test cases and representative measurements, because improvements for one query can affect other workloads or increase storage and maintenance costs.'
  },
  {
    id: '11',
    title: 'Index Design and Maintenance',
    category: 'Query & Performance',
    iconType: 'search',
    tag: 'Indexing',
    description: 'IBCS can support index design and maintenance based on common query patterns, filtering, joins, sorting, write activity, and storage limits. Work may identify missing, redundant, or poorly suited indexes and review the impact of index maintenance operations. Changes should be tested against realistic workloads, as additional indexes can improve reads while increasing write overhead and storage usage. Findings should be documented for future review.'
  },
  {
    id: '12',
    title: 'Database Capacity Planning',
    category: 'Performance & Capacity',
    iconType: 'chart',
    tag: 'Capacity',
    description: 'IBCS can help forecast database storage, memory, compute, connection, and transaction capacity using historical trends and expected business growth. Planning may consider data retention, index growth, workload peaks, and application changes. Capacity thresholds should be defined with enough lead time for action, while recommendations should distinguish measured usage from estimates. Regular review helps avoid emergency expansion and supports more informed infrastructure decisions.'
  },
  {
    id: '13',
    title: 'Database Performance Monitoring',
    category: 'Performance & Capacity',
    iconType: 'activity',
    tag: 'Monitoring',
    description: 'IBCS can support monitoring of database availability, response times, query latency, transaction rates, connection pools, locks, waits, storage, and resource utilisation where platform telemetry allows. Dashboards and alerts should reflect the database’s business criticality and normal workload patterns. Monitoring coverage and thresholds should be reviewed after major application or platform changes so operational teams receive useful signals rather than excessive noise.'
  },
  {
    id: '14',
    title: 'Database Health Checks',
    category: 'Performance & Capacity',
    iconType: 'activity',
    tag: 'Health Checks',
    description: 'IBCS can help perform periodic database health checks covering configuration, resource pressure, failed jobs, storage status, backup results, replication state, and recurring warnings. The checks should be tailored to the database engine and its role. Findings can be grouped into immediate concerns, planned maintenance, and longer-term improvements, with each action assigned an owner where the organisation’s operating model supports it.'
  },
  {
    id: '15',
    title: 'Database Backup Strategy',
    category: 'Backup & Recovery',
    iconType: 'database',
    tag: 'Backup',
    description: 'IBCS can help design database backup strategies that reflect data criticality, change rates, recovery objectives, retention requirements, and available storage. Depending on platform capabilities, plans may include full, incremental, differential, or log-based backups. Backup schedules should be monitored and protected according to approved policy. A defined strategy is only effective when restoration is periodically tested and the recovery process is understood by responsible personnel.'
  },
  {
    id: '16',
    title: 'Database Restore and Recovery Testing',
    category: 'Backup & Recovery',
    iconType: 'shield',
    tag: 'Recovery Testing',
    description: 'IBCS can support controlled tests to restore database backups and validate that recovered data and services meet agreed acceptance criteria. Test plans may cover recovery prerequisites, data consistency, application connectivity, expected recovery time, and stakeholder sign-off. Results should record failures, limitations, and corrective actions. Regular testing can reveal gaps in backup coverage, permissions, documentation, or recovery procedures before a real outage occurs.'
  },
  {
    id: '17',
    title: 'Point-in-Time Recovery Planning',
    category: 'Backup & Recovery',
    iconType: 'trending',
    tag: 'PITR Planning',
    description: 'IBCS can help assess point-in-time recovery requirements where the database platform supports them and the business needs recovery to a specific moment. Planning may include transaction-log or journal retention, backup dependencies, storage capacity, and recovery validation. The procedure should state prerequisites and limitations, including any gaps in recoverable history. Testing helps confirm that the chosen approach is practical for the required recovery window.'
  },
  {
    id: '18',
    title: 'High Availability and Database Resilience',
    category: 'High Availability & Sync',
    iconType: 'server',
    tag: 'Resilience',
    description: 'IBCS can support evaluation of database high-availability options such as supported clustering, replicas, failover groups, or managed service features. The design should reflect acceptable downtime, consistency needs, platform limits, licensing, and operational capacity. Failover behaviour and recovery steps should be documented and tested where feasible, with a clear distinction between intended resilience and capabilities demonstrated through actual exercises.'
  },
  {
    id: '19',
    title: 'Replication and Data Synchronisation',
    category: 'High Availability & Sync',
    iconType: 'sync',
    tag: 'Replication',
    description: 'IBCS can help plan and monitor database replication or data synchronisation where supported by the chosen platform and workload. Activities may include defining replication scope, lag monitoring, conflict handling, topology documentation, and recovery procedures. The design should account for consistency requirements and the effect of network or service interruptions. Replication does not replace independent backups, and operational documentation should explain how replicas are used.'
  },
  {
    id: '20',
    title: 'Database Migration Planning',
    category: 'Migration & Cloud',
    iconType: 'compass',
    tag: 'Migration Plan',
    description: 'IBCS can assist with planning migrations between database versions, platforms, hosting environments, or data models. Work may include inventory, compatibility review, schema conversion, data transfer, validation, downtime planning, and rollback options. Migration scope should be agreed with application and business owners. A staged plan and representative tests help expose incompatibilities before cutover and reduce the risk of data or service disruption.'
  },
  {
    id: '21',
    title: 'Database Data Migration and Validation',
    category: 'Migration & Cloud',
    iconType: 'layers',
    tag: 'Data Migration',
    description: 'IBCS can support data migration activities using approved tools and methods appropriate to the source and target systems. Validation may compare row counts, key totals, constraints, sample records, checksums, and application-level outcomes where suitable. Reconciliation rules should be defined before migration begins, and exceptions recorded for review. Sensitive data should be handled under authorised access and data-protection requirements throughout the process.'
  },
  {
    id: '22',
    title: 'Database Cloud Migration Support',
    category: 'Migration & Cloud',
    iconType: 'cloud',
    tag: 'Cloud Migration',
    description: 'IBCS can help evaluate and plan migration of database workloads to an approved cloud or managed database service. Considerations may include feature compatibility, latency, network connectivity, identity, encryption, backup, availability, cost, and provider responsibilities. Recommendations should compare migration approaches and operational trade-offs. Cloud adoption should be based on workload suitability and governance requirements rather than a presumption that every database should be moved.'
  },
  {
    id: '23',
    title: 'Database Security Configuration Coordination',
    category: 'Security & Governance',
    iconType: 'lock',
    tag: 'Security Config',
    description: 'IBCS can support implementation of approved database security settings in coordination with the organisation’s security and platform owners. Work may include secure listener configuration, access boundaries, audit settings, encryption options, and review of default or unnecessary services. Changes should follow vendor guidance and be validated against application dependencies. Security exceptions and risk decisions should remain documented and approved by the responsible authority.'
  },
  {
    id: '24',
    title: 'Database User and Role Administration',
    category: 'Security & Governance',
    iconType: 'users',
    tag: 'User Access',
    description: 'IBCS can help organise database user and role administration using approved access-request and review procedures. Activities may include role definitions, permission mapping, account lifecycle coordination, and identification of excessive or obsolete access. Privileges should align with job responsibilities and application needs, while administrative access remains restricted to authorised personnel. Clear records can improve accountability and simplify periodic access reviews.'
  },
  {
    id: '25',
    title: 'Least-Privilege Permission Review',
    category: 'Security & Governance',
    iconType: 'shield',
    tag: 'Permissions',
    description: 'IBCS can support reviews of database permissions to compare granted access with documented responsibilities and application requirements. Review may identify broad grants, inactive accounts, inherited privileges, or permissions that are no longer necessary. Changes should be validated with system owners to avoid interrupting legitimate operations. Exceptions should be recorded with an accountable approver and review date so access does not remain broader than intended indefinitely.'
  },
  {
    id: '26',
    title: 'Database Encryption Coordination',
    category: 'Security & Governance',
    iconType: 'lock',
    tag: 'Encryption',
    description: 'IBCS can help review database encryption requirements for data at rest and in transit where the selected platform and architecture support them. Work may include identifying configuration options, certificate dependencies, key-management responsibilities, performance considerations, and application compatibility. Key custody and policy decisions should remain with authorised owners. Implementation should be tested carefully, with recovery and rotation procedures documented before encryption settings are changed.'
  },
  {
    id: '27',
    title: 'Database Auditing and Activity Logging',
    category: 'Security & Governance',
    iconType: 'doc',
    tag: 'Audit Logs',
    description: 'IBCS can support database auditing and activity logging according to approved operational, security, and compliance requirements. Planning may define event categories, collection destinations, access permissions, retention periods, and review ownership. Logging should be proportionate to the purpose and mindful of sensitive values that should not be unnecessarily captured. Regular checks can confirm that audit collection remains active after upgrades or configuration changes.'
  },
  {
    id: '28',
    title: 'Sensitive Data Discovery and Classification',
    category: 'Data Governance & Privacy',
    iconType: 'search',
    tag: 'Classification',
    description: 'IBCS can help coordinate discovery and classification of sensitive data within authorised database environments. The process may identify data categories, business owners, retention needs, access requirements, and locations that require additional controls. Automated discovery results should be validated because patterns can produce false positives or miss unusual formats. Classification decisions should be approved by the organisation’s responsible data or governance stakeholders.'
  },
  {
    id: '29',
    title: 'Data Masking for Non-Production Environments',
    category: 'Data Governance & Privacy',
    iconType: 'shield',
    tag: 'Data Masking',
    description: 'IBCS can support planning for masking or de-identifying sensitive data used in development, testing, training, or demonstration environments. The method should preserve the properties needed for valid testing while reducing exposure of real personal or confidential information. Scope may include field selection, referential consistency, repeatability, and validation. Data owners should approve the approach and confirm that the resulting dataset meets applicable policy.'
  },
  {
    id: '30',
    title: 'Database Data Quality Checks',
    category: 'Data Governance & Privacy',
    iconType: 'sparkles',
    tag: 'Data Quality',
    description: 'IBCS can help define data quality checks for completeness, validity, uniqueness, consistency, and referential integrity within agreed database scope. Rules should be connected to business definitions and reviewed with data owners. Results may include exception counts, affected records, and trend information to support remediation. Checks can reveal quality issues, but corrections should follow authorised business rules rather than automatically changing ambiguous records.'
  },
  {
    id: '31',
    title: 'Data Retention and Archiving Planning',
    category: 'Data Governance & Privacy',
    iconType: 'database',
    tag: 'Archiving',
    description: 'IBCS can support database retention and archiving planning based on business needs, performance, storage growth, and applicable retention obligations identified by the organisation. Work may define candidate datasets, archival formats, retrieval expectations, and deletion approvals. Legal and regulatory interpretations should be confirmed by qualified responsible stakeholders. A documented lifecycle helps balance operational performance with the need to retain or remove information appropriately.'
  },
  {
    id: '32',
    title: 'Database Partitioning and Data Lifecycle Design',
    category: 'Data Architecture',
    iconType: 'layers',
    tag: 'Partitioning',
    description: 'IBCS can help evaluate partitioning or other data lifecycle techniques for databases with large or rapidly growing datasets. Design may consider query filters, maintenance windows, archival needs, index strategy, and platform-specific limitations. Benefits should be assessed against added complexity and operational risk. Testing with representative data helps determine whether partitioning improves the relevant workload rather than simply changing how data is stored.'
  },
  {
    id: '33',
    title: 'Stored Procedures, Functions, and Triggers',
    category: 'Database Development',
    iconType: 'cpu',
    tag: 'Stored Logic',
    description: 'IBCS can support the review and development of database-side logic such as stored procedures, functions, and triggers when appropriate for the application architecture. Work may examine transaction boundaries, error handling, performance, permissions, and maintainability. Logic should be version-controlled and tested with representative cases. Clear documentation helps application teams understand where business rules execute and how changes may affect dependent operations.'
  },
  {
    id: '34',
    title: 'Transaction and Concurrency Management',
    category: 'Database Development',
    iconType: 'zap',
    tag: 'Transactions',
    description: 'IBCS can help investigate transaction handling, isolation levels, locking, deadlocks, and concurrency behaviour in supported database systems. Analysis may use approved diagnostics, application traces, and execution evidence to identify contention or inconsistent assumptions. Changes should preserve required data integrity and be tested under realistic concurrency. Findings should explain the trade-offs between correctness, throughput, and response time for the specific workload.'
  },
  {
    id: '35',
    title: 'Connection Pool and Session Management',
    category: 'Database Development',
    iconType: 'network',
    tag: 'Connections',
    description: 'IBCS can support review of database connection pools, session limits, timeout settings, and application connection behaviour. The objective is to align connection usage with database capacity and application demand while avoiding resource exhaustion or unnecessary connection churn. Recommendations should account for application architecture and platform limits, and should be tested during representative load conditions before being applied broadly.'
  },
  {
    id: '36',
    title: 'Database Job and Scheduler Management',
    category: 'Operations & Maintenance',
    iconType: 'gear',
    tag: 'Job Scheduler',
    description: 'IBCS can help document and monitor scheduled database jobs such as maintenance tasks, imports, exports, refreshes, and housekeeping routines. Procedures may define execution windows, dependencies, failure notifications, retry rules, and ownership. Job schedules should be reviewed for collisions and resource impact. Logs and outcome checks help distinguish a job that completed technically from one that produced the expected business result.'
  },
  {
    id: '37',
    title: 'Database Maintenance Planning',
    category: 'Operations & Maintenance',
    iconType: 'gear',
    tag: 'Maintenance',
    description: 'IBCS can support maintenance planning for tasks such as statistics updates, index maintenance, integrity checks, log management, and platform housekeeping where appropriate to the database engine. Plans should account for data size, workload peaks, locking behaviour, and maintenance windows. Results should be monitored and documented, and platform-specific guidance should be followed to avoid applying generic procedures that are unsuitable for a particular environment.'
  },
  {
    id: '38',
    title: 'Database Development and Test Environment Support',
    category: 'Operations & Maintenance',
    iconType: 'server',
    tag: 'Test Envs',
    description: 'IBCS can help provision or maintain database environments for development, testing, staging, and quality assurance according to approved architecture and data-handling rules. Work may include schema deployment, representative test datasets, access controls, refresh procedures, and environment configuration. Environment differences should be documented so that test results can be interpreted correctly and deployment issues caused by configuration drift can be reduced.'
  },
  {
    id: '39',
    title: 'Schema Change and Release Management',
    category: 'Release & Automation',
    iconType: 'git',
    tag: 'Schema Release',
    description: 'IBCS can support a controlled process for database schema changes, including review, versioning, testing, deployment planning, validation, and rollback or forward-fix considerations. Changes should be coordinated with application releases and data migration needs. Production changes should follow the organisation’s approval process, with scripts and outcomes retained for traceability. Planning should consider whether a change can safely coexist with the current application version.'
  },
  {
    id: '40',
    title: 'Database Deployment Automation',
    category: 'Release & Automation',
    iconType: 'zap',
    tag: 'Automation',
    description: 'IBCS can help introduce automation for repeatable database deployment tasks where the platform and organisational controls support it. Activities may include versioned schema scripts, migration sequencing, environment-specific configuration, validation checks, and release records. Credentials and secrets should use approved handling mechanisms, and production deployments should retain appropriate review and approval. Automation can improve consistency, but it should not bypass testing or change governance.'
  },
  {
    id: '41',
    title: 'Database Monitoring Alert Tuning',
    category: 'Incident & Support',
    iconType: 'alert',
    tag: 'Alert Tuning',
    description: 'IBCS can help tune database alerts by comparing thresholds with observed behaviour, incident history, and service criticality. Review may address repeated false positives, missing warning conditions, escalation delays, and gaps in notification ownership. Changes should be tested and documented so useful alerts are not silenced while reducing noise. Monitoring rules should be revisited after workload, architecture, or database version changes.'
  },
  {
    id: '42',
    title: 'Database Incident Response Support',
    category: 'Incident & Support',
    iconType: 'alert',
    tag: 'Incident Ops',
    description: 'IBCS can support database incident response by helping gather timelines, diagnostics, recent changes, workload measurements, and relevant platform logs. Investigation may coordinate with application, infrastructure, and provider teams to determine whether the issue involves availability, performance, data access, or dependencies. Sensitive records should be handled under approved procedures. Findings should distinguish confirmed causes from hypotheses and record recovery actions and follow-up tasks.'
  },
  {
    id: '43',
    title: 'Database Recovery Runbooks',
    category: 'Incident & Support',
    iconType: 'doc',
    tag: 'Runbooks',
    description: 'IBCS can help document database recovery runbooks for common failure scenarios, including service restart, backup restoration, replica promotion, connection recovery, or provider escalation where supported. Each procedure should state prerequisites, permissions, expected impact, validation steps, and rollback considerations. Runbooks should be reviewed and tested by authorised personnel, because undocumented assumptions or outdated commands can make an emergency more difficult.'
  },
  {
    id: '44',
    title: 'Database Documentation and Knowledge Transfer',
    category: 'Knowledge & Handover',
    iconType: 'doc',
    tag: 'Documentation',
    description: 'IBCS can help maintain database documentation covering architecture, schemas, dependencies, backup arrangements, monitoring, maintenance, access procedures, and known limitations. Knowledge-transfer sessions can explain routine operations and escalation paths to the teams responsible for support. Documents should reflect the deployed environment, use consistent terminology, and identify owners for updates so that operational knowledge remains available as personnel and platforms change.'
  },
  {
    id: '45',
    title: 'Database Vendor and Managed-Service Coordination',
    category: 'Operations & Governance',
    iconType: 'globe',
    tag: 'Vendor Ops',
    description: 'IBCS can assist with technical coordination between database teams, software vendors, hosting providers, and managed-service operators. Activities may include preparing diagnostic evidence, tracking support cases, documenting dependencies, and coordinating approved maintenance or upgrades. Contractual responsibilities remain governed by the relevant agreements. Clear records can reduce duplicated troubleshooting and help the organisation understand which actions require provider involvement or internal approval.'
  },
  {
    id: '46',
    title: 'Database Cost and Resource Optimisation',
    category: 'Optimization & Roadmap',
    iconType: 'trending',
    tag: 'Cost Opt',
    description: 'IBCS can help review database resource consumption, storage growth, licensing dependencies, service tiers, and workload utilisation to identify potential optimisation opportunities. Recommendations should consider performance, availability, support, and recovery requirements alongside cost. A reduction in allocated resources should be tested against representative peak demand and monitored after implementation. The goal is a balanced configuration, not cost reduction that creates avoidable operational risk.'
  },
  {
    id: '47',
    title: 'Database Documentation and Audit Evidence',
    category: 'Operations & Governance',
    iconType: 'shield',
    tag: 'Audit Evidence',
    description: 'IBCS can support the organisation in collecting database-related evidence requested by authorised audit or governance teams, such as access reviews, backup results, change records, version inventories, and maintenance logs. Evidence should be accurate, traceable, and handled according to internal policy. IBCS can help identify missing records, but formal compliance conclusions and control attestations remain the responsibility of the appropriate authority or qualified assessor.'
  },
  {
    id: '48',
    title: 'Database Platform Consolidation',
    category: 'Optimization & Roadmap',
    iconType: 'layers',
    tag: 'Consolidation',
    description: 'IBCS can help evaluate database consolidation opportunities where several systems have overlapping requirements or underused resources. Analysis may consider workload isolation, compatibility, licensing, administration effort, performance, recovery, and the impact of shared failure domains. Consolidation should proceed only where the trade-offs are understood and tested. Recommendations should identify migration dependencies and preserve appropriate separation for systems with distinct operational or data requirements.'
  },
  {
    id: '49',
    title: 'Database Modernisation Roadmap',
    category: 'Optimization & Roadmap',
    iconType: 'lightbulb',
    tag: 'Modernisation',
    description: 'IBCS can help develop a database modernisation roadmap based on platform lifecycle, application needs, data growth, performance evidence, and operational constraints. Options may include upgrades, schema improvement, managed services, migration, monitoring enhancement, or process standardisation. Each proposed initiative should identify benefits, dependencies, risk, and a suggested sequence. The roadmap should be revisited as business priorities and technology support conditions evolve.'
  },
  {
    id: '50',
    title: 'Database Service-Level and Reliability Review',
    category: 'Reliability & SLAs',
    iconType: 'chart',
    tag: 'SLA Review',
    description: 'IBCS can support review of database reliability measures such as availability, response time, backup success, recovery performance, and incident recurrence where these are measurable and agreed. Reports should explain measurement methods, data gaps, and relevant provider dependencies. Service-level interpretation should follow approved definitions and agreements, helping stakeholders focus improvement efforts on the outcomes that matter to users and business operations.'
  },
  {
    id: '51',
    title: 'Database Handover and Operational Readiness',
    category: 'Knowledge & Handover',
    iconType: 'compass',
    tag: 'Handover',
    description: 'IBCS can help prepare database services for operational handover by verifying agreed configuration records, monitoring coverage, backup status, recovery instructions, access ownership, and known limitations. Outstanding issues should be assigned and prioritised. Acceptance criteria should be established before handover and checked with the receiving team, so that operational responsibility is clear and the service is not considered ready solely because installation or migration has finished.'
  }
];

// Alias for seamless backward compatibility across the app
export const CAPABILITIES_56 = DATABASE_SERVICES_51;
