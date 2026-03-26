import Hero from "../Components/Hero";
import Marquee from "../Components/Marquee";
import ImageShowcase from "../Components/ImageShowcase";
import CommunityMap from "../Components/CommunityMap";
import EventCategories from "../Components/EventCategories";
import CoreActions from "../Components/CoreActions";
import Footer from "../Components/Footer";
import Reveal from "../Components/utils/Reveal";

export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <Reveal width="100%" delay={0.1}>
          <Marquee />
        </Reveal>
        <Reveal width="100%">
          <ImageShowcase />
        </Reveal>
        <Reveal width="100%">
          <CommunityMap />
        </Reveal>
        <EventCategories />
        <Reveal width="100%">
          <CoreActions />
        </Reveal>
        <Footer />
      </div>
    </>
  );
}
