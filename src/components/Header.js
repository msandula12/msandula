import React, { useEffect, useState } from 'react';
import { animated, config, useTransition } from 'react-spring';
import PropTypes from 'prop-types';

import { scrollToPage } from '../utils/helpers';

import './Header.css';

import Menu from './Menu';

const Header = ({ activePage }) => {
  const [isShowingMenu, setIsShowingMenu] = useState(false);
  const [shouldShowMenu, setShouldShowMenu] = useState(
    window.innerWidth < 1200
  );

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

  const menuTransition = useTransition(isShowingMenu, null, {
    from: { opacity: 0 },
    enter: {
      opacity: 1
    },
    leave: {
      opacity: 0
    },
    config: config.slow
  });

  const handlePageNav = page => {
    if (isShowingMenu) {
      closeMenu();
    }
    scrollToPage(page);
  };

  const openMenu = () => {
    setIsShowingMenu(true);
    document.body.classList.add('no-scroll');
  };

  const closeMenu = () => {
    setIsShowingMenu(false);
    document.body.classList.remove('no-scroll');
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
        <div className="header-logo">
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
            <div className="clickable-padding" onClick={openMenu}>
              <i className="fas fa-bars" />
            </div>
          ) : (
            <a
              href="#/home"
              className="clickable-padding"
              onClick={() => handlePageNav('home')}
            >
              <i className="fas fa-chevron-up" />
            </a>
          )}
        </div>
      </div>

      {/* MENU OVERLAY */}
      {menuTransition.map(
        ({ item, key, props }) =>
          item && (
            <animated.div key={key} style={props}>
              <Menu
                activePage={activePage}
                onMenuClose={closeMenu}
                onPageNav={handlePageNav}
                pages={pages}
              />
            </animated.div>
          )
      )}
    </header>
  );
};

Header.propTypes = {
  activePage: PropTypes.string.isRequired
};

export default Header;
