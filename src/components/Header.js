import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="code">
        <span className="code-operator">{'<'}</span>
        <span className="code-class">{'MikeSandula'}</span>
        <span className="code-operator">{' /> '}</span>
        <span className="code-field">{'{'}</span>
        <span className="code-singleLineComment">
          {'/* Software Developer */'}
        </span>
        <span className="code-field">{'}'}</span>
      </div>
      <div className="navigation">
        <span className="nav-link-active">About</span>
        <span className="separator">|</span>
        <span className="nav-link">Resume</span>
      </div>
    </header>
  );
};

export default Header;
