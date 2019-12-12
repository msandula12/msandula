import React from 'react';

import { ResumeText } from '../Text';

import './Resume.css';

const Resume = () => {
  return (
    <div className="page resume">
      <div>
        <h1>Resume</h1>
        <div className="content">
          <pre>
            <code>{ResumeText}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Resume;
