'use client'
import { useState, useEffect } from "react"

export const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks: Array<{ href: string; label: string; external?: boolean; highlight?: boolean }> = [
        { href: "#projects", label: "Projects" },
        { href: "https://docs.google.com/document/d/1ZhCljcBVaV0xCaVn0Wd4fvX4kzC_Qb1Uv5K5y6eKHhg/edit?tab=t.0", label: "Resume", external: true },
        { href: "#contact", label: "Contact Me", highlight: true },
    ]

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300  ${isScrolled ? 'py-4' : 'py-6'
            }`}>
            <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
                // force-remove any border the glass-dark class may add using Tailwind important
                isScrolled ? 'glass-dark rounded-2xl backdrop-blur' : ''
                }`
            }
            >
                <div className="flex justify-between items-center py-3">
                    {/* Logo */}
                    <a href="#home" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 rounded-full bg-linear-to-br from-[#6366f1] to-[#06b6d4] flex items-center justify-center font-bold text-white text-lg group-hover:scale-110 transition-transform">
                            V
                        </div>
                        <h1 className="text-white font-bold text-xl font-display hidden sm:block">
                            Vamshi
                        </h1>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            link.highlight ? (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="px-6 py-2.5 rounded-full bg-linear-to-r from-[#6366f1] to-[#06b6d4] text-white font-semibold hover:shadow-lg hover:shadow-[#6366f1]/50 transition-all duration-300 transform hover:scale-105"
                                >
                                    {link.label}
                                </a>
                            ) : (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                    className="text-gray-300 hover:text-white transition-colors duration-200 font-medium relative group"
                                >
                                    {link.label}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-[#6366f1] to-[#06b6d4] group-hover:w-full transition-all duration-300"></span>
                                </a>
                            )
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isMobileMenuOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden py-4 space-y-3 animate-fade-in-up">
                        {navLinks.map((link) => (
                            link.highlight ? (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block w-full px-6 py-3 rounded-full bg-linear-to-r from-[#6366f1] to-[#06b6d4] text-white font-semibold text-center"
                                >
                                    {link.label}
                                </a>
                            ) : (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block text-gray-300 hover:text-white transition-colors duration-200 font-medium py-2 px-4 rounded-lg hover:bg-white/5"
                                >
                                    {link.label}
                                </a>
                            )
                        ))}
                    </div>
                )}
            </div>
        </nav>
    )
}

export default NavBar
