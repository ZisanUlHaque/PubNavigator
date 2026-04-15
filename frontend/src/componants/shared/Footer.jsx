// Footer.jsx
import React from "react";
import {
  FaFacebook,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaPhoneAlt,
} from "react-icons/fa";
import { BsInstagram, BsTwitterX, BsLinkedin, BsYoutube } from "react-icons/bs";
import { Link } from "react-router";
import Logo from "./Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Browse Papers", path: "/papers" },
    { name: "Submit Paper", path: "/submit" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const resourceLinks = [
    { name: "Author Guidelines", path: "/guidelines" },
    { name: "Review Process", path: "/review-process" },
    { name: "Publication Ethics", path: "/ethics" },
    { name: "FAQs", path: "/faq" },
    { name: "Privacy Policy", path: "/privacy" },
  ];

  const socialLinks = [
    {
      icon: <FaFacebook />,
      path: "https://facebook.com",
      label: "Facebook",
      color: "hover:text-blue-600",
    },
    {
      icon: <BsInstagram />,
      path: "https://instagram.com",
      label: "Instagram",
      color: "hover:text-pink-500",
    },
    {
      icon: <BsTwitterX />,
      path: "https://twitter.com",
      label: "Twitter",
      color: "hover:text-gray-800",
    },
    {
      icon: <BsLinkedin />,
      path: "https://linkedin.com",
      label: "LinkedIn",
      color: "hover:text-blue-700",
    },
    {
      icon: <BsYoutube />,
      path: "https://youtube.com",
      label: "YouTube",
      color: "hover:text-red-600",
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#1e3a8a] to-[#0f172a] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & About Section */}
          <div className="space-y-6">
            {/* Custom White Logo for Footer */}
            <Link to="/" className="inline-block">
              <div className="-mt-3">
                {" "}
                <Logo></Logo>
              </div>
            </Link>

            <p className="text-gray-300 text-sm leading-relaxed -mt-5">
              The official journal management system of Pundra University of
              Science & Technology. Empowering researchers to publish quality
              academic papers.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white text-lg transition-all duration-300 hover:bg-white ${social.color} hover:scale-110`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#f59e0b] rounded-full"></span>
            </h3>
            <ul className="space-y-3 mt-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-[#f59e0b] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-[#f59e0b] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white relative inline-block">
              Resources
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#f59e0b] rounded-full"></span>
            </h3>
            <ul className="space-y-3 mt-4">
              {resourceLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-[#f59e0b] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-[#f59e0b] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#f59e0b] rounded-full"></span>
            </h3>
            <ul className="space-y-4 mt-4">
              {/* Address */}
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#f59e0b]/20 text-[#f59e0b] flex-shrink-0">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Rangpur Rd, Gokul</p>
                  <p className="text-gray-300 text-sm">
                    Bogura-5800, Bangladesh
                  </p>
                </div>
              </li>

              {/* Email */}
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#f59e0b]/20 text-[#f59e0b] flex-shrink-0">
                  <FaEnvelope />
                </div>
                <a
                  href="mailto:journal@pundrauniversity.edu.bd"
                  className="text-gray-300 text-sm hover:text-[#f59e0b] transition-colors duration-200"
                >
                  journal@pundrauniversity.edu.bd
                </a>
              </li>

              {/* Phone */}
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#f59e0b]/20 text-[#f59e0b] flex-shrink-0">
                  <FaPhone />
                </div>
                <div>
                  <a
                    href="tel:+8801713377076"
                    className="text-gray-300 text-sm hover:text-[#f59e0b] transition-colors duration-200 block"
                  >
                    +880 1713-377076
                  </a>
                </div>
              </li>

              {/* Telephone */}
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#f59e0b]/20 text-[#f59e0b] flex-shrink-0">
                  <FaPhoneAlt />
                </div>
                <a
                  href="tel:587115894"
                  className="text-gray-300 text-sm hover:text-[#f59e0b] transition-colors duration-200"
                >
                  587115894
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold text-white">
                Subscribe to Our Newsletter
              </h4>
              <p className="text-gray-400 text-sm mt-1">
                Get updates on new publications and announcements
              </p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-l-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#f59e0b] w-full md:w-64 transition-colors duration-200"
              />
              <button className="px-6 py-3 bg-[#f59e0b] text-white font-semibold rounded-r-lg hover:bg-[#d97706] transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10 bg-[#0f172a]">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear}{" "}
              <span className="text-[#f59e0b] font-semibold">
                Pundra University
              </span>
              . All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                to="/privacy"
                className="text-gray-400 text-sm hover:text-[#f59e0b] transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-gray-400 text-sm hover:text-[#f59e0b] transition-colors duration-200"
              >
                Terms of Service
              </Link>
              <Link
                to="/sitemap"
                className="text-gray-400 text-sm hover:text-[#f59e0b] transition-colors duration-200"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
