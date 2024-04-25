import React from 'react';
import { Link } from 'react-router-dom';
import './project_overview.css'; 
import ImageGrid from '../../components/ImageGrid/ImageGrid';
import SketchesGrid from '../../components/SketchesGrid/SketchesGrid';
import SketchesText from '../../components/SketchesText/SketchesText';
import PaletteText from '../../components/PaletteText/PaletteText';
import Divider from '../../components/Divider/Diveder';
import CaseStudyTwo from '../../components/CaseStudyTwo/CaseStudyTwo';
import CaseStudyThree from '../../components/CaseStudyThree/CaseStudyThree';
import CaseStudyFour from '../../components/CaseStudyFour/CaseStudyFour';
import ProcessingText from '../../components/ProcessingText/ProcessingText';
import ProcessingGrid from '../../components/ProcessingGrid/ProcessingGrid';
import WavesText from '../../components/WavesText/WavesText';
import WavesImages from '../../components/WavesImages/WavesImages';
import ColorGrid from '../../components/ColorGrid/ColorGrid';
import CaseStudyFinal from '../../components/CaseStudyFinal/CaseStudyFinal';
import BackButton from '../../components/BackButton/BackButton';

const ProjectOverview = () => {
  return (
    <div className="page-container">
    <BackButton/>
     <Divider/>
   <PaletteText/>
    <ImageGrid/>
    <ColorGrid/>
    <SketchesText/>
    <SketchesGrid/>
    <Divider/>
     <ProcessingText/>
     <ProcessingGrid/>
     <h2 className="adobe-title-container"><span className="white-text">ANIMATING ADVENTURES IN ADOBE </span> <span className="orange-text-project">AFTEREFFECTS </span >
      </h2>
     <Divider/>
     <CaseStudyFour/>
     <CaseStudyTwo/>
     <CaseStudyThree/>
     <WavesText/>
     <WavesImages/>
     <Divider/>
     <CaseStudyFinal/>

     </div>
     
  );
};

export default ProjectOverview;

