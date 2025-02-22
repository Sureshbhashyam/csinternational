import React from 'react';

const Admissions = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-40">
      <div className="container mx-auto px-8">
        {/* Header with underline */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900">ADMISSIONS</h1>
          <div className="w-24 h-1 bg-blue-900 mx-auto mt-4"></div>
        </div>

        {/* Apply Now Button
        <div className="flex justify-end mb-8">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
            Apply Now
          </button>
        </div>
         */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-bold text-blue-900 mb-4">
                ADMISSIONS OPEN FOR ACADEMIC YEAR 2025-26 FOR:
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>PRE-KG, LKG AND UKG</li>
                <li>GRADE - 1 to GRADE - 9</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-blue-900 mb-4">
                ADMISSION PROCEDURE:
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Admission Form:</h3>
                  <p className="text-gray-700">Parents can collect the admission forms at the School Office or download the application form online.</p>
                </div>
                
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Details Required:</h3>
                  <p className="text-gray-700">All necessary details of the Student and Parents are required to be filled as mentioned in the application form.</p>
                </div>
                
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Documents Required:</h3>
                  <p className="text-gray-700">Birth Certificate, Aadhaar Card (optional), Transfer Certificate (if applicable), Local address proof, Caste Certificate(optional) and passport size photograph.</p>
                </div>
                
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Fee Structure:</h3>
                  <p className="text-gray-700">The fee is payable quarterly i.e., in 3 instalments. Kindly contact the school administration for fee details.</p>
                </div>
              </div>
            </section>
          </div>
          
          <div>
            <img
              src="assets/ad1.jpeg"
              alt="Students in classroom"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admissions;