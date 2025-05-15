import React from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center py-6 px-6 md:px-12">
      <div className="flex items-center">
        <span className="text-2xl font-bold flex items-center">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3">
            <circle cx="12" cy="12" r="10" fill="#9b87f5" />
            <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          LuxiQue
        </span>
      </div>
      <Button variant="default" className="bg-black text-white rounded-full px-6 py-6 hover:bg-luxury-purple transition-colors">
        Download Your App
      </Button>
    </header>
  );
};

export default Header;
