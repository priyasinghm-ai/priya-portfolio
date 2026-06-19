import React from 'react'
import { motion } from 'framer-motion'
import { BrainCircuit, Cloud, Database, Workflow } from 'lucide-react'
import { skills } from '../data/profile'

const icons = [BrainCircuit, Database, Cloud, Workflow]

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="sectionHeader">
        <p>Capabilities</p>
        <h2>Technical Skills</h2>
      </div>
      <div className="skillGrid">
        {skills.map((skill, index) => {
          const Icon = icons[index]
          return (
            <motion.div
              className="skillCard"
              key={skill.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <Icon size={30}/>
              <h3>{skill.title}</h3>
              <p>{skill.items.join(" • ")}</p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
