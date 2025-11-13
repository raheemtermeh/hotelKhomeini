
import React from 'react';
import { DeskIcon, ParkingIcon, CoffeeIcon, WifiIcon, PoolIcon, GymIcon, MoreIcon } from './Icons';

interface AmenityProps {
  icon: React.ReactNode;
  label: string;
}

const AmenityCard: React.FC<AmenityProps> = ({ icon, label }) => (
  <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center justify-center text-center gap-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
    <div className="text-[#C6A577]">{icon}</div>
    <span className="font-semibold text-gray-700">{label}</span>
  </div>
);

const Amenities: React.FC = () => {
  const amenitiesList = [
    { icon: <DeskIcon className="h-10 w-10" />, label: "فضای کار خصوصی" },
    { icon: <ParkingIcon className="h-10 w-10" />, label: "پارکینگ" },
    { icon: <CoffeeIcon className="h-10 w-10" />, label: "صبحانه" },
    { icon: <WifiIcon className="h-10 w-10" />, label: "وای فای رایگان" },
    { icon: <PoolIcon className="h-10 w-10" />, label: "استخر شنا" },
    { icon: <GymIcon className="h-10 w-10" />, label: "باشگاه" },
    { icon: <MoreIcon className="h-10 w-10" />, label: "خدمات دیگر" },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2342] mb-4">
            ما بهترین امکانات را برای شما فراهم میکنیم
          </h2>
          <p className="text-gray-600 mb-8">
            لورم ایپسوم به سادگی متنی ساختگی در صنعت چاپ و حروفچینی است.
          </p>
          <button className="bg-[#C6A577] text-white font-semibold rounded-lg px-8 py-3 hover:bg-[#b99a6f] transition-colors duration-300">
            تماس بگیرید
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 order-1 lg:order-2">
          {amenitiesList.map((amenity, index) => (
            <AmenityCard key={index} icon={amenity.icon} label={amenity.label} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
