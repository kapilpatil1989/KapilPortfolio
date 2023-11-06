import React from 'react';
import ProjectBox from './ProjectBox';
import NewsletterImage from '../images/NewsletterImage.png';
import RogfreeImage from '../images/RogfreeImage.png';
import TindogImage from '../images/TindogImage.png';
import ShikshaBharat from '../images/shikshaBharatjpg.jpg'
import { useState } from 'react';
import {projectName} from '../Components/Data.js';

const Projects = () => {

  const[projectList, SetProjectList] = useState(projectName);

  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>

        {projectList.map((project, index) => {
              return   <ProjectBox index={index} projectPhoto={project.photo} projectName={project.name} projectDesc={project.desc} projectGit={project.git} projectWeb={project.web} />;
            })}

      </div>

    </div>
  )
}

export default Projects