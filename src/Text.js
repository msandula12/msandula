export const ResumeText = `
<Resume>
  <MikeSandula title="Software Developer" />
  <Contact email="msandula@gmail.com" />
  <GitHub userName="msandula12" />
  <LinkedIn userName="MikeSandula" />
  <Skills 
    skills="[
      'Angular 2+', 
      'React.js', 
      'Vue.js', 
      'jQuery', 
      'JavaScript/ES6/TypeScript', 
      'RxJS', 
      'FlatBuffers', 
      'Redux/MobX', 
      'NPM/Node.js', 
      'Webpack/Gulp/Grunt', 
      'Git/GitHub/GitLab', 
      'HTML5', 
      'CSS/LESS/Sass', 
      'D3.js', 
      'Adobe XD'
    ]" 
  />  
  <Section title="Education">
    <Education
      place="Grand Circus"
      location="Detroit, Mich."
      graduated="March 2016"
    >
      <Description>JavaScript Developer Bootcamp</Description>
    </Education>
    <Education
      place="Oakland University"
      location="Rochester, Mich."
      graduated="December 2010"
    >
      <Description>Bachelor of Arts in Journalism, GPA 3.6</Description>
      <Description>Cum Laude with departmental honors</Description>
    </Education>
  </Section>
  <Section title="Experience">
    <Job
      isCurrent
      company="Great Lakes Consulting Services"
      location="Livonia, Mich."
      role="Font-End Developer"
      startDate="January 2019"
    >
      <Description>
        Build and maintain a React with Redux front-end of an end-to-end
        budget forecasting application for Trinity Health
      </Description>
      <Description>
        Use Flatbuffers to serialize and deserialize large amounts of
        budgeting data
      </Description>
      <Description>
        Display data using flexible, interactive data grids and charts
      </Description>
    </Job>
    <Job
      company="Logicdrop"
      location="Ferndale, Mich."
      role="Software Developer"
      startDate="April 2016"
      endDate="December 2018"
    >
      <Description>
        Built client-facing websites and web apps using the latest
        front-end frameworks
      </Description>
      <Description>
        Lead developer for the front-end of Logicdrop’s Studio Platform
      </Description>
      <Description>
        Worked side-by-side with back-end team to implement Rest APIs with
        RxJS observables
      </Description>
      <Description>
        Wrote code for importing and exporting Excel spreadsheets and .CSV
        files and displaying them in an editable data table
      </Description>
      <Description>
        Followed GitLab best practices for version control and continuous
        integration
      </Description>
      <Description>
        Designed and developed UI wireframes and mockups using Adobe XD
      </Description>
    </Job>
    <Job
      company="The Oakland Press (Digital First Media)"
      location="Pontiac, Mich."
      role="Pagination Hub Editor"
      startDate="August 2011"
      endDate="January 2016"
    >
      <Description>
        Designed, proofed and finalized the print products for eight daily
        broadsheets, plus a handful of weekly Michigan and New York
        newspapers
      </Description>
    </Job>
  </Section>
</Resume>
`;
