"use client";
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import HomePage from './HomePage';
import RoomsPage from './RoomsPage';
import GalleryPage from './GalleryPage';
import ContactPage from './ContactPage';
import AboutUsPage from './AboutUsPage';
import ServicesPage from './ServicesPage';
import BlogPage from './BlogPage';
import RoomDetailsPage from './RoomDetailsPage';
import LocationDetailsPage from './LocationDetailsPage';
import OffersPage from './OffersPage';
import EventsPage from './EventsPage';
import LoyaltyPage from './LoyaltyPage';
import ExperiencesPage from './ExperiencesPage';
import SustainabilityPage from './SustainabilityPage';
import HomePage from './HomePage';
import "../app/globals.css"
interface View {
  page: string;
  id?: string | number;
}

const App: React.FC = () => {
  const [view, setView] = useState<View>({ page: 'خانه' });

  const navigate = (page: string, id?: string | number) => {
    setView({ page, id });
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (view.page) {
      case 'اتاق ها':
        return <RoomsPage onRoomSelect={(id) => navigate('جزییات اتاق', id)} />;
      case 'گالری':
        return <GalleryPage />;
      case 'تماس':
        return <ContactPage />;
      case 'درباره ما':
        return <AboutUsPage />;
      case 'خدمات':
        return <ServicesPage />;
      case 'وبلاگ':
        return <BlogPage />;
      case 'پیشنهادها':
        return <OffersPage />;
      case 'رویدادها':
        return <EventsPage />;
      case 'باشگاه مشتریان':
        return <LoyaltyPage />;
      case 'تجربیات محلی':
        return <ExperiencesPage />;
      case 'توسعه پایدار':
        return <SustainabilityPage />;
      case 'جزییات اتاق':
        return <RoomDetailsPage roomId={view.id as number} />;
      case 'جزییات مکان':
        return <LocationDetailsPage locationName={view.id as string} />;
      case 'خانه':
      default:
        return <HomePage 
          onRoomSelect={(id) => navigate('جزییات اتاق', id)} 
          onLocationSelect={(name) => navigate('جزییات مکان', name)} 
        />;
    }
  };

  return (
    <div className="bg-slate-50 font-ShabnamFD text-right text-gray-800">
      <Header activePage={view.page} navigate={navigate} />
      <main>
        {renderPage()}
      </main>
      <Footer navigate={navigate} />
    </div>
  );
};

export default App;
