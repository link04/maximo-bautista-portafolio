import React from 'react';
import ProjectCard from './ProjectCard';


export default class Projects extends React.Component {

  render(){

    return(
      <section id="projects" className="projects" >

        <div className="title" >
          <h1>Projects</h1>
        </div>

        <div className="projects-container" >
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />

        </div>

      </section>
    );

  };
};
