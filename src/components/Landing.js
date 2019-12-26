import React, { useState } from 'react';

import Typing from 'react-typing-animation';

import { scrollToPage } from '../utils/helpers';

import './Landing.css';

import FadeInSection from './FadeInSection';

const Landing = () => {
  const [isDoneTyping, setIsDoneTyping] = useState(false);

  const finishTyping = () => {
    setIsDoneTyping(true);
    document.body.classList.remove('no-scroll');
  };

  return (
    <div
      className="page landing"
      style={{ background: isDoneTyping ? '#2a2a2a' : '#000' }}
    >
      <FadeInSection>
        <div className="landing-logo">
          <Typing cursorClassName="cursor" onFinishedTyping={finishTyping}>
            <div className="split-logo">
              <span className="code-operator">{'<'}</span>
              <span className="code-class">{'MikeSandula'}</span>
              <span className="code-operator">{' /> '}</span>
            </div>
            <div className="split-logo">
              <span className="code-field">{' {'}</span>
              <span className="code-singleLineComment">
                {'/* Software Developer */'}
              </span>
              <span className="code-field">{'}'}</span>
            </div>
          </Typing>
        </div>
      </FadeInSection>
      {isDoneTyping && (
        <div className="scroll-down icon icon-shadow">
          <a href="#/about" onClick={() => scrollToPage('about')}>
            <i className="fas fa-chevron-down" />
          </a>
        </div>
      )}
    </div>
  );
};

export default Landing;
