import {useEffect,useRef,useState} from 'react';
import CopyrightLegalNoticePage from './Copyright Legal Notice/CopyrightLegalNoticePage';
import CopyrightDeclarationPage from './Copyright Declaration/CopyrightDeclarationPage';
import CopyrightOwnershipStatementPage from './Copyright Ownership Statement/CopyrightOwnershipStatementPage';
import CopyrightProtectionNoticePage from './Copyright Protection Notice/CopyrightProtectionNoticePage';
import CopyrightInfringementNoticePage from './Copyright Infringement Notice/CopyrightInfringementNoticePage';
import CopyrightUsagePolicyPage from './Copyright Usage Policy/CopyrightUsagePolicyPage';
import CopyrightReproductionPolicyPage from './Copyright Reproduction Policy/CopyrightReproductionPolicyPage';
import CopyrightPermissionPolicyPage from './Copyright Permission Policy/CopyrightPermissionPolicyPage';
import CopyrightContentProtectionPolicyPage from './Copyright Content Protection Policy/CopyrightContentProtectionPolicyPage';
import WebsiteCopyrightPolicyPage from './Website Copyright Policy/WebsiteCopyrightPolicyPage';
import DigitalContentCopyrightNoticePage from './Digital Content Copyright Notice/DigitalContentCopyrightNoticePage';
import CopyrightEnforcementPolicyPage from './Copyright Enforcement Policy/CopyrightEnforcementPolicyPage';
import CopyrightLegalDisclaimerPage from './Copyright Legal Disclaimer/CopyrightLegalDisclaimerPage';
import CopyrightRegistrationCertificatePage from './Copyright Registration & Certificate/CopyrightRegistrationCertificatePage';
import CopyrightLicensingPolicyPage from './Copyright Licensing Policy/CopyrightLicensingPolicyPage';
import CopyrightAttributionPolicyPage from './Copyright Attribution Policy/CopyrightAttributionPolicyPage';


const componentMap = {
  'Copyright Legal Notice': CopyrightLegalNoticePage,
  'Copyright Declaration': CopyrightDeclarationPage,
  'Copyright Ownership Statement': CopyrightOwnershipStatementPage,
  'Copyright Protection Notice': CopyrightProtectionNoticePage,
  'Copyright Infringement Notice': CopyrightInfringementNoticePage,
  'Copyright Usage Policy': CopyrightUsagePolicyPage,
  'Copyright Reproduction Policy': CopyrightReproductionPolicyPage,
  'Copyright Permission Policy': CopyrightPermissionPolicyPage,
  'Copyright Content Protection Policy': CopyrightContentProtectionPolicyPage,
  'Website Copyright Policy': WebsiteCopyrightPolicyPage,
  'Digital Content Copyright Notice': DigitalContentCopyrightNoticePage,
  'Copyright Enforcement Policy': CopyrightEnforcementPolicyPage,
  'Copyright Legal Disclaimer': CopyrightLegalDisclaimerPage,
  'Copyright Registration & Certificate': CopyrightRegistrationCertificatePage,
  'Copyright Licensing Policy': CopyrightLicensingPolicyPage,
  'Copyright Attribution Policy': CopyrightAttributionPolicyPage,
};


function useSaved(key,fallback){
 const [value,set]=useState(()=>{try{return JSON.parse(localStorage.getItem(key))??fallback}catch{return fallback}});
 const [error,setError]=useState('');
 useEffect(()=>{try{localStorage.setItem(key,JSON.stringify(value));setError('')}catch{setError('Storage unavailable. Changes remain only in this session.')}},[key,value]);return [value,set,error];
}

function AppleLogo({className=''}){return <svg className={className} viewBox="0 0 24 24" aria-label="Apple logo" role="img"><path fill="currentColor" d="M17.05 12.04c.02 3.27 2.87 4.36 2.9 4.37-.02.08-.46 1.56-1.5 3.09-.9 1.32-1.84 2.64-3.31 2.67-1.45.03-1.92-.86-3.58-.86-1.66 0-2.18.83-3.56.89-1.43.05-2.51-1.43-3.42-2.74-1.85-2.68-3.26-7.58-1.36-10.89.94-1.64 2.62-2.68 4.44-2.71 1.39-.03 2.7.94 3.55.94.85 0 2.44-1.16 4.12-.99.71.03 2.68.29 3.95 2.15-.1.06-2.36 1.37-2.33 4.08ZM14.32 4.04c.76-.92 1.28-2.19 1.14-3.46-1.1.04-2.43.73-3.22 1.65-.71.82-1.34 2.13-1.17 3.38 1.23.1 2.49-.63 3.25-1.57Z"/></svg>}
const colors=['#173d8c','#732d7c','#174c48','#a25823'];

export default function App({ activeItem, replayCount = 0 }){
 const [angle,setAngle]=useState({x:0,y:0}),[locked,setLocked]=useState(false),[power,setPower]=useState(true),[now,setNow]=useState(new Date()),[boot,setBoot]=useState('ready'),[batteryLevel,setBatteryLevel]=useState(100);
 const deviceRef=useRef(null);
 const [settings,setSettings,settingsError]=useSaved('ipad-settings',{brightness:100,wallpaper:0,dark:false});
 const drag=useRef(null);

 useEffect(()=>{const id=setInterval(()=>setNow(new Date()),1000);return()=>clearInterval(id)},[]);
 useEffect(()=>{if(navigator.getBattery){navigator.getBattery().then(b=>{const u=()=>setBatteryLevel(Math.round(b.level*100));u();b.addEventListener('levelchange',u)})}},[]);

 useEffect(()=>{
   const node=deviceRef.current;
   if(!node) return;
   setBoot('ready');
   try {
     const animation=node.animate([
       { transform: 'translateY(110vh) rotateX(60deg) rotateY(0deg) scale(0.2)' },
       { transform: 'translateY(-10vh) rotateX(-20deg) rotateY(220deg) scale(0.85)', offset: 0.65 },
       { transform: 'translateY(0px) rotateX(0deg) rotateY(360deg) scale(1)' }
     ], { duration: 2800, easing: 'cubic-bezier(.22,.68,.18,1)', fill: 'both' });
     animation.onfinish=()=>{
       animation.cancel();
       setAngle({x:0,y:0});
     };
     return()=>{
       try { animation.cancel(); } catch(e){}
     };
   } catch(e) {
     setAngle({x:0,y:0});
   }
 },[activeItem, replayCount]);

 useEffect(()=>{
   const handleMouseMove=(e)=>{
     if(!drag.current) return;
     const dx=e.clientX - drag.current.startX;
     const dy=e.clientY - drag.current.startY;
     setAngle({
       x: Math.max(-35, Math.min(35, drag.current.startAngleX - dy * 0.15)),
       y: drag.current.startAngleY + dx * 0.3
     });
   };
   const handleMouseUp=()=>{ drag.current = null; };
   window.addEventListener('mousemove', handleMouseMove);
   window.addEventListener('mouseup', handleMouseUp);
   return()=>{
     window.removeEventListener('mousemove', handleMouseMove);
     window.removeEventListener('mouseup', handleMouseUp);
   };
 },[]);

 useEffect(()=>{
   const deviceNode = deviceRef.current;
   if(!deviceNode) return;

   const getScrollableElement = (root) => {
     if(!root) return null;
     const candidate = root.querySelector(
       '.legal-notice-container div[style*="overflow"], .legal-notice-container div[style*="overflowY"], .screen div[style*="overflow"], .screen [style*="auto"]'
     );
     if(candidate && candidate.scrollHeight > candidate.clientHeight) return candidate;

     const screen = root.querySelector('.screen');
     if(screen) {
       const divs = screen.querySelectorAll('div');
       for(const d of divs) {
         if(d.scrollHeight > d.clientHeight) {
           const ov = window.getComputedStyle(d).overflowY;
           if(ov === 'auto' || ov === 'scroll') return d;
         }
       }
     }
     return candidate;
   };

   const handleWheel = (e) => {
     // When scrolling inside the device, scroll only the inner page inside the device
     const scrollable = getScrollableElement(deviceNode);
     if(scrollable) {
       scrollable.scrollTop += e.deltaY;
     }
     // Keep the main page still while cursor is inside the device
     e.preventDefault();
     e.stopPropagation();
   };

   deviceNode.addEventListener('wheel', handleWheel, { passive: false });
   return () => {
     deviceNode.removeEventListener('wheel', handleWheel);
   };
 },[activeItem]);

 function reset(){setAngle({x:0,y:0})}
 return <>
<style dangerouslySetInnerHTML={{__html: `:root {
    font-family: Inter, system-ui, sans-serif;
    font-synthesis: none
}

* {
    box-sizing: border-box
}

button,
input,
textarea {
    font: inherit
}

button {
    cursor: pointer
}

button:focus-visible {
    outline: 3px solid #75bdff;
    outline-offset: 3px
}

.product-scene {
    background: transparent;
    padding: 0
}

.controls>p {
    color: #94a3b8
}

.eyebrow {
    font-size: 10px;
    letter-spacing: 3px;
    color: #91a4c3
}

.badge {
    font-size: 10px;
    border: 1px solid #344154;
    padding: 10px 15px;
    border-radius: 20px;
    letter-spacing: 2px
}

.workspace {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 280px;
    gap: 50px;
    max-width: 1400px;
    margin: 40px auto
}

.stage {
    height: 620px;
    display: flex;
    align-items: center;
    justify-content: center;
    perspective: 1500px;
    position: relative
}

.device {
    width: 700px;
    height: 490px;
    position: relative;
    transform-style: preserve-3d;
    flex-shrink: 0;
    will-change: transform
}

.chassis {
    position: absolute;
    inset: 0;
    border-radius: 35px;
    background: linear-gradient(110deg, #e4e9ee, #cbd5e1 28%, #eadeca 48%, #f8fafc 68%, #94a3b8);
    border: 1px solid rgba(212, 175, 55, 0.4);
    box-shadow: 0 0 2px rgba(212, 175, 55, 0.2);
    pointer-events: none;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
}

.front,
.back {
    position: absolute;
    inset: 0;
    border-radius: 35px;
    backface-visibility: hidden !important;
    -webkit-backface-visibility: hidden !important;
    transform-style: flat !important;
    -webkit-transform-style: flat !important;
}

.front {
    transform: translateZ(6px);
    background: #08090b;
    border: 3px solid #68727c;
    padding: 22px;
    box-shadow: inset 0 0 0 2px #171b20;
}

.front,
.front *,
.screen,
.screen * {
    backface-visibility: hidden !important;
    -webkit-backface-visibility: hidden !important;
}

.screen,
.screen *,
.legal-notice-container,
.legal-notice-container * {
    overscroll-behavior: contain !important;
}

.back {
    transform: rotateY(180deg) translateZ(6px);
    background: linear-gradient(135deg, #e2e8f0 0%, #f8fafc 25%, #eadeca 50%, #fffdfa 65%, #dfd6c3 85%, #cbd5e1 100%) !important;
    border: 2.5px solid #d4af37 !important;
    box-shadow: inset 0 0 50px rgba(212, 175, 55, 0.2), inset 0 0 15px rgba(255, 255, 255, 0.8), 0 8px 25px rgba(0,0,0,0.15) !important;
    color: #b59247;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
}

.back-logo {
    width: 72px;
    height: 84px;
    font-size: 72px;
    color: #d4af37 !important;
    filter: drop-shadow(0 2px 5px rgba(180, 140, 40, 0.5)) drop-shadow(0 0 1px rgba(255, 255, 255, 0.8)) !important;
}

.back-label {
    position: absolute;
    bottom: 75px;
    font-size: 14px;
    letter-spacing: 4px;
    color: #bfa054 !important;
    font-weight: 700;
    text-shadow: 0 1px 1px rgba(255, 255, 255, 0.9);
}

.connector {
    position: absolute;
    bottom: 30px;
    letter-spacing: 8px;
    font-size: 9px;
    color: #d4af37 !important;
    filter: drop-shadow(0 0 2px rgba(212, 175, 55, 0.8)) !important;
}

.camera {
    position: absolute;
    top: 20px;
    left: 20px;
    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 45%, #eadeca 100%) !important;
    border-radius: 20px;
    width: 90px;
    height: 100px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.16), inset 0 0 0 1px rgba(255, 255, 255, 0.8) !important;
    border: 1.5px solid #d4af37 !important;
    padding: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 9px;
}

.camera i {
    width: 29px;
    height: 29px;
    border-radius: 50%;
    background: radial-gradient(circle, #163954 10%, #030509 33%, #24303d 50%, #070809 68%);
    border: 2px solid rgba(212, 175, 55, 0.7);
    box-shadow: 0 0 4px rgba(212, 175, 55, 0.3);
}

.camera small {
    width: 15px;
    height: 15px;
    background: radial-gradient(circle, #fffbe8, #e8d5a3);
    border: 1px solid rgba(212, 175, 55, 0.5);
    border-radius: 50%;
}

.lens {
    position: absolute;
    left: 50%;
    top: 8px;
    width: 6px;
    height: 6px;
    background: radial-gradient(circle, #173f6f, #04070c);
    border-radius: 50%
}

.hardware-power {
    position: absolute;
    right: 45px;
    top: -5px;
    width: 50px;
    height: 4px;
    background: #bac4ce;
    border-radius: 3px
}

.screen {
    height: 100%;
    border-radius: 15px;
    overflow: hidden;
    position: relative;
    background-image: radial-gradient(ellipse at 80% 120%, #ffbd9766, transparent 60%), radial-gradient(ellipse at 0% 10%, #63bef8aa, transparent 50%), linear-gradient(130deg, transparent 30%, #090b2944 31%, transparent 70%);
    color: white
}

.status {
    height: 28px;
    padding: 7px 18px;
    display: flex;
    justify-content: space-between;
    font-size: 9px
}

.status button {
    background: none;
    border: none;
    color: inherit;
    font-size: 9px
}

.desktop {
    padding: 17px 35px
}

.widgets {
    display: grid;
    grid-template-columns: 1.4fr 1fr;
    gap: 14px;
    height: 110px
}

.widgets>div,
.widgets>button {
    background: #eff6ff1c;
    border: 1px solid #ffffff24;
    border-radius: 18px;
    padding: 16px;
    text-align: left;
    color: white
}

.widgets span {
    font-size: 7px;
    letter-spacing: 1.6px
}

.widgets h2 {
    font-size: 30px;
    letter-spacing: -1px;
    margin: 5px 0
}

.widgets p {
    font-size: 12px;
    margin: 5px 0
}

.widgets small {
    font-size: 10px;
    opacity: .75
}

.app-grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    margin-top: 25px;
    gap: 16px
}

.app-grid button {
    background: none;
    border: 0;
    color: white;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 8px
}

.app-grid span,
.dock button {
    display: grid;
    place-items: center;
    width: 55px;
    height: 55px;
    border-radius: 13px;
    font-size: 33px;
    box-shadow: inset 0 1px 1px #ffffff66, 0 5px 9px #0003
}

.app-grid small {
    font-size: 10px
}

.dock {
    position: absolute;
    bottom: 26px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 14px;
    background: #dde5ff38;
    border: 1px solid #ffffff35;
    padding: 12px 17px;
    border-radius: 22px
}

.dock button {
    border: 0;
    color: #fff;
    width: 47px;
    height: 47px;
    font-size: 28px
}

.home-indicator {
    position: absolute;
    bottom: 8px;
    left: 50%;
    transform: translateX(-50%);
    width: 115px;
    height: 5px;
    border: 0;
    border-radius: 5px;
    background: #fff9
}

.app-window {
    position: absolute;
    inset: 28px 0 20px;
    background: #f4f5f8;
    color: #152133
}

.app-window nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 18px;
    background: #ffffffaa;
    border-bottom: 1px solid #0001;
    font-size: 12px
}

.app-window nav button {
    color: #2563eb;
    border: 0;
    background: none
}

.app-content {
    height: calc(100% - 43px);
    overflow: auto
}

.notes {
    display: flex;
    height: 100%;
    font-size: 12px
}

.notes aside {
    width: 160px;
    flex-shrink: 0;
    background: #e8eaf0;
    padding: 10px;
    overflow: auto
}

.notes aside button {
    display: block;
    width: 100%;
    text-align: left;
    padding: 10px;
    border: 0;
    border-radius: 7px;
    background: none;
    overflow-wrap: anywhere
}

.notes .selected {
    background: #f4d773
}

.notes section {
    flex: 1;
    padding: 18px;
    display: flex;
    flex-direction: column;
    min-width: 0;
    gap: 12px
}

.notes input,
.notes textarea {
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;
    color: inherit
}

.notes input {
    font-size: 21px;
    font-weight: 700
}

.notes textarea {
    flex: 1;
    resize: none;
    line-height: 1.7
}

.notes section button {
    align-self: start;
    color: #b33;
    font-size: 11px
}

.calculator {
    width: 240px;
    margin: 12px auto
}

.calculator output {
    display: block;
    background: #152133;
    color: white;
    text-align: right;
    font-size: 32px;
    padding: 10px;
    border-radius: 12px;
    overflow: hidden
}

.calculator>div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 7px;
    margin-top: 8px
}

.calculator button {
    border: 0;
    background: #dce1e9;
    border-radius: 9px;
    padding: 10px
}

.calculator button:nth-child(4n),
.calculator button:last-child {
    background: #f7a43c;
    color: #111
}

.calculator .zero {
    grid-column: span 2
}

.clock {
    text-align: center;
    padding: 20px
}

.clock p {
    font-size: 11px;
    letter-spacing: 2px;
    opacity: .6
}

.clock h2 {
    font-size: 32px;
    margin: 10px
}

.clock hr {
    margin: 15px;
    border-color: #7773
}

.clock button {
    padding: 8px 16px;
    background: #347ce7;
    color: white;
    border-radius: 8px;
    margin: 6px;
    border: 0
}

.settings,
.files {
    padding: 22px;
    font-size: 13px
}

.settings h2,
.files h2 {
    font-size: 24px;
    margin-bottom: 18px
}

.settings label {
    display: flex;
    justify-content: space-between;
    padding: 15px 0;
    border-bottom: 1px solid #7773
}

.settings input[type=range] {
    width: 180px
}

.swatches {
    display: flex;
    gap: 12px;
    margin: 12px 0
}

.swatches button {
    width: 50px;
    height: 35px;
    border-radius: 8px;
    border: 2px solid #fff
}

.muted {
    opacity: .6;
    font-size: 11px;
    margin-top: 25px
}

.photos {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    padding: 18px
}

.photos button {
    border: none;
    text-align: left;
    background: none;
    color: inherit;
    font-size: 11px
}

.art {
    height: 120px;
    border-radius: 10px;
    background-image: radial-gradient(circle at 30% 50%, #fff8 0, transparent 40%), linear-gradient(140deg, transparent 35%, #ffffff88 36%, transparent 65%), radial-gradient(ellipse at 90% 90%, #000a, transparent 60%)
}

.photo-view {
    padding: 15px
}

.photo-view button {
    margin-bottom: 10px
}

.photo-view .art {
    height: 240px
}

.files button {
    display: block;
    padding: 12px;
    background: #fff8;
    border-radius: 8px;
    margin-top: 10px;
    width: 100%;
    text-align: left
}

.dark .app-window {
    background: #182334;
    color: #eee
}

.dark .notes aside {
    background: #111b28
}

.dark .notes .selected {
    background: #615523
}

.dark .app-window nav {
    background: #263247
}

.controls {
    padding-top: 70px
}

.controls h2 {
    font-size: 30px;
    line-height: 1.2;
    letter-spacing: -1px;
    margin: 14px 0
}

.controls>p {
    font-size: 13px;
    line-height: 1.8
}

.mode {
    display: flex;
    background: #ffffff08;
    border: 1px solid #ffffff15;
    border-radius: 12px;
    padding: 4px;
    margin: 24px 0
}

.mode button {
    flex: 1;
    padding: 10px 8px;
    border: 0;
    border-radius: 8px;
    background: none;
    color: #96a6bb;
    font-size: 12px
}

.mode .active {
    background: #dce9fc;
    color: #142336
}

.controls label {
    display: block;
    font-size: 11px;
    color: #a7b8ce;
    margin: 18px 0
}

.controls input[type=range] {
    width: 100%;
    display: block;
    margin-top: 10px;
    accent-color: #adc8f5
}

.control-actions {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    margin: 24px 0
}

.control-actions button {
    padding: 10px;
    border: 1px solid #ffffff20;
    border-radius: 8px;
    background: #ffffff08;
    color: #e5ebf5;
    font-size: 11px
}

.controls>small {
    font-size: 10px;
    color: #657992;
    line-height: 1.8
}

.off,
.lock {
    position: absolute;
    inset: 0;
    width: 100%;
    background: #03060a;
    border: 0;
    color: white
}

.off {
    font-size: 13px;
    color: #697685
}

.lock {
    background: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center
}

.lock h2 {
    font-size: 60px;
    margin: 15px
}

.lock p {
    font-size: 14px
}

.lock small {
    margin-top: 100px
}

@media(max-width:1150px) {
    .workspace {
        grid-template-columns: 1fr;
        gap: 0
    }

    .controls {
        padding-top: 0;
        max-width: 500px;
        margin: auto;
        width: 100%
    }

    .stage {
        height: 530px
    }

    .device {
        zoom: .85
    }
}

@media(max-width:650px) {
    .badge {
        display: none
    }

    .stage {
        height: 340px;
        perspective: 900px
    }

    .device {
        zoom: .47
    }

    .workspace {
        margin-top: 20px
    }
}

@media(prefers-reduced-motion:reduce) {
    .device {
        will-change: auto
    }
}

.product-scene {
    min-height: 100svh;
    padding: 0;
    display: grid;
    place-items: center;
    background: transparent !important;
    overflow: visible !important;
}

.workspace {
    display: block;
    width: 100%;
    max-width: none;
    margin: 0
}

.stage {
    min-height: 540px;
    perspective: 1800px;
    touch-action: pan-y
}

.stage:after {
    content: '';
    position: absolute;
    left: 50%;
    top: calc(50% + 230px);
    width: 570px;
    height: 30px;
    transform: translateX(-50%);
    border-radius: 50%;
    background: radial-gradient(ellipse, #25293622, transparent 70%);
    pointer-events: none;
    z-index: 0
}

.device {
    width: 760px;
    height: 530px;
    z-index: 1;
    zoom: 1.15;
    cursor: grab
}

.device:active {
    cursor: grabbing
}

.lens {
    width: 5px;
    height: 5px;
    top: 11px
}

.screen {
    border-radius: 12px;
    cursor: auto;
    background-image: radial-gradient(ellipse at 70% 120%, #ffc0caaa, transparent 65%), radial-gradient(ellipse at 10% 0%, #69d3ffaa, transparent 65%), conic-gradient(from 140deg at 65% 45%, transparent, #0c195677, #7782d855, transparent);
}

.desktop {
    padding: 22px 38px
}

.widgets {
    height: 126px
}

.widgets>div,
.widgets>button {
    background: #f2f7ff27;
    border-color: #ffffff29;
    box-shadow: 0 3px 15px #00000008
}

.widgets span {
    font-size: 8px
}

.widgets h2 {
    font-size: 36px
}

.app-grid {
    margin-top: 29px;
    gap: 22px
}

.app-grid span {
    width: 61px;
    height: 61px;
    border-radius: 15px
}

.app-grid small {
    font-size: 11px
}

.dock {
    bottom: 28px;
    background: #e6edf652;
    padding: 12px 19px;
    gap: 16px;
    box-shadow: 0 8px 20px #0002
}

.dock button {
    width: 51px;
    height: 51px
}

.boot-screen {
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    background: #000;
    z-index: 20
}

.boot-logo {
    width: 55px;
    height: 65px;
    color: #fff;
    animation: logo-appear .6s ease both
}

.save-error {
    position: fixed;
    bottom: 12px;
    font-size: 12px;
    color: #922
}

.home-indicator {
    width: 125px
}

.off {
    background: #000
}

@keyframes logo-appear {
    from {
        opacity: 0
    }

    to {
        opacity: 1
    }
}

@media(max-width:1100px) {
    .device {
        zoom: .85
    }

    .stage {
        min-height: 480px
    }
}

@media(max-width:760px) {
    .device {
        zoom: .62
    }

    .stage {
        min-height: 400px
    }

    .stage:after {
        width: 360px;
        top: calc(50% + 158px)
    }
}

@media(max-width:500px) {
    .device {
        zoom: .43
    }

    .stage {
        min-height: 300px
    }

    .stage:after {
        width: 240px;
        top: calc(50% + 110px)
    }
}

@media(max-width:360px) {
    .device {
        zoom: .36
    }
}

.desktop {
    animation: home-appear .55s ease both
}

@keyframes home-appear {
    from {
        opacity: 0;
        transform: scale(1.04)
    }

    to {
        opacity: 1;
        transform: scale(1)
    }
}

@media(prefers-reduced-motion:reduce) {

    .desktop,
    .boot-logo {
        animation: none
    }
}

.iphone-only {
    display: none !important
}

@media(max-width:760px) {
    .ipad-only {
        display: none !important
    }

    .iphone-only {
        display: block !important
    }

    .iphone-buttons.iphone-only {
        display: flex !important
    }

    .device {
        width: 360px !important;
        height: 720px !important;
        zoom: 0.8 !important
    }

    .stage {
        min-height: 600px
    }

    .stage:after {
        width: 280px;
        top: calc(50% + 320px)
    }

    .chassis {
        border-radius: 55px !important;
        border-color: #3a1114 !important;
        background: linear-gradient(120deg, #5a1c22, #3b0e12 25%, #682129 55%, #3a1114) !important
    }

    .front {
        border-radius: 55px !important;
        padding: 14px !important;
        background: #050101 !important;
        border-color: #1e0a0c !important;
        transform: translateZ(10px) !important
    }

    .back {
        border-radius: 55px !important;
        background: linear-gradient(115deg, #4e1a1e, #46161a 43%, #521d22 80%, #3d1316) !important;
        border-color: #3d1316 !important;
        transform: translateZ(-10px) rotateY(180deg) !important
    }

    .iphone-camera {
        position: absolute;
        top: 18px;
        left: 18px;
        width: 150px;
        height: 155px;
        border-radius: 38px;
        background: linear-gradient(145deg, #642127, #431519);
        box-shadow: 0 3px 6px #00000066, inset 0 0 0 1px #752930;
        display: flex;
        flex-wrap: wrap
    }

    .lens-main {
        position: absolute;
        top: 15px;
        left: 15px;
        width: 55px;
        height: 55px;
        border-radius: 50%;
        background: radial-gradient(circle, #0a0a0a 20%, #181818);
        border: 4px solid #361216;
        box-shadow: inset 0 0 5px #000
    }

    .lens-ultra {
        position: absolute;
        bottom: 15px;
        left: 15px;
        width: 55px;
        height: 55px;
        border-radius: 50%;
        background: radial-gradient(circle, #0a0a0a 20%, #181818);
        border: 4px solid #361216;
        box-shadow: inset 0 0 5px #000
    }

    .lens-tele {
        position: absolute;
        top: 50px;
        right: 15px;
        width: 55px;
        height: 55px;
        border-radius: 50%;
        background: radial-gradient(circle, #0a0a0a 20%, #181818);
        border: 4px solid #361216;
        box-shadow: inset 0 0 5px #000
    }

    .flash {
        position: absolute;
        top: 25px;
        right: 32px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #fff5e0;
        border: 2px solid #ddd2be;
        box-shadow: inset 0 0 3px #fff
    }

    .lidar {
        position: absolute;
        bottom: 30px;
        right: 32px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #151515;
        border: 1px solid #222
    }

    .back-logo {
        top: 50% !important;
        left: 50% !important;
        transform: translate(-50%, -50%) !important;
        position: absolute !important;
        color: #350e12 !important;
        filter: none !important;
        width: 50px !important;
        height: 60px !important
    }

    .screen {
        border-radius: 42px !important;
        background-image: radial-gradient(circle at 0% 50%, #b5474c 0%, transparent 70%), radial-gradient(circle at 100% 100%, #571c21 0%, transparent 60%), linear-gradient(to bottom, #1c080a, #471419) !important;
        background-color: transparent !important
    }

    .dynamic-island {
        position: absolute;
        top: 12px;
        left: 50%;
        transform: translateX(-50%);
        width: 115px;
        height: 34px;
        background: #000;
        border-radius: 20px;
        z-index: 100;
        box-shadow: inset 0 0 2px #fff3
    }

    .island-lens {
        position: absolute;
        top: 50%;
        right: 12px;
        transform: translateY(-50%);
        width: 14px;
        height: 14px;
        border-radius: 50%;
        background: radial-gradient(circle, #111, #000);
        box-shadow: inset 0 0 2px #fff6
    }

    .hardware-power {
        width: 4px !important;
        height: 75px !important;
        right: -4px !important;
        top: 220px !important;
        border-radius: 0 3px 3px 0 !important;
        background: linear-gradient(to right, #3a1114, #682129) !important;
        border: 1px solid #1e0a0c !important;
        border-left: none !important;
        box-shadow: 2px 2px 5px #00000088 !important;
        z-index: -1;
    }

    .iphone-buttons {
        position: absolute;
        left: -4px;
        top: 170px;
        display: flex;
        flex-direction: column;
        gap: 15px;
        width: 4px;
        z-index: -1;
    }

    .btn-action, .btn-vol-up, .btn-vol-down {
        background: linear-gradient(to left, #3a1114, #682129) !important;
        border-radius: 3px 0 0 3px !important;
        border: 1px solid #1e0a0c !important;
        border-right: none !important;
        box-shadow: -2px 2px 5px #00000088 !important;
    }

    .btn-action {
        height: 35px;
    }

    .btn-vol-up {
        height: 60px;
    }

    .btn-vol-down {
        height: 60px;
    }

    .desktop {
        padding: 30px 15px !important
    }

    .widgets {
        grid-template-columns: 1fr !important;
        height: auto !important;
        gap: 15px !important
    }

    .app-grid {
        grid-template-columns: repeat(4, 1fr) !important;
        gap: 20px 10px !important;
        margin-top: 20px !important
    }

    .dock {
        width: calc(100% - 30px) !important;
        justify-content: space-around !important;
        bottom: 20px !important
    }

    .app-window {
        inset: 40px 0 15px !important;
    }

    .home-indicator {
        bottom: 6px !important;
        width: 130px !important
    }
}

/* --- USABILITY FIXES --- */

/* Issue 4: Hide H1 visually but keep for screen readers */
.sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border-width: 0; }

/* Issue 1: Consistent border radii (reducing distinct sizes) */
.badge, .dynamic-island { border-radius: 24px !important; }
.widgets > div, .widgets > button, .screen, .app-grid span, .dock button span, .calculator output, .dock { border-radius: 16px !important; }
.notes aside button, .calculator button, .clock button, .swatches button, .art, .files button, .mode button, .control-actions button, .btn-ui { border-radius: 8px !important; }

/* Issue 3: Typographic hierarchy (larger heading) */
.widgets h2 { font-size: 42px !important; font-weight: 700; line-height: 1.1; }

/* Issue 5 & 6: TODAY label spacing and QUICK NOTE font */
.widgets > div, .widgets > button { padding: 20px !important; display: flex !important; flex-direction: column !important; justify-content: center !important; }
.widgets span { font-family: Inter, system-ui, sans-serif !important; margin-bottom: 8px !important; display: block; font-weight: 600; }

/* Issue 7: Hardware buttons hit targets (44px min) */
.hardware-power::after, .btn-action::after, .btn-vol-up::after, .btn-vol-down::after { content: ''; position: absolute; top: -15px; bottom: -15px; left: -15px; right: -15px; min-width: 44px; min-height: 44px; }

/* Issue 8: Home indicator hit target (44px min) */
.home-indicator::after { content: ''; position: absolute; top: -20px; bottom: -20px; left: -20px; right: -20px; min-height: 44px; }

/* Issue 10: Dock icons size matching main grid */
.dock { height: auto !important; }
.dock button { width: 61px !important; height: auto !important; display: flex !important; flex-direction: column !important; align-items: center !important; gap: 6px !important; background: transparent !important; box-shadow: none !important; padding: 0 !important; overflow: visible !important; }
.dock button span { width: 61px; height: 61px; display: flex; align-items: center; justify-content: center; box-shadow: inset 0 1px 1px #ffffff66, 0 5px 9px #0003; border-radius: 16px; font-size: 33px; }
@media(min-width: 761px) {
  .dock button { width: 55px !important; }
  .dock button span { width: 55px; height: 55px; font-size: 33px; }
}

/* Issue 12 & 13: Centering icons precisely */
.app-grid span, .dock button span { display: grid !important; place-items: center !important; line-height: 1 !important; }

/* Issue 15: Calculator label truncation */
.app-grid small, .dock small { font-size: 11px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 100%; display: block; text-align: center; }`}} />
<div className="product-scene" style={{ background: 'transparent' }}>
 <h1 className="sr-only">iPad Spatial Studio</h1>
 <div className="workspace"><section className="stage" aria-label="Interactive iPad.">
 <div 
   ref={deviceRef} 
   className="device" 
   style={{
     transform:`rotateX(${angle.x}deg) rotateY(${angle.y}deg)`,
     transition: drag.current ? 'none' : 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)'
   }}
   onMouseDown={(e)=>{
     if (e.target.closest('button, input, a, .legal-notice-container')) return;
     drag.current = { startX: e.clientX, startY: e.clientY, startAngleX: angle.x, startAngleY: angle.y };
   }}
 >
 <div className="front"><button aria-label="Power button" className="hardware-power" onClick={()=>{if(boot==='ready')setPower(p=>!p)}}/>
 <div className="iphone-buttons iphone-only"><button className="btn-action"/><button className="btn-vol-up"/><button className="btn-vol-down"/></div>
 <div className="dynamic-island iphone-only"><div className="island-lens"/></div>
 <div className={`screen ${settings?.dark?'dark':''}`} style={{pointerEvents:boot==='ready'?'auto':'none',filter:`brightness(${Math.max(Number(settings?.brightness)||100, 20)}%)`,backgroundColor:boot==='ready'?(colors[settings?.wallpaper]||colors[0]):'#000',backgroundImage:boot==='ready'?undefined:'none'}}>
 {boot==='flip'?<div className="boot-screen"/>:boot==='logo'?<div className="boot-screen"><AppleLogo className="boot-logo"/></div>:!power?<button className="off" onClick={()=>setPower(true)}>Tap to wake</button>:locked?<button className="lock" onClick={()=>setLocked(false)}><h2>{now.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})}</h2><p>{now.toLocaleDateString(undefined,{weekday:'long',month:'long',day:'numeric'})}</p><small>Tap to unlock</small></button>:<><div className="status"><span>{now.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})}<span className="ipad-only"> &nbsp; {now.toLocaleDateString([],{month:'short',day:'numeric'})}</span></span><div style={{display:'flex',gap:'10px',alignItems:'center'}}><span><span className="ipad-only">▰ Wi-Fi · </span>{batteryLevel}% ▣</span><button aria-label="Lock screen" onClick={()=>setLocked(true)} className="ipad-only" style={{background:'#ffffff33',borderRadius:'4px',padding:'2px 6px'}}>🔒 Lock</button></div></div>
  {(()=>{
    const ComponentToRender = activeItem?.name ? componentMap[activeItem.name] : CopyrightLegalNoticePage;
    return ComponentToRender ? <ComponentToRender settings={settings} /> : null;
  })()}
 <button className="home-indicator" aria-label="Go home" /></>}
 </div></div>
 {Array.from({length:11},(_,i)=><div key={i} className="chassis" style={{transform:`translateZ(${i-5}px)`}}/>)}
 <div className="back">
 <div className="camera ipad-only"><i/><i/><small/></div>
 <div className="iphone-camera iphone-only"><div className="lens-main"/><div className="lens-ultra"/><div className="lens-tele"/><div className="flash"/><div className="lidar"/></div>
 <AppleLogo className="back-logo"/><span className="back-label ipad-only">iPad</span><div className="connector ipad-only">● ● ●</div>
 </div>
 </div></section>
 </div>{settingsError&&<p className="save-error" role="alert">{settingsError}</p>}</div>
</>
}
