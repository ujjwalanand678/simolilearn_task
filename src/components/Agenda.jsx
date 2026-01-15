export default function Agenda() {
  return (
    <section className="bg-[#00FFFF] pt-5 pb-8 lg:pt-15 lg:pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-[24px] lg:text-[40px] font-[900] text-[#1D4DF4] mb-9">
          Event Agenda
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white px-6 pt-10 pb-12 rounded-[8px] shadow-lg ">
            <h3 className=" text-[19px] lg:h-[95px] lg:text-[24px] font-[900] text-[#1D4DF4] mb-8">
              Welcome & Opening
            </h3>

            <p className="text-[15px] font-[700] lg:text-[20px] text-black mb-6">
              Sudipto Mitra, CRO Simplilearn
            </p>

            <p className="text-[15px] font-[500] lg:text-[20px] leading-relaxed">
              Why capability-building is now a board-level issue and what’s changing in the workforce landscape.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white px-5 pt-10 pb-12 rounded-[8px] shadow-lg ">
            <h3 className="text-[19px] lg:h-[95px] lg:text-[24px] font-[900] text-[#1D4DF4] mb-8">
              Keynote: <br />
              What Enterprise Leaders Are Seeing on the Ground
            </h3>

            <p className="text-[15px] font-[700] lg:text-[20px] text-black mb-6">
              Rob Lauber, Former CLO McDonald’s
            </p>

            <p className="text-[15px] font-[500] lg:text-[20px] leading-relaxed">
              A grounded view of how AI and AI agents are reshaping work,
              workflows, and leadership across industries.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white px-7 pt-10 pb-12 rounded-[8px] shadow-lg  ">
            <h3 className="text-[19px] lg:h-[95px] lg:text-[24px] font-[900] text-[#1D4DF4] mb-8">
              Lunch & Executive Conversation
            </h3>

            <p className="text-[15px] font-[700] lg:text-[20px] text-black mb-6">
              Industry Experts Invited
            </p>

            <p className="text-[15px] font-[500] lg:text-[20px] leading-relaxed">
              What large enterprise talent ecosystems are learning about
              capability-building at scale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
