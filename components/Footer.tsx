
import React from 'react';
import { FacebookIcon, InstagramIcon, GoogleIcon, LogoIcon } from './Icons';

interface FooterProps {
  navigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ navigate }) => {
  return (
    <footer className="bg-[#0A2342] text-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-right">
          <div className="md:col-span-2 lg:col-span-1">
             <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <LogoIcon className="h-8 w-8 text-[#C6A577]" />
              <h3 className="text-2xl font-bold">هتل رویایی</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              لورم ایپسوم به سادگی متنی ساختگی در صنعت چاپ و صفحه آرایی است. لورم ایپسوم به سادگی متنی ساختگی این صنعت بوده است.
            </p>
            <div className="flex justify-center md:justify-start gap-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><FacebookIcon className="h-6 w-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><InstagramIcon className="h-6 w-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><GoogleIcon className="h-6 w-6" /></a>
            </div>
          </div>

          <div className="lg:mx-auto">
            <h4 className="font-bold text-lg mb-4">صفحات اصلی</h4>
            <ul className="space-y-3">
              <li><button onClick={() => navigate('خانه')} className="text-gray-400 hover:text-white transition-colors">خانه</button></li>
              <li><button onClick={() => navigate('اتاق ها')} className="text-gray-400 hover:text-white transition-colors">اتاق ها</button></li>
              <li><button onClick={() => navigate('گالری')} className="text-gray-400 hover:text-white transition-colors">گالری</button></li>
              <li><button onClick={() => navigate('پیشنهادها')} className="text-gray-400 hover:text-white transition-colors">پیشنهادها</button></li>
              <li><button onClick={() => navigate('رویدادها')} className="text-gray-400 hover:text-white transition-colors">رویدادها</button></li>
            </ul>
          </div>

          <div className="lg:mx-auto">
            <h4 className="font-bold text-lg mb-4">درباره ما</h4>
            <ul className="space-y-3">
              <li><button onClick={() => navigate('درباره ما')} className="text-gray-400 hover:text-white transition-colors">داستان ما</button></li>
              <li><button onClick={() => navigate('خدمات')} className="text-gray-400 hover:text-white transition-colors">خدمات</button></li>
              <li><button onClick={() => navigate('وبلاگ')} className="text-gray-400 hover:text-white transition-colors">وبلاگ</button></li>
              <li><button onClick={() => navigate('باشگاه مشتریان')} className="text-gray-400 hover:text-white transition-colors">باشگاه مشتریان</button></li>
               <li><button onClick={() => navigate('تجربیات محلی')} className="text-gray-400 hover:text-white transition-colors">تجربیات محلی</button></li>
               <li><button onClick={() => navigate('توسعه پایدار')} className="text-gray-400 hover:text-white transition-colors">توسعه پایدار</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">ارتباط با ما</h4>
            <p className="text-gray-400 mb-4">از آخرین اخبار و پیشنهادهای ما با خبر شوید.</p>
            <form className="flex items-center gap-2">
              <input 
                type="email" 
                placeholder="ایمیل شما" 
                className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-[#C6A577] focus:border-transparent outline-none text-right placeholder:text-gray-500 transition-shadow"
              />
              <button type="submit" className="p-3 bg-[#C6A577] rounded-lg hover:bg-[#b99a6f] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform -rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} کلیه حقوق محفوظ است. طراحی و توسعه توسط هوش مصنوعی.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
