import React from 'react';

import './App.css';

const App = () => {
  return (
    <div className="my-app">
      {/* LANDING */}
      <div id="home" className="page landing">
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
        <div className="scroll-down arrow-down">
          <a className="arrow" href="#about">
            {'>'}
          </a>
        </div>
      </div>

      {/* ABOUT */}
      <div id="about" className="page about">
        <div>
          <h1>About</h1>
          <div className="content">
            After graduating from Oakland University in 2010 with a Bachelor of
            Arts in Journalism, Mike Sandula worked for several years as a copy
            editor. But eventually he found his true passion in coding.
          </div>
        </div>
      </div>

      {/* RESUME */}
      <div id="resume" className="page resume">
        <div>
          <h1>Resume</h1>
          <div className="content">{`{/* TODO *}`}</div>
        </div>
      </div>

      {/* HEADER */}
      <div className="header"></div>
    </div>
  );
};

export default App;
