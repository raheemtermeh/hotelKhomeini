
import React, { useState } from 'react';
import { allRooms } from './RoomsPage';
import { StarIcon, LocationPinIcon, WifiIcon, BedIcon, UsersIcon, CheckIcon, CalendarIcon } from '../components/Icons';

interface RoomDetailsPageProps {
  roomId: number;
}

const RoomDetailsPage: React.FC<RoomDetailsPageProps> = ({ roomId }) => {
  const [bookingSuccess, setBookingSuccess] = useState(false);
  
  const room = allRooms.find(r => r.id === roomId);

  if (!room) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">اتاق مورد نظر یافت نشد.</h2>
      </div>
    );
  }

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSuccess(true);
    setTimeout(() => setBookingSuccess(false), 5000); // Hide message after 5 seconds
  };

  const roomAmenities = [
    { icon: <WifiIcon className="h-6 w-6 text-[#C6A577]" />, label: "وای فای رایگان" },
    { icon: <BedIcon className="h-6 w-6 text-[#C6A577]" />, label: `تخت ${room.type}` },
    { icon: <UsersIcon className="h-6 w-6 text-[#C6A577]" />, label: "ظرفیت ۲ نفر" },
    // Add more amenities based on room type if needed
  ];
  
  const galleryImages = [
    room.imgUrl,
    "https://picsum.photos/seed/galleryA/800/600",
    "https://picsum.photos/seed/galleryB/800/600",
    "https://picsum.photos/seed/galleryC/800/600",
  ];

  const [mainImage, setMainImage] = useState(galleryImages[0]);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-12">
            <div className="w-full">
                <img src={mainImage} alt={room.name} className="w-full h-[450px] object-cover rounded-2xl shadow-lg"/>
            </div>
            <div className="grid grid-cols-2 gap-4">
                {galleryImages.slice(1).map((img, index) => (
                    <img key={index} src={img} alt={`${room.name} - ${index+1}`} 
                        className="w-full h-[217px] object-cover rounded-xl cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => setMainImage(img)}
                    />
                ))}
                <div className="w-full h-[217px] bg-gray-200 rounded-xl flex items-center justify-center cursor-pointer hover:bg-gray-300">
                    <span className="font-bold text-gray-600">مشاهده همه عکس ها</span>
                </div>
            </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Room Info */}
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold text-[#0A2342] mb-2">{room.name}</h1>
            <div className="flex items-center gap-4 text-gray-600 mb-6">
              <div className="flex items-center gap-1">
                <LocationPinIcon className="h-5 w-5" />
                <span>{room.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <StarIcon className="h-5 w-5 text-yellow-400" />
                <span className="font-semibold">{room.rating}</span>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed mb-8">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            </p>
            <h2 className="text-2xl font-bold text-[#0A2342] mb-4">امکانات اتاق</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {roomAmenities.map((amenity, index) => (
                <div key={index} className="flex items-center gap-3 bg-slate-100 p-3 rounded-lg">
                  {amenity.icon}
                  <span className="font-semibold">{amenity.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Booking Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl h-fit">
            <p className="text-2xl font-bold text-gray-800 mb-4">${room.price} <span className="text-lg font-normal text-gray-500">/ شب</span></p>
            {bookingSuccess ? (
                 <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg relative text-center" role="alert">
                    <strong className="font-bold">رزرو با موفقیت انجام شد!</strong>
                    <span className="block sm:inline"> جزییات به ایمیل شما ارسال شد.</span>
                </div>
            ) : (
                <form onSubmit={handleBooking} className="space-y-4">
                <div>
                    <label className="font-semibold text-gray-700 block mb-2">تاریخ ورود و خروج</label>
                    <div className="flex items-center border border-gray-300 rounded-lg p-3">
                    <CalendarIcon className="h-5 w-5 text-gray-500 ml-2" />
                    <input type="text" defaultValue="۱۵ مهر - ۱۸ مهر" className="w-full outline-none" />
                    </div>
                </div>
                <div>
                    <label className="font-semibold text-gray-700 block mb-2">تعداد نفرات</label>
                    <div className="flex items-center border border-gray-300 rounded-lg p-3">
                    <UsersIcon className="h-5 w-5 text-gray-500 ml-2" />
                    <select className="w-full outline-none bg-transparent">
                        <option>۲ نفر</option>
                        <option>۱ نفر</option>
                        <option>۳ نفر</option>
                    </select>
                    </div>
                </div>
                <button type="submit" className="w-full bg-[#C6A577] text-white font-bold py-4 rounded-lg hover:bg-[#b99a6f] transition-colors duration-300">
                    رزرو کنید
                </button>
                </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomDetailsPage;
