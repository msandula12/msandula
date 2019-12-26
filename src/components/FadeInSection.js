import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import './FadeInSection.css';

const FadeInSection = ({ children, disabled = false }) => {
  const [isVisible, setVisible] = useState(false);

  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);

  return (
    <div
      className={`${disabled ? ' ' : 'fade-in-section'} ${
        isVisible ? 'is-visible' : ''
      }`}
      ref={domRef}
    >
      {children}
    </div>
  );
};

FadeInSection.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool
};

export default FadeInSection;
