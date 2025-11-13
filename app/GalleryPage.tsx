
import React from 'react';

const images = [
  "https://picsum.photos/seed/gallery1/500/800",
  "https://picsum.photos/seed/gallery2/500/300",
  "https://picsum.photos/seed/gallery3/500/500",
  "https://picsum.photos/seed/gallery4/500/400",
  "https://picsum.photos/seed/gallery5/500/700",
  "https://picsum.photos/seed/gallery6/500/600",
  "https://picsum.photos/seed/gallery7/500/300",
  "https://picsum.photos/seed/gallery8/500/800",
  "https://picsum.photos/seed/gallery9/500/400",
];

const GalleryPage: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0A2342]">گالری تصاویر</h1>
          <p className="mt-4 text-lg text-gray-600">نگاهی به زیبایی های هتل ما بیندازید.</p>
        </div>
        
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-xl shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-300">
              <img 
                src={src} 
                alt={`Gallery image ${index + 1}`}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;
