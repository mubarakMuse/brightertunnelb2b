import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CustomSoftwarePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-green-900 via-green-800 to-emerald-900">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-6">
                <span className="text-xl mr-2">💻</span>
                Custom Software Development
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl mx-auto leading-tight">
                Build Software That{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-300">
                  Fits Your Business
                </span>
              </h1>
              
              <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                From web applications to mobile apps, we create custom solutions that solve your unique challenges and drive growth.
              </p>
              
              <a
                href="https://cal.com/brighter-tunnel/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-white text-green-900 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Start Your Project
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* What We Build */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                What We Build
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We create custom software solutions tailored to your specific business needs and goals.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-2xl">🌐</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Web Applications</h3>
                <p className="text-gray-600">Custom web apps built with modern frameworks like React, Next.js, and Node.js for optimal performance and scalability.</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Mobile Apps</h3>
                <p className="text-gray-600">Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-2xl">⚙️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Business Tools</h3>
                <p className="text-gray-600">Custom business management tools, dashboards, and automation systems that streamline your operations.</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-2xl">🔌</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">API Development</h3>
                <p className="text-gray-600">RESTful APIs and microservices that integrate with your existing systems and enable seamless data flow.</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-2xl">🛒</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">E-commerce Solutions</h3>
                <p className="text-gray-600">Custom online stores and marketplace platforms with payment processing, inventory management, and analytics.</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Data Solutions</h3>
                <p className="text-gray-600">Data processing, analytics platforms, and business intelligence tools that turn your data into actionable insights.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Development Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We follow a proven methodology to ensure your project is delivered on time, on budget, and exceeds expectations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Discovery</h3>
                <p className="text-gray-600">We understand your business goals, requirements, and technical constraints through detailed consultation.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Planning</h3>
                <p className="text-gray-600">We create a detailed project roadmap with milestones, timelines, and technical architecture.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Development</h3>
                <p className="text-gray-600">We build your solution using agile methodology with regular updates and feedback loops.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">4</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Launch & Support</h3>
                <p className="text-gray-600">We deploy your solution and provide ongoing maintenance, updates, and technical support.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Build Your Custom Solution?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Let&apos;s discuss your project requirements and create a software solution that drives your business forward.
            </p>
            <a
              href="https://cal.com/brighter-tunnel/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Start Your Project
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
