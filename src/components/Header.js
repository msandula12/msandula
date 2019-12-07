import React from 'react';
import { Link } from 'react-router-dom';

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
        <Link to="/about" className="nav-link">
          About
        </Link>
        <span className="separator">|</span>
        <Link to="/resume" className="nav-link">
          Resume
        </Link>
      </div>
    </header>
  );
};

export default Header;
