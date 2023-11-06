import React from 'react'; 
import { FaReact, FaGitAlt, FaGithub, FaNpm, FaBootstrap } from "react-icons/fa";
import { DiNodejs, DiJavascript1, DiMysql, DiDotnet } from "react-icons/di";
import { SiCsharp, SiExpress, SiSpring } from "react-icons/si";
import { CgCPlusPlus } from "react-icons/cg";
const Skills = ({ skill }) => {
  const icon = {
    'C++': <CgCPlusPlus/>,
    React: <FaReact/>,
    Javascript: <DiJavascript1/>,
    Node : <DiNodejs/>,
    Express : <SiExpress/>,
    Git : <FaGitAlt/>,
    Github : <FaGithub/>,
    Npm : <FaNpm/>,
    Bootstrap: <FaBootstrap/>,
    MySQL : <DiMysql/>,
    Spring : <SiSpring/>,
    AspNet : <DiDotnet/>,
    Csharp : <SiCsharp/>,
    // Add other icons as needed
  };
    
  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills
