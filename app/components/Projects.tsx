'use client'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const Projects = () => {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef<HTMLElement>(null)
    const lineProgressRef = useRef<HTMLDivElement>(null)

    const projectsContainerRef = useRef<HTMLDivElement>(null)
    const projectRefs = useRef<(HTMLDivElement | null)[]>([])

    const [lineProgress, setLineProgress] = useState(0)
    const [activeProject, setActiveProject] = useState(-1)
    const isTicking = useRef(false)
    const latestProgress = useRef(0)

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

    useEffect(() => {
        const updateLine = () => {
            setLineProgress(latestProgress.current)
            isTicking.current = false
        }

        const onScroll = () => {
            const projectsContainerEl = projectsContainerRef.current

            if (!projectsContainerEl) return

            // Get the bounding rect of the projects container
            const rect = projectsContainerEl.getBoundingClientRect()
            const containerTop = rect.top + window.scrollY
            const containerHeight = rect.height
            const viewportHeight = window.innerHeight

            // Start when container enters viewport, end when it leaves
            const scrollStart = containerTop - viewportHeight * 0.6
            const scrollEnd = containerTop + containerHeight - viewportHeight * 0.4
            const currentScroll = window.scrollY

            // Calculate progress between 0 and 1
            let progress = (currentScroll - scrollStart) / (scrollEnd - scrollStart)
            latestProgress.current = Math.max(0, Math.min(1, progress))

            // Track which project is currently in view
            let currentActive = -1
            projectRefs.current.forEach((ref, index) => {
                if (ref) {
                    const projectRect = ref.getBoundingClientRect()
                    const projectMiddle = projectRect.top + projectRect.height / 2
                    const viewportMiddle = viewportHeight / 2

                    // Check if project middle is near viewport middle
                    if (Math.abs(projectMiddle - viewportMiddle) < viewportHeight * 0.4) {
                        currentActive = index
                    }
                }
            })
            setActiveProject(currentActive)

            if (!isTicking.current) {
                window.requestAnimationFrame(updateLine)
                isTicking.current = true
            }
        }

        window.addEventListener('scroll', onScroll, { passive: true })
        window.addEventListener('resize', onScroll, { passive: true })

        // Initial call with slight delay to ensure layout is ready
        setTimeout(onScroll, 100)

        return () => {
            window.removeEventListener('scroll', onScroll)
            window.removeEventListener('resize', onScroll)
        }
    }, [])

    const projects = [
        {
            title: 'Draw-GPT',
            description: 'A real-time collaborative drawing app with persistent shapes and user auth. Generative-AI shape generation is planned..',
            image: '/image copy.png',
            logo: '/image copy.png',
            tags: ['Next js', 'Type Script', 'Web Sockets', 'FastAPI', 'Docker', 'AWS'],
            link: 'https://draw-gpt-web-gd84.vercel.app/',
            github: 'https://github.com/Vamsi-o/Draw-Gpt',
            gradient: 'from-purple-500 to-pink-500'
        },
        {
            title: 'HireHawk',
            description: 'An AI-powered recruitment  that streamlines the hiring process. Features intelligent candidate matching, automated screening, and real-time analytics to help companies find the perfect talent faster.',
            image: '/H_Home.png',
            logo: '/HireHawk.jpg',
            tags: ['Next.js', 'AI/ML', 'Node.js', 'MongoDB', 'TailwindCSS'],
            link: 'https://dev-hire-znlr.vercel.app/',
            github: 'https://github.com/Dev-Pross/DevHire',
            gradient: 'from-emerald-500 to-teal-500'
        },
        {
            title: 'Webhook Monitor',
            description: 'Webhook MonitorReal-time GitHub repository events ',
            image: '/image.png',
            logo: '/image.png',
            tags: ['NextJS', 'Python', 'Flask', 'Webhook'],
            link: 'https://techstax-assignment-webhook-repo-nt.vercel.app/',
            github: 'https://github.com/Vamsi-o/Techstax-assignment-webhook-repo',
            gradient: 'from-purple-500 to-pink-500'
        },
        {
            title: 'Ainfinity',
            description: 'A comprehensive AI platform offering multiple AI services including text generation, image creation, and data analysis. Built with scalability and performance in mind for enterprise-level solutions.',
            image: '/A_Home.png',
            logo: '/Ainfinity.png',
            tags: ['React', 'Python', 'TensorFlow', 'FastAPI', 'Docker'],
            link: 'https://post-generator-iota.vercel.app/',
            github: 'https://github.com/Vamsi-o/SocialMedia-Post-Generator',
            gradient: 'from-purple-500 to-pink-500'
        },

    ]

    return (
        <section
            id="projects"
            ref={sectionRef}
            className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0 grid-background opacity-30"></div>

            <div className="relative max-w-7xl mx-auto">
                {/* Section Header */}
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}>
                    <h2 className="text-4xl md:text-5xl font-bold font-display mb-4 text-white">
                        What I've <span className="gradient-text">Built</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Innovative projects showcasing AI integration and modern web development
                    </p>
                </div>

                {/* Projects with Animated Line */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
                    {/* Animated Line - Desktop Only */}
                    <div className="hidden lg:block lg:w-20 relative flex-shrink-0">
                        <div className="sticky top-32 h-[70vh] flex items-center justify-center">
                            {/* Line Track */}
                            {/* <div className="relative w-1 h-full bg-gray-800/50 rounded-full"> */}
                            {/* Animated Progress Line */}
                            {/* <div
                                    ref={lineProgressRef}
                                    // className="absolute top-0 left-0 w-full bg-linear-to-b from-[#9c9c9d] to-[#edf0f0] rounded-full transition-all duration-75 ease-out"
                                    style={{
                                        height: `${lineProgress * 100}%`,
                                        boxShadow: lineProgress > 0 ? '0 0 10px rgba(99, 102, 241, 0.6), 0 0 20px rgba(6, 182, 212, 0.4)' : 'none'
                                    }}
                                /> */}

                            {/* Node Markers */}
                            {/* {projects.map((_, index) => {
                                    const nodePosition = (index + 1) / (projects.length + 1)
                                    const isActive = lineProgress >= nodePosition
                                    const isClose = Math.abs(lineProgress - nodePosition) < 0.1

                                    return (
                                      
                                        <div
                                            key={index}
                                            className="absolute left-1/2 -translate-x-1/2 rounded-full transition-all duration-300"
                                            style={{
                                                top: `${nodePosition * 100}%`,
                                                width: isActive ? '16px' : '12px',
                                                height: isActive ? '16px' : '12px',
                                                background: isActive
                                                    ? 'linear-gradient(135deg, #6366f1, #06b6d4)'
                                                    : '#374151',
                                                boxShadow: isActive
                                                    ? '0 0 12px rgba(99, 102, 241, 0.8), 0 0 20px rgba(6, 182, 212, 0.6)'
                                                    : 'none',
                                                transform: isActive || isClose
                                                    ? 'translateX(-50%) translateY(-50%) scale(1.2)'
                                                    : 'translateX(-50%) translateY(-50%) scale(1)',
                                                border: isActive ? '2px solid rgba(255, 255, 255, 0.3)' : '2px solid transparent'
                                            }}
                                        />
                                    )
                                })} */}
                            {/* </div> */}
                        </div>
                    </div>

                    {/* Projects Grid */}
                    <div ref={projectsContainerRef} className="flex-1 space-y-12 md:space-y-20">
                        {projects.map((project, index) => (
                            <div
                                key={project.title}
                                ref={(el) => { projectRefs.current[index] = el }}
                                className={`relative transition-all duration-1000 delay-${index * 200} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                    }`}
                            >
                                {/* Background Glow */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 blur-3xl rounded-3xl`}></div>

                                <div className={`relative grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                                    }`}>
                                    {/* Project Image */}
                                    <div className={`relative group ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                        {/* Gradient Border Container */}
                                        <div className={`relative p-[2px] rounded-2xl bg-gradient-to-br ${project.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-500`}>
                                            <div className="glass rounded-2xl overflow-hidden bg-[#0a0b14] hover-lift">
                                                <div className="relative aspect-video overflow-hidden bg-gray-900">
                                                    <Image
                                                        src={project.image}
                                                        alt={`${project.title} screenshot`}
                                                        fill
                                                        className="object-cover object-top transition-all duration-700 group-hover:scale-105"
                                                        priority={index === 0}
                                                    />
                                                    {/* Gradient Overlay for better visibility */}
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-40 group-hover:opacity-20 transition-opacity duration-500"></div>

                                                    {/* Hover Overlay with Buttons */}
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center p-8">
                                                        <div className="flex gap-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                                            <a
                                                                href={project.link}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="px-6 py-3 rounded-full bg-linear-to-r from-[#6366f1] to-[#06b6d4] text-white text-sm font-semibold hover:shadow-xl hover:shadow-[#6366f1]/50 transition-all hover:scale-105 flex items-center gap-2"
                                                            >
                                                                <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                                                </svg>
                                                                Live Demo
                                                            </a>
                                                            <a
                                                                href={project.github}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="px-6 py-3 rounded-full glass border-2 border-white/30 text-white text-sm font-semibold hover:bg-white/20 hover:border-white/50 transition-all hover:scale-105 flex items-center gap-2"
                                                            >
                                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.305 3.492.998.108-.775.418-1.305.76-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.468-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23A11.52 11.52 0 0112 5.8c1.02.004 2.045.137 3.003.402 2.291-1.552 3.297-1.23 3.297-1.23.654 1.653.242 2.873.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.625-5.48 5.922.43.37.815 1.102.815 2.222 0 1.606-.015 2.896-.015 3.286 0 .32.216.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
                                                                </svg>
                                                                Code
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Decorative Glow Elements */}
                                        <div className={`absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br ${project.gradient} opacity-20 blur-3xl rounded-full animate-float pointer-events-none`}></div>
                                        <div className={`absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br ${project.gradient} opacity-10 blur-3xl rounded-full animate-float pointer-events-none`} style={{ animationDelay: '1s' }}></div>
                                    </div>

                                    {/* Project Info */}
                                    <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                        {/* Logo & Title */}
                                        <div className="flex items-center gap-4">
                                            <div className={`relative w-20 h-20 rounded-2xl bg-linear-to-br ${project.gradient} p-1 shadow-lg shadow-${project.gradient.split(' ')[1]}/30`}>
                                                <div className="w-full h-full rounded-xl overflow-hidden bg-[#0a0b14] p-2.5 flex items-center justify-center">
                                                    <Image
                                                        src={project.logo}
                                                        alt={`${project.title} logo`}
                                                        width={56}
                                                        height={56}
                                                        className="w-full h-full object-contain rounded-lg"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-3xl font-bold text-white font-display mb-1">
                                                    {project.title}
                                                </h3>
                                                <div className="flex items-center gap-2">
                                                    <span className={`w-2 h-2 rounded-full bg-linear-to-r ${project.gradient} animate-pulse`}></span>
                                                    <span className="text-sm text-gray-400">Featured Project</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-gray-300 leading-relaxed text-lg">
                                            {project.description}
                                        </p>

                                        {/* Tech Stack */}
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-4 py-2 rounded-full glass border border-white/10 text-sm text-gray-300 hover:border-white/30 transition-colors"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex gap-4 pt-4">
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group px-6 py-3 rounded-full bg-gradient-to-r from-[#6366f1] to-[#06b6d4] text-white font-semibold hover:shadow-lg hover:shadow-[#6366f1]/50 transition-all duration-300 flex items-center gap-2"
                                            >
                                                View Project
                                                <svg
                                                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                                                </svg>
                                            </a>
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-6 py-3 rounded-full glass border border-white/20 text-white font-semibold hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
                                            >
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path fillRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.305 3.492.998.108-.775.418-1.305.76-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.468-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23A11.52 11.52 0 0112 5.8c1.02.004 2.045.137 3.003.402 2.291-1.552 3.297-1.23 3.297-1.23.654 1.653.242 2.873.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.625-5.48 5.922.43.37.815 1.102.815 2.222 0 1.606-.015 2.896-.015 3.286 0 .32.216.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" clipRule="evenodd" />
                                                </svg>
                                                Source Code
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* More Projects CTA */}
                <div className={`text-center mt-20 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}>
                    <p className="text-gray-400 mb-6">Curious about my experiments and learning journey?</p>
                    <a
                        href="https://github.com/vamsi-o"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass border border-white/20 text-white font-semibold hover:bg-white/10 transition-all duration-300 group"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.305 3.492.998.108-.775.418-1.305.76-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.468-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23A11.52 11.52 0 0112 5.8c1.02.004 2.045.137 3.003.402 2.291-1.552 3.297-1.23 3.297-1.23.654 1.653.242 2.873.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.625-5.48 5.922.43.37.815 1.102.815 2.222 0 1.606-.015 2.896-.015 3.286 0 .32.216.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" clipRule="evenodd" />
                        </svg>
                        Explore My Code
                        <svg
                            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Projects


