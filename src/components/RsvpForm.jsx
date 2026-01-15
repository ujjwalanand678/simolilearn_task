"use client";

import { MdOutlineMail } from "react-icons/md";

export default function RsvpForm() {
  return (
    <div
      className="
        flex justify-start  w-full py-10
        bg-transparent
        md:bg-gradient-to-b md:from-gray-100 md:via-gray-200 md:to-gray-400
      "
    >
      <div
        className="
          mx-auto w-[430px] lg:max-w-4xl px-4
          flex flex-col gap-4
          md:flex-row md:items-center md:gap-6
        "
      >
        {/* Email input */}
        <div
          className="
            flex items-center gap-3
            rounded-[3px] border border-gray-300 bg-gray-200 px-3 text-gray-700
          "
        >
          <MdOutlineMail className="text-[33px] text-gray-500" />
          <input
            type="email"
            required
            placeholder="Enter your work email to confirm your attendance"
            className="w-[389px] h-[45px] lg:w-[606px] lg:h-[81px] bg-transparent text-[20px] outline-none placeholder-gray-500"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="
            h-[45px] w-[139px] md:w-auto
            rounded-[5px] px-2 text-[15px] font-[700] text-white
            bg-gradient-to-br from-[#F5B33D] to-[#F59E0B]
            shadow-md hover:shadow-lg transition
          "
        >
          RSVP Now
        </button>
      </div>
    </div>
  );
}
