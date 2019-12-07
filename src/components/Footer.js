import React from 'react';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="code-operator">
      Copyright &copy; {year} Mike Sandula
    </footer>
  );
};

export default Footer;
