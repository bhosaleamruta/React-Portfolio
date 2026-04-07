import React, { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import './Experience.css';

const jobs = [
  {
    id: 'j1',
    role: 'Application Engineer',
    company: 'Three M Software',
    period: '2023 — Present · Pune, India',
    points: [
      'Enhanced user engagement metrics by 25% through modern UI/UX integration in web applications.',
      'Led development of customer-centric digital experiences, resulting in a 15% client satisfaction increase.',
      'Managed 5+ concurrent projects, decreasing delivery overruns by 30% through smart prioritization.',
      'Built scalable, responsive web apps using JavaScript frameworks, improving site speed by 20%.',
      'Maintained cross-browser compatibility across 50+ websites in a collaborative team environment.',
    ],
    tags: ['React.js', 'JavaScript', 'Mendix', 'Figma', 'REST APIs', 'Git'],
  },
  {
    id: 'j2',
    role: 'Front End Developer',
    company: 'Gayatri Web Services',
    period: 'Aug 2022 — May 2023 · Mumbai, India',
    points: [
      'Played a key role in building and optimizing web applications in a collaborative dev team.',
      'Improved mobile responsiveness by 50% using CSS media queries and optimized layouts.',
      'Designed and implemented mobile-based features with a focus on usability.',
      'Created user-friendly web pages using semantic HTML and accessible markup.',
    ],
    tags: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'Responsive Design'],
  },
];

export default function Experience() {
  const [active, setActive] = useState('j1');
  const sectionRef = useReveal();
  const current = jobs.find(j => j.id === active);

  return (
    <section id="experience" ref={sectionRef}>
      <div className="s-label">Career Journey</div>
      <h2 className="s-title rv">Work Experience</h2>

      <div className="exp-layout rv">
        {/* Tabs */}
        <div className="exp-nav">
          {jobs.map(j => (
            <button
              key={j.id}
              className={`exp-tab ${active === j.id ? 'active' : ''}`}
              onClick={() => setActive(j.id)}
            >
              {j.company}
            </button>
          ))}
        </div>

        {/* Pane */}
        <div className="exp-pane" key={active}>
          <div className="exp-header">
            <div className="exp-role">{current.role}</div>
            <div className="exp-company grad-text">{current.company}</div>
            <div className="exp-period">{current.period}</div>
          </div>

          <ul className="exp-list">
            {current.points.map((p, i) => (
              <li key={i}>
                <div className="li-dot">✦</div>
                <span>{p}</span>
              </li>
            ))}
          </ul>

          <div className="exp-tags">
            {current.tags.map(t => (
              <span className="exp-tag" key={t}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
