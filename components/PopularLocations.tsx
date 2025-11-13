
import React from 'react';
import { ArrowLeftIcon } from './Icons';

interface Location {
  name: string;
  description: string;
  imgUrl: string;
}

export const locations: Location[] = [
  { name: "کاخ سعدآباد", description: "۷ کیلومتر (۲۰ دقیقه با خودرو)", imgUrl: "https://picsum.photos/seed/saadabad/400/300" },
  { name: "برج میلاد", description: "۸ کیلومتر (۲۰ دقیقه با خودرو)", imgUrl: "https://picsum.photos/seed/milad/400/300" },
  { name: "بوستان آب و آتش", description: "۳ کیلومتر (۱۰ دقیقه با خودرو)", imgUrl: "https://picsum.photos/seed/park/400/300" },
  { name: "دربند", description: "۳ کیلومتر (۲۰ دقیقه با خودرو)", imgUrl: "https://picsum.photos/seed/darband/400/300" },
];

interface LocationCardProps extends Location {
  onSelect: (name: string) => void;
}

const LocationCard: React.FC<LocationCardProps> = ({ name, description, imgUrl, onSelect }) => (
  <div onClick={() => onSelect(name)} className="relative rounded-2xl overflow-hidden group shadow-lg cursor-pointer">
    <img src={imgUrl} alt={name} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
    <div className="absolute bottom-0 right-0 p-6 text-white w-full">
      <div className="flex justify-between items-end">
        <div>
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-sm">{description}</p>
        </div>
        <div className="bg-white/30 rounded-full p-2 group-hover:bg-white/50 transition-colors">
          <ArrowLeftIcon className="h-5 w-5 text-white transform -rotate-180" />
        </div>
      </div>
    </div>
  </div>
);

interface PopularLocationsProps {
  onLocationSelect: (name: string) => void;
}

const PopularLocations: React.FC<PopularLocationsProps> = ({ onLocationSelect }) => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2342]">نزدیک ترین مکان های گردشگری</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {locations.map((loc) => (
            <LocationCard key={loc.name} {...loc} onSelect={onLocationSelect} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularLocations;
