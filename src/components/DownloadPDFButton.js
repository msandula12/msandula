import React from 'react';

import './DownloadPDFButton.css';

const DownloadPDFButton = () => {
  return (
    <div
      className="download-pdf"
      onClick={() =>
        window.open(require('../assets/files/mike-sandula-resume.pdf'), '_none')
      }
    >
      View as PDF
    </div>
  );
};

export default DownloadPDFButton;
