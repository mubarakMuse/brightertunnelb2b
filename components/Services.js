import React from 'react';
import Link from 'next/link';

const ServiceCard = ({ icon, title, description, link, color, isPrimary = false }) => {
  return (
    <div className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${isPrimary ? 'ring-2 ring-blue-500 ring-opacity-50' : ''}`}>
      <div className={`w-16 h-16 ${color} rounded-2xl flex items-center justify-center mb-6`}>
        <span className="text-2xl">{icon}</span>
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
      
      <Link 
        href={link}
        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200"
      >
        Learn More
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: "🤖",
      title: "AI Integration Consulting",
      description: "Transform your business with AI. We help you identify opportunities, implement solutions, and integrate AI tools that cut costs and increase efficiency.",
      link: "/services/ai-integration",
      color: "bg-purple-100",
      isPrimary: true
    },
    {
      icon: "🎯",
      title: "Technical Interview Services",
      description: "Hire the right engineers with confidence. Our expert interviewers conduct thorough technical assessments that identify top talent while saving you time and resources.",
      link: "/services/technical-interviews",
      color: "bg-blue-100"
    },
    {
      icon: "💻",
      title: "Custom Software Development",
      description: "Build software that fits your business perfectly. From web applications to mobile apps, we create custom solutions that solve your unique challenges and drive growth.",
      link: "/services/custom-software",
      color: "bg-green-100"
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 max-w-4xl mx-auto leading-tight">
            Our Technology{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Services
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose the service you need, or combine them for maximum impact. 
            Each service is designed to solve specific business challenges.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
