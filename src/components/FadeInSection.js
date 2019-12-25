import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import './FadeInSection.css';

const FadeInSection = ({ children }) => {
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
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {children}
    </div>
  );
};

FadeInSection.propTypes = {
  children: PropTypes.node.isRequired
};

export default FadeInSection;
