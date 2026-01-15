import Image from "next/image";
import { MdOutlineEmail } from "react-icons/md";
import { submitRsvp } from "@/actions/submitRsvp";

export default function Footer() {
  return (
    <footer className="footer-bg min-h-[317px] lg:min-h-[475px] text-white flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <p className="mb-6 text-[19px] lg:text-[30px] font-[900] text-white">
          Space is limited.
        </p>

        <form
          action={submitRsvp}
          className="mt-10 flex flex-col lg:flex-row gap-4"
        >
          <div className="h-[45px] w-[389px] flex lg:h-[81px] lg:w-[606px] bg-[#E7E7E7E5]/90 items-center gap-3 rounded-lg border border-gray-300 px-4">
            <MdOutlineEmail size={26} color="#434343" />
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
        </form>

        <div className="flex flex-col mt-11 lg:grid lg:grid-cols-2 lg:mt-30 text-[13px] lg:text-[20px] font-[500] lg:items-center ">
          <div>
            <Image
              src="/logo.png"
              alt="Simplilearn"
              width={280}
              height={86}
              className="mb-2 lg:mb-6 w-[150px] h-[46px] lg:w-[280px] lg:h-[86px]"
            />
          </div>
          <div>© 2009–2025 Simplilearn Solutions. All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  );
}
