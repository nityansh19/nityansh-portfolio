import Loader from "@/components/Loader";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";
import Navigation from "@/components/Navigation";
import DotNav from "@/components/DotNav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CurrentlyBuilding from "@/components/CurrentlyBuilding";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Journey from "@/components/Journey";
import Philosophy from "@/components/Philosophy";
import Terminal from "@/components/Terminal";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Loader />
      <ScrollProgress />
      <CustomCursor />
      <Navigation />
      <DotNav />
      <main>
        <Hero />
        <About />
        <CurrentlyBuilding />
        <Projects />
        <TechStack />
        <Journey />
        <Philosophy />
        <Terminal />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
