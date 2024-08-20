"use client";
import { useState } from "react";
import emailjs from "emailjs-com";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectDescription: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailBody = `
    You have received a new request from a customer:

    Full Name: ${formData.name}
    Email: ${formData.email}
    Phone: ${formData.phone}
    Project Description: ${formData.projectDescription}

    Best wishes,
    BrighterTunnel.com
  `;

    const emailParams = {
      to_email: "mubarak@brightertunnel.com", // Replace with your email
      message: emailBody,
      reply_to: formData.email,
      from_name: formData.name,
    };

    try {
      await emailjs.send(
        "default_service",
        "template_1jr7eem",
        emailParams,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID // Replace with your EmailJS User ID
      );

      alert("Message Sent Successfully!");
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("An error occurred, please try again.");
    }

    setFormData({
      name: "",
      email: "",
      phone: "",
      projectDescription: "",
    });
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="bg-gray-100 text-gray-900 py-4 md:py-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4 md:px-0">
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <Image src="/icon.png" alt="Brighter Tunnel Logo" width={40} height={40} />
              <span className="ml-2 text-2xl md:text-3xl font-semibold">Brighter Tunnel</span>
            </div>
          </Link>
          <nav>
            <ul className="hidden md:flex space-x-6">
              <li>
                <Link href="#services">
                  <span className="hover:text-gray-500 transition-colors cursor-pointer">Services</span>
                </Link>
              </li>
              <li>
                <Link href="#why-us">
                  <span className="hover:text-gray-500 transition-colors cursor-pointer">Why Us</span>
                </Link>
              </li>
              <li>
                <Link href="#contact">
                  <span className="hover:text-gray-500 transition-colors cursor-pointer">Contact</span>
                </Link>
              </li>
            </ul>
            <div className="md:hidden">
              {/* Implement a hamburger menu for mobile */}
              <button className="text-gray-900 focus:outline-none">
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
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gray-100 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-gray-900">Empower Your Business with Tailored Software</h1>
            <p className="mb-8 text-base md:text-lg text-gray-700">
              At Brighter Tunnel, we craft custom software solutions that align perfectly with your business goals, driving growth and efficiency.
            </p>
            <Link href="#contact">
              <span className="inline-block bg-gray-900 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-700 transition">Get Started</span>
            </Link>
            <div className="mt-6">
              <a
                href="tel:7653511316"
                className="inline-block bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-blue-500 transition"
              >
                Call Us: 765-351-1316
              </a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-0">
            <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-gray-900">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-gray-100 shadow-md rounded-lg p-8 hover:shadow-lg transition">
                <h3 className="text-2xl font-medium mb-4 text-gray-900">Custom Software Development</h3>
                <p className="text-gray-700">We build software tailored to your unique business needs, ensuring seamless integration and performance.</p>
              </div>
              <div className="bg-gray-100 shadow-md rounded-lg p-8 hover:shadow-lg transition">
                <h3 className="text-2xl font-medium mb-4 text-gray-900">Technical Consulting</h3>
                <p className="text-gray-700">Expert advice to guide your technology strategy and investment decisions, with a focus on long-term success.</p>
              </div>
              <div className="bg-gray-100 shadow-md rounded-lg p-8 hover:shadow-lg transition">
                <h3 className="text-2xl font-medium mb-4 text-gray-900">Technical Hiring</h3>
                <p className="text-gray-700">We help you find and onboard top engineering talent to drive your projects forward.</p>
              </div>
              <div className="bg-gray-100 shadow-md rounded-lg p-8 hover:shadow-lg transition">
                <h3 className="text-2xl font-medium mb-4 text-gray-900">Technical Training</h3>
                <p className="text-gray-700">Equip your team with the latest skills and knowledge through our comprehensive training programs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section id="why-us" className="py-16 md:py-24 bg-gray-100">
          <div className="container mx-auto px-4 md:px-0">
            <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-gray-900">Why Brighter Tunnel?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white shadow-md rounded-lg p-8 hover:shadow-lg transition">
                <h3 className="text-2xl font-medium mb-4 text-gray-900">Personalized Solutions</h3>
                <p className="text-gray-700">We tailor every project to fit your specific business needs, delivering solutions that work.</p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-8 hover:shadow-lg transition">
                <h3 className="text-2xl font-medium mb-4 text-gray-900">Experienced Professionals</h3>
                <p className="text-gray-700">Our team brings decades of expertise in software development, ensuring quality and reliability.</p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-8 hover:shadow-lg transition">
                <h3 className="text-2xl font-medium mb-4 text-gray-900">Collaborative Partnership</h3>
                <p className="text-gray-700">We work closely with your team, fostering communication and a smooth workflow.</p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-8 hover:shadow-lg transition">
                <h3 className="text-2xl font-medium mb-4 text-gray-900">Proven Success</h3>
                <p className="text-gray-700">Our track record speaks for itself—successful projects across various industries.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 bg-gray-200">
          <div className="container mx-auto px-4 md:px-0">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-gray-900">Contact Us</h2>
            <p className="text-md md:text-md text-center mb-8 text-gray-700">Our Software experts will contact you within 24 hours</p>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700">Project Description (Optional)</label>
                <textarea
                  name="projectDescription"
                  id="projectDescription"
                  value={formData.projectDescription}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
                  rows="5"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gray-900 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-700 transition"
              >
                Send Message
              </button>
            </form>
            <div className="text-center mt-8">
              <p className="text-lg text-gray-700">Or call us directly:</p>
              <p className="text-xl font-semibold mt-2 text-gray-900">
                <a href="tel:7653511316" className="hover:underline">
                  765-351-1316
                </a>{" "}
                or{" "}
                <a href="tel:6128149554" className="hover:underline">
                  612-814-9554
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-200 py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Brighter Tunnel. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
