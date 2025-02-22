import React from 'react';
import { Fade, Zoom, Slide } from 'react-awesome-reveal';

const Academics = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-40">
      <div className="container mx-auto px-6">
        <Fade triggerOnce>
        <div className="text-center mb-12">

          <h1 className="text-4xl font-bold text-center text-blue-900">ACADEMICS & BEYOND</h1>
          <div className="w-24 h-1 bg-blue-900 mx-auto mt-4"></div>
        </div>
        </Fade>

        {/* Campus Facilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <Fade direction="left" triggerOnce>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Campus Facilities</h2>
              <ul className="space-y-3 text-gray-700">
                <li>• Spacious campus, pollution free surroundings.</li>
                <li>• Spacious Class Rooms with audio visual systems from Pre-KG to upwards.</li>
                <li>• Science Laboratories.</li>
                <li>• Computer Laboratories (Junior and senior).</li>
                <li>• Library (Junior and senior).</li>
                <li>• Audiovisual room.</li>
                <li>• Amphitheatre.</li>
                <li>• Variety of Sport facilities.</li>
              </ul>
            </div>
          </Fade>
          <Fade direction="right" triggerOnce>
            <div>
              <img 
                src="assets/cf.jpeg"
                alt="Campus facilities"
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
          </Fade>
        </div>

        {/* Teaching Methodology */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <Fade direction="left" triggerOnce>
            <div>
              <img 
                src="assets/tm.jpeg"
                alt="Teaching methodology"
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
          </Fade>
          <Fade direction="right" triggerOnce>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Teaching Methodology</h2>
              <ul className="space-y-3 text-gray-700">
                <li>• Modern methods of teaching and learning using smart boards, projectors and computers.</li>
                <li>• Use of themes and projects to develop higher order thinking and stimulate creativity.</li>
                <li>• Large number of co-scholastic activities that provide wide and varied exposure.</li>
              </ul>
            </div>
          </Fade>
        </div>

        {/* Sports */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <Fade direction="left" triggerOnce>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Sports</h2>
              <p className="text-gray-700 mb-4">
                Sports and physical Education form an integral part of our school curriculum, the school is 
                committed to providing students with a variety of sporting facilities:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li>• Skating Rink</li>
                <li>• Basket Ball Court</li>
                <li>• Swimming pool</li>
                <li>• Indoor Games</li>
                <li>• Vast Play Ground</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Coaching and training will be provided within the school by in house coaches.
              </p>
            </div>
          </Fade>
          <Fade direction="right" triggerOnce>
            <div>
              <img 
                src="assets/ss.jpeg"
                alt="Sports facilities"
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
          </Fade>
        </div>

        {/* Co-Scholastic */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Fade direction="left" triggerOnce>
            <div>
              <img 
                src="assets/cose.jpeg"
                alt="Co-scholastic activities"
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
          </Fade>
          <Fade direction="right" triggerOnce>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Co-Scholastic</h2>
              <ul className="space-y-3 text-gray-700">
                <li>• The co-scholastic segment includes Indian Music, Dance, Art and Yoga and Shlokas.</li>
                <li>• Cultural academy classes will be held every week.</li>
                <li>• Co-scholastic activities are showcased at the Annual day functions, Interschool Competitions and Annual Sports Day.</li>
                <li>• The school houses a spacious amphitheater with digital lighting and sound system.</li>
              </ul>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Academics;