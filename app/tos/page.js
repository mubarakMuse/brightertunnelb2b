import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

// CHATGPT PROMPT TO GENERATE YOUR TERMS & SERVICES — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple Terms & Services for my website. Here is some context:
// - Website: https://shipfa.st
// - Name: ShipFast
// - Contact information: marc@shipfa.st
// - Description: A JavaScript code boilerplate to help entrepreneurs launch their startups faster
// - Ownership: when buying a package, users can download code to create apps. They own the code but they do not have the right to resell it. They can ask for a full refund within 7 day after the purchase.
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Link to privacy-policy: https://shipfa.st/privacy-policy
// - Governing Law: France
// - Updates to the Terms: users will be updated by email

// Please write a simple Terms & Services for my site. Add the current date. Do not add or explain your reasoning. Answer:

export const metadata = getSEOTags({
  title: `Terms and Conditions | ${config.appName}`,
  canonicalUrlRelative: "/tos",
});

const TOS = () => {
  return (
    <main className="max-w-xl mx-auto">
      <div className="p-5">
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
          </svg>
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Terms and Conditions for {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Terms of Service

Effective Date: March 5, 2024

These Terms of Service ("Terms") govern your use of the Brighter Tunnel website ("Website") and the services provided by Brighter Tunnel ("Service"). By accessing or using the Website or Service, you agree to be bound by these Terms.

1. Description of Service
Brighter Tunnel offers a technical interviewing solution for companies seeking to hire skilled engineers. We conduct candidate technical interviews on behalf of client companies and provide interview performance results and recommendations for next steps. Client companies pay Brighter Tunnel a fee per interview.

2. User Data Collection
We collect user data from client companies, including company name, email, and payment information. We also collect data from candidates to be interviewed, including their name, email, and resume/CV. For more information on how we collect, use, and protect your data, please refer to our Privacy Policy [link to privacy policy].

3. Governing Law
These Terms shall be governed by and construed in accordance with the laws of the United States of America.

4. Updates to the Terms
Users (companies) will be notified of any updates to these Terms via email.

If you have any questions or concerns about these Terms, please contact us at mubarak@brightertunnel.com.

Thank you for choosing Brighter Tunnel.`}
        </pre>
      </div>
    </main>
  );
};

export default TOS;
