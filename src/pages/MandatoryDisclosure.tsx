import React, { useState } from 'react';

// PDF Modal Component
const PDFModal = ({ isOpen, onClose, pdfUrl, title }) => {
  const [isLoading, setIsLoading] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-6xl h-[80vh] flex flex-col">
        {/* Modal Header */}
        <div className="flex justify-between items-center p-4 border-b bg-blue-900 text-white rounded-t-lg">
          <h3 className="text-xl font-semibold">{title}</h3>
          <button 
            onClick={onClose}
            className="text-white hover:text-gray-200 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* PDF Viewer */}
        <div className="flex-1 p-4 relative">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900"></div>
            </div>
          )}
          <iframe
            src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=1`}
            className="w-full h-full rounded-lg border border-gray-200"
            title="PDF Viewer"
            onLoad={() => setIsLoading(false)}
          />
        </div>
      </div>
    </div>
  );
};

// Main component
const MandatoryDisclosure = () => {
  const [selectedPDF, setSelectedPDF] = useState(null);

  // Document data
  const documentInfo = [
    {
      title: "COPIES OF AFFILIATION/UPGRADATION LETTER AND RECENT EXTENSION OF AFFILIATION, IF ANY",
      pdfPath: "assets/pdfs/AffiliationLetter.pdf"
    },
    {
      title: "COPIES OF SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL CERTIFICATE, AS APPLICABLE",
      pdfPath: "assets/pdfs/TrustRegistration.pdf"
    },
    {
      title: "COPY OF NO OBJECTION CERTIFICATE (NOC) ISSUED, IF APPLICABLE, BY THE STATE GOVT./UT",
      pdfPath: "assets/pdfs/No objectioncertificate.pdf"
    },
    {
      title: "COPIES OF RECOGNITION CERTIFICATE UNDER RTE ACT, 2009, AND IT'S RENEWAL IF APPLICABLE",
      pdfPath: "assets/pdfs/RecognitionCertificate.pdf"
    },
    {
      title: "COPY OF VALID BUILDING SAFETY CERTIFICATE AS PER THE NATIONAL BUILDING CODE*",
      pdfPath: "assets/pdfs/BuildingSafetyCertificate.pdf"
    },
    {
      title: "COPY OF VALID FIRE SAFETY CERTIFICATE ISSUED BY THE COMPETENT AUTHORITY*",
      pdfPath: "assets/pdfs/FireSafety.pdf"
    },
    {
      title: "COPY OF THE DEO CERTIFICATE SUBMITTED BY THE SCHOOL FOR AFFILIATION/UPGRADATION/EXTENSION OF AFFILIATION OR SELF CERTIFICATION BY SCHOOL",
      pdfPath: "assets/pdfs/SelfcertificationbySchool.pdf"
    },
    {
      title: "COPIES OF VALID WATER, HEALTH AND SANITATION CERTIFICATES",
      pdfPath: "assets/pdfs/WaterHealthandSanitationCertificate.pdf"
    }
  ];

  const academicInfo = [
    {
      title: "FEE STRUCTURE OF THE SCHOOL",
      pdfPath: "assets/pdfs/results/Feestructure.pdf"
    },
    {
      title: "ANNUAL ACADEMIC CALENDER",
      pdfPath: "assets/pdfs/results/AnnualAcademicCalendar.pdf"
    },
    {
      title: "LIST OF SCHOOL MANAGEMENT COMMITTEE (SMC)",
      pdfPath: "assets/pdfs/results/SchoolManagingCommittee.pdf"
    },
    {
      title: "LIST OF PARENTS TEACHERS ASSOCIATION (PTA) MEMBERS",
      pdfPath: "assets/pdfs/results/ParentsTeachersAssociationMembers.pdf"
    },
    {
      title: "LAST THREE-YEAR RESULT OF THE BOARD EXAMINATION AS PER APPLICABILITY",
      pdfPath: "assets/pdfs/results/LastThreeYearResult.pdf"
    }
  ];

  // Function to render document table
  const renderDocumentTable = (documents, title) => (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-blue-900 mb-6">{title}</h2>
      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-lg shadow-md">
          <thead>
            <tr className="bg-blue-900 text-white">
              <th className="px-6 py-3 text-left">SL.No.</th>
              <th className="px-6 py-3 text-left">INFORMATION</th>
              <th className="px-6 py-3 text-left">DETAILS</th>
            </tr>
          </thead>
          <tbody>
            {documents.map((doc, index) => (
              <tr key={index} className={index % 2 === 0 ? "border-b" : "border-b bg-gray-50"}>
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">{doc.title}</td>
                <td className="px-6 py-4">
                  <button 
                    onClick={() => setSelectedPDF(doc)}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors flex items-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-40">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-12">MANDATORY DISCLOSURE</h1>

        {/* General Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">GENERAL INFORMATION</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-md">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="px-6 py-3 text-left">SL.No.</th>
                  <th className="px-6 py-3 text-left">INFORMATION</th>
                  <th className="px-6 py-3 text-left">DETAILS</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-6 py-4">1</td>
                  <td className="px-6 py-4">NAME OF THE SCHOOL</td>
                  <td className="px-6 py-4">CS INTERNATIONAL SCHOOL</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-6 py-4">2</td>
                  <td className="px-6 py-4">AFFILIATION NO. (IF APPLICABLE)</td>
                  <td className="px-6 py-4">831148</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4">3</td>
                  <td className="px-6 py-4">SCHOOL CODE (IF APPLICABLE)</td>
                  <td className="px-6 py-4">46779</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-6 py-4">4</td>
                  <td className="px-6 py-4">COMPLETE ADDRESS WITH PIN CODE</td>
                  <td className="px-6 py-4">SY.NO 18, BILWARADAHALLI, GOTTIGERE POST, BANNERGHATTA ROAD, JIGANI HOBLI, ANEKAL TALUK BENGALORE RURAL, KARNATAKA-560083</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4">5</td>
                  <td className="px-6 py-4">PRINCIPAL NAME</td>
                  <td className="px-6 py-4">MR. Srikanth Pathak</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-6 py-4">6</td>
                  <td className="px-6 py-4">PRINCIPAL QUALIFICATION</td>
                  <td className="px-6 py-4">M.A (Mod.Hist); B.Ed</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4">7</td>
                  <td className="px-6 py-4">SCHOOL EMAIL ID</td>
                  <td className="px-6 py-4">csinternational.edu@gmail.com</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-6 py-4">8</td>
                  <td className="px-6 py-4">CONTACT DETAILS (LANDLINE/MOBILE)</td>
                  <td className="px-6 py-4">+91-9988090948</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Documents and Information */}
        {renderDocumentTable(documentInfo, "DOCUMENTS AND INFORMATION")}

        {/* Result and Academics */}
        {renderDocumentTable(academicInfo, "RESULT AND ACADEMICS")}

        {/* Staff (Teaching) */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">STAFF (TEACHING)</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-md">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="px-6 py-3 text-left">SL.No.</th>
                  <th className="px-6 py-3 text-left">INFORMATION</th>
                  <th className="px-6 py-3 text-left">DETAILS</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-6 py-4">1</td>
                  <td className="px-6 py-4">PRINCIPAL</td>
                  <td className="px-6 py-4">MR. Srikanth Pathak</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-6 py-4">2</td>
                  <td className="px-6 py-4">TOTAL NO. OF TEACHERS</td>
                  <td className="px-6 py-4">
                    30<br />
                    PGT: 0<br />
                    TGT: 11<br />
                    PRT: 10
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4">3</td>
                  <td className="px-6 py-4">TEACHERS SECTION RATIO</td>
                  <td className="px-6 py-4">1.5:1</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-6 py-4">4</td>
                  <td className="px-6 py-4">DETAILS OF SPECIAL EDUCATOR</td>
                  <td className="px-6 py-4">yes</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4">5</td>
                  <td className="px-6 py-4">DETAILS OF COUNSELLOR AND WELNESS TEACHER</td>
                  <td className="px-6 py-4">Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Result Class X */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Result Class: X</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-md">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="px-6 py-3 text-left">SL.No.</th>
                  <th className="px-6 py-3 text-left">YEAR</th>
                  <th className="px-6 py-3 text-left">NO. OF REGISTERED STUDENTS</th>
                  <th className="px-6 py-3 text-left">NO. OF STUDENTS</th>
                  <th className="px-6 py-3 text-left">PASS PERCENTAGE</th>
                  <th className="px-6 py-3 text-left">REMARKS</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-6 py-4">1</td>
                  <td className="px-6 py-4">2023-24</td>
                  <td className="px-6 py-4">24</td>
                  <td className="px-6 py-4">24</td>
                  <td className="px-6 py-4">100%</td>
                  <td className="px-6 py-4"> </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Result Class XII */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Result Class: XII</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-md">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="px-6 py-3 text-left">SL.No.</th>
                  <th className="px-6 py-3 text-left">YEAR</th>
                  <th className="px-6 py-3 text-left">NO. OF REGISTERED STUDENTS</th>
                  <th className="px-6 py-3 text-left">NO. OF STUDENTS</th>
                  <th className="px-6 py-3 text-left">PASS PERCENTAGE</th>
                  <th className="px-6 py-3 text-left">REMARKS</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-6 py-4"></td>
                  <td className="px-6 py-4"></td>
                  <td className="px-6 py-4">NA</td>
                  <td className="px-6 py-4"></td>
                  <td className="px-6 py-4"></td>
                  <td className="px-6 py-4"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* School Infrastructure */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">SCHOOL INFRASTRUCTURE</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-md">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="px-6 py-3 text-left">SL.No.</th>
                  <th className="px-6 py-3 text-left">INFORMATION</th>
                  <th className="px-6 py-3 text-left">DETAILS</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-6 py-4">1</td>
                  <td className="px-6 py-4">TOTAL CAMPUS AREA OF THE SCHOOL (IN SQUARE MTR)</td>
                  <td className="px-6 py-4">4046</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-6 py-4">2</td>
                  <td className="px-6 py-4">NO AND SIZE OF THE CLASS ROOM (IN SQ.MTR)</td>
                  <td className="px-6 py-4">25</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4">3</td>
                  <td className="px-6 py-4">NO AND SIZE OF LABORATIES INCLUDING COMPUTER LABS (IN SQ MTR)</td>
                  <td className="px-6 py-4">3 (57 Sq.Mtr)</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-6 py-4">4</td>
                  <td className="px-6 py-4">INTERNET FACILITY</td>
                  <td className="px-6 py-4">YES</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4">5</td>
                  <td className="px-6 py-4">NO. OF GIRLS TOILETS</td>
                  <td className="px-6 py-4">22</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-6 py-4">6</td>
                  <td className="px-6 py-4">NO. OF BOYS TOILETS</td>
                  <td className="px-6 py-4">32</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4">7</td>
                  <td className="px-6 py-4">LINK OF YOUTUBE VIDEO OF THE INSPECTION SCHOOL COVERING THE INFRASTRUCTURE OF THE SCHOOL</td>
                  <td className="px-6 py-4">
                    <button 
                      onClick={() => window.open('https://youtube.com/your-video-link', '_blank')}
                      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors flex items-center gap-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Watch Video
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* PDF Modal */}
        <PDFModal
          isOpen={selectedPDF !== null}
          onClose={() => setSelectedPDF(null)}
          pdfUrl={selectedPDF?.pdfPath}
          title={selectedPDF?.title}
        />
      </div>
    </div>
  );
};

export default MandatoryDisclosure;