
import React from 'react';
import { LogoIcon } from '../components/Icons';

const teamMembers = [
  { name: "آقای رضایی", role: "مدیر کل", avatar: "https://picsum.photos/seed/manager/200/200" },
  { name: "خانم کریمی", role: "مدیر پذیرش", avatar: "https://picsum.photos/seed/reception/200/200" },
  { name: "آقای احمدی", role: "سرآشپز", avatar: "https://picsum.photos/seed/chef/200/200" },
];

const AboutUsPage: React.FC = () => {
  return (
    <>
      <section className="relative bg-[#0A2342] text-white py-24 sm:py-32 px-4 sm:px-6 lg:px-8 text-center">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('https://picsum.photos/seed/aboutbg/1600/900')" }}></div>
        <div className="relative max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold">درباره هتل رویایی</h1>
          <p className="mt-6 text-xl text-gray-300">
            تجربه ای فراتر از اقامت، خاطره ای ماندگار برای شما
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2342] mb-6">داستان ما</h2>
            <p className="text-gray-700 leading-loose mb-4">
              هتل رویایی در سال ۱۳۹۰ با یک هدف ساده تاسیس شد: ارائه تجربه‌ای بی‌نظیر و لوکس برای میهمانانی که به دنبال آرامش و آسایش در قلب شهر هستند. ما با الهام از معماری اصیل ایرانی و ترکیب آن با امکانات مدرن، فضایی را خلق کرده‌ایم که نه تنها یک مکان برای اقامت، بلکه مقصدی برای خاطره‌سازی است.
            </p>
            <p className="text-gray-700 leading-loose">
              از همان روز اول، تعهد ما به کیفیت و خدمات استثنایی، راهنمای ما بوده است. ما معتقدیم که جزئیات کوچک، تفاوت‌های بزرگ را رقم می‌زنند و به همین دلیل، تمام تلاش خود را برای فراتر رفتن از انتظارات شما به کار می‌گیریم.
            </p>
          </div>
          <div>
            <img src="https://picsum.photos/seed/history2/800/600" alt="Hotel Interior" className="rounded-2xl shadow-xl w-full h-auto" />
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2342] mb-12">تیم حرفه ای ما</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.map(member => (
              <div key={member.name} className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <img src={member.avatar} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-[#C6A577]" />
                <h3 className="text-xl font-bold text-[#0A2342]">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsPage;
