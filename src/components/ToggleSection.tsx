import React, { useRef } from 'react';
import Table from './PerformanceSection';
import About from './About';
import SentimentSection from './SentimentSection';
import TeamCard from './TeamCard';
import Tokenomics from './Tokenomics';

function ToggleSection(): JSX.Element {
  const toggleSection = (section: string): void => {
    const sectionRef = refs[section];
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const refs: { [key: string]: React.RefObject<HTMLDivElement> } = {
    overview: useRef<HTMLDivElement>(null),
    fundamentals: useRef<HTMLDivElement>(null),
    newsInsights: useRef<HTMLDivElement>(null),
    sentiments: useRef<HTMLDivElement>(null),
    team: useRef<HTMLDivElement>(null),
    technicals: useRef<HTMLDivElement>(null),
    tokenomics: useRef<HTMLDivElement>(null),
    // Combined refs
    overviewAndFundamentals: useRef<HTMLDivElement>(null),
    newsInsightsAndTechnicals: useRef<HTMLDivElement>(null),
  };

  return (
    <div>
      <div className="flex space-x-7 lg:space-x-10 text-sm font-medium text-[#3E424A] py-4 overflow-x-auto">
        <div className={`cursor-pointer `} onClick={() => toggleSection('overviewAndFundamentals')}>
          Overview
        </div>
        <div className={`cursor-pointer `} onClick={() => toggleSection('overviewAndFundamentals')}>
          Fundamentals
        </div>
        <div className={`cursor-pointer `} onClick={() => toggleSection('newsInsightsAndTechnicals')}>
          News Insights
        </div>
        <div className={`cursor-pointer `} onClick={() => toggleSection('sentiments')}>
          Sentiments
        </div>
        <div className={`cursor-pointer `} onClick={() => toggleSection('team')}>
          Team
        </div>
        <div className={`cursor-pointer `} onClick={() => toggleSection('newsInsightsAndTechnicals')}>
          Technicals
        </div>
        <div className={`cursor-pointer `} onClick={() => toggleSection('tokenomics')}>
          Tokenomics
        </div>
      </div>
      <hr className="" />

      {/* Refs for each section */}
      <div ref={refs.overviewAndFundamentals}><Table /></div>
      <div ref={refs.sentiments}><SentimentSection /></div>
      <div ref={refs.newsInsightsAndTechnicals}><About /></div>
      <div ref={refs.tokenomics}><Tokenomics /></div>
      <div ref={refs.team}><TeamCard /></div>
    </div>
  );
}

export default ToggleSection;







// import { useState } from 'react';
// import Table from './PerformanceSection'
// import About from './About';
// import SentimentSection from './SentimentSection';
// import TeamCard from './TeamCard';
// import Tokenomics from './Tokenomics';

// function ToggleSection() {
//   const [activeSection, setActiveSection] = useState('Overview');

//   const handleButtonClick = (section) => {
//     setActiveSection(section);
//   };

//   const renderSection = () => {
//     switch (activeSection) {
//       case 'Overview':
//         return <Table/>;
//       case 'Fundamentals':
//         return <Table/>;
//       case 'News Insights':
//         return <About/>;
//       case 'Sentiments':
//         return <SentimentSection />;
//       case 'Team':
//         return <TeamCard />;
//       case 'Technicals':
//         return <Tokenomics />;
//       case 'Tokenomics':
//         return <Tokenomics />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div>
//       <div className="flex space-x-7 lg:space-x-10 text-sm font-medium text-[#3E424A] py-4 overflow-x-auto">
//         <div className={activeSection === 'Overview' ? 'text-[#0141CF] border-[#0052FE] border-b-4 pb-4' : ''}>
//           <button onClick={() => handleButtonClick('Overview')}>Overview</button>
//         </div>
//         <div className={activeSection === 'Fundamentals' ? 'text-[#0141CF] border-[#0052FE] border-b-4 pb-4' : ''}>
//           <button onClick={() => handleButtonClick('Fundamentals')}>Fundamentals</button>
//         </div>
//         <div className={activeSection === 'News Insights' ? 'text-[#0141CF] border-[#0052FE] border-b-4 pb-4' : ''}>
//           <button onClick={() => handleButtonClick('News Insights')}>News Insights</button>
//         </div>
//         <div className={activeSection === 'Sentiments' ? 'text-[#0141CF] border-[#0052FE] border-b-4 pb-4' : ''}>
//           <button onClick={() => handleButtonClick('Sentiments')}>Sentiments</button>
//         </div>
//         <div className={activeSection === 'Team' ? 'text-[#0141CF] border-[#0052FE] border-b-4 pb-4' : ''}>
//           <button onClick={() => handleButtonClick('Team')}>Team</button>
//         </div>
//         <div className={activeSection === 'Technicals' ? 'text-[#0141CF] border-[#0052FE] border-b-4 pb-4' : ''}>
//           <button onClick={() => handleButtonClick('Technicals')}>Technicals</button>
//         </div>
//         <div className={activeSection === 'Tokenomics' ? 'text-[#0141CF] border-[#0052FE] border-b-4 pb-4' : ''}>
//           <button onClick={() => handleButtonClick('Tokenomics')}>Tokenomics</button>
//         </div>
//       </div>
//       <hr className="" />
//       {renderSection()}
//     </div>
//   );
// }

// export default ToggleSection;


// import { Link} from 'react-router-dom';


// function ToggleSection() {


//   return (
//     <div>
//       <div className="flex space-x-7 lg:space-x-10 text-sm font-medium text-[#3E424A] py-4 overflow-x-auto">
//         <div>
//           <Link to="/overview">Overview</Link>
//         </div>
//         <div>
//           <Link to="/fundamentals">Fundamentals</Link>
//         </div>
//         <div>
//           <Link to="/about">News Sights</Link>
//         </div>
//         <div>
//           <Link to="/sentiment">Sentiments</Link>
//         </div>
//         <div>
//           <Link to="/team">Team</Link>
//         </div>
//         <div>
//           <Link to="/about">Technicals</Link>
//         </div>
//         <div>
//           <Link to="/tokenomics">Tokenomics</Link>
//         </div>
        
//       </div>
      
//     </div>
//   );
// }

// export default ToggleSection;


