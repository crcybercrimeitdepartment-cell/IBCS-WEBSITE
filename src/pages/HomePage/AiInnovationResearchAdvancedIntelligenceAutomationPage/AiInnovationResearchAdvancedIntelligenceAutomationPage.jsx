import React, { useEffect, useRef, useState } from 'react';
import {
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  Infinity as InfinityIcon,
  PenTool,
  Radio,
  Server,
  ShieldCheck,
  Smartphone,
  StickyNote,
  TestTube2,
  Waypoints,
  Home,
  ArrowLeft
} from 'lucide-react';
import { AiInnovationResearchAdvancedIntelligenceAutomationData } from './AiInnovationResearchAdvancedIntelligenceAutomationData';

const AI_INNOVATION_PAGE_STYLES = `
.ai-innovation-page {
  min-height: 100vh;
  padding: 32px 24px 72px;
  background: #fff;
  font-family: Inter, Arial, sans-serif;
}

.ai-innovation-page__nav {
  max-width: 1280px;
  margin: 0 auto 28px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.ai-nav-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 18px;
  border-radius: 12px;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

.ai-nav-btn:active {
  transform: scale(0.96);
}

.ai-nav-btn--back {
  background: #081E52;
  color: #fff;
  border: 1px solid rgba(212, 175, 55, 0.4);
}

.ai-nav-btn--back:hover {
  background: #0c2b7a;
}

.ai-nav-btn--home {
  background: #D4AF37;
  color: #040A1A;
  border: 1px solid #D4AF37;
}

.ai-nav-btn--home:hover {
  background: #E5C158;
}

.ai-innovation-page__header {
  max-width: 896px;
  margin: 0 auto 42px;
  text-align: center;
}

.ai-innovation-page__header h1 {
  margin: 0 auto 16px;
  color: #00383b;
  font-family: Manrope, Inter, Arial, sans-serif;
  font-size: clamp(30px, 4vw, 48px);
  font-weight: 800;
  line-height: 1.18;
}

.heading-line { display: block; }
.heading-word { display: inline-block; white-space: nowrap; }
.heading-word:not(:last-child) { margin-right: .24em; }

.heading-letter {
  display: inline-block;
  transform-origin: center bottom;
  animation: headingLetterBounce 620ms ease-out both;
  animation-delay: var(--letter-delay);
}

@keyframes headingLetterBounce {
  0% { transform: translate(40px, -14px) scale(.9); }
  48% { transform: translate(-11px, 3px) scale(1.08); }
  72% { transform: translate(6px, -2px) scale(.98); }
  88% { transform: translate(-2px, 1px) scale(1.01); }
  100% { transform: translate(0, 0) scale(1); }
}

.ai-innovation-page__header p {
  max-width: 768px;
  margin: 0 auto 14px;
  color: #000;
  font-size: clamp(14px, 1.5vw, 16px);
  line-height: 1.625;
  text-align: center;
}

.notice-board {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 13px;
  border: 1px solid #855026;
  border-radius: 2px;
  background:
    repeating-linear-gradient(90deg, rgba(68, 37, 14, .08) 0 2px, rgba(255, 232, 181, .08) 4px 13px, transparent 14px 32px),
    linear-gradient(145deg, #a96e3b, #d0a06a 43%, #a46a37 76%, #8e562d);
  box-shadow:
    inset 0 2px 2px rgba(255, 242, 212, .72),
    inset 0 -4px 5px rgba(72, 37, 11, .42),
    0 16px 30px rgba(65, 42, 23, .18);
}

.notice-board__surface {
  padding: clamp(26px, 3.7vw, 50px);
  border: 3px solid #744323;
  background-color: #a2693c;
  background-image:
    radial-gradient(rgba(66, 33, 15, .25) .8px, transparent 1px),
    radial-gradient(rgba(249, 201, 139, .2) .8px, transparent 1.2px),
    linear-gradient(135deg, #a96e40, #94572f 55%, #a5683b);
  background-position: 0 0, 4px 5px, 0 0;
  background-size: 7px 8px, 11px 12px, auto;
  box-shadow: inset 0 0 24px rgba(55, 28, 11, .36);
}

.notice-board__grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 34px 30px;
  align-items: stretch;
}

.paper-card {
  --paper-color: #f5f2e9;
  --paper-rule: rgba(97, 128, 146, .16);
  position: relative;
  isolation: isolate;
  display: flex;
  flex-direction: column;
  min-width: 0;
  height: 290px;
  padding: 44px 20px 20px;
  overflow: hidden;
  color: #473b32;
  background:
    linear-gradient(140deg, rgba(255, 255, 255, .35), transparent 48%),
    var(--paper-color);
  box-shadow:
    4px 9px 11px rgba(48, 25, 11, .35),
    0 2px 3px rgba(49, 26, 12, .2),
    inset 0 0 0 1px rgba(255, 255, 255, .28);
  opacity: 0;
  transform: translate(-10px, -46px) rotate(calc(var(--paper-tilt) - 5deg)) scale(1.04);
}

.paper-card--placed {
  animation: paperPinIn 650ms cubic-bezier(.22, 1, .36, 1) both;
  animation-delay: var(--appear-delay);
}

@keyframes paperPinIn {
  0% {
    opacity: 0;
    transform: translate(-10px, -46px) rotate(calc(var(--paper-tilt) - 5deg)) scale(1.04);
  }
  65% {
    opacity: 1;
    transform: translate(0, 6px) rotate(calc(var(--paper-tilt) + 1deg)) scale(.99);
  }
  100% {
    opacity: 1;
    transform: translate(0, 0) rotate(var(--paper-tilt)) scale(1);
  }
}

.paper-card::before {
  position: absolute;
  z-index: -1;
  inset: 0;
  content: '';
  background: repeating-linear-gradient(to bottom, transparent 0 25px, var(--paper-rule) 26px 27px);
  opacity: .8;
  pointer-events: none;
}

.paper-card--lemon { --paper-color: #e9eeb8; --paper-rule: rgba(100, 130, 83, .2); }
.paper-card--blue { --paper-color: #d6e5e5; --paper-rule: rgba(92, 132, 151, .22); }
.paper-card--white { --paper-color: #f3f2ec; --paper-rule: rgba(94, 129, 157, .13); }
.paper-card--notebook { --paper-color: #f5f3ed; --paper-rule: rgba(100, 139, 177, .21); padding-left: 28px; }
.paper-card--folded { --paper-color: #f0efea; --paper-rule: rgba(101, 126, 158, .08); }
.paper-card--ivory { --paper-color: #eee9d8; --paper-rule: rgba(101, 131, 154, .18); }
.paper-card--rose { --paper-color: #efb9c3; --paper-rule: rgba(151, 77, 95, .19); }
.paper-card--mint { --paper-color: #dcebcf; --paper-rule: rgba(89, 134, 94, .2); }
.paper-card--lavender { --paper-color: #e9e3ee; --paper-rule: rgba(116, 104, 144, .16); }

.paper-card--folded::after {
  position: absolute;
  inset: 0;
  content: '';
  background: linear-gradient(90deg, transparent 48%, rgba(78, 76, 72, .08) 50%, rgba(255, 255, 255, .28) 51%, transparent 53%);
  pointer-events: none;
}

.paper-card__holes {
  position: absolute;
  top: 19px;
  bottom: 12px;
  left: 7px;
  width: 11px;
  background: radial-gradient(circle, #7e5031 2px, #e9e7df 2.5px, transparent 4px) center top / 11px 21px repeat-y;
  opacity: .78;
}

.paper-card__pin {
  position: absolute;
  z-index: 3;
  top: 10px;
  left: 50%;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 28%, rgba(255, 255, 255, .7), transparent 28%), var(--pin-color);
  box-shadow: inset -2px -3px 3px rgba(0, 0, 0, .26), 1px 3px 3px rgba(45, 25, 12, .38);
  opacity: 0;
  transform: translate(-50%, -16px) scale(1.5);
}

.paper-card--placed .paper-card__pin {
  animation: pushPinIn 320ms cubic-bezier(.2, 1.5, .4, 1) both;
  animation-delay: calc(var(--appear-delay) + 370ms);
}

@keyframes pushPinIn {
  0% { opacity: 0; transform: translate(-50%, -16px) scale(1.5); }
  70% { opacity: 1; transform: translate(-50%, 2px) scale(.86); }
  100% { opacity: 1; transform: translate(-50%, 0) scale(1); }
}

.paper-card__pin::after {
  position: absolute;
  z-index: -1;
  top: 10px;
  left: 7px;
  width: 2px;
  height: 10px;
  content: '';
  background: #504b43;
  box-shadow: 1px 1px 2px rgba(39, 29, 20, .4);
  transform: rotate(12deg);
}

.paper-card__heading {
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 11px;
  min-height: 52px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(79, 72, 60, .32);
}

.paper-card__icon {
  flex: 0 0 auto;
  color: #6d5540;
}

.paper-card h2 {
  margin: 1px 0 0;
  font-family: Manrope, Inter, Arial, sans-serif;
  font-size: clamp(14px, 1.35vw, 18px);
  font-weight: 700;
  line-height: 1.25;
  text-align: center;
}

.paper-card__description {
  flex: 1 1 auto;
  min-height: 0;
  margin: 12px 0 0;
  padding-right: 6px;
  overflow-y: auto;
  overscroll-behavior: contain;
  font-size: 15px;
  line-height: 1.55;
  text-align: center;
  scrollbar-color: rgba(105, 78, 55, .62) transparent;
  scrollbar-width: thin;
}

.paper-card__description::-webkit-scrollbar {
  width: 5px;
}

.paper-card__description::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background: rgba(105, 78, 55, .62);
}

@media (max-width: 1060px) {
  .notice-board__grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
}

@media (max-width: 760px) {
  .notice-board__grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 28px 22px; }
  .paper-card { padding-right: 16px; padding-left: 16px; }
  .paper-card--notebook { padding-left: 26px; }
  .paper-card h2 { font-size: 15px; }
  .paper-card__description { font-size: 14px; }
}

@media (max-width: 480px) {
  .ai-innovation-page { padding: 24px 8px 54px; }
  .ai-innovation-page__header { margin-bottom: 34px; }
  .notice-board { padding: 6px; }
  .notice-board__surface { padding: 12px; border-width: 2px; }
  .notice-board__grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 20px 10px; }
  .paper-card { height: 260px; padding: 39px 9px 10px; }
  .paper-card--notebook { padding-left: 15px; }
  .paper-card__holes { left: 2px; width: 8px; background-size: 8px 17px; }
  .paper-card__heading { gap: 5px; min-height: 55px; padding-bottom: 6px; }
  .paper-card__icon { width: 18px; height: 18px; }
  .paper-card h2 { font-size: clamp(10px, 3.1vw, 13px); overflow-wrap: anywhere; }
  .paper-card__description { margin-top: 8px; padding-right: 3px; font-size: 11px; line-height: 1.4; }
}

@media (prefers-reduced-motion: reduce) {
  .heading-letter { animation: none; opacity: 1; filter: none; transform: none; }
  .paper-card, .paper-card--placed, .paper-card__pin, .paper-card--placed .paper-card__pin { animation: none; opacity: 1; }
  .paper-card, .paper-card--placed { transform: rotate(var(--paper-tilt)); }
  .paper-card__pin, .paper-card--placed .paper-card__pin { transform: translateX(-50%); }
}
`;

const ICON_MAP = {
  frontend: Code2,
  backend: Server,
  cloud: Cloud,
  'ai-ml': BrainCircuit,
  database: Database,
  cybersecurity: ShieldCheck,
  devops: InfinityIcon,
  'api-gateway': Waypoints,
  'mobile-app': Smartphone,
  'ui-ux': PenTool,
  'qa-testing': TestTube2,
  'iot-edge': Radio,
};

const PAPER_STYLES = [
  { paper: 'lemon', pin: '#187f9a', tilt: '-1deg' },
  { paper: 'blue', pin: '#d2a92a', tilt: '1.1deg' },
  { paper: 'white', pin: '#2477ad', tilt: '-0.6deg' },
  { paper: 'notebook', pin: '#188456', tilt: '1deg' },
  { paper: 'folded', pin: '#bd3545', tilt: '0.7deg' },
  { paper: 'ivory', pin: '#188b61', tilt: '-0.9deg' },
  { paper: 'rose', pin: '#cf3d58', tilt: '1deg' },
  { paper: 'mint', pin: '#2d84a3', tilt: '-0.8deg' },
  { paper: 'lavender', pin: '#80569c', tilt: '1deg' },
  { paper: 'white', pin: '#c34638', tilt: '-0.7deg' },
  { paper: 'lemon', pin: '#238151', tilt: '0.8deg' },
  { paper: 'blue', pin: '#2477ad', tilt: '-1deg' },
];

const DEFAULT_CARD_ICONS = [
  'ai-ml',
  'devops',
  'ai-ml',
  'cloud',
  'frontend',
  'database',
  'api-gateway',
  'cybersecurity',
  'iot-edge',
  'qa-testing',
  'backend',
  'ui-ux'
];

export function PaperCard({ title, description = '', icon, paper = 'white', pin = '#2477ad', tilt = '0deg', order = 0 }) {
  const Icon = typeof icon === 'string' ? ICON_MAP[icon] || StickyNote : icon || StickyNote;
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(() => typeof window === 'undefined' || !('IntersectionObserver' in window));

  useEffect(() => {
    const card = cardRef.current;
    if (!card || isVisible) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.15, rootMargin: '0px 0px -24px 0px' });

    observer.observe(card);
    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <article ref={cardRef} className={`paper-card paper-card--${paper}${isVisible ? ' paper-card--placed' : ''}`} style={{ '--pin-color': pin, '--paper-tilt': tilt, '--appear-delay': `${(order % 4) * 120}ms` }}>
      <span className="paper-card__pin" aria-hidden="true" />
      {paper === 'notebook' && <span className="paper-card__holes" aria-hidden="true" />}
      <div className="paper-card__heading justify-center items-center text-center">
        <Icon className="paper-card__icon" size={26} strokeWidth={1.8} aria-hidden="true" />
        <h2 style={{ textAlign: 'center' }}>{title}</h2>
      </div>
      <p className="paper-card__description text-center" style={{ textAlign: 'center' }} tabIndex={0} aria-label={`${title} description`}>{description}</p>
    </article>
  );
}

export function NoticeBoard({ cards = [] }) {
  return (
    <section className="notice-board" aria-label="AI Innovation notice board">
      <div className="notice-board__surface">
        <div className="notice-board__grid">
          {cards.map((card, index) => (
            <PaperCard key={card.id || index} {...card} {...PAPER_STYLES[index % PAPER_STYLES.length]} order={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

const PAGE_TITLE = 'AI Innovation, Research &\nAdvanced Intelligence Automation';

const PAGE_DESCRIPTION = [
  'Explore the evolving landscape of artificial intelligence, advanced research, intelligent systems, and workflow automation through a comprehensive collection of AI technology categories.',
  'This page brings together intelligent software capabilities, generative AI, predictive analytics, autonomous systems, and AI model development to demonstrate how emerging technologies can support smarter operations, connected digital environments, and next-generation software products for enterprise, government, cybersecurity, and commercial applications.'
];

function AnimatedHeading({ title }) {
  if (typeof title !== 'string') return <h1>{title}</h1>;

  let letterNumber = 0;
  return (
    <h1 aria-label={title.replace(/\s+/g, ' ').trim()}>
      {title.split('\n').map((line, lineIndex) => (
        <span className="heading-line" aria-hidden="true" key={lineIndex}>
          {line.split(' ').map((word, wordIndex) => (
            <span className="heading-word" key={wordIndex}>
              {[...word].map((letter, letterIndex) => {
                const delay = letterNumber * 45;
                letterNumber += 1;
                return <span className="heading-letter" style={{ '--letter-delay': `${delay}ms` }} key={letterIndex}>{letter}</span>;
              })}
            </span>
          ))}
        </span>
      ))}
    </h1>
  );
}

export default function AiInnovationResearchAdvancedIntelligenceAutomationPage({
  title = PAGE_TITLE,
  description = PAGE_DESCRIPTION,
  showHeader = true,
  cards,
  onClose,
  className = '',
}) {
  const handleBack = () => {
    if (onClose) {
      onClose();
    } else {
      window.location.hash = '#ai-innovation-research-advanced-intelligence-automation';
    }
  };

  const handleHome = () => {
    if (onClose) {
      onClose();
    }
    window.location.hash = '#home';
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const displayCards = cards || (AiInnovationResearchAdvancedIntelligenceAutomationData?.cards || []).map((c, idx) => ({
    ...c,
    icon: c.icon || DEFAULT_CARD_ICONS[idx % DEFAULT_CARD_ICONS.length]
  }));

  return (
    <main className={`ai-innovation-page ${className}`}>
      <style>{AI_INNOVATION_PAGE_STYLES}</style>

      {/* Navigation Controls */}
      <div className="ai-innovation-page__nav">
        <button
          type="button"
          onClick={handleBack}
          className="ai-nav-btn ai-nav-btn--back"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>

        <button
          type="button"
          onClick={handleHome}
          className="ai-nav-btn ai-nav-btn--home"
        >
          <Home className="w-4 h-4" />
          <span>Home</span>
        </button>
      </div>

      {showHeader && (
        <header className="ai-innovation-page__header text-center">
          <AnimatedHeading title={title} />
          {Array.isArray(description)
            ? description.map((paragraph, index) => <p key={index} className="text-center" style={{ textAlign: 'center' }}>{paragraph}</p>)
            : <p className="text-center" style={{ textAlign: 'center' }}>{description}</p>}
        </header>
      )}
      <NoticeBoard cards={displayCards} />
    </main>
  );
}
