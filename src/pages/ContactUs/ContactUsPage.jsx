import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBolt } from 'react-icons/fa';
import { 
  Sparkles,
  Zap,
  Wifi,
  X,
  Search,
  Phone,
  Mail,
  Send,
  Check,
  RefreshCw,
  Lock,
  Home
} from 'lucide-react';

import { 
  DIRECTORY_APPS, 
  AI_SUGGESTED_PILLS, 
  AI_KNOWLEDGE_BASE, 
  HEADER_CONTENT, 
  DEFAULT_WALLPAPER 
} from './ContactUsPageData.js';

// ============================================================================
// 1. SYSTEM STATUS HOOK (Live Clock, Battery API, Online/Offline Detection)
// ============================================================================
const useSystemStatus = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [batteryLevel, setBatteryLevel] = useState(100);
  const [isCharging, setIsCharging] = useState(false);
  const [isOnline, setIsOnline] = useState(typeof navigator !== 'undefined' ? navigator.onLine : true);

  useEffect(() => {
    const updateTime = () => setCurrentTime(new Date());
    updateTime();
    const timer = setInterval(updateTime, 1000);

    let batteryInstance = null;
    const handleBatteryUpdate = () => {
      if (batteryInstance) {
        setBatteryLevel(Math.round(batteryInstance.level * 100));
        setIsCharging(batteryInstance.charging);
      }
    };

    if (typeof navigator !== 'undefined' && 'getBattery' in navigator) {
      navigator.getBattery()
        .then((battery) => {
          batteryInstance = battery;
          handleBatteryUpdate();
          battery.addEventListener('levelchange', handleBatteryUpdate);
          battery.addEventListener('chargingchange', handleBatteryUpdate);
        })
        .catch(() => {});
    }

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      clearInterval(timer);
      if (batteryInstance) {
        batteryInstance.removeEventListener('levelchange', handleBatteryUpdate);
        batteryInstance.removeEventListener('chargingchange', handleBatteryUpdate);
      }
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const hours = currentTime.getHours().toString().padStart(2, '0');
  const minutes = currentTime.getMinutes().toString().padStart(2, '0');
  const seconds = currentTime.getSeconds().toString().padStart(2, '0');
  const timeString = `${hours}:${minutes}`;
  const fullTimeString = currentTime.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });
  const dateString = currentTime.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  });
  const fullDateString = currentTime.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return {
    currentTime,
    hours,
    minutes,
    seconds,
    timeString,
    fullTimeString,
    dateString,
    fullDateString,
    batteryLevel,
    isCharging,
    isOnline
  };
};

// ============================================================================
// 2. DIRECTORY MODAL & AI ASSISTANT CHAT
// ============================================================================
function DirectoryModal({ app, onClose }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: 'Hello! I am your AI Directory Assistant. How can I assist you with contacts, departments, or officer details today?'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  if (!app) return null;

  const handleCopy = (text, idx) => {
    navigator.clipboard?.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleSendAi = (textToSend) => {
    const query = textToSend || inputMessage;
    if (!query.trim()) return;

    const newMsgs = [...messages, { sender: 'user', text: query }];
    setMessages(newMsgs);
    setInputMessage('');

    setTimeout(() => {
      let reply = "I found matching directory records for your query. You can connect directly via central helpdesk at 1800-123-4567 or email info@institution.edu.";
      const q = query.toLowerCase();

      for (const item of AI_KNOWLEDGE_BASE) {
        if (item.keywords.some((k) => q.includes(k))) {
          reply = item.reply;
          break;
        }
      }

      setMessages((prev) => [...prev, { sender: 'ai', text: reply }]);
    }, 600);
  };

  const contacts = app.contacts || [];
  const filteredContacts = contacts.filter((c) =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (c.email && c.email.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div 
      className="absolute inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/60 backdrop-blur-md animate-in fade-in duration-200 select-none"
      onClick={(e) => {
        e.stopPropagation();
        onClose();
      }}
    >
      <div 
        className="relative w-full max-w-xl max-h-[85%] bg-[#181a20]/95 border border-white/20 rounded-3xl shadow-2xl flex flex-col overflow-hidden text-white animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-white/10 bg-white/[0.03]">
          <div className="flex items-center gap-3">
            <div className={`w-11 h-11 rounded-2xl ${app.bg} flex items-center justify-center text-white shadow-md ring-1 ring-white/30`}>
              <app.icon className="w-6 h-6" strokeWidth={2.2} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">{app.name}</h3>
                <span className="text-[10px] font-semibold bg-white/20 px-2 py-0.5 rounded-full text-white/90">
                  {app.badge || 'Directory'}
                </span>
              </div>
              <p className="text-xs text-white/60">{app.description}</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white/80 hover:text-white transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: AI Assistant or Directory Listing */}
        {app.isAi ? (
          <div className="flex-1 flex flex-col p-4 sm:p-5 overflow-hidden">
            <div className="flex flex-wrap gap-2 mb-3">
              {AI_SUGGESTED_PILLS.map((pill, i) => (
                <button
                  key={i}
                  onClick={() => handleSendAi(pill)}
                  className="text-[11px] bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full text-white/80 hover:text-white transition border border-white/10 cursor-pointer"
                >
                  {pill}
                </button>
              ))}
            </div>

            <div className="flex-1 overflow-y-auto space-y-3 pr-1 min-h-[200px] max-h-[340px] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {messages.map((m, idx) => (
                <div 
                  key={idx} 
                  className={`flex gap-2.5 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {m.sender === 'ai' && (
                    <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-cyan-400 to-indigo-600 flex items-center justify-center shrink-0 text-white shadow-sm">
                      <Sparkles className="w-4 h-4" />
                    </div>
                  )}
                  <div 
                    className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-xs sm:text-sm leading-relaxed ${
                      m.sender === 'user'
                        ? 'bg-blue-600 text-white rounded-br-none'
                        : 'bg-white/10 text-white/90 rounded-bl-none border border-white/10'
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            <form 
              onSubmit={(e) => {
                e.preventDefault();
                handleSendAi();
              }}
              className="mt-3 flex items-center gap-2 pt-2 border-t border-white/10"
            >
              <input 
                type="text"
                placeholder="Ask directory question..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                className="flex-1 bg-white/10 rounded-xl px-4 py-2 text-xs sm:text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-white/15"
              />
              <button
                type="submit"
                className="p-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white transition cursor-pointer"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        ) : (
          <div className="flex-1 flex flex-col p-4 sm:p-5 overflow-hidden">
            <div className="relative mb-4">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40" />
              <input 
                type="text"
                placeholder={`Search ${app.name}...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/10 rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 border border-white/15"
              />
            </div>

            <div className="flex-1 overflow-y-auto space-y-2.5 pr-1 max-h-[380px] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {filteredContacts.length > 0 ? (
                filteredContacts.map((contact, idx) => (
                  <div 
                    key={idx}
                    className="p-3.5 rounded-2xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 transition flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center font-bold text-sm text-white/90 shrink-0">
                        {contact.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white">{contact.name}</h4>
                        <p className="text-[11px] text-white/60">{contact.role}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-end sm:self-center">
                      {contact.phone && (
                        <a 
                          href={`tel:${contact.phone}`}
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs text-white/90 font-medium border border-white/10 transition"
                        >
                          <Phone className="w-3.5 h-3.5 text-emerald-400" />
                          <span>{contact.phone}</span>
                        </a>
                      )}
                      {contact.email && (
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCopy(contact.email, idx);
                          }}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs text-white/90 font-medium border border-white/10 transition cursor-pointer"
                        >
                          {copiedIndex === idx ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                              <span className="text-emerald-300">Copied</span>
                            </>
                          ) : (
                            <>
                              <Mail className="w-3.5 h-3.5 text-sky-400" />
                              <span>Email</span>
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-white/50 text-xs">
                  No matching directory records found for "{searchQuery}".
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ============================================================================
// 3. CAMERA MODAL
// ============================================================================
function CameraModal({ onClose, wallpaper = DEFAULT_WALLPAPER }) {
  const [isShutterActive, setIsShutterActive] = useState(false);
  const [photoCount, setPhotoCount] = useState(0);

  const handleSnap = () => {
    setIsShutterActive(true);
    setTimeout(() => {
      setIsShutterActive(false);
      setPhotoCount((prev) => prev + 1);
    }, 250);
  };

  return (
    <div className="absolute inset-0 z-50 bg-black flex flex-col justify-between p-4 sm:p-6 animate-in fade-in zoom-in-95 duration-200">
      {isShutterActive && (
        <div className="absolute inset-0 bg-white z-50 pointer-events-none transition-opacity duration-150" />
      )}

      {/* Top Camera Controls */}
      <div className="flex items-center justify-between z-10 text-white/90">
        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-black/60 transition cursor-pointer"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        <div className="flex items-center gap-4 bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-xs font-medium">
          <span className="text-amber-400 flex items-center gap-1"><Zap className="w-3.5 h-3.5" /> Auto</span>
          <span className="w-1 h-1 rounded-full bg-white/40" />
          <span>HDR</span>
          <span className="w-1 h-1 rounded-full bg-white/40" />
          <span>RAW</span>
        </div>

        <div className="w-10 h-10" />
      </div>

      {/* Viewfinder Preview with Grid */}
      <div className="relative flex-1 my-3 rounded-2xl overflow-hidden border border-white/10 flex items-center justify-center">
        <img 
          src={wallpaper} 
          alt="Camera Viewfinder" 
          className="absolute inset-0 w-full h-full object-cover filter brightness-95 contrast-105" 
        />
        <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 pointer-events-none opacity-25">
          <div className="border-r border-b border-white" />
          <div className="border-r border-b border-white" />
          <div className="border-b border-white" />
          <div className="border-r border-b border-white" />
          <div className="border-r border-b border-white" />
          <div className="border-b border-white" />
          <div className="border-r border-b border-white" />
          <div className="border-r border-b border-white" />
          <div />
        </div>

        <div className="w-24 h-24 border border-amber-400/80 rounded-lg pointer-events-none animate-pulse flex items-center justify-center">
          <div className="w-1 h-1 bg-amber-400 rounded-full" />
        </div>
      </div>

      {/* Bottom Camera Toolbar */}
      <div className="flex items-center justify-around z-10 py-2">
        <div className="w-12 h-12 rounded-xl border-2 border-white/40 overflow-hidden relative shadow-md">
          <img src={wallpaper} alt="Thumbnail" className="w-full h-full object-cover" />
          {photoCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-amber-500 text-black text-[9px] font-bold px-1.5 rounded-full">
              {photoCount}
            </span>
          )}
        </div>

        <button
          onClick={handleSnap}
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-white flex items-center justify-center p-1 hover:scale-105 active:scale-95 transition cursor-pointer"
        >
          <div className="w-full h-full bg-white rounded-full transition-all duration-150 active:bg-neutral-300" />
        </button>

        <button 
          onClick={handleSnap}
          className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/30 text-white transition active:rotate-180 duration-300 cursor-pointer"
        >
          <RefreshCw className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
}

// ============================================================================
// 4. COVER SCREEN (Folded State Exterior View)
// ============================================================================
function CoverScreen({ onUnfold, wallpaper = DEFAULT_WALLPAPER }) {
  const { timeString, batteryLevel, isCharging } = useSystemStatus();

  return (
    <div 
      className="relative w-full h-full select-none overflow-hidden font-sans cursor-pointer group"
      onClick={(e) => {
        e.stopPropagation();
        onUnfold && onUnfold();
      }}
    >
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 pointer-events-none"
        style={{ backgroundImage: `url(${wallpaper})` }}
      />
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

      {/* Punch-Hole Camera */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#0a0a0d] rounded-full z-30 shadow-[inset_0_1px_2px_rgba(0,0,0,1)] border border-white/10 flex items-center justify-center pointer-events-none">
        <div className="w-1.5 h-1.5 rounded-full bg-blue-950/80 shadow-[inset_0_0_2px_rgba(255,255,255,0.4)]" />
      </div>

      {/* Top Status Bar */}
      <div className="absolute top-2.5 left-0 right-0 px-5 flex justify-between items-center text-[11px] text-white/90 z-20 font-medium pointer-events-none">
        <span className="font-semibold tracking-wide">{timeString}</span>
        <div className="flex items-center gap-2">
          <span className="text-[9px] font-bold tracking-wider bg-white/20 px-1 py-0.5 rounded-sm">5G</span>
          <Wifi className="w-3.5 h-3.5 text-white" />
          <div className="flex items-center gap-1.5">
            {isCharging && <Zap className="w-2.5 h-2.5 text-emerald-400 fill-emerald-400 animate-pulse" />}
            <span className="text-[10px] font-semibold">{batteryLevel}%</span>
            <div className="w-4 h-2 border border-white rounded-[2px] p-[1px] flex items-center">
              <div 
                className={`h-full rounded-[1px] transition-all duration-300 ${isCharging ? 'bg-emerald-400' : 'bg-white'}`} 
                style={{ width: `${batteryLevel}%` }} 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Center Hero: Contact Us Heading with Vibrant Multi-Color Gradients */}
      <div className="absolute top-[28%] left-0 right-0 flex flex-col items-center justify-center text-center z-20 pointer-events-none px-6">
        <h1 className="text-5xl sm:text-6xl font-black tracking-tight leading-tight select-none">
          <span className="bg-gradient-to-r from-sky-300 via-indigo-200 to-pink-300 bg-clip-text text-transparent drop-shadow-[0_4px_18px_rgba(0,0,0,0.85)]">
            Contact
          </span>{' '}
          <span className="bg-gradient-to-r from-amber-300 via-orange-300 to-rose-400 bg-clip-text text-transparent drop-shadow-[0_4px_18px_rgba(0,0,0,0.85)]">
            Us
          </span>
        </h1>

        {/* Colorful Accent Divider Bar */}
        <div className="mt-3.5 flex items-center justify-center gap-1.5">
          <div className="w-6 h-1 rounded-full bg-gradient-to-r from-sky-400 to-blue-500 shadow-sm" />
          <div className="w-10 h-1 rounded-full bg-gradient-to-r from-amber-400 to-rose-500 shadow-sm" />
          <div className="w-6 h-1 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 shadow-sm" />
        </div>

        <p className="mt-3 text-xs sm:text-sm font-medium text-white/95 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] max-w-[320px] leading-relaxed">
          Officers, Employees, Branches & AI Assistance
        </p>
      </div>

      {/* Bottom Home Indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
        <div className="w-28 h-1 bg-white/80 rounded-full" />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-60" />
    </div>
  );
}

// ============================================================================
// 5. UNLOCKED SCREEN (App Launcher View)
// ============================================================================
function UnlockedScreen({ onLock, wallpaper = DEFAULT_WALLPAPER }) {
  const [activeDirectory, setActiveDirectory] = useState(null);

  return (
    <div className="relative w-full h-full select-none overflow-hidden font-sans">
      <div 
        className="absolute inset-0 bg-cover bg-center pointer-events-none filter blur-[1px] scale-105"
        style={{ backgroundImage: `url(${wallpaper})` }}
      />
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      {/* Top Bar with Lock Action */}
      <div className="relative z-10 p-5 flex justify-between items-center text-white">
        <h2 className="text-xl font-bold tracking-tight">Institutional Portal</h2>
        <button 
          onClick={onLock}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/20 text-xs font-medium text-white transition active:scale-95 cursor-pointer"
        >
          <Lock className="w-3.5 h-3.5" />
          <span>Lock</span>
        </button>
      </div>

      {/* Grid of Directory Apps */}
      <div className="relative z-10 px-8 py-4">
        <div className="grid grid-cols-4 gap-6 max-w-2xl mx-auto">
          {DIRECTORY_APPS.map((app) => {
            const Icon = app.icon;
            return (
              <button
                key={app.id}
                onClick={() => { window.location.hash = '#coming-soon'; }}
                className="flex flex-col items-center gap-2 group cursor-pointer"
              >
                <div className={`w-16 h-16 rounded-2xl ${app.bg} flex items-center justify-center text-white shadow-xl ${app.shadow} group-hover:scale-105 transition duration-200 border border-white/20`}>
                  <Icon className="w-8 h-8 drop-shadow" strokeWidth={2.2} />
                </div>
                <span className="text-xs font-medium text-white/95 text-center leading-tight drop-shadow">
                  {app.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {activeDirectory && (
        <DirectoryModal 
          app={activeDirectory} 
          onClose={() => setActiveDirectory(null)} 
        />
      )}
    </div>
  );
}

// ============================================================================
// 6. LOCK SCREEN (Inner Screen with Contact Us & 8 Directory Apps)
// ============================================================================
function LockScreen({ 
  wallpaper = DEFAULT_WALLPAPER, 
  isFlashlightOn = false, 
  onToggleFold,
  onUserInteraction,
  setIsUnlocked,
  onSelectApp
}) {
  const [internalActiveDirectory, setInternalActiveDirectory] = useState(null);
  const activeDirectory = onSelectApp ? null : internalActiveDirectory;
  const [widgetInfoOpen, setWidgetInfoOpen] = useState(false);
  const { timeString, fullTimeString, dateString, batteryLevel, isCharging, isOnline } = useSystemStatus();

  return (
    <div 
      className="relative w-full h-full select-none overflow-hidden font-sans cursor-pointer"
      onClick={() => {
        onUserInteraction && onUserInteraction();
        onToggleFold && onToggleFold();
      }}
    >
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-500 pointer-events-none scale-[1.01]"
        style={{ 
          backgroundImage: `url(${wallpaper})`,
          filter: isFlashlightOn 
            ? 'brightness(1.18) contrast(1.05)' 
            : 'brightness(1.02) contrast(1.02) saturate(0.96)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-stone-900/10 via-transparent to-stone-950/25 pointer-events-none" />

      {isFlashlightOn && (
        <div className="absolute inset-0 bg-white/15 pointer-events-none transition-opacity duration-300" />
      )}

      {/* Page Header: Contact Us & 3 Cascading Lines */}
      <div className="absolute top-[6%] sm:top-[7%] md:top-[8%] left-0 right-0 flex flex-col items-center justify-center text-center z-20 pointer-events-none px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black text-white tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.65)] mb-2 sm:mb-3">
          {HEADER_CONTENT.title}
        </h1>
        <div className="flex flex-col items-center space-y-1.5 text-center drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] px-4 max-w-2xl">
          <p className="text-sm sm:text-[15px] md:text-[16px] text-white/95 font-medium tracking-normal leading-relaxed">
            {HEADER_CONTENT.lines[0]}
          </p>
          <p className="text-xs sm:text-[13.5px] md:text-[14.5px] text-white/85 font-normal tracking-normal leading-relaxed">
            {HEADER_CONTENT.lines[1]}
          </p>
          <p className="text-[11.5px] sm:text-[12.5px] md:text-[13.5px] text-white/75 font-normal tracking-normal leading-relaxed">
            {HEADER_CONTENT.lines[2]}
          </p>
        </div>
      </div>

      {/* Live System Status Widget (Top Right) */}
      <div 
        className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-7 md:right-8 z-30"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => {
            onUserInteraction && onUserInteraction();
            setWidgetInfoOpen(!widgetInfoOpen);
          }}
          className="group flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full bg-black/45 hover:bg-black/60 backdrop-blur-xl border border-white/20 hover:border-white/35 text-white shadow-xl transition-all duration-200 active:scale-95 cursor-pointer"
          title="Live System Status"
        >
          <span className="font-semibold text-xs sm:text-sm tracking-tight text-white/95">
            {timeString}
          </span>
          <span className="w-1 h-1 rounded-full bg-white/40" />
          
          <div className="flex items-center gap-1.5">
            {isCharging && (
              <Zap className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400 animate-pulse drop-shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
            )}
            <span className="font-bold text-xs sm:text-sm tracking-tight text-white/95">
              {batteryLevel}%
            </span>
            <div className="w-5 h-2.5 sm:w-6 sm:h-3 border border-white/80 rounded-[3px] p-[1.5px] flex items-center">
              <div 
                className={`h-full rounded-[1px] transition-all duration-300 ${isCharging ? 'bg-emerald-400' : 'bg-white'}`} 
                style={{ width: `${batteryLevel}%` }} 
              />
            </div>
          </div>
        </button>

        {widgetInfoOpen && (
          <div className="absolute right-0 top-12 sm:top-14 w-60 p-3.5 rounded-2xl bg-black/85 backdrop-blur-2xl border border-white/20 text-white shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-white/10 text-xs font-semibold text-white/90">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Live System Status
              </span>
              <span className="text-[10px] text-white/50 font-mono">Real-time</span>
            </div>

            <div className="space-y-2 text-xs text-white/85">
              <div className="flex justify-between items-center">
                <span className="text-white/60">Current Time</span>
                <span className="font-semibold text-white font-mono">{fullTimeString}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/60">Date</span>
                <span className="font-medium text-white">{dateString}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/60">Battery Level</span>
                <span className="font-bold text-emerald-400">{batteryLevel}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/60">Power Source</span>
                <span className="font-medium text-white flex items-center gap-1">
                  {isCharging ? (
                    <>
                      <Zap className="w-3 h-3 text-emerald-400 fill-emerald-400" />
                      <span>Connected (Charging)</span>
                    </>
                  ) : (
                    <span>On Battery</span>
                  )}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/60">Network</span>
                <span className="font-medium text-white flex items-center gap-1">
                  <span className={`w-1.5 h-1.5 rounded-full ${isOnline ? 'bg-emerald-400' : 'bg-rose-400'}`} />
                  <span>{isOnline ? 'Online' : 'Offline'}</span>
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 8 Directory App Icons (2 Rows of 4 Directly on Screen) */}
      <div 
        className="absolute bottom-14 sm:bottom-16 md:bottom-20 left-0 right-0 flex items-center justify-center z-30 px-3 sm:px-6 pointer-events-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="grid grid-cols-4 gap-x-4 sm:gap-x-8 md:gap-x-12 gap-y-4 sm:gap-y-6 md:gap-y-7 max-w-[640px] sm:max-w-[740px] md:max-w-[840px] w-full justify-items-center">
          {DIRECTORY_APPS.map((app) => {
            const Icon = app.icon;
            return (
              <button
                key={app.id}
                onClick={(e) => {
                  e.stopPropagation();
                  onUserInteraction && onUserInteraction();
                  window.location.hash = '#coming-soon';
                }}
                className="group flex flex-col items-center focus:outline-none cursor-pointer transition-transform duration-200"
              >
                <div 
                  className={`
                    relative w-13 h-13 sm:w-16 sm:h-16 md:w-17 md:h-17 lg:w-18 lg:h-18 rounded-[20px] sm:rounded-[24px] ${app.bg}
                    flex items-center justify-center text-white
                    shadow-xl ${app.shadow}
                    group-hover:scale-110 group-hover:-translate-y-1.5 group-active:scale-95
                    transition-all duration-200 ring-1 ring-white/35 overflow-hidden
                  `}
                >
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-8.5 md:h-8.5 drop-shadow-md text-white" strokeWidth={2.2} />
                  <div className="absolute inset-0 rounded-[20px] sm:rounded-[24px] bg-gradient-to-b from-white/40 via-white/10 to-transparent pointer-events-none" />
                </div>
                <span className="text-[12px] sm:text-[13px] md:text-[14px] font-semibold text-white text-center leading-snug max-w-[105px] sm:max-w-[125px] md:max-w-[145px] mt-2 drop-shadow-[0_2px_5px_rgba(0,0,0,0.95)]">
                  {app.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {activeDirectory && (
        <DirectoryModal 
          app={activeDirectory} 
          onClose={() => setInternalActiveDirectory(null)} 
        />
      )}

      {/* Bottom Home Indicator Bar */}
      <div 
        className="absolute bottom-2.5 sm:bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => {
            onUserInteraction && onUserInteraction();
            setIsUnlocked(true);
          }}
          className="group py-2 px-6 focus:outline-none cursor-pointer flex flex-col items-center"
        >
          <div className="w-36 sm:w-44 md:w-52 h-[4px] sm:h-[5px] bg-white/95 rounded-full shadow-[0_1px_4px_rgba(0,0,0,0.5)] group-hover:scale-105 group-hover:bg-white group-active:scale-95 transition-all duration-200" />
        </button>
      </div>
    </div>
  );
}

// ============================================================================
// 7. FOLDABLE PHONE (Desktop 3D Foldable Phone with Seamless Center Overlap)
// ============================================================================
function FoldablePhone() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isFlashlightOn, setIsFlashlightOn] = useState(false);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [activeDirectory, setActiveDirectory] = useState(null);
  const [scale, setScale] = useState(1);

  const phoneDepth = 14;
  const layers = Array.from({ length: phoneDepth });

  useEffect(() => {
    const handleResize = () => {
      const scaleX = (window.innerWidth - 60) / 1080;
      const scaleY = (window.innerHeight - 60) / 720;
      setScale(Math.min(1.0, Math.max(0.45, Math.min(scaleX, scaleY))));
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto sequence on page load/refresh:
  // Phone starts closed by default, then after ~1 second smoothly unfolds/opens!
  useEffect(() => {
    const openTimer = setTimeout(() => {
      if (!hasInteracted) {
        setIsOpen(true);
      }
    }, 1000);

    return () => {
      clearTimeout(openTimer);
    };
  }, [hasInteracted]);

  const handleFold = () => {
    setHasInteracted(true);
    setIsOpen(false);
  };

  const handleUnfold = () => {
    setHasInteracted(true);
    setIsOpen(true);
  };

  return (
    <div 
      className="relative w-full h-screen flex flex-col items-center justify-center bg-[#d2d5db] select-none overflow-hidden"
      style={{ perspective: '3000px' }}
      onClick={() => {
        if (!isOpen) {
          handleUnfold();
        }
      }}
    >
      <div className="absolute inset-0 bg-radial-[at_50%_45%] from-[#ebeef2] via-[#d6d9df] to-[#d2d5db] pointer-events-none" />

      {isFlashlightOn && (
        <div className="fixed inset-0 bg-amber-100/35 blur-3xl rounded-[60px] pointer-events-none transition-opacity duration-500 z-0" />
      )}

      {/* Responsive Scaling Wrapper */}
      <div 
        style={{ 
          transform: `scale(${scale})`, 
          transformStyle: "preserve-3d" 
        }}
        className="relative flex items-center justify-center transition-transform duration-300"
      >
        {/* Soft Drop Shadow on Floor */}
        <div 
          className="absolute -bottom-16 bg-black/45 blur-[45px] rounded-full pointer-events-none transition-all duration-700"
          style={{
            width: isOpen ? '1060px' : '530px',
            height: '80px',
            transform: 'translateZ(-140px)',
          }}
        />

        {/* Dual-Slab 3D Phone Mechanism */}
        <div 
          className="relative select-none"
          style={{ 
            width: '500px', 
            height: '660px',
            transformStyle: "preserve-3d",
            transform: isOpen ? "translateX(250px)" : "translateX(0px)",
            transition: "transform 750ms cubic-bezier(0.25, 1, 0.5, 1)"
          }}
        >
          {/* ================= RIGHT SLAB (Base / Right Half) ================= */}
          <div 
            className="absolute left-0 top-0 w-full h-full"
            style={{ 
              transformStyle: "preserve-3d",
              pointerEvents: isOpen ? 'auto' : 'none',
              zIndex: isOpen ? 10 : 1
            }}
          >
            {layers.map((_, index) => {
              const isBack = index === phoneDepth - 1;
              const zPos = -(index + 1);
              let layerColor = index % 2 === 0 ? '#1f2228' : '#14161a';
              if (index === 0) layerColor = '#2b2e35';
              if (isBack) layerColor = '#0f1114';
              
              return (
                <div 
                  key={`base-${index}`}
                  className="absolute inset-0 rounded-r-[38px] rounded-l-none pointer-events-none"
                  style={{
                    transform: `translateZ(${zPos}px)`,
                    backgroundColor: layerColor,
                    boxShadow: isBack ? '0 0 25px rgba(0,0,0,0.8)' : 'none'
                  }}
                />
              );
            })}

            {/* Right Inner Screen (Front Face) */}
            <div 
              className="absolute inset-0 bg-[#121316] rounded-r-[38px] rounded-l-none border-y border-r border-[#000]"
              style={{ 
                transform: "translateZ(0.5px)",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden"
              }}
            >
              {/* Hardware Buttons */}
              <div className="absolute -top-[3.5px] right-24 flex items-center gap-2 z-50">
                <div 
                  title="Volume Down"
                  className="w-11 h-[3.5px] bg-[#222428] rounded-t-sm border-t border-l border-r border-[#3a3d45] shadow-sm hover:brightness-125 cursor-pointer"
                />
                <div 
                  title="Volume Up"
                  className="w-11 h-[3.5px] bg-[#222428] rounded-t-sm border-t border-l border-r border-[#3a3d45] shadow-sm hover:brightness-125 cursor-pointer"
                />
              </div>

              <div className="absolute -right-[4.5px] top-20 z-50">
                <div 
                  title="Power Button"
                  className="w-[4.5px] h-14 bg-[#222428] rounded-r-sm border-t border-r border-b border-[#3a3d45] shadow-sm hover:brightness-125 cursor-pointer"
                />
              </div>

              {/* Seamless Inner Screen Container (Extends left-[-2px] across seam) */}
              <div className="absolute top-[10px] bottom-[10px] right-[10px] left-[-2px] bg-black rounded-r-[28px] overflow-hidden">
                <div className="absolute top-0 bottom-0 right-0 w-[980px] h-full z-0">
                  {isUnlocked ? (
                    <UnlockedScreen 
                      onLock={() => setIsUnlocked(false)} 
                      wallpaper={DEFAULT_WALLPAPER}
                      onSelectApp={(app) => {
                        setHasInteracted(true);
                        setActiveDirectory(app);
                      }}
                    /> 
                  ) : (
                    <LockScreen
                      wallpaper={DEFAULT_WALLPAPER}
                      isFlashlightOn={isFlashlightOn}
                      setIsFlashlightOn={(val) => {
                        setHasInteracted(true);
                        setIsFlashlightOn(val);
                      }}
                      onOpenCamera={() => {
                        setHasInteracted(true);
                        setIsCameraOpen(true);
                      }}
                      isUnlocked={isUnlocked}
                      setIsUnlocked={(val) => {
                        setHasInteracted(true);
                        setIsUnlocked(val);
                      }}
                      onToggleFold={handleFold}
                      onUserInteraction={() => setHasInteracted(true)}
                      onSelectApp={(app) => {
                        setHasInteracted(true);
                        setActiveDirectory(app);
                      }}
                    />
                  )}
                </div>

                <div className="absolute inset-0 z-10 bg-gradient-to-bl from-white/[0.04] via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Solid Hinge Spine Cover */}
            <div 
              className="absolute flex items-center justify-center z-40 pointer-events-none overflow-hidden"
              style={{
                top: '12px',
                bottom: '12px',
                left: '-1px',
                width: '26px',
                borderRadius: '6px 0 0 6px',
                transformOrigin: "left",
                transform: `rotateY(-90deg) translateX(-13px)`,
                display: isOpen ? 'none' : 'flex',
                opacity: isOpen ? 0 : 1,
                background: 'linear-gradient(to right, #1f232b 0%, #3e4450 30%, #252830 50%, #3e4450 70%, #1f232b 100%)',
                boxShadow: 'inset 0 0 8px rgba(0,0,0,0.7)',
                transition: "all 750ms cubic-bezier(0.25, 1, 0.5, 1)"
              }}
            >
              <span 
                className="absolute text-white/50 font-black tracking-[0.4em] whitespace-nowrap text-[10px]"
                style={{ 
                  top: '50%',
                  left: '13px',
                  transform: 'translate(-50%, -50%) rotate(-90deg)',
                  textShadow: '0 1px 2px rgba(0,0,0,0.8)'
                }}
              >
                FOLD
              </span>
            </div>
          </div>

          {/* ================= LEFT SLAB (Folding Cover / Left Half) ================= */}
          <div 
            onClick={(e) => {
              if (!isOpen) {
                e.stopPropagation();
                handleUnfold();
              }
            }}
            className={`absolute top-0 h-full ${!isOpen ? 'cursor-pointer' : ''}`}
            style={{ 
              left: '-500px', 
              width: '500px',
              transformOrigin: "right center", 
              transformStyle: "preserve-3d",
              transform: isOpen ? "rotateY(0deg)" : "rotateY(179.2deg)",
              zIndex: isOpen ? 25 : 50,
              transition: "transform 750ms cubic-bezier(0.25, 1, 0.5, 1), z-index 750ms"
            }}
          >
            {layers.map((_, index) => {
              const isBack = index === phoneDepth - 1;
              const zPos = -(index + 1);
              let layerColor = index % 2 === 0 ? '#1f2228' : '#14161a';
              if (index === 0) layerColor = '#2b2e35';
              if (isBack) layerColor = '#0f1114';
              
              return (
                <div 
                  key={`cover-${index}`}
                  className="absolute inset-0 rounded-l-[38px] rounded-r-none pointer-events-none"
                  style={{
                    transform: `translateZ(${zPos}px)`,
                    backgroundColor: layerColor,
                    boxShadow: isBack ? '0 0 25px rgba(0,0,0,0.8)' : 'none'
                  }}
                />
              );
            })}

            {/* Left Inner Screen (Front Face - visible when OPEN) */}
            <div 
              className="absolute inset-0 bg-[#121316] rounded-l-[38px] rounded-r-none border-y border-l border-[#000]"
              style={{ 
                transform: "translateZ(0.5px)",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                pointerEvents: isOpen ? 'auto' : 'none'
              }}
            >
              {/* Seamless Inner Screen Container (Extends right-[-2px] across seam) */}
              <div className="absolute top-[10px] bottom-[10px] left-[10px] right-[-2px] bg-black rounded-l-[28px] overflow-hidden">
                <div className="absolute top-0 bottom-0 left-0 w-[980px] h-full z-0">
                  {isUnlocked ? (
                    <UnlockedScreen 
                      onLock={() => setIsUnlocked(false)} 
                      wallpaper={DEFAULT_WALLPAPER}
                      onSelectApp={(app) => {
                        setHasInteracted(true);
                        setActiveDirectory(app);
                      }}
                    /> 
                  ) : (
                    <LockScreen
                      wallpaper={DEFAULT_WALLPAPER}
                      isFlashlightOn={isFlashlightOn}
                      setIsFlashlightOn={(val) => {
                        setHasInteracted(true);
                        setIsFlashlightOn(val);
                      }}
                      onOpenCamera={() => {
                        setHasInteracted(true);
                        setIsCameraOpen(true);
                      }}
                      isUnlocked={isUnlocked}
                      setIsUnlocked={(val) => {
                        setHasInteracted(true);
                        setIsUnlocked(val);
                      }}
                      onToggleFold={handleFold}
                      onUserInteraction={() => setHasInteracted(true)}
                      onSelectApp={(app) => {
                        setHasInteracted(true);
                        setActiveDirectory(app);
                      }}
                    />
                  )}
                </div>

                <div className="absolute inset-0 z-10 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Exterior Cover Screen (Back Face - Visible when FOLDED) */}
            <div 
              className="absolute inset-0 bg-[#121316] rounded-r-[38px] rounded-l-[6px] p-[10px] shadow-[inset_0_0_25px_rgba(0,0,0,0.9)] border border-[#2b2e35]"
              style={{ 
                transform: "translateZ(-14.5px) rotateY(180deg)", 
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                pointerEvents: isOpen ? 'none' : 'auto'
              }}
            >
              <div className="relative w-full h-full bg-black rounded-r-[28px] rounded-l-[4px] overflow-hidden">
                <CoverScreen onUnfold={handleUnfold} wallpaper={DEFAULT_WALLPAPER} />
              </div>
            </div>
          </div>

          {/* Top-Level Click Target when Folded */}
          {!isOpen && (
            <div 
              onClick={(e) => {
                e.stopPropagation();
                handleUnfold();
              }}
              className="absolute inset-0 z-[100] cursor-pointer"
              style={{
                transform: "translateZ(60px)",
                pointerEvents: "auto"
              }}
            />
          )}

          {/* Directory Modal for Foldable Phone - Unified Full Overlay */}
          {activeDirectory && (
            <div 
              className="absolute z-[90] pointer-events-auto rounded-[28px] overflow-hidden"
              style={{
                top: '10px',
                bottom: '10px',
                left: isOpen ? '-490px' : '0px',
                width: isOpen ? '980px' : '500px',
                transform: 'translateZ(50px)'
              }}
            >
              <DirectoryModal
                app={activeDirectory}
                onClose={() => setActiveDirectory(null)}
              />
            </div>
          )}

          {/* Camera Modal for Foldable Phone - Unified Full Overlay */}
          {isCameraOpen && (
            <div 
              className="absolute z-[90] pointer-events-auto rounded-[28px] overflow-hidden"
              style={{
                top: '10px',
                bottom: '10px',
                left: isOpen ? '-490px' : '0px',
                width: isOpen ? '980px' : '500px',
                transform: 'translateZ(50px)'
              }}
            >
              <CameraModal
                onClose={() => setIsCameraOpen(false)}
                wallpaper={DEFAULT_WALLPAPER}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 8. SMARTPHONE (Mobile-Only Responsive View for < 768px Viewports)
// ============================================================================
const PhoneScreenContent = ({ offsetTop = 0, timeString = "08:43", batteryLevel = 100, isCharging = false, onSelectApp }) => (
  <div 
    className="absolute w-full h-[708px] bg-[#121620] flex flex-col z-10 overflow-hidden font-sans select-none"
    style={{ top: offsetTop, left: 0 }}
  >
    <div 
      className="absolute inset-0 bg-cover bg-center pointer-events-none z-0 scale-105"
      style={{ backgroundImage: `url('${DEFAULT_WALLPAPER}')` }}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/70 pointer-events-none z-0" />

    {/* Status Bar */}
    <div className="w-full px-4 pt-3 flex justify-between items-center text-[10px] text-white/90 drop-shadow-sm z-20 font-mono">
      <div className="flex items-center gap-1 font-bold tracking-wide">
        <span>{timeString}</span>
      </div>
      
      {/* Punch Hole Camera */}
      <div className="absolute left-1/2 top-2.5 -translate-x-1/2 w-[18px] h-[18px] bg-gradient-to-b from-[#111] to-[#222] rounded-full z-30 shadow-[0_1px_2px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(0,0,0,1),inset_0_-1px_1px_rgba(255,255,255,0.3)] border border-[#000] flex items-center justify-center">
         <div className="w-2.5 h-2.5 rounded-full bg-[#050505] shadow-[inset_0_1px_2px_rgba(0,0,0,1)] flex items-center justify-center relative overflow-hidden border border-white/5">
            <div className="w-1 h-1 rounded-full bg-blue-900/40"></div>
            <div className="absolute top-0 right-0 w-2 h-1 bg-white/20 rounded-full blur-[0.5px] rotate-45"></div>
         </div>
      </div>

      <div className="flex items-center gap-1.5 opacity-80">
        <span className="tracking-widest font-bold">5G</span>
        <div className="flex items-center gap-1">
          {isCharging && <FaBolt className="text-green-500 w-2.5 h-2.5" />}
          <div className="flex items-center">
            <div className={`w-4 h-2.5 border ${isCharging ? 'border-green-400' : 'border-white/70'} rounded-sm p-[1px] flex items-center`}>
                <div className={`h-full ${isCharging ? 'bg-green-400' : 'bg-white/90'} rounded-[1px] transition-all`} style={{ width: `${batteryLevel}%` }}></div>
            </div>
            <div className={`w-[1px] h-1 ${isCharging ? 'bg-green-400' : 'bg-white/70'} rounded-r-sm`}></div>
          </div>
        </div>
      </div>
    </div>

    {/* Upper Section: Contact Us Header & High-Legibility Description */}
    <div className="relative z-10 px-4 pt-5 pb-2 text-center pointer-events-none">
      <h2 className="text-[25px] font-black text-white tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)] mb-1.5">
        <span className="bg-gradient-to-r from-sky-300 via-indigo-200 to-pink-300 bg-clip-text text-transparent">
          Contact
        </span>{' '}
        <span className="bg-gradient-to-r from-amber-300 via-orange-300 to-rose-400 bg-clip-text text-transparent">
          Us
        </span>
      </h2>
      <div className="flex items-center justify-center gap-1.5 mb-2">
        <div className="w-4 h-0.5 rounded-full bg-gradient-to-r from-sky-400 to-blue-500 shadow-sm" />
        <div className="w-7 h-0.5 rounded-full bg-gradient-to-r from-amber-400 to-rose-500 shadow-sm" />
        <div className="w-4 h-0.5 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 shadow-sm" />
      </div>
      <div className="flex flex-col items-center space-y-1.5 max-w-[295px] mx-auto text-center px-1">
        <p className="text-[12.5px] text-white font-medium leading-snug drop-shadow-[0_1px_4px_rgba(0,0,0,0.95)]">
          {HEADER_CONTENT.lines[0]}
        </p>
        <p className="text-[11.5px] text-white/90 font-normal leading-snug drop-shadow-[0_1px_4px_rgba(0,0,0,0.95)]">
          {HEADER_CONTENT.lines[1]}
        </p>
        <p className="text-[11px] text-white/80 font-normal leading-snug drop-shadow-[0_1px_4px_rgba(0,0,0,0.95)]">
          {HEADER_CONTENT.lines[2]}
        </p>
      </div>
    </div>

    <div className="flex-1" />

    {/* Lower Section: 8 Directory Icons (Lifted Up with Fully Visible Names) */}
    <div className="relative z-10 px-2 pb-16 w-full" onClick={(e) => e.stopPropagation()}>
      <div className="grid grid-cols-4 gap-x-1.5 gap-y-4 justify-items-center">
        {DIRECTORY_APPS.map((app) => {
          const Icon = app.icon;
          return (
            <button
              key={app.id}
              onClick={(e) => {
                e.stopPropagation();
                window.location.hash = '#coming-soon';
              }}
              className="flex flex-col items-center gap-1.5 focus:outline-none cursor-pointer group"
            >
              <div 
                className={`
                  w-[48px] h-[48px] rounded-[16px] ${app.bg}
                  flex items-center justify-center text-white
                  shadow-lg ${app.shadow}
                  group-hover:scale-105 active:scale-95
                  transition-all duration-200 ring-1 ring-white/35 relative overflow-hidden
                `}
              >
                <Icon className="w-5 h-5 text-white drop-shadow" strokeWidth={2.2} />
                <div className="absolute inset-0 rounded-[16px] bg-gradient-to-b from-white/35 via-transparent to-transparent pointer-events-none" />
              </div>
              <span className="text-[10px] font-semibold text-white/95 text-center leading-[1.25] max-w-[74px] drop-shadow-[0_1px_4px_rgba(0,0,0,1)] break-words">
                {app.name}
              </span>
            </button>
          );
        })}
      </div>
    </div>

    {/* Bottom Home Indicator */}
    <div className="w-full flex justify-center pb-2 relative z-10 pointer-events-none">
      <div className="w-24 h-1 bg-white/80 rounded-full shadow" />
    </div>
  </div>
);

function Smartphone() {
  const [isClosed, setIsClosed] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [scale, setScale] = useState(1);
  const [activeDirectory, setActiveDirectory] = useState(null);
  const { timeString, batteryLevel, isCharging } = useSystemStatus();

  useEffect(() => {
    const handleResize = () => {
      const scaleX = window.innerWidth / 360;
      const scaleY = window.innerHeight / 850;
      setScale(Math.min(1, scaleX, scaleY));
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto sequence on page load/refresh:
  // Phone starts closed by default, then after ~1 second smoothly unfolds/opens!
  useEffect(() => {
    const openTimer = setTimeout(() => {
      if (!hasInteracted) {
        setIsClosed(false);
      }
    }, 1000);

    return () => {
      clearTimeout(openTimer);
    };
  }, [hasInteracted]);

  return (
    <div 
      className="flex flex-col items-center justify-center h-full bg-[#d2d5db] overflow-hidden w-full select-none"
      style={{ perspective: "1500px" }}
    >
      <motion.div 
        initial={false}
        animate={{ y: isClosed ? -180 : 0, scale }}
        transition={{ duration: 0.75, ease: [0.25, 1, 0.5, 1] }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative w-[340px] h-[720px] cursor-pointer group"
        onClick={() => {
          setHasInteracted(true);
          setIsClosed((prev) => !prev);
        }}
      >
        {/* Floor Shadow */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/25 rounded-[30px] blur-[25px] transition-all duration-[750ms] ease-[cubic-bezier(0.25,1,0.5,1)]" style={{ top: isClosed ? "360px" : "0px", transform: "translateZ(-80px) scale(1.02)" }}></div>

        {/* BOTTOM HALF */}
        <div className="absolute bottom-0 w-full h-[360px]" style={{ transformStyle: "preserve-3d", zIndex: 10 }}>
          <div className="absolute bottom-0 left-4 right-4 h-[16px] bg-gradient-to-b from-[#151926] to-[#0a0c12] origin-bottom flex items-center justify-center px-6 gap-3 border-t border-white/5" style={{ transform: "rotateX(-90deg) translateZ(-8px)" }}>
             <div className="w-1 h-1 bg-black rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]"></div>
             <div className="flex-1 max-w-[20px] h-1.5 bg-black rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]"></div>
             <div className="flex gap-[2px]"><div className="w-1 h-2 bg-black rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]"></div><div className="w-1 h-2 bg-black rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]"></div><div className="w-1 h-2 bg-black rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]"></div></div>
          </div>
          <div className="absolute left-0 top-0 bottom-4 w-[16px] bg-gradient-to-r from-[#2a3142] to-[#151926] origin-left border-r border-white/5" style={{ transform: "rotateY(-90deg) translateZ(-8px)" }}></div>
          <div className="absolute right-0 top-0 bottom-4 w-[16px] bg-gradient-to-l from-[#2a3142] to-[#151926] origin-right border-l border-white/5" style={{ transform: "rotateY(90deg) translateZ(-8px)" }}></div>

          <div className="absolute inset-0 overflow-hidden rounded-b-[32px] rounded-t-none" style={{ transform: "translateZ(8px)", backfaceVisibility: "hidden" }}>
            <div className="absolute left-0 right-0 bottom-0 bg-gradient-to-b from-[#0f1322] to-[#05070a] pb-[2px] px-[2px] rounded-b-[32px] shadow-[inset_0_0_10px_rgba(0,0,0,0.9)]" style={{ top: "0px", transition: isClosed ? "none" : "all 0.3s" }}>
              <div className="w-full h-full bg-[#050505] rounded-b-[30px] pb-[6px] px-[6px] shadow-[inset_0_0_20px_rgba(0,0,0,1)] relative">
                 <div className="w-full h-full bg-[#050505] rounded-b-[24px] overflow-hidden relative">
                    <PhoneScreenContent 
                      offsetTop={-352} 
                      timeString={timeString} 
                      batteryLevel={batteryLevel} 
                      isCharging={isCharging}
                      onSelectApp={(app) => {
                        setHasInteracted(true);
                        setActiveDirectory(app);
                      }}
                    /> 
                 </div>
              </div>
            </div>
          </div>

          <div className="absolute -inset-[0.5px] bg-gradient-to-b from-[#1a202c] to-[#0f131a] rounded-t-[32px] rounded-b-none shadow-[inset_0_0_30px_rgba(0,0,0,0.6)] border border-white/5 flex flex-col justify-end pb-8 items-center" style={{ transform: "rotateX(180deg) translateZ(8px)", backfaceVisibility: "hidden" }}>
            <div className="flex gap-2 opacity-20 text-gray-500">
               <div className="w-6 h-6 border-2 border-gray-500 rounded-full flex items-center justify-center text-[6px] font-bold">CE</div>
            </div>
          </div>
        </div>

        {/* TOP HALF */}
        <motion.div 
          initial={false}
          animate={{ rotateX: isClosed ? -180 : 0, z: isClosed ? 1 : 0 }}
          transition={{ duration: 0.75, ease: [0.25, 1, 0.5, 1] }}
          className="absolute top-0 w-full h-[360px]"
          style={{ transformOrigin: "50% 100% 8px", transformStyle: "preserve-3d", zIndex: isClosed ? 30 : 20 }}
        >
          {/* Hardware Buttons */}
          <div className="absolute top-[80px] -left-[4px] w-[4px] h-[45px] bg-gradient-to-r from-[#8ba1b5] via-[#4a5468] to-[#0f131a] rounded-l-[4px] shadow-[inset_1px_0_2px_rgba(255,255,255,0.6),-2px_2px_4px_rgba(0,0,0,0.8)] border-y border-l border-[#000000] z-0" style={{ transform: "translateZ(0px)" }}></div>
          <div className="absolute top-[135px] -left-[4px] w-[4px] h-[45px] bg-gradient-to-r from-[#8ba1b5] via-[#4a5468] to-[#0f131a] rounded-l-[4px] shadow-[inset_1px_0_2px_rgba(255,255,255,0.6),-2px_2px_4px_rgba(0,0,0,0.8)] border-y border-l border-[#000000] z-0" style={{ transform: "translateZ(0px)" }}></div>
          
          <div className="absolute top-[110px] -right-[4px] w-[4px] h-[55px] bg-gradient-to-l from-[#8ba1b5] via-[#4a5468] to-[#0f131a] rounded-r-[4px] shadow-[inset_-1px_0_2px_rgba(255,255,255,0.6),2px_2px_4px_rgba(0,0,0,0.8)] border-y border-r border-[#000000] flex flex-col justify-evenly overflow-hidden z-0" style={{ transform: "translateZ(0px)" }}>
             <div className="w-full h-[1px] bg-black/80"></div>
             <div className="w-full h-[1px] bg-white/20"></div>
             <div className="w-full h-[1px] bg-black/80"></div>
             <div className="w-full h-[1px] bg-white/20"></div>
          </div>

          <div className="absolute top-0 left-4 right-4 h-[16px] bg-gradient-to-b from-[#2a3142] to-[#151926] origin-top border-b border-white/5" style={{ transform: "rotateX(90deg) translateZ(-8px)" }}></div>
          <div className="absolute left-0 top-4 bottom-0 w-[16px] bg-gradient-to-r from-[#2a3142] to-[#151926] origin-left border-r border-white/5" style={{ transform: "rotateY(-90deg) translateZ(-8px)" }}></div>
          <div className="absolute right-0 top-4 bottom-0 w-[16px] bg-gradient-to-l from-[#2a3142] to-[#151926] origin-right border-l border-white/5" style={{ transform: "rotateY(90deg) translateZ(-8px)" }}></div>

          <div className="absolute inset-0 overflow-hidden rounded-t-[32px] rounded-b-none" style={{ transform: "translateZ(8px)", backfaceVisibility: "hidden" }}>
            <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-[#2a3142] to-[#0f1322] pt-[2px] px-[2px] rounded-t-[32px] shadow-[inset_0_0_10px_rgba(0,0,0,0.9)]" style={{ bottom: "0px", transition: isClosed ? "none" : "all 0.3s" }}>
              <div className="w-full h-full bg-[#050505] rounded-t-[30px] pt-[6px] px-[6px] shadow-[inset_0_0_20px_rgba(0,0,0,1)] relative">
                 <div className="absolute top-[1.5px] left-1/2 -translate-x-1/2 w-12 h-1 bg-[#111] rounded-full shadow-[inset_0_1px_2px_rgba(0,0,0,1)] border-b border-white/10 z-50"></div>
                 <div className="w-full h-full bg-[#050505] rounded-t-[24px] overflow-hidden relative">
                    <PhoneScreenContent 
                      offsetTop={0} 
                      timeString={timeString} 
                      batteryLevel={batteryLevel} 
                      isCharging={isCharging}
                      onSelectApp={(app) => {
                        setHasInteracted(true);
                        setActiveDirectory(app);
                      }}
                    />
                 </div>
              </div>
            </div>
          </div>

          <div className="absolute -inset-[0.5px] bg-[#091423] rounded-b-[32px] rounded-t-none overflow-hidden flex flex-col shadow-inner border border-[#383B3D]" style={{ transform: "rotateX(180deg) translateZ(8px)", backfaceVisibility: "hidden" }}>
             <div className="absolute inset-[2px] bg-gradient-to-br from-[#DFF9FE] to-[#DBE5F3] rounded-b-[30px] rounded-t-none flex flex-col items-center justify-center shadow-[inset_0_0_20px_rgba(255,255,255,0.8)]">
                <div className="flex flex-col items-center text-center px-4 transform -translate-y-4">
                    <h2 className="text-3xl font-black tracking-tight leading-none mb-1.5">
                      <span className="bg-gradient-to-r from-sky-600 via-indigo-700 to-purple-700 bg-clip-text text-transparent drop-shadow-sm">
                        Contact
                      </span>{' '}
                      <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600 bg-clip-text text-transparent drop-shadow-sm">
                        Us
                      </span>
                    </h2>

                    <div className="flex items-center justify-center gap-1 my-1.5">
                      <div className="w-4 h-0.5 rounded-full bg-sky-500" />
                      <div className="w-7 h-0.5 rounded-full bg-amber-500" />
                      <div className="w-4 h-0.5 rounded-full bg-emerald-500" />
                    </div>

                    <p className="text-[10px] text-slate-600 font-medium max-w-[190px] leading-snug mt-1">
                      Officers, Faculty & AI Assistance
                    </p>
                 </div>

                 {/* Dual Camera Module */}
                <div className="absolute bottom-6 right-5 flex items-center gap-4">
                   <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#ffffff] to-[#e2e8f0] shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_2px_5px_rgba(0,0,0,0.15)] border border-[#cbd5e1] flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-[2px] rounded-full border border-[#94a3b8]/30"></div>
                      <div className="w-[10px] h-[10px] rounded-full bg-gradient-to-tr from-[#fef08a] via-[#fde047] to-[#fef08a] shadow-[0_0_4px_rgba(250,204,21,0.6),inset_0_0_2px_rgba(202,138,4,0.8)] flex items-center justify-center">
                         <div className="w-[2px] h-[2px] bg-white rounded-full blur-[0.5px]"></div>
                      </div>
                   </div>
                   
                   {[1, 2].map((cam) => (
                     <div key={cam} className="w-[68px] h-[68px] rounded-full bg-gradient-to-br from-[#9ca3af] via-[#334155] to-[#0f172a] p-[2px] shadow-[0_6px_15px_rgba(0,0,0,0.4),inset_0_1px_2px_rgba(255,255,255,0.5)] border border-[#000] relative flex items-center justify-center">
                       <div className="w-full h-full rounded-full bg-[#05070a] p-[4px] shadow-[inset_0_5px_10px_rgba(0,0,0,0.9)] flex items-center justify-center relative border border-white/10">
                          <div className="w-full h-full rounded-full bg-gradient-to-br from-[#0c1922] via-[#050a0d] to-[#020405] flex items-center justify-center overflow-hidden relative shadow-[inset_0_0_15px_rgba(0,0,0,1)] border border-[#111]">
                             <div className="absolute -top-1 -left-1 w-6 h-6 bg-gradient-to-br from-[#30B9CF]/50 to-transparent rounded-full blur-[1px]"></div>
                             <div className="absolute bottom-1 right-1 w-8 h-4 bg-gradient-to-t from-[#818cf8]/30 to-transparent rounded-full blur-[2px] -rotate-45"></div>
                             <div className="absolute top-[8%] left-[12%] right-[12%] h-[35%] border-t-[2px] border-white/25 rounded-t-full opacity-70 blur-[0.5px]"></div>
                             <div className="w-[16px] h-[16px] rounded-full bg-black border border-white/10 relative flex items-center justify-center shadow-[inset_0_0_4px_rgba(255,255,255,0.15)]">
                                <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#0c2431] to-[#000]"></div>
                             </div>
                          </div>
                       </div>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </motion.div>
      </motion.div>

      {activeDirectory && (
        <DirectoryModal
          app={activeDirectory}
          onClose={() => setActiveDirectory(null)}
        />
      )}
    </div>
  );
}

// ============================================================================
// 9. MAIN APP COMPONENT (Responsive Switcher between Desktop & Mobile)
// ============================================================================
export default function ContactUsPage({ onClose }) {
  const [isMobileViewport, setIsMobileViewport] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileViewport(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else if (onClose) {
      onClose();
    } else {
      window.location.hash = '#home';
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  };

  const handleHome = () => {
    if (onClose) onClose();
    window.location.hash = '#home';
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  return (
    <div className="relative w-full h-screen bg-[#d2d5db] overflow-hidden flex items-center justify-center">
      {/* Top Left Navigation Buttons (Back & Home) */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-50 flex items-center gap-2">
        <button
          type="button"
          onClick={handleBack}
          className="inline-flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white/90 backdrop-blur-md px-3.5 py-2 text-xs sm:text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-slate-100 hover:text-slate-900 cursor-pointer active:scale-95"
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

      {isMobileViewport ? (
        <main className="mobile-only-app w-full h-screen flex items-center justify-center bg-[#d2d5db] overflow-hidden">
          <Smartphone />
        </main>
      ) : (
        <FoldablePhone />
      )}
    </div>
  );
}
