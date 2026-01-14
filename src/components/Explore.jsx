import {
  FiClock,
  FiGrid,
  FiBarChart2,
  FiShield,
  FiGitBranch,
  FiSend,
} from "react-icons/fi";

export default function Explore() {
  return (
    <section className="mt-20 bg-[#CDDCFB80] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-10 text-[25px] font-[500]">
          The critical shifts every enterprise must plan for:
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Card 1 */}
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center gap-3 text-[#1E40FF]">
              <FiClock size={30} />
              <h3 className="text-[24px] font-[700] text-black">
                Skills Decay
              </h3>
            </div>
            <p className="text-[22px] font-[500]">
              every 2–3 years<br />
              faster for technical skills
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center gap-3 text-[#1E40FF]">
              <FiGrid size={30} />
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
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center gap-3 text-[#1E40FF]">
              <FiBarChart2 size={30} />
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
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center gap-3 text-[#1E40FF]">
              <FiShield size={30} />
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
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center gap-3 text-[#1E40FF]">
              <FiGitBranch size={30} />
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
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center gap-3 text-[#1E40FF]">
              <FiSend size={30} />
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
