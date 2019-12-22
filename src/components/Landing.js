import React from 'react';

import './Landing.css';

const Landing = () => {
  const scrollToPage = (event, page) => {
    event.preventDefault();
    document.getElementById(`/${page}`).scrollIntoView({
      behavior: 'smooth'
    });
  };

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
        <a href="#/about" onClick={e => scrollToPage(e, 'about')}>
          {'>'}
        </a>
      </div>
    </div>
  );
};

export default Landing;
