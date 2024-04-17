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

          {/* EXPERIENCE */}
          <div className="indented-1">
            <span className="code-operator">{'<'}</span>
            <span className="code-class">{'Section '}</span>
            <span className="code-field">{'type'}</span>
            <span className="code-operator">{'='}</span>
            <span className="code-string">{'"Experience"'}</span>
            <span className="code-operator">{'>'}</span>
          </div>
          {resume.jobs.map((job) => (
            <React.Fragment key={job.company}>
              <div className="indented-2">
                <span className="code-operator">{'<'}</span>
                <span className="code-class">{'Job'}</span>
              </div>
              <div className="indented-3">
                <span className="code-field">{'company'}</span>
                <span className="code-operator">{'='}</span>
                <span className="code-string">{`"${job.company}"`}</span>
              </div>
              <div className="indented-3">
                <span className="code-field">{'location'}</span>
                <span className="code-operator">{'='}</span>
                <span className="code-string">{`"${job.location}"`}</span>
              </div>
              <div className="indented-2">
                <span className="code-operator">{'>'}</span>
              </div>
              {job.roles.map((role) => (
                <React.Fragment key={`${job.company}-${role.title}`}>
                  <div className="indented-3">
                    <span className="code-operator">{'<'}</span>
                    <span className="code-class">{'Role'}</span>
                  </div>
                  {!role.endDate && (
                    <div className="indented-4">
                      <span className="code-field">isCurrent</span>
                    </div>
                  )}
                  <div className="indented-4">
                    <span className="code-field">{'title'}</span>
                    <span className="code-operator">{'='}</span>
                    <span className="code-string">{`"${role.title}"`}</span>
                  </div>
                  <div className="indented-4">
                    <span className="code-field">{'startDate'}</span>
                    <span className="code-operator">{'='}</span>
                    <span className="code-string">{`"${role.startDate}"`}</span>
                  </div>
                  {role.endDate && (
                    <div className="indented-4">
                      <span className="code-field">{'endDate'}</span>
                      <span className="code-operator">{'='}</span>
                      <span className="code-string">{`"${role.endDate}"`}</span>
                    </div>
                  )}
                  <div className="indented-3">
                    <span className="code-operator">{'>'}</span>
                  </div>
                  {role.descriptions.map((description) => (
                    <React.Fragment key={description}>
                      <div className="indented-4">
                        <span className="code-operator">{'<'}</span>
                        <span className="code-class">{'Description'}</span>
                        <span className="code-operator">{'>'}</span>
                      </div>
                      <div className="indented-5">
                        <span className="code-annotation">{description}</span>
                      </div>
                      <div className="indented-4">
                        <span className="code-operator">{'</'}</span>
                        <span className="code-class">{'Description'}</span>
                        <span className="code-operator">{'>'}</span>
                      </div>
                    </React.Fragment>
                  ))}
                  <div className="indented-3">
                    <span className="code-operator">{'</'}</span>
                    <span className="code-class">{'Role'}</span>
                    <span className="code-operator">{'>'}</span>
                  </div>
                </React.Fragment>
              ))}
              <div className="indented-2">
                <span className="code-operator">{'</'}</span>
                <span className="code-class">{'Job'}</span>
                <span className="code-operator">{'>'}</span>
              </div>
            </React.Fragment>
          ))}
          <div className="indented-1">
            <span className="code-operator">{'</'}</span>
            <span className="code-class">{'Section'}</span>
            <span className="code-operator">{'>'}</span>
          </div>

          {/* EDUCATION */}
          <div className="indented-1">
            <span className="code-operator">{'<'}</span>
            <span className="code-class">{'Section '}</span>
            <span className="code-field">{'type'}</span>
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

          {/* CERTIFICATIONS */}
          <div className="indented-1">
            <span className="code-operator">{'<'}</span>
            <span className="code-class">{'Section '}</span>
            <span className="code-field">{'type'}</span>
            <span className="code-operator">{'='}</span>
            <span className="code-string">{'"Certifications"'}</span>
            <span className="code-operator">{'>'}</span>
          </div>
          {resume.certifications.map((certification) => (
            <React.Fragment key={certification.title}>
              <div className="indented-2">
                <span className="code-operator">{'<'}</span>
                <span className="code-class">{'Certification'}</span>
              </div>
              <div className="indented-3">
                <span className="code-field">{'from'}</span>
                <span className="code-operator">{'='}</span>
                <span className="code-string">{`"${certification.from}"`}</span>
              </div>
              <div className="indented-3">
                <span className="code-field">{'obtained'}</span>
                <span className="code-operator">{'='}</span>
                <span className="code-string">{`"${certification.obtained}"`}</span>
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
                  {certification.description}
                </span>
              </div>
              <div className="indented-3">
                <span className="code-operator">{'</'}</span>
                <span className="code-class">{'Description'}</span>
                <span className="code-operator">{'>'}</span>
              </div>
              <div className="indented-2">
                <span className="code-operator">{'</'}</span>
                <span className="code-class">{'Certification'}</span>
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
