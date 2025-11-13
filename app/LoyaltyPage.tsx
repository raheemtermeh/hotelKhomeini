
import React from 'react';
import { SilverMedalIcon, GoldMedalIcon, PlatinumMedalIcon, CheckIcon } from '../components/Icons';

const tiers = [
    {
        name: "عضو نقره‌ای",
        icon: <SilverMedalIcon className="h-16 w-16 mx-auto"/>,
        description: "شروع سفر شما برای کسب جوایز انحصاری.",
        benefits: ["۱۰٪ تخفیف رزرو", "دسترسی زودهنگام به پیشنهادها", "خروج دیرهنگام (در صورت امکان)"],
        color: "bg-slate-100",
        borderColor: "border-slate-300",
    },
    {
        name: "عضو طلایی",
        icon: <GoldMedalIcon className="h-16 w-16 mx-auto"/>,
        description: "سطح جدیدی از راحتی و مزایا را تجربه کنید.",
        benefits: ["تمام مزایای نقره‌ای", "۱۵٪ تخفیف رزرو", "ارتقا رایگان اتاق (در صورت امکان)", "نوشیدنی خوشامدگویی"],
        color: "bg-amber-50",
        borderColor: "border-amber-400",
    },
    {
        name: "عضو پلاتینیوم",
        icon: <PlatinumMedalIcon className="h-16 w-16 mx-auto"/>,
        description: "بالاترین سطح از خدمات لوکس و شخصی‌سازی شده.",
        benefits: ["تمام مزایای طلایی", "۲۰٪ تخفیف رزرو", "دسترسی به سالن VIP", "خدمات پیشخدمت شخصی"],
        color: "bg-violet-50",
        borderColor: "border-violet-400",
    },
]

const LoyaltyPage: React.FC = () => {
    return (
        <>
            <section className="relative py-32 px-4 sm:px-6 lg:px-8 text-center bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/loyaltyhero/1600/900')" }}>
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-white">باشگاه مشتریان رویایی</h1>
                    <p className="mt-6 text-xl text-gray-200">
                        وفاداری شما شایسته پاداش است. به باشگاه ما بپیوندید و از مزایای انحصاری لذت ببرید.
                    </p>
                </div>
            </section>
            
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#0A2342]">سطوح عضویت</h2>
                        <p className="mt-4 text-lg text-gray-600">با هر اقامت، به مزایای بیشتری دست پیدا کنید.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {tiers.map(tier => (
                            <div key={tier.name} className={`p-8 rounded-2xl shadow-lg text-center border-t-4 ${tier.color} ${tier.borderColor} flex flex-col`}>
                                {tier.icon}
                                <h3 className="text-2xl font-bold text-[#0A2342] mt-6 mb-2">{tier.name}</h3>
                                <p className="text-gray-600 mb-8 flex-grow">{tier.description}</p>
                                <ul className="space-y-4 text-right mb-8">
                                    {tier.benefits.map(benefit => (
                                        <li key={benefit} className="flex items-center gap-3">
                                            <CheckIcon className="h-6 w-6 text-green-500 flex-shrink-0"/>
                                            <span>{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button className="mt-auto w-full bg-[#0A2342] text-white font-semibold py-3 rounded-lg hover:bg-gray-800 transition-colors">
                                    اطلاعات بیشتر
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

             <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-100">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-[#0A2342] mb-8 text-center">به باشگاه ما بپیوندید</h2>
                    <div className="bg-white p-8 rounded-2xl shadow-xl">
                        <form className="grid sm:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="loyalty-name" className="block text-sm font-medium text-gray-700 mb-1">نام</label>
                                <input type="text" id="loyalty-name" className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C6A577] outline-none" />
                            </div>
                             <div>
                                <label htmlFor="loyalty-family" className="block text-sm font-medium text-gray-700 mb-1">نام خانوادگی</label>
                                <input type="text" id="loyalty-family" className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C6A577] outline-none" />
                            </div>
                             <div className="sm:col-span-2">
                                <label htmlFor="loyalty-email" className="block text-sm font-medium text-gray-700 mb-1">ایمیل</label>
                                <input type="email" id="loyalty-email" className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C6A577] outline-none" />
                            </div>
                             <div className="sm:col-span-2 text-center">
                                <button type="submit" className="bg-[#C6A577] text-white font-semibold rounded-lg px-12 py-3 hover:bg-[#b99a6f] transition-colors duration-300">
                                    عضویت رایگان
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
             </section>
        </>
    );
};

export default LoyaltyPage;
