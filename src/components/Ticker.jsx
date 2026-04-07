import React from 'react';
import './Ticker.css';

const items = [
  'React.js', 'JavaScript ES6+', 'HTML5 & CSS3', 'Figma',
  'Mendix', 'Bootstrap', 'Git', 'Responsive Design',
  'REST APIs', 'Agile', 'Component Architecture', 'UI/UX Design',
];

export default function Ticker() {
  const doubled = [...items, ...items];

  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <React.Fragment key={i}>
            <span><b>{item}</b></span>
            <span className="ticker-sep">✦</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
