import React, { createRef, useEffect, useState } from 'react';

import './App.css';

import About from './components/About';
import Footer from './components/Footer';
import Resume from './components/Resume';

const App = () => {
  const [page, setPage] = useState('');
  const [shouldShowHeader, setShouldShowHeader] = useState(false);

  const homePage = createRef();

  useEffect(() => {
    const determineIfHomePageIsOutOfView = () => {
      if (!homePage.current) {
        return;
      }
      const rect = homePage.current.getBoundingClientRect();
      const { height, top } = rect;
      setShouldShowHeader(top + height <= 0);
    };
    window.addEventListener('scroll', determineIfHomePageIsOutOfView);
    return () =>
      window.removeEventListener('scroll', determineIfHomePageIsOutOfView);
  }, [homePage]);

  return (
    <div className="my-app">
      {/* LANDING */}
      <div id="/home" ref={homePage} className="page landing">
        <div className="landing-logo">
          <div className="my-name">
            <span className="code-operator">{'<'}</span>
            <span className="code-class">{'MikeSandula'}</span>
            <span className="code-operator">{' /> '}</span>
            <span className="code-field">{'{'}</span>
            <span className="code-singleLineComment">
              {'/* Software Developer */'}
            </span>
            <span className="code-field">{'}'}</span>
          </div>
        </div>
        <div className="scroll-down arrow rotate-90">
          <a href="#/about" onClick={() => setPage('about')}>
            {'>'}
          </a>
        </div>
      </div>

      {/* HEADER */}
      {shouldShowHeader && (
        <header>
          <div className="flex-1">
            <div className="my-name">
              <span className="code-operator">{'<'}</span>
              <span className="code-class">{'MikeSandula'}</span>
              <span className="code-operator">{' /> '}</span>
              <span className="code-field">{'{'}</span>
              <span className="code-singleLineComment">
                {'/* Software Developer */'}
              </span>
              <span className="code-field">{'}'}</span>
            </div>
          </div>
          <div className="nav">
            <a
              href="#/about"
              onClick={() => setPage('about')}
              className={page === 'about' ? 'active' : ''}
            >
              About
            </a>
            <a
              href="#/resume"
              onClick={() => setPage('resume')}
              className={page === 'resume' ? 'active' : ''}
            >
              Resume
            </a>
          </div>
          <div className="flex-1 scroll-up">
            <div className="arrow rotate-90 float-right">
              <a href="#/home" onClick={() => setPage('home')}>
                {'<'}
              </a>
            </div>
          </div>
        </header>
      )}

      {/* ABOUT */}
      <div id="/about">
        <About />
      </div>

      {/* RESUME */}
      <div id="/resume">
        <Resume />
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default App;
