import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  isScrolled?: boolean;
  isFooter?: boolean;
}

const Logo: React.FC<LogoProps> = ({ isScrolled = false, isFooter = false }) => {
  // If it's in the footer (dark bg) or navbar hasn't scrolled (dark hero bg), text is white.
  // Otherwise, text is black.
  const isDarkBg = isFooter || !isScrolled;
  const textColor = isDarkBg ? 'text-white' : 'text-black';

  return (
    <Link to="/" className="flex items-center space-x-3 group">
      {/* Logo Mark */}
      <div className="relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12">
        <svg 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full transform group-hover:scale-105 transition-transform duration-500"
        >
          {/* Outer Diamond */}
          <rect x="50" y="4" width="65.05" height="65.05" transform="rotate(45 50 4)" fill="#000000" stroke="#D4AF37" strokeWidth="2"/>
          
          {/* Inner A shape */}
          <path d="M50 22 L28 72 H38 L42 60 H58 L62 72 H72 L50 22Z" fill="#D4AF37"/>
          <path d="M50 38 L45 52 H55 L50 38Z" fill="#000000"/>
        </svg>
      </div>

      {/* Logo Text */}
      <div className="flex flex-col justify-center">
        <span className={`font-serif text-xl md:text-2xl tracking-[0.15em] font-bold leading-none uppercase transition-colors duration-500 ${textColor}`}>
          Aarohi
        </span>
        <span className="text-[7px] md:text-[8px] uppercase tracking-[0.4em] mt-1.5 font-bold text-[#D4AF37]">
          Collection
        </span>
      </div>
    </Link>
  );
};

export default Logo;
