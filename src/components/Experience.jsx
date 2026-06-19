import React from 'react'
import { motion } from 'framer-motion'
import { BriefcaseBusiness } from 'lucide-react'

const experience = [
  {
    role: "Data / AI Engineer — Financial Services",
    text: "Built AI-driven workflows, Databricks pipelines, credit-risk features, MLflow tracking, RAG solutions and FastAPI AI services."
  },
  {
    role: "Data Engineer — Healthcare Data Platforms",
    text: "Developed Azure/GCP healthcare data lakes, ADF pipelines, Databricks ETL, streaming ingestion and data quality validation."
  },
  {
    role: "Data Associate — Analytics & Automation",
    text: "Built Python/SQL ETL, PDF extraction workflows, reporting datasets, Flask UI and automated validation scripts."
  }
]

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="sectionHeader">
        <p>Background</p>
        <h2>Experience Highlights</h2>
      </div>
      <div className="timeline">
        {experience.map((item, index) => (
          <motion.div
            className="timelineItem"
            key={item.role}
            initial={{ opacity: 0, x: -22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <BriefcaseBusiness />
            <div>
              <h3>{item.role}</h3>
              <p>{item.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
