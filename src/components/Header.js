import React, { useEffect, useState } from 'react';

import { scrollToPage } from '../utils/helpers';

import './Header.css';

const Header = ({ activePage }) => {
  const [shouldShowMenu, setShouldShowMenu] = useState(
    window.innerWidth < 1200
  );
  const [isShowingMenu, setIsShowingMenu] = useState(false);

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

  useEffect(() => {
    const detectScreenSize = () => {
      setShouldShowMenu(window.innerWidth < 1200);
    };
    window.addEventListener('resize', detectScreenSize);
    return () => window.removeEventListener('resize', detectScreenSize);
  }, []);

  const handlePageNav = page => {
    if (shouldShowMenu && isShowingMenu) {
      closeMenu();
    }
    scrollToPage(page);
  };

  const openMenu = () => {
    setIsShowingMenu(true);
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
        {/* LOGO */}
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

      {/* NAV - HEADER */}
      {!shouldShowMenu && (
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

      {/* NAV - ICON (OPEN OR CLOSE MENU) */}
      <div className="nav-icon">
        <div className="icon icon-shadow text-right">
          {shouldShowMenu ? (
            <i onClick={openMenu} className="fas fa-bars" />
          ) : (
            <a href="#/home" onClick={() => handlePageNav('home')}>
              <i className="fas fa-chevron-up" />
            </a>
          )}
        </div>
      </div>

      {/* MENU OVERLAY */}
      {isShowingMenu && (
        <div className="menu">
          <div onClick={closeMenu} className="icon icon-shadow flex-end">
            <i className="fas fa-times" />
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
