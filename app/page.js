"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function LandingPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [openCurriculum, setOpenCurriculum] = useState(null);

  // Corrected links for Stripe and Calendly
  const stripeLink = "https://book.stripe.com/28o7vQ9M17ac98cdQS"; // Replace with your Stripe payment link
  const applyLink = "https://calendly.com/brightertunnel/chat-with-brighter-tunnel";


  const services = [
    {
      title: "MVP In A Week",
      price: "$9,850",
      description: "Turn your Buissness idea to a fully functional software product in just 7 days.",
      features: [
        "Fully functional MVP in one week",
        "End-to-end development",
        "Dedicated team of engineers",
        "$500 Deposit to reserve a spot"
      ],
      link: "#calendar"
    },
    {
      title: "Consulting & Advisory",
      price: "$100 Per Hour",
      description: "Get personalized advice and expert guidance for your startup.",
      features: [
        "Customized consulting sessions",
        "Expert strategy & technical advice",
        "Flexible scheduling",
      ],
      link: applyLink
    },
  ];

  const curriculum = [
    {
      day: "Day 1",
      title: "Ideation & Feature Prioritization",
      details: "We define the core features that are essential to your MVP and prioritize them for development.",
    },
    {
      day: "Day 2",
      title: "System Design & Architecture",
      details: "We create the architecture and flow of your product, ensuring scalability and functionality.",
    },
    {
      day: "Day 3",
      title: "Front-End Development",
      details: "We develop the front-end using modern web technologies, focusing on user experience.",
    },
    {
      day: "Day 4",
      title: "Back-End Development",
      details: "We integrate back-end functionality, connecting databases and setting up servers.",
    },
    {
      day: "Day 5",
      title: "Integration & Testing",
      details: "We integrate all parts of the system and thoroughly test the MVP for any issues.",
    },
    {
      day: "Day 6",
      title: "Client Review",
      details: "You review the MVP, and we make any necessary changes or additions.",
    },
    {
      day: "Day 7",
      title: "Final Delivery",
      details: "We deliver the completed MVP, ready for launch, with full documentation.",
    },
  ];

  const weeks = [
    { weekStart: "2024-09-21", weekEnd: "2024-09-27", isSoldOut: true },
    { weekStart: "2024-09-28", weekEnd: "2024-10-04", isSoldOut: false },
    { weekStart: "2024-10-05", weekEnd: "2024-10-11", isSoldOut: false },
    { weekStart: "2024-10-12", weekEnd: "2024-10-18", isSoldOut: false },
    { weekStart: "2024-10-19", weekEnd: "2024-10-25", isSoldOut: false },
    { weekStart: "2024-10-26", weekEnd: "2024-11-01", isSoldOut: false },
  ];

  const toggleCurriculum = (index) => {
    setOpenCurriculum(openCurriculum === index ? null : index);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      {/* Header */}
      <header className="bg-gray-100 text-gray-800 p-4 md:p-6 w-full z-50">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="md:text-2xl text-md text-sky-800 font-bold">
            Brighter Tunnel
          </a>
          <nav className="hidden md:flex items-center space-x-4">
            <a href="#serivces" className="hover:text-sky-600 transition-colors">Services</a>
            <a href="#process" className="hover:text-sky-600 transition-colors">Process</a>
            <a
              href={applyLink}
              className="bg-sky-800 text-white px-4 py-2 rounded-md hover:bg-sky-900 transition-colors"
            >
              Book Free Consultation
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-y-0 left-0 transform ${isDrawerOpen ? "translate-x-0" : "-translate-x-full"
          } w-64 bg-gray-900 text-white transition duration-300 ease-in-out z-50 md:hidden`}
      >
        <div className="p-6">
          <button className="absolute top-4 right-4" onClick={toggleDrawer}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <nav className="mt-8 space-y-4">
            <a href="#hero" className="block text-gray-300 hover:text-white">Home</a>
            <a href="#serivces" className="block text-gray-300 hover:text-white">Services</a>
            <a href="#process" className="block text-gray-300 hover:text-white">Process</a>
            <a
              href={applyLink}
              className="block bg-sky-600 text-white px-4 py-2 rounded-md hover:bg-sky-700 transition-colors"
            >
              Book Free Consultation
            </a>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto flex flex-col md:flex-row items-center px-6 py-12 md:py-16" id="hero">
        <div className="flex-1 mb-8 md:mb-0 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Idea to Reality in Just 7 Days
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-700 max-w-xl">
            We help entrepreneurs turn their businesses ideas into fully functional software products super fast and without sacrificing quality.
          </p>
          <div className="mt-8 space-y-4 md:space-y-0 md:space-x-4">
            <a
              href={applyLink}
              className="inline-block bg-sky-800 text-white mr-2 px-6 py-3 rounded-md text-base md:text-lg font-semibold"
            >
              Book Free Consultation
            </a>
            <a
              href="#serivces"
              className="inline-block border border-sky-800 text-sky-800 px-6 py-3 rounded-md text-base md:text-lg font-semibold"

            >
              Learn More
            </a>
          </div>
        </div>
        <div className="flex-1 mt-8 md:mt-0 md:ml-8">
          <Image
            src="https://cdn.prod.website-files.com/5dcc7f8c449e597ed83356b8/5f8a16212ea57d86e6e26fb5_Artboardwhiteboard.webp"
            alt="MVP Development"
            width={500}
            height={300}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </section>


      {/* Services Section */}
      <section className="bg-gray-100 py-12" id="serivces">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-center mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((option, index) => (
              <div key={index} className="p-6 border rounded-lg bg-white shadow-md flex flex-col justify-between transition-transform hover:scale-105">
                <h3 className="text-xl font-semibold mb-4 text-black">{option.title}</h3>
                <p className="text-2xl font-bold mb-4 text-black">{option.price}</p>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <ul className="mb-4 text-left space-y-2">
                  {option.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href={option.link} className="block bg-sky-800 text-white py-2 px-4 rounded-full hover:bg-sky-900 transition-colors">Book Now</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 bg-white" id="process">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-center mb-8">Our 7-Day Process</h2>
          <div className="max-w-4xl mx-auto">
            {curriculum.map((item, index) => (
              <div
                key={item.day}
                className="border-b bg-white text-black border-gray-200 mt-2 rounded-lg last:border-b-0"
              >
                <button
                  className="flex justify-between items-center w-full py-4 px-4 md:px-6 text-left"
                  onClick={() => toggleCurriculum(index)}
                >
                  <span className="text-base md:text-lg font-semibold">{item.day} - {item.title}</span>
                  <span className={`transition-transform duration-300 ${openCurriculum === index ? "rotate-180" : ""}`}>▼</span>
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

      {/* Calendar of Weeks */}
      <section className="py-12 bg-gray-100" id="calendar">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-8">Upcoming MVP Weeks</h2>
          <div className="grid max-w-4xl mx-auto grid-cols-1 md:grid-cols-1 gap-6">
            {weeks.map((week, index) => (
              <div
                key={index}
                className="p-6 border rounded-lg bg-white shadow-md flex flex-col md:flex-row items-center justify-between"
              >
                {/* Left Section - Image, Date, and Details */}
                <div className="flex items-center space-x-4">
                  {/* <Image
                    src="https://via.placeholder.com/150"
                    alt="MVP Remote Week"
                    width={100}
                    height={100}
                    className="rounded-md"
                  /> */}
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-black">Remote</h3>
                    <p className="text-sm text-gray-600">
                      {week.weekStart} - {week.weekEnd}
                    </p>
                  </div>
                </div>

                {/* Right Section - Price and Button */}
                <div className="text-right mt-4 md:mt-0">
                  <p className="text-2xl font-bold text-black">{week.price}</p>
                  {week.isSoldOut ? (
                    <p className="text-red-600 font-semibold mt-2">Sold Out</p>
                  ) : (
                    <a
                      href={stripeLink}
                      className="bg-sky-800 text-white py-2 px-4 mt-4 inline-block rounded-md hover:bg-sky-900 transition-colors"
                    >
                      Reserve Now
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <p className="text-gray-700 text-xl mb-4">More dates being released soon.</p>
            {/* <p className="text-gray-600">
              We will inform you as soon as a 5-day MVP week at your preferred location becomes available.
            </p>
            <a
              href={applyLink}
              className="bg-gray-700 text-white py-2 px-4 mt-4 inline-block rounded-md hover:bg-gray-800 transition-colors"
            >
              Join the Waitlist
            </a> */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-sky-900 text-white py-16" id="cta">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Still have questions?
          </h2>
          <p className="text-xl mb-8">
            Connect with A Product Expert and learn how we can help you
          </p>
          <a
            href={applyLink}
            className="inline-block bg-white text-sky-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Book a call today
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Brighter Tunnel</h3>
              <p className="text-gray-400">Bringing ideas to reality, one MVP at a time.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Our Services</a></li>
                <li><a href="#process" className="text-gray-400 hover:text-white transition-colors">Process</a></li>
                <li><a href={applyLink} className="text-gray-400 hover:text-white transition-colors">Book a free Consultation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <p className="text-gray-400">Email: Mubarak@brightertunnel.com</p>
              <p className="text-gray-400">Phone: <a href="tel:7653511316" className="text-gray-400 hover:text-white">765-351-1316</a></p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2024 Brighter Tunnel. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
