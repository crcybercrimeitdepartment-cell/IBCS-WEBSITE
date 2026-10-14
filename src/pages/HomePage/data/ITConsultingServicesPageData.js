import {
  Cloud,
  Cpu,
  Monitor,
  Smartphone,
  Globe,
  ShieldCheck,
  BarChart3,
  Infinity as InfinityIcon,
  LifeBuoy,
  Wifi,
  Radio,
  Waypoints,
  BrainCircuit,
  Database,
  RefreshCw,
  Layers,
  FileCheck,
  Server,
  Network,
  Bot,
  Zap,
  KeyRound,
  Lock,
  Boxes,
  Crosshair,
  Sparkles,
  HardDrive,
  Workflow,
  Activity,
  Terminal,
  MessageSquare,
  TestTube2,
  ScanFace,
  Shield,
  FolderGit2,
  Eye,
  Sliders,
  DollarSign,
  FileText,
  Code2,
  RadioTower,
  CheckCircle2,
  Gauge,
  Box,
  Headphones,
  GitBranch,
  ArrowUpDown,
  Rocket,
  Search,
  Leaf
} from 'lucide-react';

const ICON_REGISTRY = [
  Cloud,          // 1
  Cpu,            // 2
  Monitor,        // 3
  Smartphone,     // 4
  Globe,          // 5
  ShieldCheck,    // 6
  BarChart3,      // 7
  InfinityIcon,   // 8
  LifeBuoy,       // 9
  Wifi,           // 10
  Radio,          // 11
  Waypoints,      // 12
  BrainCircuit,   // 13
  Database,       // 14
  RefreshCw,      // 15
  Layers,         // 16
  FileCheck,      // 17
  Server,         // 18
  Network,        // 19
  Bot,            // 20
  Zap,            // 21
  KeyRound,       // 22
  Lock,           // 23
  Boxes,          // 24
  Crosshair,      // 25
  Sparkles,       // 26
  HardDrive,      // 27
  Workflow,       // 28
  Activity,       // 29
  Terminal,       // 30
  MessageSquare,  // 31
  TestTube2,      // 32
  ScanFace,       // 33
  Shield,         // 34
  FolderGit2,     // 35
  Eye,            // 36
  Sliders,        // 37
  DollarSign,     // 38
  FileText,       // 39
  Code2,          // 40
  RadioTower,     // 41
  CheckCircle2,   // 42
  Gauge,          // 43
  Box,            // 44
  Headphones,     // 45
  GitBranch,      // 46
  ArrowUpDown,    // 47
  Rocket,         // 48
  Search,         // 49
  Leaf            // 50
];

export function getSectionIcon(id) {
  const index = (Number(id) - 1) % ICON_REGISTRY.length;
  return ICON_REGISTRY[index] || Globe;
}

export const IT_CONSULTING_SECTIONS = [
  {
    id: 1,
    title: 'Cloud Services & Architecture',
    description: 'Architecting resilient, elastic multi-cloud ecosystems across AWS, Azure, and Google Cloud with automated provisioning, zero-downtime scaling, and strict enterprise security.'
  },
  {
    id: 2,
    title: 'IT Strategic Consulting & Advisory',
    description: 'Providing comprehensive IT leadership, technology stack evaluations, enterprise digital transformation roadmaps, and alignment of technology investments with strategic business outcomes.'
  },
  {
    id: 3,
    title: 'UI/UX Product Design & Experience',
    description: 'Crafting intuitive digital interfaces, accessible user experiences, interactive prototypes, and design systems that maximize user adoption across web and enterprise platforms.'
  },
  {
    id: 4,
    title: 'Mobile App Development & Platforms',
    description: 'Building high-performance native iOS, Android, and cross-platform mobile solutions with offline sync capabilities, biometrics, and seamless API integrations.'
  },
  {
    id: 5,
    title: 'Enterprise Web Development',
    description: 'Developing high-throughput responsive web platforms, modern single-page applications, and cloud-native frontends utilizing modern React, TypeScript, and robust micro-frontend architectures.'
  },
  {
    id: 6,
    title: 'Cybersecurity & Threat Mitigation',
    description: 'Protecting mission-critical digital assets with defense-in-depth security architectures, Zero Trust network access, automated vulnerability detection, and end-to-end data encryption.'
  },
  {
    id: 7,
    title: 'Data Analytics & Business Intelligence',
    description: 'Transforming operational data into actionable strategic intelligence through scalable data warehouses, interactive executive dashboards, and real-time streaming analytics.'
  },
  {
    id: 8,
    title: 'DevOps & Continuous Delivery (CI/CD)',
    description: 'Streamlining software delivery lifecycles through automated CI/CD pipelines, GitOps workflows, automated testing frameworks, and containerized deployment pipelines.'
  },
  {
    id: 9,
    title: '24/7 Managed Infrastructure & Support',
    description: 'Ensuring continuous business operations with round-the-clock infrastructure telemetry, proactive incident management, automated system patching, and rapid SLA escalation protocols.'
  },
  {
    id: 10,
    title: 'IoT Fleet & Sensor Telemetry Systems',
    description: 'Deploying robust IoT device management platforms capable of ingesting millions of telemetry data points per second with low-latency device control and remote fleet monitoring.'
  },
  {
    id: 11,
    title: 'Edge Computing & Micro-Datacenters',
    description: 'Processing compute workloads near data generation sources to minimize network latency, reduce bandwidth overhead, and provide offline operational continuity for smart devices.'
  },
  {
    id: 12,
    title: 'Microservices & API Gateway Orchestration',
    description: 'Decomposing complex monoliths into independently scalable microservices governed by secure API gateways, mutual TLS authentication, and distributed event buses.'
  },
  {
    id: 13,
    title: 'Artificial Intelligence & Smart Automation',
    description: 'Integrating machine learning models, natural language processing, predictive analytics, and autonomous cognitive automation to transform enterprise productivity.'
  },
  {
    id: 14,
    title: 'Database Architecture & Clustering',
    description: 'Designing highly available SQL and NoSQL database topologies with geo-replicated failover, multi-master synchronization, and sub-millisecond query optimization.'
  },
  {
    id: 15,
    title: 'Disaster Recovery & Business Continuity',
    description: 'Engineering bulletproof backup strategies, automated failover drills, and recovery time objectives (RTO/RPO) that safeguard institutional continuity against disruptions.'
  },
  {
    id: 16,
    title: 'ERP & Core Enterprise Integration',
    description: 'Unifying fragmented corporate software ecosystems through unified ERP connectors, SAP/Oracle enterprise middleware, and automated financial transaction pipelines.'
  },
  {
    id: 17,
    title: 'Regulatory Compliance & Risk Governance',
    description: 'Auditing and aligning digital operations with global data governance standards, GDPR, HIPAA, SOC 2, and ISO 27001 compliance frameworks with continuous attestation.'
  },
  {
    id: 18,
    title: 'Hybrid Cloud Migration & Modernisation',
    description: 'Migrating legacy on-premises servers to secure cloud environments with containerization, re-architecting, and optimized lift-and-shift execution strategies.'
  },
  {
    id: 19,
    title: 'Network Virtualisation & SD-WAN',
    description: 'Optimizing corporate connectivity across global offices through software-defined wide area networks, secure encrypted tunnels, and dynamic packet routing.'
  },
  {
    id: 20,
    title: 'Robotic Process Automation (RPA)',
    description: 'Automating high-volume repetitive administrative tasks with intelligent bot workflows, OCR document recognition, and zero-error system synchronization.'
  },
  {
    id: 21,
    title: 'Smart Edge Systems & Industrial IoT',
    description: 'Empowering smart factories and industrial facilities with ruggedized edge computing units, SCADA system bridges, and automated machine telemetry.'
  },
  {
    id: 22,
    title: 'Identity & Access Management (IAM)',
    description: 'Implementing role-based access control (RBAC), multi-factor authentication (MFA), single sign-on (SSO), and privileged access security across enterprise directories.'
  },
  {
    id: 23,
    title: 'Quantum-Resistant Cryptography & HSMs',
    description: 'Preparing cryptographic infrastructures for post-quantum realities through lattice-based algorithms, hardware security modules, and automated key rotation cycles.'
  },
  {
    id: 24,
    title: 'Data Governance & MDM Architecture',
    description: 'Establishing single source of truth master data management (MDM) systems with strict data lineage, deduplication engines, and governance controls.'
  },
  {
    id: 25,
    title: 'Kubernetes Container Orchestration',
    description: 'Operating production-grade Kubernetes clusters with Istio service mesh, auto-scaling worker nodes, and declarative Helm-based application deployment.'
  },
  {
    id: 26,
    title: 'Penetration Testing & Red Teaming',
    description: 'Conducting ethical security penetration tests, adversary simulation exercises, and code-level vulnerability analyses to uncover and remediate attack vectors.'
  },
  {
    id: 27,
    title: 'Serverless Computing & Event Pipelines',
    description: 'Building event-driven micro-applications on serverless compute backends with zero idle server costs and instant response to traffic surges.'
  },
  {
    id: 28,
    title: 'IT Asset Lifecycle Management',
    description: 'Tracking, configuring, and retiring hardware and software assets with automated licensing monitoring, hardware health diagnostics, and audit tracking.'
  },
  {
    id: 29,
    title: 'Digital Workplace Modernisation',
    description: 'Equipping hybrid workforces with secure virtual desktops, cloud productivity suites, and zero-trust remote access solutions.'
  },
  {
    id: 30,
    title: 'High-Performance Computing (HPC)',
    description: 'Configuring GPU-accelerated computing clusters for scientific modeling, algorithmic simulation, financial modeling, and deep learning training.'
  },
  {
    id: 31,
    title: 'Unified Communications & VoIP Tech',
    description: 'Deploying carrier-grade cloud PBX, encrypted video conferencing, and automated omnichannel customer engagement platforms.'
  },
  {
    id: 32,
    title: 'Automated Quality Assurance & Testing',
    description: 'Executing comprehensive regression, load, stress, and security test automation suites across multi-browser and multi-device matrixes.'
  },
  {
    id: 33,
    title: 'Edge AI Inference & Computer Vision',
    description: 'Running optimized computer vision algorithms and neural network inference directly on edge camera hardware for real-time video intelligence.'
  },
  {
    id: 34,
    title: 'Endpoint Security & MDM Solutions',
    description: 'Safeguarding distributed corporate laptops and mobile devices through remote wipe capabilities, endpoint detection and response (EDR), and encryption.'
  },
  {
    id: 35,
    title: 'Enterprise Data Lakehouse Architecture',
    description: 'Merging the best of data warehouses and data lakes with ACID transactions, open table formats, and lightning-fast SQL query execution engines.'
  },
  {
    id: 36,
    title: 'Continuous Security Operations (SOC)',
    description: 'Monitoring security events 24/7 using SIEM platforms, AI-driven behavioral anomaly detection, and automated threat containment playbooks.'
  },
  {
    id: 37,
    title: 'Legacy Codebase Refactoring',
    description: 'Modernizing mission-critical legacy software into modular microservices without disrupting ongoing daily operational workflows.'
  },
  {
    id: 38,
    title: 'Multi-Cloud FinOps & Cost Optimization',
    description: 'Analyzing and reducing cloud expenditure through reserved instance planning, resource rightsizing, and automated idle workload shutdown policies.'
  },
  {
    id: 39,
    title: 'Intelligent Document Processing (IDP)',
    description: 'Extracting and validating structured data from unstructured contracts, invoices, and institutional records using computer vision and language models.'
  },
  {
    id: 40,
    title: 'DevSecOps & Secure Coding Pipelines',
    description: 'Injecting automated static and dynamic security analysis (SAST/DAST) directly into developer git workflows before code reaches production.'
  },
  {
    id: 41,
    title: 'IoT Cryptographic OTA Firmware Updates',
    description: 'Delivering secure over-the-air firmware updates with cryptographic checksum validation, roll-back safety mechanisms, and fleet telemetry.'
  },
  {
    id: 42,
    title: 'High-Availability SLA Engineering',
    description: 'Designing fault-tolerant infrastructure topologies with 99.999% uptime guarantees, distributed quorum consensus, and instant health failover.'
  },
  {
    id: 43,
    title: 'Full-Stack Observability & Tracing',
    description: 'Correlating application logs, distributed traces, and metric telemetry into single-pane dashboards for rapid root-cause diagnosis.'
  },
  {
    id: 44,
    title: 'Enterprise Distributed Ledgers',
    description: 'Building immutable record verification systems, private permissioned ledgers, and tamper-proof multi-party transaction audit trails.'
  },
  {
    id: 45,
    title: 'ITSM & ITIL Service Desk Systems',
    description: 'Structuring customer and internal IT support requests with automated SLA routing, knowledge bases, and self-service portal workflows.'
  },
  {
    id: 46,
    title: 'Real-Time Event Streaming & Kafka',
    description: 'Orchestrating high-throughput distributed event streaming backbones for real-time sensor processing, stock feeds, and payment systems.'
  },
  {
    id: 47,
    title: 'Edge-to-Cloud Distributed Caching',
    description: 'Deploying globally distributed Redis and CDN caching layers that deliver millisecond content response times worldwide.'
  },
  {
    id: 48,
    title: 'Zero-Downtime Canary Deployments',
    description: 'Gradually rolling out new application versions to a fraction of user traffic with automated health monitoring and instantaneous rollback capability.'
  },
  {
    id: 49,
    title: 'Cognitive Knowledge Discovery',
    description: 'Enabling enterprise-wide semantic search and vector database retrieval across millions of corporate documents, wikis, and technical archives.'
  },
  {
    id: 50,
    title: 'Sustainable Green Computing',
    description: 'Optimizing data center computing workloads, reducing server carbon footprints, and scheduling resource-heavy jobs during low-carbon grid hours.'
  }
];
