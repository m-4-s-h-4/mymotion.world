import React from 'react';
import { Link } from 'react-router-dom';
import './project_overview.css'; 

const ProjectOverview = () => {
  return (
    <div className="page-container">
      <div className="back-button">
        <Link to="/">
          <span> {"<-"} </span> 
        </Link>
      </div>
     <h2><span className="white-text">It all began with </span> <span className="orange-text-project">sketches on napkins </span >
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

     <div className="sketches-text-container">
     <h4 className="text-small">They set the sequence of the animation.mapping out a storyboard that transitions the shoes from urban to natural settings.
     They set the sequence of the animation.mapping out a storyboard that transitions the shoes from urban to natural settings</h4>
     <h2 className="sketches-text-large">The sketches evolved into more refined storyboards</h2>
    </div>
    <div className="stotyboard-container">
        <img src="" alt="Storyboard image" />
     </div>
     <div className="colour-text-container">
     <div className="colour-container">
     <h2><span className="colour-white-text">COLOUR PALLETE </span> <span className="colour-orange-text">CHOICES</span ></h2>
     </div>
     <h4 className="text-small-right">This palette not only aligned with Tropicfeel’s brand identity but also supported the theme of versatility in different environments. 
     Inspired by nature and urban textures. This palette not only aligned with Tropicfeel’s brand identity but also supported the theme of versatility in different environments. Inspired by nature and urban textures.</h4>
    </div>
    <div className="colour-pallets-selection">
    <div className="colour-pallet" style={{ backgroundColor: '#313c1f' }}>
        <span className="colour-span-text">#313c1f</span>
    </div>
    <div className="colour-pallet" style={{ backgroundColor: '#22241d' }}>
        <span className="colour-span-text">#22241d</span>
    </div>
    <div className="colour-pallet" style={{ backgroundColor: '#003C43' }}>
        <span className="colour-span-text">#003C43</span>
    </div>
    <div className="colour-pallet" style={{ backgroundColor: '#77B0AA' }}>
        <span className="colour-span-text">#77B0AA</span>
    </div>
    <div className="colour-pallet" style={{ backgroundColor: '#E3FEF7' }}>
        <span className="colour-span-text">#E3FEF7</span>
    </div>
    <div className="adobe-title-container">
    <h2><span className="white-text">ANIMATING ADVENTURES IN ADOBE </span> <span className="orange-text-project">AFTEREFFECTS </span >
     <span className="white-text">OR THE MORPHING MAYHEM</span> </h2>
</div>
</div>
    </div>
  );
};

export default ProjectOverview;

