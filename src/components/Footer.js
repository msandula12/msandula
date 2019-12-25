import React from 'react';

import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="split-footer">
        View the source code at{' '}
        <a
          className="code-field"
          href="https://github.com/msandula12/msandula"
          rel="noopener noreferrer"
          target="_blank"
        >
          github.com/msandula12/msandula
        </a>
        .
      </div>{' '}
      <div className="split-footer">Copyright &copy;{year} Mike Sandula.</div>
    </footer>
  );
};

export default Footer;
