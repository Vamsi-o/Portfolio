'use client'
import { useEffect, useRef, useState } from 'react'

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
                    <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
                        About <span className="gradient-text">Me</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Passionate developer crafting innovative solutions
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
                                    I'm a <span className="text-[#6366f1] font-semibold">Full Stack Developer</span> and <span className="text-[#06b6d4] font-semibold">AI enthusiast</span> who loves building scalable web applications that make a difference.
                                </p>
                                <p>
                                    With expertise in modern web technologies and AI integration, I transform ideas into production-ready applications. My focus is on creating seamless user experiences backed by robust, efficient code.
                                </p>
                                <p>
                                    I'm constantly exploring new technologies and best practices to deliver cutting-edge solutions that solve real-world problems.
                                </p>
                            </div>

                            {/* Quick Stats */}
                            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/10">
                                <div>
                                    <div className="text-2xl font-bold gradient-text">2+</div>
                                    <div className="text-sm text-gray-400">Years Exp.</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold gradient-text">10+</div>
                                    <div className="text-sm text-gray-400">Projects</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold gradient-text">5+</div>
                                    <div className="text-sm text-gray-400">Tech Stack</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Image/Illustration */}
                    <div className={`transition-all duration-1000 delay-400 ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                    }`}>
                        <div className="relative">
                            <div className="glass p-8 rounded-2xl">
                                <div className="aspect-square rounded-xl bg-gradient-to-br from-[#6366f1] to-[#06b6d4] flex items-center justify-center relative overflow-hidden">
                                    {/* Code Animation */}
                                    <div className="absolute inset-0 opacity-20">
                                        <div className="absolute top-4 left-4 text-white/40 text-sm font-mono">
                                            {'<code>'}
                                        </div>
                                        <div className="absolute top-12 left-8 text-white/40 text-sm font-mono">
                                            const dev = 'Vamshi';
                                        </div>
                                        <div className="absolute bottom-4 right-4 text-white/40 text-sm font-mono">
                                            {'</code>'}
                                        </div>
                                    </div>
                                    <div className="text-8xl">👨‍💻</div>
                                </div>
                            </div>
                            {/* Floating Elements */}
                            <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#6366f1] rounded-2xl opacity-50 blur-xl animate-float"></div>
                            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-[#06b6d4] rounded-2xl opacity-50 blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
                        </div>
                    </div>
                </div>

                {/* Skills Grid */}
                <div className={`transition-all duration-1000 delay-600 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    <h3 className="text-3xl font-bold font-display text-center mb-12">
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
