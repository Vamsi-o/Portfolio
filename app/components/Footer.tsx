const SocialIcon = ({ children, href, label }: { children: React.ReactNode; href: string; label: string }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition"
    >
        {children}
    </a>
)

export const Footer = () => {
    return (
        <div className="flex justify-between gap-8 text-white font-extrabold mx-40 bg-transparent py-6 ">
            <div className="flex flex-col text-2xl justify-end">
                <div>
                    <h1>Vamshi</h1>

                </div>
                <div className="flex gap-4 my-2">
                    <SocialIcon href="https://twitter.com/" label="Twitter">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 0 0 1.88-2.36 8.5 8.5 0 0 1-2.7 1.03A4.24 4.24 0 0 0 11.1 9.03c0 .33.04.66.11.97A12.04 12.04 0 0 1 3.15 4.8a4.23 4.23 0 0 0 1.31 5.66 4.2 4.2 0 0 1-1.92-.53v.05c0 2.06 1.46 3.78 3.4 4.17a4.27 4.27 0 0 1-1.91.07 4.25 4.25 0 0 0 3.96 2.95A8.5 8.5 0 0 1 2 19.54 12 12 0 0 0 8.29 21c7.55 0 11.69-6.26 11.69-11.69 0-.18-.01-.35-.02-.53A8.36 8.36 0 0 0 22.46 6z" />
                        </svg>
                    </SocialIcon>

                    <SocialIcon href="mailto:you@example.com" label="Email">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                        </svg>
                    </SocialIcon>

                    <SocialIcon href="https://t.me/" label="Telegram">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M21.5 3.1L2.9 10.1c-.9.3-.9 1.1-.1 1.4l4 1.3 1.6 4.9c.3.9 1.1.9 1.5.1L13 14l6.4 4.7c.9.6 1.7.2 1.9-1.1L22.6 4.2c.2-1.3-.6-1.8-1.1-1.1zM8.6 13.3l6.6-5.1-7.4 3.2 1.3 1.9z" />
                        </svg>
                    </SocialIcon>

                    <SocialIcon href="https://github.com/vamsi-o" label="GitHub">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.305 3.492 .998.108-.775.418-1.305.76-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.468-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23A11.52 11.52 0 0 1 12 5.8c1.02.004 2.045.137 3.003.402 2.291-1.552 3.297-1.23 3.297-1.23.654 1.653.242 2.873.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.625-5.48 5.922.43.37.815 1.102.815 2.222 0 1.606-.015 2.896-.015 3.286 0 .32.216.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                    </SocialIcon>

                    <SocialIcon href="https://www.linkedin.com/in/vam-si-b68b74372" label="LinkedIn">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.413v1.56h.049c.476-.9 1.637-1.852 3.369-1.852 3.602 0 4.268 2.37 4.268 5.455v6.289zM5.337 7.433a2.064 2.064 0 1 1-.001-4.128 2.064 2.064 0 0 1 .001 4.128zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.273V1.727C24 .774 23.2 0 22.225 0z" />
                        </svg>
                    </SocialIcon>
                </div>
            </div>

            {/* <div>This is from the second one</div> */}
        </div>
    )
}

export default Footer