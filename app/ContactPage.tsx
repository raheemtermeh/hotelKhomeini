
import React from 'react';
import { LocationPinIcon, PhoneIcon, EnvelopeIcon } from '../components/Icons';

const ContactPage: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0A2342]">تماس با ما</h1>
          <p className="mt-4 text-lg text-gray-600">خوشحال می شویم صدای شما را بشنویم.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 bg-white p-8 rounded-2xl shadow-xl">
          <div>
            <h2 className="text-2xl font-bold text-[#0A2342] mb-6">ارسال پیام</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">نام شما</label>
                <input type="text" id="name" className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C6A577] focus:border-transparent outline-none" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">ایمیل</label>
                <input type="email" id="email" className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C6A577] focus:border-transparent outline-none" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">پیام شما</label>
                <textarea id="message" rows={5} className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C6A577] focus:border-transparent outline-none"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full bg-[#C6A577] text-white font-semibold rounded-lg px-8 py-3 hover:bg-[#b99a6f] transition-colors duration-300">
                  ارسال
                </button>
              </div>
            </form>
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-[#0A2342] mb-6">راه های ارتباطی</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <LocationPinIcon className="h-6 w-6 text-[#C6A577] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">آدرس</h3>
                    <p className="text-gray-600">تهران، خیابان ولیعصر، برج رویایی، طبقه دهم</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <PhoneIcon className="h-6 w-6 text-[#C6A577] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">تلفن</h3>
                    <p className="text-gray-600" dir="ltr">۰۲۱ - ۱۲۳ ۴۵ ۶۷۸</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <EnvelopeIcon className="h-6 w-6 text-[#C6A577] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">ایمیل</h3>
                    <p className="text-gray-600">info@hotelroyaee.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#0A2342] mb-4">موقعیت مکانی</h2>
              <div className="rounded-xl overflow-hidden shadow-md">
                <img src="https://picsum.photos/seed/map/600/400?grayscale" alt="Map location" className="w-full h-64 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
