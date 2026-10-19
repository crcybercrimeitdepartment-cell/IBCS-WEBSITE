/**
 * IBCS IT Services - Card 09: IT Infrastructure Management Services
 * Extracted directly from: IBCS_IT_Services_Card_09_IT_Infrastructure_Management_Services.docx
 * Total Capabilities: 48 Enterprise Infrastructure Service Capabilities
 */

export const INFRASTRUCTURE_OVERVIEW = {
  company: "IBCS IT SERVICES",
  card: "CARD 09 — IT INFRASTRUCTURE MANAGEMENT SERVICES",
  subtitle: "Service Scope and Capability Overview",
  title: "IT Infrastructure Management Services",
  intro: "IBCS IT Infrastructure Management focuses on coordinating and maintaining the technology resources that support everyday organisational operations. From servers and systems to infrastructure monitoring and lifecycle planning, our approach aims to improve operational visibility, reliability, and technology resource management.",
  totalCount: 48,
  ctaText: "Explore Full Scope"
};

export const IT_INFRASTRUCTURE_OVERVIEW = INFRASTRUCTURE_OVERVIEW;

export const INFRASTRUCTURE_SERVICES = [
  {
    "id": 1,
    "step": 1,
    "title": "IT Infrastructure Assessment",
    "shortTitle": "IT Infrastructure Assessment",
    "subtitle": "IBCS can help review an organisation’s IT infrastructure to understand...",
    "description": "IBCS can help review an organisation’s IT infrastructure to understand its current assets, dependencies, support arrangements, and operational requirements. The assessment may cover servers, endpoints, storage, virtualisation, connectivity, facilities, and management tools. Findings can be organised by business impact, urgency, and implementation effort, giving stakeholders a practical view of current constraints and improvement opportunities without assuming that every environment requires the same technology or design.",
    "iconKey": "ClipboardCheck",
    "color": "#0284c7",
    "side": "left"
  },
  {
    "id": 2,
    "step": 2,
    "title": "Infrastructure Architecture and Roadmap",
    "shortTitle": "Infrastructure Architecture and Roadmap",
    "subtitle": "IBCS can support the development of an infrastructure architecture and...",
    "description": "IBCS can support the development of an infrastructure architecture and roadmap aligned with business priorities, workload requirements, expected growth, and operational capacity. The work may define platform standards, service dependencies, lifecycle priorities, resilience objectives, and implementation stages. Recommendations should document assumptions, alternatives, risks, and dependencies so decision-makers can evaluate cost and complexity alongside performance, maintainability, and service continuity.",
    "iconKey": "FolderTree",
    "color": "#059669",
    "side": "left"
  },
  {
    "id": 3,
    "step": 3,
    "title": "Server Infrastructure Planning",
    "shortTitle": "Server Infrastructure Planning",
    "subtitle": "IBCS can assist with planning server infrastructure for approved busin...",
    "description": "IBCS can assist with planning server infrastructure for approved business applications and internal services. Activities may include workload sizing, processor and memory requirements, storage connectivity, network dependencies, operating-system compatibility, and support lifecycle review. The design should account for expected utilisation and future demand while avoiding unnecessary overprovisioning. Implementation and acceptance criteria can be documented before equipment or hosting resources are commissioned.",
    "iconKey": "Server",
    "color": "#7c3aed",
    "side": "left"
  },
  {
    "id": 4,
    "step": 4,
    "title": "Physical Server Deployment",
    "shortTitle": "Physical Server Deployment",
    "subtitle": "IBCS can support the planning and coordination of physical server depl...",
    "description": "IBCS can support the planning and coordination of physical server deployment where on-premises hardware is appropriate. Scope may include rack placement, power and cooling dependencies, management interfaces, network connections, asset recording, and installation sequencing. Qualified facilities or hardware personnel should handle tasks requiring specialist authorisation. Deployment records should identify the installed configuration and outstanding dependencies to support reliable ongoing operations.",
    "iconKey": "Boxes",
    "color": "#d97706",
    "side": "left"
  },
  {
    "id": 5,
    "step": 5,
    "title": "Virtualisation Platform Management",
    "shortTitle": "Virtualisation Platform Management",
    "subtitle": "IBCS can help assess and manage virtualisation platforms used to host...",
    "description": "IBCS can help assess and manage virtualisation platforms used to host approved workloads. Work may include host capacity, virtual machine sizing, resource allocation, cluster design, storage access, network mapping, and platform lifecycle considerations. Changes should follow documented procedures and consider workload dependencies. Capacity and utilisation reviews can help identify contention, stranded resources, and opportunities to improve platform efficiency without compromising service requirements.",
    "iconKey": "Layers",
    "color": "#2563eb",
    "side": "left"
  },
  {
    "id": 6,
    "step": 6,
    "title": "Operating System Administration",
    "shortTitle": "Operating System Administration",
    "subtitle": "IBCS can support the administration of approved server operating syste...",
    "description": "IBCS can support the administration of approved server operating systems through documented configuration, account management coordination, service checks, patch planning, and routine maintenance. The precise scope depends on the operating systems, access permissions, support model, and organisational policies in place. Administrative actions should be logged where required, and configuration changes should be reviewed for compatibility with hosted applications and infrastructure dependencies.",
    "iconKey": "Monitor",
    "color": "#0284c7",
    "side": "right"
  },
  {
    "id": 7,
    "step": 7,
    "title": "Endpoint Infrastructure Management",
    "shortTitle": "Endpoint Infrastructure Management",
    "subtitle": "IBCS can help organisations structure endpoint infrastructure practice...",
    "description": "IBCS can help organisations structure endpoint infrastructure practices for desktops, laptops, and other approved computing devices. Activities may include device inventory, standard build definitions, deployment coordination, update scheduling, configuration baselines, and lifecycle tracking. Endpoint management should reflect user roles and operational needs, with exceptions recorded and approved. Consistent processes can reduce setup variation and improve supportability across teams and locations.",
    "iconKey": "Laptop",
    "color": "#059669",
    "side": "right"
  },
  {
    "id": 8,
    "step": 8,
    "title": "Storage Capacity Planning",
    "shortTitle": "Storage Capacity Planning",
    "subtitle": "IBCS can support storage planning by reviewing capacity, growth trends...",
    "description": "IBCS can support storage planning by reviewing capacity, growth trends, performance requirements, retention needs, and workload characteristics. Recommendations may address storage tiers, allocation methods, expansion thresholds, and monitoring. The appropriate design depends on data criticality, application behaviour, budget, and recovery objectives. Regular capacity reviews can help teams plan upgrades before shortages affect production services or create unplanned procurement pressure.",
    "iconKey": "HardDrive",
    "color": "#7c3aed",
    "side": "right"
  },
  {
    "id": 9,
    "step": 9,
    "title": "Storage Performance and Health Monitoring",
    "shortTitle": "Storage Performance and Health Monitoring",
    "subtitle": "IBCS can help define monitoring for storage availability, utilisation,...",
    "description": "IBCS can help define monitoring for storage availability, utilisation, latency, throughput, error conditions, and hardware health where supported by the platform. Alerts should reflect service criticality and normal workload patterns. Review of trends and incident history can help distinguish persistent capacity issues from short-term workload peaks, allowing corrective actions to be prioritised and storage performance to be evaluated in relation to the applications that depend on it.",
    "iconKey": "Activity",
    "color": "#d97706",
    "side": "right"
  },
  {
    "id": 10,
    "step": 10,
    "title": "Backup Architecture and Scheduling",
    "shortTitle": "Backup Architecture and Scheduling",
    "subtitle": "IBCS can assist with designing backup schedules and coverage for appro...",
    "description": "IBCS can assist with designing backup schedules and coverage for approved systems, application data, and configuration assets. Planning may consider recovery objectives, data change rates, retention periods, available bandwidth, storage capacity, and business operating hours. Backup status should be monitored, failures investigated, and responsibilities clearly assigned. A defined schedule provides a repeatable starting point for protecting data, but its effectiveness must be verified through recovery testing.",
    "iconKey": "Archive",
    "color": "#2563eb",
    "side": "right"
  },
  {
    "id": 11,
    "step": 11,
    "title": "Backup Restoration Testing",
    "shortTitle": "Backup Restoration Testing",
    "subtitle": "IBCS can help establish controlled restoration tests to confirm that s...",
    "description": "IBCS can help establish controlled restoration tests to confirm that selected files, systems, or application components can be recovered from available backups. Test plans should identify scope, prerequisites, success criteria, validation owners, and any production safeguards. Results should record recovery duration, data consistency, and gaps discovered. Regular testing helps identify issues in backup coverage or procedures before a real incident makes recovery urgent.",
    "iconKey": "RefreshCcw",
    "color": "#0284c7",
    "side": "left"
  },
  {
    "id": 12,
    "step": 12,
    "title": "Disaster Recovery Infrastructure",
    "shortTitle": "Disaster Recovery Infrastructure",
    "subtitle": "IBCS can support infrastructure planning for disaster recovery based o...",
    "description": "IBCS can support infrastructure planning for disaster recovery based on agreed business recovery priorities and technical dependencies. Work may cover alternate compute capacity, storage copies, network connectivity, access requirements, configuration restoration, and recovery sequencing. The design should distinguish documented objectives from capabilities that have been tested. Provider limits, data replication constraints, and operational responsibilities should be recorded so stakeholders can make realistic continuity decisions.",
    "iconKey": "ShieldCheck",
    "color": "#059669",
    "side": "left"
  },
  {
    "id": 13,
    "step": 13,
    "title": "High Availability for Critical Services",
    "shortTitle": "High Availability for Critical Services",
    "subtitle": "IBCS can help evaluate high-availability options for infrastructure se...",
    "description": "IBCS can help evaluate high-availability options for infrastructure services that have defined continuity requirements. Depending on the platform, this may involve clustering, redundant components, service replication, or alternate infrastructure paths. Design choices should consider failure scenarios, dependencies, maintenance overhead, and recovery behaviour. Testing and operational documentation are important to establish whether the proposed approach meets the organisation’s agreed availability expectations.",
    "iconKey": "Cpu",
    "color": "#7c3aed",
    "side": "left"
  },
  {
    "id": 14,
    "step": 14,
    "title": "Cloud Infrastructure Assessment",
    "shortTitle": "Cloud Infrastructure Assessment",
    "subtitle": "IBCS can help assess cloud infrastructure needs by reviewing workload...",
    "description": "IBCS can help assess cloud infrastructure needs by reviewing workload suitability, operating requirements, dependencies, security responsibilities, expected consumption, and existing platform constraints. The assessment may compare migration, hybrid, and continued on-premises options where relevant. Recommendations should account for data location requirements, integration effort, service resilience, and ongoing operating costs, rather than assuming that moving every workload to the cloud is automatically beneficial.",
    "iconKey": "Cloud",
    "color": "#d97706",
    "side": "left"
  },
  {
    "id": 15,
    "step": 15,
    "title": "Operational Cloud Resource Provisioning",
    "shortTitle": "Operational Cloud Resource Provisioning",
    "subtitle": "IBCS can support routine provisioning of approved cloud resources with...",
    "description": "IBCS can support routine provisioning of approved cloud resources within an established operational environment. Activities may include applying standard templates, assigning resource tags, configuring monitoring, checking policy compliance, recording ownership, and confirming that resources are connected to the correct network and identity controls. Requests should follow the organisation’s change and approval process. This operational focus helps keep environments consistent and supportable; commercial purchasing, supplier selection, and procurement approvals belong to the relevant procurement process.",
    "iconKey": "CloudLightning",
    "color": "#2563eb",
    "side": "left"
  },
  {
    "id": 16,
    "step": 16,
    "title": "Cloud Cost and Resource Optimisation",
    "shortTitle": "Cloud Cost and Resource Optimisation",
    "subtitle": "IBCS can help review cloud resource utilisation and spending patterns...",
    "description": "IBCS can help review cloud resource utilisation and spending patterns to identify potential rightsizing, scheduling, storage lifecycle, or architecture improvements. Recommendations should consider workload variability, service-level requirements, resilience, and operational effort. Cost optimisation should not remove resources solely because they appear idle during a limited observation period. Findings can be prioritised by likely benefit and risk, then reviewed against actual usage after changes are made.",
    "iconKey": "DollarSign",
    "color": "#0284c7",
    "side": "right"
  },
  {
    "id": 17,
    "step": 17,
    "title": "Hybrid Infrastructure Integration",
    "shortTitle": "Hybrid Infrastructure Integration",
    "subtitle": "IBCS can support planning for environments that combine on-premises sy...",
    "description": "IBCS can support planning for environments that combine on-premises systems with cloud services. Integration may involve identity dependencies, name resolution, routing, data movement, monitoring, access governance, and application connectivity. Responsibilities should be clear across internal teams and providers. A documented hybrid design helps teams understand which service owns each dependency and how a fault in one environment may affect workloads in another.",
    "iconKey": "Share2",
    "color": "#059669",
    "side": "right"
  },
  {
    "id": 18,
    "step": 18,
    "title": "Container Platform Infrastructure",
    "shortTitle": "Container Platform Infrastructure",
    "subtitle": "IBCS can help evaluate infrastructure requirements for container-based...",
    "description": "IBCS can help evaluate infrastructure requirements for container-based workloads, including compute capacity, cluster networking, persistent storage, image access, monitoring, and platform maintenance. The solution should reflect application architecture, deployment practices, and team capability. Where orchestration platforms are used, operational responsibilities for upgrades, access, availability, and recovery should be documented so the infrastructure remains supportable beyond initial deployment.",
    "iconKey": "Box",
    "color": "#7c3aed",
    "side": "right"
  },
  {
    "id": 19,
    "step": 19,
    "title": "Infrastructure as Code Planning",
    "shortTitle": "Infrastructure as Code Planning",
    "subtitle": "IBCS can support infrastructure-as-code practices where platform APIs...",
    "description": "IBCS can support infrastructure-as-code practices where platform APIs and organisational workflows allow infrastructure to be defined and reviewed as version-controlled configuration. Scope may include reusable templates, environment parameters, review procedures, state management, and controlled deployment permissions. Changes should be tested and traceable, with secrets handled through approved mechanisms. The goal is repeatable provisioning and clearer change history, not automation without governance.",
    "iconKey": "GitBranch",
    "color": "#d97706",
    "side": "right"
  },
  {
    "id": 20,
    "step": 20,
    "title": "Configuration and Baseline Management",
    "shortTitle": "Configuration and Baseline Management",
    "subtitle": "IBCS can help define and maintain infrastructure configuration baselin...",
    "description": "IBCS can help define and maintain infrastructure configuration baselines for supported systems and platforms. Baselines may cover approved versions, core settings, service dependencies, access roles, monitoring requirements, and required documentation. Periodic comparison against the live environment can reveal drift or undocumented changes. Exceptions should be recorded and reviewed so operational flexibility does not undermine consistency or complicate incident recovery.",
    "iconKey": "Sliders",
    "color": "#2563eb",
    "side": "right"
  },
  {
    "id": 21,
    "step": 21,
    "title": "Patch and Update Management",
    "shortTitle": "Patch and Update Management",
    "subtitle": "IBCS can assist with planning infrastructure patches and updates accor...",
    "description": "IBCS can assist with planning infrastructure patches and updates according to vendor guidance, risk, compatibility, and maintenance windows. Activities may include asset scoping, dependency checks, test sequencing, stakeholder notification, backup confirmation, and post-update validation. Urgent updates may require an expedited process defined by the organisation. Recording outcomes and exceptions helps maintain visibility into patch status and supports future lifecycle planning.",
    "iconKey": "Wrench",
    "color": "#0284c7",
    "side": "left"
  },
  {
    "id": 22,
    "step": 22,
    "title": "Infrastructure Monitoring and Alerting",
    "shortTitle": "Infrastructure Monitoring and Alerting",
    "subtitle": "IBCS can help establish monitoring for infrastructure availability, re...",
    "description": "IBCS can help establish monitoring for infrastructure availability, resource utilisation, service health, hardware status, and key dependencies. Alert thresholds should be tuned to distinguish actionable conditions from routine variation. Dashboards and escalation paths can be aligned with service criticality and support responsibilities. Monitoring coverage should be reviewed after changes so new systems and dependencies are not left outside the operational view.",
    "iconKey": "BellRing",
    "color": "#059669",
    "side": "left"
  },
  {
    "id": 23,
    "step": 23,
    "title": "Centralised Logging and Event Management",
    "shortTitle": "Centralised Logging and Event Management",
    "subtitle": "IBCS can support infrastructure logging practices that collect relevan...",
    "description": "IBCS can support infrastructure logging practices that collect relevant events from approved servers, platforms, and management systems. Work may define sources, time synchronisation, access permissions, retention, alert rules, and ownership for investigation. Collection should follow the organisation’s privacy, security, and data-handling requirements. Clear event records can help operations teams correlate failures and understand changes across multiple infrastructure components.",
    "iconKey": "FileText",
    "color": "#7c3aed",
    "side": "left"
  },
  {
    "id": 24,
    "step": 24,
    "title": "Infrastructure Performance and Capacity Analysis",
    "shortTitle": "Infrastructure Performance and Capacity Analysis",
    "subtitle": "IBCS can help review processor, memory, storage, network, and service-...",
    "description": "IBCS can help review processor, memory, storage, network, and service-level measurements to understand performance and forecast future capacity. Analysis may compare busy periods, growth trends, workload changes, and known incidents. Recommendations should be based on available evidence and identify any measurement limitations. A capacity plan can help stakeholders choose between tuning, scaling, reallocation, and replacement before constraints materially affect users.",
    "iconKey": "LineChart",
    "color": "#d97706",
    "side": "left"
  },
  {
    "id": 25,
    "step": 25,
    "title": "Infrastructure Incident Troubleshooting",
    "shortTitle": "Infrastructure Incident Troubleshooting",
    "subtitle": "IBCS can support structured troubleshooting of infrastructure incident...",
    "description": "IBCS can support structured troubleshooting of infrastructure incidents by gathering timelines, symptoms, monitoring data, recent changes, and service dependencies. Investigation may involve isolating whether an issue relates to compute, storage, operating systems, virtualisation, connectivity, or an upstream provider. Findings should distinguish confirmed causes from working hypotheses, record corrective actions, and identify follow-up work needed to reduce recurrence.",
    "iconKey": "Zap",
    "color": "#2563eb",
    "side": "left"
  },
  {
    "id": 26,
    "step": 26,
    "title": "Root-Cause Analysis and Problem Management",
    "shortTitle": "Root-Cause Analysis and Problem Management",
    "subtitle": "IBCS can help document root-cause analysis for recurring infrastructur...",
    "description": "IBCS can help document root-cause analysis for recurring infrastructure problems, using incident evidence and relevant change history. Reports may describe the impact, contributing factors, detection gaps, corrective measures, and preventive actions. The process should avoid assigning cause without sufficient evidence and should track actions to completion. Problem records can reveal patterns that are not obvious when incidents are handled individually.",
    "iconKey": "Target",
    "color": "#0284c7",
    "side": "right"
  },
  {
    "id": 27,
    "step": 27,
    "title": "Infrastructure Asset Inventory",
    "shortTitle": "Infrastructure Asset Inventory",
    "subtitle": "IBCS can help maintain an inventory of infrastructure assets, includin...",
    "description": "IBCS can help maintain an inventory of infrastructure assets, including identifiers, location, ownership, platform version, support status, dependencies, and lifecycle dates. Records should be reconciled with the deployed environment and updated when assets are added, moved, replaced, or retired. Reliable inventory supports support escalation, procurement planning, maintenance scheduling, risk reviews, and an accurate understanding of the organisation’s technology footprint.",
    "iconKey": "PackageCheck",
    "color": "#059669",
    "side": "right"
  },
  {
    "id": 28,
    "step": 28,
    "title": "IT Asset Lifecycle Management",
    "shortTitle": "IT Asset Lifecycle Management",
    "subtitle": "IBCS can support lifecycle processes for infrastructure assets from re...",
    "description": "IBCS can support lifecycle processes for infrastructure assets from requirements and acquisition through deployment, maintenance, refresh, and retirement. Planning may include warranty or support dates, replacement priorities, compatibility, disposal coordination, and records retention. The organisation’s procurement, finance, and data-handling policies should govern approvals and retirement. A lifecycle view helps avoid unsupported equipment remaining in service without a documented decision.",
    "iconKey": "TrendingUp",
    "color": "#7c3aed",
    "side": "right"
  },
  {
    "id": 29,
    "step": 29,
    "title": "Infrastructure Documentation and Diagrams",
    "shortTitle": "Infrastructure Documentation and Diagrams",
    "subtitle": "IBCS can help prepare and maintain infrastructure diagrams, inventorie...",
    "description": "IBCS can help prepare and maintain infrastructure diagrams, inventories, dependency maps, configuration references, operating procedures, and recovery instructions. Documentation should reflect the actual deployed environment, use consistent naming, and identify an owner for future updates. Access to sensitive details should be controlled where appropriate. Accurate documentation helps teams assess change impact, onboard support personnel, and respond more efficiently when a service fails.",
    "iconKey": "FileText",
    "color": "#d97706",
    "side": "right"
  },
  {
    "id": 30,
    "step": 30,
    "title": "Data Centre and Server Room Coordination",
    "shortTitle": "Data Centre and Server Room Coordination",
    "subtitle": "IBCS can assist with the IT planning aspects of server rooms and data-...",
    "description": "IBCS can assist with the IT planning aspects of server rooms and data-centre environments, including equipment layout, connectivity, rack allocation, monitoring, and operational dependencies. Power, cooling, fire protection, and physical safety arrangements require coordination with qualified facilities personnel and relevant standards. Infrastructure records should capture the agreed layout and support contacts so maintenance can be coordinated without relying on informal knowledge.",
    "iconKey": "Server",
    "color": "#2563eb",
    "side": "right"
  },
  {
    "id": 31,
    "step": 31,
    "title": "Power and Environmental Monitoring Coordination",
    "shortTitle": "Power and Environmental Monitoring Coordination",
    "subtitle": "IBCS can help identify infrastructure monitoring needs related to supp...",
    "description": "IBCS can help identify infrastructure monitoring needs related to supported power systems, temperature, humidity, and environmental alerts in server rooms or data centres. The scope may include alert routing, ownership, escalation, and correlation with equipment availability. Facilities specialists should define and maintain building systems and safety controls. Clear coordination helps IT teams understand environmental risks that may affect service continuity.",
    "iconKey": "Thermometer",
    "color": "#0284c7",
    "side": "left"
  },
  {
    "id": 32,
    "step": 32,
    "title": "Infrastructure Access and Privilege Coordination",
    "shortTitle": "Infrastructure Access and Privilege Coordination",
    "subtitle": "IBCS can support the infrastructure side of access administration by h...",
    "description": "IBCS can support the infrastructure side of access administration by helping define administrative roles, account ownership, approval workflows, and periodic access reviews. Implementation should align with the organisation’s identity, security, and separation-of-duties policies. Privileged access should be limited to authorised personnel and handled through approved tools and processes. Clear records can improve accountability and reduce confusion during staff or vendor changes.",
    "iconKey": "Lock",
    "color": "#059669",
    "side": "left"
  },
  {
    "id": 33,
    "step": 33,
    "title": "Infrastructure Environment Separation",
    "shortTitle": "Infrastructure Environment Separation",
    "subtitle": "IBCS can help plan separation between development, testing, staging, a...",
    "description": "IBCS can help plan separation between development, testing, staging, and production infrastructure where the organisation’s applications and operational model require it. Design may consider access boundaries, data handling, configuration differences, connectivity, and release dependencies. Environment separation should be practical to maintain and documented for deployment teams. Approved production changes should follow the organisation’s release and change-control procedures.",
    "iconKey": "Layers",
    "color": "#7c3aed",
    "side": "left"
  },
  {
    "id": 34,
    "step": 34,
    "title": "Infrastructure Deployment Automation",
    "shortTitle": "Infrastructure Deployment Automation",
    "subtitle": "IBCS can support automation of repeatable infrastructure tasks such as...",
    "description": "IBCS can support automation of repeatable infrastructure tasks such as approved provisioning, inventory updates, health checks, and standard configuration application. The design should account for platform compatibility, permissions, logging, testing, and failure handling. Automated changes should remain reviewable and include suitable safeguards for sensitive or production systems. This approach can reduce manual variation while preserving accountability and change control.",
    "iconKey": "Zap",
    "color": "#d97706",
    "side": "left"
  },
  {
    "id": 35,
    "step": 35,
    "title": "Identity and Directory Service Infrastructure",
    "shortTitle": "Identity and Directory Service Infrastructure",
    "subtitle": "IBCS can help review infrastructure dependencies for directory and ide...",
    "description": "IBCS can help review infrastructure dependencies for directory and identity services, including server placement, replication requirements, DNS dependencies, time synchronisation, backup, and service monitoring. Changes should be coordinated with the teams responsible for identity policy and access governance. Documented recovery procedures and dependency maps can help maintain authentication services and clarify how identity outages may affect other business systems.",
    "iconKey": "Key",
    "color": "#2563eb",
    "side": "left"
  },
  {
    "id": 36,
    "step": 36,
    "title": "Time Synchronisation Services",
    "shortTitle": "Time Synchronisation Services",
    "subtitle": "IBCS can support the planning and monitoring of time synchronisation a...",
    "description": "IBCS can support the planning and monitoring of time synchronisation across infrastructure systems where consistent timestamps are required for authentication, logs, applications, and troubleshooting. Work may review approved time sources, hierarchy, redundancy, and alerting for significant drift. Configuration should follow the organisation’s standards and platform guidance, with validation after changes to ensure that dependent services continue to behave correctly.",
    "iconKey": "Activity",
    "color": "#0284c7",
    "side": "right"
  },
  {
    "id": 37,
    "step": 37,
    "title": "Infrastructure Integration and Dependencies",
    "shortTitle": "Infrastructure Integration and Dependencies",
    "subtitle": "IBCS can help document and validate the infrastructure dependencies th...",
    "description": "IBCS can help document and validate the infrastructure dependencies that allow business applications and shared services to operate. These may include compute, storage, identity, DNS, certificates, network paths, external services, and monitoring. Dependency mapping can guide change planning and incident triage by identifying which components are likely to be affected. Findings should be reviewed with application owners to confirm assumptions and service priorities.",
    "iconKey": "Network",
    "color": "#059669",
    "side": "right"
  },
  {
    "id": 38,
    "step": 38,
    "title": "Infrastructure Migration Planning",
    "shortTitle": "Infrastructure Migration Planning",
    "subtitle": "IBCS can assist with planning infrastructure migrations involving hard...",
    "description": "IBCS can assist with planning infrastructure migrations involving hardware refreshes, virtualisation changes, data-centre moves, cloud transitions, or platform consolidation. Plans may define scope, prerequisites, sequencing, data protection, service downtime, validation, communication, and rollback conditions. Migration decisions should reflect application compatibility and business priorities. A staged approach can make dependencies visible and reduce the chance that multiple high-risk changes overlap unnecessarily.",
    "iconKey": "GitBranch",
    "color": "#7c3aed",
    "side": "right"
  },
  {
    "id": 39,
    "step": 39,
    "title": "Infrastructure Acceptance Testing",
    "shortTitle": "Infrastructure Acceptance Testing",
    "subtitle": "IBCS can support acceptance checks for new or changed infrastructure b...",
    "description": "IBCS can support acceptance checks for new or changed infrastructure by comparing the deployed environment with approved requirements and design documents. Testing may cover availability, performance, access, backup, monitoring, recovery, configuration, and operational handover. Findings should be recorded with clear ownership and priority. Acceptance criteria should be agreed in advance so that completion is based on evidence rather than an informal confirmation that equipment has been installed.",
    "iconKey": "ClipboardCheck",
    "color": "#d97706",
    "side": "right"
  },
  {
    "id": 40,
    "step": 40,
    "title": "Infrastructure Handover and Knowledge Transfer",
    "shortTitle": "Infrastructure Handover and Knowledge Transfer",
    "subtitle": "IBCS can help prepare operational handover materials for infrastructur...",
    "description": "IBCS can help prepare operational handover materials for infrastructure teams, including architecture summaries, asset records, routine procedures, monitoring guidance, known limitations, and escalation contacts. Knowledge-transfer sessions can review common tasks and recovery steps with the people responsible for ongoing support. Documentation should match the actual deployed configuration and identify unresolved items so that operational ownership is clear after project activities end.",
    "iconKey": "Users",
    "color": "#2563eb",
    "side": "right"
  },
  {
    "id": 41,
    "step": 41,
    "title": "Infrastructure Maintenance Planning",
    "shortTitle": "Infrastructure Maintenance Planning",
    "subtitle": "IBCS can help organise infrastructure maintenance around service criti...",
    "description": "IBCS can help organise infrastructure maintenance around service criticality, vendor recommendations, support status, workload dependencies, and available maintenance windows. Plans may cover inspections, patching, configuration backups, capacity checks, and hardware or platform lifecycle activities. Stakeholder communication and post-maintenance validation should be included. A maintenance calendar helps teams coordinate work and avoid preventable conflicts between infrastructure changes and business operations.",
    "iconKey": "CalendarCheck",
    "color": "#0284c7",
    "side": "left"
  },
  {
    "id": 42,
    "step": 42,
    "title": "Infrastructure Vendor and Support Coordination",
    "shortTitle": "Infrastructure Vendor and Support Coordination",
    "subtitle": "IBCS can assist with technical coordination among infrastructure vendo...",
    "description": "IBCS can assist with technical coordination among infrastructure vendors, service providers, and internal support teams. Activities may include documenting affected assets, collecting diagnostics, tracking case references, arranging approved maintenance, and recording resolution details. Contractual commitments remain governed by the relevant agreements. Clear escalation records can reduce repeated troubleshooting and help the organisation understand outstanding risks or dependencies on external support.",
    "iconKey": "Headphones",
    "color": "#059669",
    "side": "left"
  },
  {
    "id": 43,
    "step": 43,
    "title": "Infrastructure Procurement Requirements",
    "shortTitle": "Infrastructure Procurement Requirements",
    "subtitle": "IBCS can help define technical requirements for infrastructure procure...",
    "description": "IBCS can help define technical requirements for infrastructure procurement based on workload needs, compatibility, capacity, lifecycle, manageability, support, and resilience. Evaluation criteria may compare alternatives without replacing the organisation’s commercial or procurement approval process. Assumptions and dependencies should be documented, including any licensing, facilities, or integration needs. A structured specification helps align purchases with operational requirements and future support capability.",
    "iconKey": "Briefcase",
    "color": "#7c3aed",
    "side": "left"
  },
  {
    "id": 44,
    "step": 44,
    "title": "Infrastructure Standardisation and Templates",
    "shortTitle": "Infrastructure Standardisation and Templates",
    "subtitle": "IBCS can support the creation of standard infrastructure templates for...",
    "description": "IBCS can support the creation of standard infrastructure templates for recurring environments, such as branch systems, application servers, virtual machines, and monitoring configurations. Standards should define required settings while allowing documented exceptions for legitimate business needs. Periodic review can keep templates compatible with supported platforms and evolving requirements. Standardisation helps simplify deployment, maintenance, troubleshooting, and knowledge transfer across teams.",
    "iconKey": "Boxes",
    "color": "#d97706",
    "side": "left"
  },
  {
    "id": 45,
    "step": 45,
    "title": "Infrastructure Security Coordination",
    "shortTitle": "Infrastructure Security Coordination",
    "subtitle": "IBCS can help infrastructure teams implement approved baseline require...",
    "description": "IBCS can help infrastructure teams implement approved baseline requirements in coordination with the organisation’s cybersecurity and governance functions. Infrastructure-related activities may include supported software versions, administrative access controls, configuration review, logging, backup protection, and timely remediation of identified weaknesses. Security decisions and risk acceptance should remain with authorised owners. Clear responsibility boundaries help ensure that infrastructure improvements align with the wider security programme.",
    "iconKey": "ShieldCheck",
    "color": "#2563eb",
    "side": "left"
  },
  {
    "id": 46,
    "step": 46,
    "title": "Infrastructure Compliance Evidence Support",
    "shortTitle": "Infrastructure Compliance Evidence Support",
    "subtitle": "IBCS can assist with collecting and organising infrastructure evidence...",
    "description": "IBCS can assist with collecting and organising infrastructure evidence requested by authorised audit or compliance teams, such as asset records, approved configurations, patch status, backup reports, access reviews, and change records. Evidence handling should follow internal policies and applicable legal requirements. IBCS can help identify documentation gaps, but formal compliance conclusions and control attestations should be made by the responsible authority or qualified assessor.",
    "iconKey": "Scale",
    "color": "#0284c7",
    "side": "right"
  },
  {
    "id": 47,
    "step": 47,
    "title": "Infrastructure Service Continuity Planning",
    "shortTitle": "Infrastructure Service Continuity Planning",
    "subtitle": "IBCS can support continuity planning by identifying critical infrastru...",
    "description": "IBCS can support continuity planning by identifying critical infrastructure services, their dependencies, recovery prerequisites, and alternative operating arrangements. Work may document responsible teams, communication paths, backup availability, provider contacts, and restoration sequence. Business owners should approve recovery priorities and acceptable interruption levels. Periodic review or exercises can reveal outdated contacts, missing dependencies, and procedures that need improvement.",
    "iconKey": "RefreshCcw",
    "color": "#059669",
    "side": "right"
  },
  {
    "id": 48,
    "step": 48,
    "title": "Infrastructure Health Review and Improvement Roadmap",
    "shortTitle": "Infrastructure Health Review and Improvement Roadmap",
    "subtitle": "IBCS can help turn asset data, monitoring trends, incidents, lifecycle...",
    "description": "IBCS can help turn asset data, monitoring trends, incidents, lifecycle concerns, and stakeholder feedback into an infrastructure improvement roadmap. Proposed actions may include platform upgrades, capacity changes, documentation updates, resilience improvements, or process refinement. Each action should identify expected benefit, dependencies, urgency, and a suggested review point. The roadmap should be revisited as business needs, technology support, and operational constraints evolve.",
    "iconKey": "Award",
    "color": "#7c3aed",
    "side": "right"
  }
];

export default INFRASTRUCTURE_SERVICES;
