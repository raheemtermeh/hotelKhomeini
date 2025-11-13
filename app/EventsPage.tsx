
import React from 'react';
import { WeddingIcon, ConferenceIcon, UsersIcon } from '../components/Icons';

const venues = [
    { name: "سالن گرند رویال", capacity: "۵۰۰ نفر", usage: "کنفرانس، عروسی", imgUrl: "https://picsum.photos/seed/venue1/500/300" },
    { name: "اتاق جلسات VIP", capacity: "۲۰ نفر", usage: "جلسات کاری", imgUrl: "https://picsum.photos/seed/venue2/500/300" },
    { name: "باغ بام سبز", capacity: "۱۵۰ نفر", usage: "جشن‌های خصوصی", imgUrl: "https://picsum.photos/seed/venue3/500/300" },
]

const galleryImages = [
    "https://picsum.photos/seed/eventgallery1/500/400",
    "https://picsum.photos/seed/eventgallery2/500/400",
    "https://picsum.photos/seed/eventgallery3/500/400",
    "https://picsum.photos/seed/eventgallery4/500/400",
]

const EventsPage: React.FC = () => {
    return (
        <>
            <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-[#0A2342] text-white text-center overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('https://picsum.photos/seed/eventhero/1600/900')" }}></div>
                <div className="relative max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold">رویدادها و همایش‌ها</h1>
                    <p className="mt-6 text-xl text-gray-300">
                        بهترین میزبان برای خاطره‌انگیزترین لحظات و موفق‌ترین رویدادهای شما.
                    </p>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="text-center md:text-right">
                            <h2 className="text-3xl font-bold text-[#0A2342] mb-4">رویداد رویایی خود را خلق کنید</h2>
                            <p className="text-gray-700 leading-loose">
                                چه یک کنفرانس بزرگ شرکتی باشد، چه یک جلسه کاری مهم و یا جشن عروسی باشکوه شما، تیم متخصص ما در هتل رویایی آماده است تا هر جزئیاتی را با دقت برنامه‌ریزی کرده و رویدادی بی‌نقص را برای شما به ارمغان آورد.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-white p-8 rounded-2xl shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
                                <WeddingIcon className="h-12 w-12 mx-auto text-[#C6A577] mb-4"/>
                                <h3 className="text-xl font-bold text-[#0A2342]">جشن‌ها و عروسی</h3>
                            </div>
                             <div className="bg-white p-8 rounded-2xl shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
                                <ConferenceIcon className="h-12 w-12 mx-auto text-[#C6A577] mb-4"/>
                                <h3 className="text-xl font-bold text-[#0A2342]">همایش‌ها و جلسات</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-100">
                 <div className="max-w-7xl mx-auto">
                     <div className="text-center mb-12">
                         <h2 className="text-3xl font-bold text-[#0A2342]">سالن‌های ما</h2>
                     </div>
                     <div className="grid md:grid-cols-3 gap-8">
                         {venues.map(venue => (
                             <div key={venue.name} className="bg-white rounded-2xl shadow-lg overflow-hidden group">
                                <img src={venue.imgUrl} alt={venue.name} className="w-full h-56 object-cover"/>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-[#0A2342] mb-2">{venue.name}</h3>
                                    <p className="text-gray-500 mb-4">{venue.usage}</p>
                                    <div className="flex items-center gap-2 text-gray-700">
                                        <UsersIcon className="h-5 w-5"/>
                                        <span>ظرفیت تا {venue.capacity}</span>
                                    </div>
                                </div>
                             </div>
                         ))}
                     </div>
                 </div>
            </section>
            
             <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow-xl">
                    <h2 className="text-3xl font-bold text-[#0A2342] mb-8 text-center">درخواست برگزاری رویداد</h2>
                     <form className="grid sm:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">نام و نام خانوادگی</label>
                            <input type="text" id="name" className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C6A577] focus:border-transparent outline-none" />
                        </div>
                        <div>
                            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">نام شرکت (اختیاری)</label>
                            <input type="text" id="company" className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C6A577] focus:border-transparent outline-none" />
                        </div>
                         <div>
                            <label htmlFor="event-type" className="block text-sm font-medium text-gray-700 mb-1">نوع رویداد</label>
                            <select id="event-type" className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C6A577] focus:border-transparent outline-none bg-white">
                                <option>عروسی</option>
                                <option>کنفرانس</option>
                                <option>جلسه کاری</option>
                                <option>جشن خصوصی</option>
                                <option>سایر</option>
                            </select>
                        </div>
                         <div>
                            <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">تعداد تقریبی میهمانان</label>
                            <input type="number" id="guests" className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C6A577] focus:border-transparent outline-none" />
                        </div>
                         <div className="sm:col-span-2">
                            <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-1">توضیحات بیشتر</label>
                            <textarea id="details" rows={4} className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C6A577] focus:border-transparent outline-none"></textarea>
                        </div>
                         <div className="sm:col-span-2 text-center">
                            <button type="submit" className="bg-[#C6A577] text-white font-semibold rounded-lg px-12 py-3 hover:bg-[#b99a6f] transition-colors duration-300">
                                ثبت درخواست
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default EventsPage;
