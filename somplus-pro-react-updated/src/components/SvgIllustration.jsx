const gradients = {
  campaign: ['#0064b7', '#ff7a00', '#f8c400'],
  website: ['#0064b7', '#1197d4', '#f8c400'],
  seo: ['#00a86b', '#0064b7', '#f8c400'],
  brand: ['#ff7a00', '#f8c400', '#0064b7'],
  web: ['#0064b7', '#1197d4', '#f8c400'],
  social: ['#7c3aed', '#ff7a00', '#f8c400'],
  growth: ['#00a86b', '#0064b7', '#f8c400'],
  content: ['#ff7a00', '#ec4899', '#f8c400'],
  strategy: ['#0f172a', '#0064b7', '#ff7a00'],
};

function BrowserIcon({ gradientId }) {
  return (
    <g>
      <rect x="120" y="130" width="500" height="310" rx="32" fill="var(--card-solid)" opacity="0.96" />
      <rect x="120" y="130" width="500" height="62" rx="32" fill="#eff6ff" />
      <circle cx="160" cy="162" r="10" fill="#ff7a00" />
      <circle cx="192" cy="162" r="10" fill="#f8c400" />
      <circle cx="224" cy="162" r="10" fill="#00a86b" />
      <rect x="164" y="226" width="180" height="30" rx="15" fill={`url(#${gradientId})`} opacity="0.9" />
      <rect x="164" y="286" width="330" height="22" rx="11" fill="var(--svg-line)" />
      <rect x="164" y="328" width="240" height="22" rx="11" fill="var(--svg-line)" opacity="0.62" />
      <rect x="164" y="384" width="120" height="42" rx="21" fill={`url(#${gradientId})`} />
      <rect x="420" y="232" width="142" height="142" rx="34" fill="#eaf5ff" />
      <path d="M452 304h78M491 265l-42 39 42 39M520 265l42 39-42 39" fill="none" stroke="#0064b7" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
}

function BrandIcon({ gradientId }) {
  return (
    <g>
      <rect x="110" y="120" width="315" height="330" rx="36" fill="var(--card-solid)" opacity="0.97" />
      <rect x="468" y="120" width="260" height="330" rx="36" fill="var(--card-solid)" opacity="0.97" />
      <circle cx="270" cy="245" r="86" fill={`url(#${gradientId})`} />
      <circle cx="244" cy="222" r="18" fill="#ffffff" opacity="0.92" />
      <circle cx="295" cy="216" r="18" fill="#ffffff" opacity="0.7" />
      <circle cx="308" cy="273" r="18" fill="#ffffff" opacity="0.83" />
      <circle cx="250" cy="292" r="18" fill="#ffffff" opacity="0.75" />
      <rect x="176" y="368" width="190" height="24" rx="12" fill="var(--svg-line)" />
      <rect x="176" y="405" width="132" height="18" rx="9" fill="var(--svg-line)" opacity="0.65" />
      <rect x="516" y="170" width="155" height="52" rx="18" fill="#0064b7" />
      <rect x="516" y="246" width="155" height="52" rx="18" fill="#ff7a00" />
      <rect x="516" y="322" width="155" height="52" rx="18" fill="#f8c400" />
      <path d="M557 410h78" stroke="#0064b7" strokeWidth="18" strokeLinecap="round" />
    </g>
  );
}

function SocialIcon({ gradientId }) {
  return (
    <g>
      <rect x="292" y="95" width="300" height="390" rx="52" fill="var(--card-solid)" opacity="0.97" />
      <rect x="322" y="140" width="240" height="300" rx="34" fill="#f8fafc" />
      <circle cx="442" cy="454" r="15" fill="var(--svg-line)" />
      <rect x="342" y="170" width="128" height="24" rx="12" fill={`url(#${gradientId})`} opacity="0.85" />
      <rect x="342" y="222" width="170" height="78" rx="24" fill="#ffffff" />
      <rect x="372" y="242" width="110" height="16" rx="8" fill="var(--svg-line)" />
      <rect x="372" y="270" width="78" height="16" rx="8" fill="var(--svg-line)" opacity="0.65" />
      <rect x="396" y="326" width="132" height="74" rx="24" fill={`url(#${gradientId})`} />
      <path d="M439 357c16-23 47-13 47 10 0 22-47 45-47 45s-47-23-47-45c0-23 31-33 47-10z" fill="#ffffff" opacity="0.93" transform="translate(24 -18) scale(.68)" />
      <circle cx="625" cy="195" r="46" fill="#ff7a00" />
      <path d="M625 177v36M607 195h36" stroke="#ffffff" strokeWidth="14" strokeLinecap="round" />
      <circle cx="242" cy="340" r="58" fill="#0064b7" opacity="0.92" />
      <path d="M220 344h45M220 318h62M220 370h30" stroke="#ffffff" strokeWidth="14" strokeLinecap="round" opacity="0.9" />
    </g>
  );
}

function SeoIcon({ gradientId }) {
  return (
    <g>
      <rect x="120" y="132" width="500" height="310" rx="36" fill="var(--card-solid)" opacity="0.97" />
      <rect x="170" y="190" width="155" height="155" rx="78" fill="#eaf5ff" />
      <circle cx="248" cy="268" r="50" fill="none" stroke="#0064b7" strokeWidth="22" />
      <path d="M288 308l72 72" stroke="#0064b7" strokeWidth="24" strokeLinecap="round" />
      <path d="M410 364V260M480 364V220M550 364V185" stroke={`url(#${gradientId})`} strokeWidth="32" strokeLinecap="round" />
      <path d="M410 260l70-40 70-35" fill="none" stroke="#f8c400" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="165" y="398" width="330" height="20" rx="10" fill="var(--svg-line)" opacity="0.65" />
      <circle cx="625" cy="165" r="54" fill="#00a86b" />
      <path d="M600 165l18 18 34-39" fill="none" stroke="#ffffff" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
}

function ContentIcon({ gradientId }) {
  return (
    <g>
      <rect x="120" y="150" width="240" height="315" rx="36" fill="var(--card-solid)" opacity="0.97" />
      <rect x="400" y="105" width="300" height="355" rx="40" fill="var(--card-solid)" opacity="0.97" />
      <rect x="152" y="190" width="176" height="112" rx="24" fill={`url(#${gradientId})`} />
      <rect x="152" y="332" width="150" height="22" rx="11" fill="var(--svg-line)" />
      <rect x="152" y="374" width="112" height="18" rx="9" fill="var(--svg-line)" opacity="0.65" />
      <rect x="442" y="150" width="216" height="124" rx="28" fill="#fff7ed" />
      <path d="M462 252l70-72 45 48 28-30 53 54" fill={`url(#${gradientId})`} opacity="0.9" />
      <circle cx="603" cy="184" r="20" fill="#f8c400" />
      <rect x="442" y="312" width="188" height="22" rx="11" fill="var(--svg-line)" />
      <rect x="442" y="354" width="142" height="18" rx="9" fill="var(--svg-line)" opacity="0.65" />
      <path d="M668 385h54" stroke="#ff7a00" strokeWidth="20" strokeLinecap="round" />
      <path d="M694 359v52" stroke="#ff7a00" strokeWidth="20" strokeLinecap="round" />
    </g>
  );
}

function StrategyIcon({ gradientId }) {
  return (
    <g>
      <rect x="116" y="132" width="575" height="320" rx="38" fill="var(--card-solid)" opacity="0.97" />
      <path d="M190 360c85-122 170-35 242-120 54-64 110-75 174-48" fill="none" stroke={`url(#${gradientId})`} strokeWidth="26" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="190" cy="360" r="34" fill="#0064b7" />
      <circle cx="432" cy="240" r="34" fill="#ff7a00" />
      <circle cx="606" cy="192" r="34" fill="#f8c400" />
      <rect x="180" y="190" width="165" height="20" rx="10" fill="var(--svg-line)" opacity="0.72" />
      <rect x="180" y="230" width="112" height="18" rx="9" fill="var(--svg-line)" opacity="0.5" />
      <circle cx="575" cy="338" r="70" fill="#eaf5ff" />
      <path d="M575 286l20 52 52 20-52 20-20 52-20-52-52-20 52-20 20-52z" fill={`url(#${gradientId})`} opacity="0.96" />
    </g>
  );
}

function DefaultIcon({ gradientId }) {
  return <BrowserIcon gradientId={gradientId} />;
}

const iconMap = {
  web: BrowserIcon,
  website: BrowserIcon,
  brand: BrandIcon,
  social: SocialIcon,
  growth: SeoIcon,
  seo: SeoIcon,
  content: ContentIcon,
  strategy: StrategyIcon,
  campaign: SocialIcon,
};

export default function SvgIllustration({ type = 'website', title = 'Digital Growth' }) {
  const [first, second, third] = gradients[type] || gradients.website;
  const safeType = `${type}-${title}`.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const gradientId = `service-gradient-${safeType}`;
  const bgGradientId = `service-bg-${safeType}`;
  const shadowId = `service-shadow-${safeType}`;
  const Illustration = iconMap[type] || DefaultIcon;

  return (
    <svg className="svg-illustration service-illustration" viewBox="0 0 900 560" role="img" aria-label={`${title} service illustration`}>
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={first} />
          <stop offset="55%" stopColor={second} />
          <stop offset="100%" stopColor={third} />
        </linearGradient>
        <linearGradient id={bgGradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={first} stopOpacity="0.18" />
          <stop offset="48%" stopColor="#ffffff" stopOpacity="0.72" />
          <stop offset="100%" stopColor={second} stopOpacity="0.16" />
        </linearGradient>
        <filter id={shadowId} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="22" stdDeviation="20" floodColor="#0f172a" floodOpacity="0.16" />
        </filter>
      </defs>

      <rect width="900" height="560" rx="44" fill={`url(#${bgGradientId})`} />
      <circle cx="760" cy="122" r="145" fill={second} opacity="0.18" />
      <circle cx="160" cy="450" r="170" fill={first} opacity="0.15" />
      <circle cx="722" cy="422" r="85" fill={third} opacity="0.16" />
      <g filter={`url(#${shadowId})`}>
        <Illustration gradientId={gradientId} />
      </g>
      <text x="92" y="515" fill="var(--text)" fontFamily="Inter, Arial, sans-serif" fontSize="34" fontWeight="900">
        {title}
      </text>
    </svg>
  );
}
