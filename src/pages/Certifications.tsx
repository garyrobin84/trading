import React, { useState, useEffect } from 'react';
import { Award, CheckCircle, Clock, Users, BookOpen, Download, Star, Trophy, Target, FileText, ChevronLeft, ChevronRight } from 'lucide-react';
import Button from '../components/ui/Button';

const Certifications = () => {
  const [garyCurrentIndex, setGaryCurrentIndex] = useState(0);
  const [studentsCurrentIndex, setStudentsCurrentIndex] = useState(0);

  // Gary Robinson's Prop Firm Certifications (15 images)
  const garyCertifications = [
    {
      id: 1,
      firm: "FTMO",
      amount: "$200,000",
      date: "2023-12-15",
      type: "Challenge Passed",
      image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 2,
      firm: "MyForexFunds",
      amount: "$100,000",
      date: "2023-11-28",
      type: "Evaluation Passed",
      image: "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 3,
      firm: "The5%ers",
      amount: "$50,000",
      date: "2023-10-20",
      type: "Funded Account",
      image: "https://images.pexels.com/photos/6781341/pexels-photo-6781341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 4,
      firm: "TopstepTrader",
      amount: "$150,000",
      date: "2023-09-12",
      type: "Trading Combine",
      image: "https://images.pexels.com/photos/7821906/pexels-photo-7821906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 5,
      firm: "Apex Trader Funding",
      amount: "$75,000",
      date: "2023-08-05",
      type: "Evaluation",
      image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 6,
      firm: "Earn2Trade",
      amount: "$100,000",
      date: "2023-07-18",
      type: "Gauntlet Mini",
      image: "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 7,
      firm: "SurgeTrader",
      amount: "$50,000",
      date: "2023-06-30",
      type: "Audition",
      image: "https://images.pexels.com/photos/6781341/pexels-photo-6781341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 8,
      firm: "FundedNext",
      amount: "$200,000",
      date: "2023-05-22",
      type: "Challenge",
      image: "https://images.pexels.com/photos/7821906/pexels-photo-7821906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 9,
      firm: "Blue Guardian",
      amount: "$25,000",
      date: "2023-04-14",
      type: "Evaluation",
      image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 10,
      firm: "Lux Trading Firm",
      amount: "$100,000",
      date: "2023-03-08",
      type: "Challenge",
      image: "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 11,
      firm: "Smart Prop Trader",
      amount: "$50,000",
      date: "2023-02-25",
      type: "Evaluation",
      image: "https://images.pexels.com/photos/6781341/pexels-photo-6781341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 12,
      firm: "Funded Trading Plus",
      amount: "$80,000",
      date: "2023-01-17",
      type: "Challenge",
      image: "https://images.pexels.com/photos/7821906/pexels-photo-7821906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 13,
      firm: "City Traders Imperium",
      amount: "$25,000",
      date: "2022-12-10",
      type: "Assessment",
      image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 14,
      firm: "Traders Central",
      amount: "$100,000",
      date: "2022-11-03",
      type: "Evaluation",
      image: "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 15,
      firm: "Maven Trading",
      amount: "$50,000",
      date: "2022-10-15",
      type: "Challenge",
      image: "https://images.pexels.com/photos/6781341/pexels-photo-6781341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  // Student Certifications (50 images)
  const studentCertifications = Array.from({ length: 50 }, (_, index) => ({
    id: index + 1,
    studentName: `Student ${index + 1}`,
    firm: ["FTMO", "MyForexFunds", "The5%ers", "TopstepTrader", "Apex Trader Funding", "Earn2Trade", "SurgeTrader", "FundedNext"][index % 8],
    amount: ["$25,000", "$50,000", "$100,000", "$200,000"][index % 4],
    date: `2023-${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}`,
    type: ["Challenge Passed", "Evaluation Passed", "Funded Account", "Trading Combine"][index % 4],
    image: [
      "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/6781341/pexels-photo-6781341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/7821906/pexels-photo-7821906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ][index % 4]
  }));

  // Auto-slide functionality
  useEffect(() => {
    const garyInterval = setInterval(() => {
      setGaryCurrentIndex((prevIndex) =>
        prevIndex === garyCertifications.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    const studentsInterval = setInterval(() => {
      setStudentsCurrentIndex((prevIndex) => 
        prevIndex === studentCertifications.length - 1 ? 0 : prevIndex + 1
      );
    }, 3500);

    return () => {
      clearInterval(garyInterval);
      clearInterval(studentsInterval);
    };
  }, [garyCertifications.length, studentCertifications.length]);

  const nextGarySlide = () => {
    setGaryCurrentIndex((prevIndex) =>
      prevIndex === garyCertifications.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevGarySlide = () => {
    setGaryCurrentIndex((prevIndex) =>
      prevIndex === 0 ? garyCertifications.length - 1 : prevIndex - 1
    );
  };

  const nextStudentSlide = () => {
    setStudentsCurrentIndex((prevIndex) =>
      prevIndex === studentCertifications.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevStudentSlide = () => {
    setStudentsCurrentIndex((prevIndex) =>
      prevIndex === 0 ? studentCertifications.length - 1 : prevIndex - 1
    );
  };

  const currentGaryCert = garyCertifications[garyCurrentIndex];
  const currentStudentCert = studentCertifications[studentsCurrentIndex];

  const additionalCertifications = [
    {
      name: "Certified Financial Analyst (CFA)",
      issuer: "CFA Institute",
      year: "2015",
      description: "Global standard for investment analysis and portfolio management"
    },
    {
      name: "Chartered Market Technician (CMT)",
      issuer: "CMT Association",
      year: "2015",
      description: "Professional certification in technical analysis and market behavior"
    },
    {
      name: "Financial Risk Manager (FRM)",
      issuer: "GARP",
      year: "2014",
      description: "Global certification in financial risk management"
    },
    {
      name: "Series 7 & 63",
      issuer: "FINRA",
      year: "2012",
      description: "Securities industry licenses for investment advisory services"
    }
  ];

  const successMetrics = [
    {
      metric: "15",
      description: "Gary's Prop Firm Certifications",
      icon: <Trophy className="w-8 h-8 text-yellow-500" />
    },
    {
      metric: "50+",
      description: "Students Certified",
      icon: <Users className="w-8 h-8 text-yellow-500" />
    },
    {
      metric: "£1.2M+",
      description: "Total Funding Secured",
      icon: <Target className="w-8 h-8 text-yellow-500" />
    },
    {
      metric: "95%",
      description: "Success Rate",
      icon: <Star className="w-8 h-8 text-yellow-500" />
    }
  ];

  return (
    <div>
      {/* SEO Meta Tags */}
      <title>Prop Firm Certifications - Gary Robinson Trading</title>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Prop Firm Certifications
            </h1>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Proven success with the world's leading prop firms. Gary Robinson and his students consistently pass evaluations and secure funding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {successMetrics.map((metric, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
                <div className="flex justify-center mb-3">
                  {metric.icon}
                </div>
                <div className="text-2xl font-bold text-yellow-500 mb-2">{metric.metric}</div>
                <p className="text-gray-200 text-sm">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gary's Certifications */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Gary Robinson's Prop Firm Certifications
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Gary has successfully passed evaluations with 15+ leading prop firms, demonstrating consistent profitability and risk management
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 shadow-2xl">
              {/* Certification Display */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="relative">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src={currentGaryCert.image} 
                      alt={`${currentGaryCert.firm} Certification`}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="bg-yellow-500 text-blue-900 px-3 py-1 rounded-full text-sm font-bold mb-2">
                        CERTIFIED
                      </div>
                      <h3 className="text-xl font-bold">{currentGaryCert.firm}</h3>
                    </div>
                  </div>
                  
                  {/* Navigation Arrows */}
                  <button
                    onClick={prevGarySlide}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-blue-900 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextGarySlide}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-blue-900 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-900 mb-2">{currentGaryCert.firm}</h3>
                    <p className="text-gray-600">{currentGaryCert.type}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-xl shadow-md">
                      <div className="text-sm text-gray-600">Funding Amount</div>
                      <div className="text-2xl font-bold text-green-600">{currentGaryCert.amount}</div>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-md">
                      <div className="text-sm text-gray-600">Date Passed</div>
                      <div className="text-lg font-bold text-blue-900">{new Date(currentGaryCert.date).toLocaleDateString()}</div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-xl shadow-md">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Progress</span>
                      <span className="text-sm font-medium text-blue-900">
                        {garyCurrentIndex + 1} of {garyCertifications.length}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${((garyCurrentIndex + 1) / garyCertifications.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button variant="secondary" size="sm">
                      <Download className="mr-2" size={16} />
                      View Certificate
                    </Button>
                    <Button variant="outline" size="sm">
                      Learn Strategy
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Certifications */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Student Success Stories
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Over 50 students have successfully passed prop firm evaluations using Gary's proven strategies and mentorship
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 shadow-2xl">
              {/* Student Certification Display */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="relative">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src={currentStudentCert.image} 
                      alt={`${currentStudentCert.studentName} Certification`}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold mb-2">
                        STUDENT SUCCESS
                      </div>
                      <h3 className="text-xl font-bold">{currentStudentCert.firm}</h3>
                    </div>
                  </div>
                  
                  {/* Navigation Arrows */}
                  <button
                    onClick={prevStudentSlide}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-green-700 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextStudentSlide}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-green-700 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-green-700 mb-2">{currentStudentCert.studentName}</h3>
                    <p className="text-gray-600">{currentStudentCert.type} - {currentStudentCert.firm}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-xl shadow-md">
                      <div className="text-sm text-gray-600">Funding Secured</div>
                      <div className="text-2xl font-bold text-green-600">{currentStudentCert.amount}</div>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-md">
                      <div className="text-sm text-gray-600">Achievement Date</div>
                      <div className="text-lg font-bold text-green-700">{new Date(currentStudentCert.date).toLocaleDateString()}</div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-xl shadow-md">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Student Progress</span>
                      <span className="text-sm font-medium text-green-700">
                        {studentsCurrentIndex + 1} of {studentCertifications.length}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${((studentsCurrentIndex + 1) / studentCertifications.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                    <p className="text-green-800 text-sm italic">
                      "Gary's mentorship was instrumental in helping me pass the {currentStudentCert.firm} evaluation. His risk management strategies and psychological guidance made all the difference."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Professional Certifications */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Professional Certifications
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Industry-recognized credentials demonstrating expertise and commitment to professional standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {additionalCertifications.map((cert, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-blue-900 text-lg mb-1">{cert.name}</h3>
                    <p className="text-blue-700 font-medium">{cert.issuer}</p>
                  </div>
                  <div className="bg-yellow-500 text-blue-900 px-3 py-1 rounded-full text-sm font-bold">
                    {cert.year}
                  </div>
                </div>
                <p className="text-gray-700">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Pass Your Prop Firm Evaluation?
            </h2>
            <p className="text-gray-200 mb-8 max-w-2xl mx-auto text-lg">
              Join Gary's proven mentorship program and learn the exact strategies that have helped him and 50+ students secure prop firm funding.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Start Mentorship Program
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-900"
              >
                View Success Strategies
              </Button>
            </div>
            
            <div className="mt-8 text-sm text-gray-300">
              <p>Join the ranks of successful prop firm traders • Proven strategies • Expert guidance</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certifications;