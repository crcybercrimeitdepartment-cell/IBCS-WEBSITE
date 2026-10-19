/**
 * ============================================================================
 * ITConsultingServicesPageData.js
 * ============================================================================
 * Sourced from IBCS_IT_Services_Card_05_IT_Consulting_Services.docx.
 * Total: 47 specialized IT Consulting Services.
 * ============================================================================
 */

import React from 'react';
import {
  Activity,
  AlertTriangle,
  Award,
  BadgeDollarSign,
  BarChart3,
  Bot,
  Boxes,
  Cable,
  Calculator,
  CheckCircle2,
  Cloud,
  Cog,
  Compass,
  Database,
  FileSignature,
  FileText,
  FlaskConical,
  Gauge,
  GitPullRequest,
  GraduationCap,
  History,
  Infinity,
  IterationCcw,
  Kanban,
  Landmark,
  LayoutGrid,
  LifeBuoy,
  LineChart,
  ListChecks,
  Lock,
  Milestone,
  Presentation,
  Receipt,
  RefreshCw,
  Rocket,
  Scale,
  Search,
  Server,
  Shield,
  ShieldAlert,
  ShoppingCart,
  Sparkles,
  Split,
  Target,
  TrendingUp,
  UserCheck,
  Users,
} from 'lucide-react';

export const IT_CONSULTING_SECTIONS = [
  {
    id: 1,
    title: "IT Consulting Services Overview",
    description: "IBCS provides IT consulting services to help organizations make informed technology decisions, improve delivery practices, and align digital initiatives with business needs. Engagements may include current-state reviews, requirements analysis, architecture guidance, vendor evaluation, risk assessment, and implementation planning. The consulting approach should reflect the organization's objectives, operating constraints, budget, and available skills. Recommendations are intended to support practical decisions, with assumptions and trade-offs documented rather than presenting one technology or method as suitable for every situation.",
  },
  {
    id: 2,
    title: "Business and Technology Alignment",
    description: "Technology investments are most useful when they support clearly defined organizational outcomes. IBCS can help stakeholders connect business priorities with technology capabilities, service needs, and delivery plans. This may involve clarifying desired outcomes, identifying operational pain points, and evaluating how proposed systems affect staff, customers, or partner workflows. Alignment should be revisited as priorities change. A technology initiative should have a defined purpose and an accountable owner so that delivery decisions remain connected to measurable organizational needs.",
  },
  {
    id: 3,
    title: "Current-State IT Assessment",
    description: "A current-state assessment establishes how the organization's technology environment operates today. IBCS can review systems, applications, infrastructure, support processes, integrations, documentation, and known constraints within the agreed scope. The assessment should distinguish observed facts from stakeholder assumptions and identify gaps in available evidence. Its findings provide a baseline for improvement planning, investment decisions, and risk discussions. A useful review focuses on material issues and dependencies rather than producing an inventory that has no clear connection to business priorities.",
  },
  {
    id: 4,
    title: "Stakeholder Interviews and Requirements Discovery",
    description: "Different stakeholders may have different expectations of the same technology initiative. IBCS can facilitate interviews and workshops with business users, technical teams, leadership, and relevant external parties to clarify needs and constraints. The process should capture desired outcomes, existing difficulties, decision authority, and acceptance expectations. Conflicting requirements should be documented and resolved through an agreed decision process. Clear discovery reduces ambiguity and helps prevent teams from implementing a technically sound solution that does not solve the underlying operational problem.",
  },
  {
    id: 5,
    title: "Business Process Analysis",
    description: "Business process analysis examines how work moves between people, systems, approvals, and information sources. IBCS can map current workflows, identify repeated manual effort, and examine delays, handoff problems, or unnecessary control steps. Proposed changes should consider both technology and the people responsible for using it. Not every process issue requires new software; some can be addressed through clearer responsibilities or revised procedures. The resulting recommendations should explain the expected benefit and the operational changes needed to achieve it.",
  },
  {
    id: 6,
    title: "Technology Roadmap Development",
    description: "A technology roadmap organizes initiatives into a sequence that reflects business value, dependencies, risk, and available resources. IBCS can help distinguish urgent improvements from foundational work and longer-term opportunities. Each roadmap item should identify its intended outcome, likely dependencies, decision points, and a practical measure of completion. Estimates should be treated as planning assumptions that may change as discovery improves. A roadmap is most useful when reviewed regularly and updated as budgets, priorities, and technical conditions evolve.",
  },
  {
    id: 7,
    title: "Digital Transformation Planning",
    description: "Digital transformation involves changes to processes, services, information flows, and organizational practices supported by technology. IBCS can help define a transformation scope that is realistic for the organization's maturity and capacity for change. Planning may cover target outcomes, affected teams, data dependencies, delivery phases, governance, and adoption needs. Transformation should not be reduced to purchasing a new platform. The organization needs clear ownership and a way to assess whether the changes improve service quality or operational performance.",
  },
  {
    id: 8,
    title: "IT Strategy and Investment Prioritization",
    description: "An IT strategy explains how technology capabilities will support organizational priorities over a defined period. IBCS can help evaluate proposed investments using criteria such as business impact, risk reduction, cost, dependencies, operational effort, and expected lifespan. Prioritization should make trade-offs visible rather than treating every request as equally urgent. The strategy should also consider maintenance obligations and the cost of retaining existing systems. Final funding decisions remain with the organization's authorized leadership and budget owners.",
  },
  {
    id: 9,
    title: "Enterprise Architecture Guidance",
    description: "Enterprise architecture provides a structured view of business capabilities, applications, information, and technology platforms. IBCS can help document key relationships and identify duplication, unsupported dependencies, and opportunities for simplification. Architecture guidance should remain useful to decision-makers and delivery teams rather than becoming an abstract diagram set. Recommended changes need to account for migration effort, business continuity, and existing contractual commitments. Architecture is a decision aid, not a fixed blueprint that should ignore changing business needs.",
  },
  {
    id: 10,
    title: "Solution Options and Feasibility Analysis",
    description: "Before committing to a solution, organizations benefit from comparing viable options against agreed requirements. IBCS can assess feasibility across technical fit, implementation effort, integration complexity, operational support, security, scalability, and cost. The analysis should include limitations and assumptions for each option, not only its advantages. Where uncertainty remains, a proof of concept or focused technical investigation may be more reliable than a confident estimate based on incomplete information. The final selection should follow the organization's decision process.",
  },
  {
    id: 11,
    title: "Build, Buy, or Integrate Decisions",
    description: "Organizations may choose to build custom software, buy an existing product, or integrate capabilities from several platforms. IBCS can help compare these paths by considering differentiation, time to value, ownership of intellectual property, licensing, customization, and long-term maintenance. A commercial product may reduce initial development but introduce vendor dependency; a custom build may offer flexibility but require sustained engineering support. The recommendation should make these trade-offs explicit and fit the organization's actual operating capacity.",
  },
  {
    id: 12,
    title: "Technology Vendor Evaluation",
    description: "Vendor evaluation helps organizations compare technology providers using consistent criteria rather than relying only on demonstrations or sales claims. IBCS can help define requirements covering capability, support, security, integration, service continuity, pricing, and contractual conditions. Evaluation evidence may include documentation, reference checks, controlled trials, and clarification of limitations. Scores should be accompanied by reasoning and unresolved questions. Vendor selection also needs procurement and legal review where required, because technical suitability alone does not determine the overall commercial decision.",
  },
  {
    id: 13,
    title: "Software Licensing and Total Cost of Ownership",
    description: "Software cost extends beyond an initial purchase or subscription price. IBCS can help identify licensing models, user or usage limits, support charges, infrastructure needs, integration effort, training, and likely upgrade costs. A total cost of ownership estimate should state its assumptions and time horizon so options can be compared fairly. Renewal terms, price changes, data export, and exit costs deserve attention before commitment. Financial estimates remain provisional until the vendor's terms and the organization's usage expectations are confirmed.",
  },
  {
    id: 14,
    title: "Cloud Adoption Strategy",
    description: "Cloud adoption planning considers which workloads may benefit from cloud services and which may need to remain in existing environments. IBCS can assess application suitability, data sensitivity, connectivity, operational skills, cost patterns, resilience, and governance needs. Migration should be based on a clear rationale rather than assuming that moving every system to the cloud is automatically beneficial. The strategy may combine different hosting models, with explicit responsibility for security, monitoring, backup, and ongoing cost management.",
  },
  {
    id: 15,
    title: "Cloud Cost Governance",
    description: "Cloud spending can become difficult to predict when resources are created without clear ownership or reviewed infrequently. IBCS can help establish cost allocation, tagging, budgets, alerts, usage reviews, and responsibility for approving new resources. Optimization should consider workload requirements and reliability rather than simply choosing the lowest-cost configuration. Reports need to distinguish one-time migration expenses from ongoing service costs. Cost controls are most effective when teams understand how architecture and usage decisions affect the organization's recurring expenditure.",
  },
  {
    id: 16,
    title: "Infrastructure Modernization Planning",
    description: "Infrastructure modernization evaluates whether existing servers, networks, storage, operating systems, and supporting services continue to meet business needs. IBCS can help identify unsupported components, capacity limits, reliability concerns, and dependencies that affect upgrade sequencing. Options may include replacement, migration, consolidation, or continued operation with documented safeguards. Modernization plans should include testing, rollback, downtime coordination, and ownership of the resulting environment. The appropriate path depends on risk, budget, technical constraints, and the organization's continuity requirements.",
  },
  {
    id: 17,
    title: "Application Portfolio Rationalization",
    description: "Over time, organizations can accumulate applications that overlap in purpose, have unclear ownership, or are expensive to maintain. IBCS can help classify the application portfolio by business value, technical condition, usage, cost, risk, and dependencies. The resulting view can support decisions to retain, improve, consolidate, replace, or retire systems. Retirement requires care because apparently unused applications may support hidden reports or integrations. Recommendations should be validated with system owners and users before changes are approved.",
  },
  {
    id: 18,
    title: "Legacy System Assessment",
    description: "Legacy systems may remain essential even when they are difficult to maintain or integrate with newer platforms. IBCS can assess their business role, support status, data quality, security exposure, interface dependencies, and available specialist knowledge. Options may include stabilization, wrapping with APIs, phased replacement, data migration, or retirement. The assessment should recognize operational risks on both sides: retaining an old system and changing a critical system can each create disruption. A staged plan helps make these trade-offs manageable.",
  },
  {
    id: 19,
    title: "Integration Strategy and Interoperability",
    description: "Technology environments often contain separate systems that need to exchange records, events, or status information. IBCS can help define integration patterns, data ownership, interface standards, error handling, and monitoring expectations. The design should clarify which system is authoritative for each important data element and how failures are detected or reconciled. Point-to-point connections may be appropriate for simple cases, while broader environments may need shared integration services. The chosen approach should avoid unnecessary coupling and undocumented dependencies.",
  },
  {
    id: 20,
    title: "Data Strategy and Governance",
    description: "A data strategy establishes how information is defined, managed, protected, shared, and used to support decisions. IBCS can help identify important data domains, ownership responsibilities, quality expectations, access rules, and lifecycle needs. Governance should fit the organization's size and regulatory context rather than create unnecessary process overhead. Data definitions need agreement across teams so reports and integrations use consistent meanings. Technology can support governance, but accountability for data quality and appropriate use must be assigned to people.",
  },
  {
    id: 21,
    title: "Data Quality Improvement Planning",
    description: "Poor data quality can lead to unreliable reports, duplicated effort, and incorrect operational decisions. IBCS can help assess completeness, consistency, validity, duplication, timeliness, and ownership for selected datasets. Improvement plans should identify root causes, not only clean existing records once. Causes may include unclear entry rules, disconnected systems, weak validation, or outdated workflows. Success measures should be defined before remediation begins, and data owners should verify that corrections preserve meaning and meet operational requirements.",
  },
  {
    id: 22,
    title: "Reporting and Business Intelligence Advisory",
    description: "Business intelligence initiatives need agreement on the decisions reports are intended to support and the definitions behind each measure. IBCS can help identify reporting needs, source systems, metric owners, refresh expectations, and access requirements. A dashboard should not be treated as reliable merely because its visuals are polished. Data lineage, calculation rules, and known limitations should be documented so users can interpret results correctly. Consulting can also help reduce duplicate reports and align teams around consistent business definitions.",
  },
  {
    id: 23,
    title: "AI and Automation Feasibility",
    description: "AI and automation projects should begin with a defined problem, suitable data, and a realistic understanding of risk and expected value. IBCS can help assess candidate use cases, workflow suitability, data availability, human review needs, integration effort, and operational constraints. Some tasks may be better addressed with conventional rules or process redesign than machine learning. Feasibility findings should state assumptions, uncertainty, and measures for a controlled pilot. Business owners remain responsible for deciding whether a proposed use is appropriate.",
  },
  {
    id: 24,
    title: "Cybersecurity Strategy Advisory",
    description: "Cybersecurity strategy connects risk priorities with governance, people, processes, and technical controls. IBCS can help organizations evaluate their current security posture, define target outcomes, and sequence improvements according to exposure and available resources. The strategy may cover identity, endpoint protection, monitoring, incident response, supplier risk, and awareness depending on context. Recommendations should align with the organization's actual environment and responsibilities. A strategy is not a certification or guarantee; implementation and ongoing verification determine whether controls operate effectively.",
  },
  {
    id: 25,
    title: "Privacy and Data Protection Planning",
    description: "Privacy planning examines what personal information is collected, why it is needed, where it is processed, who can access it, and how long it is retained. IBCS can help map data flows and identify technical or process changes that may support privacy requirements. Legal interpretations and formal compliance conclusions should be reviewed by qualified advisers. A privacy plan should include data ownership, access, retention, deletion, vendor involvement, and incident handling. It should be revisited when the organization introduces new products or changes how information is used.",
  },
  {
    id: 26,
    title: "IT Governance and Decision Rights",
    description: "IT governance clarifies who approves investments, accepts risks, prioritizes work, owns services, and authorizes material changes. IBCS can help define decision forums, escalation paths, responsibility matrices, and reporting expectations suited to the organization's structure. Governance should support timely decisions while ensuring that important risks receive appropriate attention. If approval rights are unclear, projects may stall or proceed without accountable ownership. The model should be documented simply enough for teams to use consistently and reviewed as responsibilities change.",
  },
  {
    id: 27,
    title: "Project Portfolio and Dependency Review",
    description: "An organization's technology projects compete for people, budget, and shared technical resources. IBCS can help review the portfolio for overlapping objectives, resource conflicts, sequencing dependencies, and initiatives that no longer support current priorities. A consolidated view makes it easier to identify where a delay in one project affects another. Prioritization should consider delivery capacity as well as business value. Portfolio reviews need current information from project owners and should lead to clear decisions, not merely another reporting layer.",
  },
  {
    id: 28,
    title: "Project Delivery Method Selection",
    description: "Different technology initiatives require different levels of planning, feedback, documentation, and change control. IBCS can help choose a delivery approach that fits uncertainty, regulatory needs, team experience, and stakeholder availability. Iterative methods may support frequent learning, while more formal stage gates may be necessary for certain dependencies or approvals. The method should clarify how scope changes, risks, testing, and acceptance are managed. Using a named methodology is less important than ensuring the chosen practices work in the actual environment.",
  },
  {
    id: 29,
    title: "Agile Planning and Backlog Advisory",
    description: "Agile planning organizes work into prioritized increments and creates regular opportunities to review outcomes and adjust direction. IBCS can help teams define backlog items, acceptance criteria, prioritization rules, and stakeholder review practices. The backlog should express user or business value clearly enough for delivery teams to estimate and test the work. Agile practices do not remove the need for architecture, security, documentation, or realistic capacity planning. The process should be adapted to the team rather than followed as ceremony without purpose.",
  },
  {
    id: 30,
    title: "Requirements Traceability and Acceptance Criteria",
    description: "Requirements traceability connects stakeholder needs to design decisions, implementation work, tests, and acceptance outcomes. IBCS can help establish a lightweight method for recording requirement identifiers, owners, dependencies, and verification evidence. Clear acceptance criteria reduce disagreement about whether a feature is complete. Traceability is particularly useful for complex projects, regulated environments, or systems with many interfaces. The level of detail should match project risk and scale, because excessive documentation can become difficult to keep current.",
  },
  {
    id: 31,
    title: "IT Service Management Improvement",
    description: "IT service management focuses on how technology services are requested, delivered, supported, changed, and improved. IBCS can review service desk workflows, incident handling, request fulfillment, problem management, change control, and service ownership. Recommendations should reflect actual service volumes, user expectations, and available staffing. Introducing a new tool will not automatically fix unclear processes. Improvements may include simpler request categories, defined escalation, knowledge articles, and service measures that help teams identify recurring problems and manage user expectations.",
  },
  {
    id: 32,
    title: "Incident, Problem, and Change Process Advisory",
    description: "Incidents require restoration of service, problems require investigation of underlying causes, and changes need controlled implementation. IBCS can help define these related processes so they share useful information without becoming interchangeable ticket categories. The approach should clarify severity, ownership, approvals, communication, root-cause analysis, and post-change verification. Emergency changes need a proportionate control path and later review. Consistent records help the organization understand recurring failures and whether corrective actions reduce repeat disruption.",
  },
  {
    id: 33,
    title: "IT Operations and Support Model Design",
    description: "An IT support model defines how users obtain assistance and how technical work is distributed across internal teams and external providers. IBCS can help clarify service hours, support tiers, escalation routes, ownership boundaries, and knowledge-transfer needs. The model should match the criticality of the services and the organization's ability to staff them. Promised response targets should be realistic and contractually defined. A clear support model reduces uncertainty for users and helps technical teams focus effort on the right level of issue.",
  },
  {
    id: 34,
    title: "Disaster Recovery Advisory",
    description: "Disaster recovery planning identifies how technology services will be restored after a major outage, data loss, or infrastructure failure. IBCS can help identify service dependencies, recovery priorities, backup assumptions, restoration steps, and decision responsibilities. Recovery time and data-loss objectives should be agreed by business owners based on operational impact. Plans require testing to reveal missing access, outdated instructions, or dependencies that were overlooked. Consulting recommendations should distinguish documented recovery capability from results demonstrated in an actual exercise.",
  },
  {
    id: 35,
    title: "IT Budgeting and Cost Optimization",
    description: "IT budgeting should account for recurring operations, planned improvements, licensing, staffing, security, infrastructure, and eventual replacement costs. IBCS can help categorize expenditure and compare optimization options without focusing only on immediate savings. Cutting support or resilience spending may increase future risk, so financial decisions should consider service impact and total cost over time. Estimates should show assumptions and uncertainty, and budget owners should validate them against current contracts and usage. Recommendations support financial decisions but do not replace formal approval.",
  },
  {
    id: 36,
    title: "Technology Procurement Requirements",
    description: "Procurement requirements help ensure that purchased technology fits functional needs, security expectations, integration constraints, and support requirements. IBCS can help translate stakeholder needs into clear evaluation criteria and identify mandatory versus preferred capabilities. Requirements should avoid unnecessarily favoring a single vendor unless there is a documented reason. Evaluation should consider data portability, accessibility, service continuity, maintenance, and exit arrangements as well as feature lists. Procurement and legal teams should review commercial terms before an organization commits to a supplier.",
  },
  {
    id: 37,
    title: "Contract and Service-Level Review Support",
    description: "Technology contracts can define service availability, support response, data handling, change notice, security responsibilities, and exit rights. IBCS can help technical stakeholders identify operational requirements that should be reflected in vendor discussions and service-level definitions. This support does not replace legal advice or contract negotiation by authorized professionals. Measures need clear definitions and exclusions so that reported performance can be evaluated fairly. The organization should also understand how service credits, escalation, and supplier dependencies affect its real operating risk.",
  },
  {
    id: 38,
    title: "Change Management and Adoption Planning",
    description: "Technology changes often fail to deliver their intended value when users do not understand or adopt new workflows. IBCS can help plan stakeholder communication, training, support materials, readiness checks, and feedback collection. The plan should identify which roles are affected and what behaviors or responsibilities will change. Adoption should be measured using relevant indicators rather than attendance alone. Feedback after rollout can reveal process issues and training gaps, allowing the organization to improve the transition instead of treating launch as the end of the work.",
  },
  {
    id: 39,
    title: "Technical Documentation Review",
    description: "Accurate technical documentation supports maintenance, troubleshooting, onboarding, and future modernization. IBCS can assess whether architecture diagrams, interface specifications, environment details, operating procedures, and ownership records are complete enough for their intended use. Documentation should be consistent with the deployed environment and stored where authorized staff can find it. Sensitive details such as credentials should not be embedded in ordinary documents. The review can identify gaps and assign owners for updates, but document quality depends on continued maintenance after the engagement.",
  },
  {
    id: 40,
    title: "Knowledge Transfer and Capability Building",
    description: "Consulting recommendations are more sustainable when internal teams understand the reasoning and can operate the resulting processes. IBCS can support workshops, walkthroughs, decision records, and role-specific knowledge transfer within the agreed scope. Training should focus on the tasks people must perform, including routine operation, escalation, and maintenance. A handover is not complete merely because documents were delivered; the organization should confirm that designated staff can use them. Capability building helps reduce dependence on external assistance for everyday decisions.",
  },
  {
    id: 41,
    title: "Proof of Concept and Pilot Planning",
    description: "A proof of concept tests a narrow technical or business assumption before an organization commits to a larger investment. IBCS can help define a limited hypothesis, test environment, success criteria, risks, and a decision point. The pilot should be small enough to control but representative enough to produce useful evidence. Results need to identify what was tested, what was not tested, and what remains uncertain. A successful prototype does not automatically prove production readiness, scalability, security, or long-term operational suitability.",
  },
  {
    id: 42,
    title: "Scalability and Capacity Planning",
    description: "Capacity planning estimates whether systems, teams, and operating processes can support expected growth or changing demand. IBCS can review usage patterns, resource constraints, transaction volumes, performance expectations, and planned expansion. Forecasts should state assumptions and consider both average and peak conditions. Scaling a technical component may not solve a bottleneck elsewhere in the workflow. Recommendations should identify when additional measurement or load testing is needed and should balance performance, resilience, and cost rather than maximizing capacity without purpose.",
  },
  {
    id: 43,
    title: "Technology Risk Register and Decision Log",
    description: "A risk register records material uncertainties, their possible impact, current safeguards, owners, and planned responses. IBCS can help establish a consistent format and review cadence so risks remain visible during project and operational decisions. A decision log records important choices, alternatives considered, and the rationale for the selected approach. Together, these records preserve context when teams or priorities change. They should be maintained as working tools, with concise entries and clear ownership, rather than treated as paperwork completed only at project start.",
  },
  {
    id: 44,
    title: "Digital Maturity Assessment",
    description: "A digital maturity assessment considers how consistently an organization uses technology, manages information, governs risk, and improves services. IBCS can review selected dimensions such as strategy, architecture, delivery, data, security, and support processes. Findings should reflect evidence and organizational context rather than rely solely on a generic score. A maturity model is useful for identifying improvement priorities, not for labeling an organization as successful or unsuccessful. Results should lead to a realistic roadmap that matches the organization's capacity and objectives.",
  },
  {
    id: 45,
    title: "Executive Technology Briefings",
    description: "Senior decision-makers need concise explanations of technology options, operational exposure, dependencies, and likely consequences. IBCS can prepare briefings that summarize findings, compare choices, explain uncertainty, and identify decisions requiring leadership attention. Technical detail should be available where necessary, but the main message should connect to business outcomes and risk. Briefings must not hide assumptions or present estimates as facts. Clear communication helps executives ask informed questions and assign responsibility for the next steps.",
  },
  {
    id: 46,
    title: "Consulting Deliverables and Recommendation Tracking",
    description: "Consulting work should produce usable outputs that support decisions and follow-through. Depending on scope, IBCS deliverables may include assessment summaries, architecture diagrams, requirements, option comparisons, roadmaps, risk registers, or prioritized action plans. Each recommendation should identify its purpose, expected outcome, dependencies, and suggested owner where that information is available. Delivery should also explain limitations and unresolved questions. Tracking implementation progress helps determine whether advice has translated into practical change and whether further analysis is needed.",
  },
  {
    id: 47,
    title: "Continuous Advisory and Strategic Review",
    description: "Technology priorities change as business goals, risks, suppliers, and systems evolve. IBCS can support periodic advisory reviews to revisit assumptions, assess progress, and identify decisions that need attention. Reviews may examine roadmap delivery, service performance, emerging dependencies, budget changes, and lessons from incidents or user feedback. The agenda should be tied to real decisions rather than recurring meetings without clear outcomes. Ongoing advisory arrangements need defined scope, participation, deliverables, and expectations so both parties understand the value and limits of the service.",
  },
];

// Backward-compatible alias for existing imports
export const CYBERSECURITY_SECTIONS = IT_CONSULTING_SECTIONS;

const SECTION_ICONS_MAP = {
  1: Compass,
  2: Target,
  3: Search,
  4: Users,
  5: Activity,
  6: Milestone,
  7: Rocket,
  8: BarChart3,
  9: Boxes,
  10: Scale,
  11: Split,
  12: UserCheck,
  13: Receipt,
  14: Cloud,
  15: BadgeDollarSign,
  16: Server,
  17: LayoutGrid,
  18: History,
  19: Cable,
  20: Database,
  21: Sparkles,
  22: LineChart,
  23: Bot,
  24: Shield,
  25: Lock,
  26: Landmark,
  27: Kanban,
  28: GitPullRequest,
  29: IterationCcw,
  30: ListChecks,
  31: LifeBuoy,
  32: RefreshCw,
  33: Cog,
  34: ShieldAlert,
  35: Calculator,
  36: ShoppingCart,
  37: FileSignature,
  38: TrendingUp,
  39: FileText,
  40: GraduationCap,
  41: FlaskConical,
  42: Gauge,
  43: AlertTriangle,
  44: Award,
  45: Presentation,
  46: CheckCircle2,
  47: Infinity,
};

export function getSectionIcon(id) {
  return SECTION_ICONS_MAP[id] || Compass;
}

export function SectionIcon({ id, size = 20, color = 'currentColor', strokeWidth = 2, className = '' }) {
  const IconComponent = getSectionIcon(id);
  return React.createElement(IconComponent, { size, color, strokeWidth, className });
}
