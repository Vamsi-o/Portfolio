'use client'
import { useEffect, useState } from "react"
import NavBar from "./NavBar"
import ScrollingText from "./ScrollingText"

export const HeroSection = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }
        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    return (
        <section id="home" className="relative min-h-screen w-full flex flex-col overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 grid-background opacity-50"></div>
            
            {/* Gradient Orbs */}
            <div 
                className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-[#6366f1] to-[#06b6d4] opacity-20 blur-3xl animate-float"
                style={{
                    top: '10%',
                    left: '10%',
                    transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
                }}
            ></div>
            <div 
                className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-[#06b6d4] to-[#6366f1] opacity-20 blur-3xl animate-float"
                style={{
                    bottom: '10%',
                    right: '10%',
                    animationDelay: '2s',
                    transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)`
                }}
            ></div>

            {/* Navigation */}
            <NavBar />

            {/* Hero Content */}
            <div className="relative flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 pt-20 pb-12">
                <div className="max-w-5xl mx-auto space-y-8 animate-fade-in-up">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/20 text-sm text-gray-300 animate-slide-in-left">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        Building innovative solutions
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-tight">
                        <span className="text-white block mb-2">Turning Ideas Into</span>
                        <span className="gradient-text animate-gradient block">Reality.</span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-slide-in-right">
                        Creating <span className="text-[#06b6d4] font-semibold">cutting-edge applications</span> that blend innovation with functionality, powered by <span className="text-[#6366f1] font-semibold">AI and modern web tech</span>.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 animate-fade-in-up">
                        <a href="#projects">
                            <button className="group px-8 py-4 rounded-full bg-gradient-to-r from-[#6366f1] to-[#06b6d4] text-white font-semibold text-lg hover:shadow-2xl hover:shadow-[#6366f1]/50 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                                View My Work
                                <svg 
                                    className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                                    fill="none" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth="2" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor"
                                >
                                    <path d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                                </svg>
                            </button>
                        </a>
                        <a href="#contact">
                            <button className="px-8 py-4 rounded-full glass border border-white/20 text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                                Get In Touch
                            </button>
                        </a>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-12 max-w-3xl mx-auto">
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold gradient-text">3+</div>
                            <div className="text-gray-400 text-sm md:text-base mt-1">Projects Built</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold gradient-text">8+</div>
                            <div className="text-gray-400 text-sm md:text-base mt-1">Tech Stack</div>
                        </div>
                        <div className="text-center col-span-2 md:col-span-1">
                            <div className="text-3xl md:text-4xl font-bold gradient-text">∞</div>
                            <div className="text-gray-400 text-sm md:text-base mt-1">Learning Daily</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tech Stack Marquee */}
            <ScrollingText items={['React', 'Next.js', 'Node.js', 'Python', 'AI/ML', 'Express', 'Java', 'TypeScript', 'TailwindCSS', 'MongoDB']} />
        </section>
    )
}

export default HeroSection