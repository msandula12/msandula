import React, { useState } from 'react';

import { scrollToPage } from '../utils/helpers';

import './Header.css';

const Header = ({ activePage }) => {
  const [canShowMenu, setCanShowMenu] = useState(true);
  const [isShowingMenu, setIsShowingMenu] = useState(true);

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

  const handlePageNav = page => {
    if (canShowMenu && isShowingMenu) {
      closeMenu();
    }
    scrollToPage(page);
  };

  const closeMenu = () => {
    setIsShowingMenu(false);
  };

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
      {!canShowMenu && (
        <nav>
          {pages.map(page => (
            <a
              href={`#/${page.page}`}
              key={page.page}
              onClick={() => handlePageNav(page.page)}
              style={{ width: `100 / ${pages.length}%` }}
            >
              {page.label}
            </a>
          ))}
          <hr style={{ marginLeft: `${getPositionOfUnderline()}%` }} />
        </nav>
      )}
      <div className="nav-icon">
        <div className="arrow rotate-90 float-right">
          <a href="#/home" onClick={() => handlePageNav('home')}>
            {'<'}
          </a>
        </div>
      </div>

      {isShowingMenu && (
        <div className="menu">
          <div onClick={closeMenu} className="menu-close">
            X
          </div>
          <nav>
            {pages.map(page => (
              <a
                href={`#/${page.page}`}
                key={page.page}
                onClick={() => handlePageNav(page.page)}
                style={{ width: `100 / ${pages.length}%` }}
              >
                {page.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
