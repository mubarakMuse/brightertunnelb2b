"use client";
import { useState } from "react";
import Link from "next/link";

const CandidateScreeningPage = () => {
  const [selectedPlan, setSelectedPlan] = useState("monthly");

  const plans = {
    monthly: {
      price: 500,
      period: "month",
      savings: null,
      description: "Perfect for ongoing hiring needs"
    },
    yearly: {
      price: 4500,
      period: "year",
      savings: "3 months free",
      description: "Best value for long-term hiring"
    }
  };

  const features = [
    {
      icon: "👥",
      title: "5 Pre-vetted Candidates Weekly",
      description: "Get 5 thoroughly screened candidates delivered to your inbox every week"
    },
    {
      icon: "🔍",
      title: "Technical Skills Assessment",
      description: "Each candidate is evaluated on programming skills, problem-solving, and system design"
    },
    {
      icon: "📋",
      title: "Detailed Candidate Profiles",
      description: "Complete profiles with experience, skills, AI expertise, and interview notes"
    },
    {
      icon: "📄",
      title: "Resume Access",
      description: "Direct access to candidate resumes and portfolios via Google Drive"
    },
    {
      icon: "💬",
      title: "Direct Candidate Contact",
      description: "Contact candidates directly with pre-written professional email templates"
    },
    {
      icon: "📊",
      title: "Candidate Tracking",
      description: "Track which candidates you've contacted and manage your hiring pipeline"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc",
      role: "CTO",
      content: "Brighter Tunnel has transformed our hiring process. We get 5 high-quality candidates every week, and the technical assessments are spot-on. It's saved us countless hours of screening."
    },
    {
      name: "Mike Chen",
      company: "DataFlow Solutions",
      role: "Engineering Manager",
      content: "The candidate profiles are incredibly detailed. We can see exactly what we're getting before we even contact them. The ROI is immediate - we've hired 3 engineers in the last 2 months."
    },
    {
      name: "Emily Rodriguez",
      company: "CloudScale",
      role: "VP of Engineering",
      content: "Finally, a service that understands what we need. The AI expertise assessment is particularly valuable for our team. Highly recommended!"
    }
  ];

  const faqs = [
    {
      question: "How do you screen candidates?",
      answer: "We conduct comprehensive technical interviews covering programming skills, problem-solving, system design, and AI experience. Each candidate is evaluated on a 1-10 scale across multiple dimensions."
    },
    {
      question: "What types of candidates do you provide?",
      answer: "We focus on software engineers with 2+ years of experience across various tech stacks including JavaScript, Python, Java, Go, and more. We also assess AI/ML expertise and leadership potential."
    },
    {
      question: "Can I contact candidates directly?",
      answer: "Yes! You get direct access to candidate contact information and can reach out immediately. We provide professional email templates to help you make the first contact."
    },
    {
      question: "What if I need more than 5 candidates per week?",
      answer: "Contact us to discuss custom plans. We can scale up the number of candidates based on your hiring needs and timeline."
    },
    {
      question: "How quickly can I start?",
      answer: "You can start immediately after signing up. Your first batch of 5 candidates will be delivered within 7 days of your subscription start."
    },
    {
      question: "What's your refund policy?",
      answer: "We offer a 30-day money-back guarantee. If you're not satisfied with the quality of candidates in your first month, we'll refund your payment."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Stop Wasting Time on
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                {" "}Bad Candidates
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Get 5 pre-vetted, technically screened candidates delivered to your inbox every week. 
              Skip the resume screening, skip the initial interviews, go straight to hiring.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-200 transform hover:scale-105"
              >
                Get Started Today
              </button>
              <button
                onClick={() => document.getElementById('how-it-works').scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-200"
              >
                See How It Works
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Problem Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Hiring Problem We Solve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Traditional hiring is broken. You spend weeks screening resumes, conducting initial interviews, 
              only to find out candidates can&apos;t code or don&apos;t fit your culture.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="text-4xl mb-4">😤</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Wasted Time</h3>
              <p className="text-gray-600">Spending 20+ hours per week screening resumes and conducting initial interviews</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="text-4xl mb-4">💸</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">High Costs</h3>
              <p className="text-gray-600">Recruiters charge 20-30% of annual salary, plus your time is valuable</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="text-4xl mb-4">😞</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Bad Hires</h3>
              <p className="text-gray-600">Hiring the wrong person costs 3x their salary and delays your projects</p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div id="how-it-works" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven 3-step process delivers high-quality candidates directly to your inbox
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">We Screen</h3>
              <p className="text-gray-600">
                Our technical experts conduct comprehensive interviews covering programming skills, 
                problem-solving, system design, and AI experience.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">You Review</h3>
              <p className="text-gray-600">
                Every week, you receive 5 detailed candidate profiles with skills assessments, 
                interview notes, and direct access to resumes.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">You Hire</h3>
              <p className="text-gray-600">
                Contact candidates directly with our professional email templates. 
                Skip the initial screening, go straight to final interviews.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What You Get
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to streamline your hiring process and find the right candidates
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div id="pricing" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No hidden fees, no long-term contracts. Cancel anytime.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Plan Toggle */}
            <div className="flex justify-center mb-8">
              <div className="bg-gray-100 p-1 rounded-lg">
                <button
                  onClick={() => setSelectedPlan("monthly")}
                  className={`px-6 py-2 rounded-md font-semibold transition-all duration-200 ${
                    selectedPlan === "monthly"
                      ? "bg-white text-gray-900 shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setSelectedPlan("yearly")}
                  className={`px-6 py-2 rounded-md font-semibold transition-all duration-200 ${
                    selectedPlan === "yearly"
                      ? "bg-white text-gray-900 shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Yearly
                </button>
              </div>
            </div>

            {/* Pricing Card */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white text-center">
              <div className="mb-4">
                {plans[selectedPlan].savings && (
                  <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                    {plans[selectedPlan].savings}
                  </span>
                )}
              </div>
              <h3 className="text-2xl font-semibold mb-2">Candidate Screening Service</h3>
              <div className="text-5xl font-bold mb-2">
                ${plans[selectedPlan].price.toLocaleString()}
                <span className="text-2xl font-normal">/{plans[selectedPlan].period}</span>
              </div>
              <p className="text-blue-100 mb-6">{plans[selectedPlan].description}</p>
              
              <div className="bg-white/10 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold mb-4">What&apos;s Included:</h4>
                <ul className="text-left space-y-2">
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    5 pre-vetted candidates every week
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    Technical skills assessment (1-10 scale)
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    Detailed candidate profiles
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    Resume access via Google Drive
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    Direct candidate contact
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    Professional email templates
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    Candidate tracking system
                  </li>
                </ul>
              </div>

              <button
                onClick={() => window.open("https://cal.com/brighter-tunnel/15min", "_blank")}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
              >
                Start Your Free Trial
              </button>
              <p className="text-blue-100 text-sm mt-2">30-day money-back guarantee</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join hundreds of companies that have transformed their hiring process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4 italic">&quot;{testimonial.content}&quot;</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our candidate screening service
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Hiring?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of companies that have streamlined their hiring process with our pre-vetted candidates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.open("https://cal.com/brighter-tunnel/15min", "_blank")}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-200 transform hover:scale-105"
            >
              Schedule a Demo
            </button>
            <button
              onClick={() => window.open("mailto:mubarak@brightertunnel.com", "_blank")}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-200"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link href="/" className="text-2xl font-bold">
                Brighter Tunnel
              </Link>
              <p className="text-gray-400 mt-2">Pre-vetted candidates, delivered weekly</p>
            </div>
            <div className="flex space-x-6">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                Services
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Brighter Tunnel. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CandidateScreeningPage;



