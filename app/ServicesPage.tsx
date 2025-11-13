
import React from 'react';
import { SpaIcon, RestaurantIcon, MeetingIcon, PoolIcon, GymIcon } from '../components/Icons';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  imgUrl: string;
  reverse?: boolean;
}

const services: Service[] = [
  {
    icon: <SpaIcon className="h-8 w-8 text-[#C6A577]" />,
    title: "اسپا و سلامتی",
    description: "در مرکز اسپای ما، آرامش را به جسم و روح خود هدیه دهید. با انواع ماساژهای تخصصی، خدمات مراقبت از پوست و فضایی آرامش‌بخش، خستگی روز را از تن به در کنید و انرژی دوباره بگیرید.",
    imgUrl: "https://picsum.photos/seed/spa/800/600",
  },
  {
    icon: <RestaurantIcon className="h-8 w-8 text-[#C6A577]" />,
    title: "رستوران و کافی شاپ",
    description: "سرآشپزان بین‌المللی ما با استفاده از تازه‌ترین مواد اولیه، منویی متنوع از غذاهای ایرانی و فرنگی را برای شما آماده کرده‌اند. در فضایی دلنشین، از طعم‌های بی‌نظیر لذت ببرید.",
    imgUrl: "https://picsum.photos/seed/restaurant/800/600",
    reverse: true,
  },
  {
    icon: <PoolIcon className="h-8 w-8 text-[#C6A577]" />,
    title: "استخر و مجموعه آبی",
    description: "مجموعه آبی هتل رویایی شامل استخر سرپوشیده، سونا، جکوزی و حمام ترکی است. فضایی ایده‌آل برای تفریح و آرامش که در تمام فصول سال آماده خدمت‌رسانی به شماست.",
    imgUrl: "https://picsum.photos/seed/pool/800/600",
  },
  {
    icon: <MeetingIcon className="h-8 w-8 text-[#C6A577]" />,
    title: "سالن همایش و جلسات",
    description: "با سالن‌های مجهز به آخرین تکنولوژی‌های صوتی و تصویری، هتل رویایی بهترین میزبان برای رویدادها، همایش‌ها و جلسات کاری شماست. تیم حرفه‌ای ما در تمام مراحل همراه شما خواهد بود.",
    imgUrl: "https://picsum.photos/seed/meeting/800/600",
    reverse: true,
  },
];

const ServiceSection: React.FC<Service> = ({ icon, title, description, imgUrl, reverse }) => (
  <div className={`grid lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:grid-flow-col-dense' : ''}`}>
    <div className={`w-full h-96 rounded-2xl shadow-xl overflow-hidden ${reverse ? 'lg:col-start-2' : ''}`}>
      <img src={imgUrl} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="lg:p-6">
      <div className="flex items-center gap-4 mb-4">
        {icon}
        <h2 className="text-3xl font-bold text-[#0A2342]">{title}</h2>
      </div>
      <p className="text-gray-700 leading-loose">{description}</p>
    </div>
  </div>
);

const ServicesPage: React.FC = () => {
  return (
    <>
      <section className="bg-slate-100 py-24 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0A2342]">خدمات و امکانات ما</h1>
          <p className="mt-6 text-xl text-gray-600">
            ما در هتل رویایی، هر آنچه برای یک اقامت بی‌نقص نیاز دارید را فراهم کرده‌ایم.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-24">
          {services.map(service => <ServiceSection key={service.title} {...service} />)}
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
