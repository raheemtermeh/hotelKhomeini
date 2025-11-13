
import React, { useState } from 'react';
import { StarIcon, LocationPinIcon } from '../components/Icons';

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
  <div onClick={() => onSelect(id)} className="bg-white rounded-2xl shadow-lg overflow-hidden group transition-transform transform hover:-translate-y-2 duration-300 cursor-pointer">
    <div className="overflow-hidden">
      <img src={imgUrl} alt={name} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" />
    </div>
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


export const allRooms = [
    { id: 1, type: 'سوئیت', imgUrl: "https://picsum.photos/seed/house1/400/300", name: "The Resident Soho", location: "London NW8 7JT England", price: 200, rating: 4.8 },
    { id: 2, type: 'دو نفره', imgUrl: "https://picsum.photos/seed/house2/400/300", name: "Modern Villa Poolside", location: "Beverly Hills, CA", price: 350, rating: 4.9 },
    { id: 3, type: 'یک نفره', imgUrl: "https://picsum.photos/seed/house3/400/300", name: "Lakeside Retreat", location: "Lake Como, Italy", price: 280, rating: 4.7 },
    { id: 4, type: 'دو نفره', imgUrl: "https://picsum.photos/seed/house4/400/300", name: "Urban Chic Apartment", location: "New York, NY", price: 220, rating: 4.6 },
    { id: 5, type: 'سوئیت', imgUrl: "https://picsum.photos/seed/house5/400/300", name: "Presidential Suite", location: "Paris, France", price: 800, rating: 5.0 },
    { id: 6, type: 'یک نفره', imgUrl: "https://picsum.photos/seed/house6/400/300", name: "Cozy Single Room", location: "Tokyo, Japan", price: 150, rating: 4.5 },
];

interface RoomsPageProps {
  onRoomSelect: (id: number) => void;
}

const RoomsPage: React.FC<RoomsPageProps> = ({ onRoomSelect }) => {
    const [filter, setFilter] = useState('همه');
    const filters = ['همه', 'یک نفره', 'دو نفره', 'سوئیت'];
    
    const filteredRooms = filter === 'همه' ? allRooms : allRooms.filter(room => room.type === filter);

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#0A2342]">اتاق ها و سوئیت ها</h1>
                    <p className="mt-4 text-lg text-gray-600">بهترین گزینه را برای اقامت خود انتخاب کنید.</p>
                </div>

                <div className="flex justify-center gap-2 sm:gap-4 mb-12">
                    {filters.map(f => (
                        <button 
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`px-4 sm:px-6 py-2 rounded-full font-semibold transition-colors duration-300 ${filter === f ? 'bg-[#0A2342] text-white' : 'bg-white text-gray-700 hover:bg-gray-200'}`}
                        >
                            {f}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredRooms.map(room => <RoomCard key={room.id} {...room} onSelect={onRoomSelect} />)}
                </div>
            </div>
        </section>
    );
};

export default RoomsPage;
