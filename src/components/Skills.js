import React from 'react';

export default class Skills extends React.Component {

    state = {
      skills:[
        {
          name: 'HTML5',
          fontIcon: 'fab fa-html5'
        },
        {
          name: 'CSS3',
          fontIcon: 'fab fa-css3-alt'
        },
        {
          name: 'Bootstrap',
          fontIcon: 'fab fa-bootstrap'
        },
        {
          name: 'Javascript',
          fontIcon: 'fab fa-js'
        },
        {
          name: 'React',
          fontIcon: 'fab fa-react'
        },
        {
          name: 'Redux',
          svgIcon: 'redux.svg'
        },
        {
          name: 'Ruby',
          svgIcon: 'ruby.svg'
        },
        {
          name: 'Rails',
          svgIcon: 'rails.svg'
        },
        {
          name: 'MySQL',
          svgIcon: 'mysql.svg'
        },
        {
          name: 'PostgreSQL',
          svgIcon: 'postgresql.svg'
        },
        {
          name: 'Git',
          fontIcon: 'fab fa-git'
        },
        {
          name: 'Github',
          fontIcon: 'fab fa-github'
        },
      ]
    }

  mappSkills = (skillsObject) => {
    const mappedSkills = skillsObject.map((skill,index ) => {
        return(
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
    return mappedSkills;
  }

  render(){

    return(
      <section id="skills" className="skills skills-container" >
          <div className="skills-title title" >
            <h1>Skills</h1>
          </div>

          <div id="detailed" className="detailed" >
            <div>
              {this.mappSkills(this.state.skills)}
            </div>
          </div>
      </section>
    );
  };
};
