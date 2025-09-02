"use client";

import { useRef, useState } from "react";

// <FAQ> component is a lsit of <Item> component
// Just import the FAQ & add your FAQ content to the const faqList

const faqList = [
  {
    question: "What exactly do I get?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        We streamline your hiring process by interviewing software engineer candidates on your behalf. Our service includes scheduling the interview, conducting it, and providing a detailed analysis and recommendation on the candidate post-interview.
      </div>
    ),
  },
  {
    question: "When can candidates schedule interviews?",
    answer: (
      <p>
        Interviews can be scheduled 24/7 at a time that works best for the candidate. They will receive a Cal.com link to choose a suitable time slot.
      </p>
    ),
  },
  {
    question: "I have another question",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Great, we&apos;re here to help! Please feel free to contact us by email at Mubarak@BrighterTunnel.com.
      </div>
    ),
  },
];

const Item = ({ item }) => {
  const accordion = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-4 sm:py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10 hover:bg-gray-50/50 transition-colors duration-200"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
      >
        <span
          className={`flex-1 text-base-content ${isOpen ? "text-blue-500" : ""}`}
        >
          {item?.question}
        </span>
        <svg
          className={`flex-shrink-0 w-5 h-5 sm:w-4 sm:h-4 ml-auto fill-current`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              isOpen && "rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              isOpen && "rotate-180 hidden"
            }`}
          />
        </svg>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out opacity-80 overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-4 sm:pb-5 leading-relaxed text-sm sm:text-base">{item?.answer}</div>
      </div>
    </li>
  );
};

const FAQ = () => {
  return (
    <section className="bg-base-100" id="faq">
      <div className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-8 sm:gap-10 lg:gap-12">
        <div className="flex flex-col text-left basis-1/2">
          <p className="inline-block font-semibold text-blue-500 mb-4 sm:mb-6">FAQ</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Get answers to common questions about our technical interview services.
          </p>
        </div>
        <div className="basis-1/2">
          <ul className="space-y-2">
            {faqList.map((item, index) => (
              <Item key={index} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
