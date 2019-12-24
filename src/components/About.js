import React from 'react';

import FadeInSection from './FadeInSection';

import './About.css';

const About = () => {
  return (
    <div className="page about">
      <FadeInSection>
        <h1>About</h1>
        <div className="content">
          <p>
            After graduating from Oakland University with a Bachelor of Arts in
            Journalism in 2010, Mike Sandula worked as a copy editor for several
            newspapers in Southeast Michigan.
          </p>
          <p>
            In 2016, Mike attended the Front-End Bootcamp at Grand Circus in
            Detroit and made the switch to programming, where his background as
            a copy editor has proven handy in identifying bugs and maintaining
            clean code.
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
    </div>
  );
};

export default About;
