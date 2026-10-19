export const networkSections = [
  {
    id: 1,
    title: "Network Infrastructure Assessment",
    description: "IBCS can help assess an organisation’s existing network environment by reviewing its physical and logical design, connected locations, equipment, addressing approach, traffic patterns, and operational requirements. The assessment can identify capacity constraints, unsupported components, avoidable complexity, and areas where documentation is incomplete. Findings can be organised into practical priorities, with proposed improvements aligned to business needs, available resources, service criticality, and the organisation’s approved technical and security requirements."
  },
  {
    id: 2,
    title: "Network Architecture and Design",
    description: "IBCS can support the design of network architectures that reflect an organisation’s size, locations, application needs, availability targets, and future growth. Design work may define network layers, device roles, traffic paths, segmentation boundaries, resilience options, and management interfaces. Architecture decisions should be documented with assumptions and trade-offs so that implementation teams can understand the intended design and maintain it consistently as requirements evolve."
  },
  {
    id: 3,
    title: "Local Area Network (LAN) Implementation",
    description: "IBCS can assist with planning and implementing local area networks for offices, campuses, laboratories, and other facilities. Scope may include switch placement, access-layer connectivity, port allocation, VLAN planning, uplink capacity, and endpoint connectivity requirements. Implementation planning can account for the building layout and expected device population, while configuration and acceptance checks help confirm that authorised endpoints can connect to the required services."
  },
  {
    id: 4,
    title: "Wide Area Network (WAN) Connectivity",
    description: "IBCS can help organisations plan and coordinate wide area network connectivity between headquarters, branches, data centres, and remote sites. Work may cover bandwidth requirements, carrier options, routing design, link resilience, traffic priorities, and operational ownership. The selected approach should reflect application performance needs, service availability expectations, geographic constraints, and provider capabilities, with dependencies and responsibilities recorded before deployment."
  },
  {
    id: 5,
    title: "Routing and Switching Configuration",
    description: "IBCS can support the configuration and review of routers and managed switches according to an approved network design. Activities may include interface settings, routing protocols, static routes, switching behaviour, trunk configuration, and management access controls. Changes should be tested against documented requirements and introduced through an agreed change process, helping reduce unintended disruption and making later troubleshooting more predictable."
  },
  {
    id: 6,
    title: "IP Addressing and Subnet Planning",
    description: "IBCS can help establish a structured IP addressing plan that supports current devices, network segmentation, site expansion, and operational clarity. Planning may define address ranges, subnet sizes, reserved blocks, gateway conventions, and allocation rules for different environments. A well-maintained plan reduces conflicts and improves troubleshooting, while leaving documented capacity for future users, applications, facilities, and infrastructure changes."
  },
  {
    id: 7,
    title: "VLAN Design and Management",
    description: "IBCS can assist with designing and managing Virtual Local Area Networks to separate traffic by function, location, application, or approved access requirements. Work may include VLAN identifiers, naming conventions, trunk definitions, routing boundaries, and mapping between physical ports and business use. The resulting configuration should be consistent across relevant devices and supported by current documentation so that additions and changes remain controlled."
  },
  {
    id: 8,
    title: "Wireless Network Planning",
    description: "IBCS can support wireless network planning for offices, campuses, public-facing spaces, and other indoor or outdoor environments. Planning may consider coverage objectives, user density, application types, access point placement, interference, roaming behaviour, and wired backhaul. Where appropriate, a site survey can inform design choices, while post-installation checks help confirm coverage and capacity against the agreed requirements."
  },
  {
    id: 9,
    title: "Wireless Site Surveys and Optimisation",
    description: "IBCS can help coordinate wireless site surveys and review performance indicators such as signal strength, channel utilisation, interference, roaming, and client experience. Results can be used to adjust access point placement, radio settings, channel plans, or capacity allocation. Recommendations should distinguish observed issues from assumptions and prioritise changes that improve reliable connectivity without creating unnecessary overlap or disruption."
  },
  {
    id: 10,
    title: "Software-Defined WAN (SD-WAN) Planning",
    description: "IBCS can support evaluation and planning of SD-WAN solutions where organisations need flexible connectivity across multiple sites. The work may examine application steering, link selection, centralised policy, visibility, failover behaviour, and integration with existing network services. Suitability depends on business requirements, provider support, licensing, and operational readiness; design recommendations should explain these dependencies before a solution is selected."
  },
  {
    id: 11,
    title: "Site-to-Site and Remote Access Connectivity",
    description: "IBCS can help plan secure connectivity between approved sites and authorised remote users in coordination with the organisation’s security standards. Scope may include connectivity requirements, tunnel routing, identity integration dependencies, access boundaries, and availability considerations. Access methods and policies should be selected by authorised stakeholders, tested for required applications, and documented so that support teams can manage connectivity without expanding access beyond approved needs."
  },
  {
    id: 12,
    title: "DNS Service Planning",
    description: "IBCS can support the planning and operational review of Domain Name System services used by internal applications, user devices, and network infrastructure. Activities may include resolver placement, zone responsibilities, forwarding rules, redundancy, record management procedures, and troubleshooting guidance. Clear ownership and change records help prevent avoidable name-resolution outages and make it easier to diagnose whether a failure originates in DNS or another dependency."
  },
  {
    id: 13,
    title: "DHCP Service Planning",
    description: "IBCS can help design and maintain Dynamic Host Configuration Protocol services that allocate network settings to authorised devices. Work may include scope sizing, lease policies, reservations, relay configuration, exclusions, redundancy, and monitoring. Address pools should align with the IP plan and expected device population. Documented ownership and controlled changes can reduce address exhaustion, conflicting assignments, and connectivity issues during network expansion."
  },
  {
    id: 14,
    title: "IP Address Management (IPAM)",
    description: "IBCS can assist with establishing IP address management practices that keep address allocations, subnets, reservations, and network ownership visible. Depending on the environment, this may use an existing platform, an approved inventory process, or integration with related infrastructure tools. Accurate records help teams identify available capacity, prevent conflicting allocations, support audits, and plan changes across sites with fewer manual inconsistencies."
  },
  {
    id: 15,
    title: "Network Segmentation Design",
    description: "IBCS can support network segmentation design to separate systems and traffic according to business function, operational need, and approved security requirements. Segmentation may use VLANs, routing boundaries, access control lists, or compatible enforcement technologies. The design should define which communication paths are required, who approves exceptions, and how changes are validated, helping organisations limit unnecessary connectivity while preserving legitimate business workflows."
  },
  {
    id: 16,
    title: "Network Access Control Coordination",
    description: "IBCS can help assess network access control requirements and coordinate the infrastructure changes needed to support approved device-admission policies. Work may involve switch capabilities, wireless integration, identity-system dependencies, endpoint categories, guest handling, and staged rollout planning. Enforcement rules and exception processes should be owned by authorised stakeholders, with testing designed to avoid locking out essential business devices or disrupting critical operations."
  },
  {
    id: 17,
    title: "Network Firewall Integration",
    description: "IBCS can support the network-infrastructure aspects of firewall integration, including placement, interface connectivity, routing dependencies, high-availability links, and traffic-path validation. Policy design and approval should remain aligned with the organisation’s security governance. Implementation planning can document required flows, dependencies, rollback steps, and test cases so that network changes preserve intended application access and do not introduce unintended routing paths."
  },
  {
    id: 18,
    title: "Load Balancing Connectivity",
    description: "IBCS can help plan the network connectivity required for load balancers that distribute requests across approved application services. Scope may include interface placement, address allocation, routing, health-check reachability, redundant paths, and coordination with application owners. Network-side validation can confirm that requests and responses follow expected paths, while clear documentation helps teams distinguish connectivity faults from application or load-balancer configuration issues."
  },
  {
    id: 19,
    title: "Quality of Service (QoS) Planning",
    description: "IBCS can assist with Quality of Service planning where voice, video, operational applications, or other traffic classes have different performance requirements. Work may identify traffic categories, marking conventions, queueing policies, and where policies should be applied across the path. The approach should be based on measured demand and supported device capabilities, with testing used to confirm that prioritisation behaves as intended under load."
  },
  {
    id: 20,
    title: "Network Redundancy and High Availability",
    description: "IBCS can help design redundancy for critical network components and links to reduce single points of failure. Options may include paired devices, diverse uplinks, redundant power, alternate carrier paths, and supported failover mechanisms. Design decisions should account for actual failure scenarios, convergence behaviour, maintenance requirements, and cost. Tests and documented recovery procedures can help confirm that resilience works as expected rather than existing only on paper."
  },
  {
    id: 21,
    title: "Failover and Recovery Testing",
    description: "IBCS can support planned tests of network failover and recovery procedures in an authorised maintenance window. Test cases may cover link failure, device unavailability, routing changes, restoration behaviour, and the impact on critical applications. Testing should include agreed success criteria, stakeholder communication, rollback steps, and captured results. Any limitations discovered can be prioritised for remediation before the next planned resilience review."
  },
  {
    id: 22,
    title: "Network Monitoring and Alerting",
    description: "IBCS can help define network monitoring requirements for device availability, interface status, utilisation, errors, latency, packet loss, and key service dependencies. Alert thresholds should reflect normal operating patterns and the criticality of each service to reduce noise while surfacing meaningful incidents. Monitoring ownership, escalation paths, and maintenance windows should be documented so alerts lead to appropriate investigation and action."
  },
  {
    id: 23,
    title: "Network Management System Integration",
    description: "IBCS can support the deployment or refinement of network management systems that provide a consistent view of infrastructure status and configuration. Integration may involve device inventory, topology discovery, telemetry, event collection, dashboards, and role-based access. The selected approach should be compatible with the organisation’s equipment and operating model, while permissions and retention settings follow approved administrative and security practices."
  },
  {
    id: 24,
    title: "Network Performance and Capacity Analysis",
    description: "IBCS can help analyse network utilisation, interface errors, throughput, latency, jitter, packet loss, and growth trends to understand current performance and future capacity needs. Evidence can be collected from approved monitoring tools and service reports. Recommendations may include configuration tuning, link upgrades, traffic changes, or targeted investigation, with assumptions clearly separated from measured findings and business impact considered in prioritisation."
  },
  {
    id: 25,
    title: "Latency and Packet-Loss Troubleshooting",
    description: "IBCS can support structured investigation of latency, jitter, and packet loss affecting users or applications. Troubleshooting may compare measurements across network segments, inspect interface counters, review routing changes, and coordinate tests with service providers or application teams. A documented timeline and evidence-based findings help isolate likely causes, avoid unnecessary changes, and provide a clear record of corrective actions and remaining risks."
  },
  {
    id: 26,
    title: "Network Configuration Backup",
    description: "IBCS can help establish repeatable backup procedures for supported network-device configurations. The process may define collection frequency, secure storage, access permissions, retention, version history, and restoration checks. Backup coverage should be verified for relevant devices and updated when the environment changes. A tested configuration backup can support recovery from accidental changes, device replacement, and approved restoration activities."
  },
  {
    id: 27,
    title: "Network Configuration Automation",
    description: "IBCS can support automation of repeatable network administration tasks where the device platforms, interfaces, and operational controls permit it. Potential tasks include configuration templating, inventory updates, compliance checks, and approved bulk changes. Automation should use controlled credentials, reviewable change sets, test environments where available, and rollback planning. The aim is to reduce manual inconsistency without removing required human approval or operational oversight."
  },
  {
    id: 28,
    title: "Network Firmware and Software Lifecycle",
    description: "IBCS can help maintain an inventory of network-device software versions, vendor support status, known dependencies, and planned maintenance needs. Upgrade planning may consider interoperability, release notes, configuration backups, testing, business timing, and rollback options. Changes should follow vendor guidance and organisational approval processes, with records updated after implementation so that teams understand the current supported state."
  },
  {
    id: 29,
    title: "Network Change and Release Management",
    description: "IBCS can support a structured process for network changes, from request and impact assessment through approval, implementation, verification, and closure. Change records may include affected devices, dependencies, risk, communication plans, test cases, and rollback steps. Coordinated scheduling reduces avoidable conflict with business activities and helps ensure that urgent changes receive appropriate review without losing accountability or documentation."
  },
  {
    id: 30,
    title: "Network Troubleshooting and Root-Cause Analysis",
    description: "IBCS can help investigate recurring or complex network incidents through a structured process that gathers symptoms, timestamps, topology details, device logs, and performance evidence. Analysis can distinguish immediate symptoms from contributing conditions and document corrective actions. When the cause depends on a carrier, application, or third-party platform, findings can support effective escalation rather than relying on unsupported assumptions."
  },
  {
    id: 31,
    title: "Structured Cabling Coordination",
    description: "IBCS can assist with planning and documenting structured cabling requirements for offices, campuses, equipment rooms, and infrastructure refreshes. Scope may include outlet locations, patch-panel mapping, labelling conventions, cable routes, and coordination with qualified installation providers. Acceptance checks should verify the agreed cabling specification and records, helping future teams trace connections and reduce avoidable downtime during moves or troubleshooting."
  },
  {
    id: 32,
    title: "Fibre-Optic Connectivity Planning",
    description: "IBCS can support fibre-optic connectivity planning for backbone links, inter-building connections, data-centre interconnects, and other suitable network paths. Planning may consider distance, throughput, redundancy, transceiver compatibility, pathway constraints, and testing requirements. Installation and certification activities should be carried out by appropriately qualified personnel where required, with results and port assignments recorded for future maintenance."
  },
  {
    id: 33,
    title: "Network Rack and Equipment-Room Planning",
    description: "IBCS can help plan network racks and equipment-room layouts with attention to device placement, patching, airflow, power availability, cable management, service access, and physical constraints. The design should support safe maintenance and clear identification of connections. Coordination with facilities and electrical teams may be necessary, and final records should reflect the installed arrangement rather than only the original design."
  },
  {
    id: 34,
    title: "Data-Centre Network Connectivity",
    description: "IBCS can support network planning for data-centre environments, including leaf-spine or other suitable topologies, redundant uplinks, segmentation, management networks, and connectivity to storage or application platforms. Design choices should match workload patterns, scale, latency needs, and the equipment already in use. Implementation plans should identify dependencies and provide validation steps for both connectivity and expected resilience."
  },
  {
    id: 35,
    title: "Branch and Multi-Site Network Standardisation",
    description: "IBCS can help establish repeatable network standards for organisations operating multiple branches or offices. Standards may cover device roles, addressing, naming, wireless settings, routing, monitoring, configuration templates, and documentation. A consistent baseline can simplify support and onboarding while allowing approved exceptions for site-specific needs. Periodic reviews can identify drift and keep branch designs aligned with evolving business requirements."
  },
  {
    id: 36,
    title: "Internet Service Provider Coordination",
    description: "IBCS can assist with the technical coordination of internet and carrier services, including bandwidth requirements, demarcation details, circuit identifiers, service dependencies, installation schedules, and fault escalation contacts. Provider performance and contractual commitments remain subject to the relevant agreement. Maintaining accurate circuit records and test results helps teams manage renewals, troubleshoot outages, and evaluate whether service capacity continues to meet business needs."
  },
  {
    id: 37,
    title: "Network Service-Level Monitoring",
    description: "IBCS can help define operational measures for network services, such as availability, latency, packet loss, incident response, and restoration objectives where these are measurable and agreed. Monitoring reports can compare observed performance with approved service expectations and highlight recurring patterns. Measures should be interpreted in context, with provider dependencies and measurement limitations documented to support fair reporting and informed improvement decisions."
  },
  {
    id: 38,
    title: "Voice and Video Network Readiness",
    description: "IBCS can assess network readiness for voice, video conferencing, and other real-time communications by reviewing bandwidth, latency, jitter, packet loss, wireless coverage, and Quality of Service support. Work may include coordinating test calls, examining busy-hour conditions, and identifying network-side improvements. Findings should be shared with collaboration-platform owners so that network and application settings can be evaluated together."
  },
  {
    id: 39,
    title: "Guest and Visitor Network Design",
    description: "IBCS can support the design of guest and visitor connectivity that provides an appropriate user experience while keeping it separate from internal business systems according to approved policy. Planning may cover wireless coverage, internet access, onboarding methods, bandwidth limits, session duration, and support ownership. Any identity collection, terms, and retention practices should be reviewed by the organisation’s responsible teams before launch."
  },
  {
    id: 40,
    title: "IoT and Operational Network Connectivity",
    description: "IBCS can help plan connectivity for approved Internet of Things devices, building systems, sensors, and operational equipment. Network requirements may include device counts, traffic patterns, protocol dependencies, wireless or wired access, and separation from unrelated systems. Because operational environments can have safety and availability constraints, changes should be coordinated with system owners and tested carefully before broad deployment."
  },
  {
    id: 41,
    title: "Network Security Telemetry Integration",
    description: "IBCS can support the infrastructure integration needed to provide network telemetry to approved monitoring and security platforms. Activities may include configuring supported log or flow exports, confirming time synchronisation, validating collection paths, and documenting bandwidth or storage dependencies. Data collection should follow authorised policy and access controls, with clear ownership for interpreting alerts and responding to findings."
  },
  {
    id: 42,
    title: "DDoS Resilience Coordination",
    description: "IBCS can help review network dependencies and coordinate resilience planning for distributed denial-of-service events with relevant providers and approved security teams. Work may document internet circuits, upstream contacts, service criticality, traffic visibility, escalation procedures, and recovery communications. Available protections depend on provider services and architecture; response plans should identify responsibilities and decision points without promising that every attack can be fully prevented."
  },
  {
    id: 43,
    title: "Network Inventory and Asset Records",
    description: "IBCS can help maintain a reliable inventory of network devices, interfaces, locations, serial or asset identifiers, software versions, support status, and ownership. Records should be reconciled with the deployed environment and updated during moves, additions, replacements, and retirements. Accurate inventory improves lifecycle planning, support escalation, audit readiness, and the ability to assess the impact of proposed changes."
  },
  {
    id: 44,
    title: "Network Topology Mapping and Documentation",
    description: "IBCS can support the creation and maintenance of logical and physical network diagrams, circuit maps, address plans, device relationships, and service dependencies. Documentation should be readable, versioned, access-controlled where appropriate, and updated after approved changes. Useful diagrams help teams understand traffic paths, identify affected systems during incidents, onboard support personnel, and plan upgrades with fewer undocumented assumptions."
  },
  {
    id: 45,
    title: "Network Migration and Cutover Planning",
    description: "IBCS can help plan network migrations involving equipment refreshes, site moves, topology changes, provider transitions, or technology upgrades. A cutover plan may define prerequisites, affected services, sequencing, communication, validation, rollback triggers, and responsible owners. Testing should cover critical business paths before and after the change, while post-cutover monitoring helps identify issues that were not visible during pre-production checks."
  },
  {
    id: 46,
    title: "Network Acceptance and Handover",
    description: "IBCS can support network acceptance activities by comparing the implemented environment with approved requirements and design documents. Checks may cover connectivity, routing, redundancy, wireless coverage, monitoring, configuration backup, labelling, and documentation completeness. Outstanding issues should be recorded with ownership and priority. A structured handover gives operational teams the information needed to support the environment after implementation work concludes."
  },
  {
    id: 47,
    title: "Network Maintenance and Health Reviews",
    description: "IBCS can help establish periodic network health reviews covering performance, device condition, software lifecycle, configuration consistency, support status, capacity, and recurring incidents. Reviews can produce a prioritised improvement register with suggested timing and dependencies. The frequency and depth should reflect service criticality and operational capacity, ensuring that maintenance remains practical and that known weaknesses are not lost between projects."
  },
  {
    id: 48,
    title: "Network Incident Response Procedures",
    description: "IBCS can help document network incident procedures that define severity assessment, triage, stakeholder notification, escalation, evidence collection, recovery steps, and closure requirements. Procedures should identify decision-makers and dependencies on carriers, facilities, applications, and security teams. Tabletop exercises or controlled simulations can help verify that contacts, records, and recovery steps remain usable before a real outage occurs."
  },
  {
    id: 49,
    title: "Business Continuity and Network Disaster Recovery",
    description: "IBCS can support the network components of business continuity and disaster recovery planning by documenting critical links, alternate paths, recovery dependencies, configuration restoration, and communication requirements. Recovery targets should be agreed with business owners and tested where feasible. Plans should reflect realistic provider and infrastructure constraints, with test outcomes used to improve readiness rather than assuming that redundancy alone guarantees recovery."
  },
  {
    id: 50,
    title: "Network Technology Refresh Planning",
    description: "IBCS can help evaluate when network equipment or connectivity should be refreshed based on vendor support, capacity, reliability, compatibility, energy use, and business demand. Planning may compare upgrade paths, migration effort, operational risk, and lifecycle cost. Recommendations should make assumptions explicit and include sequencing options so that replacement work can be prioritised without creating unnecessary disruption to active services."
  },
  {
    id: 51,
    title: "Network Procurement and Technical Evaluation",
    description: "IBCS can assist with defining technical requirements and evaluation criteria for network equipment, connectivity services, and management platforms. Criteria may include throughput, interfaces, interoperability, support terms, lifecycle status, monitoring integration, resilience, and expected growth. Procurement decisions should follow the organisation’s purchasing and approval procedures, with technical comparisons documented separately from commercial or contractual considerations."
  },
  {
    id: 52,
    title: "Network Lab and Proof-of-Concept Testing",
    description: "IBCS can support controlled lab or proof-of-concept testing for proposed network technologies before wider adoption. Test plans may assess interoperability, throughput, failover, management workflows, visibility, and operational complexity against defined success criteria. Results should include limitations and dependencies, enabling stakeholders to make evidence-based decisions and avoid treating a limited demonstration as proof of production readiness."
  },
  {
    id: 53,
    title: "Network Documentation and Knowledge Transfer",
    description: "IBCS can help prepare practical operating guides, configuration references, troubleshooting runbooks, diagrams, and handover notes for network teams. Materials should reflect the actual environment, use consistent terminology, and identify owners for future updates. Knowledge-transfer sessions can walk through routine tasks and escalation paths, helping internal personnel maintain the service without depending on undocumented assumptions or individual memory."
  },
  {
    id: 54,
    title: "Network Service Improvement Roadmap",
    description: "IBCS can help turn assessment findings, incident trends, capacity forecasts, and stakeholder feedback into a staged network improvement roadmap. Each initiative may include expected benefit, urgency, dependencies, estimated effort, and a proposed review point. The roadmap should balance reliability, security, user experience, and cost, and it should be revisited as business priorities or technical conditions change."
  }
];

export default networkSections;
