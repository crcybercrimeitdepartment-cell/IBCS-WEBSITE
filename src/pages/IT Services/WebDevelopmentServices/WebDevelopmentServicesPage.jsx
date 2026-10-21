import React, { useState, useEffect } from 'react';
import { 
  Files, 
  Search, 
  GitBranch, 
  Play, 
  Boxes, 
  Settings, 
  ChevronDown, 
  ChevronRight, 
  ChevronLeft,
  X, 
  Bell, 
  Columns2,
  Folder,
  FolderOpen,
  FileText,
  Terminal,
  Home
} from 'lucide-react';
import { webDevelopmentServicesData } from './WebDevelopmentServicesPageData.js';

/**
 * WebDevelopmentServices
 * VS Code Studio Environment inside Apple Studio Display.
 * Features:
 * - 50 Services in scrollable VS Code Explorer sidebar
 * - Syntax-highlighted code editor presenting active service title & description
 * - Authentic Activity Bar, Editor Tabs, Breadcrumbs, Line Numbers, Minimap, and Status Bar
 * - Real-time Search filter in Command Palette
 */
export default function WebDevelopmentServices({ onClose, onHome }) {
  const handleBack = () => {
    if (onClose) onClose();
    else window.history.back();
  };

  const handleHome = () => {
    if (onHome) onHome();
    else if (onClose) onClose();
    else window.location.hash = '#home';
  };

  const [isOn, setIsOn] = useState(true);
  const [time, setTime] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeActivityTab, setActiveActivityTab] = useState('explorer');
  const [isTreeOpen, setIsTreeOpen] = useState(true);
  const [isFolderOpen, setIsFolderOpen] = useState(true);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isTerminalBooting, setIsTerminalBooting] = useState(true);
  const [terminalStep, setTerminalStep] = useState(0);

  // Option 3: Terminal Command Initializer sequence on Reload
  useEffect(() => {
    setIsTerminalBooting(true);
    setTerminalStep(0);
    const t1 = setTimeout(() => setTerminalStep(1), 350);
    const t2 = setTimeout(() => setTerminalStep(2), 750);
    const t3 = setTimeout(() => setTerminalStep(3), 1150);
    const t4 = setTimeout(() => setIsTerminalBooting(false), 1600);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  // Mobile detection & responsive default sidebar state
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (mobile) {
        setIsSidebarVisible(false); // Closed by default on mobile for full content view
      } else {
        setIsSidebarVisible(true);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Touch Swipe Gesture Navigation (Swipe Left/Right between services)
  const minSwipeDistance = 45;

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      setCurrentIndex((prev) => (prev + 1) % total);
    } else if (isRightSwipe) {
      setCurrentIndex((prev) => (prev - 1 + total) % total);
    }
  };

  const allServices = webDevelopmentServicesData?.services || [];
  const total = allServices.length;

  // Filter services if user searches in command palette
  const filteredServices = allServices.filter(s => 
    s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    String(s.id).includes(searchQuery)
  );

  const currentService = allServices[currentIndex] || allServices[0] || {};

  // Live digital clock & document title
  useEffect(() => {
    document.title = "Web Development Services - IBCS IT Services";
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Keyboard navigation support (Arrow Up / Down for sidebar services)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown') {
        setCurrentIndex((prev) => (prev + 1) % total);
      }
      if (e.key === 'ArrowUp') {
        setCurrentIndex((prev) => (prev - 1 + total) % total);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [total]);

  const getSlug = (title) => {
    if (!title) return 'Service';
    const words = title.replace(/[^a-zA-Z0-9 ]/g, '').split(' ');
    return words.slice(0, 2).join('');
  };

  // Colorizes heading words like VS Code syntax tokens
  const renderColoredHeading = (title) => {
    if (!title) return null;
    const words = title.split(' ');
    // VS Code syntax theme palette:
    // Cyan (Type), Yellow (Function), Purple (Keyword), Sky Blue (Variable), Coral (String), Pink (Decorator)
    const tokenColors = ['#4ec9b0', '#dcdcaa', '#c586c0', '#9cdcfe', '#ce9178', '#f43f5e', '#38bdf8'];
    return words.map((word, idx) => (
      <span key={idx} style={{ color: tokenColors[idx % tokenColors.length] }}>
        {word}{idx < words.length - 1 ? ' ' : ''}
      </span>
    ));
  };

  // Colorizes paragraph text with authentic VS Code Dark+ theme token highlighting
  const renderSyntaxHighlightedText = (text) => {
    if (!text) return null;

    // Split words, punctuation and spaces
    const tokens = text.split(/(\s+|[.,;:\-"'()]+)/);

    const keywords = new Set([
      'for', 'that', 'may', 'each', 'and', 'with', 'before', 'when',
      'as', 'around', 'without', 'can', 'should', 'is', 'to', 'be',
      'or', 'in', 'of', 'the', 'a', 'an', 'by', 'from', 'at', 'on',
      'if', 'not', 'this', 'all', 'into', 'both', 'between', 'while',
      'must', 'will', 'are', 'has', 'have', 'been', 'their', 'its'
    ]);

    const types = new Set([
      'ibcs', 'web', 'development', 'services', 'organizations', 'organization',
      'applications', 'application', 'digital', 'system', 'systems', 'cms',
      'html', 'css', 'api', 'apis', 'ui', 'ux', 'seo', 'data', 'react',
      'javascript', 'frontend', 'backend', 'cloud', 'security', 'database'
    ]);

    const functions = new Set([
      'planning', 'testing', 'deployment', 'integrations', 'integration',
      'communicates', 'maintain', 'deliver', 'delivering', 'evolve',
      'supported', 'discovery', 'identifies', 'identify', 'include', 'includes',
      'shaped', 'works', 'working', 'implements', 'developed', 'design',
      'reviews', 'structuring', 'structured', 'managing', 'managed',
      'provide', 'provides', 'evaluating', 'evaluated', 'create', 'creates'
    ]);

    const variables = new Set([
      'goals', 'goal', 'users', 'user', 'content', 'requirements',
      'requirement', 'environment', 'experiences', 'experience', 'work',
      'objective', 'website', 'websites', 'audiences', 'audience',
      'features', 'feature', 'structure', 'sitemap', 'navigation',
      'stakeholders', 'outcomes', 'process', 'project', 'projects',
      'priorities', 'needs', 'scope', 'identity', 'templates', 'layouts'
    ]);

    return tokens.map((token, idx) => {
      // Spaces
      if (/^\s+$/.test(token)) {
        return token;
      }
      // Punctuation
      if (/^[.,;:\-"'()]+$/.test(token)) {
        return <span key={idx} style={{ color: '#858585' }}>{token}</span>;
      }

      const lower = token.toLowerCase();

      // Numbers
      if (/^\d+$/.test(token)) {
        return <span key={idx} style={{ color: '#b5cea8' }}>{token}</span>;
      }

      // Keywords (Purple #c586c0)
      if (keywords.has(lower)) {
        return <span key={idx} style={{ color: '#c586c0' }}>{token}</span>;
      }

      // Types / Entities (Cyan #4ec9b0)
      if (types.has(lower)) {
        return <span key={idx} style={{ color: '#4ec9b0' }}>{token}</span>;
      }

      // Functions / Actions (Yellow #dcdcaa)
      if (functions.has(lower)) {
        return <span key={idx} style={{ color: '#dcdcaa' }}>{token}</span>;
      }

      // Variables / Properties (Sky Blue #9cdcfe)
      if (variables.has(lower)) {
        return <span key={idx} style={{ color: '#9cdcfe' }}>{token}</span>;
      }

      // Strings / Literals / Descriptors (Soft Orange/Peach #ce9178)
      return <span key={idx} style={{ color: '#ce9178' }}>{token}</span>;
    });
  };

  return (
    <div className="monitor-page-root">
      {/* Top Header Navigation buttons */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-4 flex items-center justify-start gap-3 z-40 relative">
        <button
          type="button"
          onClick={handleBack}
          className="inline-flex items-center gap-2 rounded-xl bg-[#081E52] hover:bg-[#0c2b7a] border border-[#D4AF37]/40 text-white px-4 py-2 text-xs sm:text-sm font-bold transition-all cursor-pointer shadow-sm active:scale-95"
        >
          ← Back
        </button>
        <button
          type="button"
          onClick={handleHome}
          className="inline-flex items-center gap-2 rounded-xl bg-[#D4AF37] hover:bg-[#E5C158] px-4 py-2 text-xs sm:text-sm font-bold text-[#040A1A] transition-all cursor-pointer shadow-sm active:scale-95"
        >
          <Home className="w-4 h-4 text-[#040A1A]" />
          <span>Home</span>
        </button>
      </div>

      <style>{`
        .monitor-page-root {
          min-height: 100vh;
          width: 100%;
          background: #ffffff;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          margin: 0;
          padding: 36px 20px 80px;
          box-sizing: border-box;
          overflow-y: auto;
          overflow-x: hidden;
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", Roboto, sans-serif;
          user-select: none;
        }

        /* Smooth Custom Scrollbar */
        .monitor-page-root::-webkit-scrollbar {
          width: 8px;
        }
        .monitor-page-root::-webkit-scrollbar-track {
          background: #f8fafc;
        }
        .monitor-page-root::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 4px;
        }
        .monitor-page-root::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }

        /* ── Page Header: Web Development Services ── */
        .page-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 26px;
          z-index: 20;
          animation: headerFadeDown 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        @keyframes headerFadeDown {
          from { opacity: 0; transform: translateY(-12px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .page-title {
          font-size: clamp(26px, 3.4vw, 42px);
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.8px;
          margin: 0;
          line-height: 1.2;
        }

        .title-gradient {
          background: linear-gradient(135deg, #2563eb 0%, #7c3aed 55%, #ec4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .page-subtitle {
          font-size: clamp(12px, 1.1vw, 14.5px);
          color: #64748b;
          margin: 6px 0 0;
          font-weight: 400;
          max-width: 600px;
          line-height: 1.5;
        }

        /* ── Master Monitor Assembly ── */
        .monitor-assembly {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          filter: drop-shadow(0 20px 40px rgba(15, 23, 42, 0.14));
          animation: monitorFadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        @keyframes monitorFadeIn {
          from { opacity: 0; transform: translateY(18px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        /* ══════════════════════════════════════════════════════════
           1. MONITOR HEAD (SPACE GRAY CHASSIS & 5K DISPLAY PANEL)
           ══════════════════════════════════════════════════════════ */
        .monitor-head {
          position: relative;
          width: clamp(640px, 70vw, 920px);
          aspect-ratio: 16 / 9.8;
          background: linear-gradient(145deg, #374151 0%, #1f2937 45%, #111827 100%);
          border-radius: 18px;
          padding: 5px;
          box-shadow: 
            0 0 0 1px rgba(15, 23, 42, 0.5),
            0 1px 1px rgba(255, 255, 255, 0.3) inset,
            0 24px 55px rgba(15, 23, 42, 0.20),
            0 6px 18px rgba(15, 23, 42, 0.12);
          box-sizing: border-box;
          z-index: 10;
        }

        /* Diamond-Cut Outer Edge Chamfer */
        .monitor-head::before {
          content: "";
          position: absolute;
          inset: -1.5px;
          border-radius: 19.5px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(100, 116, 139, 0.45) 50%, rgba(15, 23, 42, 0.85) 100%);
          z-index: -1;
        }

        /* Ultra-Slim Glass Bezel (Uniform on all 4 sides) */
        .monitor-bezel {
          position: relative;
          width: 100%;
          height: 100%;
          background: #000000;
          border-radius: 13px;
          overflow: hidden;
          box-shadow: 0 0 0 1px #050505, 0 3px 12px rgba(0, 0, 0, 0.95) inset;
          display: flex;
          flex-direction: column;
        }

        /* Top Centered Pinhole Camera Module */
        .webcam-module {
          position: absolute;
          top: 4px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 6px;
          z-index: 45;
          pointer-events: none;
        }
        .webcam-lens {
          width: 6.5px;
          height: 6.5px;
          border-radius: 50%;
          background: radial-gradient(circle at 35% 35%, #1e3a5f 0%, #0a111a 65%, #000000 100%);
          box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.15), 0 0 3px rgba(0, 180, 255, 0.25);
          position: relative;
        }
        .webcam-lens::after {
          content: "";
          position: absolute;
          top: 1.5px;
          left: 1.5px;
          width: 2px;
          height: 2px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.85);
        }
        .webcam-indicator {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: ${isOn ? '#10b981' : '#1e293b'};
          box-shadow: ${isOn ? '0 0 5px #10b981' : 'none'};
          transition: all 0.3s ease;
          animation: ledBootPulse 1.4s ease-out;
        }

        @keyframes ledBootPulse {
          0% { background: #1e293b; box-shadow: none; }
          25% { background: #10b981; box-shadow: 0 0 10px #10b981; }
          45% { background: #1e293b; box-shadow: none; }
          65% { background: #10b981; box-shadow: 0 0 10px #10b981; }
          100% { background: #10b981; box-shadow: 0 0 5px #10b981; }
        }

        /* Active Display Surface */
        .monitor-screen {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          background: #0b0d14;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        /* Diagonal Glass Sheen Reflection */
        .screen-glass-sheen {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            125deg,
            rgba(255, 255, 255, 0.08) 0%,
            rgba(255, 255, 255, 0.02) 24%,
            transparent 42%,
            transparent 100%
          );
          pointer-events: none;
          z-index: 35;
          animation: glassSheenSweep 1.2s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        @keyframes glassSheenSweep {
          0% { opacity: 0; transform: translateX(-40px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        /* ══════════════════════════════════════════════════════════
           VS CODE WORKSPACE INTERFACE (EXACT REFERENCE DESIGN)
           ══════════════════════════════════════════════════════════ */
        .vscode-window {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          background: #11121c;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          color: #cccccc;
        }

        /* 1. TOP TITLEBAR / SEARCH PALETTE */
        .vscode-titlebar {
          height: 34px;
          background: #0d0e17;
          border-bottom: 1px solid rgba(255, 255, 255, 0.07);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 10px;
          box-sizing: border-box;
          z-index: 30;
        }

        .titlebar-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .window-dots {
          display: flex;
          gap: 6px;
          align-items: center;
        }

        .window-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        .dot-red { background: #ff5f56; }
        .dot-yellow { background: #ffbd2e; }
        .dot-green { background: #27c93f; }

        .titlebar-arrows {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #64748b;
          font-size: 13px;
        }

        .titlebar-center {
          flex: 1;
          display: flex;
          justify-content: center;
          max-width: 440px;
          margin: 0 12px;
        }

        .vscode-search-box {
          width: 100%;
          height: 22px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 6px;
          display: flex;
          align-items: center;
          padding: 0 8px;
          gap: 6px;
        }

        .vscode-search-box input {
          width: 100%;
          background: transparent;
          border: none;
          outline: none;
          color: #cbd5e1;
          font-size: 11px;
          font-family: inherit;
        }

        .vscode-search-box input::placeholder {
          color: #64748b;
        }

        .titlebar-right {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #94a3b8;
        }

        .avatar-circle {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          color: #ffffff;
          font-size: 9px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
        }

        /* 2. MAIN WORKSPACE (ACTIVITY BAR + SIDEBAR + EDITOR) */
        .vscode-main {
          flex: 1;
          display: flex;
          overflow: hidden;
          background: #11121c;
        }

        /* 2A. ACTIVITY BAR (LEFTMOST STRIP) */
        .vscode-activitybar {
          width: 42px;
          background: #090a10;
          border-right: 1px solid rgba(255, 255, 255, 0.06);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          padding: 8px 0;
          box-sizing: border-box;
          z-index: 25;
        }

        .activity-group-top,
        .activity-group-bottom {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
          width: 100%;
        }

        .activity-icon-btn {
          position: relative;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #64748b;
          cursor: pointer;
          transition: color 0.15s ease;
          padding: 4px 0;
        }

        .activity-icon-btn:hover {
          color: #e2e8f0;
        }

        .activity-icon-btn.active {
          color: #ffffff;
        }

        .activity-icon-btn.active::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 2px;
          background: #38bdf8;
          box-shadow: 0 0 6px #38bdf8;
        }

        /* 2B. EXPLORER SIDEBAR */
        .vscode-sidebar {
          width: clamp(260px, 30vw, 340px);
          min-width: 260px;
          background: #0d0e17;
          border-right: 1px solid rgba(255, 255, 255, 0.07);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: width 0.2s ease;
        }

        .sidebar-header {
          padding: 8px 12px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 10.5px;
          font-weight: 700;
          color: #94a3b8;
          letter-spacing: 0.8px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
        }

        .sidebar-tree-root {
          padding: 7px 10px;
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 700;
          color: #cbd5e1;
          letter-spacing: 0.4px;
          cursor: pointer;
          user-select: none;
          transition: color 0.15s ease, background 0.15s ease;
        }

        .sidebar-tree-root:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.03);
        }

        .sidebar-services-list {
          flex: 1;
          overflow-y: auto;
          overflow-x: hidden;
          padding: 2px 6px 10px 6px;
        }

        .sidebar-services-list::-webkit-scrollbar {
          width: 5px;
        }
        .sidebar-services-list::-webkit-scrollbar-track {
          background: transparent;
        }
        .sidebar-services-list::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.15);
          border-radius: 3px;
        }

        .sidebar-folder-label {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 5px 10px;
          font-size: 11px;
          font-weight: 600;
          color: #94a3b8;
          cursor: pointer;
          user-select: none;
          transition: color 0.15s ease, background 0.15s ease;
        }

        .sidebar-folder-label:hover {
          color: #e2e8f0;
          background: rgba(255, 255, 255, 0.03);
        }

        .sidebar-service-item {
          display: flex;
          align-items: flex-start;
          gap: 7px;
          padding: 6px 10px 6px 16px;
          border-radius: 4px;
          font-size: 11px;
          color: #cbd5e1;
          cursor: pointer;
          line-height: 1.4;
          transition: background 0.1s ease, color 0.1s ease;
        }

        .sidebar-service-item:hover {
          background: rgba(255, 255, 255, 0.05);
          color: #ffffff;
        }

        .sidebar-service-item.active {
          background: rgba(30, 58, 138, 0.45);
          color: #ffffff;
          box-shadow: inset 2px 0 0 #38bdf8;
        }

        .sidebar-service-item svg {
          margin-top: 2px;
          flex-shrink: 0;
        }

        .item-text {
          white-space: normal;
          word-break: break-word;
          line-height: 1.4;
          flex: 1;
        }

        /* 2C. MAIN CODE EDITOR PANE */
        .vscode-editor-pane {
          flex: 1;
          display: flex;
          flex-direction: column;
          background: #12131f;
          overflow: hidden;
          position: relative;
        }

        /* ══════════════════════════════════════════════════════════
           OPTION 3: VS CODE EMBEDDED TERMINAL BOOT SEQUENCE
           ══════════════════════════════════════════════════════════ */
        .vscode-terminal-view {
          flex: 1;
          display: flex;
          flex-direction: column;
          background: #080910;
          font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace;
          overflow: hidden;
          animation: terminalFadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        @keyframes terminalFadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .terminal-header-bar {
          height: 30px;
          background: #0d0e17;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 12px;
          box-sizing: border-box;
          user-select: none;
        }

        .terminal-tabs {
          display: flex;
          align-items: center;
          gap: 14px;
          font-size: 11px;
          color: #64748b;
        }

        .terminal-tab {
          display: flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
        }

        .terminal-tab.active {
          color: #e2e8f0;
          font-weight: 600;
        }

        .terminal-skip-btn {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #94a3b8;
          font-size: 10px;
          padding: 2px 8px;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .terminal-skip-btn:hover {
          background: rgba(255, 255, 255, 0.15);
          color: #ffffff;
        }

        .terminal-body {
          flex: 1;
          padding: 24px 28px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          font-size: clamp(12px, 1.1vw, 13.5px);
          line-height: 1.6;
          color: #cbd5e1;
          overflow-y: auto;
        }

        .terminal-line {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
          animation: terminalLineSlide 0.25s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        @keyframes terminalLineSlide {
          from { opacity: 0; transform: translateX(-8px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .t-user { color: #38bdf8; font-weight: 700; }
        .t-sep { color: #64748b; }
        .t-path { color: #c084fc; font-weight: 600; }
        .t-dollar { color: #4ade80; font-weight: 700; }
        .t-cmd { color: #facc15; font-weight: 600; }

        .t-info {
          color: #38bdf8;
          font-weight: 600;
          background: rgba(56, 189, 248, 0.12);
          padding: 1px 6px;
          border-radius: 3px;
          font-size: 11px;
        }

        .t-check { color: #4ade80; font-weight: 800; font-size: 14px; }
        .t-tag { color: #64748b; font-size: 11px; margin-left: 6px; }

        .t-arrow { color: #c084fc; font-weight: 700; }
        .t-bright { color: #ffffff; font-weight: 600; }

        .t-cursor {
          color: #38bdf8;
          animation: terminalBlink 0.8s infinite;
          font-size: 12px;
          margin-left: 2px;
        }

        @keyframes terminalBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .terminal-system-banner {
          color: #64748b;
          font-size: 11px;
          margin-bottom: 6px;
          padding-bottom: 8px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          display: flex;
          flex-direction: column;
          gap: 2px;
          line-height: 1.4;
        }

        .vscode-normal-wrapper {
          display: flex;
          flex: 1;
          width: 100%;
          height: 100%;
          overflow: hidden;
          position: relative;
          animation: normalVsCodeReveal 0.35s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        @keyframes normalVsCodeReveal {
          from { opacity: 0; transform: scale(0.995); }
          to { opacity: 1; transform: scale(1); }
        }

        /* Tabs Bar */
        .editor-tabs-bar {
          height: 32px;
          background: #0a0b12;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          overflow-x: auto;
        }

        .tabs-list {
          display: flex;
          height: 100%;
          align-items: center;
        }

        .editor-tab {
          height: 100%;
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 0 12px;
          font-size: 11px;
          color: #94a3b8;
          background: #0d0e17;
          border-right: 1px solid rgba(255, 255, 255, 0.05);
          cursor: pointer;
          border-top: 2px solid transparent;
        }

        .editor-tab.active {
          color: #ffffff;
          background: #12131f;
          border-top-color: #60a5fa;
        }

        .tab-icon {
          color: #38bdf8;
          font-size: 11px;
        }

        /* Breadcrumbs Bar */
        .editor-breadcrumbs {
          height: 22px;
          background: #12131f;
          display: flex;
          align-items: center;
          padding: 0 14px;
          font-size: 10px;
          color: #818cf8;
          gap: 6px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
        }

        .breadcrumb-part {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        /* 2C. NORMAL READING / PAGE CONTENT PANE (VS CODE THEME) */
        .editor-normal-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          padding: 30px 38px 40px;
          background: #11121f;
          overflow-y: auto;
          box-sizing: border-box;
          font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace;
        }

        .editor-normal-content::-webkit-scrollbar {
          width: 6px;
        }
        .editor-normal-content::-webkit-scrollbar-track {
          background: transparent;
        }
        .editor-normal-content::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.15);
          border-radius: 3px;
        }

        .content-comment {
          font-size: 12px;
          color: #6a9955;
          font-style: italic;
          margin-bottom: 14px;
          letter-spacing: 0.3px;
          user-select: none;
          animation: codeStreamIn 0.45s cubic-bezier(0.16, 1, 0.3, 1) 0.12s both;
        }

        .content-comment-footer {
          font-size: 11px;
          color: #6a9955;
          font-style: italic;
          margin-top: 24px;
          letter-spacing: 0.3px;
          user-select: none;
          opacity: 0.85;
          animation: codeStreamIn 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.42s both;
        }

        .content-main-heading {
          font-size: clamp(22px, 2.4vw, 30px);
          font-weight: 700;
          margin: 0 0 16px 0;
          line-height: 1.35;
          letter-spacing: -0.4px;
          font-family: inherit;
          animation: codeStreamIn 0.55s cubic-bezier(0.16, 1, 0.3, 1) 0.22s both;
        }

        .content-description {
          font-size: clamp(13.5px, 1.15vw, 15px);
          line-height: 1.85;
          margin: 0;
          font-weight: 400;
          letter-spacing: 0.2px;
          font-family: inherit;
          animation: codeStreamIn 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.32s both;
        }

        @keyframes codeStreamIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* 3. STATUS BAR (BOTTOM STRIP) */
        .vscode-statusbar {
          height: 22px;
          background: #090a10;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 10px;
          font-size: 10px;
          color: #94a3b8;
          box-sizing: border-box;
          z-index: 30;
        }

        .statusbar-left,
        .statusbar-right {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .branch-badge {
          display: flex;
          align-items: center;
          gap: 4px;
          color: #cbd5e1;
          font-weight: 500;
        }

        /* ══════════════════════════════════════════════════════════
           2. STAND ARM (PRECISION-MACHINED ANODIZED SPACE GRAY NECK)
           ══════════════════════════════════════════════════════════ */
        .monitor-stand-neck {
          position: relative;
          width: clamp(86px, 9vw, 110px);
          height: clamp(95px, 11vw, 125px);
          margin-top: -14px;
          background: linear-gradient(
            90deg,
            #1e2530 0%,
            #3b4452 20%,
            #5e6878 50%,
            #3b4452 80%,
            #1e2530 100%
          );
          box-shadow: 
            0 12px 26px rgba(15, 23, 42, 0.22),
            0 0 0 1px rgba(15, 23, 42, 0.45),
            0 1px 0 rgba(255, 255, 255, 0.25) inset;
          z-index: 5;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hinge-puck {
          position: absolute;
          top: -12px;
          width: 66px;
          height: 24px;
          border-radius: 12px 12px 0 0;
          background: linear-gradient(180deg, #374151 0%, #1f2937 100%);
          box-shadow: 0 1px 0 rgba(255, 255, 255, 0.2) inset;
          z-index: -1;
        }

        .cable-hole {
          width: 30px;
          height: 48px;
          border-radius: 15px;
          background: radial-gradient(circle at 45% 45%, #0f172a 0%, #020617 100%);
          box-shadow: 
            0 1.5px 3px rgba(255, 255, 255, 0.35) inset,
            0 -2px 4px rgba(0, 0, 0, 0.8) inset,
            0 0 0 1px rgba(15, 23, 42, 0.8);
        }

        /* ══════════════════════════════════════════════════════════
           3. STAND BASE (SOLID 3D SPACE GRAY FOOT PLATE)
           ══════════════════════════════════════════════════════════ */
        .monitor-stand-base-container {
          perspective: 600px;
          perspective-origin: 50% 0%;
          width: clamp(230px, 25vw, 290px);
          height: 26px;
          margin-top: -3px;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          z-index: 6;
        }

        .monitor-stand-plate {
          width: 100%;
          height: 52px;
          transform: rotateX(68deg);
          transform-origin: top center;
          background: linear-gradient(
            180deg,
            #3b4452 0%,
            #4a5568 35%,
            #2d3748 70%,
            #1a202c 100%
          );
          border-radius: 6px 6px 14px 14px;
          box-shadow: 
            0 1px 0 rgba(255, 255, 255, 0.35) inset,
            0 -1px 2px rgba(0, 0, 0, 0.5) inset,
            0 0 0 1px rgba(15, 23, 42, 0.45);
        }

        .monitor-stand-front-lip {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 7px;
          background: linear-gradient(180deg, #4a5568 0%, #1f2937 100%);
          border-radius: 0 0 6px 6px;
          box-shadow: 
            0 1px 0 rgba(255, 255, 255, 0.35) inset,
            0 0 0 1px rgba(15, 23, 42, 0.5),
            0 6px 14px rgba(15, 23, 42, 0.25);
        }

        /* ══════════════════════════════════════════════════════════
           4. AMBIENT DESK CONTACT SHADOWS
           ══════════════════════════════════════════════════════════ */
        .desk-shadow-wrapper {
          position: relative;
          width: clamp(340px, 38vw, 480px);
          height: 26px;
          margin-top: -6px;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
          z-index: 4;
        }

        .desk-contact-line {
          position: absolute;
          width: 75%;
          height: 6px;
          background: rgba(15, 23, 42, 0.45);
          filter: blur(3.5px);
          border-radius: 50%;
        }

        .desk-diffuse-glow {
          position: absolute;
          width: 100%;
          height: 24px;
          background: radial-gradient(ellipse at center, rgba(15, 23, 42, 0.24) 0%, rgba(15, 23, 42, 0.08) 45%, transparent 75%);
          filter: blur(12px);
        }

        /* ══════════════════════════════════════════════════════════
           5. MOBILE RESPONSIVE & TOUCH OPTIMIZATIONS (≤ 768px)
           ══════════════════════════════════════════════════════════ */
        .mobile-touch-bar {
          display: none;
        }

        .mobile-sidebar-backdrop {
          display: none;
        }

        @media (max-width: 768px) {
          .monitor-page-root {
            padding: 16px 8px 32px;
          }

          .page-header {
            margin-bottom: 16px;
          }

          .page-title {
            font-size: 24px;
            letter-spacing: -0.5px;
          }

          .page-subtitle {
            font-size: 13px;
            padding: 0 8px;
          }

          /* Transform Monitor into a Sleek Full-Width Floating Device Frame */
          .monitor-assembly {
            width: 100%;
            max-width: 100%;
            filter: drop-shadow(0 10px 25px rgba(0, 0, 0, 0.35));
          }

          .monitor-head {
            width: 100% !important;
            max-width: 100% !important;
            aspect-ratio: auto !important;
            height: 560px !important;
            border-radius: 14px;
            padding: 4px;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45);
          }

          .monitor-bezel {
            border-radius: 10px;
          }

          .webcam-module {
            display: none !important;
          }

          /* Hide Monitor Stand & Desk Shadows on Mobile */
          .monitor-stand-neck,
          .monitor-stand-base-container,
          .desk-shadow-wrapper {
            display: none !important;
          }

          /* Titlebar on Mobile */
          .vscode-titlebar {
            height: 36px;
            padding: 0 8px;
          }

          .vscode-search-box {
            max-width: 145px;
            height: 24px;
          }

          .titlebar-arrows {
            gap: 10px;
            font-size: 15px;
          }

          .titlebar-arrows span {
            padding: 2px 4px;
          }

          /* Activity bar */
          .vscode-activitybar {
            width: 38px;
            padding: 6px 0;
          }

          .activity-icon-btn {
            padding: 6px 0;
          }

          /* Sidebar Drawer on Mobile */
          .vscode-sidebar {
            position: absolute !important;
            left: 38px !important;
            top: 0 !important;
            bottom: 0 !important;
            width: min(290px, calc(100% - 38px)) !important;
            z-index: 50 !important;
            box-shadow: 8px 0 30px rgba(0, 0, 0, 0.85) !important;
            animation: mobileDrawerSlide 0.22s cubic-bezier(0.16, 1, 0.3, 1) both;
          }

          @keyframes mobileDrawerSlide {
            from { transform: translateX(-15px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }

          .mobile-sidebar-backdrop {
            display: block;
            position: absolute;
            inset: 0;
            background: rgba(0, 0, 0, 0.65);
            backdrop-filter: blur(2px);
            z-index: 45;
            animation: fadeIn 0.2s ease both;
          }

          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          .sidebar-service-item {
            padding: 8px 10px 8px 14px;
            font-size: 12px;
          }

          /* Normal Content Area on Mobile */
          .terminal-body {
            padding: 16px 14px;
            font-size: 11.5px;
          }

          .editor-normal-content {
            padding: 18px 16px 20px;
          }

          .content-comment {
            font-size: 11px;
            margin-bottom: 8px;
          }

          .content-main-heading {
            font-size: 19px;
            line-height: 1.35;
            margin-bottom: 12px;
          }

          .content-description {
            font-size: 13px;
            line-height: 1.75;
          }

          /* Mobile Interactive Fixed Bottom Navigation Bar */
          .mobile-touch-bar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 8px 14px;
            background: #090a12;
            border-top: 1px solid rgba(255, 255, 255, 0.08);
            box-shadow: 0 -4px 18px rgba(0, 0, 0, 0.45);
            z-index: 25;
            flex-shrink: 0;
            width: 100%;
            box-sizing: border-box;
          }

          .touch-nav-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 5px;
            min-width: 80px;
            padding: 8px 14px;
            border-radius: 8px;
            font-size: 12.5px;
            font-weight: 600;
            background: rgba(56, 189, 248, 0.12);
            border: 1px solid rgba(56, 189, 248, 0.35);
            color: #38bdf8;
            cursor: pointer;
            user-select: none;
            transition: all 0.15s ease;
          }

          .touch-nav-btn:active {
            transform: scale(0.94);
            background: rgba(56, 189, 248, 0.28);
            border-color: #38bdf8;
            color: #ffffff;
          }

          .touch-nav-indicator {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1px;
            user-select: none;
          }

          .touch-counter {
            font-size: 12px;
            font-weight: 700;
            color: #e2e8f0;
            font-family: ui-monospace, monospace;
            letter-spacing: 0.5px;
          }

          .touch-swipe-subtext {
            font-size: 9.5px;
            color: #64748b;
            letter-spacing: 0.3px;
          }

          /* Status Bar on Mobile */
          .vscode-statusbar {
            padding: 0 8px;
            font-size: 9.5px;
          }

          .statusbar-mobile-hide {
            display: none;
          }
        }

      `}</style>

      {/* ── Page Header: Web Development ── */}
      <header className="page-header">
        <h1 className="page-title">
          Web <span className="title-gradient">Development</span>
        </h1>
        <p className="page-subtitle max-w-3xl mx-auto leading-relaxed">
          IBCS Web Development focuses on creating modern, responsive, and scalable web applications that deliver seamless digital experiences across devices. Our approach combines intuitive interfaces, robust application architecture, and modern web technologies to support business operations, digital platforms, and evolving organisational needs.
        </p>
      </header>

      {/* ── COMPLETE APPLE STUDIO DISPLAY MONITOR ASSEMBLY ── */}
      <div className="monitor-assembly">
        {/* 1. MONITOR SCREEN HEAD */}
        <div className="monitor-head">
          <div className="monitor-bezel">
            {/* Top Pinhole Camera Module */}
            <div className="webcam-module">
              <div className="webcam-lens" title="12MP Center Stage Ultra-Wide Camera" />
              <div className="webcam-indicator" title={isOn ? 'Camera active' : 'Display off'} />
            </div>

            {/* Active Display Panel: VS Code Environment */}
            <div className="monitor-screen">
              {/* Diagonal Glass Sheen Reflection */}
              <div className="screen-glass-sheen" />

              {/* ── VS CODE WORKSPACE ── */}
              <div className="vscode-window">
                {/* A. TITLEBAR & COMMAND PALETTE */}
                <div className="vscode-titlebar">
                  <div className="titlebar-left">
                    <div className="window-dots">
                      <span className="window-dot dot-red" onClick={() => setIsOn(false)} title="Close window" />
                      <span className="window-dot dot-yellow" title="Minimize" />
                      <span className="window-dot dot-green" title="Full screen" />
                    </div>
                    <div className="titlebar-arrows">
                      <span style={{ cursor: 'pointer' }} onClick={() => setCurrentIndex((prev) => (prev - 1 + total) % total)}>←</span>
                      <span style={{ cursor: 'pointer' }} onClick={() => setCurrentIndex((prev) => (prev + 1) % total)}>→</span>
                    </div>
                  </div>

                  <div className="titlebar-center">
                    <div className="vscode-search-box">
                      <Search size={11} color="#94a3b8" />
                      <input 
                        type="text" 
                        placeholder="web-development-services"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        title="Filter 50 services"
                      />
                    </div>
                  </div>

                  <div className="titlebar-right">
                    <Columns2 size={13} style={{ cursor: 'pointer' }} title="Split Editor Right" />
                    <div className="avatar-circle" title="IBCS Dev">I</div>
                  </div>
                </div>

                {/* B. MAIN INTERFACE (ACTIVITY BAR + SIDEBAR + CODE EDITOR) */}
                <div className="vscode-main">
                  {isTerminalBooting ? (
                    /* 1. FULL SECTION TERMINAL INTERFACE */
                    <div className="vscode-terminal-view">
                      <div className="terminal-header-bar">
                        <div className="terminal-tabs">
                          <div className="terminal-tab active">
                            <Terminal size={12} style={{ color: '#4ade80' }} />
                            <span>bash — ibcs-init</span>
                          </div>
                          <div className="terminal-tab" style={{ opacity: 0.5 }}>DEBUG CONSOLE</div>
                          <div className="terminal-tab" style={{ opacity: 0.5 }}>OUTPUT</div>
                          <div className="terminal-tab" style={{ opacity: 0.5 }}>PROBLEMS</div>
                        </div>
                        <button 
                          type="button"
                          className="terminal-skip-btn"
                          onClick={() => setIsTerminalBooting(false)}
                          title="Skip terminal boot"
                        >
                          Skip ✕
                        </button>
                      </div>

                      <div className="terminal-body">
                        <div className="terminal-system-banner">
                          <span>IBCS Development Cloud Studio [Version 2.4.0-release]</span>
                          <span>(c) IBCS IT Services Corporation. All rights reserved.</span>
                        </div>

                        {/* Line 0: Initial prompt and run command */}
                        <div className="terminal-line">
                          <span className="t-user">ibcs-dev@studio</span>
                          <span className="t-sep">:</span>
                          <span className="t-path">~/services</span>
                          <span className="t-dollar">$</span>
                          <span className="t-cmd">npx ibcs-load --all-services</span>
                        </div>

                        {/* Line 1: Indexing info */}
                        {terminalStep >= 1 && (
                          <div className="terminal-line">
                            <span className="t-info">[INFO]</span>
                            <span>Indexing Web Development Services catalog ({total} modules)...</span>
                          </div>
                        )}

                        {/* Line 2: Loaded status */}
                        {terminalStep >= 2 && (
                          <div className="terminal-line">
                            <span className="t-check">✓</span>
                            <span>Loaded {total}/{total} services in 24ms</span>
                            <span className="t-tag">[Production Ready · Ready to Deploy]</span>
                          </div>
                        )}

                        {/* Line 3: Launching interactive viewer with cursor */}
                        {terminalStep >= 3 && (
                          <div className="terminal-line">
                            <span className="t-arrow">➜</span>
                            <span className="t-bright">Launching interactive VS Code workspace...</span>
                            <span className="t-cursor">█</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    /* 2. NORMAL VS CODE WORKSPACE (Activity Bar + Sidebar + Editor Pane) */
                    <div className="vscode-normal-wrapper">
                      {/* ACTIVITY BAR */}
                      <div className="vscode-activitybar">
                    <div className="activity-group-top">
                      <div 
                        className={`activity-icon-btn ${activeActivityTab === 'explorer' && isSidebarVisible ? 'active' : ''}`}
                        onClick={() => {
                          if (activeActivityTab === 'explorer') {
                            setIsSidebarVisible(prev => !prev);
                          } else {
                            setActiveActivityTab('explorer');
                            setIsSidebarVisible(true);
                          }
                        }}
                        title="Explorer (Click to toggle sidebar)"
                      >
                        <Files size={17} />
                      </div>
                      <div 
                        className={`activity-icon-btn ${activeActivityTab === 'search' ? 'active' : ''}`}
                        onClick={() => setActiveActivityTab('search')}
                        title="Search"
                      >
                        <Search size={17} />
                      </div>
                      <div 
                        className={`activity-icon-btn ${activeActivityTab === 'git' ? 'active' : ''}`}
                        onClick={() => setActiveActivityTab('git')}
                        title="Source Control"
                      >
                        <GitBranch size={17} />
                      </div>
                      <div 
                        className={`activity-icon-btn ${activeActivityTab === 'run' ? 'active' : ''}`}
                        onClick={() => setActiveActivityTab('run')}
                        title="Run and Debug"
                      >
                        <Play size={17} />
                      </div>
                      <div 
                        className={`activity-icon-btn ${activeActivityTab === 'extensions' ? 'active' : ''}`}
                        onClick={() => setActiveActivityTab('extensions')}
                        title="Extensions"
                      >
                        <Boxes size={17} />
                      </div>
                    </div>

                    <div className="activity-group-bottom">
                      <div className="activity-icon-btn" title="Settings">
                        <Settings size={17} />
                      </div>
                    </div>
                  </div>

                  {/* EXPLORER SIDEBAR: 50 SERVICES LIST */}
                  {isSidebarVisible && (
                    <div className="vscode-sidebar">
                      <div className="sidebar-header">
                        <span>EXPLORER</span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span 
                            style={{ fontSize: '11px', color: '#64748b', cursor: 'pointer' }}
                            onClick={() => {
                              const next = !isTreeOpen;
                              setIsTreeOpen(next);
                              setIsFolderOpen(next);
                            }}
                            title={isTreeOpen ? "Collapse All" : "Expand All"}
                          >
                            •••
                          </span>
                          {isMobile && (
                            <X 
                              size={14} 
                              style={{ cursor: 'pointer', color: '#cbd5e1' }} 
                              onClick={() => setIsSidebarVisible(false)} 
                              title="Close drawer"
                            />
                          )}
                        </div>
                      </div>

                      {/* Tree Root Web Development Services */}
                      <div 
                        className="sidebar-tree-root"
                        onClick={() => setIsTreeOpen(prev => !prev)}
                        title={isTreeOpen ? "Click to collapse" : "Click to expand"}
                      >
                        {isTreeOpen ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
                        <span>WEB-DEVELOPMENT-SERVICES</span>
                      </div>

                      {/* Tree Content */}
                      {isTreeOpen && (
                        <>
                          <div 
                            className="sidebar-folder-label"
                            onClick={() => setIsFolderOpen(prev => !prev)}
                            title={isFolderOpen ? "Click to collapse folder" : "Click to expand folder"}
                          >
                            {isFolderOpen ? <ChevronDown size={11} /> : <ChevronRight size={11} />}
                            {isFolderOpen ? <FolderOpen size={13} color="#f59e0b" /> : <Folder size={13} color="#f59e0b" />}
                            <span>services ({total})</span>
                          </div>

                          {/* Scrollable list of 50 Services */}
                          {isFolderOpen && (
                            <div className="sidebar-services-list">
                              {filteredServices.map((service) => {
                                const originalIndex = allServices.findIndex(s => s.id === service.id);
                                const isSelected = currentIndex === originalIndex;
                                return (
                                  <div
                                    key={service.id}
                                    className={`sidebar-service-item ${isSelected ? 'active' : ''}`}
                                    onClick={() => {
                                      setCurrentIndex(originalIndex);
                                      if (isMobile) {
                                        setIsSidebarVisible(false);
                                      }
                                    }}
                                    title={`${service.id}. ${service.title}`}
                                  >
                                    <FileText size={12} style={{ color: isSelected ? '#38bdf8' : '#64748b', flexShrink: 0 }} />
                                    <span className="item-text">
                                      {String(service.id).padStart(2, '0')}. {service.title}
                                    </span>
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  )}

                  {/* Backdrop for mobile drawer */}
                  {isMobile && isSidebarVisible && (
                    <div 
                      className="mobile-sidebar-backdrop" 
                      onClick={() => setIsSidebarVisible(false)} 
                      title="Close drawer"
                    />
                  )}

                  {/* NORMAL CONTENT PANE */}
                  <div className="vscode-editor-pane">
                    {/* Tabs Bar */}
                    <div className="editor-tabs-bar">
                      <div className="tabs-list">
                        <div className="editor-tab active">
                          <FileText size={12} style={{ color: '#38bdf8' }} />
                          <span>{String(currentService.id || 1).padStart(2, '0')}. {currentService.title}</span>
                          <X size={11} style={{ opacity: 0.6 }} />
                        </div>
                      </div>
                      <div style={{ paddingRight: '8px', color: '#64748b', fontSize: '11px' }}>•••</div>
                    </div>

                    {/* Normal Reading Content Display (VS Code Syntax Highlighted & Touch Swipe Enabled) */}
                    <div 
                      key={currentIndex}
                      className="editor-normal-content"
                      onTouchStart={handleTouchStart}
                      onTouchMove={handleTouchMove}
                      onTouchEnd={handleTouchEnd}
                    >
                      <div className="content-comment">
                        // Service #{String(currentService.id || 1).padStart(2, '0')} of {total} — {webDevelopmentServicesData.company || "IBCS IT SERVICES"}
                      </div>
                      <h2 className="content-main-heading">
                        {renderColoredHeading(currentService.title)}
                      </h2>
                      <div className="content-description">
                        {renderSyntaxHighlightedText(currentService.description)}
                      </div>

                      <div className="content-comment-footer">
                        // End of service scope · Status: Active
                      </div>
                    </div>

                    {/* Fixed / Docked Bottom Touch Navigation Bar on Mobile */}
                    <div className="mobile-touch-bar">
                      <button 
                        type="button"
                        className="touch-nav-btn touch-nav-prev" 
                        onClick={() => setCurrentIndex((prev) => (prev - 1 + total) % total)}
                        title="Previous Service"
                      >
                        <ChevronLeft size={15} /> Prev
                      </button>
                      <div className="touch-nav-indicator">
                        <span className="touch-counter">
                          #{String(currentService.id || 1).padStart(2, '0')} / {total}
                        </span>
                        <span className="touch-swipe-subtext">↔ swipe</span>
                      </div>
                      <button 
                        type="button"
                        className="touch-nav-btn touch-nav-next" 
                        onClick={() => setCurrentIndex((prev) => (prev + 1) % total)}
                        title="Next Service"
                      >
                        Next <ChevronRight size={15} />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

                {/* C. BOTTOM STATUS BAR */}
                <div className="vscode-statusbar">
                  <div className="statusbar-left">
                    <span className="branch-badge">
                      <GitBranch size={11} /> main*
                    </span>
                    <span>Ⓧ 0  ⚠ 0</span>
                  </div>

                  <div className="statusbar-right">
                    <span className="statusbar-mobile-hide">Ln 12, Col 24</span>
                    <span className="statusbar-mobile-hide">Spaces: 2</span>
                    <span>UTF-8</span>
                    <span className="statusbar-mobile-hide">LF</span>
                    <span style={{ color: '#38bdf8', fontWeight: 500 }}>⚛ JavaScript JSX</span>
                    <span className="statusbar-mobile-hide">Prettier</span>
                    <Bell size={11} style={{ cursor: 'pointer' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. STAND ARM (BRUSHED ANODIZED ALUMINUM NECK) */}
        <div className="monitor-stand-neck">
          <div className="hinge-puck" />
          <div className="cable-hole" title="Cable Management Pass-Through" />
        </div>

        {/* 3. STAND BASE (SLIM 3D FLAT ALUMINUM FOOT) */}
        <div className="monitor-stand-base-container">
          <div className="monitor-stand-plate" />
          <div className="monitor-stand-front-lip" />
        </div>

        {/* 4. SOFT DESK CONTACT AMBIENT SHADOWS */}
        <div className="desk-shadow-wrapper">
          <div className="desk-contact-line" />
          <div className="desk-diffuse-glow" />
        </div>
      </div>
    </div>
  );
}
