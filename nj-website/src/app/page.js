import Hero from "../Components/Hero";
import Marquee from "../Components/Marquee";
import CommunityMap from "../Components/CommunityMap";
import EventCategories from "../Components/EventCategories";
import CoreActions from "../Components/CoreActions";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <Marquee />
        <CommunityMap />
        <EventCategories />
        <CoreActions />
        <Footer />
      </div>
    </>
  );
}
