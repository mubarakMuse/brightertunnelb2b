import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

// CHATGPT PROMPT TO GENERATE YOUR PRIVACY POLICY — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple privacy policy for my website. Here is some context:
// - Website: https://shipfa.st
// - Name: ShipFast
// - Description: A JavaScript code boilerplate to help entrepreneurs launch their startups faster
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Purpose of Data Collection: Order processing
// - Data sharing: we do not share the data with any other parties
// - Children's Privacy: we do not collect any data from children
// - Updates to the Privacy Policy: users will be updated by email
// - Contact information: marc@shipfa.st

// Please write a simple privacy policy for my site. Add the current date.  Do not add or explain your reasoning. Answer:

export const metadata = getSEOTags({
  title: `Privacy Policy | ${config.appName}`,
  canonicalUrlRelative: "/privacy-policy",
});

const PrivacyPolicy = () => {
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
          </svg>{" "}
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Privacy Policy for {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Privacy Policy

Effective Date: March 5, 2024

Brighter Tunnel ("we," "us," or "our") operates the https://brighterTunnel.com website ("Website") and provides the technical interviewing services ("Service"). This Privacy Policy outlines our practices regarding the collection, use, and protection of your information.

1. Purpose of Data Collection
We collect personal information from client companies and their candidates solely for the purpose of order processing to facilitate the provision of our Service.

2. Data Sharing
We do not share any collected data with third parties. Your information is solely used for the purposes outlined in this Privacy Policy.

3. Children's Privacy
We do not knowingly collect any personal information from children under the age of 13. If you believe that we have inadvertently collected such information, please contact us immediately at Mubarak@brightertunnel.com, and we will take steps to remove it.

4. Updates to the Privacy Policy
Users will be notified of any updates to this Privacy Policy via email.

5. Contact Information
If you have any questions or concerns about our Privacy Policy, please contact us at Mubarak@brightertunnel.com.

Thank you for entrusting Brighter Tunnel with your information.`}
        </pre>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
