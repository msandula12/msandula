import React from 'react';

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

export default Menu;
