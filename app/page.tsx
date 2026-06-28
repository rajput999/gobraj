import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Destinations from "@/components/Destinations";
import Packages from "@/components/Packages";
// import Hotels from "@/components/Hotels";
import Cars from "@/components/Cars";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import InterestPopup from "@/components/InterestPopup";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Destinations limit={4} seeAllHref="/destinations" />
        <Packages limit={3} seeAllHref="/packages" />
        <Cars limit={4} seeAllHref="/cars" />
        {/* <Hotels limit={4} seeAllHref="/hotels" /> */}
        <CTABanner />
      </main>
      <Footer />
      <InterestPopup />
    </>
  );
}
