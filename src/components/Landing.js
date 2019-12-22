import React from 'react';

import { scrollToPage } from '../utils/helpers';

import './Landing.css';

const Landing = () => {
  return (
    <div className="page landing">
      <div className="landing-logo">
        <div>
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
        <a href="#/about" onClick={() => scrollToPage('about')}>
          {'>'}
        </a>
      </div>
    </div>
  );
};

export default Landing;
