import React from 'react';
import { Button } from '@/components/ui/button';
import AppImage from './AppImage';

const DownloadCta = () => {
  return (
    <section className="py-16 px-4 md:px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto rounded-3xl border border-indigo-200 bg-white shadow-xl overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/70 to-purple-50/30 pointer-events-none"></div>

        <div className="relative z-10 px-6 md:px-12 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold text-indigo-600 mb-2">
                  Ready To Elevate Your Wardrobe?
                </p>
                <div className="flex items-center gap-3 mb-1">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">Download</h2>
                  <span className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-xs animate-bounce">
                    ↓
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                  Mobile App
                </h3>
              </div>

              <p className="text-lg text-gray-600">
                Download <span className="font-semibold">LuxiQue</span> and explore luxury fashion at your fingertips. Get exclusive access to premium collections and personalized style recommendations.
              </p>

              import React from 'react';


    <div className="flex flex-col sm:flex-row items-center gap-3">
      {/* App Store Button */}
      <a
        href="#"
        className="w-full sm:w-auto flex items-center justify-center gap-2 bg-black text-white rounded-full px-4 py-2 transition-all duration-300 hover:bg-gray-800"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-4 h-4">
          <path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
        </svg>
        <div className="text-left">
          <p className="text-xs font-light leading-tight">Download on the</p>
          <p className="text-sm font-semibold leading-tight">App Store</p>
        </div>
      </a>
      
      {/* Google Play Button */}
      <a
        href="#"
        className="w-full sm:w-auto flex items-center justify-center gap-2 bg-black text-white rounded-full px-4 py-2 transition-all duration-300 hover:bg-gray-800"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4">
          <path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.6 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
        </svg>
        <div className="text-left">
          <p className="text-xs font-light leading-tight">Get it on</p>
          <p className="text-sm font-semibold leading-tight">Google Play</p>
        </div>
      </a>
    </div>
 
            </div>

            <div className="relative flex justify-center">
              <div className="rounded-3xl overflow-hidden border-8 border-gray-800 shadow-2xl">
                <AppImage />
             </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadCta;