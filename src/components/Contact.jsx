import React from 'react';
import { useReveal } from '../hooks/useReveal';
import './Contact.css';

const contactLinks = [
  { icon: '✉️', label: 'amrutab117@gmail.com', href: 'mailto:amrutab117@gmail.com' },
  { icon: '📱', label: '+91 9146299772',       href: 'tel:9146299772' },
  { icon: '📍', label: 'Pune, India',          href: null },
];

export default function Contact() {
  const sectionRef = useReveal();

  return (
    <section id="contact" ref={sectionRef}>
      <div className="contact-box rv">
        <div className="contact-orb" />
        <div className="s-label" style={{ justifyContent: 'center', marginBottom: '0.8rem' }}>
          Say Hello
        </div>
        <h2 className="contact-title">
          Open to <span className="grad-text">Opportunities</span>
        </h2>
        <p className="contact-sub">
          Frontend roles, UI/UX projects, or just a great conversation about tech.
        </p>
        <div className="contact-links">
          {contactLinks.map(c =>
            c.href ? (
              <a key={c.label} href={c.href} className="contact-link">
                <span className="cl-ico">{c.icon}</span>
                {c.label}
              </a>
            ) : (
              <span key={c.label} className="contact-link">
                <span className="cl-ico">{c.icon}</span>
                {c.label}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
