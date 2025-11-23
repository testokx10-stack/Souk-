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
        className={`${sizeClasses[size as SizeType]} text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-600`}
        viewBox="0 0 100 100"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="powerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF6B35" />
            <stop offset="50%" stopColor="#FFD23F" />
            <stop offset="100%" stopColor="#1E40AF" />
          </linearGradient>
        </defs>
        {/* Powerful modern logo with S shape and + */}
        <path d="M20 30 Q50 10 80 30 Q50 50 20 30 Z" fill="url(#powerGradient)" />
        <path d="M30 50 Q50 30 70 50 Q50 70 30 50 Z" fill="url(#powerGradient)" opacity="0.8" />
        <rect x="45" y="45" width="10" height="10" fill="white" rx="2" />
        <rect x="47.5" y="40" width="5" height="20" fill="white" rx="2.5" />
        <rect x="40" y="47.5" width="20" height="5" fill="white" rx="2.5" />
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