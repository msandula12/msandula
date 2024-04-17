import React, { createRef, useEffect, useState } from 'react';
import { animated, config, useTransition } from 'react-spring';

import resume from '../resume.json';

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
            <span className="code-string">{`"${resume.title}"`}</span>
            <span className="code-operator">{' />'}</span>
          </div>
          <div className="indented-1">
            <span className="code-operator">{'<'}</span>
            <span className="code-class">{'Contact '}</span>
            <span className="code-field">{'email'}</span>
            <span className="code-operator">{'='}</span>
            <span className="code-string">{`"${resume.email}"`}</span>
            <span className="code-operator">{' />'}</span>
          </div>
          <div className="indented-1">
            <span className="code-operator">{'<'}</span>
            <span className="code-class">{'GitHub '}</span>
            <span className="code-field">{'userName'}</span>
            <span className="code-operator">{'='}</span>
            <span className="code-string">{`"${resume.github}"`}</span>
            <span className="code-operator">{' />'}</span>
          </div>
          <div className="indented-1">
            <span className="code-operator">{'<'}</span>
            <span className="code-class">{'LinkedIn '}</span>
            <span className="code-field">{'userName'}</span>
            <span className="code-operator">{'='}</span>
            <span className="code-string">{`"${resume.linkedin}"`}</span>
            <span className="code-operator">{' />'}</span>
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
            <span className="code-string">{'"Oakland, Calif. (remote)"'}</span>
          </div>
          <div className="indented-3">
            <span className="code-field">{'role'}</span>
            <span className="code-operator">{'='}</span>
            <span className="code-string">{'"Staff Software Engineer"'}</span>
          </div>
          <div className="indented-3">
            <span className="code-field">{'startDate'}</span>
            <span className="code-operator">{'='}</span>
            <span className="code-string">{'"April 2023"'}</span>
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
                'Helped rebuild and redesign Dictionary.com and Thesaurus.com websites, going from multiple applications comprised of various tech stacks to a single, isomorphic React application with a brand new, user-tested UI'
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
                'Wrote integration for Storyblok’s Headless CMS to populate homepage data modules'
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
                'Developed in-house design system in tandem with design team using Figma and Style Dictionary'
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
                'Established design patterns and best coding practices for frontend team'
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
                'Co-led software architecture rounds for interviewing new engineering candidates'
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

          <div className="indented-2">
            <span className="code-operator">{'<'}</span>
            <span className="code-class">{'Job'}</span>
          </div>
          <div className="indented-3">
            <span className="code-field">{'company'}</span>
            <span className="code-operator">{'='}</span>
            <span className="code-string">{'"Dictionary.com"'}</span>
          </div>
          <div className="indented-3">
            <span className="code-field">{'location'}</span>
            <span className="code-operator">{'='}</span>
            <span className="code-string">{'"Oakland, Calif. (remote)"'}</span>
          </div>
          <div className="indented-3">
            <span className="code-field">{'role'}</span>
            <span className="code-operator">{'='}</span>
            <span className="code-string">{'"Senior Software Engineer"'}</span>
          </div>
          <div className="indented-3">
            <span className="code-field">{'startDate'}</span>
            <span className="code-operator">{'='}</span>
            <span className="code-string">{'"August 2021"'}</span>
          </div>
          <div className="indented-3">
            <span className="code-field">{'endDate'}</span>
            <span className="code-operator">{'='}</span>
            <span className="code-string">{'"April 2023"'}</span>
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
                'Collaborated with product, design, backend, and machine learning teams on Grammar Coach writing tool written in Next.js'
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
                'Implemented WebSockets to enhance the UX performance and feel of Grammar Coach editor'
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
                'Migrated Grammar Coach codebase to TypeScript and introduced Redux Toolkit'
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
                'Developed and managed a React with Redux (TypeScript) frontend of an end-to-end budget forecasting application for Trinity Health’s budget team'
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
                'Designed an internal dashboard application utilizing Dash/Flask (Python)'
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
                'Facilitated the onboarding and training of junior engineers and interns'
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
                'Developed multiple websites and web apps for various clients using cutting-edge frontend frameworks such as Angular 2+, React and Vue'
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
                'Led frontend development for Logicdrop’s Studio Platform, a tool for enterprise-level document automation with a drag-and-drop template editor'
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
                'Collaborated with backend team to integrate Rest APIs using RxJS observables'
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
                'Implemented functionality for importing Excel spreadsheets and .CSV files into editable data tables'
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

          {/* EDUCATION */}
          <div className="indented-1">
            <span className="code-operator">{'<'}</span>
            <span className="code-class">{'Section '}</span>
            <span className="code-field">{'title'}</span>
            <span className="code-operator">{'='}</span>
            <span className="code-string">{'"Education"'}</span>
            <span className="code-operator">{'>'}</span>
          </div>
          {resume.education.map((education) => (
            <React.Fragment key={education.place}>
              <div className="indented-2">
                <span className="code-operator">{'<'}</span>
                <span className="code-class">{'Education'}</span>
              </div>
              <div className="indented-3">
                <span className="code-field">{'place'}</span>
                <span className="code-operator">{'='}</span>
                <span className="code-string">{`"${education.place}"`}</span>
              </div>
              <div className="indented-3">
                <span className="code-field">{'location'}</span>
                <span className="code-operator">{'='}</span>
                <span className="code-string">{`"${education.location}"`}</span>
              </div>
              <div className="indented-3">
                <span className="code-field">{'graduated'}</span>
                <span className="code-operator">{'='}</span>
                <span className="code-string">{`"${education.graduated}"`}</span>
              </div>
              <div className="indented-2">
                <span className="code-operator">{'>'}</span>
              </div>
              {education.descriptions.map((description) => (
                <React.Fragment key={description}>
                  <div className="indented-3">
                    <span className="code-operator">{'<'}</span>
                    <span className="code-class">{'Description'}</span>
                    <span className="code-operator">{'>'}</span>
                  </div>
                  <div className="indented-4">
                    <span className="code-annotation">{description}</span>
                  </div>
                  <div className="indented-3">
                    <span className="code-operator">{'</'}</span>
                    <span className="code-class">{'Description'}</span>
                    <span className="code-operator">{'>'}</span>
                  </div>
                </React.Fragment>
              ))}
              <div className="indented-2">
                <span className="code-operator">{'</'}</span>
                <span className="code-class">{'Education'}</span>
                <span className="code-operator">{'>'}</span>
              </div>
            </React.Fragment>
          ))}
          <div className="indented-1">
            <span className="code-operator">{'</'}</span>
            <span className="code-class">{'Section'}</span>
            <span className="code-operator">{'>'}</span>
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
          {resume.skills.map((skill, index) => (
            <div className="indented-3" key={skill}>
              <span className="code-string">{`"${skill}"${
                index < resume.skills.length - 1 ? ',' : ''
              }`}</span>
            </div>
          ))}
          <div className="indented-2">
            <span className="code-method">{']'}</span>
            <span className="code-field">{'}'}</span>
          </div>
          <div className="indented-1">
            <span className="code-operator">{'/>'}</span>
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
