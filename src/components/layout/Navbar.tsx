import { useState } from "react";



export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
    
    return (
        <nav className="w-full fixed top-0 z-50 bg-primary py-4">
            <div className="navbar-container">
                <div className="flex justify-between items-center">
                    <div className="h-16 w-16">
                        <h3 className="logo text-secondary">
                            TG
                        </h3>
                    </div>

                    { }
                    <div className="hidden md:block">
                        <div className="">
                            <a href="#" className="px-4 py-2 text-secondary">
                                Home
                            </a>
                            <a href="#" className="px-4 py-2 text-secondary">
                                About Me
                            </a>
                            <a href="#" className="px-4 py-2 text-secondary">
                                Skills
                            </a>
                            <a href="#" className="px-4 py-2 text-secondary">
                                Projects
                            </a>
                            <a href="#" className="px-4 py-2 text-secondary">
                                Contact
                            </a>
                        </div>
                    </div>

                    { }
                    <div className="md:hidden">
                        <button 
                            onClick={toggleMenu}
                            className="text-secondary"
                        >
                            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>

                    { }
                    {isMenuOpen && (
                        <div className="md:hidden absolute top-16 left-0 right-0 z-10 bg-light text-secondary">
                            <div className="flex flex-col space-y-2 p-4">
                                <a onClick={toggleMenu} href="#" className="block py-2 px-4">
                                    Home
                                </a>
                                <a onClick={toggleMenu} href="#" className="block py-2 px-4">
                                    About Me
                                </a>
                                <a onClick={toggleMenu} href="#" className="block py-2 px-4">
                                    Skills
                                </a>
                                <a onClick={toggleMenu} href="#" className="block py-2 px-4">
                                    Projects
                                </a>
                                <a onClick={toggleMenu} href="#" className="block py-2 px-4">
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