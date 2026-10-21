/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from './router-compat';
import { ShieldAlert, Home, ArrowLeft, Lock, AlertTriangle } from 'lucide-react';

/**
 * ============================================================================
 * 30-FEATURE FRONTEND URL, ROUTE, NAVIGATION & HISTORY PROTECTION SYSTEM
 * ============================================================================
 * Tailored for IB Cyber Security Private Limited (IBCS) Website.
 *
 * ARCHITECTURE & INTENDED FLOW:
 * Website Open -> Entrance / Home ('/' or '/#home') -> Core Sections & Modules
 *
 * Zero external router dependencies required (works with hash & pathname navigation).
 * ============================================================================
 */

// ============================================================================
// FEATURE 4: PUBLIC ENTRY ROUTES
// ============================================================================
/** Valid external entry points */
export const PUBLIC_ENTRY_ROUTES = ['/', '/home', '/homepage'];

// ============================================================================
// FEATURE 14: DYNAMIC SECURITY CONFIGURATION (routeSecurityConfig)
// ============================================================================
export const routeSecurityConfig = {
  entryRoute: '/',
  homeRoute: '/#home',
  sessionTimeoutMs: 30 * 60 * 1000, // [Feature 24] 30 minutes inactivity limit
  strictQueryValidation: false,
  directAccessProtection: false, // Default false to allow seamless deep-linking & refreshing
  queryValidationBehavior: 'remove', // 'remove' | 'reject' | 'ignore'
  allowedQueries: [
    'tab', 'page', 'search', 'filter', 'category', 'id', 'slug', 'q', 'ref', 'from'
  ],
  allowedProtocols: ['http:', 'https:', 'mailto:', 'tel:'],
};

// ============================================================================
// FEATURE 12: ROUTE ACCESS MATRIX
// Comprehensive catalog of all valid routes in the IBCS application
// ============================================================================
export const ROUTE_ACCESS_MATRIX = [
  // --- Tier 0: Public Entry ---
  { path: '/', tier: 0, title: 'IB Cyber Security Portal', isPublicEntry: true },
  { path: '/home', tier: 0, title: 'IB Cyber Security Portal', isPublicEntry: true },
  { path: '/homepage', tier: 0, title: 'IB Cyber Security Portal', isPublicEntry: true },

  // --- Tier 1: Core Navigation & Overview Sections ---
  { path: '/about-us', tier: 1, title: 'About Us Corporate Profile' },
  { path: '/software-products', tier: 1, title: 'Software Products Hub' },
  { path: '/software-library', tier: 1, title: 'Software Library' },
  { path: '/it-services', tier: 1, title: 'IT Services Hub' },
  { path: '/skill-development', tier: 1, title: 'Skill Development' },
  { path: '/careers', tier: 1, title: 'Careers Hub' },
  { path: '/gallery', tier: 1, title: 'Media & Brand Gallery' },
  { path: '/contact', tier: 1, title: 'Contact Us' },
  { path: '/contact-us', tier: 1, title: 'Contact Us' },
  { path: '/follow', tier: 1, title: 'Follow IBCS' },
  { path: '/copyright', tier: 1, title: 'Copyright & Legal' },
  { path: '/meaning-behind-our-name', tier: 1, title: 'Meaning Behind IBCS Name' },
  { path: '/cybersecurity', tier: 1, title: 'Cybersecurity & Digital Security' },
  { path: '/introduction', tier: 1, title: 'Corporate Introduction' },

  // --- Tier 2: Software Products Deep-Dives ---
  { path: '/software-products/*', tier: 2, title: 'Software Products Subsystem', isWildcard: true },
  { path: '/software-products/vision-mission', tier: 2, title: 'Vision & Mission' },
  { path: '/software-products/purpose-use-cases', tier: 2, title: 'Purpose & Use Cases' },
  { path: '/software-products/product-introduction', tier: 2, title: 'Product Introduction' },
  { path: '/software-products/product-benefits-impact', tier: 2, title: 'Product Benefits & Impact' },
  { path: '/software-products/technology-architecture', tier: 2, title: 'Technology & Architecture' },
  { path: '/software-products/security-compliance', tier: 2, title: 'Security & Compliance' },
  { path: '/software-products/integrations-apis', tier: 2, title: 'Integrations & APIs' },
  { path: '/software-products/product-roadmap', tier: 2, title: 'Product Roadmap' },

  // --- Tier 2: IT Services Deep-Dives ---
  { path: '/it-services/*', tier: 2, title: 'IT Services Subsystem', isWildcard: true },
  { path: '/it-services/web-development', tier: 2, title: 'Web Development Services' },
  { path: '/it-services/ui-ux-design', tier: 2, title: 'UI/UX Design Services' },
  { path: '/it-services/devops-automation', tier: 2, title: 'DevOps & Automation Services' },
  { path: '/it-services/data-analytics-bi', tier: 2, title: 'Data Analytics & BI Services' },

  // --- Tier 2: Homepage Technology Deep-Dive Sections ---
  { path: '/sdpe', tier: 2, title: 'Software Development & Product Engineering' },
  { path: '/ip', tier: 2, title: 'Intellectual Property' },
  { path: '/spc', tier: 2, title: 'Software Product Commercialisation' },
  { path: '/pdl', tier: 2, title: 'Product Development Lifecycle' },
  { path: '/ope', tier: 2, title: 'Our Product Ecosystem' },
  { path: '/ot', tier: 2, title: 'Our Technology' },
  { path: '/ai', tier: 2, title: 'AI & Intelligent Software' },
  { path: '/cloud', tier: 2, title: 'Cloud SaaS & Digital Platforms' },
  { path: '/da', tier: 2, title: 'Data Analytics & Intelligence' },
  { path: '/apis', tier: 2, title: 'APIs & Digital Connectivity' },
  { path: '/edu', tier: 2, title: 'Education & Training Technology' },
  { path: '/ent', tier: 2, title: 'Enterprise Business Software' },
  { path: '/gov', tier: 2, title: 'Government & Public Technology' },
  { path: '/inv', tier: 2, title: 'Investigation & Legal Technology' },
  { path: '/arch', tier: 2, title: 'Software Architecture Engineering' },
  { path: '/global-infra', tier: 2, title: 'Global Infrastructure & Managed Services' },
  { path: '/devops', tier: 2, title: 'DevOps Continuous Delivery' },
  { path: '/digital-exp', tier: 2, title: 'Digital Experience Design' },
  { path: '/regulatory', tier: 2, title: 'Regulatory Compliance & Governance' },
  { path: '/ai-innovation', tier: 2, title: 'AI Innovation & Advanced Automation' },
  { path: '/iot', tier: 2, title: 'IoT & Smart Edge Systems' },
  { path: '/nextgen', tier: 2, title: 'Next-Gen Digital Innovation' },

  // --- Tier 3: Dynamic Job Detail Routes ---
  { path: '/careers/*', tier: 2, title: 'Careers Router', isWildcard: true },
  { path: '/careers/job/:id', tier: 3, title: 'Job Vacancy Details', isDynamic: true },
  { path: '/careers/:slug', tier: 3, title: 'Career Path Details', isDynamic: true },
];

// ============================================================================
// FEATURE 15: IN-MEMORY NAVIGATION HANDSHAKE & TRACKING
// ============================================================================
/** In-memory state tracking single-page transitions */
let isNavSessionActive = false;
let lastInAppNavTimestamp = 0;
let previousPathname = '';
export const getPreviousPathname = () => previousPathname;

/** Record in-app navigation event */
export const recordInAppNavigation = () => {
  isNavSessionActive = true;
  lastInAppNavTimestamp = Date.now();
  if (typeof sessionStorage !== 'undefined') {
    try {
      sessionStorage.setItem('ibcs_nav_session_active', 'true');
      sessionStorage.setItem('ibcs_last_nav_time', String(Date.now()));
    } catch {
      // Storage unavailable or disabled
    }
  }
};

/** Monkey-patch history.pushState and history.replaceState to capture in-app transitions */
if (typeof window !== 'undefined' && !window.__ibcs_nav_patched) {
  window.__ibcs_nav_patched = true;

  const origPush = window.history.pushState;
  window.history.pushState = function (...args) {
    isNavSessionActive = true;
    lastInAppNavTimestamp = Date.now();
    return origPush.apply(this, args);
  };

  // Capture user clicks on internal links to record in-app transition handshake
  document.addEventListener('click', (event) => {
    const anchor = event.target && event.target.closest ? event.target.closest('a') : null;
    if (anchor && anchor.href) {
      try {
        const url = new URL(anchor.href, window.location.origin);
        if (url.origin === window.location.origin) {
          recordInAppNavigation();
        }
      } catch {
        // Ignore malformed hrefs
      }
    }
  }, true);
}

// ============================================================================
// FEATURE 8, 9, 11: PATH VALIDATION & PATTERN MATCHING
// ============================================================================
/**
 * Test whether a path pattern matches the given pathname
 * Supports exact paths, wildcards (/services/*), and params (/gallery/:id)
 */
export const matchRoutePattern = (pattern, pathname) => {
  if (pattern === pathname) return true;

  // Wildcard match e.g. /services/*
  if (pattern.endsWith('/*')) {
    const base = pattern.slice(0, -2);
    return pathname === base || pathname.startsWith(base + '/');
  }

  // Dynamic param match e.g. /gallery/category/:id
  if (pattern.includes(':')) {
    const patternSegments = pattern.split('/').filter(Boolean);
    const pathSegments = pathname.split('/').filter(Boolean);
    if (patternSegments.length !== pathSegments.length) return false;

    for (let i = 0; i < patternSegments.length; i++) {
      if (patternSegments[i].startsWith(':')) {
        continue; // Dynamic param segment matches any non-empty segment
      }
      if (patternSegments[i] !== pathSegments[i]) {
        return false;
      }
    }
    return true;
  }

  return false;
};

/**
 * [Feature 11] Check if a pathname is registered in the ROUTE_ACCESS_MATRIX
 */
export const isKnownRoute = (pathname) => {
  const cleanPath = pathname.split('?')[0].split('#')[0];
  if (cleanPath === '/' || cleanPath === '') return true;
  return ROUTE_ACCESS_MATRIX.some((entry) => matchRoutePattern(entry.path, cleanPath));
};

/**
 * [Feature 6] Direct Document Access Detection
 * Evaluated once upon initial script load: if document loaded directly at an internal known route,
 * we flag it as an invalid direct access attempt requiring redirection to the entrance animation.
 */
let isDirectAccessBlocked = false;

if (typeof window !== 'undefined') {
  const initialPath = window.location.pathname.split('?')[0].split('#')[0] || '/';
  if (routeSecurityConfig.directAccessProtection && initialPath !== '/' && isKnownRoute(initialPath)) {
    isDirectAccessBlocked = true;
    try {
      sessionStorage.removeItem('animationPlayed');
      sessionStorage.removeItem('ibcs_nav_session_active');
      sessionStorage.removeItem('ibcs_last_nav_time');
    } catch {
      // ignore
    }
  }
}

/**
 * [Feature 8] Dynamic Route Structure Validation
 * Verifies segment count, segment length, and absence of malformed syntax
 */
export const validateRouteStructure = (pathname) => {
  if (!pathname || typeof pathname !== 'string') return false;
  if (!pathname.startsWith('/')) return false;

  const segments = pathname.split('/').filter(Boolean);
  if (segments.length > 10) return false; // Prevent segment flood attacks

  for (const seg of segments) {
    if (seg.length > 120) return false;
    // Check for invalid encoded control chars
    if (/[\0\r\n\t]/.test(seg)) return false;
  }
  return true;
};

/**
 * [Feature 9] Route Parameter Validation
 * Blocks path traversal (../), null-byte injections, SQLi, and XSS patterns in paths
 */
export const validateRouteParameters = (pathname) => {
  if (!pathname) return true;

  // Directory traversal attacks
  if (/\.\.[/\\]/.test(pathname) || /%2e%2e/i.test(pathname) || /%2f/i.test(pathname)) {
    return false;
  }

  // Script tags, HTML injection, Javascript URI in path
  if (/<script|javascript:|data:|vbscript:/i.test(pathname)) {
    return false;
  }

  // SQLi fragments in path
  if (/(union\s+select|select\s+.*\s+from|insert\s+into|drop\s+table)/i.test(pathname)) {
    return false;
  }

  // Null bytes
  if (pathname.includes('\0') || pathname.includes('%00')) {
    return false;
  }

  return true;
};

/**
 * [Feature 10] Query Parameter Validation & Sanitization
 */
export const validateQueryParams = (
  search,
  allowedQueries = routeSecurityConfig.allowedQueries,
  behavior = routeSecurityConfig.queryValidationBehavior
) => {
  if (!search || search === '?') return { isValid: true, cleanSearch: '' };

  try {
    const params = new URLSearchParams(search);
    const cleanedParams = new URLSearchParams();
    let hasInvalid = false;

    for (const [key, value] of params.entries()) {
      // Check for injection in query keys or values
      if (
        /<script|javascript:|data:|vbscript:|onload=|onerror=/i.test(key) ||
        /<script|javascript:|data:|vbscript:|onload=|onerror=/i.test(value) ||
        key.includes('\0') ||
        value.includes('\0')
      ) {
        hasInvalid = true;
        continue;
      }

      if (routeSecurityConfig.strictQueryValidation && !allowedQueries.includes(key)) {
        hasInvalid = true;
        if (behavior === 'remove') continue;
      }

      cleanedParams.append(key, value);
    }

    if (hasInvalid && behavior === 'reject') {
      return { isValid: false, cleanSearch: '' };
    }

    const cleanStr = cleanedParams.toString();
    return {
      isValid: true,
      cleanSearch: cleanStr ? `?${cleanStr}` : '',
    };
  } catch {
    return { isValid: false, cleanSearch: '' };
  }
};

// ============================================================================
// FEATURE 17, 18, 22, 23, 24: TRANSITION, SEQUENCE & SESSION VALIDATION
// ============================================================================
/** [Feature 24] Inactivity check */
export const isSessionExpired = () => {
  if (!lastInAppNavTimestamp) return true;
  return Date.now() - lastInAppNavTimestamp > routeSecurityConfig.sessionTimeoutMs;
};

/** [Feature 18] Navigation Sequence Validation */
export const validateNavigationSequence = (fromPath, toPath) => {
  // External entry directly to internal page is invalid
  if (!fromPath && toPath !== '/') {
    return false;
  }
  return true;
};

/** [Feature 22, 23] Route & History State Validation */
export const validateHistoryState = () => {
  if (typeof window === 'undefined') return true;
  const state = window.history.state;
  if (!state) return true;
  if (typeof state !== 'object') return false;
  return true;
};

/**
 * [Feature 6] Page Reload Detection
 * Detects whether the current document was loaded via a browser reload (F5 / Ctrl+R)
 */
export const isPageReload = () => {
  if (typeof window === 'undefined' || typeof performance === 'undefined') return false;
  try {
    const navEntries = performance.getEntriesByType('navigation');
    if (navEntries && navEntries.length > 0) {
      return navEntries[0].type === 'reload';
    }
    if (window.performance && window.performance.navigation) {
      return window.performance.navigation.type === 1;
    }
  } catch {
    // ignore
  }
  return false;
};

// ============================================================================
// FEATURE 28, 29: REDIRECTION & HARDENING UTILITIES
// ============================================================================
/**
 * [Feature 28] Safe Redirect Utility
 * Ensures redirect targets are safe relative paths within the same origin
 */
export const safeRedirect = (target, fallback = '/homepage') => {
  if (!target || typeof target !== 'string') return fallback;

  // Trim whitespace and control characters
  const trimmed = target.trim();

  // Disallow protocol-relative URLs (//attacker.com) and backslashes (/\attacker.com)
  if (trimmed.startsWith('//') || trimmed.startsWith('/\\') || trimmed.includes('\\')) {
    return fallback;
  }

  // Must begin with a single slash
  if (!trimmed.startsWith('/')) {
    return fallback;
  }

  // Block javascript: or data: URIs
  if (/<script|javascript:|data:/i.test(trimmed)) {
    return fallback;
  }

  return trimmed;
};

/**
 * [Feature 29] Open-Redirect & External URL Hardening
 */
export const isSafeExternalUrl = (url) => {
  if (!url || typeof url !== 'string') return false;
  try {
    const parsed = new URL(url, window.location.origin);
    return routeSecurityConfig.allowedProtocols.includes(parsed.protocol);
  } catch {
    return false;
  }
};

/**
 * [Feature 29] Sanitize URL
 */
export const sanitizeUrl = (url, fallback = '#') => {
  if (!url || typeof url !== 'string') return fallback;
  const trimmed = url.trim();
  if (/^(javascript|data|vbscript):/i.test(trimmed)) {
    return fallback;
  }
  return trimmed;
};

/**
 * [Feature 16] Safe link props helper
 */
export const getSafeLinkProps = (href) => {
  const sanitized = sanitizeUrl(href);
  const isExternal = typeof window !== 'undefined' &&
    /^https?:\/\//i.test(sanitized) &&
    !sanitized.startsWith(window.location.origin);

  if (isExternal) {
    return {
      href: sanitized,
      target: '_blank',
      rel: 'noopener noreferrer nofollow',
    };
  }

  return { href: sanitized };
};

// ============================================================================
// MASTER ROUTE EVALUATOR (CORE DECISION ENGINE)
// Features 1, 4, 5, 6, 7, 11, 13, 25, 30
// ============================================================================
/**
 * Evaluates whether current route access is permitted.
 * Returns: { allowed: boolean, action?: 'redirect_entry' | 'not_found' | 'ok' }
 */
export const evaluateRouteAccess = (pathname, search = '') => {
  const cleanPath = pathname.split('?')[0].split('#')[0] || '/';

  // 1. [Feature 8, 9] Syntax & Parameter Security Check
  if (!validateRouteStructure(cleanPath) || !validateRouteParameters(cleanPath)) {
    return { allowed: false, action: 'not_found' };
  }

  // 2. [Feature 4] Public Entry Route: '/' is always permitted
  if (PUBLIC_ENTRY_ROUTES.includes(cleanPath)) {
    return { allowed: true, action: 'ok' };
  }

  // 3. [Feature 11] Unknown Route Check
  // If the path is not in ROUTE_ACCESS_MATRIX, render 404 NotFoundPage
  if (!isKnownRoute(cleanPath)) {
    return { allowed: false, action: 'not_found' };
  }

  // 4. [Feature 5, 6, 7, 13] Internal Route Access Evaluation
  // If the route is an internal page (e.g. /homepage, /about, /services, etc.):
  // Verify that the user arrived via a legitimate in-app navigation session or completed animation.

  // Direct address bar entry, pasted URL, new tab, or page reload directly on an internal route
  if (isDirectAccessBlocked) {
    return { allowed: false, action: 'redirect_entry' };
  }

  const hasInAppMemorySession = isNavSessionActive && !isSessionExpired();

  let hasAnimationPlayed = false;
  let hasStoredNavSession = false;
  if (typeof sessionStorage !== 'undefined') {
    try {
      hasAnimationPlayed = sessionStorage.getItem('animationPlayed') === 'true';
      hasStoredNavSession = sessionStorage.getItem('ibcs_nav_session_active') === 'true';
    } catch {
      hasAnimationPlayed = false;
      hasStoredNavSession = false;
    }
  }

  // If in-memory session is absent, no active animation has played, and no stored nav session:
  // This is an external DIRECT URL ACCESS violation (typed address bar, new tab, paste)
  if (routeSecurityConfig.directAccessProtection && !hasInAppMemorySession && !hasStoredNavSession && !hasAnimationPlayed) {
    return { allowed: false, action: 'redirect_entry' };
  }

  // Once verified via animation or stored session, activate in-memory tracking
  if (hasAnimationPlayed || hasStoredNavSession) {
    recordInAppNavigation();
  }

  // 5. [Feature 10] Query Validation Check
  const queryResult = validateQueryParams(search);
  if (!queryResult.isValid) {
    return { allowed: false, action: 'redirect_entry' };
  }

  // Route access permitted!
  return { allowed: true, action: 'ok' };
};

// ============================================================================
// FEATURE 26: CUSTOM NOTFOUNDPAGE (404 FALLBACK)
// ============================================================================
export const NotFoundPage = ({ requestedPath }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0f1d] via-[#0f172a] to-[#050914] text-white flex items-center justify-center p-4 relative overflow-hidden select-none">
      {/* Background ambient security lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-md w-full bg-slate-900/80 backdrop-blur-xl border border-slate-700/60 rounded-2xl p-8 shadow-2xl text-center relative z-10">
        {/* Shield Icon Badge */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-blue-500/10 border border-blue-500/30 text-blue-400 mb-6 shadow-inner">
          <ShieldAlert className="w-10 h-10 animate-pulse text-blue-400" />
        </div>

        {/* 404 Status Code */}
        <div className="text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 mb-2 font-mono">
          404
        </div>

        <h1 className="text-2xl font-bold text-white mb-2 tracking-tight">
          Page Not Found or Restricted
        </h1>

        <p className="text-sm text-slate-300 mb-6 leading-relaxed">
          The requested URL {requestedPath ? <code className="text-blue-300 bg-slate-800/80 px-1.5 py-0.5 rounded font-mono text-xs">{requestedPath}</code> : ''} is not registered or direct access to this resource is restricted under IBCS route security protocol.
        </p>

        {/* Navigation Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => {
              recordInAppNavigation();
              navigate('/#home');
            }}
            className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </button>

          <button
            onClick={() => {
              recordInAppNavigation();
              navigate(-1);
            }}
            className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-medium transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Go Back</span>
          </button>
        </div>

        {/* Security watermark footer */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 text-[11px] text-slate-400 font-mono flex items-center justify-center gap-1.5">
          <Lock className="w-3 h-3 text-blue-400/80" />
          <span>IB Cyber Security (IBCS) Secure Routing Subsystem &bull; Active</span>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// FEATURE 27: ROUTE ERROR BOUNDARY
// ============================================================================
export class RouteErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('IBCS Route Security Boundary Caught Exception:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6">
          <div className="max-w-md w-full bg-slate-900 border border-red-500/30 rounded-2xl p-6 text-center shadow-2xl">
            <AlertTriangle className="w-12 h-12 text-red-400 mx-auto mb-4" />
            <h2 className="text-xl font-bold mb-2">Navigation Security Exception</h2>
            <p className="text-sm text-slate-400 mb-6">
              An unexpected navigation state error was detected and contained.
            </p>
            <button
              onClick={() => {
                sessionStorage.removeItem('animationPlayed');
                window.location.href = '/';
              }}
              className="px-5 py-2 bg-blue-600 text-white rounded-xl text-sm font-medium hover:bg-blue-500 transition-colors"
            >
              Restart Portal Access
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

// ============================================================================
// FEATURE 1: GLOBAL ROUTE GUARD & URL PROTECTION LAYER
// Features 1, 6, 19, 20, 25
// ============================================================================
export const RouteSecurityContext = createContext({
  isSessionActive: false,
  currentRoute: '/',
  recordNavigation: recordInAppNavigation,
});

export const useRouteGuard = () => useContext(RouteSecurityContext);
export const useNavigationSecurity = () => useContext(RouteSecurityContext);

/**
 * URLProtectionLayer Component
 * Master wrapper guaranteeing zero-flash pre-render blocking and flow enforcement.
 */
export default function URLProtectionLayer({
  children,
  enabled = true,
}) {
  const location = useLocation();
  const navigate = useNavigate();

  // [Feature 25] Protected Content No-Flash Guarantee:
  // Synchronous evaluation inside useMemo BEFORE any child component mounts or renders
  const accessDecision = useMemo(() => {
    if (!enabled) return { allowed: true, action: 'ok' };
    return evaluateRouteAccess(location.pathname, location.search);
  }, [location.pathname, location.search, enabled]);

  // Keep track of navigation sequence
  useEffect(() => {
    previousPathname = location.pathname;
    if (accessDecision.allowed && location.pathname !== '/') {
      recordInAppNavigation();
    }
  }, [location.pathname, accessDecision.allowed]);

  // [Feature 6, 19] Execute immediate redirection for direct access violations
  useEffect(() => {
    if (!accessDecision.allowed) {
      if (accessDecision.action === 'redirect_entry') {
        // Clear the one-time boot blocking flag so subsequent navigation from '/' functions cleanly
        isDirectAccessBlocked = false;

        // [Feature 6] Clear animationPlayed so the entrance animation runs
        try {
          sessionStorage.removeItem('animationPlayed');
          sessionStorage.removeItem('ibcs_nav_session_active');
          sessionStorage.removeItem('ibcs_last_nav_time');
        } catch {
          // ignore
        }

        // [Feature 19] Use replaceState to protect browser back-button history
        if (typeof window !== 'undefined' && window.history) {
          window.history.replaceState(null, '', '/');
        }
        navigate('/', { replace: true });
      }
    }
  }, [accessDecision, navigate]);

  // [Feature 20] Listen to popstate (Browser Back/Forward buttons)
  useEffect(() => {
    const handlePopState = () => {
      // Re-evaluate on popstate
      if (typeof window !== 'undefined') {
        const path = window.location.pathname;
        const decision = evaluateRouteAccess(path, window.location.search);
        if (!decision.allowed && decision.action === 'redirect_entry') {
          sessionStorage.removeItem('animationPlayed');
          window.history.replaceState(null, '', '/');
          navigate('/', { replace: true });
        }
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [navigate]);

  // Context value for hooks
  const contextValue = useMemo(() => ({
    isSessionActive: isNavSessionActive && !isSessionExpired(),
    currentRoute: location.pathname,
    recordNavigation: recordInAppNavigation,
  }), [location.pathname]);

  // [Feature 25] SYNCHRONOUS PRE-RENDER BLOCKING:
  // If access is denied, return null or NotFoundPage immediately.
  // Children NEVER render for even a fraction of a millisecond!
  if (!accessDecision.allowed) {
    if (accessDecision.action === 'not_found') {
      return <NotFoundPage requestedPath={location.pathname} />;
    }
    // For direct access violation: return null so nothing flashes before redirect to '/'
    return null;
  }

  return (
    <RouteSecurityContext.Provider value={contextValue}>
      <RouteErrorBoundary>
        {children}
      </RouteErrorBoundary>
    </RouteSecurityContext.Provider>
  );
}

// ============================================================================
// FEATURE 2: PROTECTED ROUTE COMPONENT
// ============================================================================
export const ProtectedRoute = ({ children, fallback }) => {
  const location = useLocation();
  const decision = useMemo(() => {
    return evaluateRouteAccess(location.pathname, location.search);
  }, [location.pathname, location.search]);

  if (!decision.allowed) {
    if (decision.action === 'not_found') {
      return fallback || <NotFoundPage requestedPath={location.pathname} />;
    }
    return null;
  }

  return <>{children}</>;
};

// ============================================================================
// FEATURE 3: ROUTE GUARD COMPONENT
// ============================================================================
export const RouteGuard = ({ children, allowedTiers = [0, 1, 2, 3], fallback }) => {
  const location = useLocation();
  const cleanPath = location.pathname.split('?')[0];

  const routeMeta = ROUTE_ACCESS_MATRIX.find((entry) => matchRoutePattern(entry.path, cleanPath));
  const tier = routeMeta ? routeMeta.tier : 2;

  if (!allowedTiers.includes(tier)) {
    return fallback || <NotFoundPage requestedPath={location.pathname} />;
  }

  return <>{children}</>;
};

// Compatibility and helper exports for legacy or external callers
export const GlobalRouteGuard = URLProtectionLayer;
export const RouteSecurityProvider = URLProtectionLayer;
export const AuthGuard = ProtectedRoute;
export const AuthProvider = ({ children }) => <>{children}</>;
export const useAuth = () => ({
  isAuthenticated: true,
  user: { name: 'IBCS Authorized Guest' },
  role: 'GUEST',
});
export const matchRouteConfig = (pathname) => isKnownRoute(pathname);
export const env = {
  VITE_API_URL: '',
  VITE_PORTAL_NAME: 'IB Cyber Security Portal',
};

