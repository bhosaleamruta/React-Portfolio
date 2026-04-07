import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import './styles/global.css';

import Navbar     from './components/Navbar';
import Hero       from './components/Hero';
import Ticker     from './components/Ticker';
import Skills     from './components/Skills';
import Experience from './components/Experience';
import Numbers    from './components/Numbers';
import Projects   from './components/Projects';
import Strengths  from './components/Strengths';
import Education  from './components/Education';
import Contact    from './components/Contact';
import Footer     from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Skills />
        <Experience />
        <Numbers />
        <Projects />
        <Strengths />
        <Education />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
