import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { Home } from '../sections/Home'
import { About } from '../sections/About'
import { Skills } from '../sections/Skills'
import { Projects } from '../sections/Projects'
import { Contact } from '../sections/Contact'

export function Navigation() {
    return (
        <>
            <Navbar />
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </>
    )
}