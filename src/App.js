import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Footer from './components/Footer';
import Header from './components/Header';

import About from './views/About';
import Resume from './views/Resume';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="flex-1">
          <Switch>
            <Route path="/about" component={About} />
          </Switch>
          <Switch>
            <Route path="/resume" component={Resume} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
