import { StarBackground } from "../components/StarBackground.jsx"
import { ThemeToggle } from "../components/ThemeToggle"
import { NavBar } from "../components/NavBar"
import { HeroSection } from "../components/HeroSection.jsx"
import { AboutSection } from "../components/AboutMe.jsx"
import { SkillsSection } from "../components/SkillsSection.jsx"
import { ProjectSection } from "../components/ProjectSection.jsx"
import { ContactSection } from "../components/ContactSection.jsx"
import { Footer } from "../components/Footer.jsx"

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle/>


      {/* Background Effect */}
      <StarBackground/>


      {/* NavBar */}
      <NavBar/>

      {/* Main Content */}
      <main>
        <HeroSection/>
        <AboutSection/>
        <SkillsSection/>
        <ProjectSection/>
        <ContactSection/>

      </main>


      {/* Footer */}
      <Footer/>



    </div>
  )
}
