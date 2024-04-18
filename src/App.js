import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import CaseStudy from './components/CaseStudy/CaseStudy';
import AboutMe from './components/AboutMe/AboutMe';
import ContactMe from './components/ContactMe/ContactMe';
import Space from './components/Space';
import ProjectOverview from './components/ProjectOverview/ProjectOverview'; 
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <Router>
        <ScrollToTop />
        <div>
          <Routes>
            <Route path="/" element={
              <>
                <Header />
                <CaseStudy />
                <AboutMe />
                <Space />
                <ContactMe />
              </>
            } />
            <Route path="/project-overview" element={<ProjectOverview />} />
          </Routes>
        </div>
    </Router>
  );
};

export default App;
