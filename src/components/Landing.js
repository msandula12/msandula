import React, { useState } from 'react';

import Typing from 'react-typing-animation';

import { scrollToPage } from '../utils/helpers';

import './Landing.css';

import FadeInSection from './FadeInSection';

const Landing = () => {
  const [isDoneTyping, setIsDoneTyping] = useState(false);

  const startTyping = () => {
    document.body.classList.add('no-scroll');
  };

  const finishTyping = () => {
    setIsDoneTyping(true);
    document.body.classList.remove('no-scroll');
  };

  return (
    <div
      className="page landing"
      style={{ background: isDoneTyping ? '#2a2a2a' : '#000' }}
    >
      <FadeInSection disabled={!isDoneTyping}>
        <div className="landing-logo">
          <Typing
            cursor={<span className="cursor">|</span>}
            onFinishedTyping={finishTyping}
            onStartedTyping={startTyping}
            speed={75}
          >
            {' '}
            <Typing.Reset count={1} delay={1500} />
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
            <Typing.Delay ms={1500} />
          </Typing>
        </div>
      </FadeInSection>
      {isDoneTyping && (
        <div className="scroll-down icon icon-shadow">
          <a
            href="#/about"
            className="clickable-padding"
            onClick={() => scrollToPage('about')}
          >
            <i className="fas fa-chevron-down" />
          </a>
        </div>
      )}
    </div>
  );
};

export default Landing;
