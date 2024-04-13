import React, { useRef } from 'react';
import { Element } from 'react-scroll';
import HomePage from './components/HomePage/HomePage';
import CaseStudy from './components/CaseStudy/CaseStudy';
import AboutMe from './components/AboutMe/AboutMe';
import ContactMe from './components/ContactMe/ContactMe';
import ParallaxText from './components/ParallaxText/ParallaxText';
import Cat from './components/Cat/Cat';

function App() {
  const catRef = useRef(null);

  return (
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
  );
}

export default App;
