import { useState } from "react";



export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
    
    return (
        <nav className=" h-16 relative">
            <div className="mx-auto">
                <div className="flex justify-between items-center">
                    <div className="h-16 w-16">
                        <h3 className="logo">
                            TG
                        </h3>
                    </div>

                    { }
                    <div className="hidden md:block">
                        <div className="">
                            <a href="#" className="">
                                Home
                            </a>
                            <a href="#" className="">
                                About Me
                            </a>
                            <a href="#" className="">
                                Skills
                            </a>
                            <a href="#" className="">
                                Projects
                            </a>
                            <a href="#" className="">
                                Contact
                            </a>
                        </div>
                    </div>

                    { }
                    <div className="md:hidden">
                        <button 
                            onClick={toggleMenu}
                            className=""
                        >
                            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>

                    { }
                    {isMenuOpen && (
                        <div className="md:hidden absolute top-16 left-0 right-0 z-10 bg-light text-primary">
                            <div className="flex flex-col">
                                <a onClick={toggleMenu}href="#" className="">
                                    Home
                                </a>
                                <a onClick={toggleMenu} href="#" className="">
                                    About Me
                                </a>
                                <a onClick={toggleMenu} href="#" className="">
                                    Skills
                                </a>
                                <a onClick={toggleMenu} href="#" className="">
                                    Projects
                                </a>
                                <a onClick={toggleMenu} href="#" className="">
                                    Contact
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>

        </nav>
    )
}