import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <span>
        © {new Date().getFullYear()} <strong className="grad-text">Amruta Bhosale</strong> · Designed with passion
      </span>
      <span className="footer-right">UI Developer · React · Pune, India</span>
    </footer>
  );
}
