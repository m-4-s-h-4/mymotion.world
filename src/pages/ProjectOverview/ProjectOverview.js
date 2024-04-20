import React from 'react';
import { Link } from 'react-router-dom';
import './project_overview.css'; 
import ImageGrid from '../../components/ImageGrid/ImageGrid';
import SketchesGrid from '../../components/SketchesGrid/SketchesGrid';
import ColourPalette from '../../components/ColourPalette/ColourPalette';
import SketchesText from '../../components/SketchesText/SketchesText';
import PaletteText from '../../components/PaletteText/PaletteText';

const ProjectOverview = () => {
  return (
    <div className="page-container">
      <div className="back-button">
        <Link to="/">
          <span> {"<-"} </span> 
        </Link>
      </div>
     <h2 className="main-text"><span className="white-text">It all began with </span> <span className="orange-text-project">sketches on napkins </span >
     <span className="white-text">— because aren't all brilliant ideas born on paper tablecloths? </span> </h2>
     <div className="divider"></div>
     <div className="napkin-container">
    <div className="scrolling-content">
        <img src="napkins.png" alt="Sketches on napkins" className="napkin-image" />
        <img src="napkins.png" alt="Sketches on napkins" className="napkin-image" />
        <img src="napkins.png" alt="Sketches on napkins" className="napkin-image" />
        <img src="napkins.png" alt="Sketches on napkins" className="napkin-image" />
        <img src="napkins.png" alt="Sketches on napkins" className="napkin-image" />
        <img src="napkins.png" alt="Sketches on napkins" className="napkin-image" />
    </div>
</div>

     <SketchesText/>
    <SketchesGrid/>
   <PaletteText/>
    <ImageGrid/>
    <ColourPalette/>
    <h2 className="adobe-title-container"><span className="white-text">ANIMATING ADVENTURES IN ADOBE </span> <span className="orange-text-project">AFTEREFFECTS </span >
     <span className="white-text">OR THE MORPHING MAYHEM</span> </h2>
     </div>
  );
};

export default ProjectOverview;

