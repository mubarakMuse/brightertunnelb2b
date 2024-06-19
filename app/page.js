import Head from 'next/head';
import Image from 'next/image';
import logo from "@/app/icon.png";

export default function Home() {
  const profileInfo = {
    name: "Brighter Tunnel",
    location: "Minneapolis, Minnesota, USA",
    bio: "A Tech Firm providing a diverse set of services",
    bioCards: [
      {
        title: "Coding Bootcamp",
        description: "Transform your life in 12 weeks and become a software engineer with expertise in AI.",
        url: "/bootcamp",
      },
      {
        title: "Interviewing as a Service",
        description: "Hire top software engineers with top-quality technical interviews.",
        url: "/interview",
      },
      {
        title: "Software Consulting",
        description: "Expert consulting to transform ideas into fully functional software solutions.",
        url: "/services/consulting",
      },
      {
        title: "Tech Job Board",
        description: "A list of companies actively hiring Software Engineers",
        url: "/jobs",
      }
    ],
    socialLinks: [
      {
        title: "LinkedIn",
        url: "https://www.linkedin.com/company/brighter-tunnel",
      },
      {
        title: "Email",
        url: "mailto:Mubarak@brightertunnel.com",
      }
    ],
  };

  return (
    <div className="bg-white min-h-screen p-8">
      <Head>
        <title>Brighter Tunnel</title>
        <meta name="description" content="Empowering Your Business with Top Talent, Expert Consulting, and Cutting-Edge Training" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-4xl mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
        <div className="text-center p-8 border-b">
          <div className="w-40 h-40 mx-auto">
            <Image
              src={logo}
              alt="Brighter Tunnel Logo"
              layout="responsive"
              width={160}
              height={160}
              className="rounded-full"
            />
          </div>
          <h1 className="text-4xl font-bold mt-1">{profileInfo.name}</h1>
          <p className="text-gray-700  font-italic mt-1">{profileInfo.bio}</p>
          <p className="text-gray-600 mt-2">{profileInfo.location}</p>
          <div className="flex text-center justify-center space-x-4 mt-4">
            {profileInfo.socialLinks.map((socialLink, index) => (
              <a
                key={index}
                href={socialLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 transition duration-200"
              >
                {socialLink.title}
              </a>
            ))}
          </div>
        </div>
        <div className="p-6">
        <p className="flex text-center text-xl font-semibold justify-center space-x-4 mb-4">Our Services</p>
          <div className="grid text-center grid-cols-1 md:grid-cols-2 gap-6">
            {profileInfo.bioCards.map((card, index) => (
              <div
                key={index}
                className="bg-base-200 p-6 rounded-lg shadow hover:shadow-md transition duration-300"
              >
                <h2 className="text-2xl font-bold">
                  {card.title}
                </h2>
                <p className="text-gray-700 mt-3">{card.description}</p>
                <a
                  href={card.url}
                  className="inline-block mt-4 bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
