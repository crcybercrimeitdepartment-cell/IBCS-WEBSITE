import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  CheckCircle2,
  Layers,
  SlidersHorizontal,
  Cpu,
  ShieldCheck,
  Maximize2,
  Laptop,
  Cloud,
  Network,
  Box,
  Gauge,
  Compass,
  Target,
  ChevronLeft,
  ChevronRight,
  Wifi,
  BatteryCharging,
  Smartphone,
  Brain,
  Terminal,
  Code2,
  Database,
  Server,
  Workflow,
  Globe,
  Lock,
  GitBranch,
  Home,
} from 'lucide-react';
import { technologySections } from './IntegrationsAPIsPageData';

// ============================================================================
// CONSOLIDATED DOMAIN ICON & RETRO TV SHOWCASE COMPONENTS
// (Merged from DomainIcon.jsx & RetroTvShowcase.jsx)
// ============================================================================

/**
 * Enterprise SVG Icon Component for IBCS Products
 * Pixel-tailored vector iconography strictly matching the IBCS Brand Design.
 */
export const DomainIcon = ({ type, className = "w-5 h-5" }) => {
  const props = {
    className,
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  switch (type) {
    case "database":
      return (
        <svg {...props}>
          <ellipse cx="12" cy="5" rx="8" ry="3" />
          <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
          <path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
        </svg>
      );
    case "time":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      );
    case "search":
      return (
        <svg {...props}>
          <circle cx="11" cy="11" r="7" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
          <path d="M11 8a3 3 0 0 0-3 3" />
        </svg>
      );
    case "speed":
      return (
        <svg {...props}>
          <path d="M12 14l4-4" />
          <path d="M3.34 19a10 10 0 1 1 17.32 0" />
        </svg>
      );
    case "automation":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      );
    case "workflow":
      return (
        <svg {...props}>
          <rect x="3" y="3" width="6" height="6" rx="1" />
          <rect x="15" y="3" width="6" height="6" rx="1" />
          <rect x="9" y="15" width="6" height="6" rx="1" />
          <path d="M6 9v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9" />
          <path d="M12 13v2" />
        </svg>
      );
    case "decision":
    case "ai":
      return (
        <svg {...props}>
          <path d="M12 2a4 4 0 0 0-4 4v1H6a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2v2H6a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2v1a4 4 0 0 0 8 0v-1h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2v-2h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2V6a4 4 0 0 0-4-4z" />
          <circle cx="9" cy="10" r="1" fill="currentColor" />
          <circle cx="15" cy="10" r="1" fill="currentColor" />
          <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
        </svg>
      );
    case "network":
      return (
        <svg {...props}>
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
        </svg>
      );
    case "security":
    case "cybersecurity":
      return (
        <svg {...props}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "lock":
      return (
        <svg {...props}>
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          <circle cx="12" cy="16" r="1" fill="currentColor" />
        </svg>
      );
    case "shieldAlert":
      return (
        <svg {...props}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      );
    case "government":
      return (
        <svg {...props}>
          <path d="M3 21h18M4 18h16M4 10h16M12 2L3 7v3h18V7L12 2z" />
          <path d="M6 10v8M10 10v8M14 10v8M18 10v8" />
        </svg>
      );
    case "banking":
      return (
        <svg {...props}>
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <line x1="2" y1="10" x2="22" y2="10" />
          <circle cx="7" cy="15" r="1.5" fill="currentColor" />
          <path d="M13 15h4" />
        </svg>
      );
    case "investigation":
    case "forensics":
      return (
        <svg {...props}>
          <circle cx="10" cy="10" r="6.5" />
          <line x1="21" y1="21" x2="14.8" y2="14.8" />
          <path d="M8 10h4M10 8v4" />
        </svg>
      );
    case "legal":
      return (
        <svg {...props}>
          <path d="M12 3v18" />
          <path d="M5 7h14" />
          <path d="M5 7l-2 5a3 3 0 0 0 6 0L7 7" />
          <path d="M19 7l-2 5a3 3 0 0 0 6 0L21 7" />
          <path d="M8 21h8" />
        </svg>
      );
    case "police":
      return (
        <svg {...props}>
          <path d="M12 2l7 4-1 9-6 7-6-7-1-9 7-4z" />
          <circle cx="12" cy="11" r="2.5" />
        </svg>
      );
    case "users":
      return (
        <svg {...props}>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "citizen":
      return (
        <svg {...props}>
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      );
    case "education":
      return (
        <svg {...props}>
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      );
    case "document":
      return (
        <svg {...props}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
      );
    case "notification":
      return (
        <svg {...props}>
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
      );
    case "target":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      );
    case "compass":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="10" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </svg>
      );
    case "growth":
    case "intelligence":
      return (
        <svg {...props}>
          <line x1="12" y1="20" x2="12" y2="10" />
          <line x1="18" y1="20" x2="18" y2="4" />
          <line x1="6" y1="20" x2="6" y2="16" />
          <line x1="3" y1="20" x2="21" y2="20" />
        </svg>
      );
    case "analytics":
      return (
        <svg {...props}>
          <path d="M3 3v18h18" />
          <path d="M18 9l-5 5-4-4-6 6" />
          <path d="M14 9h4v4" />
        </svg>
      );
    case "digital":
      return (
        <svg {...props}>
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      );
    case "resource":
      return (
        <svg {...props}>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <rect x="9" y="9" width="6" height="6" />
          <line x1="9" y1="1" x2="9" y2="4" />
          <line x1="15" y1="1" x2="15" y2="4" />
          <line x1="9" y1="20" x2="9" y2="23" />
          <line x1="15" y1="20" x2="15" y2="23" />
          <line x1="20" y1="9" x2="23" y2="9" />
          <line x1="20" y1="14" x2="23" y2="14" />
          <line x1="1" y1="9" x2="4" y2="9" />
          <line x1="1" y1="14" x2="4" y2="14" />
        </svg>
      );
    case "continuity":
      return (
        <svg {...props}>
          <polyline points="23 4 23 10 17 10" />
          <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
        </svg>
      );
    case "modernization":
      return (
        <svg {...props}>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      );
    default:
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 8v8" />
          <path d="M8 12h8" />
        </svg>
      );
  }
};

/**
 * Maps arbitrary benefit and API titles to contextual domain icon types
 */
export function getDomainIconType(title = "", index = 0) {
  const t = title.toLowerCase();

  // 1. Specific API, Security & Auth Terms
  if (t.includes("encrypt") || t.includes("jwt") || t.includes("oauth") || t.includes("mfa") || t.includes("safe") || t.includes("protect") || t.includes("secure api")) return "lock";
  if (t.includes("key") && (t.includes("api") || t.includes("auth"))) return "lock";
  if (t.includes("secur") || t.includes("threat") || t.includes("cyber")) return "security";
  if (t.includes("risk") || t.includes("alert")) return "shieldAlert";
  if (t.includes("notif") || t.includes("sms") || t.includes("email") || t.includes("message") || t.includes("whatsapp")) return "notification";

  // 1.5 Specific Protocols & API Types (Unique Icon per Protocol)
  if (t.includes("graphql")) return "workflow";
  if (t.includes("grpc")) return "speed";
  if (t.includes("soap")) return "legal";
  if (t.includes("restful") || t.includes("rest api")) return "network";
  if (t.includes("websocket")) return "automation";

  // 2. Integration & API Architectures
  if (t.includes("webhook")) return "notification";
  if (t.includes("gateway") || t.includes("coordinat") || t.includes("connect") || t.includes("interoperab") || t.includes("partner") || t.includes("distributed")) return "network";
  if (t.includes("pipeline") || t.includes("workflow") || t.includes("mapping") || t.includes("transform") || t.includes("extensib")) return "workflow";
  if (t.includes("doc") || t.includes("swagger") || t.includes("openapi") || t.includes("contract") || t.includes("request & response") || t.includes("record") || t.includes("report") || t.includes("admin")) return "document";
  if (t.includes("bank") || t.includes("financ") || t.includes("payment") || t.includes("cost") || t.includes("overhead")) return "banking";
  if (t.includes("govern") || t.includes("institut") || t.includes("public-service") || t.includes("public service")) return "government";
  if (t.includes("investigat") || t.includes("audit") || t.includes("evidence") || t.includes("forensic")) return "investigation";
  if (t.includes("police") || t.includes("law") || t.includes("enforcement") || t.includes("crime")) return "police";
  if (t.includes("legal") || t.includes("compliance") || t.includes("policy") || t.includes("standard")) return "legal";

  // 3. Data & Storage
  if (t.includes("database") || t.includes("batch") || t.includes("storage") || t.includes("inter-service data")) return "database";
  if (t.includes("retriev") || t.includes("search") || t.includes("discover") || t.includes("visibil") || t.includes("monitor") || t.includes("review") || t.includes("access")) return "search";
  if (t.includes("data") && (t.includes("exchange") || t.includes("integrat") || t.includes("sync") || t.includes("consist"))) return "database";

  // 4. Intelligence & Decisions
  if (t.includes("ai") || t.includes("intellig") || t.includes("decision") || t.includes("situational") || t.includes("understanding")) return "decision";
  if (t.includes("analytic")) return "analytics";
  if (t.includes("compass") || t.includes("map") || t.includes("location") || t.includes("aware")) return "compass";

  // 5. Operations, Automation & Performance
  if (t.includes("time") || t.includes("real-time") || t.includes("synchronous")) return "time";
  if (t.includes("efficien") || t.includes("productiv") || t.includes("speed") || t.includes("fast") || t.includes("rate limit") || t.includes("perform")) return "speed";
  if (t.includes("automat") || t.includes("manual") || t.includes("event-driven") || t.includes("queue") || t.includes("asynchronous") || t.includes("producer") || t.includes("consumer") || t.includes("routing")) return "automation";
  if (t.includes("valid") || t.includes("test") || t.includes("target") || t.includes("accura") || t.includes("capability")) return "target";
  if (t.includes("continu") || t.includes("retry") || t.includes("error") || t.includes("lifecycle") || t.includes("version") || t.includes("resilience")) return "continuity";

  // 6. Scale, Cloud & Growth
  if (t.includes("scale") || t.includes("growth") || t.includes("expand") || t.includes("future") || t.includes("long-term")) return "growth";
  if (t.includes("cloud") || t.includes("hybrid") || t.includes("grpc") || t.includes("rest") || t.includes("graphql") || t.includes("soap") || t.includes("digital") || t.includes("tech") || t.includes("microservice")) return "digital";
  if (t.includes("modern") || t.includes("innovat")) return "modernization";
  if (t.includes("resource") || t.includes("hardware") || t.includes("infra")) return "resource";
  if (t.includes("user") || t.includes("team") || t.includes("customer")) return "users";
  if (t.includes("citizen") || t.includes("community") || t.includes("social")) return "citizen";

  const defaultTypes = [
    "speed", "workflow", "database", "search", "security",
    "government", "automation", "growth", "decision", "network",
    "time", "target"
  ];
  return defaultTypes[index % defaultTypes.length];
}

/**
 * Intelligent clean short label for orbital node badges (< 15 chars, 1-2 words).
 * Keeps orbital nodes uncluttered while TV screen displays the full title & full description.
 */
const KNOWN_SHORT_LABELS = {
  // Section 01
  "API-Centric Integration": "API Centric",
  "Interoperability": "Interoperability",
  "Modular Integration Architecture": "Modular Arch",
  "Service-to-Service Communication": "Service-to-Service",
  "API Gateway Architecture": "API Gateway",
  "Microservice Integration": "Microservices",
  "Event-Driven Integration": "Event-Driven",
  "Real-Time Integration": "Real-Time",
  "Data Integration": "Data Integration",
  "Cloud & Hybrid Integration": "Cloud & Hybrid",
  "Scalable Connectivity": "Scalable Connect",
  "Future-Ready Integration": "Future Ready",

  // Section 02
  "RESTful API Design": "REST API",
  "GraphQL API Design": "GraphQL",
  "WebSocket Communication": "WebSocket",
  "gRPC Communication": "gRPC",
  "SOAP Integration": "SOAP",
  "Internal API Architecture": "Internal API",
  "Public API Architecture": "Public API",
  "Private API Architecture": "Private API",
  "Partner API Architecture": "Partner API",
  "Standardized Request & Response Design": "Standard Request",
  "API Contract Design": "API Contract",
  "Extensible API Structure": "Extensible API",
};

/**
 * Pre-calibrated arc points along the true elliptical arch (cx: 470, cy: 185, Rx: 420, Ry: 150)
 * providing uniform ~80px-88px distance between ALL adjacent nodes (zero bunching!)
 * and a guaranteed 153px apex opening directly above the focal center hub (470, 130).
 */
const UNIFORM_DESKTOP_SLOTS_11 = [
  { x: 52, y: 169 },  // Slot 0 (far left bottom)
  { x: 106, y: 110 }, // Slot 1 (~80px step)
  { x: 181, y: 76 },  // Slot 2 (~82px step)
  { x: 260, y: 55 },  // Slot 3 (~82px step)
  { x: 342, y: 42 },  // Slot 4 (~82px step)
  { x: 423, y: 36 },  // Slot 5 (~82px step, left of apex)
  // 153px Apex Gap across center (470, 130)
  { x: 576, y: 40 },  // Slot 6 (right of apex)
  { x: 663, y: 52 },  // Slot 7 (~88px step)
  { x: 748, y: 73 },  // Slot 8 (~88px step)
  { x: 829, y: 107 }, // Slot 9 (~88px step)
  { x: 888, y: 169 }, // Slot 10 (~85px step, far right bottom)
];

const UNIFORM_DESKTOP_SLOTS_10 = [
  { x: 52, y: 169 },  // Slot 0
  { x: 119, y: 102 }, // Slot 1 (~95px)
  { x: 209, y: 67 },  // Slot 2 (~96px)
  { x: 304, y: 47 },  // Slot 3 (~97px)
  { x: 400, y: 37 },  // Slot 4 (~97px)
  // 140px Apex Gap
  { x: 540, y: 37 },  // Slot 5
  { x: 636, y: 47 },  // Slot 6 (~97px)
  { x: 731, y: 68 },  // Slot 7 (~97px)
  { x: 821, y: 103 }, // Slot 8 (~96px)
  { x: 888, y: 169 }, // Slot 9 (~94px)
];

const UNIFORM_MOBILE_SLOTS_11 = [
  { x: 31, y: 98 },
  { x: 46, y: 74 },
  { x: 71, y: 58 },
  { x: 98, y: 47 },
  { x: 126, y: 41 },
  { x: 156, y: 38 },
  // Apex gap over (175, 75)
  { x: 195, y: 38 },
  { x: 231, y: 42 },
  { x: 266, y: 52 },
  { x: 298, y: 69 },
  { x: 319, y: 98 },
];

export function getShortTitle(title = "") {
  if (!title) return "";
  if (KNOWN_SHORT_LABELS[title]) return KNOWN_SHORT_LABELS[title];
  if (title.length <= 15) return title;

  const trimmed = title
    .replace(/\bArchitecture\b/gi, "Arch")
    .replace(/\bIntegration\b/gi, "")
    .replace(/\bInfrastructure\b/gi, "Infra")
    .replace(/\bCommunication\b/gi, "")
    .replace(/\bSynchronization\b/gi, "Sync")
    .replace(/\bManagement\b/gi, "Mgmt")
    .replace(/\bEnvironment\b/gi, "Env")
    .replace(/\bTransformation\b/gi, "Transform")
    .replace(/\bCapabilities\b/gi, "")
    .replace(/\bFramework\b/gi, "Frame")
    .replace(/\bInteroperability\b/gi, "Interoperab.")
    .replace(/\bMicroservices\b/gi, "Microservice")
    .replace(/\bGovernance\b/gi, "Gov")
    .replace(/\bAuthentication\b/gi, "Auth")
    .replace(/\bAuthorization\b/gi, "Authz")
    .trim();

  const words = trimmed.split(/\s+/).filter(Boolean);
  if (words.length <= 2) return words.join(" ");
  return words.slice(0, 2).join(" ");
}

/**
 * Item Icon component rendering brand-aligned pixel-tailored vector SVG icons.
 */
export function ItemIcon({ item, index = 0, className = "w-5 h-5" }) {
  if (item?.icon && React.isValidElement(item.icon)) {
    return item.icon;
  }
  const iconType = item?.iconType || getDomainIconType(item?.title || "", index);
  return <DomainIcon type={iconType} className={className} />;
}

/**
 * RetroTvDisplay Component
 * Design strictly matching Image 2 (Reference Section 03 CircularEcosystemShowcase).
 */
const RetroTvDisplay = ({
  item,
  total = 12,
  onPrev,
  onNext,
  isMobile = false,
  categoryTag = "INTEGRATION",
}) => {
  const [dial1Angle, setDial1Angle] = useState(0);
  const [dial2Angle, setDial2Angle] = useState(0);
  const isDirectClickRef = useRef(false);
  const prevItemIdRef = useRef(item?.id);

  // Synchronize rotary knob rotation when channel changes
  useEffect(() => {
    if (!item || prevItemIdRef.current === item.id) return;
    const prev = prevItemIdRef.current;
    const curr = item.id;
    prevItemIdRef.current = item.id;

    if (isDirectClickRef.current) {
      isDirectClickRef.current = false;
      return;
    }

    setDial2Angle((a) => a + 45);
  }, [item]);

  const handleDial1 = (e) => {
    e.stopPropagation();
    isDirectClickRef.current = true;
    setDial1Angle((a) => a - 45);
    onPrev();
  };

  const handleDial2 = (e) => {
    e.stopPropagation();
    isDirectClickRef.current = true;
    setDial2Angle((a) => a + 45);
    onNext();
  };

  if (!item) return null;

  return (
    <div className={`retro-tv-wrapper ${isMobile ? "max-w-[365px] w-full px-1" : "max-w-[580px]"}`}>
      <div className="retro-tv-main">
        {/* Retro Dual Antenna */}
        <div className="retro-tv-antenna" aria-hidden="true">
          <div className="retro-tv-antenna-shadow"></div>
          <div className="retro-tv-a1"></div>
          <div className="retro-tv-a1d"></div>
          <div className="retro-tv-a2"></div>
          <div className="retro-tv-a2d"></div>
        </div>

        {/* TV Box Cabinet */}
        <div className="retro-tv-box">
          {/* Corner Reflection Curve SVG */}
          <div className="cruve" aria-hidden="true">
            <svg
              className="retro-tv-curve-svg"
              viewBox="0 0 189.929 189.929"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M70.343,70.343c-30.554,30.553-44.806,72.7-39.102,115.635l-29.738,3.951C-5.442,137.659,11.917,86.34,49.129,49.13
                C86.34,11.918,137.664-5.445,189.928,1.502l-3.95,29.738C143.041,25.54,100.895,39.789,70.343,70.343z"
                fill="#2DD4BF"
                fillOpacity="0.45"
              />
            </svg>
          </div>

          {/* CRT Screen Display */}
          <div className="retro-tv-display">
            <div className="retro-tv-screen-out">
              <div className="retro-tv-screen-out1">
                <div className="retro-tv-screen">
                  {/* Card Contents Broadcast inside the TV Screen */}
                  <div
                    key={`tv-screen-${item.id}`}
                    className="w-full h-full p-3 sm:p-5 flex items-center gap-2.5 sm:gap-4.5 text-left relative z-10 animate-content-stagger-1"
                  >
                    {/* Active Category Squircle Icon */}
                    <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#006769] via-[#024B4D] to-[#042C2E] text-white flex items-center justify-center shadow-md border border-[#2DD4BF]/35 shrink-0">
                      <ItemIcon
                        item={item}
                        className="w-5 h-5 sm:w-7 sm:h-7 text-[#2DD4BF]"
                      />
                    </div>

                    {/* Channel & Category Information - 100% Fully Visible */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-[9px] sm:text-[10px] font-bold text-[#006769] tracking-wider uppercase bg-[#E0F5F3] px-2 py-0.5 rounded border border-[#B6EBE8]">
                          CH-{item.number || "01"} • {categoryTag}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-ping shrink-0" />
                      </div>
                      <h3 className="text-sm sm:text-base lg:text-lg font-extrabold text-[#042C2E] tracking-tight leading-snug mb-1">
                        {item.title}
                      </h3>
                      <p className="text-[11.5px] sm:text-[13px] text-[#23494B] leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dials & Speaker Control Panel */}
          <div className="retro-tv-buttons">
            <button
              onClick={handleDial1}
              className="retro-tv-b1"
              style={{ "--dial-rot": `${dial1Angle}deg` }}
              title="Previous Channel (Dial 1 - click to rotate)"
              aria-label="Previous Channel"
            >
              <div></div>
            </button>
            <button
              onClick={handleDial2}
              className="retro-tv-b2"
              style={{ "--dial-rot": `${dial2Angle}deg` }}
              title="Next Channel (Dial 2 - click to rotate)"
              aria-label="Next Channel"
            ></button>
            <div className="retro-tv-speakers" aria-hidden="true">
              <div className="retro-g1">
                <div className="retro-g11"></div>
                <div className="retro-g12"></div>
                <div className="retro-g13"></div>
              </div>
              <div className="retro-g"></div>
              <div className="retro-g"></div>
            </div>
          </div>
        </div>

        {/* TV Base Stand Legs */}
        <div className="retro-tv-bottom" aria-hidden="true">
          <div className="retro-tv-base1"></div>
          <div className="retro-tv-base2"></div>
          <div className="retro-tv-base3"></div>
        </div>
      </div>
    </div>
  );
};

export { RetroTvDisplay, RetroTvDisplay as RetroTelevision };

/**
 * RetroTvShowcase Component
 * Premium Interactive Orbital Navigation System with Retro CRT TV Display.
 * Pixel-perfect adaptation of Section 03 CircularEcosystemShowcase.
 */
export function RetroTvShowcase({
  items = [],
  autoRotate = true,
  interval = 3500,
  className = "",
  ariaLabel = "Interactive circular orbital navigation with retro television showcase",
  sectionId = "showcase",
  categoryTag = "INTEGRATION",
  isPaused: externalPaused = false,
  onSectionClick,
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const containerRef = useRef(null);
  const desktopArcRef = useRef(null);
  const mobileArcRef = useRef(null);
  const lastScrollTimeRef = useRef(0);

  const safeItems = useMemo(() => {
    if (!Array.isArray(items) || items.length === 0) return [];
    return items.map((item, idx) => ({
      id: item.id ?? `${sectionId}-item-${idx}`,
      number: item.number ?? String(idx + 1).padStart(2, "0"),
      title: item.title ?? `Item ${idx + 1}`,
      shortTitle: item.shortTitle ?? getShortTitle(item.title),
      description: item.description ?? "",
      iconType: item.iconType,
      icon: item.icon,
    }));
  }, [items, sectionId]);

  const totalItems = safeItems.length;

  useEffect(() => setActiveIndex((index) => (totalItems ? index % totalItems : 0)), [totalItems]);

  // Viewport visibility tracking
  useEffect(() => {
    const element = containerRef.current;
    if (!element || typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.08 }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const handleSelect = useCallback((targetIdx) => {
    setActiveIndex(targetIdx);
    if (onSectionClick) {
      onSectionClick();
    }
  }, [onSectionClick]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalItems);
  }, [totalItems]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + totalItems) % totalItems);
  }, [totalItems]);

  const handleNextRef = useRef(handleNext);
  handleNextRef.current = handleNext;
  const handlePrevRef = useRef(handlePrev);
  handlePrevRef.current = handlePrev;

  // Auto-advance timer: rotates to next domain every 3.5 seconds
  const isActuallyPaused = externalPaused || isPaused;
  useEffect(() => {
    if (!autoRotate || isActuallyPaused || !isVisible || totalItems < 2) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalItems);
    }, interval);

    return () => clearInterval(timer);
  }, [autoRotate, isActuallyPaused, isVisible, totalItems, interval]);

  // Non-passive wheel listener: guarantees smooth section-by-section rotation
  // ONLY intercepts wheel events when scrolling directly over the ARC part.
  useEffect(() => {
    const handleArcWheel = (e) => {
      const now = Date.now();
      if (now - lastScrollTimeRef.current < 260) {
        e.preventDefault();
        return;
      }

      if (Math.abs(e.deltaY) > 5) {
        e.preventDefault();
        e.stopPropagation();
        lastScrollTimeRef.current = now;
        if (e.deltaY > 0) {
          handleNextRef.current();
        } else {
          handlePrevRef.current();
        }
      }
    };

    const dEl = desktopArcRef.current;
    const mEl = mobileArcRef.current;

    if (dEl) dEl.addEventListener("wheel", handleArcWheel, { passive: false });
    if (mEl) mEl.addEventListener("wheel", handleArcWheel, { passive: false });

    return () => {
      if (dEl) dEl.removeEventListener("wheel", handleArcWheel);
      if (mEl) mEl.removeEventListener("wheel", handleArcWheel);
    };
  }, []);

  // Keyboard navigation support
  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      handleNext();
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      handlePrev();
    }
  };

  const currentItem = safeItems[activeIndex] || safeItems[0];
  if (!totalItems) return null;

  // =========================================================================
  // GEOMETRIC CALIBRATION FOR ORBITAL SYSTEM (DESKTOP & TABLET)
  // Stage coordinate system: 940px width x 540px height
  // Focal Center Hub: cx = 470, cy = 130
  //
  // Outer Slots: Distributed along a true elliptical arch with a guaranteed
  // apex gap directly above the focal center hub (150px breathing room)
  // so that NO node ever collides with or covers the active center node!
  // =========================================================================
  const cx = 470;
  const cy = 130;

  const getItemCoordinates = (idx) => {
    if (idx === activeIndex) {
      return { x: cx, y: cy, isCenter: true };
    }

    // Relative offset from active index (1 to totalItems - 1)
    const diff = (idx - activeIndex + totalItems) % totalItems;
    const slot = diff - 1;

    const slots = totalItems === 11 ? UNIFORM_DESKTOP_SLOTS_10 : UNIFORM_DESKTOP_SLOTS_11;
    if (slot >= 0 && slot < slots.length) {
      return { x: slots[slot].x, y: slots[slot].y, isCenter: false, slot };
    }

    return { x: 52, y: 169, isCenter: false, slot };
  };

  const safeSectionId = sectionId.replace(/[^a-zA-Z0-9_-]/g, "");

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden select-none outline-none ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label={ariaLabel}
    >
      {/* Background Atmosphere: Subtle Teal/Mint Ambient Glow Overlays */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[740px] h-[400px] bg-gradient-to-b from-[#2DD4BF]/10 via-[#006769]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[620px] h-[95px] bg-gradient-to-r from-transparent via-[#8AE2DA]/35 to-transparent rounded-[100%] blur-xl" />
      </div>

      {/* =========================================================================
          DESKTOP & TABLET VIEW: ORBITAL ARCH SYSTEM WITH RETRO TV DISPLAY (sm+)
          ========================================================================= */}
      <div className="hidden sm:block relative w-full max-w-[940px] h-[540px] mx-auto z-10 overflow-visible shrink-0 my-3">
        {/* SVG Background Elements: Arched Orbit Path, Dotted Lines, Stage Rings */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
          viewBox="0 0 940 540"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id={`orbitalArcGrad-${safeSectionId}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#006769" stopOpacity="0.75" />
              <stop offset="50%" stopColor="#006769" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#006769" stopOpacity="0.75" />
            </linearGradient>
            <radialGradient id={`stageFloorGrad-${safeSectionId}`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#E0F5F3" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#F0FBFA" stopOpacity="0.1" />
            </radialGradient>
          </defs>

          {/* 1. Main Outer Arched Orbital Path passing precisely through outer nodes */}
          <path
            d="M 52 169 A 420 150 0 0 1 888 169"
            stroke={`url(#orbitalArcGrad-${safeSectionId})`}
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* 2. Secondary Glowing Mint/Aqua Inner Arc with Decorative Radar Ticks */}
          <path
            d="M 120 165 A 355 125 0 0 1 820 165"
            stroke="#2DD4BF"
            strokeWidth="1.6"
            strokeOpacity="0.45"
            strokeDasharray="4 6"
            strokeLinecap="round"
          />

          {/* Decorative connector ticks along the inner arc */}
          {[205, 225, 245, 295, 315, 335].map((deg, i) => {
            const rad = (deg * Math.PI) / 180;
            const tx = Math.round(cx + 355 * Math.cos(rad));
            const ty = Math.round(185 + 125 * Math.sin(rad));
            return (
              <circle
                key={`arc-tick-${i}`}
                cx={tx}
                cy={ty}
                r="2.2"
                fill="#006769"
                fillOpacity="0.6"
              />
            );
          })}

          {/* 3. Stage Floor Perspective Rings */}
          <ellipse
            cx={cx}
            cy="466"
            rx="300"
            ry="32"
            fill={`url(#stageFloorGrad-${safeSectionId})`}
            stroke="#B6EBE8"
            strokeWidth="1.4"
            strokeOpacity="0.6"
          />
          <ellipse
            cx={cx}
            cy="467"
            rx="220"
            ry="22"
            stroke="#2DD4BF"
            strokeWidth="1.6"
            strokeOpacity="0.45"
            strokeDasharray="5 5"
          />
          <ellipse
            cx={cx}
            cy="468"
            rx="140"
            ry="14"
            stroke="#006769"
            strokeWidth="1"
            strokeOpacity="0.35"
          />
        </svg>

        {/* =========================================================================
            THE NODES ARC INTERACTION ZONE:
            Specifically intercepts wheel events to scroll/rotate through sections.
            ========================================================================= */}
        <div
          ref={desktopArcRef}
          className="absolute top-0 left-0 w-full h-[235px] z-20 overflow-visible"
          title="Scroll along the orbital arc to cycle items"
        >
          {safeItems.map((item, idx) => {
            const { x, y, isCenter } = getItemCoordinates(idx);
            const label = item.shortTitle || getShortTitle(item.title);

            return (
              <div
                key={`node-${item.id}`}
                onClick={() => handleSelect(idx)}
                className={`absolute transition-all duration-700 ease-[cubic-bezier(0.34,1.4,0.64,1)] ${
                  isCenter ? "z-40 cursor-default" : "z-20 cursor-pointer group"
                }`}
                style={{
                  left: `${x}px`,
                  top: `${y}px`,
                  transform: `translate(-50%, -50%) scale(${isCenter ? 1.15 : 1})`,
                }}
                role="button"
                tabIndex={0}
                aria-label={`Select ${item.title}`}
                aria-selected={isCenter}
              >
                <div className="flex flex-col items-center select-none">
                  {/* Section Number Badge (Above the Icon) */}
                  <span
                    className={`font-mono transition-colors duration-300 mb-0.5 ${
                      isCenter
                        ? "text-xs font-black text-[#006769] tracking-wider"
                        : "text-[10px] font-bold text-[#567D7F] group-hover:text-[#006769]"
                    }`}
                  >
                    {item.number}
                  </span>

                  {/* Circular Node Button */}
                  <div
                    className={`relative rounded-full flex items-center justify-center transition-all duration-500 ${
                      isCenter
                        ? "w-14 h-14 rounded-full bg-gradient-to-br from-[#006769] via-[#024B4D] to-[#042C2E] text-white border-2 border-white shadow-[0_0_24px_rgba(45,212,191,0.65),0_0_42px_rgba(0,103,105,0.35)] ring-4 ring-[#2DD4BF]/55 animate-pulse-slow"
                        : "w-10 h-10 bg-white/95 backdrop-blur-md text-[#006769] border border-[#B6EBE8] shadow-[0_3px_10px_rgba(0,103,105,0.06)] group-hover:border-[#006769] group-hover:bg-[#E0F5F3] group-hover:scale-110 group-hover:shadow-[0_6px_18px_rgba(0,103,105,0.18)]"
                    }`}
                  >
                    <ItemIcon
                      item={item}
                      index={idx}
                      className={isCenter ? "w-6.5 h-6.5 text-[#2DD4BF]" : "w-4.5 h-4.5 text-[#006769]"}
                    />
                  </div>

                  {/* Short Section Title (Below the Icon) */}
                  <span
                    className={`transition-colors duration-300 mt-1 text-center max-w-[95px] leading-tight ${
                      isCenter
                        ? "text-[11px] font-extrabold text-[#042C2E]"
                        : "text-[9.5px] font-medium text-[#23494B] group-hover:text-[#004D4F]"
                    }`}
                  >
                    {label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* =========================================================================
            RETRO TV DISPLAY: Positioned Directly Below the Active Center Node
            ========================================================================= */}
        <div
          className="absolute left-1/2 -translate-x-1/2 w-full max-w-xl z-30 transition-all duration-500 flex justify-center"
          style={{ top: "260px" }}
        >
          <RetroTvDisplay
            item={currentItem}
            total={totalItems}
            onPrev={handlePrev}
            onNext={handleNext}
            isMobile={false}
            categoryTag={categoryTag}
          />
        </div>
      </div>

      {/* =========================================================================
          MOBILE RESPONSIVE VIEW (< sm / iPhone screens)
          ========================================================================= */}
      <div className="block sm:hidden w-full max-w-sm mx-auto z-10 shrink-0 my-2">
        <div
          ref={mobileArcRef}
          className="relative w-full h-[195px] flex items-center justify-center mx-auto overflow-visible"
          title="Scroll along the orbital arc to cycle sections"
        >
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 350 195"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M 31 98 Q 175 10 319 98"
              stroke="#006769"
              strokeWidth="1.8"
              strokeOpacity="0.75"
            />
            <path
              d="M 50 102 Q 175 28 300 102"
              stroke="#2DD4BF"
              strokeWidth="1.2"
              strokeOpacity="0.45"
              strokeDasharray="3 4"
            />
          </svg>

          {safeItems.map((item, idx) => {
            const isCenter = idx === activeIndex;

            let x = 175;
            let y = 75;

            if (!isCenter) {
              const diff = (idx - activeIndex + totalItems) % totalItems;
              const slot = diff - 1;
              if (slot >= 0 && slot < UNIFORM_MOBILE_SLOTS_11.length) {
                x = UNIFORM_MOBILE_SLOTS_11[slot].x;
                y = UNIFORM_MOBILE_SLOTS_11[slot].y;
              }
            }

            const label = item.shortTitle || getShortTitle(item.title);

            return (
              <div
                key={`mobile-node-${item.id}`}
                onClick={() => handleSelect(idx)}
                className={`absolute transition-all duration-500 ease-out ${
                  isCenter ? "z-30 cursor-default" : "z-10 cursor-pointer"
                }`}
                style={{
                  left: `${x}px`,
                  top: `${y}px`,
                  transform: `translate(-50%, -50%) scale(${isCenter ? 1.15 : 0.85})`,
                }}
                role="button"
                tabIndex={0}
              >
                <div className="flex flex-col items-center">
                  <div
                    className={`rounded-full flex items-center justify-center transition-all ${
                      isCenter
                        ? "w-11 h-11 bg-gradient-to-br from-[#006769] to-[#042C2E] text-white border-2 border-white shadow-[0_0_18px_rgba(45,212,191,0.65)]"
                        : "w-7 h-7 bg-white text-[#006769] border border-[#B6EBE8] shadow-sm"
                    }`}
                  >
                    <ItemIcon
                      item={item}
                      index={idx}
                      className={isCenter ? "w-5 h-5 text-[#2DD4BF]" : "w-3.5 h-3.5 text-[#006769]"}
                    />
                  </div>
                  <span
                    className={`text-[8.5px] font-mono mt-0.5 ${
                      isCenter ? "font-bold text-[#006769]" : "text-[#567D7F]"
                    }`}
                  >
                    {item.number}
                  </span>
                  {isCenter && (
                    <span className="text-[10px] font-bold text-[#042C2E] text-center max-w-[75px] leading-tight mt-0.5">
                      {label}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Retro TV Content Card */}
        <div className="w-full flex justify-center mt-5">
          <RetroTvDisplay
            item={currentItem}
            total={totalItems}
            onPrev={handlePrev}
            onNext={handleNext}
            isMobile={true}
            categoryTag={categoryTag}
          />
        </div>
      </div>

      {/* =========================================================================
          BOTTOM STEP DOT INDICATORS
          ========================================================================= */}
      <div className="relative z-10 flex items-center justify-center gap-1.5 pt-6 pb-2 shrink-0">
        {safeItems.map((it, idx) => (
          <button
            key={`step-dot-${it.id ?? idx}`}
            onClick={() => handleSelect(idx)}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              idx === activeIndex
                ? "w-6 h-1.5 bg-[#006769]"
                : "w-1.5 h-1.5 bg-[#C5ECE9] hover:bg-[#8AE2DA]"
            }`}
            aria-label={`Go to ${it.title}`}
          />
        ))}
      </div>
    </div>
  );
}



// ============================================================================
// EMBEDDED STYLES (Consolidated from index.css & section-heading-animations.css)
// ============================================================================

export const EMBEDDED_STYLES = `
/* =========================================================================
   1. BASE TYPOGRAPHY, ROOT VARIABLES & SMOOTH SCROLLING
   ========================================================================= */
:root {
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-heading: 'Plus Jakarta Sans', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}

html, body {
  overflow-x: hidden;
  max-width: 100vw;
  scroll-behavior: smooth;
}

#root {
  overflow-x: hidden;
  width: 100%;
}

body {
  font-family: var(--font-sans);
  background-color: #f8fafc;
  color: #0f172a;
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  letter-spacing: -0.02em;
}

code, pre, .font-mono {
  font-family: var(--font-mono);
}

/* Custom subtle scrollbar */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
}

::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

/* Printing styles */
@media print {
  .no-print {
    display: none !important;
  }
}

/* =========================================================================
   2. HERO COLLISION-BASED TEXT ANIMATION (Opposite Sides -> Center Collision)
   ========================================================================= */
@keyframes collisionLeftGroup {
  0% {
    transform: translate3d(-34vw, 0, 0);
    opacity: 0;
  }
  12% {
    opacity: 1;
  }
  35% {
    transform: translate3d(0, 0, 0);
  }
  56% {
    transform: translate3d(0, 0, 0);
  }
  64% {
    transform: translate3d(8px, 0, 0);
  }
  72% {
    transform: translate3d(7px, 0, 0);
  }
  80% {
    transform: translate3d(-10px, 0, 0);
  }
  90% {
    transform: translate3d(2px, 0, 0);
  }
  96% {
    transform: translate3d(-0.5px, 0, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@keyframes collisionRightGroup {
  0% {
    transform: translate3d(34vw, 0, 0);
    opacity: 0;
  }
  12% {
    opacity: 1;
  }
  35% {
    transform: translate3d(0, 0, 0);
  }
  56% {
    transform: translate3d(0, 0, 0);
  }
  64% {
    transform: translate3d(-8px, 0, 0);
  }
  72% {
    transform: translate3d(-7px, 0, 0);
  }
  80% {
    transform: translate3d(10px, 0, 0);
  }
  90% {
    transform: translate3d(-2px, 0, 0);
  }
  96% {
    transform: translate3d(0.5px, 0, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@media (max-width: 640px) {
  @keyframes collisionLeftGroup {
    0% {
      transform: translate3d(-20vw, 0, 0);
      opacity: 0;
    }
    14% {
      opacity: 1;
    }
    35% {
      transform: translate3d(0, 0, 0);
    }
    56% {
      transform: translate3d(0, 0, 0);
    }
    64% {
      transform: translate3d(4px, 0, 0);
    }
    72% {
      transform: translate3d(3.5px, 0, 0);
    }
    80% {
      transform: translate3d(-5px, 0, 0);
    }
    90% {
      transform: translate3d(1px, 0, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }

  @keyframes collisionRightGroup {
    0% {
      transform: translate3d(20vw, 0, 0);
      opacity: 0;
    }
    14% {
      opacity: 1;
    }
    35% {
      transform: translate3d(0, 0, 0);
    }
    56% {
      transform: translate3d(0, 0, 0);
    }
    64% {
      transform: translate3d(-4px, 0, 0);
    }
    72% {
      transform: translate3d(-3.5px, 0, 0);
    }
    80% {
      transform: translate3d(5px, 0, 0);
    }
    90% {
      transform: translate3d(-1px, 0, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }
}

@keyframes letterScatterIn {
  0% {
    transform: translate3d(calc(var(--sx) * var(--scatter-mult, 1)), calc(var(--sy) * var(--scatter-mult, 1)), 0) scale(var(--sinit));
    opacity: 0;
  }
  15% {
    opacity: 1;
  }
  75% {
    transform: translate3d(calc(var(--sx) * var(--scatter-mult, 1) * 0.22), calc(var(--sy) * var(--scatter-mult, 1) * 0.22), 0) scale(0.97);
  }
  100% {
    transform: translate3d(0, 0, 0) scale(1);
    opacity: 1;
  }
}

@keyframes letterShockwave {
  0% {
    transform: scale(1);
    filter: drop-shadow(0 0 0 rgba(0, 103, 105, 0));
  }
  38% {
    transform: scale(1.18);
    filter: drop-shadow(0 0 7px rgba(0, 122, 126, 0.4));
  }
  72% {
    transform: scale(0.96);
    filter: drop-shadow(0 0 2px rgba(0, 122, 126, 0.15));
  }
  100% {
    transform: scale(1);
    filter: drop-shadow(0 0 0 rgba(0, 103, 105, 0));
  }
}

.animate-collision-left {
  animation: collisionLeftGroup 1.95s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  will-change: transform, opacity;
}

.animate-collision-right {
  animation: collisionRightGroup 1.95s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  will-change: transform, opacity;
}

.animate-letter-scatter {
  animation: letterScatterIn 0.65s cubic-bezier(0.16, 1, 0.3, 1) var(--letter-delay, 0s) forwards;
  will-change: transform, opacity;
}

.animate-letter-shockwave {
  animation: letterShockwave 0.24s cubic-bezier(0.2, 1, 0.3, 1) var(--shockwave-delay) both;
  will-change: transform, filter;
}

@media (max-width: 640px) {
  .collision-heading-root {
    --scatter-mult: 0.5;
  }
}

/* =========================================================================
   3. FLOATING SHIELD & SECURITY BACKGROUND ANIMATIONS
   ========================================================================= */
@keyframes floatShield1 {
  0% {
    transform: translate3d(0, 0, 0) rotate(0deg);
  }
  50% {
    transform: translate3d(-5px, -15px, 0) rotate(2.5deg);
  }
  100% {
    transform: translate3d(4px, -7px, 0) rotate(-2deg);
  }
}

@keyframes floatShield2 {
  0% {
    transform: translate3d(0, 0, 0) rotate(0deg);
  }
  50% {
    transform: translate3d(6px, -18px, 0) rotate(-3deg);
  }
  100% {
    transform: translate3d(-4px, -9px, 0) rotate(2deg);
  }
}

@keyframes floatShield3 {
  0% {
    transform: translate3d(0, 0, 0) rotate(0deg);
  }
  50% {
    transform: translate3d(-6px, -12px, 0) rotate(-2deg);
  }
  100% {
    transform: translate3d(5px, -6px, 0) rotate(2.5deg);
  }
}

@keyframes floatShield4 {
  0% {
    transform: translate3d(0, 0, 0) rotate(0deg);
  }
  50% {
    transform: translate3d(6px, -14px, 0) rotate(2.5deg);
  }
  100% {
    transform: translate3d(-5px, -7px, 0) rotate(-2deg);
  }
}

@keyframes shieldPulseGlow {
  0%, 100% {
    opacity: 0.06;
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    opacity: 0.11;
    transform: translate(-50%, -50%) scale(1.03);
  }
}

.animate-float-shield-1 {
  animation: floatShield1 8s ease-in-out infinite alternate;
  will-change: transform;
}

.animate-float-shield-2 {
  animation: floatShield2 9.5s ease-in-out infinite alternate;
  will-change: transform;
}

.animate-float-shield-3 {
  animation: floatShield3 7.5s ease-in-out infinite alternate;
  will-change: transform;
}

.animate-float-shield-4 {
  animation: floatShield4 10s ease-in-out infinite alternate;
  will-change: transform;
}

.animate-shield-pulse-glow {
  animation: shieldPulseGlow 6s ease-in-out infinite alternate;
  will-change: transform, opacity;
}

/* =========================================================================
   4. SECTION HEADING ANIMATIONS (Fly-In, Sparks, Flare, Underline, Phone Float)
   ========================================================================= */
@keyframes letterFlyIn {
  0% {
    transform: translate3d(min(45vw, 220px), 0, 0);
    filter: blur(4px) drop-shadow(0 0 12px rgba(0, 103, 105, 0.4));
    color: #006769;
    opacity: 1;
  }
  68% {
    transform: translate3d(-8px, 0, 0);
    filter: blur(0px) drop-shadow(0 0 14px rgba(0, 103, 105, 0.3));
    color: #006769;
  }
  84% {
    transform: translate3d(3px, 0, 0);
    filter: blur(0px);
    color: inherit;
  }
  93% {
    transform: translate3d(-1px, 0, 0);
    filter: blur(0px);
  }
  100% {
    transform: translate3d(0, 0, 0);
    filter: blur(0px);
    color: inherit;
  }
}

@keyframes letterFlyFast {
  0% {
    transform: translate3d(min(35vw, 160px), 0, 0);
    filter: blur(3px) drop-shadow(0 0 10px rgba(0, 122, 126, 0.35));
    color: #007A7E;
    opacity: 1;
  }
  70% {
    transform: translate3d(-5px, 0, 0);
    filter: blur(0px) drop-shadow(0 0 10px rgba(0, 122, 126, 0.3));
    color: #007A7E;
  }
  86% {
    transform: translate3d(1.8px, 0, 0);
    color: inherit;
  }
  100% {
    transform: translate3d(0, 0, 0);
    filter: blur(0px);
    color: inherit;
  }
}

@keyframes impactSpark {
  0% {
    opacity: 0;
    transform: translate(-50%, 4px) scale(0.6);
  }
  40% {
    opacity: 1;
    transform: translate(-50%, -3px) scale(1.15);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -10px) scale(1.3);
  }
}

@keyframes trailFade {
  0% {
    opacity: 0.9;
    transform: translateY(-50%) scaleX(1);
  }
  60% {
    opacity: 0.7;
  }
  80% {
    opacity: 0.2;
    transform: translateY(-50%) scaleX(0.4);
  }
  100% {
    opacity: 0;
    transform: translateY(-50%) scaleX(0);
  }
}

@keyframes underlineSweep {
  0% {
    width: 0%;
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  100% {
    width: 100%;
    opacity: 1;
  }
}

@keyframes flarePulse {
  0% {
    transform: translate3d(-50%, -50%, 0) rotate(45deg) scale(0.4);
    opacity: 0;
  }
  50% {
    transform: translate3d(-50%, -50%, 0) rotate(45deg) scale(1.3);
    opacity: 1;
  }
  100% {
    transform: translate3d(-50%, -50%, 0) rotate(45deg) scale(1);
    opacity: 0.9;
  }
}

@keyframes gentlePhoneFloat {
  0%, 100% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(0, -6px, 0);
  }
}

.animate-letter-fly-in {
  animation: letterFlyIn 0.26s cubic-bezier(0.2, 1, 0.3, 1) forwards;
  will-change: transform, opacity;
}

.animate-letter-fly-fast {
  animation: letterFlyFast 0.24s cubic-bezier(0.2, 1, 0.3, 1) forwards;
  will-change: transform, opacity;
}

.animate-impact-spark {
  animation: impactSpark 0.15s ease-out forwards;
  will-change: transform, opacity;
}

.animate-trail-fade {
  animation: trailFade 0.26s cubic-bezier(0.2, 1, 0.3, 1) forwards;
  will-change: transform, opacity;
}

.animate-underline-sweep {
  animation: underlineSweep 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-flare-pulse {
  animation: flarePulse 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-phone-float {
  animation: gentlePhoneFloat 4.5s ease-in-out infinite;
  will-change: transform;
}

/* =========================================================================
   5. ORBITAL SHOWCASE ENTRANCE ANIMATIONS
   ========================================================================= */
@keyframes showcaseContentFadeIn {
  0% {
    opacity: 0;
    transform: translateY(14px) scale(0.99);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.animate-content-stagger-1 {
  animation: showcaseContentFadeIn 0.38s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-content-stagger-2 {
  animation: showcaseContentFadeIn 0.42s 0.07s cubic-bezier(0.16, 1, 0.3, 1) backwards;
}

.animate-content-stagger-3 {
  animation: showcaseContentFadeIn 0.48s 0.14s cubic-bezier(0.16, 1, 0.3, 1) backwards;
}

.animate-content-stagger-4 {
  animation: showcaseContentFadeIn 0.52s 0.21s cubic-bezier(0.16, 1, 0.3, 1) backwards;
}

@media (prefers-reduced-motion: reduce) {
  .animate-collision-left,
  .animate-collision-right,
  .animate-letter-scatter,
  .animate-letter-shockwave,
  .animate-letter-fly-in,
  .animate-letter-fly-fast,
  .animate-impact-spark,
  .animate-trail-fade,
  .animate-underline-sweep,
  .animate-flare-pulse,
  .animate-phone-float,
  .animate-float-shield-1,
  .animate-float-shield-2,
  .animate-float-shield-3,
  .animate-float-shield-4,
  .animate-shield-pulse-glow,
  .animate-content-stagger-1,
  .animate-content-stagger-2,
  .animate-content-stagger-3,
  .animate-content-stagger-4 {
    animation: none !important;
    transform: none !important;
    opacity: 1 !important;
  }
}

/* === RETRO TV SHOWCASE EMBEDDED STYLES === */
/* =========================================================================
   RETRO TV DISPLAY COMPONENT (From Reference Design Section 03)
   Responsive, interactive channel switching, adapted for IBCS Brand Language
   ========================================================================= */

.retro-tv-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 580px;
  position: relative;
  z-index: 25;
}

.retro-tv-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
}

/* --- ANTENNA --- */
.retro-tv-antenna {
  width: 2.2em;
  height: 2.2em;
  border-radius: 50%;
  border: 2px solid #042c2e;
  background-color: var(--tv-antenna-bg, #006769);
  margin-bottom: -2.6em;
  position: relative;
  z-index: 1;
  transition: background-color 0.3s ease;
}

.retro-tv-antenna-shadow {
  position: absolute;
  background-color: transparent;
  width: 20px;
  height: 22px;
  margin-left: 0.6em;
  border-radius: 45%;
  transform: rotate(140deg);
  border: 2px solid transparent;
  box-shadow: inset 0px 7px var(--tv-antenna-shadow, #004d4f);
}

.retro-tv-antenna::before {
  content: "";
  position: absolute;
  margin-top: 0.15em;
  margin-left: 0.6em;
  transform: rotate(-20deg);
  width: 0.65em;
  height: 0.35em;
  border-radius: 50%;
  background-color: var(--tv-antenna-accent, #2dd4bf);
}

.retro-tv-a1 {
  position: relative;
  top: -85%;
  left: -65%;
  width: 3.2em;
  height: 1.5em;
  border-radius: 12px;
  background-image: linear-gradient(#042c2e, #042c2e, #004d4f, #004d4f, #042c2e);
  transform: rotate(-38deg);
  clip-path: polygon(50% 0%, 46% 100%, 54% 100%);
}

.retro-tv-a1d {
  position: relative;
  top: -145%;
  left: -20%;
  transform: rotate(45deg);
  width: 0.38em;
  height: 0.38em;
  border-radius: 50%;
  border: 1.2px solid #042c2e;
  background-color: var(--tv-antenna-ball, #2dd4bf);
  box-shadow: 0 0 5px rgba(45, 212, 191, 0.6);
  z-index: 99;
}

.retro-tv-a2 {
  position: relative;
  top: -150%;
  left: -2%;
  width: 3.2em;
  height: 1.5em;
  border-radius: 12px;
  background-image: linear-gradient(#042c2e, #042c2e, #004d4f, #004d4f, #042c2e);
  clip-path: polygon(48% 0%, 44% 100%, 52% 100%);
  transform: rotate(24deg);
}

.retro-tv-a2d {
  position: relative;
  top: -205%;
  left: 54%;
  width: 0.38em;
  height: 0.38em;
  border-radius: 50%;
  border: 1.2px solid #042c2e;
  background-color: var(--tv-antenna-ball, #2dd4bf);
  box-shadow: 0 0 5px rgba(45, 212, 191, 0.6);
  z-index: 99;
}

/* --- TV CABINET --- */
.retro-tv-box {
  width: 100%;
  max-width: 570px;
  min-height: 185px;
  border-radius: 16px;
  background-color: var(--tv-bg, #006769);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #042c2e;
  box-shadow: inset 0.2em 0.2em 0px var(--tv-inset-highlight, #14b8a6), 0 14px 30px rgba(0, 103, 105, 0.15);
  position: relative;
  padding: 0.6em;
  gap: 0.55em;
  z-index: 10;
  transition: all 0.3s ease;
}

.retro-tv-box::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 16px;
  background:
    repeating-radial-gradient(var(--tv-bg, #006769) 0 0.0001%, #00000050 0 0.0002%) 50% 0/2500px 2500px,
    repeating-conic-gradient(var(--tv-bg, #006769) 0 0.0001%, #00000050 0 0.0002%) 60% 60%/2500px 2500px;
  background-blend-mode: difference;
  opacity: 0.08;
  pointer-events: none;
}

.retro-tv-curve-svg {
  position: absolute;
  top: 0.5em;
  left: 0.5em;
  height: 18px;
  width: 18px;
  z-index: 20;
  pointer-events: none;
}

/* --- DISPLAY & SCREEN --- */
.retro-tv-display {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  min-width: 0;
  border-radius: 14px;
  box-shadow: 3.5px 3.5px 0px var(--tv-display-shadow, #14b8a6);
  background-color: #042c2e;
  position: relative;
  overflow: hidden;
}

.retro-tv-screen-out {
  width: 100%;
  height: 100%;
  border-radius: 12px;
  display: flex;
}

.retro-tv-screen-out1 {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
}

.retro-tv-screen {
  width: 100%;
  min-height: 195px;
  border-radius: 10px;
  border: 2px solid #042c2e;
  background: linear-gradient(135deg, #f0fbfa 0%, #ffffff 55%, #e8f8f6 100%);
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  box-shadow: inset 0 2px 8px rgba(0, 103, 105, 0.08);
}

.retro-tv-screen::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 103, 105, 0.03) 50%);
  background-size: 100% 3px;
  z-index: 5;
  pointer-events: none;
}

/* --- LINES ACCENT --- */
.retro-tv-lines {
  display: flex;
  column-gap: 0.15em;
  align-self: flex-end;
  margin-bottom: 0.2em;
}

.retro-tv-line1,
.retro-tv-line3 {
  width: 2.5px;
  height: 0.6em;
  background-color: #042c2e;
  border-radius: 25px 25px 0px 0px;
  margin-top: 0.5em;
}

.retro-tv-line2 {
  flex-grow: 1;
  width: 2.5px;
  height: 1.1em;
  background-color: #042c2e;
  border-radius: 25px 25px 0px 0px;
}

/* --- BUTTONS & CONTROLS --- */
.retro-tv-buttons {
  width: 4.8em;
  min-width: 4.8em;
  align-self: stretch;
  background-color: var(--tv-buttons-bg, #004d4f);
  border: 2px solid #042c2e;
  padding: 0.6em 0.35em;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 0.7em;
  box-shadow: 3px 3px 0px var(--tv-buttons-shadow, #14b8a6);
  z-index: 15;
}

.retro-tv-b1,
.retro-tv-b2 {
  width: 1.85em;
  height: 1.85em;
  border-radius: 50%;
  background-color: #042c2e;
  border: 2px solid #006769;
  box-shadow: inset 2px 2px 1px #2dd4bf, -2px 0px #024b4d, -2px 0px 0px 1px #042c2e;
  cursor: pointer;
  position: relative;
  transform: rotate(var(--dial-rot, 0deg));
  transform-origin: center center;
  transition: transform 0.38s cubic-bezier(0.34, 1.56, 0.64, 1);
  user-select: none;
}

.retro-tv-b1:hover,
.retro-tv-b2:hover {
  transform: rotate(var(--dial-rot, 0deg)) scale(1.12);
}

.retro-tv-b1:active,
.retro-tv-b2:active {
  transform: rotate(var(--dial-rot, 0deg)) scale(0.92);
}

.retro-tv-b1::before {
  content: "";
  position: absolute;
  margin-top: 1em;
  margin-left: 0.55em;
  transform: rotate(47deg);
  border-radius: 5px;
  width: 0.12em;
  height: 0.45em;
  background-color: #2dd4bf;
}

.retro-tv-b1::after {
  content: "";
  position: absolute;
  margin-top: 0.9em;
  margin-left: 0.85em;
  transform: rotate(47deg);
  border-radius: 5px;
  width: 0.12em;
  height: 0.6em;
  background-color: #2dd4bf;
}

.retro-tv-b1 div {
  content: "";
  position: absolute;
  margin-top: -0.05em;
  margin-left: 0.7em;
  transform: rotate(45deg);
  width: 0.18em;
  height: 1.6em;
  background-color: #2dd4bf;
}

.retro-tv-b2::before {
  content: "";
  position: absolute;
  margin-top: 1.1em;
  margin-left: 0.85em;
  transform: rotate(-45deg);
  border-radius: 5px;
  width: 0.18em;
  height: 0.45em;
  background-color: #2dd4bf;
}

.retro-tv-b2::after {
  content: "";
  position: absolute;
  margin-top: -0.05em;
  margin-left: 0.7em;
  transform: rotate(-45deg);
  width: 0.18em;
  height: 1.6em;
  background-color: #2dd4bf;
}

.retro-tv-speakers {
  display: flex;
  flex-direction: column;
  row-gap: 0.5em;
  align-items: center;
}

.retro-tv-speakers .retro-g1 {
  display: flex;
  column-gap: 0.28em;
}

.retro-tv-speakers .retro-g11,
.retro-tv-speakers .retro-g12,
.retro-tv-speakers .retro-g13 {
  width: 0.65em;
  height: 0.65em;
  border-radius: 50%;
  background-color: #042c2e;
  border: 1.5px solid #006769;
  box-shadow: inset 1px 1px 1px #2dd4bf;
}

.retro-tv-speakers .retro-g {
  width: 2.8em;
  height: 2px;
  background-color: #042c2e;
  border-radius: 1px;
}

/* --- BOTTOM LEGS / STAND --- */
.retro-tv-bottom {
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 8em;
  position: relative;
  z-index: 5;
}

.retro-tv-base1,
.retro-tv-base2 {
  height: 1.1em;
  width: 2.2em;
  border: 2px solid #042c2e;
  background-color: #024b4d;
  margin-top: -0.15em;
  border-radius: 0 0 4px 4px;
}

.retro-tv-base3 {
  position: absolute;
  height: 0.2em;
  width: 18em;
  background-color: #042c2e;
  margin-top: 0.9em;
  border-radius: 2px;
}

/* --- Pulse animation for center active hub --- */
@keyframes pulseSlow {
  0%, 100% {
    box-shadow: 0 0 24px rgba(45, 212, 191, 0.65), 0 0 42px rgba(0, 103, 105, 0.35);
  }
  50% {
    box-shadow: 0 0 32px rgba(45, 212, 191, 0.9), 0 0 54px rgba(0, 103, 105, 0.5);
  }
}

.animate-pulse-slow {
  animation: pulseSlow 3s ease-in-out infinite;
}

/* --- Mobile Responsive Optimizations for Retro TV (Full Content Visibility) --- */
@media (max-width: 640px) {
  .retro-tv-wrapper {
    max-width: 365px;
  }

  .retro-tv-box {
    padding: 0.45em;
    gap: 0.35em;
    min-height: 170px;
  }

  .retro-tv-screen {
    min-height: 170px;
  }

  .retro-tv-buttons {
    width: 3.5em;
    min-width: 3.5em;
    padding: 0.45em 0.18em;
    row-gap: 0.45em;
  }

  .retro-tv-b1,
  .retro-tv-b2 {
    width: 1.5em;
    height: 1.5em;
  }

  .retro-tv-bottom {
    column-gap: 5.5em;
  }

  .retro-tv-base3 {
    width: 13.5em;
  }
}

`;

// ============================================================================
// 1. UTILITIES & HELPERS
// ============================================================================

/**
 * Live search keyword highlight wrapper
 */
export function HighlightText({ text = "", query = "", className = "" }) {
  if (!query || !text) return <span className={className}>{text}</span>;
  const q = query.trim();
  if (!q) return <span className={className}>{text}</span>;

  const regex = new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  const parts = String(text).split(regex);

  return (
    <span className={className}>
      {parts.map((part, index) =>
        regex.test(part) ? (
          <mark key={index} className="bg-amber-200 text-amber-950 rounded-xs px-0.5 font-bold">
            {part}
          </mark>
        ) : (
          part
        )
      )}
    </span>
  );
}

/**
 * Converts ALL-CAPS section titles into elegant Title Case for SectionHeadingAnimation
 */
export function formatSectionTitle(title) {
  if (!title) return "";
  if (title !== title.toUpperCase()) return title;

  return title
    .toLowerCase()
    .split(" ")
    .map((word) => {
      if (word === "&") return "&";
      if (word === "ai") return "AI";
      if (word === "ui/ux") return "UI/UX";
      if (word === "devops") return "DevOps";
      if (word.includes("-")) {
        return word.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join("-");
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

/**
 * Intelligent Icon Mapping based on Key Area Title
 */
export function getIconForArea(title = "", index = 0) {
  const t = title.toLowerCase();
  if (t.includes("ai") || t.includes("ml") || t.includes("machine learning") || t.includes("intelligence") || t.includes("analytical")) return Brain;
  if (t.includes("security") || t.includes("defense") || t.includes("protect") || t.includes("safety") || t.includes("cyber") || t.includes("compliance") || t.includes("law")) return ShieldCheck;
  if (t.includes("cloud") || t.includes("infra") || t.includes("serverless")) return Cloud;
  if (t.includes("database") || t.includes("data") || t.includes("record") || t.includes("storage") || t.includes("banking") || t.includes("financial")) return Database;
  if (t.includes("mobile") || t.includes("app") || t.includes("device")) return Smartphone;
  if (t.includes("network") || t.includes("api") || t.includes("gateway") || t.includes("connectivity") || t.includes("interdepartmental")) return Network;
  if (t.includes("code") || t.includes("modern") || t.includes("technology")) return Code2;
  if (t.includes("terminal") || t.includes("script") || t.includes("command")) return Terminal;
  if (t.includes("workflow") || t.includes("process") || t.includes("automation") || t.includes("pipeline") || t.includes("coordination")) return Workflow;
  if (t.includes("public") || t.includes("citizen") || t.includes("social") || t.includes("community") || t.includes("user") || t.includes("service")) return Globe;
  if (t.includes("scale") || t.includes("growth") || t.includes("expand") || t.includes("sustainable")) return Maximize2;
  if (t.includes("speed") || t.includes("fast") || t.includes("time") || t.includes("performance") || t.includes("accelerat")) return Gauge;
  if (t.includes("task") || t.includes("product") || t.includes("module") || t.includes("component") || t.includes("capability")) return Box;
  if (t.includes("investigat") || t.includes("evidence") || t.includes("search") || t.includes("awareness")) return Search;
  if (t.includes("decision") || t.includes("strategy") || t.includes("governance") || t.includes("institutional") || t.includes("planning")) return Compass;
  if (t.includes("efficiency") || t.includes("productivity") || t.includes("standard") || t.includes("value") || t.includes("benefit")) return CheckCircle2;

  const fallbacks = [Layers, SlidersHorizontal, Cpu, ShieldCheck, Maximize2, Laptop, Cloud, Network, Box, Gauge, Compass, Target];
  return fallbacks[index % fallbacks.length];
}

/**
 * Concise Keypad Label (up to 11 chars) to prevent button overflow
 */
export function getShortLabel(title = "") {
  if (!title) return "Key";
  const words = title.trim().split(/\s+/);
  if (words.length === 1) return words[0].slice(0, 10);
  if (words[0].length <= 5 && words[1]) return `${words[0]} ${words[1]}`.slice(0, 11);
  return words[0].slice(0, 10);
}

/**
 * Upper-right Dot Matrix Decoration
 */
export function DotMatrix({ className = "" }) {
  return (
    <div className={`grid grid-cols-6 gap-2 w-max select-none pointer-events-none ${className}`} aria-hidden="true">
      {Array.from({ length: 24 }).map((_, index) => (
        <span key={index} className="w-1.5 h-1.5 rounded-full bg-[#8FD6CF]/60" />
      ))}
    </div>
  );
}

// ============================================================================
// 2. HERO INTEGRATIONS & APIS BACKGROUND FLOATING ICONS
// (API Connectivity, Endpoints, System Integration, Microservices, Cloud, etc.)
// ============================================================================

function SecurityIcon({ type, size = 18, color = "#006769" }) {
  const commonProps = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  switch (type) {
    // 1. API Connectivity
    case "api-connectivity":
      return (
        <svg {...commonProps}>
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          <line x1="8.5" y1="12" x2="15.5" y2="12" strokeDasharray="1.5 2" />
        </svg>
      );

    // 2. API Endpoints
    case "api-endpoints":
      return (
        <svg {...commonProps}>
          <rect x="2.5" y="3.5" width="19" height="17" rx="3" fill={color} fillOpacity="0.08" />
          <path d="M6.5 8.5l-2.5 3.5 2.5 3.5" />
          <path d="M17.5 8.5l2.5 3.5-2.5 3.5" />
          <line x1="13" y1="7.5" x2="10.5" y2="16.5" />
        </svg>
      );

    // 3. System Integration
    case "system-integration":
      return (
        <svg {...commonProps}>
          <rect x="3" y="3" width="7" height="7" rx="1.5" fill={color} fillOpacity="0.12" />
          <rect x="14" y="3" width="7" height="7" rx="1.5" fill={color} fillOpacity="0.12" />
          <rect x="8.5" y="14" width="7" height="7" rx="1.5" fill={color} fillOpacity="0.18" />
          <path d="M6.5 10v2a1.5 1.5 0 0 0 1.5 1.5h8a1.5 1.5 0 0 0 1.5-1.5v-2" />
          <line x1="12" y1="13.5" x2="12" y2="14" />
        </svg>
      );

    // 4. Microservices
    case "microservices":
      return (
        <svg {...commonProps}>
          <rect x="3" y="3" width="6" height="6" rx="1.5" fill={color} fillOpacity="0.15" />
          <rect x="15" y="3" width="6" height="6" rx="1.5" fill={color} fillOpacity="0.15" />
          <rect x="3" y="15" width="6" height="6" rx="1.5" fill={color} fillOpacity="0.15" />
          <rect x="15" y="15" width="6" height="6" rx="1.5" fill={color} fillOpacity="0.15" />
          <circle cx="12" cy="12" r="2.2" fill={color} fillOpacity="0.4" />
          <line x1="9" y1="6" x2="15" y2="6" strokeDasharray="1.5 2" />
          <line x1="9" y1="18" x2="15" y2="18" strokeDasharray="1.5 2" />
          <line x1="6" y1="9" x2="6" y2="15" strokeDasharray="1.5 2" />
          <line x1="18" y1="9" x2="18" y2="15" strokeDasharray="1.5 2" />
        </svg>
      );

    // 5. Cloud Integration
    case "cloud-integration":
      return (
        <svg {...commonProps}>
          <path d="M17.5 19H7a4.5 4.5 0 0 1-.9-8.91 5.5 5.5 0 0 1 10.74-1.57A4 4 0 0 1 17.5 19z" fill={color} fillOpacity="0.1" />
          <polyline points="10 13 12 11 14 13" />
          <polyline points="14 15 12 17 10 15" />
          <line x1="12" y1="11" x2="12" y2="17" strokeDasharray="1.5 1.5" />
        </svg>
      );

    // 6. Database Connectivity
    case "database-connectivity":
      return (
        <svg {...commonProps}>
          <ellipse cx="12" cy="5" rx="8" ry="3" fill={color} fillOpacity="0.18" />
          <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
          <path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
          <circle cx="12" cy="13.5" r="1.5" fill={color} />
          <line x1="12" y1="15" x2="12" y2="19" />
          <circle cx="12" cy="20" r="1.5" fill={color} />
        </svg>
      );

    // 7. Webhooks
    case "webhooks":
      return (
        <svg {...commonProps}>
          <circle cx="6" cy="18" r="3" fill={color} fillOpacity="0.2" />
          <circle cx="18" cy="6" r="3" fill={color} fillOpacity="0.2" />
          <path d="M6 15V9a3 3 0 0 1 3-3h6" />
          <polyline points="15 3 18 6 15 9" />
          <circle cx="6" cy="18" r="1.2" fill={color} />
          <circle cx="18" cy="6" r="1.2" fill={color} />
        </svg>
      );

    // 8. Data Exchange
    case "data-exchange":
      return (
        <svg {...commonProps}>
          <path d="M17 3l4 4-4 4" />
          <path d="M21 7H7a4 4 0 0 0-4 4" />
          <path d="M7 21l-4-4 4-4" />
          <path d="M3 17h14a4 4 0 0 0 4-4" />
          <circle cx="11" cy="7" r="1.2" fill={color} />
          <circle cx="13" cy="17" r="1.2" fill={color} />
        </svg>
      );

    // 9. Server Communication
    case "server-communication":
      return (
        <svg {...commonProps}>
          <rect x="2.5" y="3" width="19" height="6.5" rx="2" fill={color} fillOpacity="0.12" />
          <rect x="2.5" y="14.5" width="19" height="6.5" rx="2" fill={color} fillOpacity="0.12" />
          <line x1="6" y1="6.25" x2="6.01" y2="6.25" strokeWidth="2.5" />
          <line x1="6" y1="17.75" x2="6.01" y2="17.75" strokeWidth="2.5" />
          <path d="M10 9.5v5M14 9.5v5" strokeDasharray="1.5 1.5" />
          <circle cx="10" cy="12" r="1.2" fill={color} />
          <circle cx="14" cy="12" r="1.2" fill={color} />
        </svg>
      );

    // 10. Software Architecture
    case "software-architecture":
      return (
        <svg {...commonProps}>
          <polygon points="12 2 2 7 12 12 22 7 12 2" fill={color} fillOpacity="0.18" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
          <circle cx="12" cy="12" r="1.2" fill={color} />
        </svg>
      );

    // 11. Network Connections
    case "network-connections":
      return (
        <svg {...commonProps}>
          <circle cx="18" cy="5" r="2.8" fill={color} fillOpacity="0.2" />
          <circle cx="6" cy="12" r="2.8" fill={color} fillOpacity="0.2" />
          <circle cx="18" cy="19" r="2.8" fill={color} fillOpacity="0.2" />
          <line x1="8.5" y1="13.2" x2="15.5" y2="17.8" />
          <line x1="15.5" y1="6.2" x2="8.5" y2="10.8" />
          <circle cx="18" cy="5" r="1" fill={color} />
          <circle cx="6" cy="12" r="1" fill={color} />
          <circle cx="18" cy="19" r="1" fill={color} />
        </svg>
      );

    // 12. Developer Tools
    case "dev-tools":
      return (
        <svg {...commonProps}>
          <rect x="2.5" y="3.5" width="19" height="17" rx="3" fill={color} fillOpacity="0.08" />
          <polyline points="6.5 8 10 11.5 6.5 15" />
          <line x1="12.5" y1="15" x2="17.5" y2="15" strokeWidth="2" />
        </svg>
      );

    default:
      return (
        <svg {...commonProps}>
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      );
  }
}

const FLOATING_ICONS = [
  // Top-left area
  { id: 1, type: "api-connectivity", size: 20, color: "#006769", opacity: 0.38, top: "8%", left: "4%", anim: "animate-float-shield-1", delay: "0s", rotate: "-6deg" },
  { id: 2, type: "api-endpoints", size: 21, color: "#14B8A6", opacity: 0.42, top: "22%", left: "11%", anim: "animate-float-shield-2", delay: "1.2s", rotate: "8deg" },
  { id: 3, type: "system-integration", size: 18, color: "#007A7E", opacity: 0.32, top: "37%", left: "3%", anim: "animate-float-shield-3", delay: "2.5s", rotate: "-4deg" },
  { id: 4, type: "microservices", size: 20, color: "#006769", opacity: 0.40, top: "54%", left: "8%", anim: "animate-float-shield-4", delay: "0.8s", rotate: "6deg" },
  { id: 5, type: "cloud-integration", size: 19, color: "#14B8A6", opacity: 0.35, top: "70%", left: "5%", anim: "animate-float-shield-1", delay: "3.1s", rotate: "12deg" },
  { id: 6, type: "database-connectivity", size: 21, color: "#007A7E", opacity: 0.36, top: "84%", left: "12%", anim: "animate-float-shield-2", delay: "1.7s", rotate: "-8deg" },
  { id: 7, type: "webhooks", size: 18, color: "#006769", opacity: 0.28, top: "27%", left: "21%", anim: "animate-float-shield-3", delay: "4.0s", rotate: "10deg" },
  { id: 8, type: "data-exchange", size: 19, color: "#14B8A6", opacity: 0.32, top: "72%", left: "20%", anim: "animate-float-shield-4", delay: "2.1s", rotate: "-5deg" },
  { id: 9, type: "server-communication", size: 20, color: "#007A7E", opacity: 0.30, top: "16%", left: "17%", anim: "animate-float-shield-1", delay: "3.5s", rotate: "7deg" },

  // Top-right area
  { id: 10, type: "software-architecture", size: 21, color: "#007A7E", opacity: 0.40, top: "10%", right: "5%", anim: "animate-float-shield-2", delay: "0.5s", rotate: "6deg" },
  { id: 11, type: "network-connections", size: 19, color: "#14B8A6", opacity: 0.36, top: "24%", right: "12%", anim: "animate-float-shield-1", delay: "2.2s", rotate: "-8deg" },
  { id: 12, type: "dev-tools", size: 20, color: "#006769", opacity: 0.42, top: "40%", right: "4%", anim: "animate-float-shield-4", delay: "1.4s", rotate: "5deg" },
  { id: 13, type: "api-connectivity", size: 18, color: "#007A7E", opacity: 0.32, top: "56%", right: "9%", anim: "animate-float-shield-3", delay: "3.3s", rotate: "-6deg" },
  { id: 14, type: "api-endpoints", size: 20, color: "#14B8A6", opacity: 0.38, top: "72%", right: "6%", anim: "animate-float-shield-1", delay: "1.9s", rotate: "10deg" },
  { id: 15, type: "system-integration", size: 19, color: "#006769", opacity: 0.30, top: "86%", right: "13%", anim: "animate-float-shield-2", delay: "2.7s", rotate: "-4deg" },
  { id: 16, type: "microservices", size: 18, color: "#007A7E", opacity: 0.28, top: "29%", right: "21%", anim: "animate-float-shield-4", delay: "0.9s", rotate: "8deg" },
  { id: 17, type: "cloud-integration", size: 19, color: "#14B8A6", opacity: 0.34, top: "74%", right: "21%", anim: "animate-float-shield-3", delay: "3.7s", rotate: "-10deg" },
  { id: 18, type: "database-connectivity", size: 18, color: "#006769", opacity: 0.30, top: "17%", right: "18%", anim: "animate-float-shield-2", delay: "1.1s", rotate: "-5deg" },

  // Center subtle ambient accents
  { id: 19, type: "webhooks", size: 16, color: "#006769", opacity: 0.26, top: "6%", left: "28%", anim: "animate-float-shield-3", delay: "1.3s", rotate: "10deg" },
  { id: 20, type: "data-exchange", size: 17, color: "#14B8A6", opacity: 0.28, top: "4%", left: "44%", anim: "animate-float-shield-1", delay: "2.6s", rotate: "-3deg" },
  { id: 21, type: "server-communication", size: 17, color: "#007A7E", opacity: 0.27, top: "5%", right: "42%", anim: "animate-float-shield-2", delay: "0.7s", rotate: "5deg" },
  { id: 22, type: "software-architecture", size: 18, color: "#006769", opacity: 0.28, top: "6%", right: "28%", anim: "animate-float-shield-4", delay: "3.0s", rotate: "-7deg" },
  { id: 23, type: "network-connections", size: 16, color: "#006769", opacity: 0.22, top: "46%", left: "26%", anim: "animate-float-shield-2", delay: "4.1s", rotate: "-12deg" },
  { id: 24, type: "dev-tools", size: 16, color: "#14B8A6", opacity: 0.22, top: "48%", right: "27%", anim: "animate-float-shield-1", delay: "1.8s", rotate: "6deg" },
  { id: 25, type: "api-connectivity", size: 16, color: "#007A7E", opacity: 0.24, bottom: "10%", left: "32%", anim: "animate-float-shield-4", delay: "2.3s", rotate: "4deg" },
  { id: 26, type: "system-integration", size: 16, color: "#006769", opacity: 0.24, bottom: "9%", right: "33%", anim: "animate-float-shield-3", delay: "0.9s", rotate: "-6deg" },
];

export function HeroSecurityBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      {FLOATING_ICONS.map((item) => {
        const style = {
          position: "absolute",
          top: item.top,
          bottom: item.bottom,
          left: item.left,
          right: item.right,
          opacity: item.opacity,
          animationDelay: item.delay,
          transform: `rotate(${item.rotate || "0deg"})`,
          filter: "drop-shadow(0 2px 6px rgba(0, 103, 105, 0.15))",
          willChange: "transform",
        };

        return (
          <div
            key={`float-sec-icon-${item.id}`}
            className={`${item.anim} transition-opacity duration-300`}
            style={style}
            aria-hidden="true"
          >
            <SecurityIcon
              type={item.type}
              size={item.size}
              color={item.color}
            />
          </div>
        );
      })}
    </div>
  );
}

// ============================================================================
// 3. COLLISION TEXT HEADING (FOR HERO)
// ============================================================================

function getLetterScatter(charIndex, totalChars, isLeft) {
  const seed = (charIndex * 13 + (isLeft ? 7 : 19)) % 17;
  const xValues = [-15, 12, -9, 14, -13, 8, -11, 13, -7, 10, -14, 6, -8, 11, -10, 9, -6];
  const rawX = xValues[seed % xValues.length];
  const yValues = [-6, 5, -5, 7, -4, 6, -7, 4, -4, 6, -5, 5, -6, 5, -3, 7, -4];
  const rawY = yValues[(seed * 3) % yValues.length];
  const scaleValues = [0.80, 0.88, 0.82, 0.92, 0.78, 0.90, 0.85, 0.86, 0.82, 0.91, 0.84];
  const rawScale = scaleValues[seed % scaleValues.length];
  const staggerDelay = ((charIndex * 17) % 7) * 10;

  return {
    sx: `${rawX}px`,
    sy: `${rawY}px`,
    sinit: rawScale,
    delay: `${staggerDelay}ms`,
  };
}

export function CollisionTextHeading({ text = "Product Introduction", className = "", onComplete }) {
  const containerRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [isSettled, setIsSettled] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia) {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      setReducedMotion(mediaQuery.matches);
      const handleChange = (e) => setReducedMotion(e.matches);
      mediaQuery.addEventListener?.("change", handleChange);
      return () => mediaQuery.removeEventListener?.("change", handleChange);
    }
  }, []);

  const { leftChars, rightChars } = useMemo(() => {
    const rawWords = (text || "").trim().split(/\s+/).filter(Boolean);
    if (rawWords.length === 0) return { leftChars: [], rightChars: [] };
    if (rawWords.length === 1) {
      const mid = Math.ceil(rawWords[0].length / 2);
      return {
        leftChars: rawWords[0].slice(0, mid).split(""),
        rightChars: rawWords[0].slice(mid).split(""),
      };
    }
    const midIndex = Math.ceil(rawWords.length / 2);
    return {
      leftChars: rawWords.slice(0, midIndex).join(" ").split(""),
      rightChars: rawWords.slice(midIndex).join(" ").split(""),
    };
  }, [text]);

  useEffect(() => {
    if (hasStarted || reducedMotion) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -20px 0px" }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [hasStarted, reducedMotion]);

  useEffect(() => {
    if (reducedMotion) {
      setIsSettled(true);
      if (onComplete) onComplete();
      return;
    }
    if (!hasStarted) return;
    const timer = setTimeout(() => {
      setIsSettled(true);
      if (onComplete) onComplete();
    }, 1950);
    return () => clearTimeout(timer);
  }, [hasStarted, reducedMotion, onComplete]);

  const IMPACT_TIME = 0.65;
  const PAIR_STEP = 0.045;
  const shouldAnimate = hasStarted && !reducedMotion;

  return (
    <div
      ref={containerRef}
      className={`collision-heading-root relative w-full max-w-4xl mx-auto select-none text-center overflow-hidden py-1.5 ${className}`}
      aria-label={text}
    >
      <h1 className="inline-flex flex-wrap items-baseline justify-center gap-x-2.5 sm:gap-x-3.5 tracking-tight font-sans leading-tight">
        <span
          className={`inline-flex items-baseline whitespace-nowrap font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#042C2E] drop-shadow-[0_2px_8px_rgba(4,44,46,0.1)] ${
            shouldAnimate ? "animate-collision-left" : ""
          }`}
          style={{ willChange: shouldAnimate ? "transform, opacity" : "auto" }}
        >
          {leftChars.map((char, index) => {
            if (char === " ") {
              return <span key={`l-sp-${index}`} className="inline-block w-2 sm:w-2.5">&nbsp;</span>;
            }
            const pairIndex = leftChars.length - 1 - index;
            const shockwaveDelay = (IMPACT_TIME + pairIndex * PAIR_STEP).toFixed(3);
            const scatter = getLetterScatter(index, leftChars.length, true);

            return (
              <span
                key={`left-char-${index}`}
                className={`relative inline-block ${shouldAnimate ? "animate-letter-scatter" : ""}`}
                style={{
                  "--sx": scatter.sx,
                  "--sy": scatter.sy,
                  "--sinit": scatter.sinit,
                  "--letter-delay": scatter.delay,
                  willChange: shouldAnimate ? "transform, opacity" : "auto",
                }}
              >
                <span
                  className={`inline-block ${shouldAnimate ? "animate-letter-shockwave" : ""}`}
                  style={{
                    "--shockwave-delay": `${shockwaveDelay}s`,
                    willChange: shouldAnimate ? "transform, filter" : "auto",
                  }}
                >
                  {char}
                </span>
              </span>
            );
          })}
        </span>

        <span
          className={`inline-flex items-baseline whitespace-nowrap font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#042C2E] drop-shadow-[0_2px_8px_rgba(4,44,46,0.1)] ${
            shouldAnimate ? "animate-collision-right" : ""
          }`}
          style={{ willChange: shouldAnimate ? "transform, opacity" : "auto" }}
        >
          {rightChars.map((char, index) => {
            if (char === " ") {
              return <span key={`r-sp-${index}`} className="inline-block w-2 sm:w-2.5">&nbsp;</span>;
            }
            const pairIndex = index;
            const shockwaveDelay = (IMPACT_TIME + pairIndex * PAIR_STEP).toFixed(3);
            const scatter = getLetterScatter(index, rightChars.length, false);

            return (
              <span
                key={`right-char-${index}`}
                className={`relative inline-block ${shouldAnimate ? "animate-letter-scatter" : ""}`}
                style={{
                  "--sx": scatter.sx,
                  "--sy": scatter.sy,
                  "--sinit": scatter.sinit,
                  "--letter-delay": scatter.delay,
                  willChange: shouldAnimate ? "transform, opacity" : "auto",
                }}
              >
                <span
                  className={`inline-block ${shouldAnimate ? "animate-letter-shockwave" : ""}`}
                  style={{
                    "--shockwave-delay": `${shockwaveDelay}s`,
                    willChange: shouldAnimate ? "transform, filter" : "auto",
                  }}
                >
                  {char}
                </span>
              </span>
            );
          })}
        </span>
      </h1>

      <div className="relative mt-2.5 h-1 w-full max-w-xl mx-auto overflow-hidden">
        {(isSettled || reducedMotion) && (
          <div className="relative w-full h-full animate-underline-sweep">
            <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#006769] to-transparent shadow-[0_0_10px_rgba(0,103,105,0.4)]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rotate-45 bg-[#14B8A6] shadow-[0_0_12px_rgba(20,184,166,0.6)] animate-flare-pulse" />
          </div>
        )}
      </div>
    </div>
  );
}

// ============================================================================
// 4. TOP HEADING & HERO CONTAINER
// ============================================================================

export function IBCSHeadingSection({
  badge = "IBCS SOFTWARE PRODUCTS",
  title = "Product Benefits & Impact",
  company = "IB Cyber Security Private Limited (IBCS)",
  summary = "A comprehensive operational framework designed to deliver meaningful benefits across government, law enforcement, investigation, cybersecurity, enterprise, banking, and citizen services through structured, scalable, and intelligent software capabilities.",
  buttonLabel = "Explore Benefits & Impact",
  onExplore,
  features = [
    { label: "12 Benefit Dimensions", dot: "#006769" },
    { label: "144 Impact Standards", dot: "#14B8A6" },
    { label: "Institutional & Enterprise Ready", dot: "#C54E2C" },
  ],
  onBack,
  onHome,
  children,
  className = "",
}) {
  return (
    <header className={`ibcs-heading-section relative overflow-hidden border-b border-[#C3ECE9] bg-gradient-to-b from-[#C8F0EC] via-[#E2F7F5] to-[#F0FBFA] pt-3 pb-8 sm:pt-4 sm:pb-10 lg:pt-4 lg:pb-12 ${className}`}>
      <HeroSecurityBackground />

      <div className="absolute top-6 left-8 hidden opacity-70 pointer-events-none lg:block" aria-hidden="true">
        <DotMatrix />
      </div>
      <div className="absolute bottom-6 right-10 hidden opacity-60 pointer-events-none lg:block" aria-hidden="true">
        <DotMatrix />
      </div>

      <div className="absolute top-1/4 left-1/3 h-96 w-96 rounded-full bg-[#8AE2DA]/30 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute -top-16 right-1/4 h-80 w-80 rounded-full bg-[#B6F2ED]/40 blur-3xl pointer-events-none" aria-hidden="true" />

      {/* Top Header Navigation Bar (Embedded directly into header for zero-gap layout) */}
      {(onBack || onHome) && (
        <div className="relative z-30 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-2 sm:mb-3 flex items-center justify-start gap-2.5 sm:gap-3">
          {onBack && (
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center gap-2 rounded-xl bg-[#081E52] hover:bg-[#0c2b7a] border border-[#D4AF37]/40 px-3.5 py-1.5 text-xs sm:text-sm font-bold text-white transition-all cursor-pointer shadow-sm active:scale-95"
            >
              ← Back
            </button>
          )}
          {onHome && (
            <button
              type="button"
              onClick={onHome}
              className="inline-flex items-center gap-2 rounded-xl bg-[#D4AF37] hover:bg-[#E5C158] px-3.5 py-1.5 text-xs sm:text-sm font-bold text-[#040A1A] transition-all cursor-pointer shadow-sm active:scale-95"
            >
              <Home className="w-4 h-4 text-[#040A1A]" />
              <span>Home</span>
            </button>
          )}
        </div>
      )}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {badge ? (
            <div className="mb-2 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#006769]">
              <span className="inline-block h-0.5 w-5 rounded-full bg-[#006769]" />
              <span>{badge}</span>
            </div>
          ) : null}

          <div className="my-1.5 overflow-hidden">
            <CollisionTextHeading text={title} />
          </div>

          {company ? <p className="mt-3 mb-3 text-sm font-bold tracking-wide text-[#007A7E] sm:text-lg">{company}</p> : null}
          {summary ? <p className="mx-auto mb-5 max-w-3xl text-sm font-normal leading-relaxed text-[#1E4345] sm:text-base">{summary}</p> : null}

          {buttonLabel ? (
            <div className="flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={onExplore}
                className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#006769] px-6 py-2.5 text-sm font-semibold tracking-wide text-white shadow-[0_8px_20px_rgba(0,103,105,0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#004E50] hover:shadow-[0_12px_28px_rgba(0,103,105,0.35)] sm:px-7 sm:py-3 sm:text-base"
              >
                <span>{buttonLabel}</span><span className="text-base" aria-hidden="true">→</span>
              </button>
            </div>
          ) : null}

          {children}
        </div>

        {features?.length ? (
          <div className="mx-auto mt-6 flex max-w-full flex-nowrap items-center justify-center gap-2 px-2 py-1 text-xs font-semibold text-[#006769] sm:mt-8 sm:gap-3.5">
            {features.map((feature, index) => (
              <div key={`${feature.label}-${index}`} className={`${index === 2 ? "hidden sm:flex" : "flex"} shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border border-[#C3ECE9] bg-white/95 px-3 py-1.5 shadow-xs backdrop-blur-sm sm:px-3.5`}>
                <span className="h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: feature.dot || "#006769" }} />
                <span>{feature.label}</span>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </header>
  );
}

export function Hero({ onBack, onHome }) {
  const handleExplore = () => {
    const el = document.getElementById("section-01");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <IBCSHeadingSection
      badge="IBCS SOFTWARE PRODUCTS"
      title="Integrations & APIs"
      company="IB Cyber Security Private Limited (IBCS)"
      summary="Explore how APIs, databases, external services, authentication systems, and technology platforms can connect within the IBCS software ecosystem. Discover integration approaches designed to support secure data exchange, interoperability, workflow connectivity, controlled access, and communication between applications and supporting systems."
      buttonLabel="Explore Integrations & APIs"
      onExplore={handleExplore}
      onBack={onBack}
      onHome={onHome}
      features={[
        { label: "12 Integration Dimensions", dot: "#006769" },
        { label: "144 API Capabilities", dot: "#14B8A6" },
        { label: "Institutional & Enterprise Ready", dot: "#C54E2C" },
      ]}
    />
  );
}

// ============================================================================
// 5. SECTION HEADING ANIMATION (AUTHENTIC SEQUENTIAL & CONTACT SPARK)
// ============================================================================

export function SectionHeadingAnimation({ text = "", className = "" }) {
  const containerRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  const parts = (text || "").trim().split(/\s+/);
  const word1 = parts[0] || "";
  const remainingText = parts.slice(1).join(" ");

  const word1Chars = word1.split("");
  const remainingChars = remainingText.split("");

  const remainingWordTokens = [];
  let charCursor = 0;
  for (let w = 1; w < parts.length; w++) {
    const wordStr = parts[w];
    const letters = [];
    for (let c = 0; c < wordStr.length; c++) {
      letters.push({
        char: wordStr[c],
        index: charCursor,
      });
      charCursor++;
    }
    remainingWordTokens.push({
      word: wordStr,
      letters,
    });
    if (w < parts.length - 1) {
      charCursor++;
    }
  }

  const [word1Count, setWord1Count] = useState(1);
  const [flyingIndex1, setFlyingIndex1] = useState(null);
  const [sparkIndex1, setSparkIndex1] = useState(null);

  const [word2Count, setWord2Count] = useState(0);
  const [flyingIndex2, setFlyingIndex2] = useState(null);

  const [allComplete, setAllComplete] = useState(false);

  const timersRef = useRef([]);

  const clearTimers = () => {
    timersRef.current.forEach((t) => clearTimeout(t));
    timersRef.current = [];
  };

  const addTimer = (callback, delay) => {
    const t = setTimeout(callback, delay);
    timersRef.current.push(t);
    return t;
  };

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia) {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      if (mq.matches) {
        setWord1Count(word1Chars.length);
        setWord2Count(remainingChars.length);
        setAllComplete(true);
        setHasStarted(true);
      }
    }
  }, [word1Chars.length, remainingChars.length]);

  useEffect(() => {
    if (hasStarted) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted || allComplete) return;

    clearTimers();
    setWord1Count(1);
    setFlyingIndex1(null);
    setSparkIndex1(null);
    setWord2Count(0);
    setFlyingIndex2(null);
    setAllComplete(false);

    const INITIAL_PAUSE = 80;
    const LETTER_DURATION = 260;
    const SETTLE_PAUSE = 20;

    let currentTime = INITIAL_PAUSE;

    for (let i = 1; i < word1Chars.length; i++) {
      const idx = i;
      addTimer(() => {
        setWord1Count((prev) => Math.max(prev, idx + 1));
        setFlyingIndex1(idx);
      }, currentTime);

      const landTime = currentTime + LETTER_DURATION;
      addTimer(() => {
        setFlyingIndex1(null);
        setSparkIndex1(idx);
      }, landTime);

      addTimer(() => {
        setSparkIndex1(null);
      }, landTime + 120);

      currentTime = landTime + SETTLE_PAUSE;
    }

    currentTime += 80;

    const FAST_DURATION = 220;
    const FAST_INTERVAL = 30;

    for (let j = 0; j < remainingChars.length; j++) {
      const idx = j;
      addTimer(() => {
        setWord2Count((prev) => Math.max(prev, idx + 1));
        setFlyingIndex2(idx);
      }, currentTime + idx * FAST_INTERVAL);
    }

    const totalTime = currentTime + remainingChars.length * FAST_INTERVAL + FAST_DURATION;

    addTimer(() => {
      setFlyingIndex2(null);
      setAllComplete(true);
    }, totalTime);

    return clearTimers;
  }, [hasStarted]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center select-none overflow-x-clip ${className}`}
    >
      <h2 className="inline-flex flex-wrap items-baseline justify-center gap-x-2 sm:gap-x-3 tracking-tight font-sans leading-tight">
        <span className="inline-block whitespace-nowrap font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#042C2E]">
          {word1Chars.map((char, index) => {
            const isFirst = index === 0;
            const isFlying = flyingIndex1 === index;
            const isSettled = index < word1Count && !isFlying;
            const isSparking = sparkIndex1 === index;

            return (
              <span
                key={`w1-${index}`}
                className="relative inline-block"
                style={{
                  opacity: isFirst || isSettled || isFlying ? 1 : 0,
                  willChange: "transform, filter",
                }}
              >
                {isFirst ? (
                  <span className="relative z-10 text-[#042C2E] drop-shadow-[0_2px_8px_rgba(4,44,46,0.1)]">
                    {char}
                  </span>
                ) : (
                  <span
                    className={`relative z-10 inline-block ${
                      isFlying ? "animate-letter-fly-in text-[#006769]" : "text-[#042C2E]"
                    }`}
                  >
                    {char}
                    {isFlying && (
                      <span
                        className="absolute top-1/2 -translate-y-1/2 left-full pointer-events-none h-[2px] bg-gradient-to-r from-[#006769] via-[#14B8A6]/70 to-transparent blur-[0.5px] animate-trail-fade"
                        style={{ width: "min(35vw, 130px)" }}
                      />
                    )}
                  </span>
                )}

                {isSparking && (
                  <span
                    className="absolute -top-2.5 left-1/2 -translate-x-1/2 pointer-events-none flex items-center justify-center gap-1 text-[#006769] font-bold text-xs animate-impact-spark"
                    aria-hidden="true"
                  >
                    <span className="w-1 h-2.5 bg-[#006769] rotate-[-25deg] rounded-full shadow-[0_0_6px_rgba(0,103,105,0.6)]" />
                    <span className="w-1 h-2.5 bg-[#006769] rotate-[25deg] rounded-full shadow-[0_0_6px_rgba(0,103,105,0.6)]" />
                  </span>
                )}
              </span>
            );
          })}
        </span>

        {remainingWordTokens.length > 0 && (
          <span className="inline-flex flex-wrap items-baseline justify-center gap-x-2 sm:gap-x-2.5 font-bold text-xl sm:text-2xl lg:text-3xl text-[#007A7E]">
            {remainingWordTokens.map((token, tokenIdx) => (
              <span key={`rem-word-${tokenIdx}`} className="inline-block whitespace-nowrap">
                {token.letters.map(({ char, index }) => {
                  const isFlying = flyingIndex2 === index;
                  const isSettled = index < word2Count && !isFlying;

                  return (
                    <span
                      key={`w2-char-${index}`}
                      className="relative inline-block"
                      style={{
                        opacity: isSettled || isFlying ? 1 : 0,
                        willChange: "transform, filter",
                      }}
                    >
                      <span
                        className={`inline-block ${
                          isFlying ? "animate-letter-fly-fast text-[#006769]" : "text-[#007A7E]"
                        }`}
                      >
                        {char}
                      </span>
                      {isFlying && (
                        <span
                          className="absolute top-1/2 -translate-y-1/2 left-full pointer-events-none h-[1.5px] bg-gradient-to-r from-[#007A7E] via-[#14B8A6]/50 to-transparent blur-[0.5px]"
                          style={{ width: "min(20vw, 70px)" }}
                        />
                      )}
                    </span>
                  );
                })}
              </span>
            ))}
          </span>
        )}
      </h2>

      <div className="relative mt-2.5 h-1 w-full max-w-md mx-auto overflow-hidden">
        {allComplete && (
          <div className="relative w-full h-full animate-underline-sweep">
            <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#006769] to-transparent shadow-[0_0_10px_rgba(0,103,105,0.4)]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rotate-45 bg-[#14B8A6] shadow-[0_0_12px_rgba(20,184,166,0.6)] animate-flare-pulse" />
          </div>
        )}
      </div>
    </div>
  );
}

// ============================================================================
// 6. SECTION HEADER (TITLE, WATERMARK, ANIMATED HEADING, INTRO)
// ============================================================================

export function SectionHeader({
  section,
  searchQuery = "",
  showKeyAreasBar = true,
  className = "",
}) {
  if (!section) return null;

  const sectionNumberStr =
    section.sectionNumberRaw ||
    String(section.sectionNumber || 1).padStart(2, '0');

  const formattedTitle = formatSectionTitle(section.title || section.rawHeader);

  return (
    <div className={`relative mb-12 sm:mb-14 pt-2 overflow-x-clip ${className}`}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-2 top-0 hidden select-none grid-cols-6 gap-2 opacity-50 lg:grid"
      >
        {Array.from({ length: 24 }, (_, index) => (
          <span key={index} className="h-1.5 w-1.5 rounded-full bg-[#8FD6CF]/60" />
        ))}
      </div>

      <div className="relative mx-auto max-w-4xl text-center overflow-x-clip">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-8 sm:-top-10 left-1/2 -translate-x-1/2 select-none whitespace-nowrap text-7xl font-black leading-none text-[#006769]/10 sm:text-8xl"
        >
          {sectionNumberStr}
        </div>

        <div className="relative z-10">
          <div className="mb-2.5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#006769]">
            <span className="inline-block h-0.5 w-6 rounded-full bg-[#006769]" />
            <span>{`SECTION ${sectionNumberStr}`}</span>
          </div>

          <SectionHeadingAnimation text={formattedTitle} />

          {section.intro ? (
            <p className="mx-auto mt-4 max-w-3xl text-sm sm:text-base font-normal leading-relaxed text-[#1E4345]">
              {searchQuery ? (
                <HighlightText text={section.intro} query={searchQuery} />
              ) : (
                section.intro
              )}
            </p>
          ) : null}
        </div>
      </div>

      {showKeyAreasBar && section.keyAreasHeader ? (
        <div className="mt-8 flex items-center justify-between border-b border-[#C3ECE9] pb-3">
          <h3 className="text-base sm:text-lg font-bold text-[#042C2E] flex items-center gap-2">
            <span>{section.keyAreasHeader}</span>
          </h3>
          <span className="text-xs font-mono font-medium text-[#007A7E] bg-[#E0F7F5] px-2.5 py-1 rounded-full border border-[#C3ECE9]">
            {section.keyAreas?.length || 12} Key Architecture Areas
          </span>
        </div>
      ) : null}
    </div>
  );
}

// ============================================================================
// 7. ORBITAL CONTENT SHOWCASE (SEMI-CIRCLE RADAR & INFORMATION CARD)
// ============================================================================

/**
 * Enterprise SVG Icon Component for IBCS Product Benefits & Impact
 * Pixel-tailored vector iconography strictly matching the IBCS Brand Design.
 */
/**
 * Enterprise SVG Icon Component for IBCS Product Benefits & Impact
 * Pixel-tailored vector iconography strictly matching the IBCS Brand Design.
 */
/* DomainIcon and getDomainIconType are imported from ./DomainIcon */

// Geometric Constants for Orbital Semi-Circle Arc
const CX = 75;
const CY = 205;
const RADIUS = 175;
const STEP_ANGLE_DEG = 19;
const STAGE_WIDTH = 340;
const STAGE_HEIGHT = 410;

/**
 * OrbitalContentShowcase Component
 * Reusable two-column futuristic interactive semi-circle navigation layout.
 * Left Side: Semi-circular orbital arc radar with rotating glass nodes & center glass hub.
 * Right Side: Minimalist white glassmorphic content card with icon, title, and full description.
 */
export function OrbitalContentShowcase({
  items = [],
  ariaLabel = "Interactive orbital content navigation",
  sectionId = "",
  isPaused: externalPaused = false,
  onSectionClick,
  onTogglePause,
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [internalPaused, setInternalPaused] = useState(false);
  const [isHoveringArc, setIsHoveringArc] = useState(false);

  const isPaused = externalPaused || internalPaused;

  const orbitRef = useRef(null);
  const lastScrollTimeRef = useRef(0);
  const touchStartYRef = useRef(0);
  const isTouchOnArcRef = useRef(false);
  const isDraggingRef = useRef(false);
  const dragStartYRef = useRef(0);

  // Normalize items array
  const domainItems = React.useMemo(() => {
    if (!Array.isArray(items) || items.length === 0) return [];
    return items.map((item, idx) => ({
      id: item.id || `${sectionId || "section"}-item-${idx}`,
      number: item.number || String(idx + 1).padStart(2, "0"),
      title: item.title || item.heading || `Item ${idx + 1}`,
      description: item.description || item.content || item.text || "",
      iconType: item.iconType || getDomainIconType(item.title || "", idx),
    }));
  }, [items, sectionId]);

  const totalItems = domainItems.length;

  // Keep activeIndex within range
  useEffect(() => {
    if (totalItems > 0 && activeIndex >= totalItems) {
      setActiveIndex(0);
    }
  }, [totalItems, activeIndex]);

  const handleSelect = (index) => {
    setActiveIndex(index);
    if (onSectionClick) onSectionClick();
  };

  const handleNext = () => {
    if (totalItems <= 1) return;
    setActiveIndex((prev) => (prev + 1) % totalItems);
    if (onSectionClick) onSectionClick();
  };

  const handlePrev = () => {
    if (totalItems <= 1) return;
    setActiveIndex((prev) => (prev - 1 + totalItems) % totalItems);
    if (onSectionClick) onSectionClick();
  };

  const handleNextRef = useRef(handleNext);
  handleNextRef.current = handleNext;
  const handlePrevRef = useRef(handlePrev);
  handlePrevRef.current = handlePrev;

  // Auto-change timer: automatically rotates along the arc every 4.5 seconds
  const AUTO_INTERVAL = 3500;
  useEffect(() => {
    if (isPaused || totalItems <= 1) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalItems);
    }, AUTO_INTERVAL);

    return () => clearInterval(timer);
  }, [isPaused, totalItems]);

  // Geometric hit-test: tests whether cursor is on the curved arc track
  const checkIsOnArc = (clientX, clientY) => {
    const el = orbitRef.current;
    if (!el) return false;
    const rect = el.getBoundingClientRect();
    const scaleX = rect.width / STAGE_WIDTH;
    const scaleY = rect.height / STAGE_HEIGHT;
    const mouseX = (clientX - rect.left) / (scaleX || 1);
    const mouseY = (clientY - rect.top) / (scaleY || 1);

    const dx = mouseX - CX;
    const dy = mouseY - CY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const angleDeg = (Math.atan2(dy, dx) * 180) / Math.PI;

    return dist >= 115 && dist <= 220 && dx > 5 && Math.abs(angleDeg) <= 88;
  };

  // Non-passive wheel listener: guarantees smooth section-by-section rotation
  // ONLY intercepts when mouse is positioned directly on the arc or an orbital node!
  useEffect(() => {
    const el = orbitRef.current;
    if (!el) return;

    const onWheelNonPassive = (e) => {
      const isOnArc =
        checkIsOnArc(e.clientX, e.clientY) ||
        Boolean(e.target.closest?.(".orbital-node-interactive"));

      if (!isOnArc) return;

      e.preventDefault();
      e.stopPropagation();

      const now = Date.now();
      if (now - lastScrollTimeRef.current < 260) return;

      if (Math.abs(e.deltaY) > 6) {
        if (e.deltaY > 0) {
          handleNextRef.current();
        } else {
          handlePrevRef.current();
        }
        lastScrollTimeRef.current = now;
      }
    };

    const onTouchMoveNonPassive = (e) => {
      if (isTouchOnArcRef.current && e.cancelable) {
        e.preventDefault();
      }
    };

    el.addEventListener("wheel", onWheelNonPassive, { passive: false });
    el.addEventListener("touchmove", onTouchMoveNonPassive, { passive: false });

    return () => {
      el.removeEventListener("wheel", onWheelNonPassive);
      el.removeEventListener("touchmove", onTouchMoveNonPassive);
    };
  }, []);

  // Touch swipe support
  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    touchStartYRef.current = touch.clientY;
    isTouchOnArcRef.current =
      checkIsOnArc(touch.clientX, touch.clientY) ||
      Boolean(e.target.closest?.(".orbital-node-interactive"));
  };

  const handleTouchEnd = (e) => {
    if (!isTouchOnArcRef.current) return;
    const touchEndY = e.changedTouches[0].clientY;
    const diff = touchStartYRef.current - touchEndY;
    if (Math.abs(diff) > 25) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  // Mouse drag support
  const handleMouseDown = (e) => {
    const onArc =
      checkIsOnArc(e.clientX, e.clientY) ||
      Boolean(e.target.closest?.(".orbital-node-interactive"));
    if (onArc) {
      isDraggingRef.current = true;
      dragStartYRef.current = e.clientY;
    }
  };

  const handleMouseMove = (e) => {
    const onArc =
      checkIsOnArc(e.clientX, e.clientY) ||
      Boolean(e.target.closest?.(".orbital-node-interactive"));
    setIsHoveringArc(onArc);
  };

  const handleMouseUp = (e) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    const diff = dragStartYRef.current - e.clientY;
    if (Math.abs(diff) > 25) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  const handleMouseLeave = () => {
    isDraggingRef.current = false;
    setInternalPaused(false);
    setIsHoveringArc(false);
  };

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      handleNext();
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      handlePrev();
    }
  };

  if (totalItems === 0) return null;

  const currentItem = domainItems[activeIndex] || domainItems[0];

  const cx = CX;
  const cy = CY;
  const radius = RADIUS;

  // Dynamic step angle based on item count so 10, 12, or more items distribute smoothly
  const dynamicStepAngleDeg = totalItems >= 12 ? 15.5 : totalItems >= 10 ? STEP_ANGLE_DEG : 22;
  const maxDistance = totalItems >= 12 ? 6 : totalItems >= 10 ? 5 : Math.max(3, Math.floor(totalItems / 2));

  return (
    <div
      className="w-full relative select-none"
      /* Auto-scroll runs continuously unless hovering the orbit directly */
      onClick={() => {
        if (onSectionClick) onSectionClick();
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center max-w-5xl mx-auto">
        {/* =========================================================================
            LEFT SIDE: COMPACT SEMI-CIRCLE ORBITAL NAVIGATION (5 of 12 cols)
            ========================================================================= */}
        <div className="lg:col-span-5 flex justify-center items-center py-2 overflow-visible min-h-[380px] sm:min-h-[410px]">
          <div
            ref={orbitRef}
            className={`relative w-[340px] h-[410px] shrink-0 flex items-center justify-center touch-pan-y focus:outline-none transition-transform origin-center scale-[0.88] sm:scale-95 md:scale-100 ${
              isHoveringArc ? "cursor-ns-resize" : "cursor-default"
            }`}
            onMouseEnter={() => setInternalPaused(true)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="region"
            aria-label={ariaLabel}
          >
            {/* Ambient Radial Glow Behind Hub */}
            <div
              className="absolute rounded-full pointer-events-none blur-3xl"
              style={{
                left: `${cx}px`,
                top: `${cy}px`,
                width: "280px",
                height: "280px",
                transform: "translate(-50%, -50%)",
                background:
                  "radial-gradient(circle, rgba(45,212,191,0.18) 0%, rgba(0,103,105,0.04) 50%, transparent 70%)",
              }}
            />

            {/* Background SVG Canvas: Concentric Radar Rings & Orbital Arc Path */}
            <svg
              className="absolute inset-0 w-[340px] h-[410px] pointer-events-none overflow-visible"
              viewBox="0 0 340 410"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="arcStrokeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#2DD4BF" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#14B8A6" stopOpacity="0.2" />
                </linearGradient>
              </defs>

              {/* Concentric Radar Arcs */}
              <path
                d={`M ${cx + 96 * Math.cos((-78 * Math.PI) / 180)} ${
                  cy + 96 * Math.sin((-78 * Math.PI) / 180)
                } A 96 96 0 0 1 ${cx + 96 * Math.cos((78 * Math.PI) / 180)} ${
                  cy + 96 * Math.sin((78 * Math.PI) / 180)
                }`}
                stroke="#14B8A6"
                strokeWidth="1"
                strokeOpacity="0.25"
                strokeDasharray="4 5"
              />

              <path
                d={`M ${cx + 124 * Math.cos((-80 * Math.PI) / 180)} ${
                  cy + 124 * Math.sin((-80 * Math.PI) / 180)
                } A 124 124 0 0 1 ${cx + 124 * Math.cos((80 * Math.PI) / 180)} ${
                  cy + 124 * Math.sin((80 * Math.PI) / 180)
                }`}
                stroke="#2DD4BF"
                strokeWidth="1"
                strokeOpacity="0.2"
              />

              <path
                d={`M ${cx + 150 * Math.cos((-82 * Math.PI) / 180)} ${
                  cy + 150 * Math.sin((-82 * Math.PI) / 180)
                } A 150 150 0 0 1 ${cx + 150 * Math.cos((82 * Math.PI) / 180)} ${
                  cy + 150 * Math.sin((82 * Math.PI) / 180)
                }`}
                stroke="#14B8A6"
                strokeWidth="1"
                strokeOpacity="0.15"
                strokeDasharray="2 6"
              />

              {/* Main Semi-Circular Orbital Arc Path */}
              <path
                d={`M ${cx + radius * Math.cos((-84 * Math.PI) / 180)} ${
                  cy + radius * Math.sin((-84 * Math.PI) / 180)
                } A ${radius} ${radius} 0 0 1 ${cx + radius * Math.cos((84 * Math.PI) / 180)} ${
                  cy + radius * Math.sin((84 * Math.PI) / 180)
                }`}
                stroke="url(#arcStrokeGradient)"
                strokeWidth="2"
                strokeLinecap="round"
              />

              {/* Connector ticks */}
              {[-65, -45, -25, 0, 25, 45, 65].map((deg) => {
                const rad = (deg * Math.PI) / 180;
                const dotX = cx + radius * Math.cos(rad);
                const dotY = cy + radius * Math.sin(rad);
                return (
                  <circle
                    key={`tick-${deg}`}
                    cx={dotX}
                    cy={dotY}
                    r="1.75"
                    fill="#14B8A6"
                    fillOpacity="0.5"
                  />
                );
              })}
            </svg>

            {/* Circular Glass Panel (Hub) */}
            <div
              className="absolute z-20 flex flex-col items-center justify-center text-center rounded-full bg-white/95 backdrop-blur-xl border border-[#B2EBF2] shadow-[0_12px_32px_rgba(0,103,105,0.08),inset_0_2px_4px_rgba(255,255,255,0.95)]"
              style={{
                left: `${cx}px`,
                top: `${cy}px`,
                width: "138px",
                height: "138px",
                transform: "translate(-50%, -50%)",
              }}
            >
              <div
                key={`hub-content-${currentItem.id}`}
                className="flex flex-col items-center justify-center px-2 transition-all duration-300 animate-content-stagger-1 w-full"
              >
                <span className="font-mono font-black text-2xl sm:text-3xl text-[#006769] tracking-tight leading-none mb-1">
                  {currentItem.number}
                </span>

                <h4 className="text-[11.5px] sm:text-xs font-bold text-[#042C2E] max-w-[114px] leading-snug text-center">
                  {currentItem.title}
                </h4>

                <div className="w-6 h-0.5 bg-[#14B8A6] rounded-full mx-auto mt-1.5" />
              </div>
            </div>

            {/* Orbital Nodes Along Semi-Circle Arc */}
            {domainItems.map((item, idx) => {
              let diff = idx - activeIndex;
              const lowerBound = -Math.floor(totalItems / 2);
              const upperBound = Math.ceil(totalItems / 2) - 1;
              if (diff < lowerBound) diff += totalItems;
              if (diff > upperBound) diff -= totalItems;

              const isActive = diff === 0;
              const isVisible = Math.abs(diff) <= maxDistance;

              const angleDeg = diff * dynamicStepAngleDeg;
              const angleRad = (angleDeg * Math.PI) / 180;

              const nodeX = cx + radius * Math.cos(angleRad);
              const nodeY = cy + radius * Math.sin(angleRad);

              let opacity = 1;
              if (Math.abs(diff) === maxDistance - 2) opacity = 0.75;
              if (Math.abs(diff) === maxDistance - 1) opacity = 0.45;
              if (Math.abs(diff) >= maxDistance) opacity = 0;

              const scale = isActive ? 1.15 : 0.92;
              const zIndex = isActive ? 40 : 25 - Math.abs(diff);

              return (
                <div
                  key={`orbital-node-${item.id}`}
                  onClick={() => handleSelect(idx)}
                  className="orbital-node-interactive absolute cursor-pointer select-none transition-all duration-500 ease-[cubic-bezier(0.2,1,0.2,1)]"
                  style={{
                    left: `${nodeX}px`,
                    top: `${nodeY}px`,
                    transform: `translate(-50%, -50%) scale(${scale})`,
                    opacity,
                    zIndex,
                    pointerEvents: isVisible ? "auto" : "none",
                  }}
                  role="button"
                  tabIndex={isVisible ? 0 : -1}
                  aria-label={`Select item ${item.number} ${item.title}`}
                  aria-selected={isActive}
                >
                  <div className="flex items-center gap-1.5 relative">
                    <div
                      className={`rounded-full flex items-center justify-center transition-all duration-500 ${
                        isActive
                          ? "w-11 h-11 sm:w-12 sm:h-12 bg-gradient-to-br from-[#006769] via-[#024B4D] to-[#042C2E] text-white border-2 border-[#2DD4BF] shadow-[0_0_20px_rgba(45,212,191,0.65),0_6px_16px_rgba(0,103,105,0.35)] ring-2 ring-[#14B8A6]/20"
                          : "w-8 h-8 sm:w-9 sm:h-9 bg-white/95 backdrop-blur-md text-[#006769] border border-[#B2EBF2] shadow-[0_2px_8px_rgba(0,103,105,0.06)] hover:border-[#14B8A6] hover:scale-105 hover:bg-white"
                      }`}
                    >
                      <DomainIcon
                        type={item.iconType}
                        className={isActive ? "w-5 h-5 text-white" : "w-3.5 h-3.5"}
                      />
                    </div>

                    <span
                      className={`font-mono transition-all duration-300 ${
                        isActive
                          ? "font-black text-sm sm:text-base text-[#042C2E] tracking-tight ml-1"
                          : "font-bold text-[10px] sm:text-[11px] text-[#486D6F] ml-0.5"
                      }`}
                    >
                      {item.number}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            RIGHT SIDE: ULTRA-CLEAN MINIMALIST CONTENT CARD (7 of 12 cols)
            Compact, elegant, and perfectly proportioned
            ========================================================================= */}
        <div className="lg:col-span-7 flex justify-center">
          <div
            key={`domain-card-${currentItem.id}`}
            className="w-full max-w-xl bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-[#C5ECE9] shadow-[0_12px_32px_rgba(0,103,105,0.06)] p-5 sm:p-7 lg:p-8 transition-all duration-500 relative overflow-hidden flex flex-col justify-center min-h-[180px] sm:min-h-[200px] animate-content-stagger-1"
          >
            {/* Top Atmospheric Corner Glow */}
            <div
              className="absolute -top-20 -right-20 w-44 h-44 rounded-full bg-gradient-to-br from-[#14B8A6]/10 to-[#006769]/5 blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative z-10 flex flex-col justify-center">
              {/* Header row: Icon on left, Title to the RIGHT of the icon */}
              <div className="flex items-center gap-3 sm:gap-4 mb-2.5 sm:mb-3">
                <div className="w-11 h-11 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#006769] via-[#024B4D] to-[#042C2E] text-white flex items-center justify-center shadow-md shadow-[#006769]/20 border border-white/20 shrink-0">
                  <DomainIcon
                    type={currentItem.iconType}
                    className="w-5 h-5 sm:w-8 sm:h-8 text-[#2DD4BF]"
                  />
                </div>

                <h3 className="text-lg sm:text-2xl lg:text-[26px] font-extrabold text-[#042C2E] tracking-tight leading-snug">
                  {currentItem.title}
                </h3>
              </div>

              {/* Section Description */}
              <p className="text-sm sm:text-[15px] text-[#1E4345] leading-relaxed font-normal">
                {currentItem.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


// ============================================================================
// 7. ORBITAL CONTENT SHOWCASE CONNECTOR (ALIASES & ADAPTERS)
// ============================================================================

export function KeypadMobileShowcase({
  section,
  isPaused = false,
  onSectionClick,
  onTogglePause,
}) {
  if (!section || !section.keyAreas?.length) return null;
  return (
    <RetroTvShowcase
      items={section.keyAreas}
      ariaLabel={`${section.title || "Section"} content navigation`}
      autoRotate={!isPaused}
      interval={4800}
    />
  );
}

// ============================================================================
// 8. SECTION ITEM (UNIFIED SECTION COMPONENT WITH RETRO TV SHOWCASE)
// ============================================================================

export function SectionItem({
  section,
  searchQuery,
  layout = "mobile-left",
  subheadingTitle,
  isPaused = false,
  onSectionClick,
  onTogglePause,
}) {
  if (!section) return null;
  return (
    <section
      id={section.id}
      className="relative py-14 sm:py-20 lg:py-24 bg-gradient-to-b from-[#F4FCFB] via-white to-[#F0FBFA] border-b border-[#D0ECE9] scroll-mt-20 overflow-hidden"
    >
      <div className="relative w-full max-w-7xl mx-auto flex flex-col items-center px-4">
        <SectionHeader section={section} searchQuery={searchQuery} showKeyAreasBar={false} />
        <div className="w-full mt-4 sm:mt-6">
          <RetroTvShowcase
            items={section.keyAreas}
            sectionId={section.id}
            categoryTag="INTEGRATION"
            ariaLabel={`${section.title || "Section"} content navigation`}
            autoRotate={!isPaused}
            isPaused={isPaused}
            onSectionClick={onSectionClick}
            interval={3500}
          />
        </div>
      </div>
    </section>
  );
}

// Named Section Exports for backwards-compatibility
export const Section01Foundation = (props) => <SectionItem layout="mobile-left" subheadingTitle="Explore the Technology Foundation" {...props} />;
export const Section02Languages = (props) => <SectionItem layout="mobile-right" subheadingTitle="Explore Programming Languages & Engineering" {...props} />;
export const Section03Frontend = (props) => <SectionItem layout="mobile-left" subheadingTitle="Explore Frontend Technologies & UI/UX" {...props} />;
export const Section04Backend = (props) => <SectionItem layout="mobile-right" subheadingTitle="Explore Backend Architecture & Services" {...props} />;
export const Section05Database = (props) => <SectionItem layout="mobile-left" subheadingTitle="Explore Databases & Data Architecture" {...props} />;
export const Section06Cloud = (props) => <SectionItem layout="mobile-right" subheadingTitle="Explore Cloud Infrastructure & DevOps" {...props} />;
export const Section07AI = (props) => <SectionItem layout="mobile-left" subheadingTitle="Explore Artificial Intelligence & ML" {...props} />;
export const Section08Mobile = (props) => <SectionItem layout="mobile-right" subheadingTitle="Explore Mobile Engineering & Platforms" {...props} />;
export const Section09DevOps = (props) => <SectionItem layout="mobile-left" subheadingTitle="Explore DevOps & Continuous Delivery" {...props} />;
export const Section10Security = (props) => <SectionItem layout="mobile-right" subheadingTitle="Explore Cybersecurity & Zero Trust" {...props} />;
export const Section11Architecture = (props) => <SectionItem layout="mobile-left" subheadingTitle="Explore Enterprise Software Architecture" {...props} />;
export const Section12Intelligence = (props) => <SectionItem layout="mobile-right" subheadingTitle="Explore Data Intelligence & Advanced Analytics" {...props} />;

const SECTION_CONFIGS = [
  { id: "section-01", layout: "mobile-left", subheading: "Explore Integration Strategy & Architecture" },
  { id: "section-02", layout: "mobile-right", subheading: "Explore API Architecture & Design" },
  { id: "section-03", layout: "mobile-left", subheading: "Explore API Types & Communication Models" },
  { id: "section-04", layout: "mobile-right", subheading: "Explore Internal & Microservice Integration" },
  { id: "section-05", layout: "mobile-left", subheading: "Explore Third-Party & External Integrations" },
  { id: "section-06", layout: "mobile-right", subheading: "Explore Integration with IBCS Products" },
  { id: "section-07", layout: "mobile-left", subheading: "Explore Government & Enterprise System Integration" },
  { id: "section-08", layout: "mobile-right", subheading: "Explore Data Integration & Synchronization" },
  { id: "section-09", layout: "mobile-left", subheading: "Explore Real-Time, Event-Driven & Webhook Integration" },
  { id: "section-10", layout: "mobile-right", subheading: "Explore API Security & Access Control" },
  { id: "section-11", layout: "mobile-left", subheading: "Explore API Management, Monitoring & Lifecycle" },
  { id: "section-12", layout: "mobile-right", subheading: "Explore Scalable & Future-Ready Integration Ecosystem" },
];

// ============================================================================
// 9. COMPLETE TECHNOLOGY & ARCHITECTURE PAGE COMPONENT
// ============================================================================

export default function Integrationsandapi({ onClose }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [pausedSectionId, setPausedSectionId] = useState(null);

  const handleBack = () => {
    if (onClose) {
      onClose();
    } else if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.hash = '#software-products';
    }
  };

  const handleHome = () => {
    if (onClose) onClose();
    window.location.hash = '#home';
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const handleSectionSelect = (sectionId) => {
    // When a section is clicked, that section becomes paused.
    // Any previously paused section automatically unpauses and resumes its auto-scroll!
    setPausedSectionId(sectionId);
  };

  const handleToggleSectionPause = (sectionId) => {
    // Toggle pause/play on user demand
    setPausedSectionId((prev) => (prev === sectionId ? null : sectionId));
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col selection:bg-blue-600 selection:text-white overflow-x-hidden">
      {/* Embedded Complete Styles from index.css and section-heading-animations.css */}
      <style dangerouslySetInnerHTML={{ __html: EMBEDDED_STYLES }} />

      <main className="flex-1 overflow-x-hidden">
        {/* Top Hero Section */}
        <Hero onBack={handleBack} onHome={handleHome} />

        {/* 12 Architecture Sections with Alternating Layouts */}
        {technologySections.map((section, idx) => {
          const config = SECTION_CONFIGS[idx] || {
            layout: idx % 2 === 0 ? "mobile-left" : "mobile-right",
            subheading: `Explore ${section.title}`,
          };
          const sectionId = section.id || `tech-section-${idx}`;
          const isSectionPaused = pausedSectionId === sectionId;

          return (
            <SectionItem
              key={sectionId}
              section={section}
              searchQuery={searchQuery}
              layout={config.layout}
              subheadingTitle={config.subheading}
              isPaused={isSectionPaused}
              onSectionClick={() => handleSectionSelect(sectionId)}
              onTogglePause={() => handleToggleSectionPause(sectionId)}
            />
          );
        })}
      </main>
    </div>
  );
}

export const TechnologyArchitecture = Integrationsandapi;
export const IntegrationsAndApi = Integrationsandapi;
export const IntegrationsAPIsPage = Integrationsandapi;

