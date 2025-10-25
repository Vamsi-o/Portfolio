import Image from "next/image"

export const NavBar = () => {
    return (
        <div className=" sticky top-2 flex justify-between items-center bg-black my-4   mx-40 rounded-4xl p-4">
            <div className="text-white font-bold flex items-center gap-3">
                <Image
                    src="/globe.svg"
                    alt="Products"
                    width={40}
                    height={40}
                    className="rounded-full object-cover w-10 h-10"
                />
                <h1>Hello world</h1>
            </div>
            <div >
                <a href="https://x.com/vamsi__0" target="_blank" rel="noopener noreferrer">
                    <button className="text-white font-bold cursor-pointer p-2 rounded-2xl bg-[#5a67d8] px-2 hover:bg-[#667eea] transition-colors duration-300 ease-in-out transform hover:scale-105">
                        Contact us
                    </button>
                </a>
            </div>
        </div>
    )
}
export default NavBar
