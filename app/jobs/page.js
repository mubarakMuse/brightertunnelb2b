"use client";
import Header from "@/components/Header";
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
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold mb-4">
              Ace Your Next Technical Interview
            </h2>
            <p className="mb-4">
              Landing an interview is super hard; let us help you make the most
              out of it.
            </p>
            <div className="flex justify-around">
              <button
                onClick={() => {
                  window.open(
                    "https://calendly.com/brightertunnel/1-hr-technical-coding-interview"
                  );
                  handleCloseModal();
                }}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Learn More
              </button>
              <button
                onClick={handleCloseModal}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                No Thanks
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-6">
          Actively Hiring Companies
        </h1>
        <h1 className="text-1xl text-center mb-6">
          We only list companies that actully get back to you after applying
        </h1>

        <div className="overflow-x-auto">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th>#</th>
                <th>Job Site URL</th>
              </tr>
            </thead>
            <tbody>
              {jobSites.map((url, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link link-hover"
                    >
                      {url}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
};

const Footer = () => (
  <footer className="bg-white shadow-lg">
    <div className="container mx-auto px-6 py-4">
      <div className="flex flex-col items-center">
        <p className="text-gray-500 text-sm text-center">
          © 2024 Brighter Tunnel. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);
export default JobBoardPage;
