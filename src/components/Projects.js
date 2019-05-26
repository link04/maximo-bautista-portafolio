import React from 'react';

export default class Projects extends React.Component {

  render(){

    return(
      <section id="projects" className="projects" >
        <p>
          <span className="name-color" >Maximo Bautista</span>
          <br/>
          I'm a Full-stack Web Developer
        </p>

        <div className="next-button" >
          <a  href="#about" >
            <i className="arrow down"></i>
          </a>
        </div>

      </section>
    );

  };
};
