import { useState } from "react"
import logo from "../assets/logo.webp"
import { RiCloseLine, RiMenu3Fill } from "@remixicon/react"
import { LINKS } from "../constants/index";


const Navbar = () => {
        const [isOpen, setIsOpen] = useState(false)

        const toggleMenu = () =>{
            setIsOpen(!isOpen);
        };

    return (
    <nav className="border-b-2 px-0">
        <div className="w-full flex justify-between items-center py-3">

        <div className="pl-2">
            <a href="#">
                <h2 width={150} height={20} className="uppercase text-sm font-bold">Lunarcreation</h2>
            </a>
        </div>

        <div className="md:hidden">
            <button onClick={toggleMenu} className="text-2xl pr-2 focus:outline-none" 
            aria-label={isOpen ? "Close menu" : "Open menu"}>
                {isOpen ? <RiCloseLine /> : <RiMenu3Fill />}
            </button>
            </div>    

            <div className="hidden md:flex space-x-8 md:space-x-4 pr-2">
                {LINKS.map((link, index) => (
                    <a key={index} href={link.link} className="uppercase text-sm font-medium">
                        {link.name}
                    </a>
                ))}
            </div>
        </div>

        <div className={`${isOpen ? "block" : "hidden"} md:hidden absolute bg-neutral-50 w-full py-5 px-4 mt-2 border-b-4`}>
            {LINKS.map((link, index) => (
                    <a key={index} href={link.link} className="uppercase text-lg font-medium block py-2 tracking-wide">
                        {link.name}
                    </a>
            ))}
        </div>
    </nav>
  )
}

export default Navbar