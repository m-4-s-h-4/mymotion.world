import React from 'react';
import './project_overview.css'; 
import ImageGrid from './ImageGrid/ImageGrid';
import ProcessingGrid from './ProcessingGrid/ProcessingGrid';
import BackButton from './BackButton/BackButton';
import CaseOverview from './CaseOverview/CaseOverview';
import TextMoodboard from './TextMoodboard/TextMoodboard';
import ColourGridText from './ColourGridText/ColourGridText';
import TextSketches from './TextSketches/TextSketches';
import ImageSketch from './ImageSketch/ImageSketch';
import TextProcessing from './TextProcessing/TextProcessing';
import AdobeSectionTitle from './AdobeSectionTitle/AdobeSectionTitle';
import TextAdobe from './TextAdobe/TextAdobe';
import ImagesAdobe from './ImagesAdobe/ImagesAdobe';
import TextTransitions from './TextTransitions/TextTransitions';
import ImagesTransitions from './ImagesTransitions/ImagesTransitions';
import TextTerrain from './TextTerrain/TextTerrain';
import ImagesTerrain from './ImagesTerrain/ImagesTerrain';
import TextConclusion from './TextConclusion/TextConclusion';
import ImagesConclusion from './ImagesConclusion/ImagesConclusion';
import CaseKeyTakeaways from './CaseKeyTakeaways/CaseKeyTakeaways';

const ProjectOverview = () => {
  return (
    <div className="page-container">
    <BackButton/>
<CaseOverview/>
{/* <TextStep/> */}
{/* shoes */}
<TextMoodboard/>
    <ImageGrid/>
<ColourGridText/>
<TextSketches/>
<ImageSketch/>
<TextProcessing/>
     <ProcessingGrid/>
<AdobeSectionTitle/>
     <TextAdobe/>
     <ImagesAdobe/>
<TextTransitions/>
<ImagesTransitions/>
<TextTerrain/>
<ImagesTerrain/>
<TextConclusion/>
<ImagesConclusion/>
<CaseKeyTakeaways/>
     </div>
     
  );
};

export default ProjectOverview;

