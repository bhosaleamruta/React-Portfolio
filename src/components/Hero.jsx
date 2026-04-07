import React, { useEffect, useRef } from 'react';
import './Hero.css';

export default function Hero() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform =
          `translate(${e.clientX - 250}px, ${e.clientY - 250}px)`;
      }
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <>
      <div className="cursor-glow" ref={cursorRef} />

      <section id="hero" className="hero">
        <div className="hero-orb orb1" />
        <div className="hero-orb orb2" />
        <div className="hero-orb orb3" />

        {/* LEFT */}
        <div className="hero-left">
          <div className="hero-eyebrow">
            <div className="eyebrow-dot">✦</div>
            Available for Opportunities
          </div>

          <h1 className="hero-name">
            Amruta<br />
            <span className="grad-text">Bhosale</span>
          </h1>

          <p className="hero-role">
            <span className="role-chip">UI Developer</span>
            <span className="role-chip">React</span>
            <span className="role-chip">Frontend Engineer</span>
          </p>

          <p className="hero-desc">
            Crafting pixel-perfect, high-performance web experiences with 2+ years
            of expertise in React.js, JavaScript ES6+, and modern UI/UX systems.
          </p>

          <div className="hero-btns">
            <a href="#projects" className="btn-grad">View My Work →</a>
            <a href="#contact" className="btn-ghost">Let's Connect</a>
          </div>
        </div>

        {/* RIGHT — Photo */}
        <div className="hero-right">
          <div className="photo-wrap">
            <DotGrid />

            <div className="badge-float bf-top">
              <span className="badge-num grad-text">2+</span>
              <span className="badge-lbl">Years Exp.</span>
            </div>

            <div className="badge-float bf-bottom">
              <span className="badge-num grad-text">5+</span>
              <span className="badge-lbl">Projects Delivered</span>
            </div>

            <div style={{ position: 'relative' }}>
              <div className="photo-ring" />
              <div className="photo-frame">
                {/*
                  TO ADD YOUR PHOTO:
                  Replace the div below with:
                  <img src={process.env.PUBLIC_URL + '/photo.jpg'} alt="Amruta Bhosale" />
                  and place your photo in the /public folder
                */}
                <div className="photo-placeholder">
                  <img src={process.env.PUBLIC_URL + '/photo.jpg'} alt="Amruta Bhosale" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function DotGrid() {
  return (
    <div className="dot-grid">
      {Array.from({ length: 25 }).map((_, i) => (
        <span key={i} />
      ))}
    </div>
  );
}
