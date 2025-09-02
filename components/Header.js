"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/icon.png";
import config from "@/config";

const links = [
  {
    href: "/#features",
    label: "Features",
  },
  {
    href: "/#process",
    label: "Our Process",
  },
 
  {
    href: "/#faq",
    label: "FAQ",
  },
];

const Header = () => {
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // setIsOpen(false) when the route changes (i.e: when the user clicks on a link on mobile)
  useEffect(() => {
    setIsOpen(false);
  }, [searchParams]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link
              className="flex items-center gap-3 shrink-0 group"
              href="/"
              title={`${config.appName} homepage`}
            >
              <div className="relative">
                <Image
                  src={logo}
                  alt={`${config.appName} logo`}
                  className="w-8 h-8 lg:w-10 lg:h-10 transition-transform duration-200 group-hover:scale-110"
                  placeholder="blur"
                  priority={true}
                  width={40}
                  height={40}
                />
              </div>
              <span className={`font-bold text-lg lg:text-xl transition-colors duration-200 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                {config.appName}
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:justify-center lg:gap-8 lg:items-center">
            {links.map((link) => (
              <Link
                href={link.href}
                key={link.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-blue-600 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
                title={link.label}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="https://cal.com/brighter-tunnel/15min"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-200 ${
                isScrolled 
                  ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl' 
                  : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm border border-white/30'
              }`}>
                Schedule Meeting
              </button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className={`p-2 rounded-lg transition-colors duration-200 ${
                isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
              onClick={() => setIsOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50">
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">{config.appName}</span>
                  <Image
                    src={logo}
                    alt={`${config.appName} logo`}
                    className="w-8 h-8"
                    width={32}
                    height={32}
                  />
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                  <div className="py-6">
                    <a
                      href="https://cal.com/brighter-tunnel/15min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setIsOpen(false)}
                    >
                      Schedule Meeting
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
