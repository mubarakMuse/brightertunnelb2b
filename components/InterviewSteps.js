import React from 'react';

const Step = ({ stepNumber, title, description, icon, isLast = false }) => {
  return (
    <div className="relative">
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        {/* Step Number */}
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
          <span className="text-2xl font-bold text-white">{stepNumber}</span>
        </div>
        
        {/* Icon */}
        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
          <span className="text-2xl">{icon}</span>
        </div>
        
        {/* Content */}
        <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
      
      {/* Connector Line */}
      {!isLast && (
        <div className="hidden lg:block absolute top-1/2 -right-8 w-16 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 transform -translate-y-1/2">
          <div className="absolute right-0 top-1/2 w-3 h-3 bg-blue-500 rounded-full transform -translate-y-1/2"></div>
        </div>
      )}
    </div>
  );
};

const InterviewSteps = () => {
  const steps = [
    {
      stepNumber: "01",
      title: "Assess Your Needs",
      description: "We analyze your team structure, technical requirements, and company culture to design the perfect interview process tailored to your specific needs.",
      icon: "🎯"
    },
    {
      stepNumber: "02",
      title: "Custom Challenge Design",
      description: "Our engineering experts create real-world coding challenges that accurately assess the skills you actually need, not just theoretical knowledge.",
      icon: "💻"
    },
    {
      stepNumber: "03",
      title: "Expert-Led Interviews",
      description: "Experienced engineers conduct technical interviews, providing deep insights into candidate capabilities, problem-solving approach, and cultural fit.",
      icon: "👨‍💼"
    },
    {
      stepNumber: "04",
      title: "Comprehensive Reports",
      description: "Receive detailed evaluation reports with actionable insights, helping you make confident hiring decisions backed by expert analysis.",
      icon: "📊"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-blue-50" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Our Process
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 max-w-4xl mx-auto leading-tight">
            Simple{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              4-Step Process
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our straightforward approach to improving your technical interview process.
          </p>
        </div>

        {/* Steps */}
        <div className="grid lg:grid-cols-4 gap-8 lg:gap-4">
          {steps.map((step, index) => (
            <Step 
              key={index} 
              {...step} 
              isLast={index === steps.length - 1}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="https://cal.com/brighter-tunnel/15min"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200">
            Get Started
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default InterviewSteps;
