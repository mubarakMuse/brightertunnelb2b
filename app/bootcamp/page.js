"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function LandingPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [openCurriculum, setOpenCurriculum] = useState(null);
  let applyLink = "https://forms.gle/JZAAk4WwY78SHWT86";

  const features = [
    {
      title: "Built-in Support",
      description:
        "Instruction designed to help you master programming skills in this challenging and accelerated course.",
      icon: "support-icon",
    },
    {
      title: "Python + JavaScript",
      description:
        "Stand out with hundreds of hours of practical experience in the two most in-demand languages.",
      icon: "python-js-icon",
    },
    {
      title: "Distinguished Portfolio",
      description:
        "Design and complete four projects of your own and dozens of guided projects with your classmates.",
      icon: "portfolio-icon",
    },
    {
      title: "Job Outcomes",
      description:
        "Curriculum, coaching, and connections to help you prepare for interviews and land your dream job.",
      icon: "job-outcomes-icon",
    },
  ];

  const pricingOptions = [
    {
      title: "Upfront Payment",
      price: "$10,000",
      description: "Save $1,000 with our upfront payment option",
      features: [
        "Full course access",
        "One-time payment",
        "$1,000 discount applied",
        "No additional fees",
      ],
    },
    {
      title: "Monthly Payments",
      price: "$2,750",
      description: "4 monthly payments, 0% interest",
      features: [
        "Full course access",
        "4 monthly installments",
        "Interest-free payments",
        "Flexible payment schedule",
      ],
    },
  ];

  const curriculum = [
    {
      weeks: "Weeks 1-3",
      title: "Programming Fundamentals",
      details:
        "Introduction to programming concepts, variables, control structures, functions, and basic data structures.",
    },
    {
      weeks: "Weeks 4-6",
      title: "Computer Science",
      details:
        "Algorithms, data structures, complexity analysis, and problem-solving techniques.",
    },
    {
      weeks: "Weeks 7-9",
      title: "Web Development Fundamentals",
      details: "HTML, CSS, JavaScript, and building responsive web pages.",
    },
    {
      weeks: "Weeks 10-13",
      title: "Back-End Engineering",
      details:
        "Server-side development, databases, RESTful APIs, and back-end frameworks.",
    },
    {
      weeks: "Weeks 14-16",
      title: "Front-End Engineering",
      details:
        "Advanced JavaScript, ReactJS, state management, and front-end best practices.",
    },
    {
      weeks: "Weeks 17-20",
      title: "Python",
      details:
        "Python programming, Flask framework, and building web applications with Python.",
    },
    {
      weeks: "Weeks 21-24",
      title: "Career Quest",
      details:
        "Career preparation, resume building, interview skills, and job search strategies.",
    },
  ];

  const toggleCurriculum = (index) => {
    setOpenCurriculum(openCurriculum === index ? null : index);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <header className="bg-gray-100 text-gray-800 p-4 md:p-6 w-full z-50">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-2xl text-sky-800 font-bold">
            Brighter Tunnel Bootcamp
          </a>
          <nav className="hidden md:flex items-center space-x-4">
            <a
              href="#features"
              className="hover:text-sky-600 transition-colors"
            >
              Features
            </a>
            <a
              href="#ai-learning"
              className="hover:text-sky-600 transition-colors"
            >
              AI Learning
            </a>
            <a
              href="#curriculum"
              className="hover:text-sky-600 transition-colors"
            >
              Curriculum
            </a>
            <a href="#pricing" className="hover:text-sky-600 transition-colors">
              Tuition
            </a>
            <a
              href={applyLink}
              className="bg-sky-800 text-white px-4 py-2 rounded-md hover:bg-sky-900 transition-colors"
            >
              Apply Now
            </a>
          </nav>
          <button className="md:hidden text-gray-800" onClick={toggleDrawer}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-y-0 left-0 transform ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        } w-64 bg-gray-900 text-white transition duration-300 ease-in-out z-50 md:hidden`}
      >
        <div className="p-6">
          <button className="absolute top-4 right-4" onClick={toggleDrawer}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <nav className="mt-8 space-y-4">
            <a href="#hero" className="block text-gray-300 hover:text-white">
              Home
            </a>
            <a
              href="#features"
              className="block text-gray-300 hover:text-white"
            >
              Features
            </a>
            <a
              href="#ai-learning"
              className="block text-gray-300 hover:text-white"
            >
              AI Learning
            </a>
            <a
              href="#curriculum"
              className="block text-gray-300 hover:text-white"
            >
              Curriculum
            </a>
            <a href="#pricing" className="block text-gray-300 hover:text-white">
              Tuition
            </a>
            <a
              href={applyLink}
              className="block bg-sky-600 text-white px-4 py-2 rounded-md hover:bg-sky-700 transition-colors"
            >
              Apply Now
            </a>
          </nav>
        </div>
      </div>

      <main className="flex-grow pt-10 md:pt-14">
        <section
          className="container mx-auto flex flex-col md:flex-row items-center px-6"
          id="hero"
        >
          <div className="flex-1 mb-8 md:mb-0 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Change your career, Change your life
            </h1>
            <p className="mt-4 text-base md:text-lg text-gray-700">
              Our software engineering bootcamps are designed to help people
              with little to no coding experience become high-earning software
              engineers.
            </p>
            <div className="mt-8 space-y-4 md:space-y-0 md:space-x-4">
              <a
                href={applyLink}
                className="inline-block bg-sky-800 text-white px-6 py-3 rounded-md text-base md:text-lg font-semibold"
              >
                Submit an Application
              </a>
              <a
                href="https://calendly.com/brightertunnel/chat-with-brighter-tunnel"
                className="inline-block border border-sky-800 text-sky-800 px-6 py-3 rounded-md text-base md:text-lg font-semibold"
              >
                Talk with Admissions 🧑‍🎓
              </a>
            </div>
          </div>
          <div className="flex-1">
            <Image
              src="https://cdn.prod.website-files.com/5dcc7f8c449e597ed83356b8/5f8a16212ea57d86e6e26fb5_Artboardwhiteboard.webp"
              alt="Students collaborating"
              width={500}
              height={300}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </section>

        <section className="bg-gray-100 py-12 mt-4 md:py-16" id="features">
          <div className="container mx-auto text-center px-6">
            <h2 className="text-4xl font-bold text-center mb-8">
             {" Why Brighter Tunnel's 12-Week Bootcamp?"}
            </h2>
            <p className="text-center mb-12 max-w-3xl mx-auto">
              We are engineers and educators. We know the skills that make a
              solid programmer and how to teach them to you. This course is
              focused around your success.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="p-4 md:p-6 border rounded-lg text-left bg-white"
                >
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-700">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white" id="ai-learning">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-8">
              Major in Software ; Minor AI{" "}
            </h2>
            <p className="text-center mb-12 max-w-3xl mx-auto">
              Brighter Tunnel has developed an AI learning experience that goes
              beyond solving basic programming problems. Towards the end of your
              academic journey, we equip you with the tools and experience
              needed to use AI in a way that helps you upgrade your career and
              ultimately change your life.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <Image
                  src="https://cdn.prod.website-files.com/5dcc7f8c449e597ed83356b8/650261d8e1e0ef386de09642_unsplash_JO_S6ewBqAk.webp"
                  alt="Laptop on desk with cityscape view"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-semibold mb-4">
                {" In completing our AI curriculum, you'll have:"}
                </h3>
                <ul className="space-y-4">
                  {[
                    "The skills to build web applications that incorporate AI",
                    "Confidence to be ready for AI questions during interviews and everyday job tasks",
                    "An accelerated development workflow that uses AI to amplify your skills",
                    "A portfolio of work to show off your AI capabilities to employers",
                    "A core foundation to build upon, so you can continue to grow as the AI economy booms",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="w-6 h-6 text-sky-500 mr-2 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-sky-900 py-12 md:py-20" id="curriculum">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-4xl text-white font-bold text-center mb-8">
              {`What you'll learn in 12 weeks`}
            </h2>
            <p className="text-center mb-12 text-white max-w-3xl mx-auto">
              {`Your hard work and commitment will transform you into a Full-stack
              Web Developer. Build from scratch with JavaScript, Python, SQL,
              HTML and CSS. Accelerate your projects with ReactJS, Express,
              Flask, and SQL Alchemy. You'll be shocked at how much you can
              learn - employers will be too.`}
            </p>
            <div className="max-w-4xl mx-auto">
              {curriculum.map((item, index) => (
                <div
                  key={item.weeks}
                  className="border-b bg-white text-black border-gray-200 mt-2 rounded-lg last:border-b-0"
                >
                  <button
                    className="flex justify-between items-center w-full py-4 px-4 md:px-6 text-left"
                    onClick={() => toggleCurriculum(index)}
                  >
                    <span className="text-base md:text-lg font-semibold">
                      {item.weeks} - {item.title}
                    </span>
                    <span
                      className={`transition-transform duration-300 ${
                        openCurriculum === index ? "rotate-180" : ""
                      }`}
                    >
                      ▼
                    </span>
                  </button>
                  {openCurriculum === index && (
                    <div className="p-4 md:p-6 bg-gray-50">
                      <p className="text-sm md:text-base">{item.details}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-12 md:py-20" id="pricing">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-4xl font-bold text-center mb-8">
              Tuition Payment Options
            </h2>
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
              {pricingOptions.map((option, index) => (
                <div
                  key={index}
                  className="border rounded-lg shadow-lg p-6 bg-gray-100 flex flex-col"
                >
                  <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                  <p className="text-3xl font-bold text-sky-600 mb-4">
                    {option.price}
                  </p>
                  <p className="text-gray-600 mb-6">{option.description}</p>
                  <ul className="mb-8 flex-grow">
                    {option.features.map((feature, i) => (
                      <li key={i} className="flex items-center mb-2">
                        <svg
                          className="w-5 h-5 text-green-500 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={applyLink}
                    className="bg-sky-800 text-white text-center py-2 px-4 rounded-full hover:bg-sky-900 transition-colors"
                  >
                    Apply Now
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-sky-900 text-white py-16" id="cta">
          <div className="container mx-auto text-center px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Coding Journey?
            </h2>
            <p className="text-xl mb-8">
              Join Brighter Tunnel Bootcamp and transform your career in just 12
              weeks.
            </p>
            <a
              href={applyLink}
              className="inline-block bg-white text-sky-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Apply Now
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Brighter Tunnel Bootcamp
              </h3>
              <p className="text-gray-400">
                Transforming careers through innovative coding education.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#curriculum"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Curriculum
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Tuition
                  </a>
                </li>
                <li>
                  <a
                    href={applyLink}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Apply Now
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <p className="text-gray-400">Email: Mubarak@brightertunnel.com</p>
              <p className="text-gray-400">Phone: (765) 351-1316</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2024 Brighter Tunnel Bootcamp. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
