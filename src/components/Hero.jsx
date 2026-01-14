"use client";

import Image from "next/image";
import { MdOutlineCalendarToday, MdOutlineLocationOn } from "react-icons/md";

export default function Hero() {
  return (
   <section className="min-h-screen hero-bg relative text-white">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />

      {/* Content */}
      <div className="relative z-10 min-h-screen max-w-7xl mx-auto px-6 flex items-center">
        <div className="max-w-xl">
          {/* Logo */}
          <Image
            src="/logo.png"
            alt="Simplilearn"
            width={280}
            height={86}
            className="mb-6"
          />

          {/* Badge */}
          <div className="flex items-center gap-3 mb-5">
            <span className="bg-cyan-400 text-black px-3 py-1 text-xs font-semibold rounded">
              Invite-Only
            </span>
            <span className="text-sm text-cyan-300">
              An Executive Roundtable – Launch
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-[42px] leading-tight font-bold text-[#F5B33D]">
            The Skills That Matter Next:
            <br />
            Preparing Your Workforce
            <br />
            & Leaders for the AI Era
          </h1>

          {/* Meta */}
          <div className="mt-5 space-y-2 text-sm">
            <p className="flex items-center gap-2">
              <MdOutlineCalendarToday />
              <span>February 20, 2026</span>
            </p>

            <p className="flex items-center gap-2">
              <MdOutlineLocationOn />
              <span>Chamberlain’s Steak & Fish House, Dallas</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
