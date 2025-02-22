import React from 'react';


const LearnMore = () => {
  return (
    <div className="min-h-screen bg-white pt-40">
      <div className="container mx-auto px-8">
        {/* Header with line */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-gray-500 uppercase tracking-wide text 2xl">LEARN MORE</span>
            <div className="h-0.5 bg-gray-300 flex-grow"></div>
          </div>
          <h1 className="text-4xl font-bold text-blue-900">
            CS INTERNATIONAL SCHOOL
          </h1>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* About Section */}
            <div>
              <p className="text-gray-700 leading-relaxed">
                A venerated visionary and philanthropist successful in all his ventures throughout his career, 
                Mr.Chandrashekar is an absolute leader with clear vision and prescience. A simple living and 
                humble human being dedicated to serving the society in every possible way. His abundant knowledge 
                and guidance will lead us to create an ebullient learning experience.
              </p>
            </div>

            {/* The School Section */}
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">THE SCHOOL</h3>
              <p className="text-gray-700 leading-relaxed">
                CS International school is an institution formed under Chaitrashree Foundation 
                Educational & Charitable Trust (Regd) the first of its kind, dedicated to advancing 
                education through creative and interactive methods. We are devoted to creating an 
                atmosphere of learning with a focus on the all-round development of the child.
              </p>
            </div>

            {/* Mission Section */}
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">MISSION</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">○</span>
                  <span>Provide affordable quality education to all.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">○</span>
                  <span>Identify and enhance individual talent in every child.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">○</span>
                  <span>Create a path for the children to shape their future.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">○</span>
                  <span>Focus on the overall development of the child.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">○</span>
                  <span>Impart a sense of discipline and righteousness.</span>
                </li>
              </ul>
            </div>

            {/* Vision Section */}
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">VISION</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our school aspires to be a centre of unmatched excellence by creating an atmosphere of learning 
                with a focus on all round development of the child.
              </p>
              <div className="border-l-4 border-blue-600 pl-4 italic text-gray-600">
                "Education is not the learning of facts, but the training of the mind to think"
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <img 
              src="assets/learnmore.jpg" 
              alt="Happy students at CS International School" 
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;