import Image from "next/image";
import Hero from "../Components/Hero";
import CommunityMap from "../Components/CommunityMap";
import EventCategories from "../Components/EventCategories";
import CoreActions from "../Components/CoreActions";
import Footer from "../Components/Footer";
import Navbar from "@/Components/Navbar";

export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <CommunityMap />
        <EventCategories />
        <CoreActions />
        <Footer />
      </div>
    </>
  );
}
