import React, { useState, useEffect } from 'react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  // List of carousel images
  const carouselImages = [
    'assets/slide-1.jpg',
    'assets/slide-2.jpg',
    'assets/slide-3.jpeg',
    'assets/slide-4.jpeg',
    'assets/slide-5.jpg',
    'assets/slide-6.jpg',
    'assets/slide-7.jpeg',
    'assets/slide-8.jpeg',
    'assets/slide-9.jpeg',
  ];

  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.target.id) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: entry.isIntersecting
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  // Carousel autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % carouselImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [carouselImages.length]);

  // Feature items data
  const leftFeatures = [
    { icon: "assets/STT.png", text: "Smart Teaching Technology" },
    { icon: "assets/EI.png", text: "Excellent Infrastructure" },
    { icon: "assets/WELL.png", text: "Well Equipped Labs & Library" },
    { icon: "assets/PFA.png", text: "Pollution Free Ambience" },
    { icon: "assets/ICI.png", text: "In-Campus Infirmary" }
  ];

  const rightFeatures = [
    { icon: "assets/digitised.png", text: "Digitized procedures" },
    { icon: "assets/sports.png", text: "Professional Sports Training" },
    { icon: "assets/EA.png", text: "Enrichment Activities" },
    { icon: "assets/SES.png", text: "Safety in Every Step" },
    { icon: "assets/TBC.png", text: "Theme based curriculum" }
  ];

  return (
    <div className="min-h-screen pt-40 bg-gray-50">
      {/* Hero Carousel Section */}
      <section className="relative max-w-[1400px] mx-auto mb-8">
        <div className="relative w-full">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={`${
                index === currentSlide ? 'block' : 'hidden'
              }`}
            >
              <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="absolute top-0 left-0 w-full h-full object-contain bg-gray-100"
                />
              </div>
            </div>
          ))}
          
          {/* Carousel Navigation */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full transition-colors duration-300 border-2 border-blue-600 ${
                  currentSlide === index ? 'bg-blue-600' : 'bg-white'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={() => setCurrentSlide((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1))}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1))}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>

      {/* About Our School Section */}
      <section 
        id="about"
        className={`py-16 transition-all duration-1000 ${
          isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 relative">
            About Our School
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-600"></div>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Modern Teaching Technology */}
            <div className="flex flex-col items-center">
              <div className="mb-6 w-full aspect-square relative overflow-hidden rounded-lg">
                <img 
                  src="assets/technology.jpg"
                  alt="Modern Teaching Technology"
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-800">Modern Teaching Technology</h3>
              <p className="text-gray-700 text-lg text-center">
                With the use of modern teaching techniques such as Smart Boards, Computers, Projectors, Digital and Graphical Devices we create an atmosphere of creative yet informative learning experience.
              </p>
            </div>

            {/* Excellent Infrastructure */}
            <div className="flex flex-col items-center">
              <div className="mb-6 w-full aspect-square relative overflow-hidden rounded-lg">
                <img 
                  src="assets/infrastructure.jpg"
                  alt="Excellent Infrastructure"
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-800">Excellent Infrastructure</h3>
              <p className="text-gray-700 text-lg text-center">
                The school consists facilities of international standards such as Swimming Pool, Skating Rink, Basket Ball Court, Cricket and Football Ground, Indoor Games Room to promote sports and physical education.
              </p>
            </div>

            {/* Experienced Teachers */}
            <div className="flex flex-col items-center">
              <div className="mb-6 w-full aspect-square relative overflow-hidden rounded-lg">
                <img 
                  src="assets/teachers.jpg"
                  alt="Experienced Teachers"
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-800">Experienced Teachers</h3>
              <p className="text-gray-700 text-lg text-center">
                Our teachers are highly experienced and motivated towards helping the students improve upon their interests be it academics, sports or art.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose CSIS Section */}
      <section 
        id="why-choose"
        className={`py-16 bg-white transition-all duration-1000 ${
          isVisible['why-choose'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 relative">
            Why Choose CSIS
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-600"></div>
          </h2>
          <div className="flex justify-between items-start max-w-6xl mx-auto">
            {/* Left Features */}
            <div className="space-y-8">
              {leftFeatures.map((feature, index) => (
                <div key={index} className="flex flex-row-reverse items-center justify-end gap-4">
                  <span className="text-lg font-medium text-right">{feature.text}</span>
                  <div className="group">
                    <div className="bg-yellow-400 rounded-full p-3 w-12 h-12 flex items-center justify-center transition-transform duration-300 hover:rotate-180">
                      <img src={feature.icon} alt={feature.text} className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Center Mascot */}
            <div className="mx-8">
              <img 
                src="assets/student.jpg"
                alt="CSIS Mascot"
                className="h-96 w-auto"
              />
            </div>

            {/* Right Features */}
            <div className="space-y-8">
              {rightFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="group">
                    <div className="bg-yellow-400 rounded-full p-3 w-12 h-12 flex items-center justify-center transition-transform duration-300 hover:rotate-180">
                      <img src={feature.icon} alt={feature.text} className="w-6 h-6" />
                    </div>
                  </div>
                  <span className="text-lg font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Holistic Development Section */}
      <section 
        id="holistic"
        className={`py-20 bg-gray-50 transition-all duration-1000 ${
          isVisible.holistic ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 relative">
            Holistic Development at CSIS
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-600"></div>
          </h2>
          <div className="space-y-12">
            {/* Theme Based Curriculum */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white p-8 rounded-xl shadow-lg">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-blue-800 mb-6">Theme Based Curriculum</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Balanced curriculum, NCERT, creativity, application, practical aspects, celebrations, ready for life, teaching aids, smart boards, computer labs, digitized library.
                </p>
              </div>
              <div>
                <img 
                  src="assets/theme-based-curriculum.jpg"
                  alt="Theme Based Curriculum"
                  className="w-full rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Sporting */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white p-8 rounded-xl shadow-lg">
              <div>
                <img 
                  src="assets/sports.jpg"
                  alt="Sports Activities"
                  className="w-full rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-blue-800 mb-6">Sporting − Level Pro</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Advanced sports amenities, mini Olympic swimming pool, skating, karate, power yoga, coaching by certified professional coaches. Annual sports event, inter school competition. Awards.
                </p>
              </div>
            </div>

            {/* Safety */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white p-8 rounded-xl shadow-lg">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-blue-800 mb-6">Safety in Every Step</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Female caretakers, care and concern at all times, infirmary, CCTV coverage entire campus, Safety in transport, GPS enabled with tracking. Digitized procedures, application updates.
                </p>
              </div>
              <div>
                <img 
                  src="assets/safety.jpg"
                  alt="Safety Measures"
                  className="w-full rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Enrichment Activities */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white p-8 rounded-xl shadow-lg">
              <div>
                <img 
                  src="assets/enrichment.jpg"
                  alt="Enrichment Activities"
                  className="w-full rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-blue-800 mb-6">Enrichment Activities</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Life skill development, student welfare council, community integration, welfare activities, scholarship, inter school programs, exhibitions, fests, blood donation and health checkup camps, plantation drive, traffic awareness program.
                </p>
              </div>
            </div>

            {/* Parent Teacher Association */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white p-8 rounded-xl shadow-lg">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-blue-800 mb-6">Parent Teacher Association</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Transparent admission process, system of feedback, approachable and availability, access to meet principal, response time, parent concerns.
                </p>
              </div>
              <div>
                <img 
                  src="assets/parents-association.jpg"
                  alt="PTA Meeting"
                  className="w-full rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Add these styles to your global CSS for animations
const globalStyles = `
  @keyframes rotate-360 {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .group:hover .group-hover\\:rotate-180 {
    animation: rotate-360 0.5s ease-in-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .carousel-slide {
    animation: fadeIn 0.5s ease-in-out;
  }
`;

export default Home;