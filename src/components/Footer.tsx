import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-10 px-6 md:px-12 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-6 md:mb-0">
            <span className="text-xl font-bold flex items-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                <circle cx="12" cy="12" r="10" fill="#9b87f5" />
                <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              LuxiQue
            </span>
          </div>
          <div className="flex space-x-8 text-sm">
            <a href="#" className="hover:text-luxury-purple transition-colors">Home</a>
            <a href="#" className="hover:text-luxury-purple transition-colors">Features</a>
            <a href="#" className="hover:text-luxury-purple transition-colors">How It Works</a>
            <a href="#" className="hover:text-luxury-purple transition-colors">Testimonials</a>
            <a href="#" className="hover:text-luxury-purple transition-colors">Download App</a>
          </div>
        </div>
        <div className="border-t border-gray-100 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500 mb-4 md:mb-0">© 2024 All Rights Reserved.</p>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-xs text-gray-500 hover:text-luxury-purple transition-colors">Terms and Privacy</a>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-luxury-purple transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.5 6.00005C21.7296 6.39328 20.8843 6.65823 20 6.78005C20.8983 6.22925 21.5752 5.36633 21.9 4.36005C21.0511 4.85857 20.1194 5.22319 19.14 5.44005C18.34 4.55005 17.26 4.00005 16 4.00005C13.65 4.00005 11.73 5.92005 11.73 8.29005C11.73 8.68005 11.77 9.05005 11.84 9.40005C8.27998 9.18005 5.10998 7.45005 3.00998 4.92005C2.54998 5.63005 2.29998 6.46005 2.29998 7.34005C2.29998 8.99005 3.14998 10.43 4.41998 11.26C3.70998 11.24 3.02998 11.04 2.43998 10.71L2.43998 10.77C2.43998 12.85 3.89998 14.55 5.81998 15.02C5.37998 15.13 4.90998 15.19 4.41998 15.19C4.06998 15.19 3.71998 15.16 3.39998 15.1C4.08998 16.78 5.65998 17.98 7.53998 18.01C6.08998 19.12 4.27998 19.78 2.29998 19.78C1.88998 19.78 1.46998 19.76 1.06998 19.71C2.94998 20.9 5.20998 21.58 7.63998 21.58C16 21.58 20.56 14.29 20.56 8.00005L20.54 7.36005C21.41 6.74005 22.16 5.96005 22.75 5.06005L22.5 6.00005Z" />
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-luxury-purple transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM8.5 9C8.5 8.17157 9.17157 7.5 10 7.5H14C14.8284 7.5 15.5 8.17157 15.5 9V15C15.5 15.8284 14.8284 16.5 14 16.5H10C9.17157 16.5 8.5 15.8284 8.5 15V9Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
