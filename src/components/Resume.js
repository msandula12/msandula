import React, { createRef, useEffect, useState } from 'react';
import { animated, config, useTransition } from 'react-spring';

import './Resume.css';

import DownloadPDFButton from './DownloadPDFButton';
import FadeInSection from './FadeInSection';

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
      setShowPDFButton(top < 1);
    };
    window.addEventListener('scroll', determineIfShouldShowResumeButton);
    return () =>
      window.removeEventListener('scroll', determineIfShouldShowResumeButton);
  }, [resumePage]);

  const downloadPDFButtonTransition = useTransition(showPDFButton, null, {
    from: { bottom: 0, right: 32, opacity: 0, position: 'fixed' },
    enter: { bottom: 40, opacity: 1 },
    leave: { bottom: 0, opacity: 0 },
    config: config.gentle,
  });

  return (
    <div ref={resumePage} className="page resume">
      <FadeInSection>
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
            <span className="code-string">
              {'"Angular 2+/React.js/Vue.js",'}
            </span>
          </div>
          <div className="indented-3">
            <span className="code-string">{'"Next.js",'}</span>
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
            <span className="code-string">{'"Python",'}</span>
          </div>
          <div className="indented-3">
            <span className="code-string">{'"FlatBuffers",'}</span>
          </div>
          <div className="indented-3">
            <span className="code-string">{'"Redux/MobX",'}</span>
          </div>
          <div className="indented-3">
            <span className="code-string">{'"NPM/Yarn/Node.js",'}</span>
          </div>
          <div className="indented-3">
            <span className="code-string">{'"Git/GitHub/GitLab",'}</span>
          </div>
          <div className="indented-3">
            <span className="code-string">{'"HTML5",'}</span>
          </div>
          <div className="indented-3">
            <span className="code-string">{'"CSS/LESS/Sass/CSS-in-JS",'}</span>
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
          {/* Dictionary.com */}
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
            <span className="code-string">{'"Dictionary.com"'}</span>
          </div>
          <div className="indented-3">
            <span className="code-field">{'location'}</span>
            <span className="code-operator">{'='}</span>
            <span className="code-string">{'"Oakland, Calif."'}</span>
          </div>
          <div className="indented-3">
            <span className="code-field">{'role'}</span>
            <span className="code-operator">{'='}</span>
            <span className="code-string">{'"Senior Software Developer"'}</span>
          </div>
          <div className="indented-3">
            <span className="code-field">{'startDate'}</span>
            <span className="code-operator">{'='}</span>
            <span className="code-string">{'"August 2021"'}</span>
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
                'Work closely with product, design and machine learning team to deliver frontend features for Dictionary.com’s Grammar Coach writing tool'
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
                'Assisted with conversion to TypeScript and introduced Redux Toolkit to simplify application state'
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
          {/* GLCS */}
          <div className="indented-2">
            <span className="code-operator">{'<'}</span>
            <span className="code-class">{'Job'}</span>
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
            <span className="code-string">{'"Software Developer"'}</span>
          </div>
          <div className="indented-3">
            <span className="code-field">{'startDate'}</span>
            <span className="code-operator">{'='}</span>
            <span className="code-string">{'"January 2019"'}</span>
          </div>
          <div className="indented-3">
            <span className="code-field">{'endDate'}</span>
            <span className="code-operator">{'='}</span>
            <span className="code-string">{'"July 2021"'}</span>
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
                'Built and maintained a React with Redux front-end of an end-to-end budget forecasting application for Trinity Health'
              }
            </span>
          </div>
          <div className="indented-3">
            <span className="code-operator">{'</'}</span>
            <span className="code-class">{'Description'}</span>
            <span className="code-operator">{'>'}</span>
          </div>
          <div className="indented-4">
            <span className="code-annotation">
              {
                'Displayed data using flexible, interactive data grids and charts'
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
      </FadeInSection>

      {/* VIEW/DOWNLOAD RESUME AS PDF */}
      {downloadPDFButtonTransition.map(
        ({ item, key, props }) =>
          item && (
            <animated.div key={key} style={props}>
              <DownloadPDFButton />
            </animated.div>
          )
      )}
    </div>
  );
};

export default Resume;
