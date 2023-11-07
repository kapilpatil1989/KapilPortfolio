import React, { useState } from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({index, projectPhoto, projectName, projectDesc,projectGit,projectWeb}) => {

  console.log("decrPara-" + index);

  let showgit ='';
  let showweb ='';
  
  if(projectGit===""){
    showgit="none";
  }

  if(projectWeb===""){
    showweb="none";
  }

  const [expanded, setExpanded] = useState(false);

  const toggleDesc = () => {
    setExpanded(!expanded);
  };

    
  return (
    <div className='projectBox' style={{border:'none'}}> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            <p id={"decrPara-" + index}  
                style={{
                        height: expanded ? 'auto'  : '200px',
                        overflow: 'hidden',
                      }}  >
                {projectDesc}
            </p>
            
             { projectDesc.length > 250  &&
              <button id="readmore" onClick={toggleDesc}>
                Read {expanded ? 'Less' : 'More'}...
              </button> }
            <br />

            <a style={{display:showgit}} href={projectGit} target='_blank' rel="noreferrer" >
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a style={{display:showweb}} href={projectWeb} target='_blank' rel="noreferrer" >
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox
