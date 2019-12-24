import React, { createRef, useEffect, useState } from 'react';
import { animated, useTransition } from 'react-spring';

import './App.css';

import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Landing from './components/Landing';
import Resume from './components/Resume';

const App = () => {
  const [page, setPage] = useState('');
  const [shouldShowHeader, setShouldShowHeader] = useState(false);

  const homePage = createRef();
  const aboutPage = createRef();
  const resumePage = createRef();

  useEffect(() => {
    const getDistanceFromTop = ref => {
      return ref && ref.getBoundingClientRect().top;
    };

    const determineActivePage = () => {
      const pages = [
        {
          page: 'home',
          fromTop: getDistanceFromTop(homePage.current)
        },
        {
          page: 'about',
          fromTop: getDistanceFromTop(aboutPage.current)
        },
        {
          page: 'resume',
          fromTop: getDistanceFromTop(resumePage.current)
        }
      ];
      const activePage = pages.reduce((acc, cur) => {
        return Math.floor(cur.fromTop) <= 0 && cur.fromTop > acc.fromTop
          ? cur
          : acc;
      }).page;
      if (page !== activePage) {
        setPage(activePage);
        setShouldShowHeader(activePage !== 'home');
        window.location.hash = `/${activePage}`;
      }
    };

    window.addEventListener('scroll', determineActivePage);
    return () => window.removeEventListener('scroll', determineActivePage);
  }, [page, homePage, aboutPage, resumePage]);

  const headerTransition = useTransition(shouldShowHeader, null, {
    from: { opacity: 0, position: 'fixed', top: -64 },
    enter: {
      opacity: 1,
      position: 'fixed',
      top: 0,
      width: '100%'
    },
    leave: {
      opacity: 0,
      position: 'fixed',
      top: -64
    }
  });

  return (
    <div className="my-app">
      {/* LANDING */}
      <section id="home" ref={homePage}>
        <Landing />
      </section>

      {/* ABOUT */}
      <section id="about" ref={aboutPage}>
        <About />
      </section>

      {/* RESUME */}
      <section id="resume" ref={resumePage}>
        <Resume />
      </section>

      {/* FOOTER */}
      <Footer />

      {/* HEADER */}
      {headerTransition.map(
        ({ item, key, props }) =>
          item && (
            <animated.div key={key} style={props}>
              <Header activePage={page} />
            </animated.div>
          )
      )}
    </div>
  );
};

export default App;
