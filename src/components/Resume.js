import React, { createRef, useEffect, useState } from 'react';

import './Resume.css';

const Resume = () => {
  const [showPDFButton, setShowPDFButton] = useState(false);
  const resumePage = createRef();

  useEffect(() => {
    const determineIfShouldShowResumeButton = () => {
      if (!resumePage.current) {
        setShowPDFButton(false);
        return;
      }
      const rect = resumePage.current.getBoundingClientRect();
      const { top } = rect;
      setShowPDFButton(top < 0);
    };
    window.addEventListener('scroll', determineIfShouldShowResumeButton);
    return () =>
      window.removeEventListener('scroll', determineIfShouldShowResumeButton);
  }, [resumePage]);

  return (
    <div ref={resumePage} className="page resume">
      <div>
        <h1>Resume</h1>
        <div className="content">
          <div>
            <span className="code-operator">{'<'}</span>
            <span className="code-class">{'Resume'}</span>
            <span className="code-operator">{'>'}</span>
          </div>

          {/* CONTACT */}
          <div className="indented-1">
            <span className="code-operator">{'<'}</span>
            <span className="code-class">{'MikeSandula '}</span>
            <span className="code-field">{'title'}</span>
            <span className="code-operator">{'='}</span>
            <span className="code-string">{'"Software Developer"'}</span>
            <span className="code-operator">{' />'}</span>
          </div>
          <div className="indented-1">
            <span className="code-operator">{'<'}</span>
            <span className="code-class">{'Contact '}</span>
            <span className="code-field">{'email'}</span>
            <span className="code-operator">{'='}</span>
            <span className="code-string">{'"msandula@gmail.com"'}</span>
            <span className="code-operator">{' />'}</span>
          </div>
          <div className="indented-1">
            <span className="code-operator">{'<'}</span>
            <span className="code-class">{'GitHub '}</span>
            <span className="code-field">{'userName'}</span>
            <span className="code-operator">{'='}</span>
            <span className="code-string">{'"msandula12"'}</span>
            <span className="code-operator">{' />'}</span>
          </div>
          <div className="indented-1">
            <span className="code-operator">{'<'}</span>
            <span className="code-class">{'LinkedIn '}</span>
            <span className="code-field">{'userName'}</span>
            <span className="code-operator">{'='}</span>
            <span className="code-string">{'"MikeSandula"'}</span>
            <span className="code-operator">{' />'}</span>
          </div>

          {/* SKILLS */}
          <div className="indented-1">
            <span className="code-operator">{'<'}</span>
            <span className="code-class">{'Skills '}</span>
          </div>
          <div className="indented-2">
            <span className="code-field">{'skills'}</span>
            <span className="code-operator">{'='}</span>
            <span className="code-field">{'{'}</span>
            <span className="code-method">{'['}</span>
          </div>
          <div className="indented-3">
            <span className="code-string">{'"React.js",'}</span>
          </div>
          <div className="indented-3">
            <span className="code-string">{'"Angular 2+",'}</span>
          </div>
          <div className="indented-3">
            <span className="code-string">{'"Vue.js",'}</span>
          </div>
          <div className="indented-3">
            <span className="code-string">{'"jQuery",'}</span>
          </div>
          <div className="indented-3">
            <span className="code-string">
              {'"JavaScript/ES6/TypeScript",'}
            </span>
          </div>
          <div className="indented-3">
            <span className="code-string">{'"RxJS",'}</span>
          </div>
          <div className="indented-3">
            <span className="code-string">{'"FlatBuffers",'}</span>
          </div>
          <div className="indented-3">
            <span className="code-string">{'"Redux/MobX",'}</span>
          </div>
          <div className="indented-3">
            <span className="code-string">{'"NPM/Node.js",'}</span>
          </div>
          <div className="indented-3">
            <span className="code-string">{'"Webpack/Gulp/Grunt",'}</span>
          </div>
          <div className="indented-3">
            <span className="code-string">{'"Git/GitHub/GitLab",'}</span>
          </div>
          <div className="indented-3">
            <span className="code-string">{'"HTML5",'}</span>
          </div>
          <div className="indented-3">
            <span className="code-string">{'"CSS/LESS/Sass",'}</span>
          </div>
          <div className="indented-3">
            <span className="code-string">{'"D3.js",'}</span>
          </div>
          <div className="indented-3">
            <span className="code-string">{'"Adobe XD"'}</span>
          </div>
          <div className="indented-2">
            <span className="code-method">{']'}</span>
            <span className="code-field">{'}'}</span>
          </div>
          <div className="indented-1">
            <span className="code-operator">{'/>'}</span>
          </div>

          {/* SECTION - EDUCATION */}
          <div className="indented-1">
            <span className="code-operator">{'<'}</span>
            <span className="code-class">{'Section '}</span>
            <span className="code-field">{'title'}</span>
            <span className="code-operator">{'='}</span>
            <span className="code-string">{'"Education"'}</span>
            <span className="code-operator">{'>'}</span>
          </div>
          {/* GRAND CIRCUS */}
          <div className="indented-2">
            <span className="code-operator">{'<'}</span>
            <span className="code-class">{'Education'}</span>
          </div>
          <div className="indented-3">
            <span className="code-field">{'place'}</span>
            <span className="code-operator">{'='}</span>
            <span className="code-string">{'"Grand Circus"'}</span>
          </div>
          <div className="indented-3">
            <span className="code-field">{'location'}</span>
            <span className="code-operator">{'='}</span>
            <span className="code-string">{'"Detroit, Mich."'}</span>
          </div>
          <div className="indented-3">
            <span className="code-field">{'graduated'}</span>
            <span className="code-operator">{'='}</span>
            <span className="code-string">{'"March 2016"'}</span>
          </div>
          <div className="indented-2">
            <span className="code-operator">{'>'}</span>
          </div>
          <div className="indented-3">
            <span className="code-operator">{'<'}</span>
            <span className="code-class">{'Description'}</span>
            <span className="code-operator">{'>'}</span>
          </div>
          <div className="indented-4">
            <span className="code-annotation">
              {'JavaScript Developer Bootcamp'}
            </span>
          </div>
          <div className="indented-3">
            <span className="code-operator">{'</'}</span>
            <span className="code-class">{'Description'}</span>
            <span className="code-operator">{'>'}</span>
          </div>
          <div className="indented-2">
            <span className="code-operator">{'</'}</span>
            <span className="code-class">{'Education'}</span>
            <span className="code-operator">{'>'}</span>
          </div>
          {/* OU */}
          <div className="indented-2">
            <span className="code-operator">{'<'}</span>
            <span className="code-class">{'Education'}</span>
          </div>
          <div className="indented-3">
            <span className="code-field">{'place'}</span>
            <span className="code-operator">{'='}</span>
            <span className="code-string">{'"Oakland University"'}</span>
          </div>
          <div className="indented-3">
            <span className="code-field">{'location'}</span>
            <span className="code-operator">{'='}</span>
            <span className="code-string">{'"Rochester, Mich."'}</span>
          </div>
          <div className="indented-3">
            <span className="code-field">{'graduated'}</span>
            <span className="code-operator">{'='}</span>
            <span className="code-string">{'"December 2010"'}</span>
          </div>
          <div className="indented-2">
            <span className="code-operator">{'>'}</span>
          </div>
          <div className="indented-3">
            <span className="code-operator">{'<'}</span>
            <span className="code-class">{'Description'}</span>
            <span className="code-operator">{'>'}</span>
          </div>
          <div className="indented-4">
            <span className="code-annotation">
              {'Bachelor of Arts in Journalism, GPA 3.6'}
            </span>
          </div>
          <div className="indented-3">
            <span className="code-operator">{'</'}</span>
            <span className="code-class">{'Description'}</span>
            <span className="code-operator">{'>'}</span>
          </div>
          <div className="indented-3">
            <span className="code-operator">{'<'}</span>
            <span className="code-class">{'Description'}</span>
            <span className="code-operator">{'>'}</span>
          </div>
          <div className="indented-4">
            <span className="code-annotation">
              {'Cum Laude with departmental honors'}
            </span>
          </div>
          <div className="indented-3">
            <span className="code-operator">{'</'}</span>
            <span className="code-class">{'Description'}</span>
            <span className="code-operator">{'>'}</span>
          </div>
          <div className="indented-2">
            <span className="code-operator">{'</'}</span>
            <span className="code-class">{'Education'}</span>
            <span className="code-operator">{'>'}</span>
          </div>
          <div className="indented-1">
            <span className="code-operator">{'</'}</span>
            <span className="code-class">{'Section'}</span>
            <span className="code-operator">{'>'}</span>
          </div>

          {/* SECTION - EXPERIENCE */}
          <div className="indented-1">
            <span className="code-operator">{'<'}</span>
            <span className="code-class">{'Section '}</span>
            <span className="code-field">{'title'}</span>
            <span className="code-operator">{'='}</span>
            <span className="code-string">{'"Experience"'}</span>
            <span className="code-operator">{'>'}</span>
          </div>
          {/* GLCS */}
          <div className="indented-2">
            <span className="code-operator">{'<'}</span>
            <span className="code-class">{'Job'}</span>
          </div>
          <div className="indented-3">
            <span className="code-field">{'isCurrent'}</span>
          </div>
          <div className="indented-3">
            <span className="code-field">{'company'}</span>
            <span className="code-operator">{'='}</span>
            <span className="code-string">
              {'"Great Lakes Consulting Services"'}
            </span>
          </div>
          <div className="indented-3">
            <span className="code-field">{'location'}</span>
            <span className="code-operator">{'='}</span>
            <span className="code-string">{'"Livonia, Mich."'}</span>
          </div>
          <div className="indented-3">
            <span className="code-field">{'role'}</span>
            <span className="code-operator">{'='}</span>
            <span className="code-string">{'"Front-End Developer"'}</span>
          </div>
          <div className="indented-3">
            <span className="code-field">{'startDate'}</span>
            <span className="code-operator">{'='}</span>
            <span className="code-string">{'"January 2019"'}</span>
          </div>
          <div className="indented-2">
            <span className="code-operator">{'>'}</span>
          </div>
          <div className="indented-3">
            <span className="code-operator">{'<'}</span>
            <span className="code-class">{'Description'}</span>
            <span className="code-operator">{'>'}</span>
          </div>
          <div className="indented-4">
            <span className="code-annotation">
              {
                'Build and maintain a React with Redux front-end of an end-to-end budget forecasting application for Trinity Health'
              }
            </span>
          </div>
          <div className="indented-3">
            <span className="code-operator">{'</'}</span>
            <span className="code-class">{'Description'}</span>
            <span className="code-operator">{'>'}</span>
          </div>
          <div className="indented-3">
            <span className="code-operator">{'<'}</span>
            <span className="code-class">{'Description'}</span>
            <span className="code-operator">{'>'}</span>
          </div>
          <div className="indented-4">
            <span className="code-annotation">
              {
                'Use Flatbuffers to serialize and deserialize large amounts of budgeting data'
              }
            </span>
          </div>
          <div className="indented-3">
            <span className="code-operator">{'</'}</span>
            <span className="code-class">{'Description'}</span>
            <span className="code-operator">{'>'}</span>
          </div>
          <div className="indented-3">
            <span className="code-operator">{'<'}</span>
            <span className="code-class">{'Description'}</span>
            <span className="code-operator">{'>'}</span>
          </div>
          <div className="indented-4">
            <span className="code-annotation">
              {'Display data using flexible, interactive data grids and charts'}
            </span>
          </div>
          <div className="indented-3">
            <span className="code-operator">{'</'}</span>
            <span className="code-class">{'Description'}</span>
            <span className="code-operator">{'>'}</span>
          </div>
          <div className="indented-2">
            <span className="code-operator">{'</'}</span>
            <span className="code-class">{'Job'}</span>
            <span className="code-operator">{'>'}</span>
          </div>
          {/* Logicdrop */}
          <div className="indented-2">
            <span className="code-operator">{'<'}</span>
            <span className="code-class">{'Job'}</span>
          </div>
          <div className="indented-3">
            <span className="code-field">{'company'}</span>
            <span className="code-operator">{'='}</span>
            <span className="code-string">{'"Logicdrop"'}</span>
          </div>
          <div className="indented-3">
            <span className="code-field">{'location'}</span>
            <span className="code-operator">{'='}</span>
            <span className="code-string">{'"Ferndale, Mich."'}</span>
          </div>
          <div className="indented-3">
            <span className="code-field">{'role'}</span>
            <span className="code-operator">{'='}</span>
            <span className="code-string">{'"Software Developer"'}</span>
          </div>
          <div className="indented-3">
            <span className="code-field">{'startDate'}</span>
            <span className="code-operator">{'='}</span>
            <span className="code-string">{'"April 2016"'}</span>
          </div>
          <div className="indented-3">
            <span className="code-field">{'endDate'}</span>
            <span className="code-operator">{'='}</span>
            <span className="code-string">{'"December 2018"'}</span>
          </div>
          <div className="indented-2">
            <span className="code-operator">{'>'}</span>
          </div>
          <div className="indented-3">
            <span className="code-operator">{'<'}</span>
            <span className="code-class">{'Description'}</span>
            <span className="code-operator">{'>'}</span>
          </div>
          <div className="indented-4">
            <span className="code-annotation">
              {
                'Built client-facing websites and web apps using the latest front-end frameworks'
              }
            </span>
          </div>
          <div className="indented-3">
            <span className="code-operator">{'</'}</span>
            <span className="code-class">{'Description'}</span>
            <span className="code-operator">{'>'}</span>
          </div>
          <div className="indented-3">
            <span className="code-operator">{'<'}</span>
            <span className="code-class">{'Description'}</span>
            <span className="code-operator">{'>'}</span>
          </div>
          <div className="indented-4">
            <span className="code-annotation">
              {
                'Lead developer for the front-end of Logicdrop’s Studio Platform'
              }
            </span>
          </div>
          <div className="indented-3">
            <span className="code-operator">{'</'}</span>
            <span className="code-class">{'Description'}</span>
            <span className="code-operator">{'>'}</span>
          </div>
          <div className="indented-3">
            <span className="code-operator">{'<'}</span>
            <span className="code-class">{'Description'}</span>
            <span className="code-operator">{'>'}</span>
          </div>
          <div className="indented-4">
            <span className="code-annotation">
              {
                'Worked side-by-side with back-end team to implement Rest APIs with RxJS observables'
              }
            </span>
          </div>
          <div className="indented-3">
            <span className="code-operator">{'</'}</span>
            <span className="code-class">{'Description'}</span>
            <span className="code-operator">{'>'}</span>
          </div>
          <div className="indented-3">
            <span className="code-operator">{'<'}</span>
            <span className="code-class">{'Description'}</span>
            <span className="code-operator">{'>'}</span>
          </div>
          <div className="indented-4">
            <span className="code-annotation">
              {
                'Wrote code for importing and exporting Excel spreadsheets and .CSV files and displaying them in an editable data table'
              }
            </span>
          </div>
          <div className="indented-3">
            <span className="code-operator">{'</'}</span>
            <span className="code-class">{'Description'}</span>
            <span className="code-operator">{'>'}</span>
          </div>
          <div className="indented-3">
            <span className="code-operator">{'<'}</span>
            <span className="code-class">{'Description'}</span>
            <span className="code-operator">{'>'}</span>
          </div>
          <div className="indented-4">
            <span className="code-annotation">
              {
                'Followed GitLab best practices for version control and continuous integration'
              }
            </span>
          </div>
          <div className="indented-3">
            <span className="code-operator">{'</'}</span>
            <span className="code-class">{'Description'}</span>
            <span className="code-operator">{'>'}</span>
          </div>
          <div className="indented-3">
            <span className="code-operator">{'<'}</span>
            <span className="code-class">{'Description'}</span>
            <span className="code-operator">{'>'}</span>
          </div>
          <div className="indented-4">
            <span className="code-annotation">
              {
                'Designed and developed UI wireframes and mockups using Adobe XD'
              }
            </span>
          </div>
          <div className="indented-3">
            <span className="code-operator">{'</'}</span>
            <span className="code-class">{'Description'}</span>
            <span className="code-operator">{'>'}</span>
          </div>
          <div className="indented-2">
            <span className="code-operator">{'</'}</span>
            <span className="code-class">{'Job'}</span>
            <span className="code-operator">{'>'}</span>
          </div>
          {/* The Oakland Press */}
          <div className="indented-2">
            <span className="code-operator">{'<'}</span>
            <span className="code-class">{'Job'}</span>
          </div>
          <div className="indented-3">
            <span className="code-field">{'company'}</span>
            <span className="code-operator">{'='}</span>
            <span className="code-string">
              {'"The Oakland Press (Digital First Media)"'}
            </span>
          </div>
          <div className="indented-3">
            <span className="code-field">{'location'}</span>
            <span className="code-operator">{'='}</span>
            <span className="code-string">{'"Pontiac, Mich."'}</span>
          </div>
          <div className="indented-3">
            <span className="code-field">{'role'}</span>
            <span className="code-operator">{'='}</span>
            <span className="code-string">{'"Pagination Hub Editor"'}</span>
          </div>
          <div className="indented-3">
            <span className="code-field">{'startDate'}</span>
            <span className="code-operator">{'='}</span>
            <span className="code-string">{'"August 2011"'}</span>
          </div>
          <div className="indented-3">
            <span className="code-field">{'endDate'}</span>
            <span className="code-operator">{'='}</span>
            <span className="code-string">{'"January 2016"'}</span>
          </div>
          <div className="indented-2">
            <span className="code-operator">{'>'}</span>
          </div>
          <div className="indented-3">
            <span className="code-operator">{'<'}</span>
            <span className="code-class">{'Description'}</span>
            <span className="code-operator">{'>'}</span>
          </div>
          <div className="indented-4">
            <span className="code-annotation">
              {
                'Designed, proofed and finalized the print products for eight daily broadsheets, plus a handful of weekly Michigan and New York newspapers'
              }
            </span>
          </div>
          <div className="indented-3">
            <span className="code-operator">{'</'}</span>
            <span className="code-class">{'Description'}</span>
            <span className="code-operator">{'>'}</span>
          </div>
          <div className="indented-2">
            <span className="code-operator">{'</'}</span>
            <span className="code-class">{'Job'}</span>
            <span className="code-operator">{'>'}</span>
          </div>
          <div className="indented-1">
            <span className="code-operator">{'</'}</span>
            <span className="code-class">{'Section'}</span>
            <span className="code-operator">{'>'}</span>
          </div>

          {/* END */}
          <div>
            <span className="code-operator">{'</'}</span>
            <span className="code-class">{'Resume'}</span>
            <span className="code-operator">{'>'}</span>
          </div>
        </div>
      </div>

      {/* VIEW/DOWNLOAD RESUME AS PDF */}
      {showPDFButton && (
        <div
          className="download-pdf"
          onClick={() =>
            window.open(
              require('../assets/files/mike-sandula-resume.pdf'),
              '_none'
            )
          }
        >
          View as PDF
        </div>
      )}
    </div>
  );
};

export default Resume;
