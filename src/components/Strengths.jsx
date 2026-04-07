import React from 'react';
import { useReveal } from '../hooks/useReveal';
import './Strengths.css';

const strengths = [
  {
    num: '01',
    icon: '🔍',
    title: 'Problem Solving',
    text: 'Rapidly identifies and resolves complex technical bugs — contributing to a 20% decrease in system downtime across all managed projects.',
  },
  {
    num: '02',
    icon: '👥',
    title: 'Team Leadership',
    text: 'Led a team of 5 developers, ensuring timely UI project delivery while enhancing collaboration and overall development efficiency.',
  },
  {
    num: '03',
    icon: '💡',
    title: 'Innovative Thinking',
    text: 'Generates creative development solutions that have enhanced overall user experience by 25% across multiple client-facing platforms.',
  },
];

export default function Strengths() {
  const sectionRef = useReveal();

  return (
    <section id="strengths" ref={sectionRef}>
      <div className="s-label">What I Bring</div>
      <h2 className="s-title rv">Core Strengths</h2>

      <div className="strengths-grid">
        {strengths.map(s => (
          <div className="str-card rv" key={s.num}>
            <div className="str-num">{s.num}</div>
            <div className="str-ico">{s.icon}</div>
            <div className="str-title">{s.title}</div>
            <div className="str-text">{s.text}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
