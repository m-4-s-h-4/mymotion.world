import shoes_anim from './shoes_anim.json';
import './case_study.css';
import CaseText from '../../components/CaseText/CaseText';
import LearnMoreButton from '../../components/LearnMoreButton/LearnMoreButton';
import ShoesAnimation from '../../components/ShoesAnimation/ShoesAnimation';

const CaseStudy = () => {

    return (
        <div className="case-container">
            <div className="parent">
                <CaseText/>
                <LearnMoreButton />
                <ShoesAnimation animationData={shoes_anim} />
            </div>
        </div>
    );
}

export default CaseStudy;
