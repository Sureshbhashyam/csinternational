import React, { useState } from 'react';
import { MapPin, Phone, Facebook, Instagram, Linkedin, Youtube, Twitter, Download } from 'lucide-react';

const Newsletter = ({ number, pdfUrl, imgUrl }) => {
  return (
    <div className="flex items-center gap-4">
      <img src={imgUrl} alt={`Newsletter ${number}`} className="w-16 h-16 object-cover rounded" />
      <div>
        <p className="font-semibold text-gray-700">CS INTERNATIONAL NEWSLETTER - {number}</p>
        <a 
          href={pdfUrl}
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-2"
        >
          <Download size={16} />
          DOWNLOAD
        </a>
      </div>
    </div>
  );
};

const Footer = () => {
  // Social media links
  const socialLinks = {
    facebook: "https://www.facebook.com/share/15okJ435ZY/",
    instagram: "https://www.instagram.com/csinternationalschool/",
    linkedin: "https://www.linkedin.com/in/cs-international-school-3672b1225",
    youtube: "https://youtu.be/kSzt9X17FY8?si=mMRTe_RO_VYAxfmz",
    twitter: "https://twitter.com/csinternation10/status/1476538199233032192?s=12"
  };

  // Newsletter data
  const newsletters = [
    {
      number: 1,
      imgUrl: "assets/newsletter-1.png",
      pdfUrl: "assets/Newsletters.pdf"
    },
    {
      number: 2,
      imgUrl: "assets/newsletter-1.png",
      pdfUrl: "assets/Pamphlet.pdf"
    }
  ];

  return (
    <>
      {/* Main Footer Content */}
      <footer className="bg-[#f9f9f9] text-gray-800 py-12 relative overflow-hidden">
        {/* World Map Background */}
        <div 
          className="absolute inset-0 opacity-70 pointer-events-none"
          style={{
            backgroundImage: 'url(/assets/worldmap.png)',
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        <div className="container mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Reach Us Section */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-blue-900">REACH US</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Phone size={18} className="text-blue-900" />
                  <p className="text-gray-700">Toll Free : 1800 123 7191</p>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={18} className="text-blue-900" />
                  <p className="text-gray-700">+91 7676326137</p>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin size={18} className="text-blue-900 mt-1" />
                  <div>
                    <p className="font-medium text-gray-700">CS International School</p>
                    <p className="text-gray-700">18 Bilwaradahali, Near Area 83</p>
                    <p className="text-gray-700">Bannerghatta Road, Bangalore – 560 083</p>
                    <p className="text-gray-700">Karnataka, India.</p>
                  </div>
                </div>
                <div className="flex gap-6 mt-4">
                  <a 
                    href={socialLinks.facebook} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-900 hover:text-blue-700 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                  <a 
                    href={socialLinks.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-900 hover:text-blue-700 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                  <a 
                    href={socialLinks.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-900 hover:text-blue-700 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href={socialLinks.youtube} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-900 hover:text-blue-700 transition-colors"
                    aria-label="YouTube"
                  >
                    <Youtube size={20} />
                  </a>
                  <a 
                    href={socialLinks.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-900 hover:text-blue-700 transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links Section */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-blue-900">QUICK LINKS</h3>
              <ul className="space-y-3">
                <li><a href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a></li>
                <li><a href="/learn-more" className="text-gray-700 hover:text-blue-600 transition-colors">Learn More</a></li>
                <li><a href="/academics" className="text-gray-700 hover:text-blue-600 transition-colors">Academics</a></li>
                <li><a href="/admissions" className="text-gray-700 hover:text-blue-600 transition-colors">Admissions</a></li>
                <li><a href="/life-atcsis" className="text-gray-700 hover:text-blue-600 transition-colors">Life At CSIS</a></li>
                <li><a href="/reach-us" className="text-gray-700 hover:text-blue-600 transition-colors">Reach Us</a></li>
                <li><a href="/mandatory-disclosure" className="text-gray-700 hover:text-blue-600 transition-colors">Mandatory Disclosure</a></li>
              </ul>
            </div>

            {/* News and Media Section */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-blue-900">NEWS AND MEDIA</h3>
              <div className="space-y-6">
                {newsletters.map((newsletter) => (
                  <Newsletter 
                    key={newsletter.number}
                    number={newsletter.number}
                    pdfUrl={newsletter.pdfUrl}
                    imgUrl={newsletter.imgUrl}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* CBSE Affiliation */}
          <div className="text-center mt-12">
            <p className="text-lg font-bold text-gray-800">CBSE Affiliation Number: 831148</p>
          </div>
        </div>
      </footer>

      {/* Copyright Section */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-8 text-center text-gray-700">
          <p>© Copyright CS International School. All Rights Reserved</p>
        </div>
      </div>
    </>
  );
};

export default Footer;