import Image from "next/image";
import { MdOutlineEmail } from "react-icons/md";
import { submitRsvp } from "@/actions/submitRsvp";

export default function InsightsSection() {
  return (
    <section className="bg-white lg:pt-20 pb-10 lg:pb-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-start lg:gap-16 md:grid-cols-2">

          {/* MOBILE IMAGE (TOP) */}
          <div className="relative right-10 md:hidden w-[293px] h-[300px]">
            <Image
              src="/chess.png"
              alt="Chess strategy illustration"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>

          {/* LEFT CONTENT */}
          <div className="w-full md:w-[800px] h-auto md:h-[611px]">
            {/* Heading */}
            <div className="text-[24px] md:text-[40px] font-[900] text-[#F5AB40] w-full md:w-[687px] h-auto md:h-[108px] leading-tight">
              <p>Go behind the curtain with real</p>
              <p>examples and high-scale insights</p>
            </div>

            {/* Subheading */}
            <p className="mt-7 mb-6 text-[18px] md:text-[25px] font-[500] text-black">
              You’ll walk away with:
            </p>

            {/* Bullet list */}
            <ul className="space-y-6">
              <li className="flex gap-4 md:gap-6">
                <span className="h-[59px] w-[3px] bg-[#F5AB40]" />
                <div>
                  <p className="text-[15px] md:text-[20px] font-[500] leading-relaxed text-black">
                    A clear view of the leadership & workforce capabilities that
                    will matter most
                  </p>
                  <p className="text-[15px] md:text-[20px] font-[500] leading-relaxed text-black">
                    over the next 24–36 months.
                  </p>
                </div>
              </li>

              <li className="flex gap-4 md:gap-6 items-start">
                <span className="h-[59px] w-[3px] bg-[#F5AB40]" />
                <div>
                  <p className="text-[15px] md:text-[20px] font-[500] leading-relaxed text-black">
                    Insights from high-scale operating environments including
                    the former
                  </p>
                  <p className="text-[15px] md:text-[20px] font-[500] leading-relaxed text-black">
                    CLO of McDonald’s on what truly scales and what breaks under
                    pressure.
                  </p>
                </div>
              </li>

              <li className="flex gap-4 md:gap-6 items-start">
                <span className="h-[59px] w-[3px] bg-[#F5AB40]" />
                <div>
                  <p className="text-[15px] md:text-[20px] font-[500] leading-relaxed text-black">
                    Signals for where capability gaps may already be forming
                  </p>
                  <p className="text-[15px] md:text-[20px] font-[500] leading-relaxed text-black">
                    in your organization.
                  </p>
                </div>
              </li>

              <li className="flex gap-4 md:gap-6 items-start">
                <span className="h-[59px] w-[3px] bg-[#F5AB40]" />
                <div>
                  <p className="text-[15px] md:text-[20px] font-[500] leading-relaxed text-black">
                    Peer-validated perspectives from leaders running workforce,
                    talent,
                  </p>
                  <p className="text-[15px] md:text-[20px] font-[500] leading-relaxed text-black">
                    and transformation ecosystems at scale.
                  </p>
                </div>
              </li>

              <li className="flex gap-4 md:gap-6 items-start">
                <span className="h-[59px] w-[3px] bg-[#F5AB40]" />
                <p className="text-[15px] md:text-[20px] font-[500] leading-relaxed text-black">
                  Actionable insights you can take straight into your next exec
                  meeting.
                </p>
              </li>
            </ul>

            {/* RSVP */}
            <form
              action={submitRsvp}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <div className="flex h-[45px] w-[389px] lg:w-[606px] lg:h-[81px] bg-[#E7E7E733] items-center gap-3 rounded-[3px] lg:rounded-[8px] border border-gray-300 px-4">
                <MdOutlineEmail size={30} color="#2727274a" />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your work email to confirm your attendance"
                  className="w-full text-[13px] md:text-[20px] outline-none"
                />
              </div>

              <button
                type="submit"
                className="cursor-pointer h-[45px] px-8 text-[15px] w-[139px] lg:h-[81px] lg:w-[251px] rounded-[5px] bg-[#F5AB40] lg:text-[29px] font-[700] text-white"
              >
                RSVP Now
              </button>
            </form>
          </div>

          {/* RIGHT IMAGE (DESKTOP ONLY – UNCHANGED) */}
          <div className="relative hidden md:block">
            <div className="absolute right-[-80px] top-[-40px] h-[800px] w-[800px]">
              <Image
                src="/chess.png"
                alt="Chess strategy illustration"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
