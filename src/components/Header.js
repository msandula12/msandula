import React from 'react';

import { scrollToPage } from '../utils/helpers';

import './Header.css';

const Header = ({ activePage }) => {
  const pages = [
    {
      label: 'About',
      page: 'about'
    },
    {
      label: 'Resume',
      page: 'resume'
    }
  ];

  const getPositionOfUnderline = () => {
    const index = activePage
      ? pages.map(page => page.page).indexOf(activePage)
      : 0;
    return (100 / pages.length) * index;
  };

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
      <nav>
        {pages.map(page => (
          <a
            href={`#/${page.page}`}
            key={page.page}
            onClick={() => scrollToPage(page.page)}
            style={{ width: `100 / ${pages.length}%` }}
          >
            {page.label}
          </a>
        ))}
        <hr style={{ marginLeft: `${getPositionOfUnderline()}%` }} />
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
