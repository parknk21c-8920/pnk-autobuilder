/**
 * PNK D2C Flagship AutoBuilder - Master Application Engine (v5.0 Pro)
 * 100% Fully Interactive Live Store Simulator & Universal Control Tower
 * Parent House: PNK FINDS ("Pioneering New Horizons")
 */

// Master Brand & Verified Physical Product Database (1탄 ~ 5탄)
const BRAND_DATABASE = {
  office: {
    id: "pnk_office",
    name: "PNK OFFICE & DESK",
    subText: "A PNK FINDS Brand",
    slogan: "Ergonomic Mastery & Minimalist Workspace",
    subSlogan: "Industrial Gas-Spring Monitor Arms & 57° Vertical Mice",
    email: "bagnamgyu8920@gmail.com",
    year: "2026",
    colorPrimary: "#18181b",
    colorAccent: "#6366f1",
    heroTag: "ELEVATE YOUR DESK PERFORMANCE",
    heroTitle: "ERGONOMIC MASTERY & MINIMALISM",
    heroDesc: "Aero-grade aluminum articulation, natural 57° wrist posture, and walnut desk architecture.",
    themeZip: "pnk-office-dawn.zip",
    zipSize: "22.36 MB",
    legalFile: "PNK_OFFICE_LEGAL_POLICIES.md",
    logoImg: "logos/1_PNK_OFFICE_OFFICIAL_MOTTO_BADGE_TRANSPARENT.png",
    faviconImg: "logos/favicons/1_PNK_OFFICE/favicon.png",
    defaultCost: 32.00,
    defaultPrice: 99.99,
    products: [
      {
        title: "AeroArm Pro Heavy-Duty Dual Monitor Gas-Spring Arm",
        spec: "Supports Up to 34\" / 25 lbs • 360° Articulation • VESA Compatible",
        price: "$89.99",
        img: "https://m.media-amazon.com/images/I/51VQeIUMClL._AC_SL1500_.jpg",
        icon: "🖥️"
      },
      {
        title: "ErgoGrip 57° Precision Ergonomic Vertical Mouse",
        spec: "Natural Handshake Angle • Silent TTC Switches • 4000 DPI",
        price: "$49.99",
        img: "https://m.media-amazon.com/images/I/41QUJP5H+5L._AC_SL1500_.jpg",
        icon: "🖱️"
      },
      {
        title: "Solid Walnut Dual-Tier Studio Desk Shelf",
        spec: "100% Solid American Walnut • Integrated Cable Routing",
        price: "$119.99",
        img: "https://m.media-amazon.com/images/I/51jHbGQjFJL._AC_SL1500_.jpg",
        icon: "🪵"
      },
      {
        title: "Quntis ScreenLinear Computer Monitor Light Bar",
        spec: "Auto-Dimming Touch Sensor • Zero Screen Glare • Dual Backlight",
        price: "$49.99",
        img: "https://m.media-amazon.com/images/I/51berBGS0kL._AC_SL1500_.jpg",
        icon: "💡"
      },
      {
        title: "NuPhy Air75 V3 Wireless Low-Profile Mechanical Keyboard",
        spec: "Hot-Swappable Switches • Multi-Device Bluetooth 5.0 • CNC Aluminum",
        price: "$109.99",
        img: "https://m.media-amazon.com/images/I/51YRBpZGxnL._AC_SL1500_.jpg",
        icon: "⌨️"
      }
    ]
  },
  garden: {
    id: "pnk_garden",
    name: "PNK GARDEN & HOME",
    subText: "A PNK FINDS Brand",
    slogan: "Smart Greenery & Effortless Outdoor Care",
    subSlogan: "100ft Auto-Retraction Kink-Free Hoses & Titanium Pruners",
    email: "bagnamgyu8920@gmail.com",
    year: "2026",
    colorPrimary: "#1b4332",
    colorAccent: "#52b788",
    heroTag: "SMART REVOLUTION FOR YOUR GARDEN",
    heroTitle: "SMART GREENERY & EFFORTLESS LIVING",
    heroDesc: "Automatic recoil watering reels, SK5 Japanese steel pruners, and solar ambient lighting.",
    themeZip: "pnk-garden-dawn.zip",
    zipSize: "22.36 MB",
    legalFile: "PNK_GARDEN_LEGAL_POLICIES.md",
    logoImg: "logos/2_PNK_GARDEN_OFFICIAL_MOTTO_BADGE_TRANSPARENT.png",
    faviconImg: "logos/favicons/2_PNK_GARDEN/favicon.png",
    defaultCost: 38.00,
    defaultPrice: 119.99,
    products: [
      {
        title: "AquaFlow 100ft Automatic Retractable Garden Hose Reel",
        spec: "Any-Length Lock • 180° Swivel Bracket • Kink-Proof 8-Pattern Nozzle",
        price: "$129.99",
        img: "https://m.media-amazon.com/images/I/81xU9d17JjL._AC_SL1500_.jpg",
        icon: "🚿"
      },
      {
        title: "TitanPrune SK5 Carbon Steel Heavy-Duty Bypass Shears",
        spec: "Non-Stick Teflon Coating • Ergonomic Shock Absorber • 1-Inch Cut",
        price: "$34.99",
        img: "https://m.media-amazon.com/images/I/81-0T0eTfLL._AC_SL1500_.jpg",
        icon: "✂️"
      },
      {
        title: "SolarLoom High-Lumen Solar Pathway Light (8-Pack)",
        spec: "IP68 Waterproof • Warm 2700K Ambient Glow • Auto Dusk/Dawn Sensor",
        price: "$49.99",
        img: "https://m.media-amazon.com/images/I/81x-T91iHIL._AC_SL1500_.jpg",
        icon: "💡"
      },
      {
        title: "SmartHydrate 2-Zone Programmable WiFi Water Timer",
        spec: "Rain Delay Sensor • App Remote Control • Solid Brass Inlet",
        price: "$59.99",
        img: "https://m.media-amazon.com/images/I/81sF0R+vEHL._AC_SL1500_.jpg",
        icon: "⏱️"
      }
    ]
  },
  pet: {
    id: "pnk_pet",
    name: "PNK PET & LIVING",
    subText: "A PNK FINDS Brand",
    slogan: "Smart Health & Luxury Living for Your Pet",
    subSlogan: "Veterinarian-Approved UVC Water Fountains & App Feeders",
    email: "bagnamgyu8920@gmail.com",
    year: "2026",
    colorPrimary: "#0e3a53",
    colorAccent: "#0284c7",
    heroTag: "NEXT-GEN INTELLIGENT PET LIVING",
    heroTitle: "SMART HEALTH & LUXURY CARE",
    heroDesc: "Quadruple UVC water purification, app-controlled precise portion feeding, and joint support.",
    themeZip: "pnk-pet-dawn.zip",
    zipSize: "22.36 MB",
    legalFile: "PNK_PET_LEGAL_POLICIES.md",
    logoImg: "logos/3_PNK_PET_OFFICIAL_MOTTO_BADGE_TRANSPARENT.png",
    faviconImg: "logos/favicons/3_PNK_PET/favicon.png",
    defaultCost: 28.50,
    defaultPrice: 89.99,
    products: [
      {
        title: "PureFlow 4-Stage UVC Smart Pet Water Fountain",
        spec: "99.9% Germicidal UVC LED • Wireless Submersible Pump • 304 Stainless Tray",
        price: "$49.99",
        img: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=1200&q=80",
        icon: "💧"
      },
      {
        title: "SmartFeeder AI Vision Auto Portion Pet Feeder",
        spec: "1080p Night Vision Camera • 2-Way Audio • Jam-Free Triple Seal",
        price: "$89.99",
        img: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=1200&q=80",
        icon: "🍲"
      },
      {
        title: "OrthoRest High-Density Memory Foam Pet Bed",
        spec: "Orthopedic Spinal Alignment • Waterproof Washable Cover • 4-Inch Core",
        price: "$69.99",
        img: "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&w=1200&q=80",
        icon: "🛏️"
      },
      {
        title: "WhisperGroom Low-Noise 5-in-1 Pet Grooming Kit",
        spec: "99% Hair Suction Vacuum • Under 50dB Ultra Quiet • 5 Pro Attachments",
        price: "$79.99",
        img: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=1200&q=80",
        icon: "✂️"
      }
    ]
  },
  outdoor: {
    id: "pnk_outdoor",
    name: "PNK OUTDOOR",
    subText: "A PNK FINDS Brand",
    slogan: "Elevate Your Campfire Experience",
    subSlogan: "Smokeless Fire Pits, Titanium Stoves & 4-Season Glamping Gear",
    email: "bagnamgyu8920@gmail.com",
    year: "2026",
    colorPrimary: "#0f172a",
    colorAccent: "#d97706",
    heroTag: "ENGINEERED FOR THE UNTAMED WILD",
    heroTitle: "ELEVATE YOUR CAMPFIRE EXPERIENCE",
    heroDesc: "100% Solid 304 Marine Stainless Steel Smokeless Secondary Combustion & Pure Titanium Warmth.",
    themeZip: "pnk-outdoor-dawn.zip",
    zipSize: "22.58 MB",
    legalFile: "PNK_OUTDOOR_LEGAL_POLICIES.md",
    logoImg: "logos/PNK_OUTDOOR_OFFICIAL_LOGO.png",
    faviconImg: "logos/PNK_OUTDOOR_OFFICIAL_FAVICON.png",
    defaultCost: 94.95,
    defaultPrice: 206.67,
    products: [
      {
        title: "ApexFlame 304 Stainless Smokeless Fire Pit",
        spec: "360° Double-Wall Jet Combustion • Removable Ash Pan • 19.5\" Edition",
        price: "$139.99",
        img: "https://cdn.shopify.com/s/files/1/0894/2990/7823/files/02-apexflame-smokeless-secondary-combu.jpg",
        icon: "🔥"
      },
      {
        title: "NordicShield 4-Season Canvas Bell Tent",
        spec: "300gsm Waterproof Cotton • Pre-installed Stove Jack • Heavy-Duty YKK",
        price: "$449.99",
        img: "https://cdn.shopify.com/s/files/1/0894/2990/7823/files/04-card-heavyduty-canvas-bell-tent.png",
        icon: "⛺"
      },
      {
        title: "FireHiking Pure Titanium Tent Wood Stove",
        spec: "1mm Pure Titanium • German Schott Window • 9.8ft Flue Chimney",
        price: "$249.99",
        img: "https://cdn.shopify.com/s/files/1/0894/2990/7823/files/06-card-heavyduty-titanium-wood-stove.png",
        icon: "🪵"
      },
      {
        title: "TerraTrek 99.8% Pure Titanium Cookware Set",
        spec: "Direct Flame Boil • 3-in-1 Compact Stackable Nesting • Ultralight",
        price: "$99.99",
        img: "https://cdn.shopify.com/s/files/1/0894/2990/7823/files/02-card-lightweight-cookware-pans.png",
        icon: "🍳"
      },
      {
        title: "AeroRest 7075 Aviation Aluminum Camp Chair",
        spec: "330 lbs Tested Load • Ultralight 2.1 lbs Pack Weight • Breathable Mesh",
        price: "$59.99",
        img: "https://cdn.shopify.com/s/files/1/0894/2990/7823/files/01-card-lightweight-furniture-chair.png",
        icon: "🪑"
      },
      {
        title: "HydroForge 64oz Vacuum Insulated Growler",
        spec: "18/8 Stainless Steel • 48h Ice Cold / 24h Piping Hot • Leakproof Cap",
        price: "$49.99",
        img: "https://cdn.shopify.com/s/files/1/0894/2990/7823/files/03-card-lightweight-water-bottle.png",
        icon: "🧊"
      }
    ]
  },
  kitchen: {
    id: "pnk_kitchen",
    name: "PNK KITCHEN",
    subText: "A PNK FINDS Brand",
    slogan: "Pure Living • Natural Health • Kitchen Perfected",
    subSlogan: "Next-Gen Smart Composting, Non-Toxic Ceramic Cookware & Chef Cutlery",
    email: "bagnamgyu8920@gmail.com",
    year: "2026",
    colorPrimary: "#143628",
    colorAccent: "#c59b27",
    heroTag: "CULINARY MASTERY REDEFINED",
    heroTitle: "PURE LIVING • KITCHEN PERFECTED",
    heroDesc: "Non-toxic ceramic cookware, smart micro-composting technology, and professional chef knives.",
    themeZip: "pnk-kitchen-dawn.zip",
    zipSize: "2.43 MB",
    legalFile: "PNK_KITCHEN_LEGAL_POLICIES.md",
    logoImg: "logos/5_PNK_KITCHEN_OFFICIAL_MOTTO_BADGE_TRANSPARENT.png",
    faviconImg: "logos/favicons/5_PNK_KITCHEN/favicon.png",
    defaultCost: 78.50,
    defaultPrice: 189.99,
    products: [
      {
        title: "Geme Pro Smart Microbiological Kitchen Composter",
        spec: "Industrial Bio-Enzyme • 95% Volume Reduction • Zero Smell & Quiet",
        price: "$499.00",
        img: "https://cdn.shopify.com/s/files/1/0894/2990/7823/files/02-apexflame-smokeless-secondary-combu.jpg",
        icon: "♻️"
      },
      {
        title: "CeramicPro Non-Toxic 12-Piece Cookware Set",
        spec: "PTFE/PFOA Free Mineral Coating • Cast Induction Base • Stainless Handles",
        price: "$189.99",
        img: "https://cdn.shopify.com/s/files/1/0894/2990/7823/files/02-card-lightweight-cookware-pans.png",
        icon: "🍳"
      },
      {
        title: "AeroChef 67-Layer Damascus Steel Santoku Knife",
        spec: "VG-10 Super Steel Core • 60±2 HRC Rockwell Hardness • Ergonomic G10",
        price: "$89.99",
        img: "https://cdn.shopify.com/s/files/1/0894/2990/7823/files/06-card-heavyduty-titanium-wood-stove.png",
        icon: "🔪"
      },
      {
        title: "PureFlow 4-Stage Countertop Water Purifier",
        spec: "0.0001 Micron Reverse Osmosis • Instant Heating 4-Temp • UV Sterilizer",
        price: "$279.99",
        img: "https://cdn.shopify.com/s/files/1/0894/2990/7823/files/03-card-lightweight-water-bottle.png",
        icon: "🚰"
      },
      {
        title: "ThermoShield Double-Wall Thermal Carafe (2L)",
        spec: "316 Medical Stainless Steel • 24h Heat Retention • Push-Button Pour",
        price: "$45.99",
        img: "https://cdn.shopify.com/s/files/1/0894/2990/7823/files/03-card-lightweight-water-bottle.png",
        icon: "☕"
      },
      {
        title: "Artisan Organic End-Grain Walnut Cutting Board",
        spec: "1.5-inch Solid American Walnut • Self-Healing Fibers • Juice Groove",
        price: "$69.99",
        img: "https://cdn.shopify.com/s/files/1/0894/2990/7823/files/01-card-lightweight-furniture-chair.png",
        icon: "🪵"
      }
    ]
  }
};

// Global Store State
let currentCategory = "outdoor";
let currentTab = "home";
let selectedProductIndex = 0;
let selectedBundleTier = 2; // Default Buy 2 (15% OFF)
let currentCost = 94.95;
let isUpdating = false;

// DOM Element Registry
const inputBrandName = document.getElementById("input-brand-name");
const inputBrandSlogan = document.getElementById("input-brand-slogan");
const inputCsEmail = document.getElementById("input-cs-email");
const inputYear = document.getElementById("input-year");
const inputColorPrimary = document.getElementById("input-color-primary");
const inputColorAccent = document.getElementById("input-color-accent");
const labelColorPrimary = document.getElementById("label-color-primary");
const labelColorAccent = document.getElementById("label-color-accent");

const catalogContainer = document.getElementById("catalog-list-container");
const storeMockContainer = document.getElementById("store-mock-container");
const screenViewport = document.getElementById("screen-viewport");

const btnRunBuild = document.getElementById("btn-run-build");
const termBody = document.getElementById("term-body");
const releaseCards = document.getElementById("release-cards");
const rZipTitle = document.getElementById("r-zip-title");
const rLegalTitle = document.getElementById("r-legal-title");
const termTimestamp = document.getElementById("term-timestamp");

// Calculator Element Registry
const elPrice = document.getElementById("calc-price");
const elCost = document.getElementById("calc-cost");
const elMargin = document.getElementById("calc-margin");
const elBuffer = document.getElementById("calc-buffer");
const elCpa = document.getElementById("calc-cpa");

const elRetail = document.getElementById("res-retail");
const elCompare = document.getElementById("res-compare");
const elProfit = document.getElementById("res-profit");
const elBep = document.getElementById("res-bep-roas");
const elTarget = document.getElementById("res-target-roas");
const elNet = document.getElementById("res-net-after-ad");
const elNetKrw = document.getElementById("res-net-krw");
const elSupplierCost = document.getElementById("out-supplier-cost");
const elBtnCopyCost = document.getElementById("btn-quick-copy-cost");

// Expense Elements
const elFixedShopify = document.getElementById("exp-fixed-shopify");
const elFixedDomain = document.getElementById("exp-fixed-domain");
const elFixedApps = document.getElementById("exp-fixed-apps");
const elTax = document.getElementById("exp-tax");
const elShipping = document.getElementById("exp-shipping");
const elExpPgFee = document.getElementById("exp-pg-fee");
const elExpMonthlyFixed = document.getElementById("exp-monthly-fixed");
const elExpVariableTotal = document.getElementById("exp-variable-total");
const elExpFixedBadge = document.getElementById("exp-fixed-badge");

// Bundle Elements
const elBndlRev1 = document.getElementById("bndl-rev-1");
const elBndlNet1 = document.getElementById("bndl-net-1");
const elBndlKrw1 = document.getElementById("bndl-krw-1");
const elBndlRev2 = document.getElementById("bndl-rev-2");
const elBndlNet2 = document.getElementById("bndl-net-2");
const elBndlKrw2 = document.getElementById("bndl-krw-2");
const elBndlRev3 = document.getElementById("bndl-rev-3");
const elBndlNet3 = document.getElementById("bndl-net-3");
const elBndlKrw3 = document.getElementById("bndl-krw-3");

// Traffic Light Elements
const lampKill = document.getElementById("lamp-kill");
const lampOpt = document.getElementById("lamp-opt");
const lampScale = document.getElementById("lamp-scale");
const lampSuper = document.getElementById("lamp-super");
const trafficBadge = document.getElementById("traffic-status-badge");
const trafficGuide = document.getElementById("traffic-guide-text");

// Tab Switcher Elements
const tabHome = document.getElementById("tab-home");
const tabPdp = document.getElementById("tab-pdp");
const tabCollections = document.getElementById("tab-collections");
const tabCart = document.getElementById("tab-cart");
const tabLegal = document.getElementById("tab-legal");
const tabDispute = document.getElementById("tab-dispute");

// Currency Formatter (USD to KRW @ 1,350 KRW/$)
function formatKrw(usd) {
  if (isNaN(usd)) return "약 0원";
  const rate = 1350;
  const krw = usd * rate;
  if (Math.abs(krw) >= 10000) {
    return `약 ${(krw / 10000).toFixed(1)}만 원`;
  } else {
    return `약 ${Math.round(krw).toLocaleString()}원`;
  }
}

// Reset Tab Active Classes
function resetTabStyles() {
  [tabHome, tabPdp, tabCollections, tabCart, tabLegal, tabDispute].forEach(t => {
    if (t) t.classList.remove("active");
  });
}

// Global Seamless Tab Navigator (Works from Header, Hero, Product Cards, Buttons)
window.navigateToTab = function(tabName, productIdx = null) {
  currentTab = tabName;
  resetTabStyles();

  if (productIdx !== null && typeof productIdx === 'number') {
    selectedProductIndex = productIdx;
  }

  const b = BRAND_DATABASE[currentCategory];

  if (tabName === "home") {
    if (tabHome) tabHome.classList.add("active");
    renderStoreMockup(b);
  } else if (tabName === "pdp") {
    if (tabPdp) tabPdp.classList.add("active");
    const p = b.products[selectedProductIndex] || b.products[0];
    const parsedPrice = parseFloat(p.price.replace(/[^0-9.]/g, '')) || 139.99;
    const compare = Math.ceil(parsedPrice * 1.35 / 10) * 10 - 0.01;
    renderPDPView(b, parsedPrice, compare);
  } else if (tabName === "collections") {
    if (tabCollections) tabCollections.classList.add("active");
    renderCollectionsView(b);
  } else if (tabName === "cart") {
    if (tabCart) tabCart.classList.add("active");
    renderCartView(b);
  } else if (tabName === "legal") {
    if (tabLegal) tabLegal.classList.add("active");
    renderLegalView(b);
  } else if (tabName === "dispute") {
    if (tabDispute) tabDispute.classList.add("active");
    renderDisputeView(b);
  }

  // Smooth scroll viewport to top
  if (screenViewport) screenViewport.scrollTop = 0;
};

// Unified Profit & ROAS Real-Time Synchronization
function runUnifiedSync(triggerSource) {
  if (isUpdating) return;
  isUpdating = true;

  const marginPct = parseFloat(elMargin ? elMargin.value : 65) || 65;
  const buffer = parseFloat(elBuffer ? elBuffer.value : 50) || 50;
  let cpa = parseFloat(elCpa ? elCpa.value : 25.0);
  if (isNaN(cpa) || cpa < 0) cpa = 25.0;

  // Read Variable Expenses
  const tax = parseFloat(elTax ? elTax.value : 0) || 0;
  const shipping = parseFloat(elShipping ? elShipping.value : 0) || 0;

  // Read Fixed Expenses
  const fixedShopify = parseFloat(elFixedShopify ? elFixedShopify.value : 39.0) || 0;
  const fixedDomain = parseFloat(elFixedDomain ? elFixedDomain.value : 1.20) || 0;
  const fixedApps = parseFloat(elFixedApps ? elFixedApps.value : 0.0) || 0;
  const totalMonthlyFixed = fixedShopify + fixedDomain + fixedApps;

  if (elExpMonthlyFixed) {
    elExpMonthlyFixed.textContent = `$${totalMonthlyFixed.toFixed(2)}/월`;
  }

  let price = parseFloat(elPrice ? elPrice.value : 206.67) || 0;
  let cost = parseFloat(elCost ? elCost.value : 94.95) || 0;

  if (triggerSource === 'price') {
    cost = (price - buffer) / (1 + (marginPct / 100));
    if (cost < 0 || isNaN(cost)) cost = 0;
    if (elCost) elCost.value = cost.toFixed(2);
  } else if (triggerSource === 'cost' || triggerSource === 'margin' || triggerSource === 'buffer') {
    price = (cost * (1 + (marginPct / 100))) + buffer;
    if (elPrice) elPrice.value = price.toFixed(2);
  } else if (triggerSource === 'retail' && elRetail) {
    price = parseFloat(elRetail.value) || price;
    cost = (price - buffer) / (1 + (marginPct / 100));
    if (elCost) elCost.value = cost.toFixed(2);
    if (elPrice) elPrice.value = price.toFixed(2);
  }

  currentCost = cost;
  if (elSupplierCost) elSupplierCost.textContent = `$${cost.toFixed(2)}`;

  let cleanPrice = Math.floor(price) + 0.99;
  if (cleanPrice < price) cleanPrice += 1.0;
  const cleanCompare = Math.ceil(cleanPrice * 1.35 / 10) * 10 - 0.01;

  if (elRetail && triggerSource !== 'retail') elRetail.value = cleanPrice.toFixed(2);
  if (elCompare) elCompare.value = cleanCompare.toFixed(2);

  // Gross profit & real margin
  const grossProfit = Math.max(0, cleanPrice - cost - tax - shipping);
  const realMargin = cleanPrice > 0 ? (grossProfit / cleanPrice) * 100 : 0;
  if (elProfit) elProfit.textContent = `$${grossProfit.toFixed(2)} (${Math.round(realMargin)}%)`;

  // ROAS calculations
  const bepRoas = realMargin > 0 ? (100 / realMargin) * 100 : 100;
  const targetRoas = cpa > 0 ? (cleanPrice / cpa) * 100 : 0;

  // PG Fee & Total Variable Expense per Order
  const pgFee1 = cleanPrice * 0.029 + 0.30;
  if (elExpPgFee) elExpPgFee.textContent = `$${pgFee1.toFixed(2)}`;
  if (elExpVariableTotal) {
    const totalVar = pgFee1 + tax + shipping;
    elExpVariableTotal.textContent = `$${totalVar.toFixed(2)}/건`;
  }

  // Net Profit after ad, pg fee, tax, shipping
  const netAfterAd = cleanPrice - cost - pgFee1 - cpa - tax - shipping;

  if (elBep) elBep.textContent = `${Math.round(bepRoas)}% (${(bepRoas / 100).toFixed(1)}x)`;
  if (elTarget) elTarget.textContent = `${Math.round(targetRoas)}% (${(targetRoas / 100).toFixed(1)}x)`;
  if (elNet) {
    elNet.textContent = `${netAfterAd >= 0 ? '+' : ''}$${netAfterAd.toFixed(2)}`;
    elNet.style.color = netAfterAd >= 0 ? '#10b981' : '#ef4444';
  }
  if (elNetKrw) {
    elNetKrw.textContent = `(${formatKrw(netAfterAd)})`;
    elNetKrw.style.color = netAfterAd >= 0 ? '#34d399' : '#f87171';
  }

  // 3-Column Bundle Matrix
  const net1 = netAfterAd;

  const rev2 = Math.floor(cleanPrice * 2 * 0.85) + 0.98;
  const cost2 = cost * 2;
  const pgFee2 = rev2 * 0.029 + 0.30;
  const tax2 = tax * 2;
  const shipping2 = shipping > 0 ? (shipping * 1.5) : 0;
  const net2 = rev2 - cost2 - pgFee2 - cpa - tax2 - shipping2;
  const mult2 = net1 > 0 ? (net2 / net1).toFixed(1) : "2.0";

  const rev3 = Math.floor(cleanPrice * 3 * 0.75) + 0.98;
  const cost3 = cost * 3;
  const pgFee3 = rev3 * 0.029 + 0.30;
  const tax3 = tax * 3;
  const shipping3 = shipping > 0 ? (shipping * 2.0) : 0;
  const net3 = rev3 - cost3 - pgFee3 - cpa - tax3 - shipping3;
  const mult3 = net1 > 0 ? (net3 / net1).toFixed(1) : "3.0";

  if (elBndlRev1) elBndlRev1.textContent = `$${cleanPrice.toFixed(2)}`;
  if (elBndlNet1) {
    elBndlNet1.textContent = `${net1 >= 0 ? '+' : ''}$${net1.toFixed(2)}`;
    elBndlNet1.style.color = net1 >= 0 ? '#10b981' : '#ef4444';
  }
  if (elBndlKrw1) elBndlKrw1.textContent = `${formatKrw(net1)}`;

  if (elBndlRev2) elBndlRev2.textContent = `$${rev2.toFixed(2)}`;
  if (elBndlNet2) {
    elBndlNet2.innerHTML = `${net2 >= 0 ? '+' : ''}$${net2.toFixed(2)} <span style="font-size: 9px;">(${mult2}배)</span>`;
    elBndlNet2.style.color = net2 >= 0 ? '#38bdf8' : '#ef4444';
  }
  if (elBndlKrw2) elBndlKrw2.textContent = `${formatKrw(net2)} (${mult2}배)`;

  if (elBndlRev3) elBndlRev3.textContent = `$${rev3.toFixed(2)}`;
  if (elBndlNet3) {
    elBndlNet3.innerHTML = `${net3 >= 0 ? '+' : ''}$${net3.toFixed(2)} <span style="font-size: 9px;">(${mult3}배)</span>`;
    elBndlNet3.style.color = net3 >= 0 ? '#f59e0b' : '#ef4444';
  }
  if (elBndlKrw3) elBndlKrw3.textContent = `${formatKrw(net3)} (${mult3}배)`;

  // Monthly Fixed Defense Badge
  if (elExpFixedBadge) {
    if (totalMonthlyFixed > 0 && net1 > 0) {
      const months = (net1 / totalMonthlyFixed).toFixed(1);
      elExpFixedBadge.textContent = `1건 판매 시 고정비 ${months}개월치 완벽 방어`;
      elExpFixedBadge.style.color = "#10b981";
      elExpFixedBadge.style.background = "rgba(16, 185, 129, 0.15)";
    } else if (totalMonthlyFixed > 0) {
      elExpFixedBadge.textContent = `월 고정비 $${totalMonthlyFixed.toFixed(2)} 방어 필요`;
      elExpFixedBadge.style.color = "#ef4444";
      elExpFixedBadge.style.background = "rgba(239, 68, 68, 0.15)";
    } else {
      elExpFixedBadge.textContent = "월 고정비 $0 (완벽 방어)";
      elExpFixedBadge.style.color = "#10b981";
      elExpFixedBadge.style.background = "rgba(16, 185, 129, 0.15)";
    }
  }

  // 4-Stage Traffic Light Navigator
  if (lampKill && lampOpt && lampScale && lampSuper) {
    [lampKill, lampOpt, lampScale, lampSuper].forEach(l => l.classList.remove("active"));
    const roasMult = targetRoas / 100;

    if (roasMult < 2.0 || targetRoas <= bepRoas) {
      lampKill.classList.add("active");
      if (trafficBadge) {
        trafficBadge.textContent = "🔴 위험 (즉시 OFF)";
        trafficBadge.style.background = "rgba(239, 68, 68, 0.2)";
        trafficBadge.style.color = "#ef4444";
      }
      if (trafficGuide) {
        trafficGuide.innerHTML = "🚨 <strong>[손실 위험]</strong> 광고비 대비 마진이 부족합니다. 24h 내 광고를 즉시 중단(OFF)하고 원가를 재협상하세요.";
        trafficGuide.style.borderLeftColor = "#ef4444";
      }
    } else if (roasMult < 3.5) {
      lampOpt.classList.add("active");
      if (trafficBadge) {
        trafficBadge.textContent = "🟡 보통 (소재 개선)";
        trafficBadge.style.background = "rgba(245, 158, 11, 0.2)";
        trafficBadge.style.color = "#f59e0b";
      }
      if (trafficGuide) {
        trafficGuide.innerHTML = "⚠️ <strong>[최적화 구간]</strong> 손해는 안 보지만 순이익이 적습니다. 3단 번들(Buy 2/3)을 강조하고 광고 영상을 교체하세요.";
        trafficGuide.style.borderLeftColor = "#f59e0b";
      }
    } else if (roasMult < 7.0) {
      lampScale.classList.add("active");
      if (trafficBadge) {
        trafficBadge.textContent = "🟢 위닝 (+20% 증액)";
        trafficBadge.style.background = "rgba(16, 185, 129, 0.2)";
        trafficBadge.style.color = "#10b981";
      }
      if (trafficGuide) {
        trafficGuide.innerHTML = "💡 <strong>[위닝 상품]</strong> 마진이 매우 탄탄합니다! 머신러닝을 유지하며 매일 20%씩 예산을 안전하게 증액(Vertical Scaling)하세요!";
        trafficGuide.style.borderLeftColor = "#10b981";
      }
    } else {
      lampSuper.classList.add("active");
      if (trafficBadge) {
        trafficBadge.textContent = "🚀 슈퍼 위닝 (대량 증액)";
        trafficBadge.style.background = "rgba(56, 189, 248, 0.25)";
        trafficBadge.style.color = "#38bdf8";
      }
      if (trafficGuide) {
        trafficGuide.innerHTML = "🔥 <strong>[초대박 슈퍼위닝]</strong> ROAS 7.0x 돌파! 예산을 대폭 증액하고 미국 전역으로 타겟을 즉시 확장하세요!";
        trafficGuide.style.borderLeftColor = "#38bdf8";
      }
    }
  }

  isUpdating = false;
}

// Bind Input Listeners for Real-Time Calculator Sync
const inputConfigs = [
  { el: elPrice, type: 'price' },
  { el: elCost, type: 'cost' },
  { el: elMargin, type: 'margin' },
  { el: elBuffer, type: 'buffer' },
  { el: elCpa, type: 'cpa' },
  { el: elRetail, type: 'retail' },
  { el: elTax, type: 'tax' },
  { el: elShipping, type: 'shipping' },
  { el: elFixedShopify, type: 'fixed' },
  { el: elFixedDomain, type: 'fixed' },
  { el: elFixedApps, type: 'fixed' }
];

inputConfigs.forEach(item => {
  if (item.el) {
    ['input', 'change', 'keyup'].forEach(evt => {
      item.el.addEventListener(evt, () => runUnifiedSync(item.type));
    });
  }
});

// Category Switcher Function (1탄 ~ 5탄)
function loadBrand(catKey) {
  const b = BRAND_DATABASE[catKey];
  if (!b) return;
  currentCategory = catKey;
  selectedProductIndex = 0;

  // Update Left Controls
  if (inputBrandName) inputBrandName.value = b.name;
  if (inputBrandSlogan) inputBrandSlogan.value = b.slogan;
  if (inputCsEmail) inputCsEmail.value = b.email;
  if (inputYear) inputYear.value = b.year;
  if (inputColorPrimary) inputColorPrimary.value = b.colorPrimary;
  if (inputColorAccent) inputColorAccent.value = b.colorAccent;
  if (labelColorPrimary) labelColorPrimary.textContent = b.colorPrimary.toUpperCase();
  if (labelColorAccent) labelColorAccent.textContent = b.colorAccent.toUpperCase();

  // Update Price & Cost Defaults
  if (elCost && b.defaultCost) elCost.value = b.defaultCost.toFixed(2);
  if (elPrice && b.defaultPrice) elPrice.value = b.defaultPrice.toFixed(2);

  // Update Active Button UI
  document.querySelectorAll(".cat-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.cat === catKey);
  });

  // Render Catalog List
  renderCatalogList(b.products);

  // Recalculate Profit & ROAS
  runUnifiedSync('cost');

  // Render Current Tab View
  navigateToTab(currentTab, 0);
}

// Render Left Catalog List
function renderCatalogList(products) {
  if (!catalogContainer) return;
  catalogContainer.innerHTML = "";
  products.forEach((p, idx) => {
    const item = document.createElement("div");
    item.className = "catalog-item";
    item.style.cursor = "pointer";
    item.title = "클릭 시 PDP 상세페이지 및 시뮬레이터로 즉시 연동";
    item.innerHTML = `
      <div class="cat-item-left">
        <div class="cat-thumb">${p.img ? `<img src="${p.img}" alt="${p.title}" onerror="this.parentElement.innerHTML='${p.icon}';">` : p.icon}</div>
        <div class="cat-details">
          <div class="cat-title">${idx + 1}. ${p.title}</div>
          <div class="cat-spec">${p.spec}</div>
        </div>
      </div>
      <div class="cat-price">${p.price}</div>
    `;
    item.addEventListener("click", () => {
      const parsedPrice = parseFloat(p.price.replace(/[^0-9.]/g, '')) || 99.99;
      if (elPrice) elPrice.value = parsedPrice.toFixed(2);
      runUnifiedSync('price');
      navigateToTab('pdp', idx);
    });
    catalogContainer.appendChild(item);
  });
}

// Common Shared Store Navigation Header
function getMockHeaderHTML(b) {
  return `
    <!-- Announcement Bar -->
    <div class="mock-top-bar" id="mock-top-bar">
      <span style="cursor:pointer;" onclick="navigateToTab('legal')">🏕️ 30-Day Risk-Free Field Trial</span>
      <span style="cursor:pointer;" onclick="navigateToTab('cart')">🚀 Free US Express Over $50</span>
      <span style="cursor:pointer;" onclick="navigateToTab('cart')">🔒 256-Bit SSL Checkout</span>
      <span style="cursor:pointer;" onclick="navigateToTab('legal')">💬 24/7 CS (<span id="mock-email-span">${b.email}</span>)</span>
    </div>

    <!-- Store Header -->
    <nav class="mock-nav" id="mock-nav">
      <div class="mock-logo" id="mock-logo" style="display: flex; align-items: center; gap: 8px; cursor: pointer;" onclick="navigateToTab('home')">
        ${b.logoImg ? `<img src="${b.logoImg}" alt="${b.name}" style="height: 40px; width: auto; object-fit: contain; filter: drop-shadow(0 2px 8px rgba(0,0,0,0.4));">` : `<span style="font-weight:900; font-size:18px; color:#fff;">${b.name}</span>`}
      </div>
      <div class="mock-menu">
        <span style="cursor: pointer; transition: color 0.2s;" onclick="navigateToTab('home')">Home</span>
        <span style="cursor: pointer; transition: color 0.2s;" onclick="navigateToTab('collections')">Shop All</span>
        <span style="cursor: pointer; transition: color 0.2s;" onclick="navigateToTab('pdp', 0)">Best Sellers</span>
        <span style="cursor: pointer; transition: color 0.2s;" onclick="navigateToTab('collections')">Collections</span>
        <span style="cursor: pointer; transition: color 0.2s;" onclick="navigateToTab('legal')">About Us</span>
        <span style="cursor: pointer; transition: color 0.2s;" onclick="navigateToTab('legal')">FAQ & Trust</span>
      </div>
      <div class="mock-actions">
        <span style="cursor: pointer;" onclick="navigateToTab('collections')">🔍 Search</span>
        <span style="cursor: pointer; color: ${b.colorAccent}; font-weight: 800;" onclick="navigateToTab('cart')">🛒 Cart (1)</span>
      </div>
    </nav>
  `;
}

// Common Shared Store Footer
function getMockFooterHTML(b) {
  return `
    <!-- Store Footer -->
    <footer class="mock-footer" id="mock-footer">
      <div class="footer-top">
        <div class="footer-col">
          <div class="f-logo" id="mock-footer-brand" style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px; cursor: pointer;" onclick="navigateToTab('home')">
            ${b.logoImg ? `<img src="${b.logoImg}" alt="${b.name}" style="height: 38px; width: auto; object-fit: contain; filter: brightness(1.1);">` : `<span style="font-weight:800; color:#fff;">${b.name}</span>`}
          </div>
          <p class="f-motto">Born from the founder's visionary spirit of "Pioneering New Horizons". A specialized luxury division curated by PNK FINDS.</p>
        </div>
        <div class="footer-col">
          <h5>Shop Essentials</h5>
          <ul>
            <li style="cursor:pointer;" onclick="navigateToTab('collections')">Full Collection Lineup</li>
            <li style="cursor:pointer;" onclick="navigateToTab('pdp', 0)">Signature Killer Flagship</li>
            <li style="cursor:pointer;" onclick="navigateToTab('collections')">Volume Bundles & Packs</li>
            <li style="cursor:pointer;" onclick="navigateToTab('cart')">View Active Cart</li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>Customer Care</h5>
          <ul>
            <li style="cursor:pointer;" onclick="navigateToTab('legal')">30-Day Return & RMA Policy</li>
            <li style="cursor:pointer;" onclick="navigateToTab('legal')">$50+ Free Express Shipping</li>
            <li style="cursor:pointer;" onclick="navigateToTab('legal')">1-Year Limited Warranty</li>
            <li style="cursor:pointer;" onclick="navigateToTab('legal')">Contact: <span class="cs-mail-target">${b.email}</span></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom" id="mock-footer-copyright">
        © ${b.year}, ${b.name} (${b.subText}). All rights reserved. • Parent House: PNK FINDS
      </div>
    </footer>
  `;
}

// 1. Render Storefront Home Mockup
function renderStoreMockup(b) {
  if (!storeMockContainer) return;
  storeMockContainer.innerHTML = `
    ${getMockHeaderHTML(b)}

    <!-- Store Hero Banner -->
    <div class="mock-hero" id="mock-hero" style="background: linear-gradient(135deg, ${b.colorPrimary} 0%, #1e293b 100%);">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <span class="hero-tag" id="mock-hero-tag">${b.heroTag}</span>
        <h1 id="mock-hero-title">${(inputBrandSlogan && inputBrandSlogan.value) ? inputBrandSlogan.value : b.slogan}</h1>
        <p id="mock-hero-desc">${b.heroDesc}</p>
        <div class="hero-btn-wrap">
          <button class="mock-cta-btn" id="mock-cta-btn" style="background-color: ${b.colorAccent}; cursor: pointer;" onclick="navigateToTab('collections')">EXPLORE CORE LINEUP</button>
          <button class="mock-sec-btn" style="cursor: pointer;" onclick="navigateToTab('legal')">30-DAY FIELD TRIAL</button>
        </div>
      </div>
    </div>

    <!-- Product Grid Section -->
    <div class="mock-products-section">
      <div class="section-title-wrap">
        <span class="sub-label">PRECISION SOURCED D2C HARDWARE</span>
        <h2>THE CORE VERIFIED LINEUP</h2>
        <p>100% Faithful Manufacturer Specifications • Heavy-Duty Field Tested</p>
      </div>
      <div class="mock-products-grid" id="mock-products-grid">
        ${b.products.map((p, idx) => `
          <div class="mock-product-card" style="cursor: pointer;" onclick="navigateToTab('pdp', ${idx})">
            <div class="mock-p-img">
              ${p.img ? `<img src="${p.img}" alt="${p.title}" onerror="this.parentElement.innerHTML='<span style=\\'font-size:48px;\\'>${p.icon}</span>';">` : `<span style="font-size:48px;">${p.icon}</span>`}
            </div>
            <div class="mock-p-title">${p.title}</div>
            <div class="mock-p-price" style="color: ${b.colorAccent}; font-weight: 800;">${p.price}</div>
            <button class="mock-p-btn" style="background-color: ${b.colorPrimary}; border: 1px solid ${b.colorAccent}; cursor: pointer;" onclick="event.stopPropagation(); navigateToTab('cart');">
              ADD TO CART • FAST SHIP
            </button>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Trust Badges Section -->
    <div class="mock-trust-section">
      <div class="trust-box" style="cursor: pointer;" onclick="navigateToTab('legal')">
        <div class="t-icon">🛡️</div>
        <h4>30-Day Field Trial</h4>
        <p>Test in the wild for 30 full days. Hassle-free prepaid RMA returns.</p>
      </div>
      <div class="trust-box" style="cursor: pointer;" onclick="navigateToTab('legal')">
        <div class="t-icon">🚀</div>
        <h4>$50+ Free Express Shipping</h4>
        <p>Dispatched within 24h with full end-to-end US tracking.</p>
      </div>
      <div class="trust-box" style="cursor: pointer;" onclick="navigateToTab('legal')">
        <div class="t-icon">⚙️</div>
        <h4>1-Year Heavy-Duty Warranty</h4>
        <p>Unconditional replacement against any material or structural defects.</p>
      </div>
      <div class="trust-box" style="cursor: pointer;" onclick="navigateToTab('legal')">
        <div class="t-icon">💬</div>
        <h4>Dedicated 24/7 Concierge</h4>
        <p>Direct assistance within 24h at <span class="cs-mail-target">${b.email}</span></p>
      </div>
    </div>

    ${getMockFooterHTML(b)}
  `;
}

// 2. Render PDP View with A+ Blueprint and 3-Tier Volume Offers
function renderPDPView(b, retailPrice, comparePrice) {
  if (!storeMockContainer) return;
  const p = b.products[selectedProductIndex] || b.products[0];
  const t1Price = retailPrice;
  const t2Price = (retailPrice * 2 * 0.85).toFixed(2);
  const t2Each = (t2Price / 2).toFixed(2);
  const t3Price = (retailPrice * 3 * 0.75).toFixed(2);
  const t3Each = (t3Price / 3).toFixed(2);

  storeMockContainer.innerHTML = `
    ${getMockHeaderHTML(b)}

    <div style="padding: 30px 24px; background: #090d16; color: #f8fafc; font-family: Outfit, sans-serif; min-height: 500px;">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 32px; max-width: 1000px; margin: 0 auto;">
        <!-- Left: Verified Media Gallery -->
        <div>
          <div id="pdp-main-image-wrap" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; height: 380px; display: flex; align-items: center; justify-content: center; overflow: hidden;">
            ${p.img ? `<img src="${p.img}" alt="${p.title}" style="max-height: 100%; max-width: 100%; object-fit: contain;" onerror="this.parentElement.innerHTML='<span style=\\'font-size:80px;\\'>${p.icon}</span>';">` : `<span style="font-size: 80px;">${p.icon}</span>`}
          </div>
          <div style="display: flex; gap: 10px; margin-top: 12px;">
            <div class="pdp-thumb-btn active" style="width: 70px; height: 70px; border: 2px solid ${b.colorAccent}; border-radius: 8px; overflow: hidden; display:flex; align-items:center; justify-content:center; background: rgba(255,255,255,0.05); cursor: pointer;">
              ${p.img ? `<img src="${p.img}" style="max-width: 100%;" onerror="this.parentElement.innerHTML='${p.icon}';">` : p.icon}
            </div>
            <div class="pdp-thumb-btn" style="width: 70px; height: 70px; border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; overflow: hidden; display:flex; align-items:center; justify-content:center; background: rgba(255,255,255,0.02); font-size: 24px; color: #94a3b8; cursor: pointer;" title="A+ 제원 도면">
              📐
            </div>
            <div class="pdp-thumb-btn" style="width: 70px; height: 70px; border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; overflow: hidden; display:flex; align-items:center; justify-content:center; background: rgba(255,255,255,0.02); font-size: 24px; color: #94a3b8; cursor: pointer;" title="언박싱 실물">
              📦
            </div>
          </div>
        </div>

        <!-- Right: D2C Buying Architecture & 3-Tier Volume Offers -->
        <div>
          <div style="font-size: 11px; color: ${b.colorAccent}; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase;">FLAGSHIP D2C CERTIFIED • ZERO HALLUCINATION</div>
          <h1 style="font-size: 22px; font-weight: 800; margin: 8px 0 10px 0; line-height: 1.3;">${p.title}</h1>
          <p style="font-size: 12px; color: #94a3b8; margin-bottom: 16px;">${p.spec}</p>

          <div style="display: flex; align-items: baseline; gap: 12px; margin-bottom: 20px;">
            <span id="pdp-display-price" style="font-size: 28px; font-weight: 900; color: ${b.colorAccent};">$${t2Price}</span>
            <span style="font-size: 16px; color: #64748b; text-decoration: line-through;">$${(comparePrice * 2).toFixed(2)}</span>
            <span id="pdp-save-tag" style="background: rgba(16, 185, 129, 0.15); color: #10b981; font-size: 11px; font-weight: 800; padding: 4px 8px; border-radius: 6px;">SAVE 15% TODAY</span>
          </div>

          <!-- 3-Tier Volume Bundle Radio Group -->
          <div style="margin: 16px 0; display: flex; flex-direction: column; gap: 10px;" id="pdp-tier-group">
            <label id="tier-label-1" style="border: 1px solid rgba(255,255,255,0.15); border-radius: 8px; padding: 12px 14px; display: flex; justify-content: space-between; align-items: center; cursor: pointer; background: rgba(255,255,255,0.02); transition: all 0.2s;">
              <div style="display: flex; align-items: center; gap: 10px;">
                <input type="radio" name="pdp_tier_choice" value="1" onchange="handleTierChange(1, ${t1Price}, ${t2Price}, ${t3Price}, '${b.colorAccent}')">
                <span><strong>Buy 1 Unit</strong> (Standard Setup)</span>
              </div>
              <span><strong>$${t1Price.toFixed(2)}</strong></span>
            </label>

            <label id="tier-label-2" style="border: 2px solid ${b.colorAccent}; border-radius: 8px; padding: 12px 14px; display: flex; justify-content: space-between; align-items: center; cursor: pointer; background: rgba(217, 119, 6, 0.12); position: relative; transition: all 0.2s;">
              <span style="position: absolute; top: -10px; right: 14px; background: ${b.colorAccent}; color: #fff; font-size: 9px; font-weight: 900; padding: 2px 8px; border-radius: 10px;">MOST POPULAR • SAVE 15%</span>
              <div style="display: flex; align-items: center; gap: 10px;">
                <input type="radio" name="pdp_tier_choice" value="2" checked onchange="handleTierChange(2, ${t1Price}, ${t2Price}, ${t3Price}, '${b.colorAccent}')">
                <span><strong>Buy 2 Units (Duo Pack)</strong><br><small style="color:#94a3b8;">$${t2Each}/ea • Best for Gifts</small></span>
              </div>
              <span><strong style="color: ${b.colorAccent}; font-size: 15px;">$${t2Price}</strong></span>
            </label>

            <label id="tier-label-3" style="border: 1px solid rgba(255,255,255,0.15); border-radius: 8px; padding: 12px 14px; display: flex; justify-content: space-between; align-items: center; cursor: pointer; background: rgba(255,255,255,0.02); position: relative; transition: all 0.2s;">
              <span style="position: absolute; top: -10px; right: 14px; background: #10b981; color: #fff; font-size: 9px; font-weight: 900; padding: 2px 8px; border-radius: 10px;">BEST VALUE • SAVE 25%</span>
              <div style="display: flex; align-items: center; gap: 10px;">
                <input type="radio" name="pdp_tier_choice" value="3" onchange="handleTierChange(3, ${t1Price}, ${t2Price}, ${t3Price}, '${b.colorAccent}')">
                <span><strong>Buy 3 Units (Family Set)</strong><br><small style="color:#94a3b8;">$${t3Each}/ea • Max Savings</small></span>
              </div>
              <span><strong style="color: #10b981; font-size: 15px;">$${t3Price}</strong></span>
            </label>
          </div>

          <button id="pdp-cta-btn" style="width: 100%; padding: 16px; background: ${b.colorAccent}; color: #fff; border: none; border-radius: 8px; font-weight: 900; font-size: 15px; cursor: pointer; margin-top: 12px; box-shadow: 0 4px 20px rgba(217, 119, 6, 0.4); transition: all 0.2s;" onclick="navigateToTab('cart');">
            CLAIM 2-PACK OFFER • FREE EXPRESS SHIPPING
          </button>

          <!-- 4-Pillar PDP Micro Trust -->
          <div style="margin-top: 24px; padding-top: 18px; border-top: 1px solid rgba(255,255,255,0.1); display: grid; grid-template-columns: 1fr 1fr; gap: 12px; font-size: 11px; color: #94a3b8;">
            <div style="cursor:pointer;" onclick="navigateToTab('legal')">🛡️ <strong>30-Day Risk-Free Trial</strong></div>
            <div style="cursor:pointer;" onclick="navigateToTab('legal')">⚡ <strong>Dispatches within 24h</strong></div>
            <div style="cursor:pointer;" onclick="navigateToTab('legal')">🔒 <strong>1-Year Heavy Warranty</strong></div>
            <div style="cursor:pointer;" onclick="navigateToTab('legal')">💬 <strong>24/7 CS: ${b.email}</strong></div>
          </div>
        </div>
      </div>
    </div>

    ${getMockFooterHTML(b)}
  `;
}

// PDP Tier Selection Live Handler
window.handleTierChange = function(tier, p1, p2, p3, accentColor) {
  selectedBundleTier = tier;
  const elPriceDisplay = document.getElementById("pdp-display-price");
  const elSaveTag = document.getElementById("pdp-save-tag");
  const elCtaBtn = document.getElementById("pdp-cta-btn");

  const l1 = document.getElementById("tier-label-1");
  const l2 = document.getElementById("tier-label-2");
  const l3 = document.getElementById("tier-label-3");

  [l1, l2, l3].forEach(l => {
    if (l) {
      l.style.border = "1px solid rgba(255,255,255,0.15)";
      l.style.background = "rgba(255,255,255,0.02)";
    }
  });

  if (tier === 1) {
    if (l1) {
      l1.style.border = `2px solid ${accentColor}`;
      l1.style.background = "rgba(255,255,255,0.08)";
    }
    if (elPriceDisplay) elPriceDisplay.textContent = `$${p1.toFixed(2)}`;
    if (elSaveTag) elSaveTag.textContent = "STANDARD OFFER";
    if (elCtaBtn) elCtaBtn.textContent = "ADD 1 UNIT TO CART • FREE SHIPPING";
  } else if (tier === 2) {
    if (l2) {
      l2.style.border = `2px solid ${accentColor}`;
      l2.style.background = "rgba(217, 119, 6, 0.12)";
    }
    if (elPriceDisplay) elPriceDisplay.textContent = `$${p2}`;
    if (elSaveTag) elSaveTag.textContent = "SAVE 15% TODAY";
    if (elCtaBtn) elCtaBtn.textContent = "CLAIM 2-PACK OFFER • SAVE 15%";
  } else if (tier === 3) {
    if (l3) {
      l3.style.border = "2px solid #10b981";
      l3.style.background = "rgba(16, 185, 129, 0.12)";
    }
    if (elPriceDisplay) elPriceDisplay.textContent = `$${p3}`;
    if (elSaveTag) elSaveTag.textContent = "SAVE 25% MAX VALUE";
    if (elCtaBtn) elCtaBtn.textContent = "CLAIM 3-PACK OFFER • SAVE 25%";
  }
};

// 3. Render Collections View
function renderCollectionsView(b) {
  if (!storeMockContainer) return;
  storeMockContainer.innerHTML = `
    ${getMockHeaderHTML(b)}

    <div style="padding: 30px 24px; background: #090d16; color: #f8fafc; font-family: Outfit, sans-serif; min-height: 500px;">
      <!-- Collection Banner -->
      <div style="text-align: center; margin-bottom: 24px; padding: 24px; background: linear-gradient(135deg, ${b.colorPrimary} 0%, #1e293b 100%); border-radius: 12px; border: 1px solid rgba(255,255,255,0.08);">
        <span style="font-size: 11px; font-weight: 800; letter-spacing: 0.1em; color: ${b.colorAccent}; text-transform: uppercase;">OFFICIAL D2C CATALOG ARCHIVE</span>
        <h1 style="font-size: 26px; font-weight: 900; margin: 6px 0 8px 0;">${b.name} Full Collection Lineup</h1>
        <p style="font-size: 13px; color: #94a3b8; max-width: 600px; margin: 0 auto;">전체 ${b.products.length}종 100% 실물 검증 하드웨어 • 무왜곡 제조사 제원표 결합 완료</p>
      </div>

      <!-- Filter Pills -->
      <div style="display: flex; gap: 8px; justify-content: center; margin-bottom: 24px; flex-wrap: wrap;">
        <button style="background: ${b.colorAccent}; color: #fff; border: none; padding: 6px 14px; border-radius: 20px; font-size: 12px; font-weight: 800; cursor: pointer;">전체 (${b.products.length})</button>
        <button style="background: rgba(255,255,255,0.05); color: #cbd5e1; border: 1px solid rgba(255,255,255,0.1); padding: 6px 14px; border-radius: 20px; font-size: 12px; cursor: pointer;" onclick="navigateToTab('pdp', 0)">킬러 플래그십 (Best 3)</button>
        <button style="background: rgba(255,255,255,0.05); color: #cbd5e1; border: 1px solid rgba(255,255,255,0.1); padding: 6px 14px; border-radius: 20px; font-size: 12px; cursor: pointer;" onclick="navigateToTab('cart')">3단 볼륨 번들 지원</button>
      </div>

      <!-- Collection Products Grid -->
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; max-width: 1100px; margin: 0 auto;">
        ${b.products.map((p, idx) => `
          <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 14px; display: flex; flex-direction: column; justify-content: space-between; transition: all 0.2s; cursor: pointer;" onclick="navigateToTab('pdp', ${idx})">
            <div>
              <div style="height: 180px; background: rgba(255,255,255,0.03); border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-bottom: 12px; overflow: hidden;">
                ${p.img ? `<img src="${p.img}" alt="${p.title}" style="max-height: 100%; max-width: 100%; object-fit: contain;" onerror="this.parentElement.innerHTML='<span style=\\'font-size:48px;\\'>${p.icon}</span>';">` : `<span style="font-size:48px;">${p.icon}</span>`}
              </div>
              <div style="font-size: 10px; color: ${b.colorAccent}; font-weight: 800; text-transform: uppercase;">MODEL 0${idx + 1}</div>
              <h3 style="font-size: 14px; font-weight: 700; margin: 4px 0 6px 0; color: #fff; line-height: 1.3;">${p.title}</h3>
              <p style="font-size: 11px; color: #94a3b8; line-height: 1.4; margin-bottom: 12px;">${p.spec}</p>
            </div>
            <div>
              <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 8px;">
                <span style="font-size: 16px; font-weight: 800; color: ${b.colorAccent};">${p.price}</span>
                <span style="font-size: 10px; color: #10b981; font-weight: 700; background: rgba(16, 185, 129, 0.1); padding: 2px 6px; border-radius: 4px;">실물 재고 가동</span>
              </div>
              <button style="width: 100%; background: ${b.colorPrimary}; border: 1px solid ${b.colorAccent}; color: #fff; padding: 8px; border-radius: 6px; font-size: 12px; font-weight: 700; cursor: pointer;" onclick="event.stopPropagation(); navigateToTab('pdp', ${idx});">
                상세 스펙 & 번들 보기
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    ${getMockFooterHTML(b)}
  `;
}

// 4. Render Cart & Checkout Funnel View
function renderCartView(b) {
  if (!storeMockContainer) return;
  const p = b.products[selectedProductIndex] || b.products[0];
  const unitPrice = parseFloat(p.price.replace(/[^0-9.]/g, '')) || 139.99;
  const bundle2Total = (unitPrice * 2 * 0.85).toFixed(2);
  const bundleSavings = (unitPrice * 2 * 0.15).toFixed(2);

  storeMockContainer.innerHTML = `
    ${getMockHeaderHTML(b)}

    <div style="padding: 30px 24px; background: #090d16; color: #f8fafc; font-family: Outfit, sans-serif; max-width: 800px; margin: 0 auto; min-height: 500px;">
      <!-- Free Shipping Dynamic Progress Bar -->
      <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 8px; padding: 12px 16px; margin-bottom: 20px;">
        <div style="display: flex; justify-content: space-between; font-size: 12px; font-weight: 800; color: #10b981; margin-bottom: 6px;">
          <span>🎉 축하합니다! $50 이상 100% 무료 미국 특송(Free Express) 해금!</span>
          <span>100% 완료</span>
        </div>
        <div style="height: 6px; background: rgba(0,0,0,0.4); border-radius: 3px; overflow: hidden;">
          <div style="width: 100%; height: 100%; background: #10b981;"></div>
        </div>
      </div>

      <!-- Cart Item Card -->
      <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 18px; margin-bottom: 20px;">
        <div style="display: flex; gap: 16px; align-items: center;">
          <div style="width: 80px; height: 80px; background: rgba(255,255,255,0.05); border-radius: 8px; display: flex; align-items: center; justify-content: center; overflow: hidden; flex-shrink: 0; cursor: pointer;" onclick="navigateToTab('pdp', ${selectedProductIndex})">
            ${p.img ? `<img src="${p.img}" style="max-width: 100%; max-height: 100%; object-fit: contain;" onerror="this.parentElement.innerHTML='${p.icon}';">` : p.icon}
          </div>
          <div style="flex: 1;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
              <h3 style="font-size: 15px; font-weight: 800; margin: 0; cursor: pointer;" onclick="navigateToTab('pdp', ${selectedProductIndex})">${p.title}</h3>
              <span style="font-size: 16px; font-weight: 900; color: ${b.colorAccent};">$${bundle2Total}</span>
            </div>
            <div style="font-size: 11px; color: #38bdf8; font-weight: 700; margin: 4px 0;">⚡ [3단 볼륨 번들] 2-Pack Duo Expedition (15% 즉시 할인 적용)</div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 8px; font-size: 12px; color: #94a3b8;">
              <span>수량: <strong>2개 세트</strong></span>
              <span style="color: #10b981; font-weight: 800;">총 $${bundleSavings} 절약됨</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Order Summary & Express Checkout Box -->
      <div style="background: rgba(15, 23, 42, 0.9); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 20px;">
        <h4 style="font-size: 14px; font-weight: 800; margin-bottom: 12px; color: #cbd5e1;">결제 금액 요약 (Order Summary)</h4>
        <div style="display: flex; justify-content: space-between; font-size: 13px; color: #94a3b8; margin-bottom: 6px;">
          <span>상품 소계 (2개):</span>
          <span>$${(unitPrice * 2).toFixed(2)}</span>
        </div>
        <div style="display: flex; justify-content: space-between; font-size: 13px; color: #10b981; font-weight: 700; margin-bottom: 6px;">
          <span>번들 특별 할인 (15% OFF):</span>
          <span>-$${bundleSavings}</span>
        </div>
        <div style="display: flex; justify-content: space-between; font-size: 13px; color: #38bdf8; font-weight: 700; margin-bottom: 6px;">
          <span>미국 전역 무료 특송 (Free Express):</span>
          <span>$0.00 (FREE)</span>
        </div>
        <div style="border-top: 1px solid rgba(255,255,255,0.1); padding-top: 12px; margin-top: 8px; display: flex; justify-content: space-between; align-items: baseline;">
          <span style="font-size: 16px; font-weight: 800; color: #fff;">최종 결제 예상액:</span>
          <span style="font-size: 24px; font-weight: 900; color: ${b.colorAccent};">$${bundle2Total}</span>
        </div>

        <!-- 1-Click Checkout Button -->
        <button style="width: 100%; padding: 16px; background: linear-gradient(135deg, ${b.colorAccent}, #f59e0b); color: #000; font-size: 15px; font-weight: 900; border: none; border-radius: 8px; cursor: pointer; margin-top: 16px; box-shadow: 0 4px 20px rgba(217, 119, 6, 0.4);" onclick="triggerSimulatedCheckout('${b.name}', '${bundle2Total}')">
          🔒 SECURE CHECKOUT • 256-BIT SSL ENCRYPTION
        </button>

        <!-- Trust Badges Row -->
        <div style="display: flex; justify-content: center; gap: 14px; margin-top: 14px; font-size: 11px; color: #64748b;">
          <span>💳 Visa / MC / AMEX</span>
          <span>🛡️ 30-Day RMA Return</span>
          <span>⚙️ 1-Yr Warranty</span>
        </div>
      </div>
    </div>

    ${getMockFooterHTML(b)}
  `;
}

// Simulated Checkout Popup Trigger
window.triggerSimulatedCheckout = function(brandName, total) {
  alert(`🎉 [쇼피파이 체크아웃 결제 시뮬레이션 성공]\n\n스토어: ${brandName}\n결제 금액: $${total}\n\n1. 256-Bit SSL 암호화 결제 완료\n2. 2-Pack 15% 볼륨 번들 할인 자동 차감 적용\n3. $50+ 무료 특송 자동 적용 완료`);
};

// 5. Render Legal View
function renderLegalView(b) {
  if (!storeMockContainer) return;
  storeMockContainer.innerHTML = `
    ${getMockHeaderHTML(b)}

    <div style="padding: 40px 24px; background: #090d16; color: #f8fafc; font-family: Outfit, sans-serif; max-width: 800px; margin: 0 auto; line-height: 1.8; min-height: 500px;">
      <h1 style="color: ${b.colorAccent}; font-size: 26px; margin-bottom: 24px;">🏛️ ${b.name} US D2C Legal Policies & Trust Hub</h1>
      
      <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 20px; margin-bottom: 24px;">
        <h3 style="color: #38bdf8; margin-top:0;">1. 30-Day Return & RMA Refund Policy</h3>
        <p style="font-size: 14px; color: #cbd5e1;">All purchases are protected by our 30-day risk-free field trial. To initiate a return, contact our support team at <strong style="color:${b.colorAccent};">${b.email}</strong> for an instant prepaid RMA return authorization.</p>
      </div>

      <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 20px; margin-bottom: 24px;">
        <h3 style="color: #38bdf8; margin-top:0;">2. Free US Express Shipping Policy ($50+)</h3>
        <p style="font-size: 14px; color: #cbd5e1;">Orders over $50 qualify for 100% free trackable express shipping. Orders are dispatched from US fulfillment centers within 24 business hours.</p>
      </div>

      <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 20px; margin-bottom: 24px;">
        <h3 style="color: #38bdf8; margin-top:0;">3. 1-Year Official Manufacturer Warranty</h3>
        <p style="font-size: 14px; color: #cbd5e1;">Guarantees full hardware protection and unconditional replacement against material or workmanship defects.</p>
      </div>
    </div>

    ${getMockFooterHTML(b)}
  `;
}

// ==========================================================================
// 🛡️ 6. Render Chargeback & Dispute Defense Hub (76대 스파미 실전 운영 가이드라인 융합)
// ==========================================================================
let currentDisputeScenario = "case1";
let disputeFormValues = {
  orderNo: "#1084",
  customerName: "Michael Scott",
  productName: "",
  orderDate: "2026-09-28",
  carrier: "USPS",
  trackingNo: "9400111899562547896521",
  deliveryDate: "2026-10-02 (Delivered at Front Porch)",
  shippingAddr: "1725 Slough Ave, Scranton, PA 18503",
  amount: "$139.99"
};

const DISPUTE_SCENARIOS = {
  case1: {
    id: "case1",
    title: "Case 1: 배송 완료 후 미수령/사기 주장",
    badge: "Delivered / Fraud Rebuttal",
    icon: "📦",
    tagColor: "#10b981",
    desc: "배송사 공식 시스템상 'Delivered(배송 완료)' 상태이나, 고객이 물건을 받지 못했다거나 사기라며 일방적 차지백을 건 경우",
    getRebuttal: (b, d) => `Dear Chargeback Dispute Resolution Team & Card Issuer,

We are writing to formally submit comprehensive rebuttal documentation against the dispute filed for Order ${d.orderNo} placed on ${d.orderDate}.

1. TRANSACTION AUTHENTICATION & FRAUD SCREENING:
The customer, ${d.customerName}, placed an authorized order on our official store (${b.name}) for ${d.productName || b.products[0].title} in the amount of ${d.amount}. 
At checkout, full CVV card verification matched, and the billing address aligned with the cardholder's bank credentials.

2. IRREFUTABLE PROOF OF FULFILLMENT & DELIVERY:
The physical merchandise was safely packaged and dispatched via ${d.carrier} under tracking number ${d.trackingNo}.
According to official ${d.carrier} tracking records, the parcel was successfully DELIVERED to the cardholder's specified address:
• Delivery Address: ${d.shippingAddr}
• Delivery Timestamp: ${d.deliveryDate}

3. ZERO PRIOR CONTACT & UNJUSTIFIED DISPUTE:
Prior to opening this financial dispute, the customer did NOT contact our 24/7 dedicated customer care desk (${b.email}) to report missing mail, damage, or request assistance. 

Given that full fulfillment is irrefutably verified by official carrier GPS timestamps and delivery logs, this transaction is 100% legitimate. We respectfully request that this chargeback be reversed and the disputed funds returned to our merchant account.

Attached Evidence:
1. Official Order Invoice PDF & Checkout Timestamp
2. Official ${d.carrier} Proof of Delivery & Tracking Log
3. Store Legal Shipping & 30-Day Return Policy
4. Complete Customer Communication & Ticket Audit Log

Sincerely,
${b.name} Legal & Dispute Defense Team
Parent House: PNK FINDS ("Pioneering New Horizons")
Contact: ${b.email}`
  },
  case2: {
    id: "case2",
    title: "Case 2: 배송 중 지연으로 일방적 차지백",
    badge: "In-Transit / Premature Claim",
    icon: "🚚",
    tagColor: "#38bdf8",
    desc: "물건이 배송사 허브를 통해 정상 이동 중(In-Transit)인데, 조급한 마음에 배송 지연을 이유로 일방적 차지백을 제기한 경우",
    getRebuttal: (b, d) => `Dear Dispute Resolution Officer,

We are submitting formal evidence to contest the premature chargeback regarding Order ${d.orderNo} for ${d.productName || b.products[0].title}.

1. ORDER DISPATCH & ACTIVE IN-TRANSIT STATUS:
The order placed by ${d.customerName} on ${d.orderDate} was fulfilled on schedule and is currently IN ACTIVE TRANSIT with ${d.carrier} under tracking number ${d.trackingNo}.

2. BINDING AGREEMENT TO PUBLISHED SHIPPING POLICY:
During checkout, the customer reviewed and explicitly agreed to our Shipping Terms, which clearly specify a standard fulfillment & transit window of 3-7 business days. The package is progressing normally across carrier logistics hubs without abnormal delay.

3. PREMATURE DISPUTE FILING:
Filing a payment dispute while a shipment is actively moving through carrier logistics violates standard card network procedures. The merchandise is physically en route to ${d.shippingAddr}.

We kindly request that this dispute be dismissed as premature fulfillment is actively proceeding.

Attached Evidence:
1. Order Invoice & Checkout Policy Agreement Record
2. Real-Time ${d.carrier} Carrier In-Transit Tracking Snapshot
3. Published Store Shipping & Delivery Schedule Terms

Sincerely,
${b.name} Fulfillment & Operations Desk
Contact: ${b.email}`
  },
  case3: {
    id: "case3",
    title: "Case 3: 파손/불만족 및 사전 문의 없는 차지백",
    badge: "Policy Bypass / Return Remedy",
    icon: "🛠️",
    tagColor: "#f59e0b",
    desc: "상품 수령 후 파손이나 불만을 이유로 교환/반품 CS 문의 없이 곧바로 카드사 차지백을 신청한 경우",
    getRebuttal: (b, d) => `Dear Dispute Review Department,

We are submitting formal rebuttal documentation against the dispute regarding Order ${d.orderNo}.

1. BINDING 30-DAY RMA RETURN & WARRANTY POLICY:
${b.name} provides an unconditional 30-Day Risk-Free Return & 1-Year Limited Warranty policy clearly stated on all store pages and during checkout. To receive a replacement or full refund, customers must request a prepaid RMA authorization.

2. CARDHOLDER BYPASSED MERCHANT REMEDIES:
Carrier tracking confirms the merchandise (${d.productName || b.products[0].title}) was delivered on ${d.deliveryDate} via ${d.carrier} (${d.trackingNo}). However, the cardholder bypassed our support channel (${b.email}) entirely and filed a chargeback without requesting a return.

3. MERCHANT MAINTAINS OPEN REMEDY PATHWAY:
We remain fully prepared to process a full replacement or refund immediately upon receiving the item back per our return procedures. Initiating a bank dispute without giving the merchant opportunity to remedy the issue violates dispute operating standards.

We respectfully request that you rule in favor of the merchant.

Attached Evidence:
1. Proof of Delivery & Order Confirmation Receipt
2. Store 30-Day Return & RMA Policy Terms
3. Support Ticket Audit Log showing zero prior dispute notice

Sincerely,
${b.name} Customer Relations & Legal Division
Contact: ${b.email}`
  },
  case4: {
    id: "case4",
    title: "Case 4: 타인 도용/미승인 부정 거래 주장",
    badge: "Fraud Defense / AVS Matched",
    icon: "🔒",
    tagColor: "#ec4899",
    desc: "카드가 도용되었거나 본인이 승인하지 않은 거래라고 주장하여 사기(Fraud) 사유로 차지백을 제기한 경우",
    getRebuttal: (b, d) => `Dear Fraud Investigation & Chargeback Department,

We are submitting evidence to refute the 'Unauthorized Transaction' claim regarding Order ${d.orderNo} for ${d.amount}.

1. MULTI-LAYER FRAUD VERIFICATION PASSED:
This order underwent rigorous automated fraud screening via Shopify Payments:
• CVV / CVC Security Code: VERIFIED & MATCHED
• Address Verification System (AVS): BILLING ADDRESS MATCHED
• Customer IP Geolocation: MATCHES Cardholder's Billing City / State

2. CONSISTENT SHIPPING & BILLING PROFILES:
The product (${d.productName || b.products[0].title}) was shipped to ${d.shippingAddr}, which matches the cardholder's verified billing profile, and was safely delivered on ${d.deliveryDate} via ${d.carrier} (${d.trackingNo}).

3. AUTHENTIC FIRST-PARTY TRANSACTION:
All digital signatures, IP records, matching billing/shipping credentials, and courier delivery scans irrefutably prove that this was an authorized purchase by the cardholder or household member.

We request an immediate reversal of this chargeback and full release of funds.

Attached Evidence:
1. Shopify Payments Fraud Analysis Full Audit Report
2. Delivery Verification & Courier Timestamp Scan
3. Order Confirmation & E-Invoice Sent to Customer Email

Sincerely,
${b.name} Risk & Security Compliance
Contact: ${b.email}`
  },
  case5: {
    id: "case5",
    title: "Case 5: 분쟁 철회 유도 고객 CS 이메일",
    badge: "Pre-Dispute De-escalation CS",
    icon: "✉️",
    tagColor: "#8b5cf6",
    desc: "고객에게 분쟁을 취소(Withdraw)해 주시면 즉시 전액 환불 또는 새제품 교환을 처리해 드리겠다고 안내하는 실전 CS 메일",
    getRebuttal: (b, d) => `Subject: Important Update Regarding Your Order ${d.orderNo} with ${b.name}

Hi ${d.customerName},

Thank you for contacting ${b.name}. We noticed that a payment dispute was recently opened with your financial institution regarding your order ${d.orderNo} (${d.productName || b.products[0].title}).

We sincerely apologize for any inconvenience or frustration you may have experienced. Your complete satisfaction is our absolute priority, and we would love to resolve this for you immediately!

💡 HOW WE CAN RESOLVE THIS TOGETHER INSTANTLY:
When a bank dispute is active, our merchant payment system is temporarily locked by the card issuer, preventing us from issuing an immediate direct refund or free expedited replacement.

1. If you wish to receive a full refund or a free replacement immediately, please contact your credit card issuer or bank mobile app to withdraw / cancel the chargeback.
2. Once the dispute is closed, simply reply to this email, and our customer care team will process your full refund or dispatch your replacement within minutes.

If you have any questions or need tracking verification (${d.carrier}: ${d.trackingNo}), please reply directly to this email or reach us anytime at ${b.email}.

Warm regards,
Customer Care Team
${b.name}
${b.email}`
  }
};

function renderDisputeView(b) {
  if (!storeMockContainer) return;

  if (!disputeFormValues.productName) {
    disputeFormValues.productName = b.products[selectedProductIndex]?.title || b.products[0].title;
  }

  const scenario = DISPUTE_SCENARIOS[currentDisputeScenario] || DISPUTE_SCENARIOS.case1;
  const rebuttalText = scenario.getRebuttal(b, disputeFormValues);

  storeMockContainer.innerHTML = `
    ${getMockHeaderHTML(b)}

    <div style="padding: 24px 20px; background: #090d16; color: #f8fafc; font-family: Outfit, sans-serif; min-height: 650px;">
      
      <!-- Top Title & Golden Rule Alert Banner -->
      <div style="margin-bottom: 20px; background: linear-gradient(135deg, rgba(239, 68, 68, 0.15) 0%, rgba(15, 23, 42, 0.9) 100%); border: 1px solid rgba(239, 68, 68, 0.4); border-radius: 12px; padding: 18px 20px; box-shadow: 0 4px 25px rgba(239, 68, 68, 0.15);">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; flex-wrap: wrap; gap: 8px;">
          <div style="display: flex; align-items: center; gap: 10px;">
            <span style="font-size: 24px;">🛡️</span>
            <div>
              <h1 style="font-size: 20px; font-weight: 900; margin: 0; color: #f87171;">${b.name} 차지백(Chargeback) & CS 법적 방어 센터</h1>
              <span style="font-size: 11px; color: #94a3b8;">76대 스파미 실전 운영 가이드라인 융합 • 1초 만에 100% 승소용 공식 영문 소명서 생성</span>
            </div>
          </div>
          <span style="font-size: 10px; background: rgba(239, 68, 68, 0.25); color: #fca5a5; border: 1px solid rgba(239, 68, 68, 0.5); padding: 4px 10px; border-radius: 20px; font-weight: 800;">
            🚨 승소율 극대화 가동 중
          </span>
        </div>

        <!-- Golden Rules Row -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 10px; margin-top: 12px; font-size: 11px; line-height: 1.5;">
          <div style="background: rgba(0,0,0,0.4); padding: 10px 12px; border-radius: 8px; border-left: 3px solid #ef4444;">
            <strong style="color: #fca5a5;">⚠️ 제1철칙: 절대 'Accept dispute (분쟁 수락)' 금지</strong><br>
            수락 시 패소 확정 + $15~$20 수수료 강제 부과. 무조건 'Submit response'로 100% 소명서 제출!
          </div>
          <div style="background: rgba(0,0,0,0.4); padding: 10px 12px; border-radius: 8px; border-left: 3px solid #38bdf8;">
            <strong style="color: #38bdf8;">💡 제2철칙: 고객 사전 설득 CS 메일 병행 발송</strong><br>
            환불을 해주더라도 고객이 카드사에 차지백 취소(Withdraw)를 먼저 접수하도록 유도(Case 5 활용).
          </div>
        </div>
      </div>

      <!-- 5-Scenario Switcher Tabs -->
      <div style="display: flex; gap: 8px; margin-bottom: 20px; overflow-x: auto; padding-bottom: 4px;">
        ${Object.values(DISPUTE_SCENARIOS).map(sc => `
          <button type="button" class="dispute-tab-btn ${currentDisputeScenario === sc.id ? 'active' : ''}" data-sc="${sc.id}" style="
            background: ${currentDisputeScenario === sc.id ? 'linear-gradient(135deg, ' + sc.tagColor + '33, rgba(15,23,42,0.9))' : 'rgba(255,255,255,0.03)'};
            border: 1px solid ${currentDisputeScenario === sc.id ? sc.tagColor : 'rgba(255,255,255,0.1)'};
            color: ${currentDisputeScenario === sc.id ? '#fff' : '#94a3b8'};
            padding: 10px 14px;
            border-radius: 8px;
            font-size: 11px;
            font-weight: 800;
            cursor: pointer;
            white-space: nowrap;
            display: flex;
            align-items: center;
            gap: 6px;
            transition: all 0.2s;
            box-shadow: ${currentDisputeScenario === sc.id ? '0 0 15px ' + sc.tagColor + '40' : 'none'};
          ">
            <span>${sc.icon}</span>
            <span>${sc.title.split(':')[1] || sc.title}</span>
          </button>
        `).join('')}
      </div>

      <!-- Main 2-Column Dispute Desk Matrix -->
      <div style="display: grid; grid-template-columns: 1fr 1.35fr; gap: 20px; align-items: start;">
        
        <!-- Left: Dynamic Parameters & 5-Point Evidence Checklist -->
        <div>
          <!-- Parameter Input Form -->
          <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 16px; margin-bottom: 16px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
              <span style="font-size: 12px; font-weight: 800; color: #38bdf8;">📝 실시간 소명 파라미터 입력</span>
              <span style="font-size: 9px; background: rgba(56, 189, 248, 0.15); color: #38bdf8; padding: 2px 6px; border-radius: 4px;">실시간 자동 바인딩</span>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; font-size: 11px;">
              <div>
                <label style="display: block; color: #94a3b8; margin-bottom: 3px; font-weight: 700;">주문 번호</label>
                <input type="text" id="disp-order-no" value="${disputeFormValues.orderNo}" style="width: 100%; box-sizing: border-box; background: rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.15); color: #fff; padding: 6px 8px; border-radius: 6px; font-size: 11px;">
              </div>
              <div>
                <label style="display: block; color: #94a3b8; margin-bottom: 3px; font-weight: 700;">고객 성명</label>
                <input type="text" id="disp-cust-name" value="${disputeFormValues.customerName}" style="width: 100%; box-sizing: border-box; background: rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.15); color: #fff; padding: 6px 8px; border-radius: 6px; font-size: 11px;">
              </div>
              <div style="grid-column: span 2;">
                <label style="display: block; color: #94a3b8; margin-bottom: 3px; font-weight: 700;">상품명</label>
                <input type="text" id="disp-prod-name" value="${disputeFormValues.productName}" style="width: 100%; box-sizing: border-box; background: rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.15); color: #fff; padding: 6px 8px; border-radius: 6px; font-size: 11px;">
              </div>
              <div>
                <label style="display: block; color: #94a3b8; margin-bottom: 3px; font-weight: 700;">배송사</label>
                <input type="text" id="disp-carrier" value="${disputeFormValues.carrier}" placeholder="USPS / UPS / Amazon TBA" style="width: 100%; box-sizing: border-box; background: rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.15); color: #fff; padding: 6px 8px; border-radius: 6px; font-size: 11px;">
              </div>
              <div>
                <label style="display: block; color: #94a3b8; margin-bottom: 3px; font-weight: 700;">운송장 번호 (Tracking)</label>
                <input type="text" id="disp-tracking" value="${disputeFormValues.trackingNo}" style="width: 100%; box-sizing: border-box; background: rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.15); color: #fff; padding: 6px 8px; border-radius: 6px; font-size: 11px;">
              </div>
              <div>
                <label style="display: block; color: #94a3b8; margin-bottom: 3px; font-weight: 700;">주문 접수일</label>
                <input type="text" id="disp-order-date" value="${disputeFormValues.orderDate}" style="width: 100%; box-sizing: border-box; background: rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.15); color: #fff; padding: 6px 8px; border-radius: 6px; font-size: 11px;">
              </div>
              <div>
                <label style="display: block; color: #94a3b8; margin-bottom: 3px; font-weight: 700;">배송 완료일 / 상태</label>
                <input type="text" id="disp-delivery-date" value="${disputeFormValues.deliveryDate}" style="width: 100%; box-sizing: border-box; background: rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.15); color: #fff; padding: 6px 8px; border-radius: 6px; font-size: 11px;">
              </div>
              <div style="grid-column: span 2;">
                <label style="display: block; color: #94a3b8; margin-bottom: 3px; font-weight: 700;">배송지 주소 (Shipping Address)</label>
                <input type="text" id="disp-address" value="${disputeFormValues.shippingAddr}" style="width: 100%; box-sizing: border-box; background: rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.15); color: #fff; padding: 6px 8px; border-radius: 6px; font-size: 11px;">
              </div>
            </div>
          </div>

          <!-- 5-Point Evidence Checklist -->
          <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 10px; padding: 16px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
              <span style="font-size: 12px; font-weight: 800; color: #10b981;">📋 승소 필수 증빙 5종 체크리스트</span>
              <span style="font-size: 9px; background: rgba(16, 185, 129, 0.2); color: #10b981; padding: 2px 6px; border-radius: 4px; font-weight: 800;">승소율 95%+</span>
            </div>
            
            <div style="display: flex; flex-direction: column; gap: 8px; font-size: 11px; color: #cbd5e1;">
              <label style="display: flex; gap: 8px; align-items: flex-start; cursor: pointer;">
                <input type="checkbox" checked style="accent-color: #10b981; margin-top: 2px;">
                <span><strong>1. 주문 인보이스 PDF:</strong> 쇼피파이 주문 상세 > 'Print order page' > PDF 저장 (고객 IP 및 주소 일치 증빙)</span>
              </label>
              <label style="display: flex; gap: 8px; align-items: flex-start; cursor: pointer;">
                <input type="checkbox" checked style="accent-color: #10b981; margin-top: 2px;">
                <span><strong>2. 운송사 배송완료 캡처:</strong> USPS/UPS/Amazon 공식 트래킹 페이지의 'Delivered' 도달 타임라인 전체 스크린샷</span>
              </label>
              <label style="display: flex; gap: 8px; align-items: flex-start; cursor: pointer;">
                <input type="checkbox" checked style="accent-color: #10b981; margin-top: 2px;">
                <span><strong>3. 30일 안심 환불 규정 캡처:</strong> 스토어의 30-Day RMA Return & Refund 정책 페이지 스크린샷</span>
              </label>
              <label style="display: flex; gap: 8px; align-items: flex-start; cursor: pointer;">
                <input type="checkbox" checked style="accent-color: #10b981; margin-top: 2px;">
                <span><strong>4. 사기 분석 녹색 지표 로그:</strong> Fraud Analysis의 CVV 일치 및 IP 위치 일치 항목 캡처</span>
              </label>
              <label style="display: flex; gap: 8px; align-items: flex-start; cursor: pointer;">
                <input type="checkbox" checked style="accent-color: #10b981; margin-top: 2px;">
                <span><strong>5. 고객 소통 이메일 기록:</strong> 고객과 주고받은 CS 메일 내역 (또는 사전 문의 없이 차지백을 걸었다는 증빙)</span>
              </label>
            </div>
          </div>
        </div>

        <!-- Right: Live Rebuttal Text Box & 1-Click Action Hub -->
        <div>
          <div style="background: rgba(15, 23, 42, 0.95); border: 1px solid ${scenario.tagColor}50; border-radius: 10px; padding: 18px; box-shadow: 0 0 20px ${scenario.tagColor}20;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">
              <div>
                <span style="font-size: 13px; font-weight: 900; color: ${scenario.tagColor};">${scenario.icon} ${scenario.title}</span>
                <p style="font-size: 10px; color: #94a3b8; margin: 3px 0 0 0;">${scenario.desc}</p>
              </div>
              <button type="button" id="btn-copy-rebuttal" style="
                background: linear-gradient(135deg, ${scenario.tagColor}, #0284c7);
                color: #fff;
                border: none;
                padding: 8px 14px;
                border-radius: 6px;
                font-size: 11px;
                font-weight: 800;
                cursor: pointer;
                display: flex;
                align-items: center;
                gap: 6px;
                box-shadow: 0 4px 15px ${scenario.tagColor}40;
                transition: all 0.2s;
              ">
                📋 [공식 소명서 원클릭 복사]
              </button>
            </div>

            <!-- Rebuttal Textarea -->
            <textarea id="rebuttal-textarea" readonly style="
              width: 100%;
              height: 380px;
              box-sizing: border-box;
              background: #040711;
              border: 1px solid rgba(255,255,255,0.1);
              border-radius: 8px;
              color: #f1f5f9;
              font-family: 'SF Mono', Consolas, Monaco, monospace;
              font-size: 11px;
              line-height: 1.6;
              padding: 14px;
              resize: vertical;
              outline: none;
            ">${rebuttalText}</textarea>

            <!-- Admin 4-Step SOP Action Flow -->
            <div style="margin-top: 14px; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-radius: 8px; font-size: 10px; color: #94a3b8; line-height: 1.5;">
              <strong style="color: #cbd5e1; display: block; margin-bottom: 4px;">🚀 쇼피파이 관리자(Admin) 실전 접수 4단계 순서:</strong>
              1. <strong>주문 상세 접속:</strong> 차지백 알림 주문 진입 ➔ 우측 상단 <strong>'Submit response (답변 제출)'</strong> 클릭<br>
              2. <strong>배송 세부 정보 입력:</strong> 택배사(${disputeFormValues.carrier}) 및 송장번호(${disputeFormValues.trackingNo}) 기입<br>
              3. <strong>소명서 텍스트 붙여넣기:</strong> 위 복사한 영문 소명서를 <em>'Why do you believe this is not fraud?'</em> 란에 붙여넣기<br>
              4. <strong>증빙 파일 5종 첨부:</strong> 인보이스 PDF, 트래킹 스크린샷, 30일 환불 규정 캡처를 첨부하고 <strong>[Submit]</strong> 클릭 완료!
            </div>
          </div>
        </div>

      </div>

    </div>

    ${getMockFooterHTML(b)}
  `;

  // Attach Scenario Switcher Event Listeners
  document.querySelectorAll(".dispute-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      currentDisputeScenario = btn.dataset.sc;
      renderDisputeView(b);
    });
  });

  // Attach Live Input Real-Time Binding Listeners
  const bindInput = (id, key) => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("input", (e) => {
        disputeFormValues[key] = e.target.value;
        const ta = document.getElementById("rebuttal-textarea");
        const sc = DISPUTE_SCENARIOS[currentDisputeScenario] || DISPUTE_SCENARIOS.case1;
        if (ta) ta.value = sc.getRebuttal(b, disputeFormValues);
      });
    }
  };

  bindInput("disp-order-no", "orderNo");
  bindInput("disp-cust-name", "customerName");
  bindInput("disp-prod-name", "productName");
  bindInput("disp-carrier", "carrier");
  bindInput("disp-tracking", "trackingNo");
  bindInput("disp-order-date", "orderDate");
  bindInput("disp-delivery-date", "deliveryDate");
  bindInput("disp-address", "shippingAddr");

  // Attach 1-Click Copy Listener
  const btnCopy = document.getElementById("btn-copy-rebuttal");
  const ta = document.getElementById("rebuttal-textarea");
  if (btnCopy && ta) {
    btnCopy.addEventListener("click", () => {
      navigator.clipboard.writeText(ta.value).then(() => {
        const origText = btnCopy.innerHTML;
        btnCopy.innerHTML = "✅ 복사 완료! (클립보드 저장됨)";
        btnCopy.style.background = "#10b981";
        setTimeout(() => {
          btnCopy.innerHTML = origText;
          const sc = DISPUTE_SCENARIOS[currentDisputeScenario];
          btnCopy.style.background = `linear-gradient(135deg, ${sc.tagColor}, #0284c7)`;
        }, 2000);
      }).catch(() => {
        ta.select();
        document.execCommand("copy");
        alert("📋 소명서가 복사되었습니다!");
      });
    });
  }
}

// Tab Click Handlers
if (tabHome) tabHome.addEventListener("click", () => navigateToTab("home"));
if (tabPdp) tabPdp.addEventListener("click", () => navigateToTab("pdp", 0));
if (tabCollections) tabCollections.addEventListener("click", () => navigateToTab("collections"));
if (tabCart) tabCart.addEventListener("click", () => navigateToTab("cart"));
if (tabLegal) tabLegal.addEventListener("click", () => navigateToTab("legal"));
if (tabDispute) tabDispute.addEventListener("click", () => navigateToTab("dispute"));

// Category Switcher Click Handlers (1탄 ~ 5탄)
document.querySelectorAll(".cat-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    loadBrand(btn.dataset.cat);
  });
});

// Brand Input Real-Time Live Sync
if (inputBrandName) {
  inputBrandName.addEventListener("input", e => {
    const elLogo = document.getElementById("mock-logo");
    if (elLogo) elLogo.textContent = e.target.value;
    const elFBrand = document.getElementById("mock-footer-brand");
    if (elFBrand) elFBrand.textContent = e.target.value;
  });
}

if (inputBrandSlogan) {
  inputBrandSlogan.addEventListener("input", e => {
    const elTitle = document.getElementById("mock-hero-title");
    if (elTitle) elTitle.textContent = e.target.value;
  });
}

if (inputCsEmail) {
  inputCsEmail.addEventListener("input", e => {
    const elEmail = document.getElementById("mock-email-span");
    if (elEmail) elEmail.textContent = e.target.value;
    document.querySelectorAll(".cs-mail-target").forEach(el => {
      el.textContent = e.target.value;
    });
  });
}

if (inputColorPrimary && labelColorPrimary) {
  inputColorPrimary.addEventListener("input", e => {
    labelColorPrimary.textContent = e.target.value.toUpperCase();
    const elHero = document.getElementById("mock-hero");
    if (elHero) elHero.style.background = `linear-gradient(135deg, ${e.target.value} 0%, #1e293b 100%)`;
    document.querySelectorAll(".mock-p-btn").forEach(btn => {
      btn.style.backgroundColor = e.target.value;
    });
  });
}

if (inputColorAccent && labelColorAccent) {
  inputColorAccent.addEventListener("input", e => {
    labelColorAccent.textContent = e.target.value.toUpperCase();
    const elCta = document.getElementById("mock-cta-btn");
    if (elCta) elCta.style.backgroundColor = e.target.value;
    document.querySelectorAll(".mock-p-price").forEach(el => {
      el.style.color = e.target.value;
    });
  });
}

// One-Touch Quick Copy Cost Button
if (elBtnCopyCost) {
  elBtnCopyCost.addEventListener("click", () => {
    navigator.clipboard.writeText(currentCost.toFixed(2)).then(() => {
      const originalText = elBtnCopyCost.innerHTML;
      elBtnCopyCost.innerHTML = "✅ 복사완료!";
      elBtnCopyCost.style.background = "#38bdf8";
      setTimeout(() => {
        elBtnCopyCost.innerHTML = originalText;
        elBtnCopyCost.style.background = "#10b981";
      }, 1800);
    }).catch(() => {
      alert(`원가: $${currentCost.toFixed(2)}`);
    });
  });
}

// Device Viewport Switcher
const btnViewDesktop = document.getElementById("btn-view-desktop");
const btnViewMobile = document.getElementById("btn-view-mobile");

if (btnViewDesktop && btnViewMobile && screenViewport) {
  btnViewDesktop.addEventListener("click", () => {
    btnViewDesktop.classList.add("active");
    btnViewMobile.classList.remove("active");
    screenViewport.classList.remove("mobile-mode");
  });

  btnViewMobile.addEventListener("click", () => {
    btnViewMobile.classList.add("active");
    btnViewDesktop.classList.remove("active");
    screenViewport.classList.add("mobile-mode");
  });
}

// 1-Click Build Action Execution Engine
if (btnRunBuild && termBody) {
  btnRunBuild.addEventListener("click", async () => {
    const b = BRAND_DATABASE[currentCategory];
    termBody.innerHTML = "";
    if (releaseCards) releaseCards.style.display = "none";
    btnRunBuild.disabled = true;
    btnRunBuild.style.opacity = "0.7";

    const logs = [
      { text: `⚡ [INIT] Target Brand: ${b.name} (${b.subText})`, cls: "text-warn", delay: 200 },
      { text: `⚙️ [1/7] Synthesizing Native Liquid Theme (${b.themeZip})...`, cls: "text-muted", delay: 500 },
      { text: `✅ [1/7] Zero App Fee ($0) Liquid Engine Injected. 0.1s Fast Loading Verified.`, cls: "text-success", delay: 800 },
      { text: `🗺️ [2/7] Generating Zero-Click Lookbook Navigation & Mega Menus...`, cls: "text-muted", delay: 1100 },
      { text: `📦 [3/7] Synthesizing Verified 1:1 Physical Catalog CSV Matrix...`, cls: "text-muted", delay: 1400 },
      { text: `🛡️ [4/7] Auto-Binding Physical Assets & Sanitizing IP Trademarks (Zero-Broken Media)...`, cls: "text-muted", delay: 1700 },
      { text: `⚖️ [5/7] Generating 4-Pillar US D2C Trust Policies (RMA, $50+ Express, 1-Yr Warranty)...`, cls: "text-muted", delay: 2000 },
      { text: `🐧 [6/7] Packaging POSIX-Compliant Linux Archive (${b.themeZip})...`, cls: "text-muted", delay: 2300 },
      { text: `📁 [7/7] Mirroring to Dedicated AutoBuilder Vault: /PNK D2C Flagship AutoBuilder/downloads/...`, cls: "text-muted", delay: 2600 }
    ];

    logs.forEach(log => {
      setTimeout(() => {
        const line = document.createElement("div");
        line.className = `log-line ${log.cls}`;
        line.textContent = `> ${log.text}`;
        termBody.appendChild(line);
        termBody.scrollTop = termBody.scrollHeight;
      }, log.delay);
    });

    setTimeout(() => {
      btnRunBuild.disabled = false;
      btnRunBuild.style.opacity = "1";
      if (rZipTitle) rZipTitle.textContent = b.themeZip;
      if (rLegalTitle) rLegalTitle.textContent = b.legalFile;
      if (termTimestamp) termTimestamp.textContent = new Date().toLocaleTimeString();

      const successLine = document.createElement("div");
      successLine.className = "log-line text-success";
      successLine.textContent = `> 🎉 [SUCCESS] ${b.name} 7-STAGE FLAGSHIP BUILD COMPLETE! Vault Mirrored & Ready for Live Deploy.`;
      termBody.appendChild(successLine);

      if (releaseCards) releaseCards.style.display = "grid";
    }, 3000);
  });
}

// Download Button Triggers
const btnDlZip = document.getElementById("btn-dl-zip");
const btnDlCsv = document.getElementById("btn-dl-csv");
const btnDlLegal = document.getElementById("btn-dl-legal");

if (btnDlZip) {
  btnDlZip.addEventListener("click", () => {
    alert(`📦 [테마 ZIP 다운로드]\n${BRAND_DATABASE[currentCategory].themeZip} 파일이 내 컴퓨터로 다운로드됩니다.`);
  });
}
if (btnDlCsv) {
  btnDlCsv.addEventListener("click", () => {
    alert(`📄 [실물 카탈로그 CSV 다운로드]\n${BRAND_DATABASE[currentCategory].name} 실물 소싱 제원표 CSV가 다운로드됩니다.`);
  });
}
if (btnDlLegal) {
  btnDlLegal.addEventListener("click", () => {
    alert(`⚖️ [4대 법적 정책 문서 다운로드]\n${BRAND_DATABASE[currentCategory].legalFile} 규정집이 다운로드됩니다.`);
  });
}

// ==========================================================================
// 🔒 Master Security Gate (Password & Expiry Date Verification)
// ==========================================================================
const SECURITY_CONFIG = {
  MASTER_PASSWORD: "pnk2026",    // 기본 마스터 비밀번호 (변경 가능)
  EXPIRATION_DATE: "2026-12-31", // 유효기간 (이 날짜 이후 자동 잠금)
  STORAGE_KEY: "pnk_auth_token"
};

function initSecurityGate() {
  const authModal = document.getElementById("auth-modal-overlay");
  const authInput = document.getElementById("auth-password-input");
  const btnSubmit = document.getElementById("btn-submit-auth");
  const errorMsg = document.getElementById("auth-error-msg");
  const expiredBox = document.getElementById("auth-expired-box");
  const inputContainer = document.getElementById("auth-input-container");

  if (!authModal) return;

  // 1. Check Expiration Date
  const now = new Date();
  const expiry = new Date(SECURITY_CONFIG.EXPIRATION_DATE + "T23:59:59");

  if (now > expiry) {
    if (expiredBox) expiredBox.style.display = "block";
    if (inputContainer) inputContainer.style.display = "none";
    authModal.classList.add("active");
    return;
  }

  // 2. Check Session Storage
  const isAuth = sessionStorage.getItem(SECURITY_CONFIG.STORAGE_KEY);
  if (isAuth === "authorized") {
    authModal.classList.remove("active");
    return;
  }

  // 3. Show Modal for Authentication
  authModal.classList.add("active");

  const verifyPassword = () => {
    const entered = (authInput ? authInput.value : "").trim();
    if (entered === SECURITY_CONFIG.MASTER_PASSWORD) {
      sessionStorage.setItem(SECURITY_CONFIG.STORAGE_KEY, "authorized");
      if (errorMsg) errorMsg.style.display = "none";
      authModal.classList.remove("active");
    } else {
      if (errorMsg) errorMsg.style.display = "block";
      if (authInput) {
        authInput.value = "";
        authInput.focus();
        authInput.style.borderColor = "#ef4444";
      }
    }
  };

  if (btnSubmit) btnSubmit.addEventListener("click", verifyPassword);
  if (authInput) {
    authInput.addEventListener("keyup", (e) => {
      if (e.key === "Enter") verifyPassword();
    });
  }
}

// Initial Boot Sequence on Page Load
window.addEventListener("DOMContentLoaded", () => {
  initSecurityGate();
  loadBrand("outdoor");
});
