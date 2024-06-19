"use client"
import Head from 'next/head';
import Image from 'next/image';
import logo from "@/app/icon.png";
import { useState } from 'react';

export default function Bootcamp() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <Head>
        <title>Coding Bootcamp | Brighter Tunnel</title>
        <meta name="description" content="Transform your life in 12 weeks and become a software engineer with expertise in AI." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-4xl mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
        <header className="bg-base-100 text-center py-8">
          <Image src={logo} alt="Brighter Tunnel Logo" width={100} height={100} className="mx-auto" />
          <h1 className="text-4xl font-bold mt-4">Brighter Tunnel | Coding Bootcamp</h1>
          <p className="text-xl mt-2">Transform your life in 12 weeks and become a software engineer with expertise in AI.</p>
        </header>
        <main className="p-8">
          <section className="my-8">
            <h2 className="text-2xl font-bold">Why Choose Our Bootcamp?</h2>
            <p className="mt-4 text-gray-700"> 
              Our bootcamp addresses the common issues in coding bootcamps today by providing:
              </p>
              <ul className="list-disc list-inside mt-2">
                <li>In-person classes </li>
                <li>Small class sizes (max 10 students)</li>
                <li>A comprehensive curriculum focused on software engineering and AI</li>
              </ul>
            
          </section>
          <section className="my-8">
            <h2 className="text-2xl font-bold">Curriculum</h2>
            <p className="mt-4 text-gray-700">
              Our curriculum covers a wide range of topics to ensure you become a proficient software engineer:
              </p>
              <ul className="list-disc list-inside mt-2">
                <li>HTML, CSS, JavaScript</li>
                <li>ReactJS, NodeJS, SQL</li>
                <li>Python, Flask</li>
                <li>AI and Machine Learning</li>
              </ul>
          </section>
          <section className="my-8">
            <h2 className="text-2xl font-bold">Details</h2>
              <ul className="list-disc list-inside mt-2">
                <li><strong>Location:</strong> Minneapolis, MN (In person)</li>
                <li><strong>Cost:</strong> $10,999</li>
                <li><strong>Duration:</strong> 12 Weeks (60 hours a week)</li>
                <li><strong>Tentative Start Date:</strong> July 2024</li>
                <li><strong>Class Size:</strong> Up to 10 students</li>
              </ul>
          </section>
          <section className="my-8 text-center">
            <h2 className="text-2xl font-bold text-blue-800">Join Us and Transform Your Future</h2>
            <p className="mt-4 text-gray-700">Interested in becoming a part of our first cohort? Show your interest below or email us at <a href="mailto:Mubarak@brightertunnel.com" className="text-blue-800">Mubarak@brightertunnel.com</a></p>
            <button
              onClick={handleModalOpen}
              className="bg-blue-600 text-white py-2 px-6 rounded-full mt-3 hover:bg-blue-700 transition duration-200"
            >
              Show Your Interest
            </button>
          </section>
        </main>
        <footer className="bg-neutral text-white text-center py-4">
          <p>Contact us: <a href="mailto:Mubarak@brightertunnel.com" className="text-primary">Mubarak@brightertunnel.com</a></p>
          <p>&copy; 2024 Brighter Tunnel. All rights reserved.</p>
        </footer>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl mx-auto">
            <div className="flex justify-end">
              <button onClick={handleModalClose} className="text-gray-500 hover:text-gray-700">&times;</button>
            </div>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSeSWJEBC4gHFYfsm1h7bUGq3RrTkg2cpjz-WQVwU-MuMN1eFA/viewform?embedded=true"
              width="640"
              height="721"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
            >Loading…</iframe>
          </div>
        </div>
      )}
    </div>
  );
}
