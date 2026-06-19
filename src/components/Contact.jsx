import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/profile'

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <p className="sectionMini">Contact</p>
      <h2>Let's Connect</h2>
      <p>Open to AI Engineering, Data Engineering, Cloud Data Platform and Enterprise AI opportunities.</p>
      <div className="actions center">
        <a className="btn primary" href={`mailto:${profile.email}`}><Mail size={18}/> Email</a>
        <a className="btn secondary" href={profile.linkedin} target="_blank"><Linkedin size={18}/> LinkedIn</a>
        <a className="btn secondary" href={profile.github} target="_blank"><Github size={18}/> GitHub</a>
      </div>
    </section>
  )
}
