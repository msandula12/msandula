import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';

import './DownloadPDFButton.css';

const DownloadPDFButton = () => {
  const [isHovering, setIsHovering] = useState(false);

  const hoverProps = useSpring({
    boxShadow: isHovering
      ? '0 0 16px 0 rgba(255, 255, 255, 0.3)'
      : '0 0 8px 0 rgba(255, 255, 255, 0.2)',
    transform: isHovering ? 'scale(1.1)' : 'scale(1)'
  });

  return (
    <animated.div
      className="download-pdf"
      onClick={() =>
        window.open(require('../assets/files/mike-sandula-resume.pdf'), '_none')
      }
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={hoverProps}
    >
      View as PDF
    </animated.div>
  );
};

export default DownloadPDFButton;
