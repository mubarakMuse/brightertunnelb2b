import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TechnicalInterviewsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
                <span className="text-xl mr-2">🎯</span>
                Technical Interview Services
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl mx-auto leading-tight">
                Hire the Right{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">
                  Engineers
                </span>
              </h1>
              
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                Our expert interviewers conduct thorough technical assessments that identify top talent while saving you time and resources.
              </p>
              
              <a
                href="https://cal.com/brighter-tunnel/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Schedule Interview
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                What We Offer
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive technical interview services designed to identify the best engineering talent for your team.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-2xl">👨‍💻</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Interviewers</h3>
                <p className="text-gray-600">Our vetted engineers have years of experience conducting technical interviews and evaluating candidates across various technologies.</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-2xl">💻</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Real Coding Challenges</h3>
                <p className="text-gray-600">We use practical, real-world coding problems that accurately assess a candidate&apos;s technical skills and problem-solving abilities.</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Detailed Evaluations</h3>
                <p className="text-gray-600">Get comprehensive reports on each candidate including technical skills, communication, and cultural fit assessment.</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-2xl">⏰</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Flexible Scheduling</h3>
                <p className="text-gray-600">Schedule interviews at your convenience with our flexible booking system that works around your team&apos;s availability.</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Role-Specific Assessments</h3>
                <p className="text-gray-600">Tailored interview questions and challenges based on the specific role, technology stack, and seniority level you&apos;re hiring for.</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Fast Turnaround</h3>
                <p className="text-gray-600">Get detailed evaluation reports within 24 hours of the interview, helping you make quick hiring decisions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                How It Works
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our streamlined process makes technical interviewing simple and effective.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Share Requirements</h3>
                <p className="text-gray-600">Tell us about the role, required skills, and your specific needs for the technical assessment.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Schedule Interview</h3>
                <p className="text-gray-600">We coordinate with you and the candidate to find the best time for the technical interview.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Conduct Assessment</h3>
                <p className="text-gray-600">Our expert interviewer conducts a thorough technical assessment using real-world coding challenges.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">4</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Get Detailed Report</h3>
                <p className="text-gray-600">Receive a comprehensive evaluation report with recommendations and detailed feedback within 24 hours.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Hire Better Engineers?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let our expert interviewers help you identify the best technical talent for your team.
            </p>
            <a
              href="https://cal.com/brighter-tunnel/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Schedule Interview
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
