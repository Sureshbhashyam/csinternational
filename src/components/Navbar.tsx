import React from 'react';
import { Home, Facebook, Instagram, Linkedin, Youtube, Twitter } from 'lucide-react';

const Navbar = () => {
  // URLs for social media and login
  const socialLinks = {
    facebook: "https://www.facebook.com/share/15okJ435ZY/",
    instagram: "https://www.instagram.com/csinternationalschool/",
    linkedin: "https://www.linkedin.com/in/cs-international-school-3672b1225",
    youtube: "https://youtu.be/kSzt9X17FY8?si=mMRTe_RO_VYAxfmz",
    twitter: "https://twitter.com/csinternation10/status/1476538199233032192?s=12"
  };

  // const loginUrl = "https://ssolive.myclassboard.com/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3DMHVG7EQLW1YTJ3AEC4RO%26redirect_uri%3Dhttps%253A%252F%252Fcorp30.myclassboard.com%252Fsso%252FCallback%26response_type%3Dcode%26scope%3Dopenid%2520profile%2520offline_access";

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <div className="w-full bg-blue-900 py-2">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="text-white text-sm flex items-center space-x-6">
            <span>csinternationalschool.edu@gmail.com</span>
            <span>Toll Free 18001237191</span>
          </div>
          <div className="flex items-center space-x-4">
            <a 
              href={socialLinks.facebook} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-blue-200 transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a 
              href={socialLinks.instagram} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-blue-200 transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a 
              href={socialLinks.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-blue-200 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href={socialLinks.youtube} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-blue-200 transition-colors"
            >
              <Youtube size={20} />
            </a>
            <a 
              href={socialLinks.twitter} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-blue-200 transition-colors"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo and school name */}
          <a href="/" className="flex items-center">
            <img 
              src="assets/logo.png" 
              alt="CS International School" 
              className="h-16 w-auto"
            />
            <div className="ml-3">
              <h1 className="text-blue-900 text-2xl font-bold">CS INTERNATIONAL SCHOOL</h1>
              <p className="text-gray-600 text-sm">EVOLVE.EMPOWER.ENLIGHTEN</p>
            </div>
          </a>

          {/* Navigation links */}
          <ul className="flex items-center space-x-6">
            <li>
              <a href="/" className="text-gray-700 hover:text-blue-900 transition-colors">
                <Home size={20} />
              </a>
            </li>
            <li>
              <a href="/learn-more" className="text-gray-700 hover:text-blue-900 transition-colors">
                Learn More
              </a>
            </li>
            <li>
              <a href="/academics" className="text-gray-700 hover:text-blue-900 transition-colors">
                Academics
              </a>
            </li>
            <li>
              <a href="/admissions" className="text-gray-700 hover:text-blue-900 transition-colors">
                Admissions
              </a>
            </li>
            <li>
              <a href="/life-atcsis" className="text-gray-700 hover:text-blue-900 transition-colors">
                Life At CSIS
              </a>
            </li>
            <li>
              <a href="/reach-us" className="text-gray-700 hover:text-blue-900 transition-colors">
                Reach Us
              </a>
            </li>
            <li>
              <a href="/mandatory-disclosure" className="text-gray-700 hover:text-blue-900 transition-colors">
                Mandatory Disclosure
              </a>
            </li>
            {/* <li>
              <a 
                href={loginUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Login
              </a>
            </li> */}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;