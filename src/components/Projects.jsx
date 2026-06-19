import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { projects } from '../data/profile'

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="sectionHeader">
        <p>Portfolio</p>
        <h2>Featured Projects</h2>
      </div>

      <div className="projectGrid">
        {projects.map((project, index) => (
          <motion.article
            className="projectCard"
            key={project.title}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.12 }}
            whileHover={{ y: -8 }}
          >
            <div className="projectIndex">0{index + 1}</div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="chips">
              {project.tech.map((item) => <span key={item}>{item}</span>)}
            </div>
            <a href={project.link} target="_blank">View Repository <ExternalLink size={15}/></a>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
