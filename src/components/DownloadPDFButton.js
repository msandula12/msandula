import React from 'react';
import { animated, config, useSpring } from 'react-spring';

import './DownloadPDFButton.css';

const DownloadPDFButton = () => {
  const springProps = useSpring({
    bottom: 32,
    opacity: 1,
    from: { bottom: 0, opacity: 0 },
    config: config.gentle
  });

  return (
    <animated.div
      className="download-pdf"
      onClick={() =>
        window.open(require('../assets/files/mike-sandula-resume.pdf'), '_none')
      }
      style={springProps}
    >
      View as PDF
    </animated.div>
  );
};

export default DownloadPDFButton;
