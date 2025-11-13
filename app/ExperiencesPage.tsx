
import React from 'react';

interface Experience {
    title: string;
    description: string;
    duration: string;
    imgUrl: string;
}

const experiences: Experience[] = [
    {
        title: "تور شکم‌گردی در بازار بزرگ تهران",
        description: "با راهنمای محلی ما به قلب تپنده تهران سفر کنید و طعم اصیل غذاهای خیابانی و سنتی را در بازار تاریخی تهران بچشید.",
        duration: "مدت: ۴ ساعت",
        imgUrl: "https://picsum.photos/seed/exp1/500/600",
    },
    {
        title: "گشت و گذار در گالری‌های هنری",
        description: "بازدیدی اختصاصی از برترین گالری‌های هنری معاصر تهران و آشنایی با هنرمندان نوظهور و پیشکسوت ایرانی.",
        duration: "مدت: ۳ ساعت",
        imgUrl: "https://picsum.photos/seed/exp2/500/600",
    },
    {
        title: "کوهنوردی در توچال و صبحانه در کوهستان",
        description: "یک روز پرانرژی را با صعود به ارتفاعات توچال آغاز کنید و از صرف یک صبحانه دلچسب با منظره‌ای بی‌نظیر از شهر لذت ببرید.",
        duration: "مدت: ۵ ساعت",
        imgUrl: "https://picsum.photos/seed/exp3/500/600",
    },
]

const ExperienceCard: React.FC<Experience> = ({ title, description, duration, imgUrl }) => (
    <div className="relative rounded-2xl overflow-hidden group shadow-lg h-[450px]">
        <img src={imgUrl} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute bottom-0 right-0 p-8 text-white w-full transition-all duration-500 transform translate-y-1/3 group-hover:translate-y-0">
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-0 group-hover:h-auto mb-4">{description}</p>
            <div className="flex justify-between items-center">
                 <p className="text-sm font-semibold">{duration}</p>
                 <button className="bg-white/30 backdrop-blur-sm text-white font-semibold py-2 px-6 rounded-lg hover:bg-white/50 transition-colors">
                     رزرو تجربه
                 </button>
            </div>
        </div>
    </div>
);

const ExperiencesPage: React.FC = () => {
    return (
        <>
            <section className="bg-slate-100 py-24 px-4 sm:px-6 lg:px-8 text-center">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#0A2342]">تجربیات محلی منحصر به فرد</h1>
                    <p className="mt-6 text-xl text-gray-600">
                        فراتر از یک اقامت، سفری به قلب فرهنگ و زندگی محلی را با ما تجربه کنید.
                    </p>
                </div>
            </section>
            
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {experiences.map(exp => <ExperienceCard key={exp.title} {...exp} />)}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ExperiencesPage;
