import React, { createRef, useEffect, useState } from 'react';
import { animated, useTransition } from 'react-spring';

import './App.css';

import { PageProvider } from './context/PageContext';

import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Landing from './components/Landing';
import Resume from './components/Resume';

const App = () => {
  const [shouldShowHeader, setShouldShowHeader] = useState(false);

  const homePage = createRef();

  useEffect(() => {
    const determineIfHomePageIsOutOfView = () => {
      if (!homePage.current) {
        setShouldShowHeader(true);
        return;
      }
      const rect = homePage.current.getBoundingClientRect();
      const { height, top } = rect;
      setShouldShowHeader(top + height <= 0);
    };
    window.addEventListener('scroll', determineIfHomePageIsOutOfView);
    return () =>
      window.removeEventListener('scroll', determineIfHomePageIsOutOfView);
  }, [homePage]);

  const headerTransition = useTransition(shouldShowHeader, null, {
    from: { height: 0, opacity: 0, position: 'relative', top: -64 },
    enter: { height: 'auto', opacity: 1, position: 'sticky', top: 0 },
    leave: {
      height: 0,
      opacity: 0,
      position: 'relative',
      top: -64
    }
  });

  return (
    <PageProvider>
      <div className="my-app">
        {/* LANDING */}
        <section id="/home" ref={homePage}>
          <Landing />
        </section>

        {/* HEADER */}
        {headerTransition.map(
          ({ item, key, props }) =>
            item && (
              <animated.div key={key} style={props}>
                <Header />
              </animated.div>
            )
        )}

        {/* ABOUT */}
        <section id="/about">
          <About />
        </section>

        {/* RESUME */}
        <section id="/resume">
          <Resume />
        </section>

        {/* FOOTER */}
        <Footer />
      </div>
    </PageProvider>
  );
};

export default App;
