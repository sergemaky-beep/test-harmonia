interface LogoProps {
  size?: number;
  className?: string;
  showText?: boolean;
  variant?: 'full' | 'icon' | 'light';
}

export default function Logo({ size = 50, className = '', showText = true, variant = 'full' }: LogoProps) {
  const goldColor = variant === 'light' ? '#FFFFFF' : '#C4A35A';
  const bgColor = variant === 'light' ? 'transparent' : '#1A2535';
  const textColor = variant === 'light' ? '#FFFFFF' : '#0E7377';
  const subTextColor = variant === 'light' ? '#FFFFFF' : '#C4A35A';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* SVG Circular Seal Logo */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Background circle */}
        <circle cx="100" cy="100" r="98" fill={bgColor} />

        {/* Outer ring */}
        <circle cx="100" cy="100" r="95" stroke={goldColor} strokeWidth="2" fill="none" />
        <circle cx="100" cy="100" r="88" stroke={goldColor} strokeWidth="1.5" fill="none" />

        {/* Inner circle */}
        <circle cx="100" cy="100" r="82" stroke={goldColor} strokeWidth="0.8" fill="none" />

        {/* HARMONIA text curved on top */}
        <defs>
          <path id="topArc" d="M 30,100 a 70,70 0 0,1 140,0" fill="none" />
          <path id="bottomArc" d="M 165,110 a 65,65 0 0,1 -130,0" fill="none" />
        </defs>

        <text fill={goldColor} fontSize="18" fontWeight="bold" fontFamily="Georgia, serif" letterSpacing="6">
          <textPath href="#topArc" startOffset="50%" textAnchor="middle">
            HARMONIA
          </textPath>
        </text>

        {/* NJ Monogram in center */}
        {/* Decorative C curve around NJ */}
        <path
          d="M 78,68 C 60,75 52,92 55,110 C 58,128 70,140 85,143"
          stroke={goldColor}
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />

        {/* N letter */}
        <text
          x="82"
          y="118"
          fill={goldColor}
          fontSize="48"
          fontWeight="bold"
          fontFamily="Georgia, serif"
        >
          N
        </text>

        {/* J letter */}
        <text
          x="112"
          y="118"
          fill={goldColor}
          fontSize="48"
          fontWeight="bold"
          fontFamily="Georgia, serif"
        >
          J
        </text>

        {/* Star accent */}
        <polygon
          points="130,72 132,78 138,78 133,82 135,88 130,84 125,88 127,82 122,78 128,78"
          fill={goldColor}
        />

        {/* SYNDIC & GESTION text curved on bottom */}
        <text fill={goldColor} fontSize="13" fontWeight="bold" fontFamily="Georgia, serif" letterSpacing="3">
          <textPath href="#bottomArc" startOffset="50%" textAnchor="middle">
            SYNDIC &amp; GESTION
          </textPath>
        </text>

        {/* Decorative line under SYNDIC & GESTION */}
        <line x1="65" y1="165" x2="135" y2="165" stroke={goldColor} strokeWidth="1" />
      </svg>

      {/* Text next to logo */}
      {showText && (
        <div className="flex flex-col leading-tight">
          <span className="font-bold tracking-wide" style={{ color: textColor, fontSize: size * 0.34 }}>
            HARMONIA
          </span>
          <span className="font-semibold tracking-widest" style={{ color: subTextColor, fontSize: size * 0.18 }}>
            SYNDIC & GESTION
          </span>
        </div>
      )}
    </div>
  );
}
