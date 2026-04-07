import React from 'react';
import { useReveal } from '../hooks/useReveal';
import './Education.css';

const education = [
  {
    icon: '🎓',
    degree: 'Bachelor of Computer Science',
    school: 'Savitribai Phule Pune University',
    year: '2018 – 2020 · Ahmadnagar, India',
  },
  {
    icon: '📋',
    degree: 'Post Graduate Diploma in Management',
    school: 'MIT School of Distance Education',
    year: '2024 · Pune, India',
  },
  {
    icon: '🏅',
    degree: 'Rapid Developer Certification',
    school: 'Mendix Platform',
    year: 'Certified',
  },
  {
    icon: '🏅',
    degree: 'Intermediate Developer Certification',
    school: 'Mendix Platform',
    year: 'Certified',
  },
];

const languages = [
  { name: 'English', level: 'Proficient' },
  { name: 'Hindi',   level: 'Native' },
  { name: 'Marathi', level: 'Native' },
];

export default function Education() {
  const sectionRef = useReveal();

  return (
    <section id="education" className="edu-section" ref={sectionRef}>
      <div className="s-label">Academic Background</div>
      <h2 className="s-title rv">Education &amp; Certifications</h2>

      <div className="edu-grid rv">
        {education.map((e, i) => (
          <div className="edu-card" key={i}>
            <div className="edu-ico">{e.icon}</div>
            <div>
              <div className="edu-degree">{e.degree}</div>
              <div className="edu-school grad-text">{e.school}</div>
              <div className="edu-year">{e.year}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="s-label rv" style={{ marginBottom: '1rem', marginTop: '3rem' }}>
        Languages
      </div>
      <div className="lang-row rv">
        {languages.map(l => (
          <div className="lang-card" key={l.name}>
            <div className="lang-name grad-text">{l.name}</div>
            <div className="lang-lvl">{l.level}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
