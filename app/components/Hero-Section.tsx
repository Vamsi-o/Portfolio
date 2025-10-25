
import NavBar from "./NavBar"
// import { useRouter   } from "next/navigate"
export const HeroSection = () => {
    return (
        <div className="min-h-screen w-screen flex flex-col bg-[url('/hero.svg')] bg-cover bg-no-repeat">
            <nav className="sticky top-0">
                <NavBar />
            </nav>
            <div className="flex flex-col items-center my-auto text-center">
                <h1 className="text-white text-7xl font-extrabold">From Idea to Scale.</h1>
                <h1 className="text-white text-7xl font-extrabold">Simplified.</h1>
                <h3 className="m-4 text-2xl text-gray-50">Ship at lightning speed, and scale to a global audience.</h3>
                <h3 className="text-2xl text-gray-200">Effortlessly with our next-gen serverless Postgres database.</h3>

                <a href="https://x.com/vamsi__0" target="_black">
                    <button className="m-8 p-4  rounded-2xl text-white bg-[#5a67d8] cursor-pointer hover:bg-[#667eea] transition-colors duration-300 ease-in-out transform hover:scale-120 hover:font-extrabold">
                        Contact us
                    </button>
                </a>
            </div>
        </div>
    )
}
export default HeroSection