import React, { createRef, useEffect, useState } from 'react';
import { animated, config, useTransition } from 'react-spring';

import FadeInSection from './FadeInSection';

import './About.css';

const About = () => {
  const [showSocialIcons, setShowSocialIcons] = useState(false);
  const aboutPage = createRef();

  useEffect(() => {
    const determineIfShouldShowSocialIcons = () => {
      if (!aboutPage.current) {
        setShowSocialIcons(false);
        return;
      }
      const rect = aboutPage.current.getBoundingClientRect();
      const { top } = rect;
      setShowSocialIcons(top >= 0 && top < 400);
    };
    window.addEventListener('scroll', determineIfShouldShowSocialIcons);
    return () =>
      window.removeEventListener('scroll', determineIfShouldShowSocialIcons);
  }, [aboutPage]);

  const socialIconsTransition = useTransition(showSocialIcons, null, {
    from: { bottom: 40, right: 0, opacity: 0, position: 'fixed' },
    enter: { bottom: 40, right: 32, opacity: 1 },
    leave: { bottom: 40, right: 0, opacity: 0 },
    config: config.gentle,
  });

  return (
    <div ref={aboutPage} className="page about">
      <FadeInSection>
        <h1>About</h1>
        <div className="content">
          <p>
            After graduating from Oakland University with a Bachelor of Arts in
            Journalism in 2010, Mike Sandula worked as a copy editor for several
            newspapers in Southeast Michigan.
          </p>
          <p>
            In 2016, Mike channeled his lifelong love of problem-solving and
            made the switch to programming, where his background as a copy
            editor has proven handy in identifying bugs and maintaining clean
            code. He attended the Front-End Bootcamp at Grand Circus in Detroit,
            landing his first developer job shortly after.
          </p>
          <p>
            Mike specializes in building front-ends for large web applications.
          </p>
          <p>
            When he's not behind a computer, Mike can be found behind either his
            drum set or a book, or beside his wife and their cat, Ziggy.
          </p>
        </div>
      </FadeInSection>

      {/* SOCIAL ICONS */}
      {socialIconsTransition.map(
        ({ item, key, props }) =>
          item && (
            <animated.div key={key} style={props} className="social-icons">
              <a
                className="linkedin"
                href="https://www.linkedin.com/in/mikesandula"
                rel="noopener noreferrer"
                target="_blank"
                title="LinkedIn"
              >
                <i className="fab fa-linkedin" />
              </a>
              <a
                className="github"
                href="https://github.com/msandula12"
                rel="noopener noreferrer"
                target="_blank"
                title="GitHub"
              >
                <i className="fab fa-github-square" />
              </a>
              <a
                className="codepen"
                href="https://codepen.io/msandula"
                rel="noopener noreferrer"
                target="_blank"
                title="CodePen"
              >
                <i className="fab fa-codepen" />
              </a>
            </animated.div>
          )
      )}
    </div>
  );
};

export default About;
