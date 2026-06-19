import React from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, Cloud, Database, BrainCircuit, Workflow, Award, BriefcaseBusiness, Sparkles } from "lucide-react";
import "./style.css";

const fadeUp = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } };

const projects = [
  { title: "Enterprise RAG AI Assistant", description: "Enterprise Retrieval-Augmented Generation assistant using FastAPI, LangChain, vector search and LLM-powered document retrieval.", tech: ["RAG", "LangChain", "FastAPI", "FAISS"], link: "https://github.com/priyasinghm-ai/enterprise-rag-ai-assistant" },
  { title: "Financial Credit Risk AI Platform", description: "Cloud-native AI platform using Databricks, Spark, MLflow and Azure Data Lake for credit risk analytics.", tech: ["Databricks", "Spark", "MLflow", "Azure"], link: "https://github.com/priyasinghm-ai/financial-credit-risk-ai-platform" },
  { title: "Healthcare Data Lake Quality Platform", description: "Healthcare data engineering platform using Azure Data Factory, Databricks, Delta Lake and data quality validation.", tech: ["ADF", "Delta Lake", "PySpark", "Quality"], link: "https://github.com/priyasinghm-ai/healthcare-data-lake-quality-platform" }
];

const skills = [
  { icon: BrainCircuit, title: "Generative AI", text: "RAG, LangChain, Claude, OpenAI, FastAPI, Agentic AI" },
  { icon: Database, title: "Data Engineering", text: "Spark, PySpark, Databricks, Delta Lake, Kafka, MLflow" },
  { icon: Cloud, title: "Cloud Platforms", text: "Azure, AWS, GCP, Azure Data Factory, BigQuery, GCS" },
  { icon: Workflow, title: "Enterprise Platforms", text: "ServiceNow, CMDB, CSDM, REST APIs, DevOps, GitHub Actions" }
];

const certs = [
  "Databricks Certified: Data Engineer Associate",
  "AWS Generative AI Applications Professional Certificate",
  "Microsoft Certified: Azure AI Fundamentals",
  "Certified Implementation Specialist – Data Foundations (CMDB and CSDM)",
  "Certified Lean Six Sigma Green Belt",
  "Microsoft Certified: Data Analytics Fundamentals",
  "Anthropic: Claude with the Anthropic API",
  "Anthropic: Claude with Google Vertex AI",
  "Anthropic: AI Fluency — Framework & Foundations",
  "Anthropic: Model Context Protocol — Advanced Topics",
  "LangChain: Project — Deep Agents"
];

function App() {
  return (
    <div className="site">
      <div className="orb orb-one" /><div className="orb orb-two" />
      <nav className="nav">
        <a href="#" className="brand">Priya Singh</a>
        <div className="navlinks">
          <a href="#projects">Projects</a><a href="#skills">Skills</a><a href="#experience">Experience</a><a href="#certifications">Certifications</a><a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <motion.div initial="hidden" animate="visible" transition={{ duration: 0.7 }} variants={fadeUp} className="hero-text">
          <span className="badge"><Sparkles size={16} /> Generative AI • Data Engineering • Cloud</span>
          <h1>Generative AI Engineer building enterprise data & AI platforms.</h1>
          <p>I design AI-powered applications, cloud-native data platforms and intelligent automation solutions across Financial Services, Healthcare and Enterprise IT.</p>
          <div className="actions">
            <a className="btn primary" href="https://github.com/priyasinghm-ai" target="_blank"><Github size={18}/> View GitHub</a>
            <a className="btn ghost" href="mailto:priya031998s@gmail.com"><Mail size={18}/> Contact Me</a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.92, rotate: -2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 0.8, delay: 0.15 }} className="hero-panel">
          <div className="code-card"><div className="dots"><span/><span/><span/></div>
            <pre>{`profile = {
  name: "Priya Singh",
  focus: ["GenAI", "Data Engineering", "Cloud"],
  platforms: ["Azure", "AWS", "GCP", "Databricks"],
  domains: ["Financial Services", "Healthcare"],
  building: "Enterprise AI Solutions"
}`}</pre>
          </div>
        </motion.div>
      </section>

      <main>
        <motion.section className="section" id="about" initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }} variants={fadeUp}>
          <h2>About Me</h2>
          <p className="lead">AI and Data Engineer with 6+ years of experience building enterprise-scale cloud data platforms, Generative AI applications, distributed data pipelines, machine learning workflows and intelligent automation solutions.</p>
        </motion.section>

        <motion.section className="section" id="projects" initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }} variants={fadeUp}>
          <h2>Featured Projects</h2>
          <div className="project-grid">{projects.map((p, idx) => (
            <motion.article className="project-card" key={p.title} whileHover={{ y: -8 }}>
              <div className="project-number">0{idx + 1}</div><h3>{p.title}</h3><p>{p.description}</p>
              <div className="chips">{p.tech.map(t => <span key={t}>{t}</span>)}</div>
              <a href={p.link} target="_blank">View Repository <ExternalLink size={15}/></a>
            </motion.article>
          ))}</div>
        </motion.section>

        <motion.section className="section" id="skills" initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }} variants={fadeUp}>
          <h2>Technical Skills</h2>
          <div className="skill-grid">{skills.map(({ icon: Icon, title, text }) => (
            <motion.div className="skill-card" key={title} whileHover={{ scale: 1.03 }}><Icon size={30}/><h3>{title}</h3><p>{text}</p></motion.div>
          ))}</div>
        </motion.section>

        <motion.section className="section" id="experience" initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }} variants={fadeUp}>
          <h2>Experience Highlights</h2>
          <div className="timeline">
            <div className="timeline-item"><BriefcaseBusiness /><div><h3>Data / AI Engineer — Financial Services</h3><p>Built AI-driven workflows, Databricks pipelines, credit-risk features, MLflow tracking, RAG solutions and FastAPI AI services.</p></div></div>
            <div className="timeline-item"><BriefcaseBusiness /><div><h3>Data Engineer — Healthcare Data Platforms</h3><p>Developed Azure/GCP healthcare data lakes, ADF pipelines, Databricks ETL, streaming ingestion and data quality validation.</p></div></div>
            <div className="timeline-item"><BriefcaseBusiness /><div><h3>Data Associate — Analytics & Automation</h3><p>Built Python/SQL ETL, PDF extraction workflows, reporting datasets, Flask UI and automated validation scripts.</p></div></div>
          </div>
        </motion.section>

        <motion.section className="section" id="certifications" initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }} variants={fadeUp}>
          <h2>Certifications</h2>
          <div className="cert-grid">{certs.map(c => <div className="cert" key={c}><Award size={18}/>{c}</div>)}</div>
        </motion.section>

        <section className="section contact" id="contact">
          <h2>Let's Connect</h2><p>Open to AI Engineering, Data Engineering, Cloud Data Platform and Enterprise AI opportunities.</p>
          <div className="actions center">
            <a className="btn primary" href="mailto:priya031998s@gmail.com"><Mail size={18}/> Email</a>
            <a className="btn ghost" href="https://www.linkedin.com/in/priya-271638338/" target="_blank"><Linkedin size={18}/> LinkedIn</a>
            <a className="btn ghost" href="https://github.com/priyasinghm-ai" target="_blank"><Github size={18}/> GitHub</a>
          </div>
        </section>
      </main>
      <footer>© 2026 Priya Singh • Built with React, Vite & Framer Motion</footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
