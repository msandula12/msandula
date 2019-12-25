import React from 'react';
import PropTypes from 'prop-types';

import './Menu.css';

const Menu = ({ onMenuClose, onPageNav, pages }) => {
  return (
    <div className="menu">
      <div onClick={onMenuClose} className="icon icon-shadow flex-end">
        <i className="fas fa-times" />
      </div>
      <nav>
        {pages.map(page => (
          <a
            href={`#/${page.page}`}
            key={page.page}
            onClick={() => onPageNav(page.page)}
            style={{ width: `100 / ${pages.length}%` }}
          >
            {page.label}
          </a>
        ))}
      </nav>
    </div>
  );
};

Menu.propTypes = {
  onMenuClose: PropTypes.func.isRequired,
  onPageNav: PropTypes.func.isRequired,
  pages: PropTypes.array.isRequired
};

export default Menu;
