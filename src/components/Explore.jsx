
import { FaClockRotateLeft } from "react-icons/fa6";
import { FaNetworkWired } from "react-icons/fa";
import {  MdOutlineAnalytics, MdOutlineRocketLaunch } from "react-icons/md";
import { LuShieldCheck } from "react-icons/lu";
import { TbMessage2Share } from "react-icons/tb";
export default function Explore() {
  return (
    <section className="mt-5 lg:mt-20 bg-[#CDDCFB80] py-8 lg:pt-12 lg:pb-14">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-[24px] lg:text-[40px] font-[900] text-[#F5AB40] mb-3">
          What We’ll Explore
        </h2>
        <p className="mb-10 text-[15px] lg:text-[25px] font-[500]">
          The critical shifts every enterprise must plan for:
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Card 1 */}
          <div className="rounded-xl bg-white p-6 shadow-lg">
            <div className="mb-6 flex items-center gap-3 text-[#1E40FF]">
              <FaClockRotateLeft size={30} />
              <h3 className=" text-[24px] font-[700] text-black">
                Skills Decay
              </h3>
            </div>
            <p className="text-[22px] font-[500]">
              every 2–3 years<br />
              faster for technical skills
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-xl bg-white p-6 shadow-lg">
            <div className="mb-6 flex items-center gap-3 text-[#1E40FF]">
              <FaNetworkWired size={32} />
              <h3 className="text-[24px] font-[700] text-black">
                Manager Role Shift
              </h3>
            </div>
            <p className="text-[22px] font-[500]">
              orchestrating<br />
              people + AI agents
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-xl bg-white p-6 shadow-lg">
            <div className="mb-6 flex items-center gap-3 text-[#1E40FF]">
              <MdOutlineAnalytics  size={32} />
              <h3 className="text-[24px] font-[700] text-black">
                Leaders + AI Co-Pilots
              </h3>
            </div>
            <p className="text-[22px] font-[500]">
              requires sensemaking<br />
              and systems thinking
            </p>
          </div>

          {/* Card 4 */}
          <div className="rounded-xl bg-white p-6 shadow-lg">
            <div className="mb-6 flex items-center gap-3 text-[#1E40FF]">
              <LuShieldCheck  size={32} />
              <h3 className="text-[24px] font-[700] text-black">
                Frontline Capability
              </h3>
            </div>
            <p className="text-[22px] font-[500]">
              now depends<br />
              on digital fluency
            </p>
          </div>

          {/* Card 5 */}
          <div className="rounded-xl bg-white p-6 shadow-lg">
            <div className="mb-6 flex items-center gap-3 text-[#1E40FF]">
              <TbMessage2Share  size={32} />
              <h3 className="text-[24px] font-[700] text-black">
                Core Human Capabilities
              </h3>
            </div>
            <p className="text-[22px] font-[500]">
              analytical reasoning<br />
              and scenario planning
            </p>
          </div>

          {/* Card 6 */}
          <div className="rounded-xl bg-white p-6 shadow-lg">
            <div className="mb-6 flex items-center gap-3 text-[#1E40FF]">
              <MdOutlineRocketLaunch size={32} />
              <h3 className="text-[24px] font-[700] text-black">
                Winning Organizations
              </h3>
            </div>
            <p className="text-[22px] font-[500]">
              predict skills<br />
              ahead of demand
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
