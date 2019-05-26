import React from 'react';

export default class Contact extends React.Component {

  render(){

    return(
      <section id="contact" className="contact" >
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
