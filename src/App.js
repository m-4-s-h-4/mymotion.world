import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './pages/Header/Header';
import CaseStudy from './pages/CaseStudy/CaseStudy';
import AboutMe from './pages/AboutMe/AboutMe';
import ContactMe from './pages/ContactMe/ContactMe';
import Space from './components/Space';
import ProjectOverview from './pages/ProjectOverview/ProjectOverview'; 
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
