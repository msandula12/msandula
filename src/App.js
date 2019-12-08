import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Page from './components/Page';

import About from './views/About';
import Resume from './views/Resume';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Page>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/resume" component={Resume} />
          </Switch>
        </Page>
      </div>
    </Router>
  );
};

export default App;
