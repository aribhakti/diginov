import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "h-10", light = false }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 140 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Diginov Logo"
    >
      <defs>
        <linearGradient id="tealGrad" x1="0" y1="100" x2="60" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4ADE80" /> {/* Greenish */}
          <stop offset="100%" stopColor="#00C2B2" /> {/* Teal */}
        </linearGradient>
        <linearGradient id="blueGrad" x1="60" y1="0" x2="140" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0090d4" /> {/* Light Blue */}
          <stop offset="100%" stopColor="#006296" /> {/* Darker Blue */}
        </linearGradient>
      </defs>

      {/* Pixels (Top Left) */}
      <rect x="15" y="15" width="12" height="12" rx="2" fill="#4ADE80" fillOpacity="0.6" />
      <rect x="30" y="8" width="12" height="12" rx="2" fill="#2DD4BF" fillOpacity="0.8" />
      <rect x="30" y="23" width="12" height="12" rx="2" fill="#00C2B2" />

      {/* Left Shape ('d') */}
      {/* Starting from bottom curve, going up */}
      <path 
        d="M25 65 C 25 45 40 40 55 40 V 85 C 55 95 45 95 40 95 C 30 95 25 85 25 65 Z" 
        stroke="url(#tealGrad)" 
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path 
        d="M55 40 V 70" 
        stroke="url(#tealGrad)" 
        strokeWidth="14"
        strokeLinecap="round"
      />

      {/* Right Shape ('n') */}
      <path 
        d="M 80 95 V 55 C 80 35 90 25 105 25 C 120 25 130 35 130 55 V 80" 
        stroke="url(#blueGrad)" 
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Lime Dot */}
      <circle cx="105" cy="55" r="10" fill="#a3e635" />

    </svg>
  );
};

export default Logo;