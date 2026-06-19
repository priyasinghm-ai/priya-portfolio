import React from 'react'
import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import { certifications } from '../data/profile'

export default function Certifications() {
  return (
    <section className="section" id="certifications">
      <div className="sectionHeader">
        <p>Credentials</p>
        <h2>Certifications</h2>
      </div>
      <div className="certGrid">
        {certifications.map((cert, index) => (
          <motion.div
            className="certCard"
            key={cert}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.04 }}
          >
            <Award size={18}/>
            {cert}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
