import React from 'react'
import { motion } from 'framer-motion'
import { Github, Mail, Sparkles } from 'lucide-react'
import { profile } from '../data/profile'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <motion.div
        className="heroText"
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span className="pill"><Sparkles size={16}/> Generative AI • Data Engineering • Cloud</span>
        <h1>Building enterprise AI and cloud data platforms.</h1>
        <p>{profile.summary}</p>
        <div className="actions">
          <a className="btn primary" href={profile.github} target="_blank"><Github size={18}/> View GitHub</a>
          <a className="btn secondary" href={`mailto:${profile.email}`}><Mail size={18}/> Contact Me</a>
        </div>
      </motion.div>

      <motion.div
        className="heroCard"
        initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="terminal">
          <div className="terminalTop"><span/><span/><span/></div>
          <pre>{`profile = {
  name: "Priya Singh",
  role: "Generative AI Engineer",
  focus: ["RAG", "Databricks", "Cloud"],
  domains: ["Finance", "Healthcare"],
  building: "Enterprise AI Solutions"
}`}</pre>
        </div>
      </motion.div>
    </section>
  )
}
