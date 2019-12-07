import React from 'react';
import './Logo.css';

const Logo = () => {
  return (
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
  );
};

export default Logo;
