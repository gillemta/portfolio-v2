import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false); // Close mobile menu after clicking
    }
    
    return (
        <nav className="w-full fixed top-0 z-50 bg-primary py-4">
            <div className="navbar-container">
                <div className="flex justify-between items-center">
                    <div className="h-16 w-16 flex justify-center items-center">
                        <a className="logo text-secondary">
                            TG
                        </a>
                    </div>

                    { }
                    <div className="hidden md:block">
                        <div className="">
                            <button onClick={() => scrollToSection('home')} className="px-4 py-2 text-secondary hover:text-accent transition-colors">
                                Home
                            </button>
                            <button onClick={() => scrollToSection('about')} className="px-4 py-2 text-secondary hover:text-accent transition-colors">
                                About Me
                            </button>
                            <button onClick={() => scrollToSection('skills')} className="px-4 py-2 text-secondary hover:text-accent transition-colors">
                                Skills
                            </button>
                            <button onClick={() => scrollToSection('projects')} className="px-4 py-2 text-secondary hover:text-accent transition-colors">
                                Projects
                            </button>
                            <button onClick={() => scrollToSection('contact')} className="px-4 py-2 text-secondary hover:text-accent transition-colors">
                                Contact
                            </button>
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
                    <AnimatePresence>
                        {isMenuOpen && (
                            <motion.div 
                                className="md:hidden absolute top-20 left-0 right-0 z-10 text-secondary"
                                style={{ backgroundColor: 'var(--color-primary)' }}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                                <div className="flex flex-col space-y-2 p-4">
                                    <motion.button 
                                        onClick={() => scrollToSection('home')} 
                                        className="block py-2 px-4 text-left hover:text-accent transition-colors"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1, duration: 0.2 }}
                                    >
                                        Home
                                    </motion.button>
                                    <motion.button 
                                        onClick={() => scrollToSection('about')} 
                                        className="block py-2 px-4 text-left hover:text-accent transition-colors"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.15, duration: 0.2 }}
                                    >
                                        About Me
                                    </motion.button>
                                    <motion.button 
                                        onClick={() => scrollToSection('skills')} 
                                        className="block py-2 px-4 text-left hover:text-accent transition-colors"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2, duration: 0.2 }}
                                    >
                                        Skills
                                    </motion.button>
                                    <motion.button 
                                        onClick={() => scrollToSection('projects')} 
                                        className="block py-2 px-4 text-left hover:text-accent transition-colors"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.25, duration: 0.2 }}
                                    >
                                        Projects
                                    </motion.button>
                                    <motion.button 
                                        onClick={() => scrollToSection('contact')} 
                                        className="block py-2 px-4 text-left hover:text-accent transition-colors"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3, duration: 0.2 }}
                                    >
                                        Contact
                                    </motion.button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

        </nav>
    )
}