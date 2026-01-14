import React from "react";

const TextContent = () => {
  return (
    <section className="mx-auto max-w-7xl px-7 py-2 text-black font-satoshi">
      
      {/* Top paragraph */}
      <p className="text-[27px] w-[1240px] font-[500]">
        AI is accelerating change across every operational layer. Roles are
        shifting. Leadership models are collapsing and reforming. Frontline
        and mid-level managers will soon lead teams of people and intelligent
        agents.
      </p>

      <div className="h-10" />

      <p className="text-[27px] w-[1240px] font-[500]">
        But even the most advanced enterprises are asking the same question:
      </p>

      {/* Big bold question */}
      <h2 className="my-9 text-center text-[40px]  font-[900] ">
        Which capabilities will matter most,
        <br />
        and how do we build them at scale?
      </h2>

      {/* Bottom paragraph */}
      <p className="text-[27px] w-[1240px] font-[500]">
        This invite-only roundtable gathers CHROs, CLOs, and enterprise
        workforce leaders for a candid, senior-level discussion on what’s
        coming next.
      </p>
    </section>
  );
};

export default TextContent;
