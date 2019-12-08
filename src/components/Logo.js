import React from 'react';
import Typist from 'react-typist';

import './Logo.css';

const Logo = () => {
  return (
    <Typist
      className="code my-name"
      avgTypingDelay={200}
      cursor={{ hideWhenDone: true, hideWhenDoneDelay: 0 }}
      startDelay={2000}
      stdTypingDelay={100}
    >
      <span className="code-operator">{'<'}</span>
      <span className="code-class">{'MikeSandula'}</span>
      <span className="code-operator">{' /> '}</span>
      <span className="code-field">{'{'}</span>
      <span className="code-singleLineComment">
        {'/* Software Developer */'}
      </span>
      <span className="code-field">{'}'}</span>
    </Typist>
  );
};

export default Logo;
