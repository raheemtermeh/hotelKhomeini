
import React from 'react';

const History: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-[#0A2342] rounded-3xl overflow-hidden">
        <div className="grid lg:grid-cols-2 items-center">
          <div className="p-8 sm:p-12 lg:p-16 text-white text-center lg:text-right">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">نگاهی به پیشینه ما</h2>
            <p className="mb-4 leading-relaxed">
              لورم ایپسوم به سادگی متنی ساختگی در صنعت چاپ و صفحه آرایی است. لورم ایپسوم متن ساختگی این صنعت بوده است.
            </p>
            <p className="mb-8 leading-relaxed">
              لورم ایپسوم به بهترین متنی ساختگی در صنعت چاپ و صفحه آرایی است. لورم ایپسوم متن استاندارد این صنعت بوده است. لورم ایپسوم به سادگی متنی ساختگی در صنعت چاپ و صفحه آرایی است.
            </p>
            <button className="bg-[#C6A577] text-white font-semibold rounded-lg px-8 py-3 hover:bg-[#b99a6f] transition-colors duration-300">
              بیشتر بشناسید
            </button>
          </div>
          <div className="h-80 lg:h-full w-full">
            <img 
              src="https://picsum.photos/seed/history/800/600" 
              alt="Hotel exterior" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
