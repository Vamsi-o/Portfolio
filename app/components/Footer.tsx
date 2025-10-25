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
        <div className="flex gap-8 text-white font-extrabold mx-40 bg-transparent py-6">
            <div className="flex flex-col text-2xl  ">
                Vamshi
                <div className="flex gap-4  my-2">
                    <SocialIcon href="https://x.com/vamsi__0" label="Twitter">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 0 0 1.88-2.36 8.5 8.5 0 0 1-2.7 1.03A4.24 4.24 0 0 0 11.1 9.03c0 .33.04.66.11.97A12.04 12.04 0 0 1 3.15 4.8a4.23 4.23 0 0 0 1.31 5.66 4.2 4.2 0 0 1-1.92-.53v.05c0 2.06 1.46 3.78 3.4 4.17a4.27 4.27 0 0 1-1.91.07 4.25 4.25 0 0 0 3.96 2.95A8.5 8.5 0 0 1 2 19.54 12 12 0 0 0 8.29 21c7.55 0 11.69-6.26 11.69-11.69 0-.18-.01-.35-.02-.53A8.36 8.36 0 0 0 22.46 6z" />
                        </svg>
                    </SocialIcon>

                    <SocialIcon href="mailto:iamvamsi9@gmail.com" label="Email">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                        </svg>
                    </SocialIcon>

                    <SocialIcon href="https://t.me/+919381721427" label="Telegram">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M21.5 3.1L2.9 10.1c-.9.3-.9 1.1-.1 1.4l4 1.3 1.6 4.9c.3.9 1.1.9 1.5.1L13 14l6.4 4.7c.9.6 1.7.2 1.9-1.1L22.6 4.2c.2-1.3-.6-1.8-1.1-1.1zM8.6 13.3l6.6-5.1-7.4 3.2 1.3 1.9z" />
                        </svg>
                    </SocialIcon>
                </div>
            </div>

            <div>This is from the second one</div>
        </div>
    )
}

export default Footer