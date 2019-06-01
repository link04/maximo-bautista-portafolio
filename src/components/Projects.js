import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../data';

export default class Projects extends React.Component {

  render(){
      const projectsArray = projects.map(project => {
        return  <ProjectCard key={project.id} project={project} />
      })
    return(
      <section id="projects" className="projects" >

        <div className="title" >
          <h1>Projects</h1>
        </div>
        <hr/>
        <div className="projects-container" >
          {projectsArray}
        </div>

      </section>
    );

  };
};
