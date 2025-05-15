import React from 'react';
import { ArrowRight, ShoppingBag, ShoppingCart, CreditCard, ArrowDown } from 'lucide-react';

const Features = () => {
  return (
    <section className="py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <div className="md:flex items-start justify-between">
            <div>
              <p className="text-gray-600 mb-2">
                Luxique offers exclusive fashion, seamless <br />
                shopping, personalized recommendations, <br />
                and secure transactions all in one.
              </p>
              
            </div>
            <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-black text-white mt-4">
              <ArrowDown size={16} className="text-white" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold">
                Exclusive fashion,<br />seamless shopping
              </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-gray-200 rounded-3xl p-6 relative overflow-hidden group hover:shadow-lg transition-all duration-300">
            <div className="absolute top-6 right-6 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center">
              <ShoppingBag size={18} />
            </div>
            <h3 className="text-2xl font-bold mt-12 mb-6">
              Exclusive<br />Collections
            </h3>
            <div className="mb-6 h-72 overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?auto=format&fit=crop&q=80&w=300&h=300"
                alt="Exclusive Collections"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex items-center text-black font-medium cursor-pointer transition-colors hover:text-luxury-purple">
              View Collections <ArrowRight size={18} className="ml-2" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-luxury-light-purple rounded-3xl p-6 relative overflow-hidden group hover:shadow-lg transition-all duration-300">
            <div className="absolute top-6 right-6 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center">
              <ShoppingCart size={18} />
            </div>
            <h3 className="text-2xl font-bold mt-12 mb-6">
              Personalized<br />Shopping
            </h3>
            <div className="mb-6 h-72 overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=300&h=300"
                alt="Personalized Shopping"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex items-center text-black font-medium cursor-pointer transition-colors hover:text-luxury-purple">
              Learn More <ArrowRight size={18} className="ml-2" />
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-200 rounded-3xl p-6 relative overflow-hidden group hover:shadow-lg transition-all duration-300">
            <div className="absolute top-6 right-6 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center">
              <CreditCard size={18} />
            </div>
            <h3 className="text-2xl font-bold mt-12 mb-6">
              Seamless<br />Checkout
            </h3>
            <div className="mb-6 h-72 overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=300&h=300"
                alt="Seamless Checkout"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex items-center text-black font-medium cursor-pointer transition-colors hover:text-luxury-purple">
              See Demo <ArrowRight size={18} className="ml-2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;