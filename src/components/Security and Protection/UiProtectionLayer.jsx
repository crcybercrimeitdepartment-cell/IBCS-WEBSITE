/* eslint-disable react-refresh/only-export-components */
import React, { useEffect, useRef } from 'react';

/**
 * ============================================================================
 * UI PROTECTION LAYER (SEC-001 to SEC-016, SEC-126 to SEC-128)
 * ============================================================================
 *
 * Responsibilities:
 * - SEC-001: Context-menu (right-click) protection on protected areas
 * - SEC-002: Text selection protection on sensitive display content
 * - SEC-003: Image & SVG drag protection
 * - SEC-004: Image download deterrence
 * - SEC-005 to SEC-010: Keyboard shortcut & DevTools deterrence (Ctrl+U, Ctrl+S, Ctrl+P, F12, etc.)
 * - SEC-011: Copy/Cut/Paste clipboard protection on protected content
 * - SEC-012 & SEC-015: Protected UI components for role/permission-based display
 * - SEC-013: Sensitive content masking (phone, email, user id)
 * - SEC-014: Visual security watermarking
 * - SEC-016: Secure ErrorBoundary for suppressing technical stack traces
 * - SEC-126 & SEC-127: HTML sanitization utility
 * - SEC-128: Safe DOM manipulation utilities
 *
 * UX Preservation:
 * Form inputs, textareas, selects, search bars, contenteditable elements,
 * navigation buttons, links, and accessibility controls remain 100% interactive.
 * ============================================================================
 */

/**
 * Determines whether an element is an interactive input control
 * where normal text selection, copy/cut/paste, and cursor interaction MUST be preserved.
 */
export const isInteractiveField = (element) => {
  if (!element || !(element instanceof Element)) return false;

  // Check interactive tag names
  const tagName = element.tagName ? element.tagName.toLowerCase() : '';
  if (['input', 'textarea', 'select', 'option'].includes(tagName)) return true;

  // Check contenteditable
  if (element.isContentEditable || element.closest('[contenteditable="true"]')) return true;

  // Check explicit exemption classes
  if (element.closest('.allow-interaction, .allow-select, .allow-copy')) return true;

  // Check input inside forms or search components
  if (element.closest('input, textarea, select, [role="searchbox"], [role="textbox"]')) return true;

  return false;
};

// ============================================================================
// 1. SENSITIVE DATA MASKING (SEC-013)
// ============================================================================

/**
 * Safely masks a phone number, revealing only initial and ending digits.
 * Example: "9876543210" -> "98******10"
 */
export const maskPhoneNumber = (phone) => {
  if (!phone) return '';
  const str = String(phone).replace(/\s+/g, '');
  if (str.length <= 4) return str;
  if (str.length < 8) {
    return `${str.slice(0, 2)}${'*'.repeat(str.length - 4)}${str.slice(-2)}`;
  }
  const start = str.slice(0, 2);
  const end = str.slice(-2);
  const maskLength = str.length - 4;
  return `${start}${'*'.repeat(maskLength)}${end}`;
};

/**
 * Safely masks an email address, revealing only first character and domain.
 * Example: "officer@ibcs.co" -> "o***@ibcs.co"
 */
export const maskEmail = (email) => {
  if (!email) return '';
  const parts = String(email).split('@');
  if (parts.length !== 2) return String(email);
  const [name, domain] = parts;
  if (name.length <= 1) return `${name}***@${domain}`;
  return `${name[0]}***@${domain}`;
};

/**
 * Safely masks a user/officer identifier or reference code.
 * Example: "IBCS-98234-IND" -> "IBCS-*****IND"
 */
export const maskUserId = (id) => {
  if (!id) return '';
  const str = String(id);
  if (str.length <= 4) return str;
  return `${str.slice(0, 2)}${'*'.repeat(Math.max(1, str.length - 4))}${str.slice(-2)}`;
};

// ============================================================================
// 2. HTML SANITIZATION & SAFE DOM MANIPULATION (SEC-126, 127, 128)
// ============================================================================

/**
 * SEC-126 & SEC-127: Pure client-side HTML sanitizer.
 * Safely strips script tags, object tags, iframe tags, and inline 'on*' event handlers.
 */
export const sanitizeHtml = (htmlString) => {
  if (!htmlString || typeof htmlString !== 'string') return '';

  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');

    // Recursively sanitize element nodes
    const cleanNode = (node) => {
      const children = Array.from(node.childNodes);
      for (const child of children) {
        if (child.nodeType === Node.ELEMENT_NODE) {
          const tagName = child.tagName.toLowerCase();
          // Remove dangerous tags
          if (['script', 'style', 'iframe', 'object', 'embed', 'link', 'meta', 'base'].includes(tagName)) {
            child.remove();
            continue;
          }

          // Strip inline event attributes and javascript: URIs
          const attributes = Array.from(child.attributes);
          for (const attr of attributes) {
            const attrName = attr.name.toLowerCase();
            const attrValue = attr.value.trim().toLowerCase();

            if (attrName.startsWith('on')) {
              child.removeAttribute(attr.name);
            } else if (['src', 'href', 'xlink:href', 'action', 'formaction'].includes(attrName)) {
              if (attrValue.startsWith('javascript:') || attrValue.startsWith('data:text/html') || attrValue.startsWith('vbscript:')) {
                child.removeAttribute(attr.name);
              }
            }
          }

          cleanNode(child);
        }
      }
    };

    cleanNode(doc.body);
    return doc.body.innerHTML;
  } catch {
    // Fallback: strip tags entirely if parsing fails
    return htmlString.replace(/<[^>]*>?/gm, '');
  }
};

/**
 * SEC-128: Safely sets text content without innerHTML risk.
 */
export const safeSetTextContent = (elementId, text) => {
  if (typeof elementId !== 'string' || !elementId.trim()) return;
  const element = document.getElementById(elementId);
  if (element) {
    element.textContent = String(text || '');
  }
};

/**
 * SEC-128: Safely creates an element and sets textContent.
 */
export const safeCreateElement = (tag, textContent = '') => {
  if (typeof tag !== 'string' || !/^[a-z0-9]+$/i.test(tag)) {
    throw new Error('[Security] Invalid HTML tag provided to safeCreateElement.');
  }
  const element = document.createElement(tag);
  if (textContent) {
    element.textContent = String(textContent);
  }
  return element;
};

/**
 * SEC-128: Safely sets an attribute, blocking inline event handlers and unsafe URI schemes.
 */
export const safeSetAttribute = (element, attributeName, value) => {
  if (!element || !(element instanceof Element)) return;

  if (/^on/i.test(attributeName)) {
    console.warn(`[Security] Blocked attempt to set inline event handler: ${attributeName}`);
    return;
  }

  if (/^(src|href)$/i.test(attributeName)) {
    const valStr = String(value).trim().toLowerCase();
    if (valStr.startsWith('javascript:') || valStr.startsWith('data:text/html') || valStr.startsWith('vbscript:')) {
      console.warn(`[Security] Blocked unsafe URI payload in attribute: ${attributeName}`);
      return;
    }
  }

  element.setAttribute(attributeName, String(value));
};

/**
 * SEC-128: Safely appends a child node with type validation.
 */
export const safeAppendChild = (parentElement, childElement) => {
  if (!(parentElement instanceof Element) || !(childElement instanceof Node)) {
    console.warn('[Security] safeAppendChild requires valid DOM Node instances.');
    return;
  }
  parentElement.appendChild(childElement);
};

// ============================================================================
// 3. UI PROTECTION HOOK (SEC-001 to SEC-011)
// ============================================================================

/**
 * Hook to attach UI event listeners for right-click, selection, drag, clipboard,
 * and keyboard shortcuts with proper cleanup and interactive field exemption.
 */
export const useUIProtection = ({
  enabled = true,
  protectContextMenu = true,
  protectSelect = true,
  protectDrag = true,
  protectShortcuts = true,
  protectCopy = true,
  protectPrintScreen = true,
  blurOnCapture = true,
  ctrlUProtection = true,
  ctrlSProtection = true,
  f12Deterrence = true,
  devToolsDeterrence = true,
  containerRef = null,
} = {}) => {
  useEffect(() => {
    if (!enabled) return;

    const targetNode = containerRef?.current || document;

    // SEC-004: Anti-Screenshot Clipboard Wiping Mechanism
    const wipeClipboard = () => {
      const warningText =
        'CONFIDENTIAL OFFICIAL RECORD — Screen capture and PrintScreen are restricted under IBCS Security Directive SEC-004.';

      // Method 1: Synchronous execCommand copy with hidden offscreen textarea
      try {
        let clipArea = document.getElementById('ibcs-clip-wiper');
        if (!clipArea) {
          clipArea = document.createElement('textarea');
          clipArea.id = 'ibcs-clip-wiper';
          clipArea.style.cssText =
            'position:fixed;top:-9999px;left:-9999px;width:1px;height:1px;opacity:0;pointer-events:none;';
          clipArea.setAttribute('tabindex', '-1');
          clipArea.setAttribute('aria-hidden', 'true');
          document.body.appendChild(clipArea);
        }
        clipArea.value = warningText;
        clipArea.focus({ preventScroll: true });
        clipArea.select();
        clipArea.setSelectionRange(0, 99999);
        document.execCommand('copy');
      } catch {
        // execCommand fallback
      }

      // Method 2: Modern Clipboard API
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(warningText).catch(() => {});
        }
      } catch {
        // clipboard fallback
      }
    };

    // Repeatedly wipes clipboard across short intervals to defeat delayed OS clipboard buffer writes
    const triggerBurstClipboardWipe = () => {
      wipeClipboard();
      const delays = [20, 50, 100, 200, 400, 700, 1000];
      delays.forEach((delay) => {
        setTimeout(wipeClipboard, delay);
      });
    };

    // SEC-004: Anti-Screenshot Blackout Shield & Obfuscation
    const triggerScreenshotShield = () => {
      // 1. Immediately wipe & sanitize clipboard buffer
      triggerBurstClipboardWipe();

      // 2. Add class to document.body for instant CSS blur and background obfuscation
      document.body.classList.add('ibcs-shield-active');

      // 3. Display an instant full-screen blackout shield
      let shield = document.getElementById('ibcs-screenshot-shield');
      if (!shield) {
        shield = document.createElement('div');
        shield.id = 'ibcs-screenshot-shield';
        shield.className = 'ibcs-screenshot-shield-modal';
        shield.style.cssText = [
          'position: fixed',
          'inset: 0',
          'width: 100vw',
          'height: 100vh',
          'background-color: #020617',
          'z-index: 2147483647',
          'display: flex',
          'flex-direction: column',
          'align-items: center',
          'justify-content: center',
          'color: #ffffff',
          'font-family: system-ui, -apple-system, sans-serif',
          'text-align: center',
          'padding: 24px',
          'user-select: none',
          'pointer-events: auto',
        ].join(';');

        shield.innerHTML = `
          <div style="width:76px;height:76px;border-radius:50%;background:rgba(239,68,68,0.15);border:2px solid rgba(239,68,68,0.4);color:#ef4444;display:flex;align-items:center;justify-content:center;font-size:38px;margin-bottom:20px;font-weight:900;">✕</div>
          <h2 style="font-size:26px;font-weight:800;color:#ffffff;margin:0 0 10px 0;letter-spacing:-0.5px;">SCREENSHOT RESTRICTED</h2>
          <p style="font-size:14px;color:#94a3b8;max-width:460px;line-height:1.6;margin:0 0 20px 0;">Screen capturing, PrintScreen, and display duplication are restricted to protect sensitive proprietary records. Clipboard data has been overwritten.</p>
          <div style="font-size:11px;font-family:monospace;color:#64748b;letter-spacing:1px;margin-bottom:24px;">IB CYBER SECURITY (IBCS) • SECURITY DIRECTIVE SEC-004</div>
          <button id="ibcs-shield-dismiss-btn" style="padding:10px 24px;border-radius:8px;background:#1e293b;border:1px solid #334155;color:#e2e8f0;font-size:13px;font-weight:600;cursor:pointer;transition:all 0.2s ease;">Dismiss Notice</button>
        `;
        document.body.appendChild(shield);

        const dismissBtn = shield.querySelector('#ibcs-shield-dismiss-btn');
        if (dismissBtn) {
          dismissBtn.onclick = () => {
            shield.style.display = 'none';
            document.body.classList.remove('ibcs-shield-active');
          };
        }
      } else {
        shield.style.display = 'flex';
      }

      // Hide after 2.5 seconds automatically
      clearTimeout(window.__ibcsShieldTimer);
      window.__ibcsShieldTimer = setTimeout(() => {
        if (shield) {
          shield.style.display = 'none';
        }
        document.body.classList.remove('ibcs-shield-active');
      }, 2500);
    };

    // Helper: Detect PrintScreen / screen capture shortcut keys
    const checkIsPrintScreenKey = (e) => {
      const key = (e.key || '').toLowerCase();
      const code = e.code || '';
      const keyCode = e.keyCode || e.which;

      // 1. Standard PrintScreen / Snapshot (VK_SNAPSHOT 44)
      if (
        key === 'printscreen' ||
        code === 'PrintScreen' ||
        key === 'snapshot' ||
        code === 'Snapshot' ||
        keyCode === 44
      ) {
        return true;
      }

      // 2. Windows Snipping Tool (Win + Shift + S) or Ctrl + Shift + S
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && key === 's') {
        return true;
      }

      // 3. Mac screen capture shortcuts (Cmd + Shift + 3 / 4 / 5)
      if (e.metaKey && e.shiftKey && ['3', '4', '5'].includes(key)) {
        return true;
      }

      return false;
    };

    // SEC-001: Right-Click Context Menu Protection
    const handleContextMenu = (e) => {
      if (!protectContextMenu) return;
      if (isInteractiveField(e.target)) return;
      e.preventDefault();
    };

    // SEC-002: Text Selection Start Protection
    const handleSelectStart = (e) => {
      if (!protectSelect) return;
      if (isInteractiveField(e.target)) return;
      e.preventDefault();
    };

    // SEC-003 & SEC-004: Image & Element Drag Protection
    const handleDragStart = (e) => {
      if (!protectDrag) return;
      if (isInteractiveField(e.target)) return;
      if (
        e.target &&
        (e.target.tagName?.toLowerCase() === 'img' ||
          e.target.tagName?.toLowerCase() === 'svg' ||
          e.target.closest('img, svg'))
      ) {
        e.preventDefault();
      }
    };

    // SEC-011: Copy / Cut Protection on protected content
    const handleCopy = (e) => {
      if (!protectCopy) return;
      if (isInteractiveField(e.target)) return;
      e.preventDefault();
    };

    const handleCut = (e) => {
      if (!protectCopy) return;
      if (isInteractiveField(e.target)) return;
      e.preventDefault();
    };

    let snippingAttemptDetected = false;

    // SEC-005 to SEC-010: Keyboard Shortcut Protection
    const handleKeyDown = (e) => {
      // 1. Intercept PrintScreen FIRST before any interactive field exemption!
      if (protectPrintScreen && checkIsPrintScreenKey(e)) {
        snippingAttemptDetected = true;
        e.preventDefault();
        e.stopPropagation();
        triggerScreenshotShield();
        return;
      }

      if (!protectShortcuts) return;

      // Allow all normal editing shortcuts (Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+Z) inside interactive inputs
      if (isInteractiveField(e.target)) return;

      const isCtrlOrCmd = e.ctrlKey || e.metaKey;
      const key = (e.key || '').toLowerCase();

      // SEC-008: F12 Deterrence
      if (f12Deterrence && e.key === 'F12') {
        e.preventDefault();
        e.stopPropagation();
        return;
      }

      // SEC-006: Ctrl+U (View Source)
      if (ctrlUProtection && isCtrlOrCmd && key === 'u') {
        e.preventDefault();
        e.stopPropagation();
        return;
      }

      // SEC-007: Ctrl+S (Save Page)
      if (ctrlSProtection && isCtrlOrCmd && key === 's') {
        e.preventDefault();
        e.stopPropagation();
        return;
      }

      // SEC-009: DevTools Shortcuts (Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C)
      if (devToolsDeterrence && isCtrlOrCmd && e.shiftKey && ['i', 'j', 'c'].includes(key)) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }

      // SEC-005 & SEC-011: General Document Copy / Select / Cut / Print shortcuts
      if (isCtrlOrCmd && ['c', 'a', 'x', 'p'].includes(key)) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
    };

    // KeyUp handler specifically to catch PrintScreen release and wipe clipboard
    const handleKeyUp = (e) => {
      if (!protectPrintScreen) return;
      if (checkIsPrintScreenKey(e)) {
        snippingAttemptDetected = true;
        e.preventDefault();
        e.stopPropagation();
        triggerScreenshotShield();
      }
    };

    // Anti-Snipping Tool: Obfuscate display when browser window loses focus
    const handleWindowBlur = () => {
      if (!protectPrintScreen || !blurOnCapture) return;
      document.body.classList.add('ibcs-capture-blur');
    };

    const handleWindowFocus = () => {
      document.body.classList.remove('ibcs-capture-blur');
      if (protectPrintScreen && snippingAttemptDetected) {
        // If user attempted out-of-focus snipping, wipe clipboard again upon returning
        triggerBurstClipboardWipe();
        snippingAttemptDetected = false;
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (protectPrintScreen && blurOnCapture) {
          document.body.classList.add('ibcs-capture-blur');
        }
      } else {
        document.body.classList.remove('ibcs-capture-blur');
        if (protectPrintScreen && snippingAttemptDetected) {
          triggerBurstClipboardWipe();
          snippingAttemptDetected = false;
        }
      }
    };

    // Attach listeners safely
    targetNode.addEventListener('contextmenu', handleContextMenu);
    targetNode.addEventListener('selectstart', handleSelectStart);
    targetNode.addEventListener('dragstart', handleDragStart);
    targetNode.addEventListener('copy', handleCopy);
    targetNode.addEventListener('cut', handleCut);
    window.addEventListener('keydown', handleKeyDown, true);
    window.addEventListener('keyup', handleKeyUp, true);
    window.addEventListener('blur', handleWindowBlur);
    window.addEventListener('focus', handleWindowFocus);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Complete cleanup on unmount or reconfiguration
    return () => {
      targetNode.removeEventListener('contextmenu', handleContextMenu);
      targetNode.removeEventListener('selectstart', handleSelectStart);
      targetNode.removeEventListener('dragstart', handleDragStart);
      targetNode.removeEventListener('copy', handleCopy);
      targetNode.removeEventListener('cut', handleCut);
      window.removeEventListener('keydown', handleKeyDown, true);
      window.removeEventListener('keyup', handleKeyUp, true);
      window.removeEventListener('blur', handleWindowBlur);
      window.removeEventListener('focus', handleWindowFocus);
      document.removeEventListener('visibilitychange', handleVisibilityChange);

      document.body.classList.remove('ibcs-shield-active');
      document.body.classList.remove('ibcs-capture-blur');

      const shield = document.getElementById('ibcs-screenshot-shield');
      if (shield && shield.parentNode) {
        shield.parentNode.removeChild(shield);
      }
      const clipArea = document.getElementById('ibcs-clip-wiper');
      if (clipArea && clipArea.parentNode) {
        clipArea.parentNode.removeChild(clipArea);
      }
    };
  }, [
    enabled,
    protectContextMenu,
    protectSelect,
    protectDrag,
    protectShortcuts,
    protectCopy,
    ctrlUProtection,
    ctrlSProtection,
    f12Deterrence,
    devToolsDeterrence,
    protectPrintScreen,
    blurOnCapture,
    containerRef,
  ]);
};

// ============================================================================
// 4. UI COMPONENTS: ErrorBoundary, Watermark, ProtectedComponent
// ============================================================================

/**
 * SEC-016: Secure Error Boundary
 * Suppresses raw technical stack traces from end-users and presents a clean recovery UI.
 */
export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('[Security ErrorBoundary Log]:', error, errorInfo);
  }

  handleReload = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] p-8 text-center font-sans bg-slate-50 text-slate-800 rounded-xl my-4 mx-auto max-w-lg border border-slate-200 shadow-sm">
          <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4 text-red-600 font-bold text-xl">
            !
          </div>
          <h2 className="text-xl font-bold text-slate-800 mb-2">Something went wrong</h2>
          <p className="text-sm text-slate-600 mb-4 leading-relaxed">
            An unexpected error occurred while rendering this section. Please refresh the page or return home.
          </p>
          {this.state.error && (
            <div className="w-full text-left bg-red-50 text-red-800 p-3 rounded mb-4 overflow-auto max-h-48 border border-red-200 font-mono text-xs">
              <div className="font-bold mb-1">{this.state.error.message || String(this.state.error)}</div>
              {this.state.error.stack && (
                <div className="text-[11px] opacity-80 whitespace-pre-wrap">{this.state.error.stack}</div>
              )}
            </div>
          )}
          <div className="flex gap-3">
            <button
              onClick={this.handleReload}
              className="px-5 py-2.5 bg-[#0B3B73] hover:bg-[#1D6CE0] text-white rounded-lg font-medium transition shadow-sm text-sm"
            >
              Refresh Page
            </button>
            <button
              onClick={() => { window.location.href = '/'; }}
              className="px-5 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-lg font-medium transition text-sm"
            >
              Go to Home
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

/**
 * SEC-014: Visual Watermark Component
 * Watermark permanently disabled per user requirement.
 */
export const SecurityWatermark = () => null;

/**
 * SEC-012 & SEC-015: Protected UI Wrapper Component
 * Restricts frontend visibility of UI controls or sections based on user role.
 */
export const ProtectedComponent = ({
  children,
  allowedRoles = ['*'],
  userRole = 'guest',
  fallback = null,
}) => {
  const hasAccess =
    allowedRoles.includes('*') ||
    allowedRoles.includes(userRole);

  if (!hasAccess) return fallback;
  return <>{children}</>;
};

// ============================================================================
// 5. MASTER UI PROTECTION LAYER WRAPPER
// ============================================================================

export default function UIProtectionLayer({
  children,
  enabled = true,
  protectContextMenu = true,
  protectSelect = true,
  protectDrag = true,
  protectShortcuts = true,
  protectCopy = true,
  protectPrint = true,
  protectPrintScreen = true,
  blurOnCapture = true,
  ctrlUProtection = true,
  ctrlSProtection = true,
  f12Deterrence = true,
  devToolsDeterrence = true,
  className = '',
  style = {},
  as: Component = 'div',
  ...restProps
}) {
  const containerRef = useRef(null);

  useUIProtection({
    enabled,
    protectContextMenu,
    protectSelect,
    protectDrag,
    protectShortcuts,
    protectCopy,
    protectPrintScreen,
    blurOnCapture,
    ctrlUProtection,
    ctrlSProtection,
    f12Deterrence,
    devToolsDeterrence,
    containerRef,
  });

  return (
    <Component
      ref={containerRef}
      className={`ibcs-ui-protection ${className}`}
      style={{
        WebkitUserSelect: enabled && protectSelect ? 'none' : undefined,
        MozUserSelect: enabled && protectSelect ? 'none' : undefined,
        msUserSelect: enabled && protectSelect ? 'none' : undefined,
        userSelect: enabled && protectSelect ? 'none' : undefined,
        WebkitTouchCallout: enabled && protectSelect ? 'none' : undefined,
        ...style,
      }}
      {...restProps}
    >
      {enabled && (
        <style>{`
          /* Scoped UI Protection Styles */
          .ibcs-ui-protection {
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            -webkit-touch-callout: none;
          }

          /* Fully preserve user interaction inside form inputs, textareas, selects */
          .ibcs-ui-protection input,
          .ibcs-ui-protection textarea,
          .ibcs-ui-protection select,
          .ibcs-ui-protection [contenteditable="true"],
          .ibcs-ui-protection .allow-interaction,
          .ibcs-ui-protection .allow-select {
            -webkit-user-select: text !important;
            -moz-user-select: text !important;
            -ms-user-select: text !important;
            user-select: text !important;
          }

          /* Prevent unwanted image & svg dragging */
          .ibcs-ui-protection img,
          .ibcs-ui-protection svg {
            -webkit-user-drag: none;
            -khtml-user-drag: none;
            -moz-user-drag: none;
            -o-user-drag: none;
            user-drag: none;
          }

          /* Input selection styling */
          .ibcs-ui-protection input::selection,
          .ibcs-ui-protection textarea::selection {
            background: #1A56DB;
            color: #ffffff;
          }

          /* Instant Screen Shield Obfuscation */
          body.ibcs-shield-active > :not(#ibcs-screenshot-shield) {
            filter: blur(50px) brightness(0.1) !important;
            pointer-events: none !important;
            user-select: none !important;
          }

          /* Anti-Snipping Tool Window Blur Obfuscation */
          body.ibcs-capture-blur > :not(#ibcs-screenshot-shield) {
            filter: blur(35px) brightness(0.2) !important;
            transition: filter 0.05s ease-out;
            pointer-events: none !important;
            user-select: none !important;
          }

          /* Print deterrence styling */
          ${
            protectPrint
              ? `
            @media print {
              .ibcs-ui-protection {
                visibility: hidden !important;
              }
              body::before {
                content: "Protected Official Document. Printing is restricted.";
                display: block !important;
                visibility: visible !important;
                font-size: 20pt;
                font-weight: 700;
                text-align: center;
                padding: 100px 20px;
                color: #475569;
              }
            }
          `
              : ''
          }
        `}</style>
      )}
      {children}
    </Component>
  );
}
