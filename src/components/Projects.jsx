import React from 'react';
import { useReveal } from '../hooks/useReveal';
import './Projects.css';

const projects = [
  {
    icon: '🏭',
    name: 'DMS — Die Management System',
    category: 'Industrial / Manufacturing',
    year: '2023',
    points: [
      'Designed responsive UI screens for die tracking, maintenance logs & lifecycle monitoring.',
      'Built user-friendly forms with validations & improved navigation for production teams.',
    ],
    tags: ['React', 'HTML5', 'CSS3', 'Mendix'],
  },
  {
    icon: '📦',
    name: 'RMMS — Raw Material Management',
    category: 'Inventory & Supply Chain',
    year: '2023',
    points: [
      'Developed dashboards for stock status, reorder alerts & supplier details.',
      'Implemented interactive tables with search, filters & optimized performance for large data.',
    ],
    tags: ['JavaScript', 'Bootstrap', 'REST API'],
  },
  {
    icon: '⏱️',
    name: 'Timesheet Management System',
    category: 'HR & Productivity',
    year: '2024',
    points: [
      'Created intuitive daily/weekly time entry interfaces with built-in validations.',
      'Built analytics & approval screens for managers with improved mobile responsiveness.',
    ],
    tags: ['React', 'CSS Grid', 'Figma'],
  },
  {
    icon: '🤝',
    name: 'CRM — Customer Relationship Mgmt',
    category: 'Sales & Marketing',
    year: '2024',
    points: [
      'Designed lead, opportunity & customer detail screens with enhanced UX.',
      'Developed dashboards for sales activity, pipeline tracking & follow-up reminders.',
    ],
    tags: ['React', 'JavaScript', 'Bootstrap'],
  },
];

export default function Projects() {
  const sectionRef = useReveal();

  return (
    <section id="projects" className="projects-section" ref={sectionRef}>
      <div className="s-label">Work Showcase</div>
      <h2 className="s-title rv">Featured Projects</h2>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="proj rv">
      <div className="proj-banner" />
      <div className="proj-body">
        <div className="proj-ico-row">
          <div className="proj-ico">{project.icon}</div>
          <span className="proj-year">{project.year}</span>
        </div>
        <div className="proj-name">{project.name}</div>
        <div className="proj-cat">{project.category}</div>
        <ul className="proj-points">
          {project.points.map((pt, i) => (
            <li key={i}>{pt}</li>
          ))}
        </ul>
      </div>
      <div className="proj-foot">
        {project.tags.map(t => (
          <span className="proj-tag" key={t}>{t}</span>
        ))}
      </div>
    </div>
  );
}
