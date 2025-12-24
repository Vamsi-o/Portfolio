'use client'

const SocialIcon = ({ children, href, label }: { children: React.ReactNode; href: string; label: string }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="w-12 h-12 rounded-xl glass border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/30 hover:scale-110 transition-all duration-300 group"
    >
        <div className="text-gray-400 group-hover:text-white transition-colors">
            {children}
        </div>
    </a>
)

export const Footer = () => {

    return (
        <footer id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 grid-background opacity-30"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-[#6366f1] to-[#06b6d4] opacity-10 blur-3xl"></div>

            <div className="relative max-w-7xl mx-auto">
                {/* Contact Section */}
                <div className="max-w-4xl mx-auto mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold font-display mb-4 text-white">
                            Let's <span className="gradient-text">Connect</span>
                        </h2>
                        <p className="text-gray-400 text-lg">
                            Have a project in mind or just want to chat? Feel free to reach out!
                        </p>
                    </div>

                    {/* Contact Cards */}
                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        <a 
                            href="mailto:vamshi@example.com"
                            className="flex items-center gap-4 p-6 glass rounded-2xl hover:bg-white/5 hover-lift transition-all group"
                        >
                            <div className="w-16 h-16 rounded-xl bg-linear-to-br from-[#6366f1] to-[#06b6d4] flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                                <svg className="w-8 h-8 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                            </div>
                            <div>
                                <div className="text-sm text-gray-400 mb-1">Email Me</div>
                                <div className="text-white font-semibold text-lg">iamvamsi0@gmail.com</div>
                            </div>
                        </a>

                        <a 
                            href="https://x.com/vamsi__0"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 p-6 glass rounded-2xl hover:bg-white/5 hover-lift transition-all group"
                        >
                            <div className="w-16 h-16 rounded-xl bg-linear-to-br from-[#6366f1] to-[#06b6d4] flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 0 0 1.88-2.36 8.5 8.5 0 0 1-2.7 1.03A4.24 4.24 0 0 0 11.1 9.03c0 .33.04.66.11.97A12.04 12.04 0 0 1 3.15 4.8a4.23 4.23 0 0 0 1.31 5.66 4.2 4.2 0 0 1-1.92-.53v.05c0 2.06 1.46 3.78 3.4 4.17a4.27 4.27 0 0 1-1.91.07 4.25 4.25 0 0 0 3.96 2.95A8.5 8.5 0 0 1 2 19.54 12 12 0 0 0 8.29 21c7.55 0 11.69-6.26 11.69-11.69 0-.18-.01-.35-.02-.53A8.36 8.36 0 0 0 22.46 6z" />
                                </svg>
                            </div>
                            <div>
                                <div className="text-sm text-gray-400 mb-1">Follow on X</div>
                                <div className="text-white font-semibold text-lg">@vamsi__0</div>
                            </div>
                        </a>
                    </div>

                    {/* Social Links */}
                    <div className="text-center">
                        <p className="text-gray-400 mb-6">Connect with me on social media</p>
                        <div className="flex gap-4 justify-center flex-wrap">
                            <SocialIcon href="https://x.com/vamsi__0" label="Twitter">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 0 0 1.88-2.36 8.5 8.5 0 0 1-2.7 1.03A4.24 4.24 0 0 0 11.1 9.03c0 .33.04.66.11.97A12.04 12.04 0 0 1 3.15 4.8a4.23 4.23 0 0 0 1.31 5.66 4.2 4.2 0 0 1-1.92-.53v.05c0 2.06 1.46 3.78 3.4 4.17a4.27 4.27 0 0 1-1.91.07 4.25 4.25 0 0 0 3.96 2.95A8.5 8.5 0 0 1 2 19.54 12 12 0 0 0 8.29 21c7.55 0 11.69-6.26 11.69-11.69 0-.18-.01-.35-.02-.53A8.36 8.36 0 0 0 22.46 6z" />
                                </svg>
                            </SocialIcon>

                            <SocialIcon href="https://github.com/vamsi-o" label="GitHub">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.305 3.492 .998.108-.775.418-1.305.76-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.468-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23A11.52 11.52 0 0 1 12 5.8c1.02.004 2.045.137 3.003.402 2.291-1.552 3.297-1.23 3.297-1.23.654 1.653.242 2.873.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.625-5.48 5.922.43.37.815 1.102.815 2.222 0 1.606-.015 2.896-.015 3.286 0 .32.216.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
                                </svg>
                            </SocialIcon>

                            <SocialIcon href="https://www.linkedin.com/in/vam-si-b68b74372" label="LinkedIn">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.413v1.56h.049c.476-.9 1.637-1.852 3.369-1.852 3.602 0 4.268 2.37 4.268 5.455v6.289zM5.337 7.433a2.064 2.064 0 1 1-.001-4.128 2.064 2.064 0 0 1 .001 4.128zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.273V1.727C24 .774 23.2 0 22.225 0z" />
                                </svg>
                            </SocialIcon>
                            {/* <SocialIcon href="https://t.me/DarkKnight" label="Telegram">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M21.5 3.1L2.9 10.1c-.9.3-.9 1.1-.1 1.4l4 1.3 1.6 4.9c.3.9 1.1.9 1.5.1L13 14l6.4 4.7c.9.6 1.7.2 1.9-1.1L22.6 4.2c.2-1.3-.6-1.8-1.1-1.1zM8.6 13.3l6.6-5.1-7.4 3.2 1.3 1.9z" />
                                </svg>
                            </SocialIcon> */}
                        </div>
                    </div>
                </div>
                {/* Footer Bottom */}
                <div className="pt-8 border-t border-white/10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6366f1] to-[#06b6d4] flex items-center justify-center font-bold text-white">
                                V
                            </div>
                            <div>
                                <h3 className="text-white font-bold font-display">Vamshi</h3>
                                <p className="text-sm text-gray-400">Full Stack Developer</p>
                            </div>
                        </div>
                        <div className="text-gray-400 text-sm text-center md:text-right">
                            <p>© 2024 Vamshi. All rights reserved.</p>
                            <p className="mt-1">Built with Next.js & TailwindCSS</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer