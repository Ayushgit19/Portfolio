import React from 'react'
import { ThemeToggle } from '../components/ThemeToggle'
import StarBackground from '@/components/StarBackground'
import { NavBar } from '../components/NavBar'
import HeroSections from '../components/HeroSections'
import AboutMe from '../components/AboutMe'
import SkillsSectioms from '../components/SkillsSectioms'
import ProjectsSection from '../components/ProjectsSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden '>

        {/* Theme Toggler */}
          <ThemeToggle />

        {/* Background Effects */}
          <StarBackground /> 

        {/* NavBar */}
          <NavBar />

        {/* Main Content */}
          <main>
            <HeroSections />
            <AboutMe />
            <SkillsSectioms />
            <ProjectsSection />
            <ContactSection />
          </main>

        {/* Footer */}
        <Footer />

    </div>
  )
}

export default Home