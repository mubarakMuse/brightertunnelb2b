import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AIIntegrationPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-6">
                <span className="text-xl mr-2">🤖</span>
                AI Integration Consulting
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl mx-auto leading-tight">
                Transform Your Business{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-300">
                  with AI
                </span>
              </h1>
              
              <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                We help you identify opportunities, implement solutions, and integrate AI tools that cut costs and increase efficiency.
              </p>
              
              <a
                href="https://cal.com/brighter-tunnel/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-white text-purple-900 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Start AI Journey
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
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
                AI Solutions We Provide
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From strategy to implementation, we help you leverage AI to transform your business operations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">AI Opportunity Assessment</h3>
                <p className="text-gray-600">We analyze your business processes to identify where AI can have the biggest impact on efficiency and cost reduction.</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-2xl">⚙️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Process Automation</h3>
                <p className="text-gray-600">Automate repetitive tasks and workflows using AI-powered solutions that save time and reduce human error.</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Data Analytics & Insights</h3>
                <p className="text-gray-600">Transform your data into actionable insights using AI-powered analytics and machine learning models.</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-2xl">💬</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Chatbots & Customer Service</h3>
                <p className="text-gray-600">Implement intelligent chatbots and AI-powered customer service solutions to improve response times and satisfaction.</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Predictive Analytics</h3>
                <p className="text-gray-600">Use AI to predict trends, customer behavior, and business outcomes to make better strategic decisions.</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-2xl">🔧</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Custom AI Solutions</h3>
                <p className="text-gray-600">Build tailored AI solutions that address your specific business challenges and integrate seamlessly with existing systems.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose AI Integration?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                AI integration delivers measurable results that directly impact your bottom line.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Cost Reduction</h3>
                <p className="text-gray-600">Reduce operational costs by 20-40% through process automation and efficiency improvements.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Increased Efficiency</h3>
                <p className="text-gray-600">Automate repetitive tasks and streamline workflows to boost productivity and reduce manual errors.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Better Decisions</h3>
                <p className="text-gray-600">Make data-driven decisions with AI-powered insights and predictive analytics.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Competitive Advantage</h3>
                <p className="text-gray-600">Stay ahead of competitors by leveraging cutting-edge AI technology and automation.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our AI Integration Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We follow a structured approach to ensure successful AI implementation and maximum ROI.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Assessment</h3>
                <p className="text-gray-600">Analyze your current processes and identify the best AI opportunities for your business.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Strategy</h3>
                <p className="text-gray-600">Develop a comprehensive AI strategy with clear goals, timelines, and success metrics.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Implementation</h3>
                <p className="text-gray-600">Deploy AI solutions with proper integration, testing, and staff training.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">4</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Optimization</h3>
                <p className="text-gray-600">Monitor performance, optimize results, and scale successful AI implementations.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform with AI?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Let us help you identify AI opportunities and implement solutions that cut costs and increase efficiency.
            </p>
            <a
              href="https://cal.com/brighter-tunnel/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Start AI Journey
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
