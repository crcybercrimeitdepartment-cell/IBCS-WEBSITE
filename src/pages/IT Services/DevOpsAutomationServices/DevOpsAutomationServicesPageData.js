/**
 * IBCS DevOps & Automation Services Catalog (Card 07)
 * Extracted directly from official IBCS IT Services Word Specification
 * Total: 45 Comprehensive Enterprise DevOps Service Capabilities
 */

export const DEVOPS_OVERVIEW = {
  company: "IBCS IT SERVICES",
  card: "CARD 07 — DEVOPS & AUTOMATION SERVICES",
  subtitle: "Service Scope and Capability Overview",
  title: "DevOps & Automation Services",
  intro: "IBCS DevOps & Automation focuses on improving software delivery and operational consistency through automated workflows, deployment pipelines, infrastructure management, and continuous integration practices. Our approach aims to reduce repetitive tasks, improve release coordination, and support maintainable software development environments.",
  totalCount: 45,
  ctaText: "Explore Full Scope"
};

export const DEVOPS_SERVICES = [
  {
    "id": 1,
    "step": 1,
    "title": "DevOps and Automation Services Overview",
    "shortTitle": "DevOps and Automation\nServices Overview",
    "subtitle": "IBCS provides DevOps and automation services to help teams imp...",
    "description": "IBCS provides DevOps and automation services to help teams improve the consistency, speed, and reliability of software delivery and IT operations. Engagements may cover delivery pipelines, infrastructure automation, release controls, environment management, observability, and operational workflows. The right approach depends on the application architecture, team structure, risk tolerance, and existing tools. The objective is to reduce avoidable manual effort while keeping changes traceable, testable, and appropriately controlled for the organization’s operating environment.",
    "iconKey": "Boxes",
    "color": "#0284c7",
    "side": "left"
  },
  {
    "id": 2,
    "step": 2,
    "title": "DevOps Readiness and Workflow Assessment",
    "shortTitle": "DevOps Readiness and\nWorkflow Assessment",
    "subtitle": "Before introducing new automation, IBCS can review how code mo...",
    "description": "Before introducing new automation, IBCS can review how code moves from development to production and how operational work is handled. The assessment may examine current tools, approval steps, test coverage, deployment frequency, incident patterns, and recurring manual tasks. Findings should identify bottlenecks and risks rather than assume every process needs a new platform. A prioritized improvement plan helps teams adopt changes in manageable stages and establishes a baseline for evaluating whether delivery practices actually improve.",
    "iconKey": "ClipboardCheck",
    "color": "#2563eb",
    "side": "right"
  },
  {
    "id": 3,
    "step": 3,
    "title": "Development and Operations Collaboration",
    "shortTitle": "Development and\nOperations Collaboration",
    "subtitle": "DevOps depends on shared responsibility between people who bui...",
    "description": "DevOps depends on shared responsibility between people who build software and those who operate it. IBCS can help clarify ownership for build quality, deployment readiness, monitoring, incident response, and service improvement. Shared working agreements reduce handoff delays and help teams consider operational requirements earlier in development. The goal is not to remove all separation of duties, but to make collaboration and accountability clear. Roles should reflect the organization’s size, risk requirements, and support model.",
    "iconKey": "Users",
    "color": "#0284c7",
    "side": "left"
  },
  {
    "id": 4,
    "step": 4,
    "title": "Continuous Integration Pipeline Design",
    "shortTitle": "Continuous Integration\nPipeline Design",
    "subtitle": "Continuous integration automates repeatable checks whenever co...",
    "description": "Continuous integration automates repeatable checks whenever code changes are submitted or merged. IBCS can help design pipeline stages for source validation, dependency checks, compilation, automated tests, and build artifact creation. Pipelines should provide useful feedback quickly and make failures easy to diagnose. The required checks depend on application risk and technology choices. A successful pipeline run is evidence that configured checks passed, not proof that the software is free from every defect or security weakness.",
    "iconKey": "GitPullRequest",
    "color": "#2563eb",
    "side": "right"
  },
  {
    "id": 5,
    "step": 5,
    "title": "Continuous Delivery and Deployment Strategy",
    "shortTitle": "Continuous Delivery and\nDeployment Strategy",
    "subtitle": "Continuous delivery prepares validated changes for release, wh...",
    "description": "Continuous delivery prepares validated changes for release, while continuous deployment can release qualifying changes automatically under defined controls. IBCS can help select an approach based on testing maturity, service criticality, regulatory needs, and rollback capability. Deployment rules should define which checks must pass and when human approval is required. Automation should not bypass necessary business or security decisions. The selected strategy should balance delivery speed with the consequences of releasing a faulty change.",
    "iconKey": "Send",
    "color": "#0284c7",
    "side": "left"
  },
  {
    "id": 6,
    "step": 6,
    "title": "Source Control and Branching Practices",
    "shortTitle": "Source Control and\nBranching Practices",
    "subtitle": "Source control provides a history of code changes and supports...",
    "description": "Source control provides a history of code changes and supports collaboration, review, and recovery. IBCS can help establish repository organization, branching conventions, pull request expectations, and protected branch rules suited to the team’s workflow. Practices should avoid unnecessary process overhead while ensuring important changes receive appropriate review. Commit history and release tags can support traceability during troubleshooting. Repository permissions and retention should be planned so that source code and associated configuration remain available to authorized maintainers.",
    "iconKey": "GitBranch",
    "color": "#2563eb",
    "side": "right"
  },
  {
    "id": 7,
    "step": 7,
    "title": "Build Automation and Reproducible Artifacts",
    "shortTitle": "Build Automation and\nReproducible Artifacts",
    "subtitle": "Build automation produces application artifacts through a repe...",
    "description": "Build automation produces application artifacts through a repeatable process rather than relying on undocumented local steps. IBCS can help define build dependencies, runtime versions, configuration inputs, and artifact naming or versioning conventions. Reproducibility reduces uncertainty when a release needs to be recreated or investigated. Build environments should avoid embedding secrets and should record enough information to connect an artifact with its source revision. Artifact storage and access controls must match the sensitivity and distribution requirements of the software.",
    "iconKey": "Hammer",
    "color": "#0284c7",
    "side": "left"
  },
  {
    "id": 8,
    "step": 8,
    "title": "Automated Testing in Delivery Pipelines",
    "shortTitle": "Automated Testing in\nDelivery Pipelines",
    "subtitle": "Automated tests can catch regressions and provide repeatable e...",
    "description": "Automated tests can catch regressions and provide repeatable evidence about selected application behavior. IBCS can help integrate unit, integration, API, and other appropriate tests into delivery pipelines. Test suites should be prioritized around critical functionality and maintained as the product evolves. Flaky tests can slow delivery and weaken confidence, so failures need investigation rather than routine dismissal. Automated checks complement exploratory and user acceptance testing; they do not cover every possible environment or user behavior.",
    "iconKey": "CheckCircle2",
    "color": "#2563eb",
    "side": "right"
  },
  {
    "id": 9,
    "step": 9,
    "title": "Quality Gates and Release Criteria",
    "shortTitle": "Quality Gates and\nRelease Criteria",
    "subtitle": "Quality gates define the conditions a change must meet before ...",
    "description": "Quality gates define the conditions a change must meet before moving to the next delivery stage. IBCS can help specify criteria for test results, code review, security findings, performance checks, approvals, and artifact integrity. Gates should be meaningful and consistently applied, with documented exceptions for justified cases. Overly strict or poorly maintained gates can block useful work, while weak gates may allow preventable defects into production. Criteria should be reviewed as application risk and engineering practices change.",
    "iconKey": "ShieldCheck",
    "color": "#0284c7",
    "side": "left"
  },
  {
    "id": 10,
    "step": 10,
    "title": "Pipeline Security and Least Privilege",
    "shortTitle": "Pipeline Security and\nLeast Privilege",
    "subtitle": "Delivery pipelines can access source code, package registries,...",
    "description": "Delivery pipelines can access source code, package registries, cloud environments, signing credentials, and production systems, making them important security boundaries. IBCS can help restrict permissions, separate environments, protect secrets, and limit which workflows can deploy sensitive resources. Pipeline identities should receive only the access needed for their tasks. Logs and approvals should provide useful traceability without exposing credentials. Pipeline security must be reviewed alongside application security because a compromised delivery process can affect many releases.",
    "iconKey": "Lock",
    "color": "#2563eb",
    "side": "right"
  },
  {
    "id": 11,
    "step": 11,
    "title": "Secrets Management for Automation",
    "shortTitle": "Secrets Management\nfor Automation",
    "subtitle": "Automation frequently requires API tokens, passwords, certific...",
    "description": "Automation frequently requires API tokens, passwords, certificates, and other secrets to connect systems. IBCS can help store these values in approved secret-management services or protected pipeline variables instead of source files or build logs. Access should be scoped to specific jobs and rotated when required. Secret exposure procedures should define how credentials are revoked and replaced. Masking in logs is helpful but not sufficient on its own, so scripts and debugging output must also be designed to avoid revealing sensitive values.",
    "iconKey": "Key",
    "color": "#0284c7",
    "side": "left"
  },
  {
    "id": 12,
    "step": 12,
    "title": "Infrastructure as Code Implementation",
    "shortTitle": "Infrastructure as\nCode Implementation",
    "subtitle": "Infrastructure as Code describes infrastructure through versio...",
    "description": "Infrastructure as Code describes infrastructure through version-controlled configuration that can be reviewed and applied repeatedly. IBCS can help structure modules, environment variables, state handling, and approval steps for infrastructure changes. Templates should be reusable without hiding important differences between environments. Automated validation and code review can reduce configuration mistakes, but changes still need testing and rollback planning. State files and credentials require protection, and the code should be maintained as the deployed environment evolves.",
    "iconKey": "FileCode2",
    "color": "#2563eb",
    "side": "right"
  },
  {
    "id": 13,
    "step": 13,
    "title": "Configuration Management and Standardization",
    "shortTitle": "Configuration Management\nand Standardization",
    "subtitle": "Configuration management helps keep operating systems, applica...",
    "description": "Configuration management helps keep operating systems, application runtimes, agents, and supporting services aligned with approved settings. IBCS can help define baselines, automate repeatable configuration tasks, and document approved exceptions. Standardization reduces differences between environments that can otherwise cause deployment failures or inconsistent behavior. Changes should be tested on representative systems before broad application. Configuration automation needs clear ownership and drift checks so that intended settings remain accurate after emergency fixes or manual interventions.",
    "iconKey": "Settings2",
    "color": "#0284c7",
    "side": "left"
  },
  {
    "id": 14,
    "step": 14,
    "title": "Environment Provisioning and Lifecycle Automation",
    "shortTitle": "Environment Provisioning and\nLifecycle Automation",
    "subtitle": "Development, test, staging, and production environments often ...",
    "description": "Development, test, staging, and production environments often need similar resources with different access and capacity settings. IBCS can automate provisioning and retirement so teams can create environments consistently and remove unused resources when they are no longer needed. Lifecycle rules should preserve necessary evidence and data while preventing unnecessary expenditure. Temporary environments need defined owners, expiry dates, and access controls. Automation should include failure handling because partially provisioned environments can leave resources behind or create inconsistent states.",
    "iconKey": "Server",
    "color": "#2563eb",
    "side": "right"
  },
  {
    "id": 15,
    "step": 15,
    "title": "Container Build and Image Management",
    "shortTitle": "Container Build and\nImage Management",
    "subtitle": "Container images package application code and dependencies int...",
    "description": "Container images package application code and dependencies into a consistent unit for deployment. IBCS can help automate image builds, apply version tags, scan components, and manage storage and promotion between environments. Images should be built from trusted sources and rebuilt when important dependencies need updates. Tags alone do not guarantee integrity, so release processes should preserve traceability to source and build configuration. Image retention policies should balance rollback needs, storage costs, and the organization’s security requirements.",
    "iconKey": "Box",
    "color": "#0284c7",
    "side": "left"
  },
  {
    "id": 16,
    "step": 16,
    "title": "Container Orchestration Deployment",
    "shortTitle": "Container Orchestration\nDeployment",
    "subtitle": "Orchestrated container environments need controlled deployment...",
    "description": "Orchestrated container environments need controlled deployment of workloads, configuration, secrets, resource limits, and service routing. IBCS can help automate manifests or deployment definitions and apply validation before changes reach shared clusters. Readiness checks and rollout status should be monitored so traffic is not sent to workloads that cannot serve requests. Access to cluster administration must be restricted. Orchestration automation should account for platform upgrades and compatibility, not just successful deployment of a single application version.",
    "iconKey": "Network",
    "color": "#2563eb",
    "side": "right"
  },
  {
    "id": 17,
    "step": 17,
    "title": "Release Orchestration and Approval Workflow",
    "shortTitle": "Release Orchestration and\nApproval Workflow",
    "subtitle": "Release orchestration coordinates the activities required to m...",
    "description": "Release orchestration coordinates the activities required to move a change into production, including validation, approvals, communication, and post-release checks. IBCS can help define release workflows that reflect service criticality and organizational control requirements. Approval responsibilities should be explicit, and emergency paths should include appropriate after-the-fact review. Release records should identify the version deployed, the person or process authorizing it, and the outcome. A structured workflow reduces uncertainty without making every small change follow unnecessary manual steps.",
    "iconKey": "CheckCheck",
    "color": "#0284c7",
    "side": "left"
  },
  {
    "id": 18,
    "step": 18,
    "title": "Blue-Green Deployment Planning",
    "shortTitle": "Blue-Green Deployment\nPlanning",
    "subtitle": "Blue-green deployment maintains two comparable environments so...",
    "description": "Blue-green deployment maintains two comparable environments so traffic can be switched from the current version to a prepared replacement. IBCS can assess whether this pattern fits the application, data model, infrastructure cost, and rollback requirements. Database changes and external side effects need special attention because switching application traffic may not reverse data changes. Health checks should validate the new environment before traffic moves. The method can reduce release risk, but it requires careful coordination and does not eliminate all deployment failures.",
    "iconKey": "Split",
    "color": "#2563eb",
    "side": "right"
  },
  {
    "id": 19,
    "step": 19,
    "title": "Canary and Progressive Delivery",
    "shortTitle": "Canary and\nProgressive Delivery",
    "subtitle": "Canary delivery introduces a new version to a limited portion ...",
    "description": "Canary delivery introduces a new version to a limited portion of traffic or users before expanding the rollout. IBCS can help define exposure stages, success indicators, monitoring thresholds, and rollback conditions. The approach is most useful when the service can route traffic safely and provide meaningful signals during the evaluation period. Small samples may not reveal every issue, so decisions should account for statistical uncertainty and user impact. Progressive delivery needs reliable observability and a clear owner for rollout decisions.",
    "iconKey": "TrendingUp",
    "color": "#0284c7",
    "side": "left"
  },
  {
    "id": 20,
    "step": 20,
    "title": "Rollback and Release Recovery",
    "shortTitle": "Rollback and\nRelease Recovery",
    "subtitle": "Rollback planning defines how a service can return to a known ...",
    "description": "Rollback planning defines how a service can return to a known working version when a release causes unacceptable problems. IBCS can help document triggers, artifact availability, data compatibility, traffic changes, and responsibilities for recovery. Not every database or external-system change can be reversed safely, so rollback limits should be identified before deployment. Teams should test recovery procedures where feasible and preserve logs needed to investigate the failure. A rollback plan should be practical under pressure, not only documented.",
    "iconKey": "RotateCcw",
    "color": "#2563eb",
    "side": "right"
  },
  {
    "id": 21,
    "step": 21,
    "title": "Feature Flags and Controlled Rollouts",
    "shortTitle": "Feature Flags and\nControlled Rollouts",
    "subtitle": "Feature flags allow selected functionality to be enabled or di...",
    "description": "Feature flags allow selected functionality to be enabled or disabled independently of a full software deployment. IBCS can help plan flag ownership, targeting rules, default behavior, monitoring, and removal of obsolete flags. Flags can reduce release exposure but may create complexity when too many combinations are active. Sensitive controls should not rely solely on client-side flag evaluation. The team should define who can change production flags and how changes are audited, tested, and reversed.",
    "iconKey": "ToggleRight",
    "color": "#0284c7",
    "side": "left"
  },
  {
    "id": 22,
    "step": 22,
    "title": "Database Change Automation",
    "shortTitle": "Database Change\nAutomation",
    "subtitle": "Database changes often require ordering, compatibility checks,...",
    "description": "Database changes often require ordering, compatibility checks, backup considerations, and careful coordination with application releases. IBCS can help automate migration scripts, review steps, validation, and records of applied versions. Changes should be designed to minimize locking or downtime where possible, and destructive operations need explicit safeguards. Application and schema versions may need to coexist during a rolling deployment. Automated database migration should include recovery planning because restoring data is not always equivalent to reverting application code.",
    "iconKey": "Database",
    "color": "#2563eb",
    "side": "right"
  },
  {
    "id": 23,
    "step": 23,
    "title": "Artifact Repository and Version Control",
    "shortTitle": "Artifact Repository and\nVersion Control",
    "subtitle": "An artifact repository stores build outputs such as packages, ...",
    "description": "An artifact repository stores build outputs such as packages, container images, and release bundles for controlled reuse and deployment. IBCS can help establish naming, version retention, access permissions, promotion rules, and traceability to source revisions. Production deployments should use known artifacts rather than rebuild from an unverified workstation. Repository access should be limited to authorized publishing and retrieval roles. Retention policies should preserve required rollback versions while removing obsolete artifacts according to operational and compliance needs.",
    "iconKey": "Archive",
    "color": "#0284c7",
    "side": "left"
  },
  {
    "id": 24,
    "step": 24,
    "title": "Dependency and Supply Chain Automation",
    "shortTitle": "Dependency and Supply\nChain Automation",
    "subtitle": "Software supply chains include package registries, build tools...",
    "description": "Software supply chains include package registries, build tools, plugins, container bases, and other components used to create an application. IBCS can help automate dependency inventory, vulnerability checks, version review, and provenance records within delivery workflows. Findings need contextual triage because an alert does not always mean a component is exploitable in the deployed application. Automated updates should be tested before release. Supply chain controls should cover both direct dependencies and important transitive components that can affect software behavior or security.",
    "iconKey": "Link2",
    "color": "#2563eb",
    "side": "right"
  },
  {
    "id": 25,
    "step": 25,
    "title": "Static Analysis and Code Quality Automation",
    "shortTitle": "Static Analysis and\nCode Quality Automation",
    "subtitle": "Static analysis checks source code for selected patterns, qual...",
    "description": "Static analysis checks source code for selected patterns, quality concerns, and potential defects without executing the application. IBCS can help configure tools, define thresholds, and route findings to the teams responsible for remediation. Rules should fit the language and project rather than produce large volumes of low-value warnings. Findings may include false positives or issues requiring contextual review. Static analysis is one layer of quality assurance and should complement tests, code review, runtime validation, and secure design practices.",
    "iconKey": "Code2",
    "color": "#0284c7",
    "side": "left"
  },
  {
    "id": 26,
    "step": 26,
    "title": "Automated Security Scanning",
    "shortTitle": "Automated Security\nScanning",
    "subtitle": "Security scanning can be integrated into delivery pipelines to...",
    "description": "Security scanning can be integrated into delivery pipelines to identify known dependency vulnerabilities, exposed secrets, unsafe configurations, and selected application weaknesses. IBCS can help decide which checks belong at pull request, build, staging, or release stages. Blocking thresholds should reflect severity and exploitability, with documented exceptions and ownership. Scanners have coverage limits and can produce false positives, so important results need validation. Automated scanning supports a broader security process but does not replace authorized penetration testing or incident readiness.",
    "iconKey": "Shield",
    "color": "#2563eb",
    "side": "right"
  },
  {
    "id": 27,
    "step": 27,
    "title": "Monitoring, Metrics, and Observability",
    "shortTitle": "Monitoring, Metrics,\nand Observability",
    "subtitle": "Observability helps teams infer system behavior from metrics, ...",
    "description": "Observability helps teams infer system behavior from metrics, logs, traces, and contextual events. IBCS can help instrument services, define useful service indicators, and connect telemetry to dashboards and alerts. Signals should reflect user-visible outcomes as well as infrastructure utilization. Excessive telemetry can increase cost and make important events harder to find, so collection should be purposeful. Teams need clear responsibility for reviewing alerts and responding to degradation, and instrumentation should avoid unnecessary sensitive data.",
    "iconKey": "Activity",
    "color": "#0284c7",
    "side": "left"
  },
  {
    "id": 28,
    "step": 28,
    "title": "Alert Routing and On-Call Workflow",
    "shortTitle": "Alert Routing and\nOn-Call Workflow",
    "subtitle": "Alerts are useful only when they reach someone who can interpr...",
    "description": "Alerts are useful only when they reach someone who can interpret and act on them. IBCS can help define severity levels, routing rules, escalation paths, acknowledgement expectations, and handover procedures for supported services. Alert thresholds should be tuned to reduce noise while preserving visibility into important failures. On-call duties require realistic staffing and clear access to runbooks. An alerting system should be tested periodically, including after contact details or team responsibilities change.",
    "iconKey": "BellRing",
    "color": "#2563eb",
    "side": "right"
  },
  {
    "id": 29,
    "step": 29,
    "title": "Site Reliability Engineering Practices",
    "shortTitle": "Site Reliability\nEngineering Practices",
    "subtitle": "Site reliability engineering applies engineering methods to se...",
    "description": "Site reliability engineering applies engineering methods to service reliability, including service-level indicators, error budgets, automation, and learning from incidents. IBCS can help teams select measures that reflect user experience and define how reliability work competes with feature delivery. Targets should be realistic and based on service purpose rather than copied without context. Reliability practices also require ownership and review of recurring failures. They help structure decisions but cannot remove the need for operational judgment and investment.",
    "iconKey": "HeartPulse",
    "color": "#0284c7",
    "side": "left"
  },
  {
    "id": 30,
    "step": 30,
    "title": "Incident Management Automation",
    "shortTitle": "Incident Management\nAutomation",
    "subtitle": "Incident management automation can collect alerts, create reco...",
    "description": "Incident management automation can collect alerts, create records, notify responsible teams, and guide responders through standard steps. IBCS can help automate repeatable tasks while keeping human approval for actions that may affect availability, data, or access. Workflows should preserve timestamps, decisions, and links to relevant telemetry. Automated actions need safeguards against duplicate triggers and incorrect classification. The process should be exercised so responders understand what the system will do and how to take control when an automation fails.",
    "iconKey": "AlertTriangle",
    "color": "#2563eb",
    "side": "right"
  },
  {
    "id": 31,
    "step": 31,
    "title": "Runbook Automation",
    "shortTitle": "Runbook Automation",
    "subtitle": "Runbooks document repeatable operational tasks such as checkin...",
    "description": "Runbooks document repeatable operational tasks such as checking service health, rotating credentials, clearing a safe cache, or collecting diagnostic information. IBCS can help convert suitable runbook steps into controlled automation with input validation, permission boundaries, logging, and failure handling. Not every procedure should be automated, particularly when context-sensitive judgment is required. Each runbook needs an owner and review cycle. Automated procedures should be tested in a safe environment and include a clear method to stop or recover from unexpected behavior.",
    "iconKey": "BookOpen",
    "color": "#0284c7",
    "side": "left"
  },
  {
    "id": 32,
    "step": 32,
    "title": "Scheduled Jobs and Workflow Automation",
    "shortTitle": "Scheduled Jobs and\nWorkflow Automation",
    "subtitle": "Scheduled jobs automate routine activities such as report gene...",
    "description": "Scheduled jobs automate routine activities such as report generation, data synchronization, maintenance checks, and housekeeping. IBCS can help define schedules, dependencies, retry rules, time-zone handling, failure notifications, and execution limits. Jobs should be idempotent where practical so a retry does not create duplicate side effects. Ownership and expected completion times should be documented. Monitoring should identify missed or delayed runs, and schedules should be reviewed when upstream systems or business calendars change.",
    "iconKey": "Clock",
    "color": "#2563eb",
    "side": "right"
  },
  {
    "id": 33,
    "step": 33,
    "title": "Robotic Process Automation Suitability",
    "shortTitle": "Robotic Process\nAutomation Suitability",
    "subtitle": "Robotic process automation can handle certain repetitive tasks...",
    "description": "Robotic process automation can handle certain repetitive tasks performed through user interfaces or established business applications. IBCS can help assess whether a workflow is stable, rule-based, measurable, and suitable for automation. Processes that depend on frequent visual changes or complex human judgment may be poor candidates. Access permissions, exception handling, audit records, and maintenance ownership need to be defined. Process redesign or a direct API integration may be more reliable than automating clicks, so alternatives should be compared before implementation.",
    "iconKey": "Bot",
    "color": "#0284c7",
    "side": "left"
  },
  {
    "id": 34,
    "step": 34,
    "title": "Workflow Integration and Event Automation",
    "shortTitle": "Workflow Integration and\nEvent Automation",
    "subtitle": "Event-driven automation responds to defined changes such as a ...",
    "description": "Event-driven automation responds to defined changes such as a new record, a completed build, a monitoring alert, or an approved request. IBCS can help connect systems through APIs, queues, webhooks, or workflow tools where appropriate. The design should address duplicate events, delivery failures, ordering, authentication, and retry behavior. Event payloads may contain sensitive data and need appropriate protection. Clear ownership and monitoring help teams identify when an automated chain stops midway or produces an unexpected result.",
    "iconKey": "Workflow",
    "color": "#2563eb",
    "side": "right"
  },
  {
    "id": 35,
    "step": 35,
    "title": "Configuration Drift and Policy Enforcement",
    "shortTitle": "Configuration Drift and\nPolicy Enforcement",
    "subtitle": "Configuration drift occurs when actual environments diverge fr...",
    "description": "Configuration drift occurs when actual environments diverge from approved definitions or baselines. IBCS can help automate drift detection and, where safe, apply corrective actions under controlled policies. Automatic correction should be limited to well-understood settings because overwriting a legitimate emergency change can create a new outage. Exceptions should be recorded with an owner and expiry or review date. Drift workflows are most effective when integrated with source control, change management, and alerting rather than treated as an isolated scanner.",
    "iconKey": "Scale",
    "color": "#0284c7",
    "side": "left"
  },
  {
    "id": 36,
    "step": 36,
    "title": "Environment Parity and Configuration Separation",
    "shortTitle": "Environment Parity and\nConfiguration Separation",
    "subtitle": "Development, test, staging, and production environments should...",
    "description": "Development, test, staging, and production environments should be similar enough to reveal defects while remaining appropriately separated. IBCS can help manage environment-specific configuration, feature settings, access permissions, and service dependencies through repeatable processes. Secrets and production data should not be copied into lower environments without an approved protection plan. Environment parity does not mean identical permissions or capacity; differences should be deliberate and documented. Clear separation reduces accidental production changes and improves confidence in pre-release testing.",
    "iconKey": "CopyCheck",
    "color": "#2563eb",
    "side": "right"
  },
  {
    "id": 37,
    "step": 37,
    "title": "Deployment Documentation and Change Records",
    "shortTitle": "Deployment Documentation and\nChange Records",
    "subtitle": "Deployment records help teams identify what changed, when it c...",
    "description": "Deployment records help teams identify what changed, when it changed, who or what initiated it, and how the service behaved afterward. IBCS can automate release notes, version references, change identifiers, and links to test evidence where source systems support them. Records should be useful during incidents and audits without becoming a burden that teams bypass. Automated documentation needs validation because generated summaries may omit important context. The organization should define which information is mandatory for each type of release.",
    "iconKey": "BookMarked",
    "color": "#0284c7",
    "side": "left"
  },
  {
    "id": 38,
    "step": 38,
    "title": "Pipeline Performance and Reliability",
    "shortTitle": "Pipeline Performance\nand Reliability",
    "subtitle": "Slow or unreliable pipelines delay feedback and encourage team...",
    "description": "Slow or unreliable pipelines delay feedback and encourage teams to bypass safeguards. IBCS can help measure queue time, build duration, test duration, failure rates, and recurring bottlenecks. Improvements may include caching dependencies, parallelizing independent checks, improving test stability, or adjusting runner capacity. Speed should not come at the cost of removing essential validation. Pipeline changes need measurement before and after implementation so teams can verify whether they improved throughput and preserved confidence in release quality.",
    "iconKey": "Gauge",
    "color": "#2563eb",
    "side": "right"
  },
  {
    "id": 39,
    "step": 39,
    "title": "Developer Self-Service and Platform Engineering",
    "shortTitle": "Developer Self-Service and\nPlatform Engineering",
    "subtitle": "Developer self-service allows teams to request approved enviro...",
    "description": "Developer self-service allows teams to request approved environments, templates, and deployment capabilities without waiting for every routine task to be handled manually. IBCS can help define reusable platform patterns, documentation, access boundaries, and support routes that make self-service safe and understandable. Standard templates should offer useful defaults while allowing justified variation. A self-service portal is not successful merely because it exists; adoption, reliability, and developer experience should be evaluated. Platform ownership and maintenance need explicit assignment.",
    "iconKey": "Sparkles",
    "color": "#0284c7",
    "side": "left"
  },
  {
    "id": 40,
    "step": 40,
    "title": "Automation Governance and Auditability",
    "shortTitle": "Automation Governance\nand Auditability",
    "subtitle": "Automation can amplify both correct actions and mistakes, so i...",
    "description": "Automation can amplify both correct actions and mistakes, so its permissions, triggers, and outcomes need oversight. IBCS can help establish approval thresholds, logging, ownership, version control, and periodic review for important workflows. High-impact actions should include safeguards against accidental execution and unauthorized changes. Audit records should capture enough information to reconstruct what occurred while protecting sensitive data. Governance should be proportionate to risk, ensuring that routine low-impact tasks remain efficient while critical actions receive appropriate control.",
    "iconKey": "Award",
    "color": "#2563eb",
    "side": "right"
  },
  {
    "id": 41,
    "step": 41,
    "title": "Disaster Recovery Automation",
    "shortTitle": "Disaster Recovery\nAutomation",
    "subtitle": "Disaster recovery automation can accelerate repeatable restora...",
    "description": "Disaster recovery automation can accelerate repeatable restoration tasks when infrastructure or applications fail. IBCS can help automate approved provisioning, configuration, validation, and notification steps while preserving human decisions for high-impact actions. Recovery scripts should be versioned, access-controlled, and tested against realistic failure scenarios. Dependencies such as identity services, keys, network access, and backup availability must be considered. A successful script execution is not proof of business recovery; restored services and data must be validated against agreed objectives.",
    "iconKey": "RefreshCcw",
    "color": "#0284c7",
    "side": "left"
  },
  {
    "id": 42,
    "step": 42,
    "title": "Cloud-Native Delivery Patterns",
    "shortTitle": "Cloud-Native Delivery\nPatterns",
    "subtitle": "Cloud-native delivery may use managed services, containers, ev...",
    "description": "Cloud-native delivery may use managed services, containers, event-driven functions, automated infrastructure, and service-oriented architectures. IBCS can help choose patterns that fit the workload rather than applying them as a trend. Distributed designs introduce additional needs for service discovery, telemetry, failure handling, and version compatibility. The team should consider operational skills and total cost before adopting more components. A cloud-native approach is valuable when it improves delivery or operating outcomes that matter to the organization.",
    "iconKey": "CloudLightning",
    "color": "#2563eb",
    "side": "right"
  },
  {
    "id": 43,
    "step": 43,
    "title": "Release Metrics and Continuous Improvement",
    "shortTitle": "Release Metrics and\nContinuous Improvement",
    "subtitle": "Release metrics help teams understand whether delivery is beco...",
    "description": "Release metrics help teams understand whether delivery is becoming more frequent, predictable, and recoverable. IBCS can help define measures such as deployment frequency, change lead time, failed-change rate, and time to restore service, using consistent definitions. Metrics should be interpreted together and in context; optimizing one number can create unwanted behavior elsewhere. The purpose is to identify bottlenecks and improve the system, not to rank individuals. Reviews should lead to specific experiments and follow-up measurements.",
    "iconKey": "LineChart",
    "color": "#0284c7",
    "side": "left"
  },
  {
    "id": 44,
    "step": 44,
    "title": "DevOps Documentation and Knowledge Transfer",
    "shortTitle": "DevOps Documentation and\nKnowledge Transfer",
    "subtitle": "Effective DevOps practices need documentation that explains ho...",
    "description": "Effective DevOps practices need documentation that explains how pipelines, environments, releases, monitoring, and recovery procedures actually work. IBCS can prepare architecture notes, pipeline diagrams, operating runbooks, access requirements, and troubleshooting guidance within the agreed scope. Knowledge transfer should give internal teams an opportunity to practice routine tasks and ask questions. Credentials must be transferred securely, and documentation should match the delivered implementation. Clear ownership ensures that instructions remain current after tools and workflows change.",
    "iconKey": "GraduationCap",
    "color": "#2563eb",
    "side": "right"
  },
  {
    "id": 45,
    "step": 45,
    "title": "Ongoing DevOps Optimization",
    "shortTitle": "Ongoing DevOps\nOptimization",
    "subtitle": "DevOps capabilities should evolve as applications, teams, rele...",
    "description": "DevOps capabilities should evolve as applications, teams, release patterns, and operational risks change. IBCS can support periodic reviews of pipeline reliability, deployment outcomes, automation coverage, alert quality, and recurring manual effort. Improvements should be prioritized by user impact, risk, and measurable benefit rather than by tool adoption alone. Each change needs an owner and a way to evaluate results. Continuous optimization helps keep delivery practices maintainable and secure as the organization’s technology environment grows.",
    "iconKey": "Target",
    "color": "#0284c7",
    "side": "left"
  }
];
