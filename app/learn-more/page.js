/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import emailjs from "@emailjs/browser";



export default function LearnMore() {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false); // New state for submission status
  const [submitting, setSubmitting] = useState(false); // New state to track submitting status

  const sendEmail = (e) => {
    e.preventDefault();
    setSubmitting(true); // Set submitting to true

    emailjs
      .sendForm(
        "service_z68t7kv",
        "template_s2pu4c6",
        form.current,
        "7D-QDpZH6Dfw3DdgI"
      )
      .then(
        (result) => {
          setSubmitted(true); // Set submitted to true on success
          setSubmitting(false); // Reset submitting status
        },
        (error) => {
          console.log(error.text);
          setSubmitting(false); // Reset submitting status on error
        }
      );
  };

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
            <Link href="/" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>{" "}
          Back
        </Link>
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Information Request
        </h2>
        <p className="mt-2 text-md leading-8 text-gray-600">
          Fill out the form to get more information about our services and
          pricing{" "}
        </p>
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        action="#"
        method="POST"
        className="mx-auto mt-2 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          {/* Email field */}
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="mt-2.5 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
          {/* Name field */}
          <div className="sm:col-span-2">
            <label
              htmlFor="name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="mt-2.5 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>

          {/* Message field */}
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={4}
              className="mt-2.5 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
        </div>

        <div className="mt-10">
          <button
            type="submit"
            disabled={submitting} // Disable button while submitting
            className="block w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {submitting ? "Sending..." : "Request Information"}
          </button>
        </div>
      </form>
      {submitted && ( // Display confirmation message
        <div className="text-center mt-4 text-green-600">
          Your request has been sent successfully!
        </div>
      )}
      <div className="mt-8 text-center">
        <p className="text-md text-gray-600">Or</p>
        <a
          href="https://calendly.com/brightertunnel/chat-with-brighter-tunnel"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block rounded-md bg-gray-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-500"
        >
          Schedule a Meeting with Brighter Tunnel 
        </a>
      </div>
    </div>
  );
}
