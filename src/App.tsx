import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import LearnMore from './pages/LearnMore';
import Academics from './pages/Academics';
import LifeAtCSIS from './pages/LifeAtCSIS';
import Admissions from './pages/Admissions';
import ReachUs from './pages/ReachUs';
import MandatoryDisclosure from './pages/MandatoryDisclosure';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn-more" element={<LearnMore />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/life-atcsis" element={<LifeAtCSIS />} />
          <Route path="/reach-us" element={<ReachUs />} />
          <Route path="/mandatory-disclosure" element={<MandatoryDisclosure />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;