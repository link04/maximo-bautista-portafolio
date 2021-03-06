import React from 'react';

export default class Contact extends React.Component {

  render(){

    return(
      <section id="contact" className="contact" >
        <div className="title" >
          <h1>Contact</h1>
        </div>
        <hr/>
        <div className="contact-methods" >

          <a className="contact-link" href="https://www.linkedin.com/in/maximo-bautista-480786a6/" target="_blank" rel="noopener noreferrer" >
            <i className="fab fa-linkedin-in"></i>
          </a>

          <a className="contact-link" href="https://github.com/link04" target="_blank" rel="noopener noreferrer" >
            <i className="fab fa-github"></i>
          </a>

          <a className="contact-link" href="https://medium.com/@max.bautista97" target="_blank" rel="noopener noreferrer" >
            <i className="fab fa-medium-m"></i>
          </a>

          <a className="contact-link" href="mailto:max.bautista97@gmail.com" target="_blank" rel="noopener noreferrer" >
            <i className="far fa-envelope"></i>
          </a>

          <a className="contact-link" href="https://drive.google.com/file/d/1woiwYFwoaWQXs6z2xhvHlXP5xOq9Q6k9/view?usp=sharing" target="_blank" rel="noopener noreferrer" >
            <i className="far fa-file-alt"></i>
          </a>

        </div>
        <div className="button-container">
          <a  href="#welcome" className="go-up-button" >
            <i className="arrow up"></i>
          </a>
        </div>

      </section>
    );

  };
};
