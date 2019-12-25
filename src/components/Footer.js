import React from 'react';

import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      View the source code at{' '}
      <a
        className="code-field"
        href="https://github.com/msandula12/msandula"
        rel="noopener noreferrer"
        target="_blank"
      >
        github.com/msandula12/msandula
      </a>
      . Copyright &copy;{year} Mike Sandula.
    </footer>
  );
};

export default Footer;
