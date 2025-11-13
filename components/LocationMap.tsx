
import React from 'react';

const LocationMap: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div 
        className="max-w-7xl mx-auto h-[500px] rounded-3xl bg-cover bg-center flex items-center justify-center p-4"
        style={{ backgroundImage: "url('https://picsum.photos/1200/500?grayscale&blur=2')" }}
      >
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 sm:p-12 text-center max-w-2xl shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2342] mb-4">موقعیت هتل ما</h2>
          <p className="text-gray-600 mb-8">
            لورم ایپسوم به سادگی متنی ساختگی در صنعت چاپ و صفحه آرایی است. لورم ایپسوم متن ساختگی این صنعت بوده است.
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="ایمیل خود را وارد کنید" 
              className="flex-grow p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C6A577] focus:border-transparent outline-none text-right" 
            />
            <button 
              type="submit"
              className="bg-[#C6A577] text-white font-semibold rounded-lg px-8 py-4 hover:bg-[#b99a6f] transition-colors duration-300"
            >
              ثبت
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
