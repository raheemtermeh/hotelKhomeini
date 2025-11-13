
import React from 'react';
import { StarIcon, LocationPinIcon } from './Icons';

interface RoomCardProps {
  id: number;
  imgUrl: string;
  name: string;
  location: string;
  price: number;
  rating: number;
  onSelect: (id: number) => void;
}

const RoomCard = ({ id, imgUrl, name, location, price, rating, onSelect }: RoomCardProps) => (
  <div onClick={() => onSelect(id)} className="bg-white rounded-2xl shadow-lg overflow-hidden group transition-transform transform hover:-translate-y-2 cursor-pointer">
    <img src={imgUrl} alt={name} className="w-full h-56 object-cover" />
    <div className="p-6">
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
        <LocationPinIcon className="h-4 w-4" />
        <span>{location}</span>
      </div>
      <h3 className="text-xl font-bold text-[#0A2342] mb-2">{name}</h3>
      <div className="flex justify-between items-center">
        <p className="text-lg font-semibold text-gray-800">${price} <span className="text-sm font-normal text-gray-500">/ شب</span></p>
        <div className="flex items-center gap-1">
          <StarIcon className="h-5 w-5 text-yellow-400" />
          <span className="font-semibold text-gray-700">{rating}</span>
        </div>
      </div>
    </div>
  </div>
);

interface PopularRoomsProps {
  onRoomSelect: (id: number) => void;
}

const PopularRooms: React.FC<PopularRoomsProps> = ({ onRoomSelect }) => {
  const rooms = [
    { id: 1, imgUrl: "https://picsum.photos/seed/house1/400/300", name: "The Resident Soho", location: "London NW8 7JT England", price: 200, rating: 4.8 },
    { id: 2, imgUrl: "https://picsum.photos/seed/house2/400/300", name: "Modern Villa Poolside", location: "Beverly Hills, CA", price: 350, rating: 4.9 },
    { id: 3, imgUrl: "https://picsum.photos/seed/house3/400/300", name: "Lakeside Retreat", location: "Lake Como, Italy", price: 280, rating: 4.7 },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
          <div className="text-center sm:text-right mb-4 sm:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2342]">محبوب ترین اتاق های ما</h2>
            <p className="mt-2 text-gray-600">لورم ایپسوم به سادگی متنی ساختگی در صنعت چاپ و حروفچینی است.</p>
          </div>
          <button className="bg-[#D4E0C4] text-[#334D2E] font-semibold rounded-lg px-6 py-3 hover:bg-[#c8d5b9] transition-colors duration-300 flex-shrink-0">
            مشاهده همه
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map(room => <RoomCard key={room.id} {...room} onSelect={onRoomSelect} />)}
        </div>
      </div>
    </section>
  );
};

export default PopularRooms;
