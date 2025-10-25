import Footer from "./components/Footer";
import HeroSection from "./components/Hero-Section";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
      <div className="w-screen min-h-screen bg-[#090a15] ">
        {/* <NavBar /> */}
        <HeroSection />
        <Footer/>


      </div>

    </>
  );
}
