import AppImage from './AppImage';

const HowItWorks = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">
              Simple Steps to Your<br />Luxurious Shopping<br />Experience
            </h2>
            <div className="space-y-8 md:space-y-10">
              <div className="bg-[#f5f3ff] rounded-2xl p-6 hover:shadow-md transition-all">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 rounded-full bg-[#E5DEFF] text-[#7E69AB] w-10 h-10 flex items-center justify-center font-semibold text-sm">
                    01
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Browse Curated Collections</h3>
                    <p className="text-gray-600">Explore exclusive, high-end fashion tailored to your style and preferences.</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#f5f3ff] rounded-2xl p-6 hover:shadow-md transition-all">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 rounded-full bg-[#E5DEFF] text-[#7E69AB] w-10 h-10 flex items-center justify-center font-semibold text-sm">
                    02
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Select Your Favorites</h3>
                    <p className="text-gray-600">Add your favorite items to the cart and create the perfect shopping list effortlessly.</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#f5f3ff] rounded-2xl p-6 hover:shadow-md transition-all">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 rounded-full bg-[#E5DEFF] text-[#7E69AB] w-10 h-10 flex items-center justify-center font-semibold text-sm">
                    03
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Secure Checkout</h3>
                    <p className="text-gray-600">Complete your purchase quickly and securely with multiple payment options.</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#f5f3ff] rounded-2xl p-6 hover:shadow-md transition-all">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 rounded-full bg-[#E5DEFF] text-[#7E69AB] w-10 h-10 flex items-center justify-center font-semibold text-sm">
                    04
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Enjoy Fast Delivery</h3>
                    <p className="text-gray-600">Receive your luxury items at your doorstep, with worldwide shipping options.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 flex flex-col items-center">
          <div className="text-left mb-20 ">
              <p className="text-sm text-gray-600">
                Discover how easy it is to shop exclusive <br /> fashion with Luxique. Our user-friendly process <br /> ensures 
                a smooth, hassle-free experience from <br /> browsing to checkout.
              </p>
            </div>
            
            <div className="w-full max-w-[280px] mb-6">
              <AppImage />
            </div>
            <div className="text-center">
            <p className="text-gray-600 mb-4">Shop exclusive fashion with ease on Luxique's homepage.</p>
              <a href="#" className="inline-block bg-black text-white font-medium px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
                Download App
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;