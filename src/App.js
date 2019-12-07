import React from 'react';
import './App.css';

import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="flex-1">{/* TODO - content */}</div>
      <Footer />
    </div>
  );
};

export default App;
