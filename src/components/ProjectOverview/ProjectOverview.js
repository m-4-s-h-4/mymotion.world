import React from 'react';
import './project_overview.css'; 

const ProjectOverview = () => {
  return (
    <div className="page-container">
     <h2><span className="white-text">It all began with </span> <span className="orange-text-project">sketches on napkins </span >
     <span className="white-text">— because aren't all brilliant ideas born on paper tablecloths? </span> </h2>
     <div className="divider"></div>
     <div className="napkin-container">
        <img src="napkins.png" alt="Sketches on napkins" />
     </div>
     <div className="sketches-text-container">
     <h4 className="text-small">They set the sequence of the animation.mapping out a storyboard that transitions the shoes from urban to natural settings.</h4>
     <h2 className="sketches-text-large">“The sketches evolved into more refined storyboards” </h2>
    </div>
    <div className="stotyboard-container">
        <img src="" alt="Storyboard image" />
     </div>
     <div className="colour-text-container">
     <div className="colour-container">
     <h2><span className="colour-white-text">COLOUR PALLETE </span> <span className="colour-orange-text">CHOICES</span ></h2>
     </div>
     <h4 className="text-small-right">This palette not only aligned with Tropicfeel’s brand identity but also supported the theme of versatility in different environments.Inspired by nature and urban textures.</h4>
    </div>
    </div>
  );
};

export default ProjectOverview;
