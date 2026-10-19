import { useEffect, useRef, useState } from 'react'
import { Home } from 'lucide-react'

import cards from './SoftwareDevelopmentProductEngineeringPageData.js';


const paths = [
  'M3 10h18L12 3 3 10Zm2 3v6m5-6v6m4-6v6m5-6v6M3 22h18',
  'M4 21V9h16v12M9 9V5h6v4M12 5V2m0 0h5M8 13h1m6 0h1m-8 4h1m6 0h1M2 21h20',
  'M12 3v18m-5 0h10M4 7h16M6 7l-4 8h8L6 7Zm12 0-4 8h8l-4-8Z',
  'M14 3H4v18h12v-6M7 7h4M7 11h3m8-7a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm3 7 3 3',
  'M12 2 3 6v6c0 5 9 10 9 10s9-5 9-10V6l-9-4Zm0 5 1.5 3 3.5.5-2.5 2.5.5 3.5-3-1.5-3 1.5.5-3.5L7 10.5l3.5-.5L12 7Z',
  'M12 2 3 6v6c0 5 9 10 9 10s9-5 9-10V6l-9-4ZM9 11V9a3 3 0 0 1 6 0v2m-7 0h8v6H8v-6Z',
  'M3 7h18v14H3V7Zm5 0V3h8v4M3 12l9 3 9-3m-9 1v4',
  'm2 8 10-5 10 5-10 5L2 8Zm4 3v6c4 3 8 3 12 0v-6m4-3v9',
  'M7 7h10v10H7V7Zm3 3h4v4h-4v-4ZM9 2v5m6-5v5M9 17v5m6-5v5M2 9h5m-5 6h5m10-6h5m-5 6h5',
  'M7 18a5 5 0 0 1-1-10 6 6 0 0 1 11-2 6 6 0 0 1 1 12M8 15l4-4 4 4m-4-4v11',
  'm8 7-5 5 5 5m8-10 5 5-5 5m-3-13-2 20',
  'M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0ZM2 12h20M12 2c6 6 6 14 0 20-6-6-6-14 0-20Z',
]

function ProductIcon({ index, className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={paths[index]} />
    </svg>
  )
}

const sectionStyles = `:root {
  font-family: Arial, Helvetica, sans-serif;
  color-scheme: light;
  color: #283330;
  background: #fff;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
* { box-sizing: border-box; }
body { margin: 0; min-width: 280px; }
button { font: inherit; }

@keyframes fadeInUpPremium {
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
}

@keyframes scaleInPremium {
  0% { opacity: 0; transform: scale(0.96) translateY(20px); }
  100% { opacity: 1; transform: scale(1) translateY(0); }
}

@keyframes rollInHeading {
  0% { opacity: 0; transform: rotateX(90deg) translateY(40px); }
  100% { opacity: 1; transform: rotateX(0deg) translateY(0); }
}

/* Software development section and perspective card animations. */
.software-page {
  background: #fff;
  min-height: 100svh;
  padding: clamp(40px, 5vw, 72px) 0 40px;
}
.page-intro {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 clamp(16px, 4vw, 32px);
  text-align: center;
  perspective: 1200px;
}
.page-intro h1 {
  max-width: 980px;
  margin: 0 auto 20px;
  color: #081E52;
  font-size: clamp(26px, 3vw, 40px);
  line-height: 1.25;
  font-weight: 600;
  letter-spacing: -.025em;
  text-wrap: balance;
  opacity: 0;
  transform-origin: bottom;
  animation: rollInHeading 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
}
.page-description {
  max-width: 1040px;
  margin: 0 auto;
  color: #334155;
  font-size: clamp(15px, 1.2vw, 17px);
  line-height: 1.8;
  text-align: center;
}
.page-description p {
  margin: 0 0 14px;
  opacity: 0;
  text-align: center;
}
.page-description p:last-child {
  margin-bottom: 0;
}
.page-description p:nth-child(1) { animation: fadeInUpPremium 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards 0.2s; }
.page-description p:nth-child(2) { animation: fadeInUpPremium 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards 0.4s; }
.gallery {
  position: relative;
  width: 100%;
  max-width: 1400px;
  margin: 32px auto 0;
  padding: 0 clamp(16px, 4vw, 32px);
  box-sizing: border-box;
  background: transparent;
  opacity: 0;
  animation: scaleInPremium 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards 0.6s;
}
.gallery-row {
  position: relative;
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  overscroll-behavior-x: contain;
  scrollbar-width: thin;
  scrollbar-color: #62766b transparent;
  background: radial-gradient(ellipse at 50% 52%, rgb(133 164 150 / 11%), transparent 67%);
  text-align: center;
}
.gallery-row:focus-visible { outline: 1px solid #8b9f93; outline-offset: -1px; }
.gallery-hint { display: none; margin: 0 20px 8px; color: #596b60; font-size: 12px; line-height: 1.6; text-align: center; }
.gallery-hint span { margin-left: 8px; }
.scene-track { position: relative; margin: 0 auto; overflow: clip; display: block; }
.scene {
  position: absolute;
  top: 0;
  left: 0;
  width: 1400px;
  height: 600px;
  transform-origin: top left;
}
.cards { position: absolute; inset: 0; }
@keyframes cardEntrance {
  0% { opacity: 0; translate: 20px 40px; }
  100% { opacity: 1; translate: 0 0; }
}
.card-position {
  position: absolute;
  left: 0;
  top: 0;
  width: 346px;
  height: 472px;
  transform: translate(var(--x), var(--y));
  transition: transform 750ms cubic-bezier(.22, 1, .36, 1);
  will-change: transform;
  pointer-events: none;
  animation: cardEntrance 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) both;
  animation-delay: calc(var(--card-index) * 0.1s + 0.6s);
}
.card {
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0;
  overflow: hidden;
  background: linear-gradient(145deg, color-mix(in srgb, var(--card-color), #f5f3ed 22%), var(--card-color) 52%, color-mix(in srgb, var(--card-color), #38453f 14%));
  border: 1px solid rgb(255 255 255 / 28%);
  box-shadow: inset 0 1px 0 rgb(255 255 255 / 18%), 0 4px 8px rgb(40 51 48 / 8%), 0 18px 32px rgb(40 51 48 / 14%);
  filter: brightness(.94) saturate(.86);
  border-radius: 23px;
  transform-origin: 0 0;
  /* Perspective measured from the four corners of the reference video. */
  transform: matrix3d(.60485964, .09864664, 0, -.00029421, .02075796, .81417328, 0, .0001878, 0, 0, 1, 0, 0, 0, 0, 1);
  transition: transform 750ms cubic-bezier(.22, 1, .36, 1), filter 500ms ease, box-shadow 500ms ease, border-color 400ms ease;
  will-change: transform;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  text-align: left;
  color: #283330;
}
.card::before {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: .055;
  mask-image: linear-gradient(135deg, transparent 20%, #000);
}
.pattern-0::before {
  background-image: linear-gradient(#283330 1px, transparent 1px), linear-gradient(90deg, #283330 1px, transparent 1px);
  background-size: 32px 32px;
}
.pattern-1::before { background-image: radial-gradient(#283330 1px, transparent 1px); background-size: 16px 16px; }
.pattern-2::before { background: repeating-radial-gradient(ellipse at 100% 0%, transparent 0 30px, #283330 31px 32px, transparent 33px 64px); }
.is-active .card {
  transform: var(--card-transform);
  filter: brightness(1.04) saturate(.98);
  border-color: rgb(255 255 255 / 60%);
  box-shadow: inset 0 1px 0 rgb(255 255 255 / 35%), 0 6px 12px rgb(40 51 48 / 10%), 0 20px 40px rgb(40 51 48 / 18%), 0 30px 60px rgb(40 51 48 / 10%);
}
.card.is-dimmed { filter: brightness(.76) saturate(.65); }
.card:has(:focus-visible) { outline: 3px solid #385d4b; outline-offset: 6px; }
.card-face {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  border: 0;
  background: transparent;
  color: inherit;
  padding: 24px;
  gap: 12px;
  text-align: left;
}
.card-body {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  width: 100%;
  flex: 1;
  min-height: 0;
}
.card-trigger {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 2;
  padding: 0;
  margin: 0;
}
.card-trigger:focus-visible { outline: none; }
.card-number {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: .12em;
}
.card-number span { font-size: 9px; letter-spacing: .08em; margin-left: 6px; }
.icon-container {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  flex-shrink: 0;
  border: 1px solid rgb(255 255 255 / 34%);
  border-radius: 15px;
  background: linear-gradient(135deg, rgb(255 255 255 / 28%), rgb(255 255 255 / 8%));
  box-shadow: inset 0 1px 0 rgb(255 255 255 / 20%), 0 4px 10px rgb(40 51 48 / 6%);
}
.product-icon {
  width: 28px;
  height: 28px;
  flex-shrink: 0;
}
.card-title {
  display: block;
  max-width: 236px;
  color: #081E52;
  font-size: 22px;
  font-weight: 700;
  line-height: 1.18;
  letter-spacing: -.025em;
  overflow-wrap: break-word;
}
.card-support {
  grid-area: 1 / 1;
  max-width: 218px;
  font-size: 12.5px;
  line-height: 1.5;
  color: #000;
  opacity: 1;
  transform: translateY(0);
  transition: opacity 300ms ease, transform 300ms ease, visibility 300ms;
  visibility: visible;
}
.is-expanded .card-support {
  opacity: 0;
  transform: translateY(-8px);
  visibility: hidden;
}
.card-action {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
  margin-top: auto;
  padding: 14px 0 0;
  border: 0;
  border-top: 1px solid rgb(40 51 48 / 18%);
  background: transparent;
  font-size: 13px;
  font-weight: 600;
  color: inherit;
  font-family: inherit;
  cursor: pointer;
  z-index: 3;
}
.card-action:focus-visible { outline: 2px solid #385d4b; outline-offset: 4px; border-radius: 4px; }
.card-arrow { display: grid; place-items: center; width: 36px; height: 36px; flex-shrink: 0; border: 1px solid rgb(40 51 48 / 20%); border-radius: 50%; background: rgb(255 255 255 / 14%); transition: background 300ms ease, border-color 300ms ease; }
.card-arrow svg { width: 18px; height: 18px; transition: transform 350ms cubic-bezier(.22, 1, .36, 1); }
.is-active .card-arrow { background: rgb(255 255 255 / 32%); border-color: rgb(40 51 48 / 35%); }
.is-active .card-arrow svg { transform: translate(2px, -2px); }
.card-details-content {
  grid-area: 1 / 1;
  min-height: 0;
  overflow-y: auto;
  overscroll-behavior-y: contain;
  scrollbar-width: thin;
  scrollbar-color: #65756b transparent;
  scrollbar-gutter: stable;
  padding: 4px 0;
  color: #000;
  font-size: var(--detail-font-size, 14px);
  line-height: 1.6;
  overflow-wrap: break-word;
  word-break: normal;
  text-align: justify;
  text-justify: inter-word;
  hyphens: auto;
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
  opacity: 0;
  transform: translateY(8px);
  visibility: hidden;
  transition: opacity 300ms ease, transform 300ms ease, visibility 300ms;
}
.is-expanded .card-details-content {
  opacity: 1;
  transform: translateY(0);
  visibility: visible;
  transition: opacity 400ms ease 100ms, transform 400ms ease 100ms, visibility 0s 0s;
}
.card-details-content p {
  margin: 0;
  text-align: justify;
  text-justify: inter-word;
  hyphens: auto;
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
  word-break: normal;
  overflow-wrap: break-word;
}
.card-details-content p + p { margin-top: 1em; }
.card-details-content:focus-visible { outline: 2px solid #385d4b; outline-offset: -2px; border-radius: 4px; }
@media (max-width: 1147px) {
  .gallery-hint { display: block; }
}
@media (max-width: 600px) {
  .page-intro { width: calc(100% - 40px); }
}
@media (prefers-reduced-motion: reduce) {
  .card-position, .card, .card-face, .card-arrow, .card-arrow svg, .card-details { transition-duration: 0ms; transition-delay: 0ms; }

}

`


const columns = 6
const sceneWidth = 1400
const sceneHeight = 600

function cardX(column, selectedColumn) {
  // Transformed visual width of a resting card is 233px.
  // 6 cards with 5 intervals of 176px + 233px = 1113px total span.
  // start = (1400 - 1113) / 2 = 143.5px gives exactly equal margins on both left and right!
  const start = 143.5
  const x = start + column * 176
  if (selectedColumn === null) return x
  return column === selectedColumn
    ? x
    : x + (column < selectedColumn ? -45 : 45)
}

function CardRow({ row, scale, opened, onToggle }) {
  const [hovered, setHovered] = useState(null)
  const scroller = useRef(null)
  const previousOpened = useRef(null)
  const rowOpened = opened !== null && Math.floor(opened / columns) === row
  const selectedColumn = rowOpened ? opened % columns : hovered

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!window.matchMedia('(max-width: 768px)').matches) return;
      if (!rowOpened && hovered === null) return;
      if (e.target.closest('.card')) return;

      setHovered(null);
      if (rowOpened && opened !== null) {
        onToggle(opened);
      }
    };
    document.addEventListener('pointerdown', handleOutsideClick);
    return () => document.removeEventListener('pointerdown', handleOutsideClick);
  }, [hovered, rowOpened, opened, onToggle]);

  useEffect(() => {
    if (rowOpened) {
      const content = document.getElementById(`product-content-${cards[opened].number}`)
      if (content) {
        content.scrollTop = 0
        content.focus({ preventScroll: true })
      }
      previousOpened.current = opened
    } else if (previousOpened.current !== null) {
      if (opened === null) {
        document.getElementById(`product-trigger-${cards[previousOpened.current].number}`)?.focus({ preventScroll: true })
      }
      previousOpened.current = null
    }
  }, [opened, rowOpened])

  useEffect(() => {
    if (!rowOpened) {
      if (scroller.current && !window.matchMedia('(max-width: 768px)').matches) {
        scroller.current.scrollTo({ left: 0, behavior: 'smooth' })
      }
      return
    }
    const container = scroller.current
    const x = cardX(opened % columns, opened % columns) * scale
    container.scrollTo({
      left: Math.max(0, x - (container.clientWidth - 346 * 1.025 * scale) / 2),
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
    })
  }, [rowOpened, opened, scale])

  const isInteracting = useRef(false)
  const scrollSpeed = useRef(0.6)
  const exactScrollLeft = useRef(0)

  useEffect(() => {
    const container = scroller.current
    if (!container) return

    exactScrollLeft.current = container.scrollLeft

    let animationFrameId;
    const step = () => {
      animationFrameId = requestAnimationFrame(step)

      if (!window.matchMedia('(max-width: 768px)').matches) return

      if (rowOpened || hovered !== null || isInteracting.current) {
        // Sync the exact value when user is scrolling manually so it doesn't jump
        exactScrollLeft.current = container.scrollLeft
        return
      }

      exactScrollLeft.current += scrollSpeed.current
      container.scrollLeft = exactScrollLeft.current

      const maxScroll = container.scrollWidth - container.clientWidth

      if (container.scrollLeft >= maxScroll - 1) {
        scrollSpeed.current = -0.6
        exactScrollLeft.current = maxScroll - 1
      } else if (container.scrollLeft <= 0) {
        scrollSpeed.current = 0.6
        exactScrollLeft.current = 0
      }
    }

    animationFrameId = requestAnimationFrame(step)

    const pause = () => { isInteracting.current = true }
    const resume = () => { isInteracting.current = false }

    container.addEventListener('pointerdown', pause, { passive: true })
    container.addEventListener('pointerup', resume, { passive: true })
    container.addEventListener('pointerleave', resume, { passive: true })
    container.addEventListener('touchstart', pause, { passive: true })
    container.addEventListener('touchend', resume, { passive: true })

    return () => {
      cancelAnimationFrame(animationFrameId)
      container.removeEventListener('pointerdown', pause)
      container.removeEventListener('pointerup', resume)
      container.removeEventListener('pointerleave', resume)
      container.removeEventListener('touchstart', pause)
      container.removeEventListener('touchend', resume)
    }
  }, [opened, hovered])

  return (
    <div className="gallery-row" ref={scroller} role="region"
      aria-label={`Software products ${row * columns + 1} to ${(row + 1) * columns}`} tabIndex={0}>
      <div className="scene-track" style={{ width: `${sceneWidth * scale}px`, height: `${sceneHeight * scale}px` }}>
        <div className="scene" style={{ width: `${sceneWidth}px`, height: `${sceneHeight}px`, transform: `scale(${scale})` }}>
          <div className="cards">
            {cards.slice(row * columns, (row + 1) * columns).map((card, column) => {
              const index = row * columns + column
              const expanded = opened === index || hovered === column
              const selected = selectedColumn === column
              return (
                <div className={`card-position ${selected ? 'is-active' : ''} ${expanded ? 'is-expanded' : ''}`} key={card.number}
                  style={{
                    '--x': `${cardX(column, selectedColumn)}px`, '--y': `${selected ? 72 : 105}px`, '--card-color': card.color,
                    '--detail-font-size': `${16 / scale}px`, '--back-button-height': `${44 / scale}px`, zIndex: selected ? 10 : columns - column, '--card-index': column
                  }}
                  onPointerEnter={(event) => { if (event.pointerType !== 'touch') setHovered(column) }}
                  onPointerLeave={(event) => { if (event.pointerType !== 'touch') setHovered(null) }}
                  onClick={() => { if (window.matchMedia('(max-width: 768px)').matches) onToggle(index) }}
                >
                  <article className={`card pattern-${index % 3} ${selectedColumn !== null && !selected ? 'is-dimmed' : ''}`} lang="en">
                    <div className="card-face">
                      <span className="card-number">{card.number} <span>/ SOFTWARE SOLUTIONS</span></span>
                      <span className="icon-container"><ProductIcon index={index} className="product-icon" /></span>
                      <span className="card-title">{card.name}</span>

                      <div className="card-body">
                        <span className="card-support">{card.summary}</span>
                        <div className="card-details-content" id={`product-content-${card.number}`} tabIndex={expanded ? 0 : -1}
                          role="region" aria-label={`${card.name} description`} lang="en">
                          {card.description.replace(/\.\s+(?=[A-Z])/g, '.\n').split('\n').map((paragraph, i) => <p key={i} lang="en">{paragraph}</p>)}
                        </div>
                      </div>

                      <button className="card-action" type="button" tabIndex={expanded ? 0 : -1} onClick={(e) => {
                        e.stopPropagation();
                        if (expanded) {
                          setHovered(null);
                          if (opened === index) onToggle(index);
                        } else {
                          setHovered(column);
                          if (opened !== index) onToggle(index);
                        }
                      }}>
                        {expanded ? 'Close details' : 'Explore solution'}
                        <span className="card-arrow" aria-hidden="true">
                          {expanded ? (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
                          ) : (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 18 18 6M6 6h12v12" /></svg>
                          )}
                        </span>
                      </button>

                      {!expanded && (
                        <button className="card-trigger" id={`product-trigger-${card.number}`} type="button"
                          aria-label={`${card.number}. ${card.name}`} aria-expanded={expanded} aria-controls={`product-content-${card.number}`}
                          onFocus={(event) => { if (event.currentTarget.matches(':focus-visible')) setHovered(column) }}
                          onBlur={() => setHovered(null)}
                        />
                      )}
                    </div>
                  </article>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SoftwareDevelopmentProductEngineeringPage({ onClose }) {
  const [opened, setOpened] = useState(null)
  const [scale, setScale] = useState(.82)
  const viewport = useRef(null)

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  useEffect(() => {
    const observer = new ResizeObserver(([entry]) => {
      const width = entry.contentRect.width
      if (width < 768) {
        // Mobile view: maintain readable card dimensions with responsive swipe
        setScale(Math.min(1, Math.max(0.68, (width - 24) / 460)))
      } else {
        // Tablet & Desktop: scale entire scene cleanly so both left and right have equal margins without clipping
        const availableWidth = width - 48
        setScale(Math.min(1, Math.max(0.55, availableWidth / sceneWidth)))
      }
    })
    if (viewport.current) {
      observer.observe(viewport.current)
    }
    return () => observer.disconnect()
  }, [])

  const handleBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else if (onClose) {
      onClose();
    } else {
      window.location.hash = '#products-platforms';
    }
  };

  const handleHome = () => {
    if (onClose) {
      onClose();
    }
    window.location.hash = '#home';
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <main className="software-page relative" lang="en">
      <style>{sectionStyles}</style>

      {/* Top Header Navigation buttons for standalone page view */}
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8 flex items-center justify-start gap-3">
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
          <Home className="w-4 h-4 text-[#040A1A]" />
          <span>Home</span>
        </button>
      </div>

      <header className="page-intro pt-4">
        <h1>Software Development &amp; Product Engineering</h1>
        <div className="page-description">
          <p>At IB Cyber Security Private Limited, we design, develop, engineer and commercialise software products, digital platforms and technology solutions for diverse sectors and operational environments. Our software development capabilities span government technology, law enforcement, investigation, cybersecurity, enterprise systems, education, digital services and international markets.</p>
          <p>We build both proprietary and specialised software products using modern technologies, scalable software architecture, cloud computing, Artificial Intelligence, data analytics, automation, APIs and secure engineering practices. From government and institutional platforms to commercial and enterprise applications, our focus is on creating reliable, scalable and technology-driven products designed to solve real-world operational challenges.</p>
        </div>
      </header>
      <section className="gallery" ref={viewport} aria-label="Software product cards" onKeyDown={(event) => {
        if (event.key === 'Escape' && opened !== null) {
          setOpened(null)
        }
      }}>
        <p className="gallery-hint">Swipe to explore all 6 cards in each row <span aria-hidden="true">&harr;</span></p>
        {[0, 1].map((row) => <CardRow key={row} row={row} scale={scale} opened={opened}
          onToggle={(index) => setOpened((current) => current === index ? null : index)} />)}
      </section>
    </main>
  )
}
