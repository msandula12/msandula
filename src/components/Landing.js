import React from 'react';

import { usePageDispatch } from '../context/PageContext';

// import './Landing.css';

const Landing = () => {
  const dispatch = usePageDispatch();

  return (
    <div className="page landing">
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
        <a
          href="#/about"
          onClick={() => dispatch({ type: 'setPage', value: 'about' })}
        >
          {'>'}
        </a>
      </div>
    </div>
  );
};

export default Landing;
