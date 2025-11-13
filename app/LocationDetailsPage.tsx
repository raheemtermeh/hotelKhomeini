
import React from 'react';
import { locations } from '../components/PopularLocations';
import { LocationPinIcon, CalendarIcon } from '../components/Icons';

interface LocationDetailsPageProps {
  locationName: string;
}

const allLocationsDetails = {
  "کاخ سعدآباد": {
    imgUrl: "https://picsum.photos/seed/saadabad/1200/600",
    description: "مجموعه سعدآباد، کاخی با شکوه در شمال تهران است که در منطقه‌ای خوش آب و هوا قرار گرفته و از شمال با کوه‌های البرز، از شرق با گلابدره، از غرب با ولنجک و از جنوب با تجریش همسایگی دارد. این مجموعه که در دوره قاجار ساخته شده و محل سکونت شاهان این دوره بوده است، پس از کودتای ۱۲۹۹ و تصرف آن توسط خاندان پهلوی، بناهای متعددی در آن ساخته شد و به سکونتگاه تابستانی این خاندان اختصاص یافت. پس از انقلاب اسلامی نیز این مجموعه به شکل موزه درآمد.",
    address: "تهران، خیابان ولیعصر، خیابان شهید فلاحی (زعفرانیه)، انتهای خیابان شهید کمال طاهری",
    hours: "۹:۰۰ تا ۱۹:۰۰",
  },
  "برج میلاد": {
    imgUrl: "https://picsum.photos/seed/milad/1200/600",
    description: "برج میلاد، بلندترین برج ایران و ششمین برج مخابراتی بلند در جهان است. این برج با ارتفاع ۴۳۵ متر، به عنوان نمادی از شهر تهران شناخته می‌شود و امکانات تفریحی و تجاری متعددی را در خود جای داده است. از جمله این امکانات می‌توان به سکوی دید باز، رستوران گردان، موزه، سینما و مرکز همایش‌ها اشاره کرد.",
    address: "تهران، بزرگراه شیخ فضل‌الله نوری، ورودی بزرگراه شهید همت، کنارگذر اختصاصی برج میلاد",
    hours: "۱۰:۰۰ تا ۲۲:۰۰",
  },
  "بوستان آب و آتش": {
    imgUrl: "https://picsum.photos/seed/park/1200/600",
    description: "بوستان آب و آتش یا بوستان حضرت ابراهیم (ع)، یکی از پارک‌های مدرن و زیبای تهران است که در اراضی عباس‌آباد واقع شده است. این پارک با داشتن امکاناتی نظیر فواره‌های آب، برج‌های آتش، پل طبیعت، آمفی‌تئاتر، و مسیرهای دوچرخه‌سواری، به یکی از محبوب‌ترین مقاصد تفریحی شهروندان تهرانی تبدیل شده است.",
    address: "تهران، خیابان آفریقا، نرسیده به چهارراه جهان کودک، انتهای کوچه ژوبین",
    hours: "۲۴ ساعته",
  },
  "دربند": {
    imgUrl: "https://picsum.photos/seed/darband/1200/600",
    description: "دربند یکی از قدیمی‌ترین، زیباترین و خوش آب و هواترین محله‌های شمال تهران است. این منطقه که از دهکده‌ای ییلاقی در گذشته به محله‌ای توریستی تبدیل شده، اولین انتخاب پایتخت‌نشینان برای کوهنوردی و تفریح است. وجود رستوران‌ها و کافه‌های متعدد در کنار رودخانه دربند، فضایی دلنشین برای گذراندن اوقات فراغت فراهم کرده است.",
    address: "تهران، میدان تجریش، خیابان دربند",
    hours: "متغیر (بسته به رستوران‌ها)",
  }
}

const LocationDetailsPage: React.FC<LocationDetailsPageProps> = ({ locationName }) => {
  const location = locations.find(l => l.name === locationName);
  const details = allLocationsDetails[locationName as keyof typeof allLocationsDetails];

  if (!location || !details) {
    return <div className="text-center py-20"><h2 className="text-2xl font-bold">مکان مورد نظر یافت نشد.</h2></div>;
  }

  return (
    <section className="py-16 bg-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <img src={details.imgUrl} alt={location.name} className="w-full h-96 object-cover" />
          <div className="p-8 sm:p-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0A2342] mb-4">{location.name}</h1>
            <p className="text-gray-700 leading-loose mb-10">
              {details.description}
            </p>

            <div className="grid sm:grid-cols-2 gap-8 border-t border-gray-200 pt-8">
              <div>
                <h3 className="text-xl font-bold text-[#0A2342] mb-4">اطلاعات بازدید</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <LocationPinIcon className="h-6 w-6 text-[#C6A577] flex-shrink-0 mt-1" />
                    <p className="text-gray-600">{details.address}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CalendarIcon className="h-6 w-6 text-[#C6A577] flex-shrink-0 mt-1" />
                    <p className="text-gray-600">ساعات بازدید: {details.hours}</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0A2342] mb-4">نقشه</h3>
                <div className="rounded-xl overflow-hidden shadow-md border">
                    <img src="https://picsum.photos/seed/map/600/400?grayscale" alt="Map" className="w-full h-48 object-cover"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationDetailsPage;
