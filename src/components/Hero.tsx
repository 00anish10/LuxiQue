import React from 'react';
import AppImage from './AppImage';

const Hero = () => {
  return (
    <section className="relative py-12 md:py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center staggered-animation">
      <p className="max-w-sm mx-auto outline-2 outline-offset-2  text-sm md:text-base text-purple-700 font-semibold mb-4 px-6 py-3 bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-3xl text-center shadow-sm hover:shadow-md transition-shadow duration-300">
      Transform Your Experience
    </p>
        <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
          Indulge in the World of<br />Luxurious Fashion!
        </h1>
        <p className="max-w-2xl mx-auto text-sm md:text-base text-gray-600 mb-10">
          Download LuxiQue for exclusive collections and a <br />
          a seamless luxury shopping experience.
        </p>

        <div className="flex justify-center gap-3 mb-8">
      {/* App Store Button */}
      <a
        href="#"
        className="flex items-center gap-2 bg-black text-white rounded-full px-3 py-2 shadow-md hover:bg-gray-800 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 384 512"
          className="w-5 h-5"
        >
          <path d="M318.7 268.7c-1.5-37.5 16.3-65.9 51.4-86.8-19.3-27.9-48.6-43.9-88.5-47-37.1-2.8-77 21.9-91.4 21.9-14.9 0-49-21.2-75.5-21.2-56.4 0-117.2 48.9-117.2 143.1 0 29.3 5.3 59.9 16.1 91.9 14.3 42.1 66.6 121.3 120.6 119.1 24.4-.9 41.9-17 73.4-17 31.1 0 46.7 17 73.6 17 54.1-.8 101.8-70.5 116.1-112.4-76.3-36.4-71.9-105.2-70.9-108.6zM251.4 56.6C271.4 33.6 280 4.3 277.1 0 257.2 2.3 229.3 16.3 212.1 36.7c-17.3 20.9-28.2 47.8-24.6 74.9 25.4 2 51.2-12.9 64-29z" />
        </svg>
        <div className="leading-none text-left">
          <p className="text-xs">Download on</p>
          <p className="text-sm font-semibold">App Store</p>
        </div>
      </a>

      {/* Google Play Button */}
      <a
        href="#"
        className="flex items-center gap-2 bg-black text-white rounded-full px-3 py-2 shadow-md hover:bg-gray-800 transition-colors"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 512 512" 
          className="w-5 h-5"
        >
          <path 
            fill="currentColor" 
            d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.6 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
          />
        </svg>
        <div className="leading-none text-left">
          <p className="text-xs">Get it on</p>
          <p className="text-sm font-semibold">Google Play</p>
        </div>
      </a>
    </div>

      </div>

      <div className="relative mx-auto w-full max-w-xs md:max-w-sm app-screenshot animate-bounce-subtle">
        <AppImage />
      </div>

      {/* Floating elements with improved animations */}
      <div className="hidden md:block absolute top-24 left-20 animate-float-smooth" style={{ animationDelay: '0.2s' }}>
        <div className="rounded-full w-12 h-12 bg-luxury-purple flex items-center justify-center text-white shadow-lg">
          <span>👩</span>
        </div>
      </div>
      <div className="hidden md:block absolute top-36 right-20 animate-float-smooth" style={{ animationDelay: '1.2s' }}>
        <div className="rounded-full w-12 h-12 bg-luxury-purple flex items-center justify-center text-white shadow-lg">
          <span>👨</span>
        </div>
      </div>
      <div className="hidden md:block absolute bottom-40 left-32 animate-float-smooth" style={{ animationDelay: '0.7s' }}>
        <div className="rounded-full w-12 h-12 bg-luxury-purple flex items-center justify-center text-white shadow-lg animate-pulse-glow">
          <span>🛍️</span>
        </div>
      </div>
      <div className="hidden md:block absolute bottom-60 right-32 animate-float-smooth" style={{ animationDelay: '1.5s' }}>
        <div className="rounded-full w-12 h-12 bg-luxury-purple flex items-center justify-center text-white shadow-lg">
          <span>👱</span>
        </div>
      </div>
      <div className="hidden md:block absolute top-60 left-1/2 animate-float-smooth" style={{ animationDelay: '0.9s' }}>
        <div className="rounded-full w-12 h-12 bg-luxury-purple flex items-center justify-center text-white shadow-lg animate-pulse-glow">
          <span>👗</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
