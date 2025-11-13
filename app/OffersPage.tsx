
import React from 'react';
import { CalendarIcon, CheckIcon } from '../components/Icons';

interface Offer {
    title: string;
    description: string;
    price: string;
    validity: string;
    imgUrl: string;
    features: string[];
    bgColor: string;
    textColor: string;
    buttonColor: string;
}

const offers: Offer[] = [
    {
        title: "بسته اقامت رمانتیک",
        description: "یک خاطره عاشقانه و فراموش‌نشدنی بسازید. این بسته شامل اقامت در سوئیت لوکس، شام دو نفره و خدمات ویژه اسپا می‌باشد.",
        price: "شبی ۱۰,۰۰۰,۰۰۰ تومان",
        validity: "اعتبار تا پایان شهریور",
        imgUrl: "https://picsum.photos/seed/offer1/600/400",
        features: ["سوئیت لوکس", "شام رایگان", "یک جلسه ماساژ", "دکوراسیون ویژه"],
        bgColor: "bg-rose-50",
        textColor: "text-rose-800",
        buttonColor: "bg-rose-500 hover:bg-rose-600",
    },
    {
        title: "پیشنهاد سفر کاری",
        description: "اقامتی راحت و بی‌دغدغه برای سفرهای کاری شما. دسترسی به اینترنت پرسرعت، فضای کار اختصاصی و صبحانه رایگان.",
        price: "شبی ۶,۵۰۰,۰۰۰ تومان",
        validity: "روزهای شنبه تا سه‌شنبه",
        imgUrl: "https://picsum.photos/seed/offer2/600/400",
        features: ["اتاق یک نفره", "اینترنت پرسرعت", "صبحانه رایگان", "دسترسی به سالن جلسات"],
        bgColor: "bg-sky-50",
        textColor: "text-sky-800",
        buttonColor: "bg-sky-500 hover:bg-sky-600",
    },
    {
        title: "بسته تعطیلات خانوادگی",
        description: "یک تعطیلات شاد و پر از خاطره را با خانواده خود تجربه کنید. این بسته شامل اتاق‌های متصل، تخفیف ویژه کودکان و دسترسی به امکانات تفریحی است.",
        price: "شبی ۱۲,۰۰۰,۰۰۰ تومان",
        validity: "تعطیلات رسمی و آخر هفته‌ها",
        imgUrl: "https://picsum.photos/seed/offer3/600/400",
        features: ["دو اتاق متصل", "۵۰٪ تخفیف برای کودکان", "بلیت رایگان شهربازی", "صبحانه و ناهار"],
        bgColor: "bg-amber-50",
        textColor: "text-amber-800",
        buttonColor: "bg-amber-500 hover:bg-amber-600",
    },
];

const OfferCard: React.FC<Offer> = ({ title, description, price, validity, imgUrl, features, bgColor, textColor, buttonColor }) => (
    <div className={`rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row ${bgColor}`}>
        <img src={imgUrl} alt={title} className="w-full md:w-1/3 h-64 md:h-auto object-cover" />
        <div className="p-8 flex flex-col justify-between">
            <div>
                <h3 className={`text-2xl font-bold ${textColor} mb-2`}>{title}</h3>
                <p className="text-gray-600 mb-6">{description}</p>
                <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-6">
                    {features.map(feature => (
                        <div key={feature} className="flex items-center gap-2">
                            <CheckIcon className={`h-5 w-5 ${textColor}`} />
                            <span className="text-gray-700">{feature}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-center mt-4">
                <div>
                    <p className="text-xl font-bold text-gray-800">{price}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                        <CalendarIcon className="h-4 w-4" />
                        <span>{validity}</span>
                    </div>
                </div>
                <button className={`mt-4 sm:mt-0 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 ${buttonColor}`}>
                    رزرو این بسته
                </button>
            </div>
        </div>
    </div>
);


const OffersPage: React.FC = () => {
    return (
        <>
            <section className="bg-slate-100 py-24 px-4 sm:px-6 lg:px-8 text-center">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#0A2342]">پیشنهادها و بسته‌های ویژه</h1>
                    <p className="mt-6 text-xl text-gray-600">
                        با بسته‌های اقامتی ما، تجربه‌ای فراتر از انتظار با بهترین قیمت داشته باشید.
                    </p>
                </div>
            </section>
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto space-y-12">
                    {offers.map(offer => <OfferCard key={offer.title} {...offer} />)}
                </div>
            </section>
        </>
    );
};

export default OffersPage;
