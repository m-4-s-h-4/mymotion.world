import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import CaseStudy from './components/CaseStudy/CaseStudy';
import AboutMe from './components/AboutMe/AboutMe';
import ContactMe from './components/ContactMe/ContactMe';
import Space from './components/Space';
import SmoothScroll from './components/SmoothScroll';
import ProjectOverview from './components/ProjectOverview/ProjectOverview'; // Import the new component

const App = () => {
  return (
    <Router>
      <SmoothScroll>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={
              <>
                <CaseStudy />
                <AboutMe />
                <Space />
                <ContactMe />
              </>
            } />
            <Route path="/project-overview" element={<ProjectOverview />} />
          </Routes>
        </div>
      </SmoothScroll>
    </Router>
  );
};

export default App;
