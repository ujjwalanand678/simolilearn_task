import Image from "next/image";

export default function Speakers() {
  return (
    <section
      className="bg-gradient-to-b from-[#1D4DF4] to-[#112D8E]
 text-white py-10"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-[40px] font-[900] text-[#F5AB40] mb-12">
          Featured Speakers
        </h2>

        <div className="space-y-12">
          {[
            {
              name: "Rob Lauber",
              img: "/pic2.jpg",
              desc: "Rob Lauber is a global workforce and capability-building leader with over 25 years of experience helping organizations prepare leaders and frontline teams for change. Most recently, he served as SVP and Chief Learning Officer at McDonald’s, leading learning and development across 37,000+ restaurants worldwide. His perspective is especially relevant as organizations rethink leadership and capability models in the age of AI.",
            },
            {
              name: "Krishna Kumar",
              img: "/pic1.png",
              desc: "Krishna Kumar is the Founder and CEO of Simplilearn, working closely with enterprises navigating workforce transformation driven by AI and digital change. At the center of the learning and skills ecosystem, he brings a unique perspective on how roles, leadership expectations, and capabilities are evolving across industries. Through direct engagement with enterprise leaders and education partners, he sees what scales, and what doesn’t, in building workforce readiness for the AI era, offering a cross-enterprise view of the priorities shaping workforce strategy today.",
            },
            {
              name: "Sudipto Mitra",
              img: "/pic3.jpg",
              desc: "Sudipto Mitra is a senior transformation and growth leader with over 20 years of experience helping enterprises navigate large-scale change across technology, operations, and talent. As Chief Revenue Officer at Simplilearn, he works with executive teams to address workforce capability gaps as AI reshapes roles and operating models. He previously held leadership roles at Accenture, IBM Consulting, and WorkFusion.",
            },
          ].map((s) => (
            <div key={s.name} className="flex gap-16 ">
              <div className="rounded-[8px] w-[340px] h-[325px]">
                <Image
                  src={s.img}
                  alt={s.name}
                  width={340}
                  height={325}
                  className="rounded-[8px] object-cover mb-2 w-[340px] h-[325px]"
                />
              </div>

              <div>
                <h3 className="font-[900] text-[30px] text-[#00FFFF]">
                  {s.name}
                </h3>
                <p className="font-[500] text-[24px] text-white mt-2 w-[818px] leading-[1.4]">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 speaker-bg px-20 py-9 rounded-[8px] w-[1240px] h-[224px] mb-7">
          <p className="font-[900] text-[30px] text-[#00FFFF] mb-1">
            Additional expert perspectives
          </p>

          <p className="font-[500] text-[24px] text-white">
            Invited experts from leading consulting and enterprise learning
            organizations will contribute short perspectives, offering insight
            into how large organizations are evolving skills and leadership
            models in the AI era.
          </p>
        </div>
      </div>
    </section>
  );
}
