import React from 'react';

const Testimonials = () => {
  return (
    <div className="py-12 px-4 bg-gray-50 bg-[#f5f3ff]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row">
        <div className="md:w-1/3 mb-8 md:mb-0">
          <h2 className="text-4xl font-bold text-gray-900">
            Customer reviews<br />
            and feedback from<br />
            real users.
          </h2>
          <div className="flex mt-6">
            <button className="mr-2 w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
        
        <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Testimonial */}
          <div className="bg-white p-6 rounded-3xl shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 mr-4">
                <img 
                  src="/" 
                  alt="Robert Mason" 
                  className="rounded-full"
                />
              </div>
              <div>
                <h3 className="font-semibold">Robert Mason</h3>
                <div className="flex text-yellow-400">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
              </div>
            </div>
            <p className="text-gray-600">
              Amazing experience! Smooth ordering process, fast shipping, and the product quality was exceptional. I'll be returning for more and recommending this service to others!
            </p>
          </div>
          
          {/* Second Testimonial */}
          <div className="bg-white p-6 rounded-3xl shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 mr-4">
                <img 
                  src="/api/placeholder/48/48" 
                  alt="William Blake" 
                  className="rounded-full"
                />
              </div>
              <div>
                <h3 className="font-semibold">William Blake</h3>
                <div className="flex text-yellow-400">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
              </div>
            </div>
            <p className="text-gray-600">
              Highly impressed! The product arrived on time, in perfect condition, and exceeded expectations. Great customer support made the process even better. Five stars!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Star = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
  </svg>
);

export default Testimonials;