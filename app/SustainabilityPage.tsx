
import React from 'react';
import { LeafIcon, WaterDropIcon, RecycleIcon, UsersIcon } from '../components/Icons';

const initiatives = [
    {
        icon: <WaterDropIcon className="h-10 w-10 text-blue-500"/>,
        title: "صرفه‌جویی در مصرف آب",
        description: "ما با استفاده از تجهیزات کاهنده مصرف و سیستم‌های بازچرخانی آب، مصرف آب را تا ۳۰٪ کاهش داده‌ایم."
    },
    {
        icon: <RecycleIcon className="h-10 w-10 text-green-500"/>,
        title: "مدیریت پسماند",
        description: "برنامه جامع تفکیک از مبدا در تمام بخش‌های هتل اجرا می‌شود و هدف ما رسیدن به هتل بدون پسماند است."
    },
    {
        icon: <LeafIcon className="h-10 w-10 text-emerald-500"/>,
        title: "انرژی‌های پاک",
        description: "بخشی از انرژی مورد نیاز هتل از طریق پنل‌های خورشیدی تامین می‌شود و از لامپ‌های کم‌مصرف LED استفاده می‌کنیم."
    },
    {
        icon: <UsersIcon className="h-10 w-10 text-orange-500"/>,
        title: "حمایت از جامعه محلی",
        description: "ما مواد اولیه خود را از تولیدکنندگان محلی تامین می‌کنیم و در پروژه‌های توسعه اجتماعی منطقه مشارکت داریم."
    }
]

const SustainabilityPage: React.FC = () => {
    return (
        <>
            <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/sustainhero/1600/900')"}}>
                 <div className="absolute inset-0 bg-green-900/70"></div>
                 <div className="relative max-w-3xl mx-auto text-center text-white">
                    <LeafIcon className="h-16 w-16 mx-auto mb-4"/>
                    <h1 className="text-4xl md:text-5xl font-bold">تعهد ما به آینده‌ای سبز</h1>
                    <p className="mt-6 text-xl text-gray-200">
                       ما معتقدیم که مهمان‌نوازی لوکس می‌تواند و باید با مسئولیت‌پذیری در قبال محیط زیست و جامعه همراه باشد.
                    </p>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-[#0A2342] mb-6">ماموریت ما برای توسعه پایدار</h2>
                        <p className="text-gray-700 leading-loose mb-4">
                           در هتل رویایی، ما خود را متعهد به حفاظت از سیاره زیبایمان برای نسل‌های آینده می‌دانیم. این تعهد در تمام جنبه‌های فعالیت ما، از نحوه ساخت و نگهداری هتل گرفته تا خدماتی که به شما ارائه می‌دهیم، ریشه دوانده است. ما به طور مداوم در جستجوی راه‌های نوآورانه برای کاهش ردپای زیست‌محیطی خود و ایجاد تأثیر مثبت بر جامعه محلی هستیم.
                        </p>
                        <p className="text-gray-700 leading-loose">
                            سفر ما به سوی پایداری یک مسیر همیشگی است و از شما دعوت می‌کنیم تا در این مسیر سبز با ما همراه باشید.
                        </p>
                    </div>
                     <div className="w-full h-96">
                        <img src="https://picsum.photos/seed/sustain-img/800/600" alt="Nature" className="w-full h-full object-cover rounded-2xl shadow-xl"/>
                    </div>
                </div>
            </section>
            
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-100">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#0A2342]">اقدامات کلیدی ما</h2>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-8">
                        {initiatives.map(item => (
                            <div key={item.title} className="bg-white p-6 rounded-xl flex items-start gap-4 shadow-md hover:shadow-xl transition-shadow">
                                <div className="flex-shrink-0">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#0A2342] mb-2">{item.title}</h3>
                                    <p className="text-gray-600">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default SustainabilityPage;
