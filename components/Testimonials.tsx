
import React, { useRef } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from './Icons';

interface Testimonial {
  text: string;
  author: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    text: "لورم ایپسوم به سادگی متنی ساختگی در صنعت چاپ و صفحه آرایی است. لورم ایپسوم متن ساختگی این صنعت بوده است.",
    author: "مهدی الهی",
    avatar: "https://picsum.photos/seed/avatar1/100/100",
  },
  {
    text: "یک تجربه فوق العاده! خدمات عالی و اتاق های تمیز. قطعاً دوباره برمی گردم و به دوستانم هم پیشنهاد می کنم.",
    author: "سارا رضایی",
    avatar: "https://picsum.photos/seed/avatar2/100/100",
  },
  {
    text: "لورم ایپسوم به سادگی متنی ساختگی در صنعت چاپ و صفحه آرایی است. لورم ایپسوم متن ساختگی این صنعت بوده است.",
    author: "علی محمدی",
    avatar: "https://picsum.photos/seed/avatar3/100/100",
  },
  {
    text: "موقعیت مکانی عالی و دسترسی آسان به همه جا. کارکنان بسیار مودب و حرفه ای بودند. ممنون از شما.",
    author: "فاطمه کریمی",
    avatar: "https://picsum.photos/seed/avatar4/100/100",
  },
];

const Testimonials: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-100">
      <div className="max-w-7xl mx-auto relative">
        <div ref={scrollContainerRef} className="flex overflow-x-auto gap-8 pb-4 no-scrollbar" style={{ scrollSnapType: 'x mandatory' }}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[#0A2342] text-white p-8 rounded-2xl flex-shrink-0 w-full sm:w-[45%] lg:w-[31%]" style={{ scrollSnapAlign: 'start' }}>
              <p className="mb-6 leading-relaxed">"{testimonial.text}"</p>
              <div className="flex items-center gap-4">
                <img src={testimonial.avatar} alt={testimonial.author} className="w-12 h-12 rounded-full border-2 border-[#C6A577]" />
                <div>
                  <h4 className="font-bold">{testimonial.author}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={() => scroll('left')}
          className="absolute top-1/2 -translate-y-1/2 -right-4 bg-white rounded-full p-3 shadow-md hover:bg-gray-100 transition-all disabled:opacity-50"
          aria-label="Previous testimonial"
        >
          <ArrowRightIcon className="h-6 w-6 text-gray-700" />
        </button>
        <button
          onClick={() => scroll('right')}
          className="absolute top-1/2 -translate-y-1/2 -left-4 bg-white rounded-full p-3 shadow-md hover:bg-gray-100 transition-all disabled:opacity-50"
          aria-label="Next testimonial"
        >
          <ArrowLeftIcon className="h-6 w-6 text-gray-700" />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
