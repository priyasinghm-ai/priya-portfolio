import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="site">
      <div className="orb orbOne" />
      <div className="orb orbTwo" />
      <Navbar />
      <Hero />
      <main>
        <section className="section" id="about">
          <div className="sectionHeader">
            <p>About</p>
            <h2>Enterprise AI, Data Engineering and Cloud Solutions</h2>
          </div>
          <p className="lead">
            I build AI-ready data systems and enterprise applications that connect cloud platforms, modern data engineering, machine learning workflows and intelligent automation. My work focuses on practical business outcomes across financial services, healthcare data platforms and ServiceNow enterprise ecosystems.
          </p>
        </section>
        <Projects />
        <Skills />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <footer>© 2026 Priya Singh • Built with React, Vite & Framer Motion</footer>
    </div>
  )
}
