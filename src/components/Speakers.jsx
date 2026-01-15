import Image from "next/image";

export default function Speakers() {
  return (
    <section className="bg-gradient-to-b from-[#1D4DF4] to-[#112D8E] text-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-[24px] lg:text-[40px] font-[900] text-[#F5AB40] mb-12">
          Featured Speakers
        </h2>

        <div className="space-y-16">
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
            <div
              key={s.name}
              className="
                flex flex-col items-center
                lg:flex-row lg:items-start
                gap-6 lg:gap-16
                text-center lg:text-left
              "
            >
              <div className="rounded-[8px] w-[192px] h-[184px] lg:w-[340px] lg:h-[325px]">
                <Image
                  src={s.img}
                  alt={s.name}
                  width={340}
                  height={325}
                  className="rounded-[8px] object-cover mb-2 w-[192px] h-[184px] lg:w-[340px] lg:h-[325px]"
                />
              </div>

              <div className="flex flex-col items-center lg:items-start">
                <h3 className="font-[900] text-[22px] lg:text-[30px] text-[#00FFFF]">
                  {s.name}
                </h3>

                <p
                  className="
                    font-[500]
                    text-[16px] lg:text-[24px]
                    text-white
                    mt-3
                    w-full lg:w-[818px]
                    leading-[1.6]
                  "
                >
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Expert Perspectives */}
        <div
          className="
            mt-16
            speaker-bg
            rounded-[8px]
            w-full lg:w-[1240px]
            h-auto lg:h-[224px]
            px-6 lg:px-20
            py-6 lg:py-9
            mb-7
          "
        >
          <p className="font-[900] text-[20px] lg:text-[30px] text-[#00FFFF] mb-2">
            Additional expert perspectives
          </p>

          <p className="font-[500] text-[16px] lg:text-[24px] text-white leading-[1.6]">
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
