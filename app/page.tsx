import Footer from "./components/Footer";
import HeroSection from "./components/Hero-Section";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import ScrollingText from "./components/ScrollingText";

export default function Home() {
  return (
    <>
      <div className="w-full min-h-screen bg-[#090a15] flex flex-col gap-22">
        {/* <NavBar /> */}
        <HeroSection />
        <Projects/>
        <Footer/>


      </div>

    </>
  );
}
