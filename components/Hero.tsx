
import React from 'react';
import { PlayIcon, LocationPinIcon, CalendarIcon, BedIcon, UserIcon, SearchIcon } from './Icons';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row rounded-3xl overflow-hidden shadow-2xl">
          <div className="w-full lg:w-1/2 h-80 lg:h-auto bg-cover bg-center rounded-t-3xl lg:rounded-t-none lg:rounded-r-3xl lg:rounded-br-[100px]" style={{ backgroundImage: "url('https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}>
          </div>
          <div className="w-full lg:w-1/2 bg-[#0A2342] text-white p-8 sm:p-12 lg:p-16 text-center lg:text-right flex flex-col justify-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              محل اقامت ایده آل خود را پیدا کنید
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              لورم ایپسوم به سادگی متنی ساختگی در صنعت چاپ و حروفچینی است.
            </p>
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-4">
               <button className="relative group">
                <span className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></span>
                <div className="relative bg-white p-3 rounded-full shadow-lg group-hover:bg-gray-100 transition-transform transform group-hover:scale-110">
                  <PlayIcon className="h-6 w-6 text-[#0A2342]" />
                </div>
              </button>
              <span className="font-semibold text-white">تماشای ویدیو</span>
            </div>
          </div>
        </div>
        
        <div className="relative mt-[-4rem] z-10 max-w-5xl mx-auto">
          <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-xl flex flex-col lg:flex-row items-center gap-4 lg:gap-0 divide-y lg:divide-y-0 lg:divide-x divide-gray-200 divide-x-reverse">
            <div className="w-full lg:w-auto flex-1 flex items-center gap-3 p-2 group">
              <LocationPinIcon className="h-6 w-6 text-[#C6A577] group-hover:animate-bounce" />
              <div>
                <p className="font-semibold text-gray-800">مکان</p>
                <p className="text-sm text-gray-500">تهران</p>
              </div>
            </div>
            <div className="w-full lg:w-auto flex-1 flex items-center gap-3 p-2">
              <CalendarIcon className="h-6 w-6 text-[#C6A577]" />
              <div>
                <p className="font-semibold text-gray-800">ورود و خروج</p>
                <p className="text-sm text-gray-500">۱۵ مهر تا ۱۸ مهر</p>
              </div>
            </div>
            <div className="w-full lg:w-auto flex-1 flex items-center gap-3 p-2">
              <BedIcon className="h-6 w-6 text-[#C6A577]" />
              <div>
                <p className="font-semibold text-gray-800">تعداد اتاق</p>
                <p className="text-sm text-gray-500">۵ اتاق</p>
              </div>
            </div>
            <div className="w-full lg:w-auto flex-1 flex items-center gap-3 p-2">
              <UserIcon className="h-6 w-6 text-[#C6A577]" />
              <div>
                <p className="font-semibold text-gray-800">تعداد نفرات</p>
                <p className="text-sm text-gray-500">2</p>
              </div>
            </div>
            <div className="w-full lg:w-auto p-2 lg:pr-4">
              <button className="bg-[#C6A577] p-4 rounded-xl w-full lg:w-auto hover:bg-[#b99a6f] transition-colors duration-300 transform hover:scale-105">
                <SearchIcon className="h-6 w-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
