/**
 * IBCS IT SERVICES
 * CARD 14 — API DEVELOPMENT & INTEGRATION SERVICES
 * Comprehensive Data Store: 66 Strategic Capabilities & Service Offerings
 * Extracted from official specification: IBCS_IT_Services_Card_14_API_Development_Integration_Services.docx
 */

export const apiDevelopmentIntegrationServicesData = {
  metadata: {
    organization: "IBCS IT SERVICES",
    cardTitle: "CARD 14 — API DEVELOPMENT & INTEGRATION SERVICES",
    serviceName: "API Development & Integration Services",
    sectionTitle: "Service Scope and Capability Overview",
    totalCapabilities: 66,
    overview: "IBCS API Development & Integration focuses on building secure, scalable application programming interfaces that enable seamless communication between disparate software systems. We facilitate smooth data exchange and enhance system interoperability across enterprise environments."
  },
  screenData: {
    windowTitle: "IBCS Integration Platform",
    status: "ACTIVE",
    category: "SERVICES",
    subCategory: "Ecosystem Architecture",
    heading: "API Development & Integration",
    description: "IBCS API Development & Integration focuses on building secure, scalable application programming interfaces that enable seamless communication between disparate software systems. We facilitate smooth data exchange and enhance system interoperability across enterprise environments.",
    cards: [
      {
        id: 1,
        title: "Scope & Governance",
        theme: "blue",
        accentColor: "#2563eb",
        points: [
          "Identify integration goals & consumers",
          "Define boundaries & constraints",
          "Establish ownership & lifecycle"
        ]
      },
      {
        id: 2,
        title: "Pragmatic Roadmap",
        theme: "emerald",
        accentColor: "#059669",
        points: [
          "Tailored delivery suited to architecture",
          "Reflects real workflows & conditions",
          "Avoids unnecessary new APIs"
        ]
      }
    ]
  },
  sceneTheme: {
    gear: {
      teeth: 6,
      outerR: 1.55,
      innerR: 1.05,
      color: 0xfcaaa8,
      rotationSpeed: 0.35,
      hub: {
        radius: 0.74,
        text: "API",
        textColor: "#252156",
        bgColor: "#ffffff",
        borderColor: "#252156",
        borderWidth: 28,
        accentRingColor: "rgba(37, 33, 86, 0.12)"
      }
    },
    servers: [
      { color: 0xfcd7cf, y: 1.0, isCyanLed: false },
      { color: 0xffffff, y: 0.0, isCyanLed: true },
      { color: 0xc9afde, y: -1.0, isCyanLed: false }
    ],
    laptop: {
      deckColor: 0x4ee3d7,
      lidColor: 0xd2ddf3,
      screenW: 4.6,
      screenH: 3.1
    },
    blob: {
      color: 0xe2ebf5
    },
    cables: {
      color: 0x252156,
      photonColor: 0x00ffff
    }
  },
  categories: [
    "Strategy, Design & Protocols",
    "Versioning, Docs & Gateway",
    "Security, Auth & Privacy",
    "Data Formatting, Query & Transfer",
    "Event-Driven & Messaging",
    "Ecosystem & Provider Integrations",
    "Resilience & Performance",
    "Observability & Testing",
    "Lifecycle & Governance",
    "Data Engineering & Batching",
    "DevOps & Infrastructure",
    "Operations, Architecture & Handover"
  ],
  capabilities: [
    {
        "id": 1,
        "title": "API Strategy and Integration Assessment",
        "category": "Strategy, Design & Protocols",
        "description": "IBCS can help assess API requirements across applications, services, data platforms, and external systems. The assessment may identify integration goals, consumers, data boundaries, operational constraints, security needs, and ownership. Findings can inform an API roadmap and delivery approach suited to the product’s architecture. Recommendations should reflect actual business workflows and technical conditions rather than assume that every system requires a new API."
    },
    {
        "id": 2,
        "title": "API Requirements and Contract Definition",
        "category": "Strategy, Design & Protocols",
        "description": "IBCS can support definition of API contracts before implementation, including resource names, operations, request and response formats, status codes, validation rules, and error behaviour. Contracts should make expected behaviour clear to both providers and consumers. Open questions and compatibility expectations should be documented early. A stable contract helps frontend, backend, and partner teams coordinate work and reduces avoidable integration misunderstandings."
    },
    {
        "id": 3,
        "title": "REST API Design",
        "category": "Strategy, Design & Protocols",
        "description": "IBCS can help design REST-style APIs around resources, predictable HTTP methods, consistent status codes, and clear response structures. Design decisions may cover filtering, sorting, pagination, resource relationships, and error formats. Endpoints should follow a consistent naming convention and avoid unnecessary complexity. REST conventions should be applied in ways that match the product’s needs, existing standards, and the expectations of intended API consumers."
    },
    {
        "id": 4,
        "title": "GraphQL API Design",
        "category": "Strategy, Design & Protocols",
        "description": "IBCS can support GraphQL API design where clients benefit from selecting specific fields or traversing connected data through a typed schema. Work may include schema modelling, query and mutation design, resolver boundaries, pagination, and error handling. Query cost and access control require careful consideration. GraphQL should be selected based on consumer requirements and operational trade-offs, not simply as a replacement for every REST endpoint."
    },
    {
        "id": 5,
        "title": "SOAP and Legacy Service Integration",
        "category": "Strategy, Design & Protocols",
        "description": "IBCS can help integrate SOAP-based or other legacy services when existing systems expose established contracts and cannot be replaced immediately. Work may include understanding service definitions, mapping message formats, handling faults, and coordinating authentication. Adapters can help newer applications interact with older interfaces while limiting changes to the legacy system. Integration design should account for the constraints and support arrangements of the existing platform."
    },
    {
        "id": 6,
        "title": "API Versioning and Compatibility",
        "category": "Versioning, Docs & Gateway",
        "description": "IBCS can support versioning strategies that manage API evolution while reducing disruption for existing consumers. Options may include URI, header, or schema-based approaches depending on the API style and governance requirements. Compatibility rules should explain how fields, operations, and behaviours may change. Deprecation notices, migration guidance, and a transition period can help consumers move to a newer version in an orderly manner."
    },
    {
        "id": 7,
        "title": "API Documentation and Developer Guides",
        "category": "Versioning, Docs & Gateway",
        "description": "IBCS can help prepare API documentation covering authentication, endpoints, parameters, schemas, examples, error responses, limits, and common workflows. Documentation should be consistent with the actual contract and updated when implementation changes. OpenAPI or other suitable specifications may be used where applicable. Clear guides help internal teams and external integrators understand expected behaviour and troubleshoot routine integration issues."
    },
    {
        "id": 8,
        "title": "OpenAPI Specification and Schema Design",
        "category": "Versioning, Docs & Gateway",
        "description": "IBCS can support machine-readable API descriptions using OpenAPI for suitable HTTP APIs. Work may define paths, operations, reusable schemas, parameters, security schemes, and response formats. Schema naming and reuse should remain understandable as the contract grows. Specification validation can help identify structural issues, while review by API consumers can reveal ambiguities that automated checks alone may not catch."
    },
    {
        "id": 9,
        "title": "API Gateway Planning and Configuration",
        "category": "Versioning, Docs & Gateway",
        "description": "IBCS can help plan API gateway responsibilities such as routing, authentication enforcement, rate limits, request transformation, and centralised observability. The gateway should have a clearly defined role and should not become a substitute for appropriate service-level controls. Configuration should account for availability, failure behaviour, and operational ownership. Gateway selection and deployment depend on the hosting environment and integration requirements."
    },
    {
        "id": 10,
        "title": "API Authentication and Authorization",
        "category": "Security, Auth & Privacy",
        "description": "IBCS can support API access-control design using suitable mechanisms such as OAuth 2.0, OpenID Connect, service credentials, or signed requests where appropriate. Authentication establishes identity, while authorization determines permitted actions and resources. Permissions should follow least-privilege principles and be checked at relevant service boundaries. The selected approach should match the client type, risk profile, and identity infrastructure."
    },
    {
        "id": 11,
        "title": "API Endpoint Security Implementation and Validation",
        "category": "Security, Auth & Privacy",
        "description": "Within an API engineering engagement, IBCS can help implement and validate controls such as endpoint-level authorisation, schema validation, request limits, safe error responses, transport protection, and consistent security middleware. Work may include security-focused API tests, negative test cases, and checks that sensitive fields are not returned to unauthorised callers. The implementation should follow the agreed API specification and technology stack. Independent penetration testing or a formal security assessment should be scoped separately when required."
    },
    {
        "id": 12,
        "title": "Input Validation and Data Sanitisation",
        "category": "Security, Auth & Privacy",
        "description": "IBCS can support consistent validation of API inputs, including types, formats, length limits, allowed values, and required fields. Validation should occur at trust boundaries and be complemented by safe handling of data in downstream systems. Error responses should communicate invalid input without disclosing internal implementation details. Rules should be documented and tested so that different services interpret the same data consistently."
    },
    {
        "id": 13,
        "title": "Rate Limiting and Abuse Protection",
        "category": "Security, Auth & Privacy",
        "description": "IBCS can help design rate limits and usage controls that protect APIs from accidental overload and abusive request patterns. Policies may consider client identity, endpoint sensitivity, burst behaviour, quotas, and legitimate traffic needs. Responses should indicate when requests are limited and, where suitable, when clients may retry. Thresholds require monitoring and tuning to avoid blocking normal workloads or creating an easy denial-of-service path."
    },
    {
        "id": 14,
        "title": "API Credential Lifecycle Security",
        "category": "Security, Auth & Privacy",
        "description": "IBCS can help manage credentials used specifically by APIs and integrations, including API keys, OAuth client secrets, signing keys, and certificates. Depending on the design, this may include credential issuance, scoped permissions, environment separation, rotation, expiry handling, secure delivery, and revocation procedures. Credentials should not be embedded in source code or exposed in logs and error messages. The integration design should document which service owns each credential and how exposure is reported and addressed."
    },
    {
        "id": 15,
        "title": "Data Privacy and Minimisation in APIs",
        "category": "Security, Auth & Privacy",
        "description": "IBCS can help review API payloads to ensure they expose only the information required for an approved purpose. Design may cover field-level permissions, masking, retention considerations, consent-dependent flows, and sensitive data in logs. Privacy requirements should be confirmed with appropriate stakeholders and applicable rules. Minimising unnecessary data reduces exposure and can make contracts easier for consumers to understand and maintain."
    },
    {
        "id": 16,
        "title": "Request and Response Schema Validation",
        "category": "Data Formatting, Query & Transfer",
        "description": "IBCS can support schema validation for incoming requests and outgoing responses to detect contract violations. Checks may cover required properties, data types, enumerations, formats, and nested structures. Validation rules should be consistent across services and versions. Where validation fails, errors should be logged appropriately and returned in a predictable format without exposing secrets or sensitive internal details."
    },
    {
        "id": 17,
        "title": "Error Handling and Standard Response Formats",
        "category": "Data Formatting, Query & Transfer",
        "description": "IBCS can help define consistent error structures that include a useful code, safe message, and relevant field details where appropriate. Responses should distinguish client errors, authentication failures, permission issues, missing resources, rate limits, and server failures. Internal stack traces and confidential implementation details should not be returned to consumers. Stable error contracts make integrations easier to debug and maintain."
    },
    {
        "id": 18,
        "title": "Pagination, Filtering, and Sorting",
        "category": "Data Formatting, Query & Transfer",
        "description": "IBCS can support pagination and query controls for APIs that return collections or large datasets. Choices may include offset-based or cursor-based pagination, bounded page sizes, allowlisted filters, and deterministic sorting. Design should address consistency when records change between requests. Query options need validation and limits so that convenience for consumers does not create excessive database load or unpredictable response times."
    },
    {
        "id": 19,
        "title": "Search and Query Endpoint Design",
        "category": "Data Formatting, Query & Transfer",
        "description": "IBCS can help design search-oriented endpoints that expose relevant query capabilities while preserving performance and access boundaries. Requirements may include search terms, filters, result counts, sorting, and pagination. The contract should define matching behaviour and how unsupported queries are handled. Search endpoints should apply authorization before returning results and avoid revealing records that a consumer is not permitted to access."
    },
    {
        "id": 20,
        "title": "File Upload and Download APIs",
        "category": "Data Formatting, Query & Transfer",
        "description": "IBCS can support API patterns for uploading and downloading files, including size limits, content-type checks, metadata, access control, and failure recovery. File handling should account for untrusted content and appropriate storage policies. Large transfers may require streaming or temporary upload mechanisms. The API contract should explain completion status and avoid treating a successful transfer as proof that a file is safe to open."
    },
    {
        "id": 21,
        "title": "Webhook Design and Delivery",
        "category": "Event-Driven & Messaging",
        "description": "IBCS can help design webhooks for notifying consumers about events without requiring constant polling. Contracts should define event types, payloads, signing or verification, retry behaviour, timeout expectations, and duplicate delivery handling. Consumers should be able to validate the sender and process events idempotently. Delivery guarantees and retry policies should be stated accurately, because network failures can produce delayed or repeated notifications."
    },
    {
        "id": 22,
        "title": "Webhook Security and Verification",
        "category": "Event-Driven & Messaging",
        "description": "IBCS can support controls that help webhook consumers verify authenticity and protect against replay or tampering. Depending on the system, this may include message signatures, timestamps, shared secrets, secure transport, and rotation procedures. Sensitive payloads should be minimised, and endpoint failures should be monitored. Verification design should be documented for both sender and receiver so integrations can be implemented consistently."
    },
    {
        "id": 23,
        "title": "Asynchronous APIs and Background Jobs",
        "category": "Event-Driven & Messaging",
        "description": "IBCS can help design asynchronous workflows when a request triggers a long-running process that should not keep a connection open. Patterns may include job identifiers, status endpoints, callbacks, event notifications, and cancellation where supported. The API should define accepted, running, completed, and failed states. Users and consuming systems need a clear way to determine whether work finished and what action is appropriate next."
    },
    {
        "id": 24,
        "title": "Event-Driven Integration",
        "category": "Event-Driven & Messaging",
        "description": "IBCS can support event-driven integration when systems need to react to business events rather than call each other synchronously for every operation. Design may cover event names, payload contracts, ownership, delivery semantics, ordering expectations, and consumer recovery. Events should communicate facts that have occurred, not ambiguous future intentions. The architecture should account for duplicate messages, delayed delivery, and eventual consistency across participating systems."
    },
    {
        "id": 25,
        "title": "Message Queues and Broker Integration",
        "category": "Event-Driven & Messaging",
        "description": "IBCS can help connect applications through message queues or brokers where buffering and decoupling are valuable. Work may define topics or queues, message schemas, acknowledgement behaviour, retry limits, dead-letter handling, and consumer scaling. Queueing can improve resilience but introduces operational complexity and possible delays. Monitoring and ownership should be established for stuck messages, growing backlogs, and repeated processing failures."
    },
    {
        "id": 26,
        "title": "Third-Party API Integration",
        "category": "Ecosystem & Provider Integrations",
        "description": "IBCS can support integration with external providers such as payment platforms, identity services, communication tools, mapping services, or business applications, depending on project scope. Work may include reviewing provider documentation, mapping data models, configuring credentials, and handling provider-specific errors. External dependencies can change availability, pricing, or contract terms, so integrations should include monitoring and a plan for provider updates."
    },
    {
        "id": 27,
        "title": "Payment and Transaction API Integration",
        "category": "Ecosystem & Provider Integrations",
        "description": "IBCS can help integrate payment or transaction APIs with clear handling for authorisation, confirmation, failure, cancellation, and reconciliation. The design should avoid assuming that a timeout means a transaction failed. Idempotency and provider status checks can help prevent duplicate operations. Sensitive payment data should be handled according to the provider’s documented requirements and applicable security obligations."
    },
    {
        "id": 28,
        "title": "Identity Provider and SSO Integration",
        "category": "Ecosystem & Provider Integrations",
        "description": "IBCS can support API integration with identity providers and single sign-on systems using appropriate standards and provider capabilities. Work may include token validation, claims mapping, role mapping, session boundaries, and error handling. Token audiences, expiry, and scopes should be checked according to the design. Identity integration should be tested across expected account states and should not rely on unverified client-supplied identity claims."
    },
    {
        "id": 29,
        "title": "Database and Data-Service Integration",
        "category": "Ecosystem & Provider Integrations",
        "description": "IBCS can help connect APIs to databases and data services through defined repository or service boundaries. Design should address query efficiency, transaction scope, connection management, and safe mapping between external schemas and internal models. Database structures should not automatically become public API contracts. Separating the external contract from storage details helps teams evolve persistence layers without unnecessarily breaking consumers."
    },
    {
        "id": 30,
        "title": "Microservices API Integration",
        "category": "Ecosystem & Provider Integrations",
        "description": "IBCS can support communication patterns between microservices, including synchronous requests, events, and service-to-service authentication. Each interaction should have a clear owner, contract, timeout, and failure strategy. Excessive cross-service dependencies can make systems difficult to operate, so integration should be designed around bounded responsibilities. Service discovery, tracing, and compatibility practices may be included according to the platform architecture."
    },
    {
        "id": 31,
        "title": "API Orchestration and Backend-for-Frontend",
        "category": "Ecosystem & Provider Integrations",
        "description": "IBCS can help assess whether orchestration or a backend-for-frontend layer would simplify client integration. Such a layer can combine data from multiple services, adapt payloads to client needs, or centralise workflow logic. It also introduces another component to secure and operate. Responsibilities should be explicit so business rules are not duplicated unpredictably across clients, gateways, and backend services."
    },
    {
        "id": 32,
        "title": "API Performance Profiling",
        "category": "Resilience & Performance",
        "description": "IBCS can support performance analysis of API endpoints by measuring latency, throughput, payload size, database time, and dependency delays under agreed conditions. Results should identify the tested workload and environment. Optimisation may involve query improvements, caching, payload reduction, concurrency limits, or architectural changes. Performance findings should be based on measurements rather than assumptions, and changes should be re-tested for correctness."
    },
    {
        "id": 33,
        "title": "Caching Strategy for APIs",
        "category": "Resilience & Performance",
        "description": "IBCS can help design caching where responses can be safely reused to reduce latency or backend load. Decisions may cover cache keys, freshness, invalidation, private versus shared caches, and relevant HTTP headers. Sensitive or user-specific responses require special care to prevent cross-user exposure. Cache behaviour should be documented because stale data may be acceptable for some endpoints but unsafe for others."
    },
    {
        "id": 34,
        "title": "Timeouts, Retries, and Resilience",
        "category": "Resilience & Performance",
        "description": "IBCS can support resilience policies for network calls, including sensible timeouts, bounded retries, backoff, and circuit-breaking patterns where appropriate. Retrying non-idempotent operations without safeguards can duplicate side effects. Each integration should define what happens when a dependency is slow or unavailable. Resilience policies should be coordinated across service layers to avoid retry storms and excessive load."
    },
    {
        "id": 35,
        "title": "Idempotency and Duplicate Request Handling",
        "category": "Resilience & Performance",
        "description": "IBCS can help design idempotent behaviour for operations that may be retried due to timeouts or uncertain client responses. Where suitable, idempotency keys and request records can help recognise repeated submissions. The contract should define key scope, retention, conflict behaviour, and response reuse. These mechanisms are especially important for payments, order creation, and other actions where duplicate processing can cause material consequences."
    },
    {
        "id": 36,
        "title": "Transactions and Consistency Across Services",
        "category": "Resilience & Performance",
        "description": "IBCS can support design discussions about transaction boundaries when one business operation spans multiple APIs or services. Options may include local transactions, compensating actions, sagas, or eventual consistency, depending on the system. The design should identify partial-failure scenarios and the way users or operators can see status. Distributed workflows should not imply atomic guarantees unless the implementation genuinely provides them."
    },
    {
        "id": 37,
        "title": "API Logging and Observability",
        "category": "Observability & Testing",
        "description": "IBCS can help establish API observability using structured logs, metrics, traces, correlation identifiers, and meaningful operational events. Telemetry should help diagnose failures and latency without unnecessarily collecting credentials or personal data. Logging levels and retention should match operational and privacy requirements. Consistent correlation identifiers can make it easier to follow a request across gateways, services, and external dependencies."
    },
    {
        "id": 38,
        "title": "API Monitoring and Alerting",
        "category": "Observability & Testing",
        "description": "IBCS can support monitoring for API availability, latency, error rates, saturation, rate limiting, and dependency health. Alerts should be tied to actionable conditions and routed to responsible teams. Thresholds need context to avoid noisy notifications and missed incidents. Monitoring should distinguish user-visible impact from isolated internal errors and should be tested so that alerting works during realistic failure scenarios."
    },
    {
        "id": 39,
        "title": "API Testing Strategy",
        "category": "Observability & Testing",
        "description": "IBCS can help establish API test coverage across contract validation, functional behaviour, authentication, authorization, negative cases, and integration scenarios. Test cases should include boundary values, malformed input, permission differences, and expected failure paths. Test environments and data should be managed safely. The strategy should define which checks run locally, in continuous integration, and before release according to risk and delivery needs."
    },
    {
        "id": 40,
        "title": "Unit and Component Testing for APIs",
        "category": "Observability & Testing",
        "description": "IBCS can support unit and component tests for API handlers, validation logic, business rules, and response mapping. Tests should verify meaningful behaviour rather than mirror implementation details so closely that routine refactoring breaks them unnecessarily. Dependencies may be isolated with suitable test doubles, while important integration behaviour is tested separately. Clear assertions help teams detect regressions during ongoing development."
    },
    {
        "id": 41,
        "title": "Contract and Consumer-Driven Testing",
        "category": "Observability & Testing",
        "description": "IBCS can help use contract testing to verify that API providers and consumers agree on expected requests and responses. Consumer-driven contracts may be useful when teams deploy independently. Tests should cover required fields, optional fields, error cases, and compatibility expectations. Contract testing complements end-to-end testing by locating mismatches earlier, but it cannot replace validation of all production-like behaviours."
    },
    {
        "id": 42,
        "title": "Integration and End-to-End API Testing",
        "category": "Observability & Testing",
        "description": "IBCS can support integration tests across APIs, databases, queues, and external services using controlled test environments. End-to-end tests should focus on critical business journeys and verify outcomes across component boundaries. Test data must be isolated and repeatable, and third-party dependencies may need sandboxing. Failures should provide enough diagnostics to identify whether the issue lies in a contract, configuration, dependency, or business rule."
    },
    {
        "id": 43,
        "title": "Load and Stress Testing",
        "category": "Observability & Testing",
        "description": "IBCS can help plan load, stress, and endurance tests to understand API behaviour under defined traffic conditions. Test plans should specify workload shape, concurrency, duration, test data, and success criteria. Testing must be authorised and isolated from unrelated production systems unless a safe production test is explicitly approved. Results should identify bottlenecks and recovery behaviour rather than report a single peak number without context."
    },
    {
        "id": 44,
        "title": "Mock Servers and Developer Sandboxes",
        "category": "Observability & Testing",
        "description": "IBCS can support mock API servers or sandboxes that let consumers develop before a live integration is available. Examples should follow the contract and represent common success and error cases. Sandbox credentials and data should be separate from production. Mock behaviour must be labelled clearly so consumers do not assume that simulated availability, timing, or provider responses exactly match the real service."
    },
    {
        "id": 45,
        "title": "API Lifecycle and Release Management",
        "category": "Lifecycle & Governance",
        "description": "IBCS can help define an API lifecycle from proposal and design through development, review, publication, monitoring, deprecation, and retirement. Release practices should include compatibility checks, release notes, ownership, and rollback planning where applicable. Lifecycle governance should fit the organisation’s size and risk profile. Clear stages help teams understand which APIs are experimental, supported, deprecated, or no longer available."
    },
    {
        "id": 46,
        "title": "API Catalog and Developer Portal",
        "category": "Lifecycle & Governance",
        "description": "IBCS can support an API catalog or developer portal that presents available APIs, ownership, access procedures, documentation, versions, and usage guidance. The catalog should make discovery easier while restricting sensitive internal details to authorised audiences. Entries need clear maintenance responsibilities so obsolete APIs are not presented as current. Portal capabilities should reflect the actual access model and support process."
    },
    {
        "id": 47,
        "title": "API Access Provisioning and Consumer Onboarding",
        "category": "Lifecycle & Governance",
        "description": "IBCS can help design onboarding for internal teams, partners, or approved external developers. The process may cover application registration, access approval, credential issuance, test access, quota explanation, and support contacts. Required checks should be clear and proportionate to the data and operations involved. Access should be granted through documented processes and removed when no longer needed."
    },
    {
        "id": 48,
        "title": "API Governance and Design Standards",
        "category": "Lifecycle & Governance",
        "description": "IBCS can support API governance with standards for naming, schemas, authentication, error formats, versioning, documentation, and review. Governance should provide useful guardrails without creating unnecessary delays for delivery teams. Exceptions should have an owner and rationale, and recurring issues can inform updates to the standards. A lightweight review process can improve consistency across independently developed services."
    },
    {
        "id": 49,
        "title": "Data Mapping and Transformation",
        "category": "Data Engineering & Batching",
        "description": "IBCS can help map data between systems with different field names, types, formats, identifiers, and business meanings. Mapping rules should define required values, defaults, conversions, and treatment of missing or invalid information. Transformations must preserve meaning and avoid silently discarding important distinctions. Documented mappings support troubleshooting and make changes easier to assess when either system evolves."
    },
    {
        "id": 50,
        "title": "Time Zones, Dates, and Numeric Formats",
        "category": "Data Engineering & Batching",
        "description": "IBCS can support consistent handling of dates, timestamps, time zones, decimal precision, currencies, and locale-specific formats in API contracts. The design should distinguish a date-only value from an instant in time and define units explicitly. Conversion rules should be tested around boundary conditions such as daylight-saving changes where relevant. Clear representation prevents subtle errors when systems operate across regions."
    },
    {
        "id": 51,
        "title": "Internationalisation and Localised API Content",
        "category": "Data Engineering & Batching",
        "description": "IBCS can help account for localisation when APIs deliver user-facing labels, messages, addresses, or region-dependent options. Contracts may need language preferences, locale identifiers, and a defined fallback strategy. Machine-readable values should be kept distinct from translated display text where practical. Localisation requirements should be coordinated with consuming applications so that language selection and regional formatting remain predictable."
    },
    {
        "id": 52,
        "title": "File Formats and Data Export APIs",
        "category": "Data Engineering & Batching",
        "description": "IBCS can support APIs for generating or delivering structured exports such as CSV, JSON, or other agreed file formats. Design should define schema, encoding, naming, size limits, pagination or asynchronous generation, and failure handling. Export permissions should match the underlying data access rules. Generated files may require expiry and secure retrieval controls to reduce unnecessary exposure of sensitive information."
    },
    {
        "id": 53,
        "title": "Bulk Operations and Batch APIs",
        "category": "Data Engineering & Batching",
        "description": "IBCS can help design bulk APIs for workloads where processing records one at a time would be inefficient. The contract should specify batch limits, per-item outcomes, partial failure behaviour, and retry safety. Large jobs may be better handled asynchronously with status reporting. Batch operations should provide enough detail for clients to identify failed items without requiring them to repeat already successful work."
    },
    {
        "id": 54,
        "title": "API Migration and Integration Modernisation",
        "category": "DevOps & Infrastructure",
        "description": "IBCS can support migration from legacy endpoints or integration patterns to a newer contract or platform. Work may include inventory, dependency mapping, compatibility adapters, staged cutover, consumer communication, and retirement planning. Migration should include validation of critical workflows and a rollback approach where feasible. A staged transition can reduce risk, but its design depends on system coupling and business constraints."
    },
    {
        "id": 55,
        "title": "API Incident Diagnosis and Troubleshooting",
        "category": "DevOps & Infrastructure",
        "description": "IBCS can help investigate API integration issues using request identifiers, timestamps, response codes, traces, and safe diagnostic logs. Troubleshooting should distinguish client errors, provider failures, network issues, authentication problems, and contract mismatches. Sensitive payloads and credentials should not be copied into unsecured reports. Findings should record reproducible symptoms, likely causes, remediation steps, and any follow-up monitoring required."
    },
    {
        "id": 56,
        "title": "API Maintenance and Dependency Updates",
        "category": "DevOps & Infrastructure",
        "description": "IBCS can support ongoing API maintenance, including dependency updates, framework compatibility, certificate renewal, schema changes, and provider API revisions. Updates should be assessed for breaking changes and tested against important consumer journeys. Maintenance planning should include ownership and communication to affected teams. The precise update schedule depends on the platform’s risk, vendor support lifecycle, and operational requirements."
    },
    {
        "id": 57,
        "title": "API Deployment and Environment Configuration",
        "category": "DevOps & Infrastructure",
        "description": "IBCS can help configure API deployments across development, testing, staging, and production environments. Environment-specific settings should be managed consistently, while credentials and sensitive values remain outside source code. Deployment checks may validate health endpoints, configuration, connectivity, and access rules. Environment separation reduces accidental cross-environment data use and supports safer testing and release practices."
    },
    {
        "id": 58,
        "title": "CI/CD Integration for API Delivery",
        "category": "DevOps & Infrastructure",
        "description": "IBCS can support API delivery pipelines that run automated tests, validate specifications, check dependencies, package artifacts, and promote releases through controlled environments. Pipeline design should include appropriate approval gates and protection for secrets. Failed checks should provide actionable feedback. Automation can improve repeatability, but pipeline quality depends on meaningful tests, maintainable configuration, and clear release ownership."
    },
    {
        "id": 59,
        "title": "API Infrastructure as Code",
        "category": "DevOps & Infrastructure",
        "description": "IBCS can help define API-related infrastructure through version-controlled configuration where suitable. This may include gateway policies, service resources, permissions, routing, monitoring, and environment settings. Changes should be reviewed, tested, and traceable. Infrastructure automation can reduce configuration drift, but sensitive values and destructive operations require appropriate controls and recovery planning."
    },
    {
        "id": 60,
        "title": "API Cost and Resource Efficiency",
        "category": "DevOps & Infrastructure",
        "description": "IBCS can support analysis of API resource consumption, including compute, network transfer, storage, gateway usage, and third-party charges. Opportunities may include reducing redundant calls, limiting oversized payloads, caching safe responses, and tuning expensive queries. Cost optimisation should preserve required correctness, security, and service quality. Measurements should distinguish normal usage from unusual spikes and be reviewed as traffic patterns change."
    },
    {
        "id": 61,
        "title": "API Reliability and Service-Level Objectives",
        "category": "Operations, Architecture & Handover",
        "description": "IBCS can help define reliability objectives for API availability, latency, and error rates based on user and business needs. Objectives should have measurable definitions and appropriate observation windows. Service-level indicators need reliable data sources, and targets should reflect realistic architecture and dependency constraints. Reliability reporting should help teams prioritise improvements rather than imply guarantees that the system cannot support."
    },
    {
        "id": 62,
        "title": "API Ownership and Support Model",
        "category": "Operations, Architecture & Handover",
        "description": "IBCS can support definition of API ownership, support channels, escalation paths, maintenance responsibilities, and operational documentation. Consumers should know where to report issues and what information to provide. Ownership should include both contract decisions and runtime operations where appropriate. Clear responsibilities reduce delays during incidents and make it easier to coordinate changes among providers, consumers, and external partners."
    },
    {
        "id": 63,
        "title": "API Security and Privacy Documentation",
        "category": "Operations, Architecture & Handover",
        "description": "IBCS can help document API data classification, authentication expectations, permission boundaries, logging practices, retention considerations, and security contacts. Documentation should avoid publishing credentials or sensitive internal details. Security and privacy statements must reflect verified implementation and approved policies. Keeping these records current helps developers understand the controls they must follow when building or maintaining integrations."
    },
    {
        "id": 64,
        "title": "API Architecture Review and Technical Decision Records",
        "category": "Operations, Architecture & Handover",
        "description": "IBCS can support architecture reviews for API boundaries, protocol selection, synchronous versus asynchronous communication, versioning, and dependency management. Decision records should capture context, options considered, rationale, and consequences. This provides future teams with a clear explanation of why an approach was chosen. Reviews should focus on material trade-offs and avoid introducing complexity without a defined requirement."
    },
    {
        "id": 65,
        "title": "API Integration Delivery Roadmap",
        "category": "Operations, Architecture & Handover",
        "description": "IBCS can help convert integration requirements into a staged delivery roadmap with dependencies, milestones, risk areas, and validation activities. The plan should identify which contracts, credentials, test environments, and external approvals are needed before implementation. Priorities should reflect business value and integration risk. The roadmap can be adjusted as discovery reveals constraints, but scope changes should be recorded and communicated."
    },
    {
        "id": 66,
        "title": "API Handover and Knowledge Transfer",
        "category": "Operations, Architecture & Handover",
        "description": "IBCS can support handover through current specifications, architecture notes, environment guidance, operational runbooks, test instructions, and known limitations. Knowledge-transfer sessions can explain how to deploy, monitor, troubleshoot, and evolve the integration. Documentation should identify owners and access requirements without exposing secrets. A structured handover helps internal teams maintain the solution after the agreed delivery engagement ends."
    }
]
};

export const capabilities = apiDevelopmentIntegrationServicesData.capabilities;
export const metadata = apiDevelopmentIntegrationServicesData.metadata;
export const categories = apiDevelopmentIntegrationServicesData.categories;
export const screenData = apiDevelopmentIntegrationServicesData.screenData;
export const sceneTheme = apiDevelopmentIntegrationServicesData.sceneTheme;

export default apiDevelopmentIntegrationServicesData;
