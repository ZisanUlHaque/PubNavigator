import React from "react";
import { Link } from "react-router";
import hero from "../../assets/hero1.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-amber-50">
      {/* Background Blobs */}
      <div className="absolute top-10 left-10 h-40 w-40 rounded-full bg-blue-200/30 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 h-52 w-52 rounded-full bg-amber-200/30 blur-3xl animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 py-14 md:py-20 lg:py-10 flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-md border border-blue-100 text-[#1e3a8a] font-semibold text-sm mb-5 hover:scale-105 transition">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
            Journal of Pundra University of Science & Technology
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
            Simplify Your
            <span className="block bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] bg-clip-text text-transparent">
              Research Publication
            </span>
          </h1>

          <p className="mt-5 text-gray-600 text-base md:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            A complete digital journal workflow for{" "}
            <span className="font-semibold text-gray-800">authors</span>,{" "}
            <span className="font-semibold text-gray-800">reviewers</span>,{" "}
            <span className="font-semibold text-gray-800">editors</span>, and{" "}
            <span className="font-semibold text-gray-800">administrators</span>.
            Submit manuscripts, manage peer review, handle revisions, and
            publish papers online from one place.
          </p>
          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Link
              to="/submit"
              className="px-7 py-3.5 rounded-2xl bg-[#1e3a8a] text-white font-semibold shadow-lg hover:bg-[#163075] hover:-translate-y-1 transition duration-300"
            >
              Submit Paper
            </Link>

            <Link
              to="/papers"
              className="px-7 py-3.5 rounded-2xl border border-[#1e3a8a] text-[#1e3a8a] font-semibold bg-white hover:bg-blue-50 hover:-translate-y-1 transition duration-300"
            >
              Browse Journal
            </Link>
          </div>

          {/* Mini Features */}
          <div className="mt-6 flex flex-wrap gap-3 justify-center lg:justify-start">
            <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 shadow-sm hover:shadow-md transition">
              Online Submission
            </span>
            <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 shadow-sm hover:shadow-md transition">
              Peer Review System
            </span>
            <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 shadow-sm hover:shadow-md transition">
              DOI Generation
            </span>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto lg:mx-0">
            <div className="bg-white/90 backdrop-blur-md border border-white shadow-lg rounded-2xl p-5 hover:-translate-y-1 transition duration-300">
              <h3 className="text-2xl font-extrabold text-[#1e3a8a]">500+</h3>
              <p className="text-sm text-gray-600 mt-1">Research Papers</p>
            </div>

            <div className="bg-white/90 backdrop-blur-md border border-white shadow-lg rounded-2xl p-5 hover:-translate-y-1 transition duration-300">
              <h3 className="text-2xl font-extrabold text-[#f59e0b]">120+</h3>
              <p className="text-sm text-gray-600 mt-1">Expert Reviewers</p>
            </div>

            <div className="bg-white/90 backdrop-blur-md border border-white shadow-lg rounded-2xl p-5 col-span-2 md:col-span-1 hover:-translate-y-1 transition duration-300">
              <h3 className="text-2xl font-extrabold text-green-600">30+</h3>
              <p className="text-sm text-gray-600 mt-1">Published Issues</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 relative group">
          {/* Decorative background */}
          <div className="absolute -top-6 -left-6 h-28 w-28 bg-blue-200/40 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-6 -right-6 h-28 w-28 bg-amber-200/40 rounded-full blur-2xl"></div>

          {/* Main image card */}
          <div className="relative ">
            <img
              src={hero}
              alt="Research Journal Hero"
              className="w-full max-w-[580px] mx-auto h-[320px] md:h-[430px] object-cover rounded-[24px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
