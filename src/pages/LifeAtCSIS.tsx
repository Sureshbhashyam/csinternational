import React, { useState } from 'react';

const LifeAtCSIS = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: "assets/life/gallery-1.jpg" },
    { src: "assets/life/gallery-2.jpg" },
    { src: "assets/life/gallery-3.jpg" },
    { src: "assets/life/gallery-4.jpg" },
    { src: "assets/life/gallery-5.jpg" },
    { src: "assets/life/gallery-6.jpg" },
    { src: "assets/life/gallery-7.jpg" },
    { src: "assets/life/gallery-8.jpg" },
    { src: "assets/life/gallery-9.jpg" },
    { src: "assets/life/gallery-10.jpg" },
    { src: "assets/life/gallery-11.jpg" },
    { src: "assets/life/gallery-12.jpg" },
    { src: "assets/life/gallery-13.jpg" },
    { src: "assets/life/gallery-14.jpg" },
    { src: "assets/life/gallery-15.jpg" },
    { src: "assets/life/gallery-16.jpg" },
    { src: "assets/life/gallery-17.jpg" },
    { src: "assets/life/gallery-18.jpg" },
    { src: "assets/life/gallery-19.jpg" },
    { src: "assets/life/gallery-20.jpg" },
    { src: "assets/life/gallery-21.jpg" },
    { src: "assets/life/gallery-22.jpg" },
    { src: "assets/life/gallery-23.jpeg" },
    { src: "assets/life/gallery-24.jpg" },
    { src: "assets/life/gallery-25.jpg" },
    { src: "assets/life/gallery-26.jpg" },
    { src: "assets/life/gallery-27.jpg" },
    { src: "assets/life/gallery-28.jpg" },
    { src: "assets/life/gallery-29.jpg" },
    { src: "assets/life/gallery-30.jpg" },
  ];

  const openModal = (index) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const newIndex = currentIndex + direction;
    if (newIndex >= 0 && newIndex < images.length) {
      setCurrentIndex(newIndex);
      setSelectedImage(images[newIndex]);
    }
  };

  return (
    <div className="pt-40 min-h-screen bg-gray-50"> {/* Increased top padding */}
      <div className="container mx-auto px-8"> {/* Increased horizontal padding */}
        <div className="text-center mb-16"> {/* Increased bottom margin */}
          <h1 className="text-4xl font-bold text-blue-900">
            Life At CSIS
          </h1>
          <div className="w-24 h-1 bg-blue-900 mx-auto mt-4"></div> {/* Added decorative line */}
        </div>
        
        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"> {/* Increased gap */}
          {images.map((image, index) => (
            <div 
              key={index}
              className="relative cursor-pointer overflow-hidden rounded-lg shadow-lg" /* Added larger shadow */
              onClick={() => openModal(index)}
            >
              <img 
                src={image.src}
                alt="Campus life"
                className="w-full h-72 object-cover transition-transform duration-300 hover:scale-105" /* Increased height */
              />
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
            <div className="relative max-w-5xl w-full mx-4"> {/* Increased max width */}
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white text-xl p-2"
              >
                ✕
              </button>
              
              <img
                src={selectedImage.src}
                alt="Campus life"
                className="w-full h-auto max-h-[85vh] object-contain" /* Increased max height */
              />
              
              <div className="absolute inset-y-0 left-0 flex items-center">
                <button
                  onClick={() => navigateImage(-1)}
                  className="bg-white/10 hover:bg-white/20 text-white p-4 rounded-r"
                  disabled={currentIndex === 0}
                >
                  ←
                </button>
              </div>
              
              <div className="absolute inset-y-0 right-0 flex items-center">
                <button
                  onClick={() => navigateImage(1)}
                  className="bg-white/10 hover:bg-white/20 text-white p-4 rounded-l"
                  disabled={currentIndex === images.length - 1}
                >
                  →
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LifeAtCSIS;