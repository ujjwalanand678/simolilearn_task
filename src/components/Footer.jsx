import Image from "next/image";
import { MdOutlineEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="footer-bg  min-h-[475px] text-white flex items-center">
   
      <div className="max-w-7xl mx-auto px-6 w-full">
        <p className="mb-6 text-[30px] font-[900] text-white">
          Space is limited.
        </p>

        <div className="mt-10 flex  gap-4">
          <div className="flex h-[81px] w-[606px] bg-[#E7E7E7E5]/90 flex-1 items-center gap-3 rounded-lg border border-gray-300 px-4">
            <MdOutlineEmail size={26} color="##434343B2/70" />
            <input
              type="email"
              placeholder="Enter your work email to confirm your attendance"
              className="w-full text-[20px] text-black font-[400] outline-none"
            />
          </div>

          <button className="h-[81px] w-[251px] rounded-[8px] bg-[#F5AB40]/90 px-8 text-[29px] font-[700] text-white">
            RSVP Now
          </button>
        </div>

        <div className="grid grid-cols-2 mt-30 text-[20px] font-[500] items-center ">
          <div>
            {" "}
            <Image
              src="/logo.png"
              alt="Simplilearn"
              width={280}
              height={86}
              className="mb-6"
            />
          </div>
          <div>© 2009–2025 Simplilearn Solutions. All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  );
}
