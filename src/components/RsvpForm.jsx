"use client";

import { MdOutlineMail } from "react-icons/md";

export default function RsvpForm() {
  return (
    
    <div className="relative left-10 w-full bg-gradient-to-b from-gray-100 via-gray-200 to-gray-400 py-10 ">
      <div className="mx-auto flex max-w-4xl items-center gap-6 px-4">
        
        {/* Email input */}
        <div className="flex h-14 flex-1 items-center gap-3 rounded-lg border border-gray-300 bg-gray-200 px-4 text-gray-700">
          <MdOutlineMail className="text-xl text-gray-500" />
          <input
            type="email"
            required
            placeholder="Enter your work email to confirm your attendance"
            className="w-full bg-transparent text-sm outline-none placeholder-gray-500"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="
            h-14 rounded-lg px-10 text-lg font-semibold text-white
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
