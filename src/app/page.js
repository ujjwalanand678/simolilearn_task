import Hero from "@/components/Hero";
import Explore from "@/components/Explore";
import Speakers from "@/components/Speakers";
import Agenda from "@/components/Agenda";
import Footer from "@/components/Footer";
import RsvpForm from "@/components/RsvpForm";
import TextContent from "@/components/TextContent";
import InsightsSection from "@/components/InsightsSection";

export default function Home() {
  return (
    <main>
      <Hero />
     
      <TextContent/>
      <Explore />
      <Speakers />
      <InsightsSection/>
      <Agenda />
      <Footer />
    </main>
  );
}