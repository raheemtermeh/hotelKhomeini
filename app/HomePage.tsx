
import React from 'react';
import Hero from '../components/Hero';
import PopularRooms from '../components/PopularRooms';
import Amenities from '../components/Amenities';
import History from '../components/History';
import Testimonials from '../components/Testimonials';
import PopularLocations from '../components/PopularLocations';
import LocationMap from '../components/LocationMap';

interface HomePageProps {
  onRoomSelect: (id: number) => void;
  onLocationSelect: (name: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onRoomSelect, onLocationSelect }) => {
  return (
    <>
    <div className='font-ShabnamFD'>
      <Hero />
      <PopularRooms onRoomSelect={onRoomSelect} />
      <Amenities />
      <History />
      <Testimonials />
      <PopularLocations onLocationSelect={onLocationSelect} />
      <LocationMap />
    </div></>
  );
};

export default HomePage;
