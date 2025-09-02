"use client";
import Header from "@/components/Header";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const jobSites = [
  "https://boards.greenhouse.io/airship",
  "https://boards.greenhouse.io/acryldata",
  "https://boards.greenhouse.io/adim",
  "https://boards.greenhouse.io/affirm",
  "https://boards.greenhouse.io/airbyte",
  "https://boards.greenhouse.io/angi",
  "https://boards.greenhouse.io/applovin",
  "https://boards.greenhouse.io/assembled",
  "https://boards.greenhouse.io/babylist",
  "https://boards.greenhouse.io/betterup",
  "https://boards.greenhouse.io/betterworks",
  "https://boards.greenhouse.io/blockdaemon",
  "https://boards.greenhouse.io/branch",
  "https://boards.greenhouse.io/bubble",
  "https://boards.greenhouse.io/carta",
  "https://boards.greenhouse.io/cityblockhealth",
  "https://boards.greenhouse.io/clearcover",
  "https://boards.greenhouse.io/clipboardhealth",
  "https://boards.greenhouse.io/code42",
  "https://boards.greenhouse.io/creditkarma",
  "https://boards.greenhouse.io/doxo",
  "https://boards.greenhouse.io/edo",
  "https://boards.greenhouse.io/eventbriteinc",
  "https://boards.greenhouse.io/expa",
  "https://boards.greenhouse.io/ezcaterinc",
  "https://boards.greenhouse.io/fathom",
  "https://boards.greenhouse.io/garnerhealth",
  "https://boards.greenhouse.io/gather",
  "https://boards.greenhouse.io/gleanwork",
  "https://boards.greenhouse.io/healthie",
  "https://boards.greenhouse.io/himshers",
  "https://boards.greenhouse.io/homebound",
  "https://boards.greenhouse.io/humane",
  "https://boards.greenhouse.io/khanacademy",
  "https://boards.greenhouse.io/lithic",
  "https://boards.greenhouse.io/magiceden",
  "https://boards.greenhouse.io/mntn",
  "https://boards.greenhouse.io/myfitnesspal",
  "https://boards.greenhouse.io/notion",
  "https://boards.greenhouse.io/nuna",
  "https://boards.greenhouse.io/onesignal",
  "https://boards.greenhouse.io/onxmaps",
  "https://boards.greenhouse.io/pacaso",
  "https://boards.greenhouse.io/paretocaptiveservicesllc",
  "https://boards.greenhouse.io/pearlhealth",
  "https://boards.greenhouse.io/peregrinetechnologies",
  "https://boards.greenhouse.io/philo",
  "https://boards.greenhouse.io/postman",
  "https://boards.greenhouse.io/postscript",
  "https://boards.greenhouse.io/raft",
  "https://boards.greenhouse.io/recharge",
  "https://boards.greenhouse.io/reddit",
  "https://boards.greenhouse.io/retool",
  "https://boards.greenhouse.io/rinsed",
  "https://boards.greenhouse.io/runwayml",
  "https://boards.greenhouse.io/rvohealth",
  "https://boards.greenhouse.io/safebase",
  "https://boards.greenhouse.io/sentilink",
  "https://boards.greenhouse.io/sonyinteractiveentertainmentglobal",
  "https://boards.greenhouse.io/spotoncorporate",
  "https://boards.greenhouse.io/tavus",
  "https://boards.greenhouse.io/vannevarlabs",
  "https://boards.greenhouse.io/vgw",
  "https://boards.greenhouse.io/whatnot",
  "https://boards.greenhouse.io/zscaler",
  "https://boards.greenhouse.io/zynga",
  "https://jobs.ashbyhq.com/cointracker",
  "https://jobs.ashbyhq.com/flashbots.net",
  "https://jobs.ashbyhq.com/moderntreasury",
  "https://jobs.ashbyhq.com/notable",
  "https://jobs.ashbyhq.com/oneapp",
  "https://jobs.ashbyhq.com/OpenSea",
  "https://jobs.ashbyhq.com/openstore",
  "https://jobs.ashbyhq.com/peek",
  "https://jobs.ashbyhq.com/permitflow",
  "https://jobs.ashbyhq.com/Replo",
  "https://jobs.ashbyhq.com/sift",
  "https://jobs.lever.co/angel",
  "https://jobs.lever.co/AngleHealth",
  "https://jobs.lever.co/Anthropic",
  "https://jobs.lever.co/atomic",
  "https://jobs.lever.co/AviveSolutions",
  "https://jobs.lever.co/bonusly",
  "https://jobs.lever.co/boxcast",
  "https://jobs.lever.co/brightwheel",
  "https://jobs.lever.co/brillio-2",
  "https://jobs.lever.co/businesswire",
  "https://jobs.lever.co/Chord",
  "https://jobs.lever.co/cortex",
  "https://jobs.lever.co/empower.me",
  "https://jobs.lever.co/entrata",
  "https://jobs.lever.co/floqast",
  "https://jobs.lever.co/gravie",
  "https://jobs.lever.co/hallow",
  "https://jobs.lever.co/includedhealth",
  "https://jobs.lever.co/ionicpartners",
  "https://jobs.lever.co/lyrahealth",
  "https://jobs.lever.co/matchgroup",
  "https://jobs.lever.co/owner",
  "https://jobs.lever.co/plaid",
  "https://jobs.lever.co/postera",
  "https://jobs.lever.co/provi",
  "https://jobs.lever.co/revinate",
  "https://jobs.lever.co/scribd",
  "https://jobs.lever.co/Terraformation",
  "https://jobs.lever.co/vida",
  "https://jobs.lever.co/windfalldata",
];

const JobBoardPage = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 3000); // Delay of 3 seconds
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Header />
      
      {/* Hero Section with Dark Background */}
      <div className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link href="/" className="inline-flex items-center px-4 py-2 text-blue-200 hover:text-white transition-colors duration-200 mb-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 mr-2"
            >
              <path
                fillRule="evenodd"
                d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
                clipRule="evenodd"
              />
            </svg>
            Back to Home
          </Link>
          
          {/* Page Header */}
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Actively Hiring
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Companies That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-300">
                Actually Respond
              </span>
            </h1>
            
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              We only list companies that get back to you after applying. 
              No more black holes, no more wasted applications.
            </p>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-md w-full mx-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Ace Your Next Technical Interview
              </h2>
              <p className="text-gray-600 mb-6">
                Landing an interview is super hard; let us help you make the most out of it.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    window.open(
                      "https://cal.com/brighter-tunnel/15min"
                    );
                    handleCloseModal();
                  }}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105"
                >
                  Schedule Meeting
                </button>
                <button
                  onClick={handleCloseModal}
                  className="flex-1 bg-gray-100 text-gray-700 px-4 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-200"
                >
                  No Thanks
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Job Sites Table */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-gray-50 to-blue-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">#</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Company Job Board</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {jobSites.map((url, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4">
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200 flex items-center group"
                        >
                          {url}
                          <svg className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          <svg className="w-2 h-2 mr-1" fill="currentColor" viewBox="0 0 8 8">
                            <circle cx="4" cy="4" r="3" />
                          </svg>
                          Active
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Land Your Dream Engineering Job?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Don&apos;t just apply blindly. Get the interview coaching you need to stand out from the crowd.
              </p>
              <button
                onClick={() => {
                  window.open(
                    "https://cal.com/brighter-tunnel/15min"
                  );
                }}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Schedule Meeting
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

const Footer = () => (
  <footer className="bg-gray-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <p className="text-gray-400 text-sm">
          © 2024 Brighter Tunnel. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default JobBoardPage;
