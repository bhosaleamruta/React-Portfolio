import React, { useEffect, useRef } from 'react';
import { useReveal } from '../hooks/useReveal';
import './Skills.css';

const skillBars = [
  { name: 'HTML5 & CSS3',       pct: 95 },
  { name: 'JavaScript ES6+',    pct: 88 },
  { name: 'React.js',           pct: 90 },
  { name: 'Mendix',             pct: 82 },
  { name: 'Figma / UI Design',  pct: 78 },
  { name: 'Responsive Design',  pct: 93 },
];

const skillCards = [
  { icon: '⚛️', name: 'Component Architecture', sub: 'Scalable React component systems' },
  { icon: '🔗', name: 'REST API Integration',   sub: 'Async data flows & state management' },
  { icon: '🌐', name: 'Cross-Browser Compat.',  sub: '50+ websites maintained' },
  { icon: '⚡', name: 'Performance Tuning',      sub: '20% speed improvement achieved' },
];

const pills = [
  'Git', 'Bootstrap', 'CSS Grid',
  'Flexbox', 'Media Queries', 'ES6 Modules',
  'Component Lifecycle', 'UI/UX Best Practices',
];

export default function Skills() {
  const sectionRef = useReveal();
  const barsRef = useRef(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = barsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          el.querySelectorAll('.skill-fill').forEach(fill => {
            fill.style.width = fill.dataset.w;
          });
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills-section" ref={sectionRef}>
      <div className="s-label">Technical Toolkit</div>
      <h2 className="s-title rv">Skills &amp; Expertise</h2>

      <div className="skills-top">
        {/* Skill Bars */}
        <div className="skill-rows rv" ref={barsRef}>
          {skillBars.map(s => (
            <div className="skill-row" key={s.name}>
              <div className="skill-row-head">
                <span className="skill-row-name">{s.name}</span>
                <span className="skill-row-pct grad-text">{s.pct}%</span>
              </div>
              <div className="skill-track">
                <div
                  className="skill-fill"
                  data-w={`${s.pct}%`}
                  style={{ width: 0 }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Mini cards */}
        <div className="skill-cards rv">
          {skillCards.map(c => (
            <div className="skill-mini" key={c.name}>
              <div className="skill-mini-ico">{c.icon}</div>
              <div>
                <div className="skill-mini-txt">{c.name}</div>
                <div className="skill-mini-sub">{c.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pills */}
      <div className="skills-pills rv">
        {pills.map(p => (
          <span className="pill" key={p}>{p}</span>
        ))}
      </div>
    </section>
  );
}
