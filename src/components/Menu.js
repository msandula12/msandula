import React from 'react';
import PropTypes from 'prop-types';

import './Menu.css';

const Menu = ({ activePage, onMenuClose, onPageNav, pages }) => {
  console.log('activePage: ', activePage);
  const menuPages = [
    {
      label: 'Home',
      page: 'home'
    },
    ...pages
  ];
  return (
    <div className="menu">
      <div className="icon icon-shadow flex-end">
        <div className="clickable-padding" onClick={onMenuClose}>
          <i className="fas fa-times" />
        </div>
      </div>
      <nav>
        {menuPages.map(page => (
          <a
            href={`#/${page.page}`}
            key={page.page}
            onClick={() => onPageNav(page.page)}
            style={{ width: `100 / ${pages.length}%` }}
          >
            {(activePage === page.page ||
              (!activePage && page.page === 'home')) && (
              <div className="icon active-icon">
                <i className="fas fa-chevron-right" />
              </div>
            )}
            {page.label}
          </a>
        ))}
      </nav>
    </div>
  );
};

Menu.propTypes = {
  activePage: PropTypes.string.isRequired,
  onMenuClose: PropTypes.func.isRequired,
  onPageNav: PropTypes.func.isRequired,
  pages: PropTypes.array.isRequired
};

export default Menu;
