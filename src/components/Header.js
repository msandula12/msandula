import React from 'react';
import { animated, useSpring } from 'react-spring';

import { usePageDispatch, usePageState } from '../context/PageContext';

import './Header.css';

const Header = () => {
  const { page } = usePageState();
  const dispatch = usePageDispatch();

  const springProps = useSpring({
    top: 0,
    opacity: 1,
    from: { top: -64, opacity: 0 }
  });

  return (
    <animated.header style={springProps}>
      <div className="flex-1">
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
      <div className="nav">
        <a
          href="#/about"
          onClick={() => dispatch({ type: 'setPage', value: 'about' })}
          className={page === 'about' ? 'active' : ''}
        >
          About
        </a>
        <a
          href="#/resume"
          onClick={() => dispatch({ type: 'setPage', value: 'resume' })}
          className={page === 'resume' ? 'active' : ''}
        >
          Resume
        </a>
      </div>
      <div className="flex-1 scroll-up">
        <div className="arrow rotate-90 float-right">
          <a
            href="#/home"
            onClick={() => dispatch({ type: 'setPage', value: 'home' })}
          >
            {'<'}
          </a>
        </div>
      </div>
    </animated.header>
  );
};

export default Header;
