import React from 'react';

const ProblemCard = ({ icon, title, description, color }) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className={`w-16 h-16 ${color} rounded-2xl flex items-center justify-center mb-6`}>
        <span className="text-2xl">{icon}</span>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
    </div>
  );
};

const Problem = () => {
  const problems = [
    {
      icon: "⏰",
      title: "Time Wasted on Unqualified Candidates",
      description: "Spend hours interviewing developers who can't code, leading to frustration and wasted resources.",
      color: "bg-red-100"
    },
    {
      icon: "💰",
      title: "Cost of Bad Hires",
      description: "A single bad engineering hire can cost your company significantly in recruitment, training, and lost productivity.",
      color: "bg-orange-100"
    },
    {
      icon: "📉",
      title: "Team Morale Impact",
      description: "Poor hires create technical debt, slow down projects, and demotivate your existing team members.",
      color: "bg-purple-100"
    }
  ];

  return (
    <section id="problem-section" className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-800 text-sm font-medium mb-6">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            The Hiring Challenge
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 max-w-4xl mx-auto leading-tight">
            Traditional Hiring is{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
              Inefficient
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Every company struggles with hiring good engineers. 
            The current process is broken, and it&apos;s costing you time and money.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => (
            <ProblemCard key={index} {...problem} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
