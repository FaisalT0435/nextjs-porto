// src/components/BadgeGallery.tsx
"use client";

import { useState } from 'react';

const BadgeGallery = () => {
  const [zoomedBadge, setZoomedBadge] = useState<string | null>(null);

  // Example list of badge image URLs, replace with your actual URLs
  const badgeImages: string[] = [
    '/images/sert1.png', '/images/sert2.png', '/images/sert3.png', '/images/sert4.png', '/images/sert5.png', '/images/sert6.png', '/images/sert7.png', '/images/sert8.png', '/images/sert9.png'
  ];

  const handleBadgeClick = (badge: string) => {
    setZoomedBadge(badge);
  };

  const handleCloseZoom = () => {
    setZoomedBadge(null);
  };

  return (
    <div className="text-center mx-auto p-4">
      {/* Badge Grid with inverted triangle layout */}
      <div className="space-y-4 p-4 flex flex-col items-center">
        {/* Row 1: 4 Images */}
        <div className="flex gap-4 justify-center">
          {badgeImages.slice(0, 4).map((badge, index) => (
            <img
              key={index}
              src={badge}
              alt={`Badge ${index + 1}`}
              onClick={() => handleBadgeClick(badge)}
              className="w-40 h-40 object-cover cursor-pointer transition-transform duration-200 transform hover:scale-105"
            />
          ))}
        </div>

        {/* Row 2: 3 Images */}
        <div className="flex gap-4 justify-center">
          {badgeImages.slice(4, 7).map((badge, index) => (
            <img
              key={index}
              src={badge}
              alt={`Badge ${index + 5}`}
              onClick={() => handleBadgeClick(badge)}
              className="w-40 h-40 object-cover cursor-pointer transition-transform duration-200 transform hover:scale-105"
            />
          ))}
        </div>

        {/* Row 3: 2 Images */}
        <div className="flex gap-4 justify-center">
          {badgeImages.slice(7, 9).map((badge, index) => (
            <img
              key={index}
              src={badge}
              alt={`Badge ${index + 8}`}
              onClick={() => handleBadgeClick(badge)}
              className="w-40 h-40 object-cover cursor-pointer transition-transform duration-200 transform hover:scale-105"
            />
          ))}
        </div>
      </div>

      {/* Zoomed Badge Modal */}
      {zoomedBadge && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleCloseZoom}
        >
          <div className="relative max-w-md w-full p-4">
            <img
              src={zoomedBadge}
              alt="Zoomed Badge"
              className="w-full h-auto rounded-lg shadow-lg transform scale-110"
            />
            <button
              onClick={handleCloseZoom}
              className="absolute top-2 right-2 text-white text-2xl font-bold"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BadgeGallery;
