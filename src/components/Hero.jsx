"use client";

import Image from "next/image";
import { MdOutlineCalendarToday, MdOutlineLocationOn } from "react-icons/md";

export default function Hero() {
  return (
    <section className="relative lg:min-h-screen text-white">
      
      {/* MOBILE BACKGROUND */}
      <div className="sm-hero-bg absolute inset-0 block lg:hidden" />

      {/* DESKTOP BACKGROUND */}
      <div className="hero-bg absolute inset-0 hidden md:block" />

      {/* CONTENT */}
      <div
        className="
          relative z-10
          lg:min-h-screen
          max-w-7xl mx-auto
          px-6
          flex
          items-start
          pt-10
          pb-10
          lg:pt-0
          lg:items-center
        "
      >
        <div>
          {/* LOGO */}
          <Image
            src="/logo.png"
            alt="Simplilearn"
            width={280}
            height={86}
            className="mb-6 w-[150px] lg:w-[280px] lg:h-[86px]"
          />

          {/* BADGE */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-[14px] lg:text-[25px] font-[700] bg-[#00FFFF] text-[#25286A] px-3 py-1 rounded-[6px]">
              Invite-Only
            </span>

            <span className="text-[16px] lg:text-[24px] font-[700] text-[#00FFFF]">
              An Executive Roundtable – Launch
            </span>
          </div>

          {/* HEADING */}
          <div className="text-[#F5B33D] leading-tight">
            <p className="text-[26px] lg:text-[46px] font-[900]">
              Skills That Matter Next:
            </p>
            <p className="text-[22px] lg:text-[46px] font-[700]">
              Preparing Your Workforce
            </p>
            <p className="text-[22px] lg:text-[46px] font-[700]">
              Leaders for the AI Era
            </p>
          </div>

          {/* META */}
          <div className="mt-6 space-y-2">
            <p className="flex items-center gap-2">
              <MdOutlineCalendarToday size={22} />
              <span className="text-[16px] lg:text-[30px] font-[900]">
                February 20, 2026
              </span>
            </p>

            <p className="flex items-center gap-2">
              <MdOutlineLocationOn size={22} />
              <span className="text-[16px] lg:text-[30px] font-[900]">
                Chamberlain’s Steak & Fish House, Dallas
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
