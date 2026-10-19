import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { screenData, sceneTheme, capabilities } from './APIDevelopmentIntegrationServicesPageData.js';
import { Home } from 'lucide-react';

/**
 * API Development & Integration Services (3D WebGL Scene)
 * Real-time 3D WebGL illustration of the API Architecture & Integration Services ecosystem:
 * - Ultra-sleek, compact workstation laptop (perfectly proportioned)
 * - Rotating coral-pink 3D settings gear wheel (balanced, refined scale)
 * - Stacked 3D hardware server blades (peach, white with glowing cyan LEDs, lilac)
 * - Native subpixel-sharp overlay synchronized with 3D laptop screen
 * - Interactive Prev/Next capability navigation controls on cyan laptop deck base
 * - Glowing data conduits with traveling photon packets
 * - Single-screen auto-fit without scroll
 */

export default function ApiDevelopmentIntegrationServices({ onClose, onHome, className = '' }) {
  const containerRef = useRef(null);
  const [overlayStyle, setOverlayStyle] = useState(null);
  const [gearHubOverlayStyle, setGearHubOverlayStyle] = useState(null);
  const [deckStyle, setDeckStyle] = useState(null);
  const [isIntroSettled, setIsIntroSettled] = useState(false);
  const [pageIndex, setPageIndex] = useState(0);

  const handleBack = () => {
    if (onClose) onClose();
    else if (window.history.length > 1) window.history.back();
    else window.location.hash = '#it-services';
  };

  const handleHome = () => {
    if (onHome) onHome();
    else if (onClose) onClose();
    window.location.hash = '#home';
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const cameraRef = useRef(null);
  const screenMeshRef = useRef(null);
  const renderCanvasRef = useRef(null);
  const screenTextureRef = useRef(null);

  // Unified list: Item 0 is the Overview, Items 1-66 are the 66 capabilities
  const allItems = [
    {
      id: 0,
      title: screenData.heading || 'API Development & Integration',
      category: screenData.category || 'Ecosystem Architecture',
      description: screenData.description || 'IBCS API Development & Integration focuses on building secure, scalable application programming interfaces that enable seamless communication between disparate software systems. We facilitate smooth data exchange and enhance system interoperability across enterprise environments.',
    },
    ...(capabilities || []),
  ];

  const totalItems = allItems.length;
  const currentItem = allItems[pageIndex] || allItems[0];
  const currentTitle = currentItem.title;
  const currentCategory = currentItem.category;
  const currentDescription = currentItem.description;

  const currentTitleRef = useRef(currentTitle);
  currentTitleRef.current = currentTitle;
  const currentDescRef = useRef(currentDescription);
  currentDescRef.current = currentDescription;
  const currentCatRef = useRef(currentCategory);
  currentCatRef.current = currentCategory;
  const pageIndexRef = useRef(pageIndex);
  pageIndexRef.current = pageIndex;

  const handlePrev = (e) => {
    if (e) e.stopPropagation();
    setPageIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = (e) => {
    if (e) e.stopPropagation();
    setPageIndex((prev) => Math.min(totalItems - 1, prev + 1));
  };

  // Touch swipe support for mobile navigation (swipe left -> next, swipe right -> prev)
  const touchStartXRef = useRef(0);
  const touchStartYRef = useRef(0);

  const handleTouchStart = (e) => {
    if (e.touches && e.touches.length > 0) {
      touchStartXRef.current = e.touches[0].clientX;
      touchStartYRef.current = e.touches[0].clientY;
    }
  };

  const handleTouchEnd = (e) => {
    if (e.changedTouches && e.changedTouches.length > 0) {
      const deltaX = e.changedTouches[0].clientX - touchStartXRef.current;
      const deltaY = e.changedTouches[0].clientY - touchStartYRef.current;
      if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY) * 1.5) {
        if (deltaX < 0) {
          setPageIndex((prev) => Math.min(totalItems - 1, prev + 1));
        } else {
          setPageIndex((prev) => Math.max(0, prev - 1));
        }
      }
    }
  };

  // Keyboard navigation support (ArrowLeft / ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        setPageIndex((prev) => Math.max(0, prev - 1));
      } else if (e.key === 'ArrowRight') {
        setPageIndex((prev) => Math.min(totalItems - 1, prev + 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [totalItems]);

  // Synchronize 3D canvas texture with current capability on page change
  useEffect(() => {
    if (renderCanvasRef.current && screenTextureRef.current) {
      renderCanvasRef.current(currentTitle, currentDescription, currentCategory, pageIndex);
      screenTextureRef.current.needsUpdate = true;
    }
  }, [currentTitle, currentDescription, currentCategory, pageIndex]);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    // --- 1. Scene & Camera Setup ---
    const scene = new THREE.Scene();

    const width = container.clientWidth || 1200;
    const height = container.clientHeight || 800;
    const aspect = width / height;

    // Perspective camera with dynamic auto-fit so the entire composition fits in any screen size
    const computeFittedCameraZ = (currentAspect) => {
      if (currentAspect < 0.85) {
        // Very tall narrow mobile portrait
        const targetH = 8.6;
        const targetW = 9.8;
        const fovRad = (38 * Math.PI) / 360;
        const zForH = (targetH / 2) / Math.tan(fovRad);
        const zForW = (targetW / 2) / (Math.tan(fovRad) * currentAspect);
        return Math.max(zForH, zForW, 12.0);
      } else if (currentAspect < 1.25) {
        // Mobile screen / tablet square (height ~330-370, width ~360-430, aspect ~1.05 - 1.22)
        const targetH = 7.6;
        const targetW = 9.8;
        const fovRad = (38 * Math.PI) / 360;
        const zForH = (targetH / 2) / Math.tan(fovRad);
        const zForW = (targetW / 2) / (Math.tan(fovRad) * currentAspect);
        return Math.max(zForH, zForW, 11.5);
      } else {
        // Desktop landscape
        const targetH = 8.6;
        const targetW = 12.6;
        const fovRad = (38 * Math.PI) / 360;
        const zForH = (targetH / 2) / Math.tan(fovRad);
        const zForW = (targetW / 2) / (Math.tan(fovRad) * currentAspect);
        return Math.max(zForH, zForW, 12.6);
      }
    };

    const camera = new THREE.PerspectiveCamera(38, aspect, 0.1, 100);
    camera.position.set(0, 0, computeFittedCameraZ(aspect));
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;

    container.appendChild(renderer.domElement);

    // Root group for the whole illustration
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // --- 2. Lighting ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.95);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 2.1);
    dirLight.position.set(6, 10, 9);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 2048;
    dirLight.shadow.mapSize.height = 2048;
    dirLight.shadow.camera.near = 0.5;
    dirLight.shadow.camera.far = 30;
    dirLight.shadow.camera.left = -11;
    dirLight.shadow.camera.right = 11;
    dirLight.shadow.camera.top = 11;
    dirLight.shadow.camera.bottom = -11;
    dirLight.shadow.bias = -0.0005;
    scene.add(dirLight);

    const fillLight = new THREE.DirectionalLight(0x93c5fd, 0.6);
    fillLight.position.set(-8, -4, 6);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xffedd5, 0.5);
    rimLight.position.set(0, 8, -3);
    scene.add(rimLight);

    // --- 3. Background 3D Pillow / Blob Slab ---
    function createBlobShape() {
      const shape = new THREE.Shape();
      const points = [
        new THREE.Vector2(0.0, 4.3),    // Top smooth dome over gear
        new THREE.Vector2(3.4, 3.5),    // Top right curve
        new THREE.Vector2(5.8, 1.2),    // Upper right
        new THREE.Vector2(6.0, -1.4),   // Mid right behind laptop
        new THREE.Vector2(5.4, -3.6),   // Lower right
        new THREE.Vector2(2.8, -4.3),   // Bottom right
        new THREE.Vector2(0.0, -4.4),   // Bottom center
        new THREE.Vector2(-3.2, -4.1),  // Bottom left behind server
        new THREE.Vector2(-5.0, -2.0),  // Mid left
        new THREE.Vector2(-5.0, 1.2),   // Upper left
        new THREE.Vector2(-2.8, 3.5),   // Top left curve
        new THREE.Vector2(0.0, 4.3),    // Smooth closure
      ];

      shape.moveTo(points[0].x, points[0].y);
      shape.splineThru(points.slice(1));
      return shape;
    }

    const blobGeo = new THREE.ExtrudeGeometry(createBlobShape(), {
      depth: 0.6,
      bevelEnabled: true,
      bevelThickness: 0.35,
      bevelSize: 0.35,
      bevelSegments: 6,
    });
    blobGeo.center();

    const blobMat = new THREE.MeshPhysicalMaterial({
      color: sceneTheme.blob.color,
      roughness: 0.45,
      metalness: 0.05,
      clearcoat: 0.25,
      clearcoatRoughness: 0.3,
    });

    const blobMesh = new THREE.Mesh(blobGeo, blobMat);
    blobMesh.position.set(0.15, -0.2, -0.9);
    blobMesh.castShadow = true;
    blobMesh.receiveShadow = true;
    mainGroup.add(blobMesh);

    // Soft shadow receiver floor
    const groundGeo = new THREE.PlaneGeometry(36, 36);
    const groundMat = new THREE.ShadowMaterial({ opacity: 0.12 });
    const groundMesh = new THREE.Mesh(groundGeo, groundMat);
    groundMesh.position.set(0, 0, -1.35);
    groundMesh.receiveShadow = true;
    mainGroup.add(groundMesh);

    // --- 4. Central 3D Settings Gear Wheel (Balanced, Refined & Scaled Down) ---
    function createGearShape(teeth = 6, outerR = 1.55, innerR = 1.05) {
      const shape = new THREE.Shape();
      const step = (Math.PI * 2) / teeth;

      for (let i = 0; i < teeth; i++) {
        const angle = i * step + Math.PI / 2;
        const half = step / 2;

        const a1 = angle - half * 0.36;
        const a2 = angle + half * 0.36;
        const v1 = angle + half * 0.64;
        const v2 = angle + step - half * 0.64;

        const x1 = Math.cos(a1) * outerR;
        const y1 = Math.sin(a1) * outerR;
        const x2 = Math.cos(a2) * outerR;
        const y2 = Math.sin(a2) * outerR;

        const vx1 = Math.cos(v1) * innerR;
        const vy1 = Math.sin(v1) * innerR;
        const vx2 = Math.cos(v2) * innerR;
        const vy2 = Math.sin(v2) * innerR;

        if (i === 0) shape.moveTo(x1, y1);
        else shape.lineTo(x1, y1);

        shape.lineTo(x2, y2);
        shape.lineTo(vx1, vy1);
        shape.lineTo(vx2, vy2);
      }
      shape.closePath();
      return shape;
    }

    const gearGeo = new THREE.ExtrudeGeometry(createGearShape(sceneTheme.gear.teeth, sceneTheme.gear.outerR, sceneTheme.gear.innerR), {
      depth: 0.42,
      bevelEnabled: true,
      bevelThickness: 0.1,
      bevelSize: 0.08,
      bevelSegments: 4,
    });
    gearGeo.center();

    const gearMat = new THREE.MeshPhysicalMaterial({
      color: sceneTheme.gear.color,
      roughness: 0.25,
      metalness: 0.1,
      clearcoat: 0.65,
      clearcoatRoughness: 0.15,
    });

    const gearMesh = new THREE.Mesh(gearGeo, gearMat);
    gearMesh.position.set(0, 1.45, 0.42);
    gearMesh.castShadow = true;
    gearMesh.receiveShadow = true;
    mainGroup.add(gearMesh);

    // --- 4b. Central Settings Gear "API" Hub Badge (Crisply & Optically Centered) ---
    const hubConfig = sceneTheme.gear.hub || {
      radius: 0.74,
      text: 'API',
      textColor: '#252156',
      bgColor: '#ffffff',
      borderColor: '#252156',
      borderWidth: 28,
      accentRingColor: 'rgba(37, 33, 86, 0.12)',
    };

    const hubCanvas = document.createElement('canvas');
    hubCanvas.width = 1024;
    hubCanvas.height = 1024;
    const hCtx = hubCanvas.getContext('2d');

    const renderHubCanvas = () => {
      if (!hCtx) return;
      const size = 1024;
      const cx = size / 2;
      const cy = size / 2;
      const r = 490;

      hCtx.clearRect(0, 0, size, size);

      // 1. Crisp white circular hub base
      hCtx.beginPath();
      hCtx.arc(cx, cy, r, 0, Math.PI * 2);
      hCtx.fillStyle = hubConfig.bgColor || '#ffffff';
      hCtx.fill();

      // 2. Signature deep navy border rim matching reference
      hCtx.lineWidth = hubConfig.borderWidth || 28;
      hCtx.strokeStyle = hubConfig.borderColor || '#252156';
      hCtx.stroke();

      // 3. Subtle inner accent ring for high-end depth
      hCtx.beginPath();
      hCtx.arc(cx, cy, r - 32, 0, Math.PI * 2);
      hCtx.lineWidth = 4;
      hCtx.strokeStyle = hubConfig.accentRingColor || 'rgba(37, 33, 86, 0.12)';
      hCtx.stroke();

      // 4. Bold "API" Typography - Perfectly & Optically Centered
      const text = hubConfig.text || 'API';
      const fontSize = 350;
      hCtx.font = `900 ${fontSize}px "Plus Jakarta Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;
      hCtx.fillStyle = hubConfig.textColor || '#252156';
      hCtx.textAlign = 'center';
      hCtx.textBaseline = 'middle';

      // Optical vertical lift for all-caps (capital glyphs visual center is slightly above em-box center)
      const opticalY = cy - fontSize * 0.05;
      hCtx.fillText(text, cx, opticalY);
    };

    renderHubCanvas();

    const hubTexture = new THREE.CanvasTexture(hubCanvas);
    hubTexture.generateMipmaps = false;
    hubTexture.minFilter = THREE.LinearFilter;
    hubTexture.magFilter = THREE.LinearFilter;
    hubTexture.colorSpace = THREE.SRGBColorSpace;
    hubTexture.needsUpdate = true;

    // Hub Group is centered at (0, 1.45), precisely concentric with gearMesh
    // gearMesh front face is at world z = 0.73 (z=0.42 + 0.31).
    // Placing hubGroup at z = 0.75 ensures the hub sits proudly on the front face of the gear!
    const hubGroup = new THREE.Group();
    hubGroup.position.set(0, 1.45, 0.75);
    mainGroup.add(hubGroup);

    // Beveled cylindrical 3D backing rim (depth 0.06, centered at z=-0.01)
    const hubCylGeo = new THREE.CylinderGeometry(hubConfig.radius, hubConfig.radius, 0.06, 64);
    hubCylGeo.rotateX(Math.PI / 2);
    const hubCylMat = new THREE.MeshPhysicalMaterial({
      color: 0x252156,
      roughness: 0.25,
      metalness: 0.1,
      clearcoat: 0.4,
    });
    const hubCylMesh = new THREE.Mesh(hubCylGeo, hubCylMat);
    hubCylMesh.position.set(0, 0, -0.01);
    hubCylMesh.castShadow = true;
    hubGroup.add(hubCylMesh);

    // Front high-resolution face with centered "API"
    const hubFrontGeo = new THREE.CircleGeometry(hubConfig.radius - 0.005, 64);
    const hubFrontMat = new THREE.MeshBasicMaterial({
      map: hubTexture,
      transparent: true,
      depthTest: true,
      depthWrite: true,
      side: THREE.DoubleSide,
    });
    const hubFrontMesh = new THREE.Mesh(hubFrontGeo, hubFrontMat);
    hubFrontMesh.position.set(0, 0, 0.025);
    hubFrontMesh.renderOrder = 20;
    hubGroup.add(hubFrontMesh);

    // --- 5. 3D Server Blades (Left Side) ---
    const serverGroup = new THREE.Group();
    serverGroup.position.set(-3.3, -1.7, 0.25);
    mainGroup.add(serverGroup);

    function createRoundedBoxShape(w, h, r) {
      const shape = new THREE.Shape();
      const x = -w / 2;
      const y = -h / 2;
      shape.moveTo(x + r, y);
      shape.lineTo(x + w - r, y);
      shape.quadraticCurveTo(x + w, y, x + w, y + r);
      shape.lineTo(x + w, y + h - r);
      shape.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
      shape.lineTo(x + r, y + h);
      shape.quadraticCurveTo(x, y + h, x, y + h - r);
      shape.lineTo(x, y + r);
      shape.quadraticCurveTo(x, y, x + r, y);
      return shape;
    }

    const srvW = 2.5;
    const srvH = 0.88;
    const srvDepth = 0.45;
    const srvShape = createRoundedBoxShape(srvW, srvH, 0.15);

    const srvGeo = new THREE.ExtrudeGeometry(srvShape, {
      depth: srvDepth,
      bevelEnabled: true,
      bevelThickness: 0.08,
      bevelSize: 0.06,
      bevelSegments: 3,
    });

    const serverColors = sceneTheme.servers;

    serverColors.forEach((cfg) => {
      const mat = new THREE.MeshPhysicalMaterial({
        color: cfg.color,
        roughness: 0.25,
        clearcoat: 0.4,
      });

      const mesh = new THREE.Mesh(srvGeo, mat);
      mesh.position.set(0, cfg.y, 0);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      serverGroup.add(mesh);

      // Drive Slots
      const slotMat = new THREE.MeshBasicMaterial({ color: 0x252156 });
      const slotGeo = new THREE.CapsuleGeometry(0.045, 0.26, 4, 8);
      for (let s = 0; s < 3; s++) {
        const slot = new THREE.Mesh(slotGeo, slotMat);
        slot.position.set(-0.8 + s * 0.23, cfg.y, srvDepth + 0.09);
        serverGroup.add(slot);
      }

      // LED Diodes
      for (let l = 0; l < 2; l++) {
        const ledGeo = new THREE.SphereGeometry(0.11, 16, 16);
        let ledMat;
        if (cfg.isCyanLed) {
          ledMat = new THREE.MeshStandardMaterial({
            color: 0x00f0ff,
            emissive: 0x00f0ff,
            emissiveIntensity: 2.2,
            roughness: 0.1,
          });
        } else {
          ledMat = new THREE.MeshPhysicalMaterial({
            color: 0xffffff,
            roughness: 0.15,
            clearcoat: 0.8,
          });
        }
        const ledMesh = new THREE.Mesh(ledGeo, ledMat);
        ledMesh.position.set(0.46 + l * 0.36, cfg.y, srvDepth + 0.09);
        serverGroup.add(ledMesh);
      }
    });

    const cyanLight = new THREE.PointLight(0x00f0ff, 1.5, 3.5);
    cyanLight.position.set(-2.7, -1.7, 1.2);
    mainGroup.add(cyanLight);

    // --- 6. 3D Workstation Laptop (Refined & Sized Up per User Request) ---
    const laptopGroup = new THREE.Group();
    laptopGroup.position.set(2.6, -1.82, 0.55);
    mainGroup.add(laptopGroup);

    // Sized slightly larger per user request ("thoda sa bada karo bas")
    const screenW = 4.6;
    const screenH = 3.1;
    const lidW = 4.9;
    const lidH = 3.35;
    const baseW = 5.1;
    const baseH = 0.35;

    // Laptop Cyan Deck Base
    const baseShape = createRoundedBoxShape(baseW, baseH, 0.16);
    const baseGeo = new THREE.ExtrudeGeometry(baseShape, {
      depth: 0.4,
      bevelEnabled: true,
      bevelThickness: 0.06,
      bevelSize: 0.05,
      bevelSegments: 3,
    });
    const baseMat = new THREE.MeshPhysicalMaterial({
      color: sceneTheme.laptop.deckColor,
      roughness: 0.2,
      clearcoat: 0.7,
      clearcoatRoughness: 0.15,
    });
    const baseMesh = new THREE.Mesh(baseGeo, baseMat);
    baseMesh.position.set(0, -1.70, -0.02);
    baseMesh.castShadow = true;
    baseMesh.receiveShadow = true;
    laptopGroup.add(baseMesh);

    // Laptop Lid Shell
    const lidShape = createRoundedBoxShape(lidW, lidH, 0.14);
    const lidGeo = new THREE.ExtrudeGeometry(lidShape, {
      depth: 0.16,
      bevelEnabled: true,
      bevelThickness: 0.06,
      bevelSize: 0.05,
      bevelSegments: 3,
    });
    const lidMat = new THREE.MeshPhysicalMaterial({
      color: sceneTheme.laptop.lidColor,
      roughness: 0.3,
      clearcoat: 0.35,
    });
    const lidMesh = new THREE.Mesh(lidGeo, lidMat);
    lidMesh.position.set(0, 0, 0.05);
    lidMesh.castShadow = true;
    laptopGroup.add(lidMesh);

    // Screen Mesh Quad (Underlay)
    const screenGeo = new THREE.PlaneGeometry(screenW, screenH);

    // Canvas Texture
    const screenCanvas = document.createElement('canvas');
    screenCanvas.width = 1200;
    screenCanvas.height = 810;
    const sCtx = screenCanvas.getContext('2d');

    const renderCanvasTexture = (
      title = currentTitleRef.current,
      desc = currentDescRef.current,
      cat = currentCatRef.current,
      idx = pageIndexRef.current
    ) => {
      if (!sCtx) return;

      // 1. High-contrast crisp white screen background with subtle depth
      sCtx.fillStyle = '#ffffff';
      sCtx.fillRect(0, 0, 1200, 810);

      const bgGrad = sCtx.createRadialGradient(250, 180, 50, 600, 400, 750);
      bgGrad.addColorStop(0, '#ffffff');
      bgGrad.addColorStop(1, '#f8fafc');
      sCtx.fillStyle = bgGrad;
      sCtx.fillRect(0, 0, 1200, 810);

      // 2. macOS Window Title Bar (92px height)
      sCtx.fillStyle = '#f1f5f9';
      sCtx.fillRect(0, 0, 1200, 92);
      sCtx.strokeStyle = '#e2e8f0';
      sCtx.lineWidth = 3;
      sCtx.beginPath();
      sCtx.moveTo(0, 92);
      sCtx.lineTo(1200, 92);
      sCtx.stroke();

      // Window Control Dots (Red, Yellow, Green)
      const btns = [
        { color: '#ff5f56', x: 50 },
        { color: '#ffbd2e', x: 88 },
        { color: '#27c93f', x: 126 },
      ];
      btns.forEach((b) => {
        sCtx.fillStyle = b.color;
        sCtx.beginPath();
        sCtx.arc(b.x, 46, 12, 0, Math.PI * 2);
        sCtx.fill();
      });

      // Window Header Title
      sCtx.fillStyle = '#0f172a';
      sCtx.font = 'bold 24px "Plus Jakarta Sans", system-ui, -apple-system, sans-serif';
      sCtx.textAlign = 'left';
      sCtx.textBaseline = 'middle';
      sCtx.fillText('IBCS Integration Platform', 168, 46);

      // Right Header Badge (Capability Number or OVERVIEW)
      const badgeText = idx === 0 ? 'OVERVIEW' : `${idx} / ${totalItems - 1}`;
      sCtx.font = '800 20px "Plus Jakarta Sans", system-ui, -apple-system, sans-serif';
      const badgeW = sCtx.measureText(badgeText).width + 30;
      const badgeX = 1200 - 50 - badgeW;

      sCtx.fillStyle = '#e2e8f0';
      sCtx.beginPath();
      if (sCtx.roundRect) {
        sCtx.roundRect(badgeX, 26, badgeW, 40, 20);
      } else {
        sCtx.rect(badgeX, 26, badgeW, 40);
      }
      sCtx.fill();

      sCtx.fillStyle = '#252156';
      sCtx.textAlign = 'center';
      sCtx.textBaseline = 'middle';
      sCtx.fillText(badgeText, badgeX + badgeW / 2, 46);

      // Helper for wrapping text with optional line capping
      function wrapText(ctx, text, x, y, maxWidth, lineHeight, maxLines = 99) {
        const words = (text || '').split(' ');
        let line = '';
        let count = 0;
        for (let n = 0; n < words.length; n++) {
          const testLine = line + words[n] + ' ';
          const metrics = ctx.measureText(testLine);
          if (metrics.width > maxWidth && n > 0) {
            ctx.fillText(line.trim(), x, y);
            line = words[n] + ' ';
            y += lineHeight;
            count++;
            if (count >= maxLines) return y;
          } else {
            line = testLine;
          }
        }
        if (line.trim().length > 0) {
          ctx.fillText(line.trim(), x, y);
          y += lineHeight;
        }
        return y;
      }

      // 3. Category Pill Badge
      const catText = (cat || 'CAPABILITY').toUpperCase();
      sCtx.font = '800 20px "Plus Jakarta Sans", system-ui, -apple-system, sans-serif';
      const catW = sCtx.measureText(catText).width + 48;
      const catX = 65;
      const catY = 136;
      const catH = 38;

      sCtx.fillStyle = '#e0f2fe';
      sCtx.beginPath();
      if (sCtx.roundRect) {
        sCtx.roundRect(catX, catY, catW, catH, 19);
      } else {
        sCtx.rect(catX, catY, catW, catH);
      }
      sCtx.fill();
      sCtx.strokeStyle = '#38bdf8';
      sCtx.lineWidth = 2;
      sCtx.stroke();

      // Cyan pulse dot inside category badge
      sCtx.fillStyle = '#0284c7';
      sCtx.beginPath();
      sCtx.arc(catX + 20, catY + catH / 2, 5, 0, Math.PI * 2);
      sCtx.fill();

      // Category text
      sCtx.fillStyle = '#0369a1';
      sCtx.textAlign = 'left';
      sCtx.textBaseline = 'middle';
      sCtx.fillText(catText, catX + 34, catY + catH / 2);

      // 4. Main Heading of the Content (Large, bold, prominent on 3D monitor)
      const cleanTitle = title || 'API Development & Integration Services';
      let titleFontSize = 62;
      let titleLineHeight = 76;
      if (cleanTitle.length > 50) {
        titleFontSize = 46;
        titleLineHeight = 58;
      } else if (cleanTitle.length > 30) {
        titleFontSize = 54;
        titleLineHeight = 66;
      }

      sCtx.fillStyle = '#020617';
      sCtx.font = `900 ${titleFontSize}px "Plus Jakarta Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;
      sCtx.textAlign = 'left';
      sCtx.textBaseline = 'top';

      const titleY = catY + catH + 30;
      const afterTitleY = wrapText(sCtx, cleanTitle, 65, titleY, 1070, titleLineHeight, 3);

      // 5. Vibrant Gradient Accent Divider
      const grad = sCtx.createLinearGradient(65, 0, 280, 0);
      grad.addColorStop(0, '#00f0ff');
      grad.addColorStop(0.5, '#0ea5e9');
      grad.addColorStop(1, '#6366f1');
      sCtx.fillStyle = grad;
      sCtx.beginPath();
      if (sCtx.roundRect) {
        sCtx.roundRect(65, afterTitleY + 20, 200, 8, 4);
      } else {
        sCtx.rect(65, afterTitleY + 20, 200, 8);
      }
      sCtx.fill();

      // 6. Capability Sub-Tag & Architecture Preview
      sCtx.fillStyle = '#64748b';
      sCtx.font = '700 22px "Plus Jakarta Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      sCtx.fillText('IBCS ENTERPRISE ARCHITECTURE MODULE', 65, afterTitleY + 48);

      if (afterTitleY + 105 < 740) {
        sCtx.fillStyle = '#334155';
        sCtx.font = '500 24px/1.65 "Plus Jakarta Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
        wrapText(sCtx, desc || '', 65, afterTitleY + 100, 1070, 40, 3);
      }
    };

    renderCanvasRef.current = renderCanvasTexture;
    renderCanvasTexture(currentTitle, currentDescription, currentCategory, pageIndex);

    const screenTexture = new THREE.CanvasTexture(screenCanvas);
    screenTexture.generateMipmaps = false;
    screenTexture.minFilter = THREE.LinearFilter;
    screenTexture.magFilter = THREE.LinearFilter;
    screenTexture.colorSpace = THREE.SRGBColorSpace;
    screenTexture.needsUpdate = true;
    screenTextureRef.current = screenTexture;

    const screenMat = new THREE.MeshBasicMaterial({
      map: screenTexture,
      toneMapped: false,
      side: THREE.DoubleSide,
      transparent: false,
      depthTest: true,
      depthWrite: true,
    });
    screenMat.polygonOffset = true;
    screenMat.polygonOffsetFactor = -2.0;
    screenMat.polygonOffsetUnits = -2.0;

    const screenMesh = new THREE.Mesh(screenGeo, screenMat);
    // Positioned proudly at z = 0.285 in front of lidMesh (which ends at z = 0.27)
    screenMesh.position.set(0, 0, 0.285);
    screenMesh.renderOrder = 25;
    laptopGroup.add(screenMesh);
    screenMeshRef.current = screenMesh;

    // --- 7. Data Conduit Cables & Photons ---
    function createCableMesh(points) {
      const curve = new THREE.CurvePath();
      for (let i = 0; i < points.length - 1; i++) {
        const line = new THREE.LineCurve3(points[i], points[i + 1]);
        curve.add(line);
      }
      const tubeGeo = new THREE.TubeGeometry(curve, 64, 0.08, 16, false);
      const tubeMat = new THREE.MeshPhysicalMaterial({
        color: sceneTheme.cables.color,
        roughness: 0.1,
        clearcoat: 0.9,
      });
      const mesh = new THREE.Mesh(tubeGeo, tubeMat);
      mesh.castShadow = true;
      return { mesh, curve };
    }

    // Left Cable: Gear -> Server
    const leftPoints = [
      new THREE.Vector3(-1.02, 1.45, -0.1),
      new THREE.Vector3(-3.3, 1.45, 0.05),
      new THREE.Vector3(-3.3, -0.4, 0.32),
    ];
    const leftCable = createCableMesh(leftPoints);
    mainGroup.add(leftCable.mesh);

    // Right Cable: Gear -> Laptop
    const rightPoints = [
      new THREE.Vector3(1.02, 1.45, -0.1),
      new THREE.Vector3(2.6, 1.45, 0.05),
      new THREE.Vector3(2.6, -0.15, 0.55),
    ];
    const rightCable = createCableMesh(rightPoints);
    mainGroup.add(rightCable.mesh);

    // Collars
    const collarMat = new THREE.MeshStandardMaterial({
      color: 0x4ee3d7,
      metalness: 0.8,
      roughness: 0.2,
    });
    const collarGeo = new THREE.CylinderGeometry(0.14, 0.14, 0.12, 16);
    collarGeo.rotateX(Math.PI / 2);

    const collarLeft = new THREE.Mesh(collarGeo, collarMat);
    collarLeft.position.set(-3.3, -0.4, 0.32);
    mainGroup.add(collarLeft);

    const collarRight = new THREE.Mesh(collarGeo, collarMat);
    collarRight.position.set(2.6, -0.15, 0.55);
    mainGroup.add(collarRight);

    // Traveling Photons
    const photonGeo = new THREE.SphereGeometry(0.12, 16, 16);
    const photonMat = new THREE.MeshBasicMaterial({ color: sceneTheme.cables.photonColor });

    const leftPhoton = new THREE.Mesh(photonGeo, photonMat);
    mainGroup.add(leftPhoton);

    const rightPhoton = new THREE.Mesh(photonGeo, photonMat);
    mainGroup.add(rightPhoton);

    // --- 8. Overlay Position Projection ---
    const updateOverlayBounds = () => {
      if (!container || !camera || !screenMesh) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w <= 0 || h <= 0) return;

      const halfW = screenW / 2;
      const halfH = screenH / 2;

      const tl = new THREE.Vector3(-halfW, halfH, 0.01);
      screenMesh.localToWorld(tl);
      tl.project(camera);

      const br = new THREE.Vector3(halfW, -halfH, 0.01);
      screenMesh.localToWorld(br);
      br.project(camera);

      const left = ((tl.x + 1) / 2) * w;
      const top = ((-tl.y + 1) / 2) * h;
      const pixelW = ((br.x - tl.x) / 2) * w;
      const pixelH = ((tl.y - br.y) / 2) * h;

      // Responsive Check: On desktop/laptop/tablet landscape (w >= 640 and pixelW >= 300),
      // use exact 1:1 3D quad projection. On mobile phones (w < 640 or pixelW < 300),
      // do NOT render floating DOM cards over the 3D scene. The 3D laptop monitor natively
      // displays the capability heading, and the full content card is placed below the 3D design.
      const isMobileResponsive = w < 640 || pixelW < 300;

      if (!isMobileResponsive) {
        // Central Settings Gear "API" Hub Projection (Desktop overlay)
        const gCenter = new THREE.Vector3(0, 1.45, 0.75);
        gCenter.project(camera);
        const gX = ((gCenter.x + 1) / 2) * w;
        const gY = ((-gCenter.y + 1) / 2) * h;

        const gEdge = new THREE.Vector3(hubConfig.radius, 1.45, 0.75);
        gEdge.project(camera);
        const gPixelEdgeX = ((gEdge.x + 1) / 2) * w;
        const gRadiusPx = Math.abs(gPixelEdgeX - gX);
        const gDiameterPx = gRadiusPx * 2;

        setGearHubOverlayStyle({
          left: `${Math.round(gX - gRadiusPx)}px`,
          top: `${Math.round(gY - gRadiusPx)}px`,
          width: `${Math.round(gDiameterPx)}px`,
          height: `${Math.round(gDiameterPx)}px`,
        });

        setOverlayStyle({
          left: `${Math.round(left)}px`,
          top: `${Math.round(top)}px`,
          width: `${Math.round(pixelW)}px`,
          height: `${Math.round(pixelH)}px`,
        });

        // Cyan Laptop Deck Base Projection (for Prev/Next controls)
        const deckCenter3D = new THREE.Vector3(0, -1.70, 0.22);
        laptopGroup.localToWorld(deckCenter3D);
        deckCenter3D.project(camera);
        const deckCenterPxY = ((-deckCenter3D.y + 1) / 2) * h;

        // Inset slightly so controls sit neatly on the flat surface of the deck, aligned with the card
        const deckHalfW = (screenW / 2) * 0.96;
        const dTl = new THREE.Vector3(-deckHalfW, -1.70, 0.22);
        laptopGroup.localToWorld(dTl);
        dTl.project(camera);

        const dBr = new THREE.Vector3(deckHalfW, -1.70, 0.22);
        laptopGroup.localToWorld(dBr);
        dBr.project(camera);

        const deckLeft = ((dTl.x + 1) / 2) * w;
        const deckPixelW = ((dBr.x - dTl.x) / 2) * w;
        const deckBarH = 36;
        const deckTop = deckCenterPxY - deckBarH / 2;

        setDeckStyle({
          left: `${Math.round(deckLeft)}px`,
          top: `${Math.round(deckTop)}px`,
          width: `${Math.round(deckPixelW)}px`,
          height: `${Math.round(deckBarH)}px`,
        });
      } else {
        // Mobile Mode: No floating card over the 3D scene!
        // The 3D laptop monitor in WebGL directly displays the capability heading.
        // The full content card is rendered cleanly below the 3D design in normal DOM flow.
        setOverlayStyle(null);
        setDeckStyle(null);
        setGearHubOverlayStyle(null);
      }
    };

    // --- 9. Smooth 3D Reload / Entrance Choreography ---
    const clamp01 = (v) => Math.max(0, Math.min(1, v));
    const easeOutBack = (x, c1 = 1.35) => {
      const c3 = c1 + 1;
      return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2);
    };
    const easeOutCubic = (x) => 1 - Math.pow(1 - x, 3);

    const introDuration = 1.75;
    let isIntroDone = false;
    let introSettledTriggered = false;

    // Set initial entrance states for reload (elements assemble dynamically)
    blobMesh.scale.set(0.001, 0.001, 0.001);
    gearMesh.position.set(0, 4.2, 0.42);
    gearMesh.scale.set(0.001, 0.001, 0.001);
    hubGroup.position.set(0, 4.2, 0.75);
    hubGroup.scale.set(0.001, 0.001, 0.001);
    serverGroup.position.set(-6.8, -1.7, 0.25);
    serverGroup.scale.set(0.001, 0.001, 0.001);
    laptopGroup.position.set(5.8, -3.6, 0.55);
    laptopGroup.scale.set(0.001, 0.001, 0.001);
    leftCable.mesh.scale.set(0.001, 0.001, 0.001);
    rightCable.mesh.scale.set(0.001, 0.001, 0.001);
    collarLeft.scale.set(0.001, 0.001, 0.001);
    collarRight.scale.set(0.001, 0.001, 0.001);
    leftPhoton.scale.set(0.001, 0.001, 0.001);
    rightPhoton.scale.set(0.001, 0.001, 0.001);

    updateOverlayBounds();

    let reqId;
    let clock = new THREE.Clock();

    const animate = () => {
      reqId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      if (elapsed < introDuration) {
        // 1. Pillow / Blob Slab pops in with soft spring (t: 0.0 -> 0.65)
        const pBlob = clamp01(elapsed / 0.65);
        const eBlob = easeOutBack(pBlob, 1.2);
        blobMesh.scale.set(eBlob, eBlob, eBlob);

        // 2. Central Settings Gear + "API" Hub spin & drop into center (t: 0.12 -> 1.05)
        const pGear = clamp01((elapsed - 0.12) / 0.93);
        const eGear = easeOutBack(pGear, 1.35);
        const gearY = 4.2 + (1.45 - 4.2) * eGear;
        const gearScale = Math.min(1, Math.max(0.001, eGear));
        gearMesh.position.y = gearY;
        gearMesh.scale.set(gearScale, gearScale, gearScale);
        hubGroup.position.y = gearY;
        hubGroup.scale.set(gearScale, gearScale, gearScale);
        gearMesh.rotation.z = (1 - eGear) * Math.PI * 1.5 - elapsed * sceneTheme.gear.rotationSpeed;

        // 3. Server Blades stack slides in from left (t: 0.22 -> 1.15)
        const pSrv = clamp01((elapsed - 0.22) / 0.93);
        const eSrv = easeOutBack(pSrv, 1.25);
        const srvX = -6.8 + (-3.3 - (-6.8)) * eSrv;
        const srvScale = Math.min(1, Math.max(0.001, eSrv));
        serverGroup.position.x = srvX;
        serverGroup.scale.set(srvScale, srvScale, srvScale);

        // 4. Workstation Laptop slides up from bottom-right (t: 0.32 -> 1.25)
        const pLap = clamp01((elapsed - 0.32) / 0.93);
        const eLap = easeOutBack(pLap, 1.25);
        const lapX = 5.8 + (2.6 - 5.8) * eLap;
        const lapY = -3.6 + (-1.82 - (-3.6)) * eLap;
        const lapScale = Math.min(1, Math.max(0.001, eLap));
        laptopGroup.position.x = lapX;
        laptopGroup.position.y = lapY;
        laptopGroup.scale.set(lapScale, lapScale, lapScale);

        // 5. Data Conduit Cables connect endpoints to gear (t: 0.75 -> 1.45)
        const pCable = clamp01((elapsed - 0.75) / 0.7);
        const eCable = easeOutCubic(pCable);
        leftCable.mesh.scale.set(eCable, eCable, eCable);
        rightCable.mesh.scale.set(eCable, eCable, eCable);
        collarLeft.scale.set(eCable, eCable, eCable);
        collarRight.scale.set(eCable, eCable, eCable);

        // 6. Traveling Photons pulse to life once conduits connect (t: > 1.15)
        if (elapsed > 1.15) {
          const pPhoton = clamp01((elapsed - 1.15) / 0.35);
          leftPhoton.scale.set(pPhoton, pPhoton, pPhoton);
          rightPhoton.scale.set(pPhoton, pPhoton, pPhoton);
        } else {
          leftPhoton.scale.set(0.001, 0.001, 0.001);
          rightPhoton.scale.set(0.001, 0.001, 0.001);
        }

        if (elapsed > 0.95 && !introSettledTriggered) {
          introSettledTriggered = true;
          setIsIntroSettled(true);
        }

        updateOverlayBounds();
      } else if (!isIntroDone) {
        // Settle firmly into exact resting parameters
        isIntroDone = true;
        if (!introSettledTriggered) {
          introSettledTriggered = true;
          setIsIntroSettled(true);
        }
        blobMesh.scale.set(1, 1, 1);
        gearMesh.position.set(0, 1.45, 0.42);
        gearMesh.scale.set(1, 1, 1);
        hubGroup.position.set(0, 1.45, 0.75);
        hubGroup.scale.set(1, 1, 1);
        serverGroup.position.set(-3.3, -1.7, 0.25);
        serverGroup.scale.set(1, 1, 1);
        laptopGroup.position.set(2.6, -1.82, 0.55);
        laptopGroup.scale.set(1, 1, 1);
        leftCable.mesh.scale.set(1, 1, 1);
        rightCable.mesh.scale.set(1, 1, 1);
        collarLeft.scale.set(1, 1, 1);
        collarRight.scale.set(1, 1, 1);
        leftPhoton.scale.set(1, 1, 1);
        rightPhoton.scale.set(1, 1, 1);
        updateOverlayBounds();
      } else {
        // Continuous ambient rotation
        gearMesh.rotation.z = -elapsed * sceneTheme.gear.rotationSpeed;
      }

      // Traveling photon pulses along conduits
      const tLeft = (elapsed * 0.6) % 1;
      const tRight = (elapsed * 0.6) % 1;

      const pLeft = leftCable.curve.getPointAt(1 - tLeft);
      leftPhoton.position.copy(pLeft);

      const pRight = rightCable.curve.getPointAt(tRight);
      rightPhoton.position.copy(pRight);

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      if (newW > 0 && newH > 0) {
        const newAspect = newW / newH;
        camera.aspect = newAspect;
        camera.position.z = computeFittedCameraZ(newAspect);
        camera.updateProjectionMatrix();
        renderer.setSize(newW, newH);
        updateOverlayBounds();
      }
    };

    window.addEventListener('resize', handleResize);

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    resizeObserver.observe(container);

    if (document.fonts) {
      document.fonts.ready.then(() => {
        renderCanvasTexture();
        screenTexture.needsUpdate = true;
        renderHubCanvas();
        hubTexture.needsUpdate = true;
        updateOverlayBounds();
      });
    }

    return () => {
      cancelAnimationFrame(reqId);
      resizeObserver.disconnect();
      window.removeEventListener('resize', handleResize);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      hubTexture.dispose();
      hubFrontGeo.dispose();
      hubFrontMat.dispose();
      hubCylGeo.dispose();
      hubCylMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className={`min-h-screen w-full bg-[#f8fafc] relative flex flex-col items-center justify-start overflow-x-hidden m-0 p-0 ${className}`}>
      {/* Subtle ambient lighting flares fixed in background */}
      <div className="fixed w-[900px] h-[900px] rounded-full bg-cyan-200/25 blur-[160px] pointer-events-none -translate-y-12 -translate-x-20 z-0" />
      <div className="fixed w-[800px] h-[800px] rounded-full bg-pink-200/25 blur-[150px] pointer-events-none translate-x-44 -translate-y-20 z-0" />
      <div className="fixed w-[600px] h-[600px] rounded-full bg-indigo-100/30 blur-[130px] pointer-events-none translate-y-36 z-0" />

      {/* Top Header Navigation buttons */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2 flex items-center justify-start gap-3 z-40 relative">
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

      {/* Page Header Section */}
      <header className="relative z-20 pt-4 sm:pt-8 pb-2 px-4 sm:px-6 text-center max-w-4xl mx-auto w-full">
        {/* Page Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
          {screenData.heading}
        </h1>

        {/* Page Description */}
        <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal">
          {screenData.description}
        </p>
      </header>

      {/* Main 3D WebGL Settings Architecture Scene: fully responsive on all devices */}
      <main
        className="w-full max-w-6xl h-[330px] xs:h-[370px] sm:h-[680px] md:h-[760px] lg:h-[820px] relative z-10 flex items-center justify-center p-1 sm:p-4 mb-2 sm:mb-12"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          ref={containerRef}
          className="relative w-full h-full flex items-center justify-center overflow-hidden"
        >
          {/* Sleek, Sized-Down Executive Screen Overlay (Desktop Landscape 1:1 Projection) */}
          {overlayStyle && (
            <div
              style={overlayStyle}
              className={`absolute z-20 pointer-events-auto rounded-md overflow-hidden flex flex-col bg-white border border-slate-300 shadow-md select-text transition-all duration-500 ease-out ${
                isIntroSettled ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
              }`}
            >
              {/* macOS Style Window Title Bar */}
              <div className="bg-slate-100/90 backdrop-blur-sm border-b border-slate-200/80 px-3 py-1.5 flex items-center space-x-2 shrink-0 select-none">
                <div className="flex items-center space-x-1.5 shrink-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] inline-block shadow-xs" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] inline-block shadow-xs" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f] inline-block shadow-xs" />
                </div>
                <span className="text-[10px] sm:text-[11px] font-semibold text-slate-600 tracking-normal truncate ml-1">
                  IBCS Integration Platform
                </span>
              </div>

              {/* Screen Main Content Area - Heading & Content with Guaranteed Top Clearance & Safe Overflow */}
              <div
                className="flex-1 px-5 pt-3.5 pb-4 sm:px-6 sm:pt-4 sm:pb-5 flex flex-col justify-start overflow-y-auto bg-gradient-to-b from-white via-white to-slate-50/50 select-text"
                style={{ scrollbarWidth: 'thin', scrollbarColor: '#cbd5e1 transparent' }}
              >
                {/* Main Heading - Guaranteed Never Cuts Off */}
                <h2 className="text-[13px] sm:text-[14px] md:text-[15px] font-black text-slate-950 tracking-normal leading-snug mb-1.5 sm:mb-2 text-left break-words shrink-0 pt-0.5">
                  {currentTitle}
                </h2>

                {/* Accent Divider Bar */}
                <div className="w-10 sm:w-12 h-1 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 mb-2 sm:mb-2.5 shrink-0" />

                {/* Main Content (Description) - Equal & Consistent Text Alignment (Justified) */}
                <p
                  className="text-[10px] sm:text-[10.5px] md:text-[11.5px] font-medium text-slate-700 leading-relaxed pb-2 select-text"
                  style={{ textAlign: 'justify', textJustify: 'inter-word', hyphens: 'auto' }}
                >
                  {currentDescription}
                </p>
              </div>
            </div>
          )}

          {/* Central Settings Gear "API" Badge (Crisp & Optically Centered) */}
          {gearHubOverlayStyle && (
            <div
              style={gearHubOverlayStyle}
              className={`absolute z-20 pointer-events-none rounded-full flex items-center justify-center bg-white border-[3px] border-[#252156] shadow-md select-none transition-all duration-500 ease-out ${
                isIntroSettled ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
            >
              <div className="absolute inset-[3px] rounded-full border border-[#252156]/15 pointer-events-none" />
              <span
                className="font-black text-[#252156] tracking-wider leading-none text-center select-none"
                style={{ fontSize: `${Math.round(parseFloat(gearHubOverlayStyle.width) * 0.38)}px` }}
              >
                API
              </span>
            </div>
          )}

          {/* Interactive Prev/Next Controls on the Cyan Laptop Deck Base (Desktop View) */}
          {deckStyle && (
            <div
              style={deckStyle}
              className={`absolute z-30 flex items-center justify-between px-1 select-none transition-all duration-500 ease-out pointer-events-auto ${
                isIntroSettled ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
              }`}
            >
              {/* Prev Button */}
              <button
                type="button"
                onClick={handlePrev}
                disabled={pageIndex === 0}
                title="Previous Capability"
                className={`h-7 sm:h-7.5 px-3 sm:px-3.5 rounded-full text-[10px] sm:text-[10.5px] font-black tracking-wider flex items-center space-x-1 transition-all duration-150 shadow-sm active:scale-95 ${
                  pageIndex === 0
                    ? 'bg-white/50 text-slate-400 border border-white/40 cursor-not-allowed opacity-60'
                    : 'bg-white text-[#252156] hover:bg-slate-50 hover:shadow-md cursor-pointer border border-cyan-200/90'
                }`}
              >
                <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                <span>PREV</span>
              </button>

              {/* Center Page & Category Indicator Pill */}
              <div className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-white/90 shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
                <span className="text-[9.5px] sm:text-[10px] font-black text-[#252156] tracking-tight">
                  {pageIndex === 0 ? 'OVERVIEW' : `${pageIndex} / ${totalItems - 1}`}
                </span>
                <span className="hidden sm:inline text-slate-400 text-[8px]">•</span>
                <span className="hidden sm:inline text-[8.5px] sm:text-[9.5px] font-bold text-slate-700 truncate max-w-[150px]">
                  {currentCategory}
                </span>
              </div>

              {/* Next Button */}
              <button
                type="button"
                onClick={handleNext}
                disabled={pageIndex >= totalItems - 1}
                title="Next Capability"
                className={`h-7 sm:h-7.5 px-3.5 sm:px-4 rounded-full text-[10px] sm:text-[10.5px] font-black tracking-wider flex items-center space-x-1 transition-all duration-150 shadow-sm active:scale-95 ${
                  pageIndex >= totalItems - 1
                    ? 'bg-white/50 text-slate-400 border border-white/40 cursor-not-allowed opacity-60'
                    : 'bg-[#252156] text-white hover:bg-[#1a1740] hover:shadow-md cursor-pointer border border-[#252156]'
                }`}
              >
                <span>NEXT</span>
                <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Dedicated Mobile Content Card & Navigation (Rendered BELOW the 3D design on mobile view) */}
      <div
        className="sm:hidden w-full max-w-[440px] px-3.5 xs:px-4 pb-12 z-20 relative flex flex-col items-center"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className={`w-full bg-white rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-200/60 overflow-hidden flex flex-col transition-all duration-500 ease-out ${
            isIntroSettled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {/* macOS Style Window Title Bar */}
          <div className="bg-slate-100/95 border-b border-slate-200/80 px-3.5 py-2 flex items-center justify-between select-none">
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1.5 shrink-0">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] inline-block shadow-xs" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] inline-block shadow-xs" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f] inline-block shadow-xs" />
              </div>
              <span className="text-[11px] font-semibold text-slate-600 truncate ml-1">
                IBCS Integration Platform
              </span>
            </div>
            <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-cyan-100/80 text-cyan-900 border border-cyan-200/60">
              {pageIndex === 0 ? 'OVERVIEW' : `${pageIndex} / ${totalItems - 1}`}
            </span>
          </div>

          {/* Card Body with Category, Title, Divider & Description */}
          <div className="p-4 xs:p-5 flex flex-col justify-start bg-gradient-to-b from-white to-slate-50/40 select-text">
            {/* Category Pill */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-50 border border-cyan-200/80 text-[10.5px] font-bold text-cyan-800 tracking-wide uppercase mb-2 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
              <span>{currentCategory}</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-base xs:text-lg font-black text-slate-950 tracking-tight leading-snug mb-2 text-left">
              {currentTitle}
            </h2>

            {/* Accent Divider Bar */}
            <div className="w-12 h-1 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 mb-3 shrink-0" />

            {/* Description Paragraph with justified text for mobile view */}
            <p
              className="text-xs xs:text-[13px] font-medium text-slate-700 leading-relaxed pb-1 select-text"
              style={{ textAlign: 'justify', textJustify: 'inter-word' }}
            >
              {currentDescription}
            </p>

            {/* Navigation Controls (Prev / Next & Counter Pill) */}
            <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between gap-2 select-none">
              {/* Prev Button */}
              <button
                type="button"
                onClick={handlePrev}
                disabled={pageIndex === 0}
                className={`h-8 px-3 rounded-full text-[11px] font-black tracking-wider flex items-center space-x-1 transition-all duration-150 shadow-xs ${
                  pageIndex === 0
                    ? 'bg-slate-100 text-slate-400 border border-slate-200/60 cursor-not-allowed opacity-60'
                    : 'bg-white text-[#252156] hover:bg-slate-50 hover:shadow-md active:scale-95 cursor-pointer border border-cyan-200/90'
                }`}
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                <span>PREV</span>
              </button>

              {/* Counter Pill */}
              <div className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-slate-100/90 border border-slate-200/80 shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
                <span className="text-[10.5px] font-black text-[#252156] tracking-tight">
                  {pageIndex === 0 ? 'OVERVIEW' : `${pageIndex} / ${totalItems - 1}`}
                </span>
              </div>

              {/* Next Button */}
              <button
                type="button"
                onClick={handleNext}
                disabled={pageIndex >= totalItems - 1}
                className={`h-8 px-3 rounded-full text-[11px] font-black tracking-wider flex items-center space-x-1 transition-all duration-150 shadow-xs ${
                  pageIndex >= totalItems - 1
                    ? 'bg-slate-100 text-slate-400 border border-slate-200/60 cursor-not-allowed opacity-60'
                    : 'bg-[#252156] text-white hover:bg-[#1a1740] hover:shadow-md active:scale-95 cursor-pointer border border-[#252156]'
                }`}
              >
                <span>NEXT</span>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
