import React from 'react';

import { scrollToPage } from '../utils/helpers';

import './Header.css';

const Header = ({ activePage }) => {
  return (
    <header>
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
      <nav className="nav">
        <a
          href="#/about"
          onClick={() => scrollToPage('about')}
          className={activePage === 'about' ? 'active' : ''}
        >
          About
        </a>
        <a
          href="#/resume"
          onClick={() => scrollToPage('resume')}
          className={activePage === 'resume' ? 'active' : ''}
        >
          Resume
        </a>
      </nav>
      <div className="flex-1 scroll-up">
        <div className="arrow rotate-90 float-right">
          <a href="#/home" onClick={() => scrollToPage('home')}>
            {'<'}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
