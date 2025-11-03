'use client'
import { useEffect, useRef, useState } from 'react'
import ContributionGraph from './ContributionGraph'

const About = () => {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.1 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current)
            }
        }
    }, [])

    const skills = [
        {
            category: 'Frontend',
            icon: '💻',
            items: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'HTML/CSS']
        }, 
        {
            category: 'Backend',
            icon: '⚙️',
            items: ['Node.js', 'Express', 'Python', 'Java', 'REST APIs']
        },
        {
            category: 'AI/ML',
            icon: '🤖',
            items: ['Machine Learning', 'Data Structures', 'Algorithms', 'AI Integration']
        },
        {
            category: 'Tools & Others',
            icon: '🛠️',
            items: ['Git', 'MongoDB', 'PostgreSQL', 'Docker', 'AWS']
        }
    ]

    return (
        <section 
            id="about" 
            ref={sectionRef}
            className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 grid-background opacity-30"></div>
            <div className="absolute top-1/4 left-0 w-72 h-72 bg-[#6366f1] opacity-10 blur-3xl rounded-full"></div>
            <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-[#06b6d4] opacity-10 blur-3xl rounded-full"></div>

            <div className="relative max-w-7xl mx-auto">
                {/* Section Header */}
                <div className={`text-center mb-16 transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    <h2 className="text-4xl md:text-5xl font-bold font-display mb-4 text-white ">
                        Know <span className="gradient-text">Me</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Builder. Innovator. Learner.
                    </p>
                </div>

                {/* About Content */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                    {/* Left: Bio */}
                    <div className={`space-y-6 transition-all duration-1000 delay-200 ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                    }`}>
                        <div className="glass p-8 rounded-2xl hover-lift">
                            <h3 className="text-2xl font-bold text-white mb-4 font-display">
                                Hi, I'm Vamshi 👋
                            </h3>
                            <div className="space-y-4 text-gray-300 leading-relaxed">
                                <p>
                                    I'm an <span className="text-[#6366f1] font-semibold">innovative developer</span> and <span className="text-[#06b6d4] font-semibold">tech enthusiast</span> who loves building creative solutions with modern web technologies.
                                </p>
                                <p>
                                    I dive deep into cutting-edge tech stacks, experimenting with AI integration, full-stack development, and creating applications that push boundaries. My projects reflect my passion for learning and building.
                                </p>
                                <p>
                                    Currently exploring the intersection of AI and web development, I'm driven by curiosity and the desire to create impactful digital experiences.
                                </p>
                            </div>

                            {/* Quick Stats */}
                            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/10">
                                <div>
                                    <div className="text-2xl font-bold gradient-text">3+</div>
                                    <div className="text-sm text-gray-400">Projects Built</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold gradient-text">8+</div>
                                    <div className="text-sm text-gray-400">Technologies</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold gradient-text">∞</div>
                                    <div className="text-sm text-gray-400">Ideas</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Image/Illustration */}
                    <div className={`transition-all duration-1000 delay-400 ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                    }`}>
                        <div className="relative">
                            <div className="glass p-3 rounded-2xl border border-white/10 overflow-hidden backdrop-blur-sm">
                                <div className="aspect-[4/5] rounded-xl relative overflow-hidden group shadow-2xl">
                                    {/* Main Image */}
                                    <img 
                                        src="/12.jpeg" 
                                        alt="Vamshi - Moving Through Life"
                                        className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                                    />
                                    
                                    {/* Subtle Vignette Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b14]/80 via-transparent to-[#0a0b14]/20"></div>
                                    
                                    {/* Code Animation Overlay - Appears on Hover */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#6366f1]/10 to-[#06b6d4]/10">
                                        <div className="absolute top-6 left-6 text-white/70 text-sm font-mono drop-shadow-lg animate-pulse">
                                            {'<code>'}
                                        </div>
                                        <div className="absolute top-14 left-10 text-white/70 text-sm font-mono drop-shadow-lg animate-pulse" style={{ animationDelay: '0.2s' }}>
                                            const journey = 'infinite';
                                        </div>
                                        <div className="absolute bottom-6 right-6 text-white/70 text-sm font-mono drop-shadow-lg animate-pulse" style={{ animationDelay: '0.4s' }}>
                                            {'</code>'}
                                        </div>
                                    </div>
                                    
                                    {/* Bottom Text Overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0a0b14]/95 via-[#0a0b14]/70 to-transparent">
                                        <p className="text-white font-bold text-lg font-display drop-shadow-lg">Moving Through Life</p>
                                        <p className="text-gray-300 text-sm drop-shadow-md">Building the future, one step at a time</p>
                                    </div>
                                    
                                    {/* Glow Effect on Hover */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-[#6366f1]/5 via-transparent to-[#06b6d4]/5"></div>
                                    </div>
                                </div>
                            </div>
                            {/* Floating Elements */}
                            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#6366f1] rounded-full opacity-20 blur-3xl animate-float"></div>
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#06b6d4] rounded-full opacity-20 blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
                            
                            {/* Border Glow Effect */}
                            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                <div className="absolute inset-0 rounded-2xl border border-[#6366f1]/30 blur-sm"></div>
                            </div>
                        </div>
                    </div>
                </div>

                GitHub Contributions
                {/* <div className={`transition-all duration-1000 delay-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    <h3 className="text-3xl font-bold font-display text-center mb-6 text-white">
                        <span className="gradient-text">Open Source</span> Activity
                    </h3>
                    <ContributionGraph username="Vamsi-o" refreshMs={60_000} />
                </div><br /> */}

                {/* Skills Grid */}
                <div className={`transition-all duration-1000 delay-600 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    <h3 className="text-3xl font-bold font-display text-center mb-12 text-white">
                        My <span className="gradient-text">Skills</span>
                    </h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {skills.map((skillGroup, index) => (
                            <div
                                key={skillGroup.category}
                                className="glass p-6 rounded-2xl hover-lift group"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                                    {skillGroup.icon}
                                </div>
                                <h4 className="text-xl font-semibold text-white mb-4 font-display">
                                    {skillGroup.category}
                                </h4>
                                <ul className="space-y-2">
                                    {skillGroup.items.map((skill) => (
                                        <li 
                                            key={skill}
                                            className="text-gray-300 text-sm flex items-center gap-2"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#6366f1] to-[#06b6d4]"></span>
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
