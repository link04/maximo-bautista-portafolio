import React from 'react';
import { skills } from '../data';

export default class Skills extends React.Component {

  render(){

    const mappedSkills = skills.map((skill,index ) => {

          return (
            <div className="skill" key={skill.name + index} >
              {skill.fontIcon ?
                <i className={skill.fontIcon} ></i>
                :
                <img  alt={skill.name + ' logo'} src={require(`../assets/svg-icons/${skill.svgIcon}`)}  />
              }
              <h3>{skill.name}</h3>
            </div>
          )
        });

    return(
      <section id="skills" className="skills skills-container" >
          <div className="title" >
            <h1>Skills</h1>
          </div>
          <hr/>
          <div id="detailed" className="detailed" >
            <div>
              {mappedSkills}
            </div>
          </div>
      </section>
    );
  };
};
