"use client";

import { MdOutlineEmail } from "react-icons/md";
import { submitRsvp } from "@/actions/submitRsvp";

export default function RsvpForm() {
  return (
    <form
      action={submitRsvp}
      className="mx-7 pb-5 lg:mx-20 lg:py-10"
    >
      <div className="mt-10 flex flex-col lg:flex-row gap-4">
        <div className="h-[45px] w-[389px] flex lg:h-[81px] lg:w-[606px] bg-[#E7E7E733] items-center gap-3 rounded-lg border border-gray-300 px-4">
          <MdOutlineEmail size={33} color="#b5b5b5" />
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your work email to confirm your attendance"
            className="w-full text-[13px] lg:text-[20px] text-black font-[400] outline-none"
          />
        </div>

        <button
          type="submit"
          className="h-[45px] w-[139px] text-[15px] lg:h-[81px] lg:w-[251px] rounded-[8px] bg-[#F5AB40]/90 px-8 lg:text-[29px] font-[700] text-white"
        >
          RSVP Now
        </button>
      </div>
    </form>
  );
}
