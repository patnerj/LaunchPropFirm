export const WA_BASE = "https://wa.me/923158583905";

export const WA = {
  header: `${WA_BASE}?text=Hi%20Haris%2C%20I%27m%20interested%20in%20the%20prop%20firm%20platform.`,
  floating: `${WA_BASE}?text=Hi%20Haris%2C%20I%20have%20a%20question%20about%20the%20prop%20firm%20platform.`,
  adminDemo: `${WA_BASE}?text=Hi%20Haris%2C%20I%27d%20like%20admin%20demo%20access%20to%20the%20prop%20firm%20platform.`,
  whichTier: `${WA_BASE}?text=Hi%20Haris%2C%20which%20package%20fits%20my%20situation%3F`,
  sourceCode: `${WA_BASE}?text=Hi%20Haris%2C%20I%27m%20interested%20in%20the%20Source%20Code%20package.`,
  launchReady: `${WA_BASE}?text=Hi%20Haris%2C%20I%27m%20interested%20in%20the%20Launch%20Ready%20package.`,
  launchPartner: `${WA_BASE}?text=Hi%20Haris%2C%20I%27m%20interested%20in%20the%20Launch%20Partner%20package.`,
  sayHi: `${WA_BASE}?text=Hi%20Haris%21`,
  readyToTalk: `${WA_BASE}?text=Hi%20Haris%2C%20I%27m%20ready%20to%20talk%20about%20the%20prop%20firm%20platform.`,
};

/** Placeholder demo URLs — replace before go-live */
export const DEMO = {
  trader: "https://demo-trader.example.com",
  certificate: "https://demo-trader.example.com/certificate",
};

/** Base URL of the live platform (where legal/trust pages are served).
 *  Replace with your real platform domain before go-live. */
export const PLATFORM_BASE = "https://app.launchapropfirm.com";

export const TRUST_LINKS: { href: string; label: string }[] = [
  { href: `${PLATFORM_BASE}/support`, label: "Support Center" },
  { href: `${PLATFORM_BASE}/contact`, label: "Contact" },
  { href: `${PLATFORM_BASE}/status`,  label: "System Status" },
  { href: `${PLATFORM_BASE}/terms`,   label: "Terms" },
  { href: `${PLATFORM_BASE}/privacy`, label: "Privacy" },
  { href: `${PLATFORM_BASE}/refund`,  label: "Refund Policy" },
  { href: `${PLATFORM_BASE}/risk`,    label: "Risk Disclosure" },
];
