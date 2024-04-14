import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Element } from 'react-scroll';
import HomePage from './components/HomePage/HomePage';
import CaseStudy from './components/CaseStudy/CaseStudy';
import CaseDetails from './components/CaseDetails/CaseDetails';
import AboutMe from './components/AboutMe/AboutMe';
import ContactMe from './components/ContactMe/ContactMe';
import ParallaxText from './components/ParallaxText/ParallaxText';
import Cat from './components/Cat/Cat';

function App() {
  const catRef = useRef(null);

  return (
    <Router>
      <Routes>
        {/* Main page containing all sections */}
        <Route path="/" element={
          <>
            <Element name="homePage">
              <HomePage />
            </Element>
            <Element name="caseStudy">
              <CaseStudy />
            </Element>
            <Element name="aboutMe">
              <AboutMe />
            </Element>
            <ParallaxText baseVelocity={-10}>motion</ParallaxText>
            <ParallaxText baseVelocity={10}>frontend</ParallaxText>
            <Element name="cat">
              <Cat ref={catRef} />
            </Element>
            <Element name="contactMe">
              <ContactMe triggerRef={catRef} />
            </Element>
          </>
        }/>
        <Route path="/case-study" element={<CaseDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
