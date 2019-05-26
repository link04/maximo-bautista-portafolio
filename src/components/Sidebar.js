import React from 'react';

export default class Sidebar extends React.Component {

  render(){
    return(
      <div className="sidebar" >
        <a href="#welcome" className={this.props.activeLink('welcome')} ><i className="fas fa-door-open"></i></a>
        <a href="#about" className={this.props.activeLink('about')} ><i className="fas fa-address-card"></i></a>
        <a href="#skills" className={this.props.activeLink('skills')}  ><i className="fas fa-toolbox"></i></a>
        <a href="#projects" className={this.props.activeLink('projects')} ><i className="fas fa-clipboard-check"></i></a>
        <a href="#contact" className={this.props.activeLink('contact')}  ><i className="fas fa-id-card-alt"></i></a>
      </div>
    );

  };
};
