import NavBar from "@/components/nav-bar"
import Hero from "@/components/hero-section"
import About from "@/components/about-section"
import Skills from "@/components/skills-section"
import Projects from "@/components/projects-section"
import Blogs from "@/components/blogs-section"
import Testimonials from "@/components/testimonials-section"
import Resume from "@/components/resume-section"
import Certifications from "@/components/certifications-section"
import Contact from "@/components/contact-section"
import Footer from "@/components/footer"
import Preloader from "@/components/preloader"

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Preloader />
      <NavBar />
      <section id="home">
        <Hero />
      </section>
      <section id="about" className="py-20">
        <About />
      </section>
      <section id="skills" className="py-20 bg-gray-950">
        <Skills />
      </section>
      <section id="projects" className="py-20">
        <Projects />
      </section>
      <section id="blogs" className="py-20 bg-gray-950">
        <Blogs />
      </section>
      <section id="testimonials" className="py-20">
        <Testimonials />
      </section>
      <section id="resume" className="py-20 bg-gray-950">
        <Resume />
      </section>
      <section id="certifications" className="py-20">
        <Certifications />
      </section>
      <section id="contact" className="py-20 bg-gray-950">
        <Contact />
      </section>
      <Footer />
    </main>
  )
}
