import React, { useState } from 'react';

import './App.css';

import { ResumeText } from './Text';

const App = () => {
  const [page, setPage] = useState('');

  const year = new Date().getFullYear();

  return (
    <div className="my-app">
      {/* LANDING */}
      <div id="/home" className="page landing">
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
      <header className="header">
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

      {/* ABOUT */}
      <div id="/about" className="page about">
        <div>
          <h1>About</h1>
          <div className="content">
            <p>
              After graduating from Oakland University with a Bachelor of Arts
              in Journalism in 2010, Mike Sandula worked as a copy editor for
              several newspapers in Southeast Michigan.
            </p>
            {/* Add paragraph about WHY I made the switch */}
            <p>
              In 2016, Mike attended the Front-End Bootcamp at Grand Circus in
              Detroit and made the switch to programming, where his background
              as a copy editor has proven handy in identifying bugs and
              maintaining clean code.
            </p>
            <p>
              Mike specializes in building front-ends for large web
              applications.
            </p>
            <p>
              When he's not behind a computer, Mike can be found behind his drum
              set, behind a book, or beside his wife and their cat, Ziggy.
            </p>
          </div>
        </div>
      </div>

      {/* RESUME */}
      <div id="/resume" className="page resume">
        <div>
          <h1>Resume</h1>
          <div className="content">
            <pre>
              <code>{ResumeText}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer>Copyright &copy;{year} Mike Sandula</footer>
    </div>
  );
};

export default App;
