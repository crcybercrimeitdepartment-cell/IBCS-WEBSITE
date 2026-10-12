// Meaning Behind Our Name Page
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';
import { ibcsData } from './MeaningBehindOurNamePageData';

const BOOK_STYLES = `.mbon-section, .mbon-section * { box-sizing: border-box; }
.mbon-section { --color-ivory:#FFF8DC; --color-navy:#081E52; --color-gold:#D4AF37; position:relative; width:100%; min-height:100svh; display:flex; align-items:center; justify-content:center; padding:24px; background:#eeefed; color:var(--color-navy); font-family:'Georgia',serif; isolation:isolate; }
.mbon-bg-layer { position:absolute; inset:0; overflow:hidden; pointer-events:none; z-index:-1; background:#eeefed; }
.mbon-bg-typography { position:absolute; color:rgba(212,175,55,.025); font-weight:800; line-height:1; letter-spacing:-.02em; white-space:nowrap; user-select:none; }
.mbon-bg-typography-1 { top:10%; left:-5%; font-size:18vw; }.mbon-bg-typography-2 { top:40%; right:-5%; font-size:22vw; }.mbon-bg-typography-3 { bottom:-5%; left:10%; font-size:15vw; }.mbon-bg-graphics { position:absolute; inset:0; }
.mbon-workspace { position:relative; display:flex; flex-direction:column; align-items:center; width:100%; gap:20px; }
.mbon-intro { width:min(760px,100%); text-align:center; padding-bottom:6px; }
.mbon-intro-title { display:flex; justify-content:center; flex-wrap:wrap; column-gap:.24em; margin:0; color:var(--color-navy); font:400 clamp(30px,3.4vw,48px)/1.15 Georgia,serif; letter-spacing:-.035em; }
.mbon-intro-word { display:inline-block; animation:mbon-intro-reveal 850ms cubic-bezier(.2,.7,.2,1) var(--word-delay) both; }
.mbon-intro-rule { display:block; width:56px; height:1px; margin:14px auto 12px; background:var(--color-gold); transform-origin:center; animation:mbon-intro-rule-reveal 800ms ease 400ms both; }
.mbon-intro-description { margin:0; color:#526070; font:400 14px/1.65 system-ui,sans-serif; animation:mbon-intro-reveal 950ms cubic-bezier(.2,.7,.2,1) 550ms both; }
.mbon-intro-description span { display:block; }
@keyframes mbon-intro-reveal { from { opacity:0; transform:translateY(14px); filter:blur(3px); } to { opacity:1; transform:translateY(0); filter:blur(0); } }
@keyframes mbon-intro-rule-reveal { from { opacity:0; transform:scaleX(.25); } to { opacity:1; transform:scaleX(1); } }
@media(max-width:719px) { .mbon-intro { padding-bottom:8px; }.mbon-intro-title { max-width:350px; margin-inline:auto; font-size:clamp(29px,7.8vw,38px); line-height:1.16; }.mbon-intro-description { max-width:420px; margin-inline:auto; font-size:13px; line-height:1.7; }.mbon-intro-description span { display:inline; }.mbon-intro-description span + span::before { content:' '; } }
@media(prefers-reduced-motion:reduce) { .mbon-intro-word,.mbon-intro-description,.mbon-intro-rule { animation:none; } }
.mbon-scene-viewport { position:relative; width:var(--scene-width); height:var(--scene-height); flex-shrink:0; }
.mbon-scene { position:relative; width:calc(var(--book-width) * 2); height:var(--book-height); perspective:12000px; transform:scale(var(--book-scale)); transform-origin:top left; }
.mbon-book { position:absolute; top:0; left:50%; width:var(--book-width); height:var(--book-height); transform-style:preserve-3d; transform:translateX(-50%) rotateY(-13deg) rotateX(3deg); transition:transform 1000ms cubic-bezier(.22,.7,.2,1); }
.mbon-book-flat { transform:translateX(0) rotateY(0) rotateX(0); }
.mbon-book-back { position:absolute; inset:-5px; border-radius:3px 7px 7px 3px; background:#102641; transform:translateZ(-12px); box-shadow:0 26px 40px -16px rgba(16,38,65,.35); border:1px solid #8b7347; }
.mbon-book-back-inside { position:absolute; inset:0; transform:translateZ(-10px); background:var(--color-ivory); border-radius:3px; }
.mbon-book-back-inside>.page, .mbon-book-front-inside>.page, .mbon-sheet-face>.page { width:100%; height:100%; }
.mbon-book-spine { position:absolute; width:32px; height:calc(100% + 10px); left:0; top:-5px; transform-origin:left center; transform:translateZ(22px) rotateY(-90deg); background:linear-gradient(90deg,#071628,#213b56 45%,#0b2037); border-top:1px solid #c6a46a; border-bottom:1px solid #c6a46a; display:flex; align-items:center; justify-content:center; }
.mbon-book-spine span { writing-mode:vertical-rl; color:#c6a46a; font-size:10px; letter-spacing:.18em; }
.mbon-pages-right { position:absolute; right:2px; top:4px; width:28px; height:calc(100% - 8px); background:repeating-linear-gradient(90deg,#e1d7c3 0 1px,#f7f0df 1px 3px); transform-origin:right center; transform:translateZ(18px) rotateY(90deg); transition:width 1000ms; }
.mbon-pages-bottom { position:absolute; bottom:2px; left:1px; width:calc(100% - 4px); height:28px; background:repeating-linear-gradient(#e1d7c3 0 1px,#f7f0df 1px 3px); transform-origin:bottom center; transform:translateZ(18px) rotateX(-90deg); }
.mbon-cover-hinge { position:absolute; inset:-5px; transform-origin:5px center; transform:translateZ(22px) rotateY(0); transform-style:preserve-3d; transition:transform 1000ms cubic-bezier(.32,.04,.2,1); }
.mbon-hinge-open .mbon-cover-hinge { transform:translateZ(22px) rotateY(-180deg); }
.mbon-cover-face { position:absolute; inset:0; backface-visibility:hidden; border-radius:3px 7px 7px 3px; }
.mbon-book-front { background:repeating-linear-gradient(0deg,transparent 0 2px,rgba(255,255,255,.015) 2px 3px),repeating-linear-gradient(90deg,transparent 0 2px,rgba(0,0,0,.035) 2px 3px),linear-gradient(115deg,#1b3552,#102641 60%,#0b1d34); border:1px solid #9f834e; box-shadow:inset 8px 0 15px rgba(0,0,0,.32),inset -1px 0 2px #56677a; }
.mbon-book-front::before { content:''; position:absolute; top:0; bottom:0; left:10px; width:4px; border-left:1px solid rgba(0,0,0,.4); border-right:1px solid rgba(255,255,255,.1); }
.mbon-cover-frame { position:absolute; inset:18px 20px 18px 27px; border:1px solid #c6a46a; opacity:.8; }
.mbon-cover-frame::before { content:''; position:absolute; inset:5px; border:1px solid rgba(198,164,106,.35); }
.mbon-front-content { position:absolute; inset:0; display:flex; flex-direction:column; align-items:center; justify-content:center; padding:36px; text-align:center; color:#e0c28c; gap:20px; }
.mbon-cover-edition { font:9px/1.5 'Georgia',serif; letter-spacing:.24em; }
.mbon-mark { width:86px; height:86px; flex-shrink:0; color:var(--color-gold); }
.mbon-front-content .mbon-mark { width:92px; height:92px; color:#dfbd7d; }
.mbon-front-content h1 { font-size:clamp(29px,3.2vw,38px); font-weight:400; line-height:1.18; margin:0; letter-spacing:.035em; text-shadow:0 2px 2px #07162b; }
.mbon-front-content h1 em { font-weight:400; font-size:1.06em; }
.mbon-cover-rule { width:58px; height:1px; background:#c6a46a; margin:4px 0; }
.mbon-cover-tagline { font-size:8px; letter-spacing:.2em; }
.mbon-book-front-inside { transform:rotateY(180deg) translateZ(2px); background:var(--color-ivory); padding:5px; border:1px solid #b6a47e; box-shadow:inset -5px 0 15px rgba(16,38,65,.1); }
.mbon-flipbook-layer { position:absolute; top:0; left:calc(-1 * var(--book-width)); width:calc(var(--book-width) * 2); height:var(--book-height); transform:translateZ(25px); opacity:0; pointer-events:none; transition:opacity 250ms; }
.mbon-reader-visible { opacity:1; }
/* Flatten the reading surface so Chromium does not cull the left page behind
   the rotated cover when browser zoom changes compositing layers. */
.mbon-workspace[data-book-state='open'] .mbon-scene { perspective:none; }
.mbon-workspace[data-book-state='open'] .mbon-book { transform-style:flat; }
.mbon-workspace[data-book-state='open'] .mbon-cover-hinge { visibility:hidden; }
.mbon-workspace[data-book-state='open'] .mbon-flipbook-layer { transform:none; z-index:2; }
.mbon-flipbook { width:100%!important; height:100%!important; }
.mbon-flipbook-layer::after { content:''; position:absolute; top:0; bottom:0; left:50%; width:28px; transform:translateX(-50%); background:linear-gradient(90deg,transparent,rgba(82,67,39,.18),transparent); pointer-events:none; }
.mbon-flipbook .stf__parent { overflow:visible; }
.mbon-riffle-container { position:absolute; inset:0; transform:translateZ(29px); transform-style:preserve-3d; pointer-events:none; }
.mbon-riffle-sheet { position:absolute; inset:0; transform-origin:left center; transform-style:preserve-3d; animation:mbon-riffle 780ms cubic-bezier(.34,.08,.2,1) var(--sheet-delay) both; z-index:var(--sheet-order); }
.mbon-sheet-face { position:absolute; inset:0; backface-visibility:hidden; transform-style:preserve-3d; background:var(--color-ivory); border:1px solid #e3d7be; box-shadow:6px 3px 18px rgba(28,31,32,.14); }
.mbon-sheet-back { transform:rotateY(180deg) translateZ(.5px); }
@keyframes mbon-riffle { 0% { transform:rotateY(0); } 50% { transform:rotateY(-100deg) rotateX(1deg); } 90% { transform:rotateY(-179deg); } 100% { transform:rotateY(-180deg); } }
.mbon-gathering .mbon-riffle-sheet { animation-name:mbon-gather; z-index:var(--sheet-order); }
@keyframes mbon-gather { 0% { transform:rotateY(-180deg); } 50% { transform:rotateY(-85deg) rotateX(-1deg); } 100% { transform:rotateY(0); } }
.mbon-controls-slot { position:relative; min-height:74px; display:flex; align-items:center; justify-content:center; width:100%; }
.mbon-navigation-dock { position:relative; display:flex; align-items:center; gap:12px; padding:12px; border:1px solid #e7dfcf; background:#fffdf8; border-radius:14px; box-shadow:0 12px 32px -16px rgba(16,38,65,.25),0 2px 5px rgba(16,38,65,.04); font-family:system-ui,sans-serif; }
.mbon-nav-btn { display:flex; align-items:center; justify-content:center; gap:9px; min-height:46px; padding:0 17px; color:#102641; border:1px solid transparent; background:none; cursor:pointer; border-radius:8px; font-size:13px; font-weight:550; line-height:1; white-space:nowrap; transition:background 180ms,border-color 180ms,box-shadow 180ms; }
.mbon-nav-previous { min-width:120px; border-color:#d9d5cd; background:#fffdf8; }
.mbon-nav-previous:hover:enabled { border-color:#b7a17b; background:#f5f0e6; }
.mbon-nav-next { min-width:106px; color:#fffdf8; background:#102641; border-color:#102641; box-shadow:0 3px 6px rgba(16,38,65,.1); }
.mbon-nav-next:hover:enabled { background:#213d5b; border-color:#213d5b; box-shadow:0 4px 9px rgba(16,38,65,.18); }
.mbon-nav-btn:disabled { opacity:.4; cursor:default; box-shadow:none; }
.mbon-nav-btn:focus-visible,.mbon-cover-trigger:focus-visible { outline:2px solid #ac874a; outline-offset:4px; }
.mbon-progress-container { width:118px; display:flex; flex-direction:column; gap:8px; text-align:center; padding:0 5px; }
.mbon-progress-text { color:#102641; font-size:12px; font-weight:550; letter-spacing:.01em; }.mbon-progress-text>span { color:#858477; font-weight:400; }
.mbon-progress-bar { width:100%; height:3px; border-radius:3px; background:#ebe5d9; overflow:hidden; }.mbon-progress-fill { height:100%; background:#b0925a; border-radius:3px; transition:width 200ms; }
.mbon-cover-trigger { position:absolute; inset:0; z-index:5; width:100%; height:100%; border:0; border-radius:inherit; background:transparent; cursor:pointer; }
.mbon-cover-trigger:disabled { cursor:wait; }
.mbon-reader-hint { font-size:12px; color:#756b5a; font-style:italic; margin:-15px 0 0; }
.mbon-page-inner { position:relative; width:100%; height:100%; display:grid; grid-template-rows:auto 1fr auto; gap:20px; padding:27px 30px 22px; background:var(--color-ivory); color:#4e554f; font-size:14px; line-height:1.6; }
.mbon-page-inner::before { content:''; position:absolute; inset:13px; border:1px solid rgba(198,164,106,.5); pointer-events:none; }
.mbon-empty-page { width: 100%; height: 100%; background: var(--color-ivory); }
.mbon-page-left { background:linear-gradient(90deg,#faf6eb 88%,#e9dfca); }.mbon-page-right { background:linear-gradient(90deg,#e9dfca,#faf6eb 12%); }
.mbon-page-running { display:flex; justify-content:space-between; gap:8px; padding-bottom:9px; border-bottom:1px solid #dcccab; font-size:7px; text-transform:uppercase; letter-spacing:.1em; color:#79694e; line-height:1.5; }
.mbon-page-running>span { white-space:nowrap; }
.mbon-page-content { min-height:0; display:flex; flex-direction:column; }
.mbon-ibcs-page { display:flex; flex-direction:column; gap:18px; }
.mbon-page-inner .mbon-ibcs-page h2 { font-size:22px; line-height:1.25; }
.mbon-ibcs-page p { font-size:13px; line-height:1.65; text-align:justify; }
.mbon-page-folio { display:flex; align-items:center; justify-content:space-between; gap:8px; padding-top:8px; border-top:1px solid #dcccab; color:#79694e; font-size:7px; letter-spacing:.09em; }
.mbon-page-folio>span:last-child { font-size:11px; }.mbon-page-left .mbon-page-folio { flex-direction:row-reverse; }
.mbon-centered { display:flex; flex-direction:column; align-items:center; justify-content:center; flex:1; gap:25px; text-align:center; }
.mbon-eyebrow { color:#8f713c; font-size:9px; text-transform:uppercase; letter-spacing:.19em; line-height:1.7; }
.mbon-page-inner h2 { color:#102641; font-size:28px; font-weight:400; line-height:1.18; margin:0; }
.mbon-page-inner p { margin:0; }.mbon-page-inner blockquote { color:#102641; font-size:21px; font-style:italic; line-height:1.5; margin:0; }
.mbon-quote-page { gap:27px; }.mbon-quote-page .mbon-mark { width:78px; height:78px; }
.mbon-title-page h2 { font-size:36px; line-height:1.14; }.mbon-title-page h2 em { display:inline-block; margin-top:10px; font-size:.95em; color:#8f713c; }.mbon-title-page p { font-size:13px; line-height:1.7; }.mbon-ornament { color:#b09258; font-size:11px; display:flex; align-items:center; gap:15px; }.mbon-ornament::before,.mbon-ornament::after { content:''; width:34px; height:1px; background:#cdbb98; }
.mbon-editorial { display:flex; flex-direction:column; gap:20px; flex:1; }.mbon-editorial>.mbon-eyebrow { margin-top:8px; }.mbon-editorial h2 { font-size:29px; }.mbon-prose { display:flex; flex-direction:column; gap:18px; font-size:14px; line-height:1.65; }
.mbon-terms { display:flex; flex-direction:column; gap:18px; }.mbon-terms h3 { display:flex; justify-content:space-between; align-items:baseline; gap:9px; color:#102641; margin:0 0 7px; font-size:21px; font-weight:400; }.mbon-terms h3 small { font-size:11px; color:#8f713c; font-style:italic; white-space:nowrap; }.mbon-terms p { font-size:13px; line-height:1.6; }
.mbon-initial { color:#b89b65; font-size:100px; line-height:1; text-align:center; opacity:.5; margin:4px 0 0; }.mbon-identity-art { display:flex; flex-direction:column; align-items:center; padding:10px; border:1px solid #dcccab; color:#b09258; margin:5px 0 2px; }.mbon-identity-art svg { width:100%; height:200px; }.mbon-identity-art span { font-size:7px; letter-spacing:.18em; padding:12px 0 4px; }
.mbon-mobile .mbon-scene { width:var(--book-width); }.mbon-mobile .mbon-book { left:0; transform:rotateY(-10deg) rotateX(2deg); }.mbon-mobile .mbon-book-flat { transform:rotateY(0) rotateX(0); }
.mbon-mobile .mbon-flipbook-layer { left:0; width:var(--book-width); }.mbon-mobile .mbon-flipbook-layer::after { display:none; }
/* A narrow viewport keeps the left cover edge-on behind the reading page instead of sending it off-screen. */
.mbon-mobile .mbon-hinge-open .mbon-cover-hinge { transform:translateZ(22px) rotateY(-90deg); }
.mbon-mobile .mbon-riffle-sheet { animation-name:mbon-riffle-mobile; }.mbon-mobile .mbon-gathering .mbon-riffle-sheet { animation-name:mbon-gather-mobile; }
@keyframes mbon-riffle-mobile { 0% { transform:rotateY(0); } 80% { transform:rotateY(-88deg); } 100% { transform:rotateY(-90deg); } }
@keyframes mbon-gather-mobile { 0% { transform:rotateY(-90deg); } 100% { transform:rotateY(0); } }
@media(max-width:719px) { .mbon-section { padding:38px 24px; }.mbon-page-inner { padding:25px 27px 21px; gap:18px; }.mbon-page-left,.mbon-page-right { background:var(--color-ivory); }.mbon-page-inner blockquote { font-size:20px; }.mbon-editorial h2 { font-size:27px; } }
@media(max-width:360px) { .mbon-page-inner { padding:25px 23px 21px; }.mbon-page-running { font-size:6px; letter-spacing:.06em; }.mbon-page-folio { font-size:6px; }.mbon-prose { font-size:13px; }.mbon-terms p { font-size:12px; }.mbon-terms h3 small { font-size:10px; }.mbon-title-page h2 { font-size:31px; } }
@media(prefers-reduced-motion:reduce) { .mbon-book,.mbon-cover-hinge { transition-duration:1ms; }.mbon-riffle-sheet { animation-duration:1ms; animation-delay:0ms; }.mbon-progress-fill { transition:none; } }

.mbon-sheet-face *, .mbon-cover-face * { backface-visibility:hidden; }
.mbon-sheet-front { transform:translateZ(.5px); }

.mbon-reading-stacks { position:absolute; inset:0; transform:translateZ(24px); opacity:0; transition:opacity 250ms; pointer-events:none; }
.mbon-stacks-visible { opacity:1; }
.mbon-reading-stack { position:absolute; top:100%; width:var(--book-width); background:repeating-linear-gradient(#cfc3ad 0 1px,#f7efdf 1px 2px); border-bottom:1px solid #d6c6a8; box-shadow:0 3px 4px rgba(16,38,65,.08); transition:height 850ms ease; }
.mbon-reading-stack-left { left:calc(-1 * var(--book-width)); height:var(--left-stack-depth); }
.mbon-reading-stack-right { left:0; height:var(--right-stack-depth); }
.mbon-book-flat .mbon-pages-bottom { height:8px; transition:height 1000ms ease; }
.mbon-book-flat .mbon-pages-right { width:8px; }
.mbon-mobile .mbon-reading-stack-left { display:none; }
.mbon-pages-bottom { transition:height 1000ms ease; }
/* Mobile shows the connected ivory cover lining edge-on; its duplicate decorative page is reserved for the desktop spread. */
.mbon-mobile .mbon-book-front-inside > .page { visibility:hidden; }

@media(max-width:719px) {
  .mbon-controls-slot { min-height:116px; }
  .mbon-navigation-dock { display:grid; grid-template-columns:1fr 1fr; grid-template-areas:'progress progress' 'previous next'; gap:10px 12px; width:min(360px,100%); padding:12px; border-radius:12px; }
  .mbon-progress-container { grid-area:progress; width:100%; max-width:136px; justify-self:center; padding:0 4px; gap:7px; }
  .mbon-nav-previous { grid-area:previous; min-width:0; min-height:48px; padding:0 12px; }
  .mbon-nav-next { grid-area:next; min-width:0; min-height:48px; padding:0 12px; }
}

@font-face { font-family:'Book Handwriting'; src:url('/fonts/Kalam-Regular.ttf') format('truetype'); font-weight:400; font-style:normal; font-display:swap; }
@font-face { font-family:'Book Handwriting'; src:url('/fonts/Kalam-Bold.ttf') format('truetype'); font-weight:700; font-style:normal; font-display:swap; }
.mbon-page-content { font-family:'Book Handwriting','Segoe Print','Comic Sans MS',cursive; color:#082b68; font-weight:700; }
.mbon-page-content h2, .mbon-page-content h3, .mbon-page-content blockquote, .mbon-page-content h2 em { color:#082b68; font-style:normal; font-weight:700; }
.mbon-page-content p { font-size:15px; line-height:1.5; }
.mbon-page-inner .mbon-ibcs-page p { font-size:16px; line-height:1.5; }

`;

function BookMark({ className = '' }) {
  return <svg className={`mbon-mark ${className}`} viewBox="0 0 100 100" fill="none" aria-hidden="true">
    <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1" />
    <path d="M50 31c-9-7-20-8-29-6v42c10-2 21 0 29 7 8-7 19-9 29-7V25c-9-2-20-1-29 6Zm0 0v43M29 37c5 0 10 1 14 4m-14 7c5 0 10 1 14 4m14-11c4-3 9-4 14-4m-14 15c4-3 9-4 14-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="m50 12 2 5-2 5-2-5 2-5" fill="currentColor" />
  </svg>;
}

const Page = React.forwardRef(function Page({ number, density = 'soft', children }, ref) {
  const left = number % 2 === 1;
  return <div className="page" ref={ref} data-density={density}>
    <article className={`mbon-page-inner ${left ? 'mbon-page-left' : 'mbon-page-right'}`}>
      <header className="mbon-page-running">Meaning Behind Our Name<span>{number <= 4 ? 'Identity' : number <= 8 ? 'Our story' : 'Legacy'}</span></header>
      <div className="mbon-page-content">{children}</div>
      <footer className="mbon-page-folio"><span>ORIGIN · IDENTITY · PURPOSE</span><span>{String(number).padStart(2, '0')}</span></footer>
    </article>
  </div>;
});

const IBCSPage = React.forwardRef(function IBCSPage({ number = 1, title, content }, ref) {
  return <Page number={number} ref={ref}>
    <div className="mbon-ibcs-page">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  </Page>;
});


const PAGE_COUNT = ibcsData.length;
const COVER_TIME = 1000;
const RIFFLE_TIME = 1500;
function measureBook() {
  const mobile = window.innerWidth < 720;
  // Keep the engine's pages large enough for the text; fit the whole scene instead.
  const width = 400;
  const height = 600;
  // Reserve space for the introduction and navigation. Short screens scroll
  // instead of shrinking the reading pages below a comfortable size.
  const scale = Math.min(1, (window.innerWidth - 48) / (width * (mobile ? 1 : 2)), Math.max(450, window.innerHeight - (mobile ? 430 : 340)) / height);
  return { mobile, width, height, scale };
}

export default function MeaningBehindOurName({ onClose }) {
  const handleBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else if (onClose) {
      onClose();
    } else {
      window.location.hash = '#about-us';
    }
  };

  const handleHome = () => {
    if (onClose) onClose();
    window.location.hash = '#home';
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const [bookState, setBookState] = useState('closed');
  const [currentPage, setCurrentPage] = useState(0);
  const [flipping, setFlipping] = useState(false);
  const [ready, setReady] = useState(false);
  const [dimensions, setDimensions] = useState(measureBook);
  const flipBook = useRef(null);
  const phase = useRef('closed');
  const turnLock = useRef(false);
  const timers = useRef(new Set());
  const automaticallyOpened = useRef(false);
  const pixelRatio = useRef(window.devicePixelRatio);
  const engine = () => flipBook.current?.pageFlip();
  const later = useCallback((callback, delay) => {
    const id = setTimeout(() => { timers.current.delete(id); callback(); }, delay);
    timers.current.add(id);
  }, []);
  const changePhase = useCallback(value => { phase.current = value; setBookState(value); }, []);
  useEffect(() => {
    const pending = timers.current;
    const onResize = () => {
      // Browser zoom should magnify the book, rather than being cancelled by fitting it again.
      if (window.devicePixelRatio !== pixelRatio.current) {
        pixelRatio.current = window.devicePixelRatio;
        return;
      }
      if (phase.current !== 'closed' && phase.current !== 'open') return;
      const next = measureBook();
      setDimensions(previous => previous.mobile === next.mobile && previous.scale === next.scale ? previous : next);
    };
    window.addEventListener('resize', onResize);
    return () => { window.removeEventListener('resize', onResize); pending.forEach(clearTimeout); pending.clear(); };
  }, []);

  const pages = useMemo(() => 
    ibcsData.map((item, idx) => (
      <IBCSPage 
        key={idx + 1} 
        number={idx + 1} 
        title={item.title} 
        content={item.content} 
      />
    ))
  , []);

  const handleOpenBook = useCallback(() => {
    if (!ready || phase.current !== 'closed' || turnLock.current) return;
    automaticallyOpened.current = true;
    flipBook.current?.pageFlip()?.turnToPage(0);
    changePhase('opening-cover');
    later(() => {
      changePhase('riffling');
      later(() => { changePhase('open'); }, RIFFLE_TIME);
    }, COVER_TIME);
  }, [ready, changePhase, later]);
  useEffect(() => {
    if (!ready || automaticallyOpened.current) return;
    const pending = timers.current;
    const id = setTimeout(() => {
      pending.delete(id);
      if (!automaticallyOpened.current) handleOpenBook();
    }, 600);
    pending.add(id);
    return () => { clearTimeout(id); pending.delete(id); };
  }, [ready, handleOpenBook]);
  const turnPage = direction => {
    const flip = engine();
    const last = dimensions.mobile ? PAGE_COUNT - 1 : PAGE_COUNT - 2;
    if (phase.current !== 'open' || turnLock.current || !flip || (direction === 'next' ? currentPage >= last : currentPage <= 0)) return;
    turnLock.current = true;
    setFlipping(true);
    if (direction === 'next') flip.flipNext('bottom'); else flip.flipPrev('bottom');
  };
  const onState = event => {
    if (phase.current !== 'open') return;
    turnLock.current = event.data !== 'read';
    setFlipping(event.data !== 'read');
  };
  const openHinge = ['opening-cover', 'riffling', 'open', 'gathering'].includes(bookState);
  const spread = dimensions.mobile ? 1 : 2;
  const first = currentPage + 1;
  const last = Math.min(PAGE_COUNT, currentPage + spread);
  const isReading = bookState === 'open';

  return (
    <main className="w-full bg-[#eeefed] min-h-screen">
      <style>{BOOK_STYLES}</style>

      {/* Top Header Navigation Bar */}
      <div className="w-full max-w-7xl mx-auto px-4 pt-4 pb-2 flex items-center justify-start gap-3 z-50 relative pointer-events-auto">
        <button
          type="button"
          onClick={handleBack}
          className="inline-flex items-center gap-2 rounded-xl bg-[#081E52] hover:bg-[#0c2b7a] border border-[#D4AF37]/40 text-white px-4 py-2 text-xs sm:text-sm font-bold text-white transition-all cursor-pointer shadow-sm active:scale-95"
        >
          ← Back
        </button>

        <button
          type="button"
          onClick={handleHome}
          className="inline-flex items-center gap-2 rounded-xl bg-[#D4AF37] hover:bg-[#E5C158] px-4 py-2 text-xs sm:text-sm font-bold text-[#040A1A] transition-all cursor-pointer shadow-sm active:scale-95"
        >
          <Home className="w-4 h-4 text-white" />
          <span>Home</span>
        </button>
      </div>

      <section className="mbon-section" aria-label="Meaning Behind Our Name interactive book" style={{ '--book-width': `${dimensions.width}px`, '--book-height': `${dimensions.height}px`, '--book-scale': dimensions.scale, '--scene-width': `${dimensions.width * spread * dimensions.scale}px`, '--scene-height': `${dimensions.height * dimensions.scale}px` }}>
    <div className="mbon-bg-layer" aria-hidden="true">
      <div className="mbon-bg-typography mbon-bg-typography-1">ORIGIN</div><div className="mbon-bg-typography mbon-bg-typography-2">IDENTITY</div><div className="mbon-bg-typography mbon-bg-typography-3">LEGACY</div>
      <svg className="mbon-bg-graphics" width="100%" height="100%"><circle cx="20%" cy="30%" r="250" stroke="rgba(212,175,55,.04)" fill="none" /><circle cx="85%" cy="75%" r="350" stroke="rgba(212,175,55,.04)" fill="none" /><line x1="0" y1="20%" x2="100%" y2="80%" stroke="rgba(212,175,55,.03)" /><line x1="20%" y1="0" x2="80%" y2="100%" stroke="rgba(212,175,55,.03)" /></svg>
    </div>
    <div className={`mbon-workspace ${dimensions.mobile ? 'mbon-mobile' : ''}`} data-book-state={bookState}>
      <header className="mbon-intro">
        <h1 className="mbon-intro-title" aria-label="Meaning Behind Our Name">
          {['Meaning', 'Behind', 'Our', 'Name'].map((word, index) => <span key={word} className="mbon-intro-word" aria-hidden="true" style={{ '--word-delay': `${120 + index * 110}ms` }}>{word}</span>)}
        </h1>
        <span className="mbon-intro-rule" aria-hidden="true" />
        <p className="mbon-intro-description">
          <span>IBCS brings together Intelligence, Business, Cybersecurity, and Solutions.</span>
          <span>Our name reflects the purpose of IB Cyber Security Private Limited:</span>
          <span>to build intelligent software, protect digital possibilities,</span>
          <span>and shape a secure, innovative future.</span>
        </p>
      </header>
      <div className="mbon-scene-viewport"><div className="mbon-scene">
        <div className={`mbon-book ${bookState !== 'closed' ? 'mbon-book-flat' : ''} ${openHinge ? 'mbon-hinge-open' : ''}`}>
          <div className="mbon-book-back" aria-hidden="true" />
          <div className="mbon-book-back-inside" aria-hidden="true"><div className="page mbon-empty-page"></div></div>
          <div className="mbon-book-spine" aria-hidden="true"><span>MEANING BEHIND OUR NAME</span></div>
          <div className="mbon-pages-right" aria-hidden="true" /><div className="mbon-pages-bottom" aria-hidden="true" />
          <div className={`mbon-reading-stacks ${isReading || bookState === 'riffling' || bookState === 'gathering' ? 'mbon-stacks-visible' : ''}`} style={{ '--left-stack-depth': `${2 + currentPage * 0.5}px`, '--right-stack-depth': `${7 - currentPage * 0.5}px` }} aria-hidden="true"><div className="mbon-reading-stack mbon-reading-stack-left" /><div className="mbon-reading-stack mbon-reading-stack-right" /></div>
          <div className={`mbon-flipbook-layer ${isReading ? 'mbon-reader-visible' : ''}`} aria-hidden={!isReading} inert={!isReading}>
            <HTMLFlipBook key={`${dimensions.width}-${dimensions.mobile}`} width={dimensions.width} height={dimensions.height} size="fixed" minWidth={dimensions.width} maxWidth={dimensions.width} minHeight={dimensions.height} maxHeight={dimensions.height} startPage={currentPage} showCover={false} usePortrait={dimensions.mobile} autoSize={false} mobileScrollSupport={false} useMouseEvents={false} showPageCorners={false} drawShadow maxShadowOpacity={0.28} flippingTime={850} renderOnlyPageLengthChange onInit={event => { setReady(true); setCurrentPage(event.object.getCurrentPageIndex()); if (phase.current === 'open' || phase.current === 'closed') { turnLock.current = false; setFlipping(false); } }} onFlip={event => setCurrentPage(event.data)} onChangeState={onState} className="mbon-flipbook" ref={flipBook}>{pages}</HTMLFlipBook>
          </div>
          {(bookState === 'riffling' || bookState === 'gathering') && <div className={`mbon-riffle-container ${bookState === 'gathering' ? 'mbon-gathering' : ''}`} aria-hidden="true">{Array.from({ length: 6 }, (_, index) => <div key={index} className="mbon-riffle-sheet" style={{ '--sheet-delay': `${index * 140}ms`, '--sheet-order': 6 - index }}><div className="mbon-sheet-face mbon-sheet-front"></div><div className="mbon-sheet-face mbon-sheet-back"></div></div>)}</div>}
          <div className="mbon-cover-hinge">
            <div className="mbon-cover-face mbon-book-front">
              <div className="mbon-cover-frame" /><div className="mbon-front-content"><span className="mbon-cover-edition">A STORY OF IDENTITY</span><BookMark /><h1>Meaning<br />Behind<br /><em>Our Name</em></h1><div className="mbon-cover-rule" /><span className="mbon-cover-tagline">ORIGIN · IDENTITY · PURPOSE</span></div>
              {bookState === 'closed' && <button className="mbon-cover-trigger" aria-label="Open Book" disabled={!ready} onClick={handleOpenBook} />}
            </div>
            <div className="mbon-cover-face mbon-book-front-inside" aria-hidden="true"><div className="page mbon-empty-page"></div></div>
          </div>
        </div>
      </div></div>
      <div className="mbon-controls-slot">
        {bookState !== 'closed' && <nav className="mbon-navigation-dock" aria-label="Book navigation" aria-busy={!isReading || flipping}>
          <button onClick={() => turnPage('prev')} disabled={!isReading || flipping || currentPage === 0} className="mbon-nav-btn mbon-nav-previous" aria-label="Previous Page"><ChevronLeft size={18} /><span>Previous</span></button>
          <div className="mbon-progress-container"><span className="mbon-progress-text" aria-live="polite">{spread === 1 ? `Page ${first}` : `Pages ${first}–${last}`} <span>/ {PAGE_COUNT}</span></span><div className="mbon-progress-bar"><div className="mbon-progress-fill" style={{ width: `${last / PAGE_COUNT * 100}%` }} /></div></div>
          <button onClick={() => turnPage('next')} disabled={!isReading || flipping || currentPage >= PAGE_COUNT - spread} className="mbon-nav-btn mbon-nav-next" aria-label="Next Page"><span>Next</span><ChevronRight size={18} /></button>
        </nav>}
      </div>
      <p className="mbon-reader-hint">{bookState === 'closed' ? 'Select the cover to open your story.' : isReading ? 'Turn the pages. Discover the meaning.' : bookState === 'opening-cover' ? 'Opening the cover…' : bookState === 'riffling' ? 'Finding the first chapter…' : 'Gathering the story…'}</p>
    </div>
  </section></main>
  );
}




