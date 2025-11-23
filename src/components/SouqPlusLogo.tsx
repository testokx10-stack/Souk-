import React from 'react';

interface SouqPlusLogoProps {
  variant?: 'dark' | 'light';
  size?: SizeType;
  showText?: boolean;
}

type SizeType = 'small' | 'medium' | 'large';

const SouqPlusLogo: React.FC<SouqPlusLogoProps> = ({
  variant = 'dark',
  size = 'medium',
  showText = true,
}) => {
  const sizeClasses: Record<SizeType, string> = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-16 h-16',
  };

  const textSizeClasses: Record<SizeType, string> = {
    small: 'text-lg',
    medium: 'text-2xl',
    large: 'text-4xl',
  };

  const bgClass = variant === 'dark' ? 'bg-gray-900' : 'bg-white';
  const textClass = variant === 'dark' ? 'text-white' : 'text-gray-900';

  return (
    <div className={`flex items-center space-x-2 ${bgClass}`}>
      <svg
        className={`${sizeClasses[size as SizeType]} text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-500 to-blue-500`}
        viewBox="0 0 100 100"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Moroccan zellige inspired geometric shape with + in center */}
        <defs>
          <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF6B35" /> {/* Sahara orange */}
            <stop offset="50%" stopColor="#FFD23F" />
            <stop offset="100%" stopColor="#00B4D8" /> {/* Electric blue */}
          </linearGradient>
        </defs>
        {/* Outer geometric frame inspired by zellige */}
        <rect x="10" y="10" width="80" height="80" rx="8" fill="none" stroke="url(#neonGradient)" strokeWidth="2" />
        {/* Inner divisions */}
        <line x1="50" y1="20" x2="50" y2="80" stroke="url(#neonGradient)" strokeWidth="2" />
        <line x1="20" y1="50" x2="80" y2="50" stroke="url(#neonGradient)" strokeWidth="2" />
        {/* Central + shape */}
        <rect x="45" y="45" width="10" height="10" fill="url(#neonGradient)" />
        {/* Additional geometric elements */}
        <circle cx="30" cy="30" r="3" fill="url(#neonGradient)" />
        <circle cx="70" cy="30" r="3" fill="url(#neonGradient)" />
        <circle cx="30" cy="70" r="3" fill="url(#neonGradient)" />
        <circle cx="70" cy="70" r="3" fill="url(#neonGradient)" />
      </svg>
      {showText && (
        <span className={`font-bold ${textSizeClasses[size as SizeType]} ${textClass} font-mono tracking-wider`}>
          Souq+
        </span>
      )}
    </div>
  );
};

export default SouqPlusLogo;