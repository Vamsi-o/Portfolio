import About from "./components/About"
import Footer from "./components/Footer"
import HeroSection from "./components/Hero-Section"
import Projects from "./components/Projects"

export default function Home() {
  return (
    <main className="w-full min-h-screen overflow-x-hidden">
      {/* Hero Section with integrated navbar */}
      <HeroSection />
      
      {/* About Section */}
      <About />
      
      {/* Projects Section */}
      <Projects />
      
      {/* Footer with Contact Form */}
      <Footer />
    </main>
  )
}
