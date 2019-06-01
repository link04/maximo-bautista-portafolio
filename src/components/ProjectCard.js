import React from 'react';

export default class ProjectCard extends React.Component {


  state = {
    mouseOver:false
  }

  handleMouseOver = () =>{
    this.setState({
      mouseOver: !this.state.mouseOver
    })
  }

  handleMouseOut = () =>{
    this.setState({
      mouseOver: !this.state.mouseOver
    })

  }
  
  render(){
    const {name, description, demo, github, imageName, technologies} = this.props.project;
    return(
      <div className="project-card" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} >

        <div hidden={this.state.mouseOver} className="project-front" >
          <div className="project-title">
            <h3>{name}</h3>
          </div>
          <div className="project-image">
            <img src={require(`../assets/images/${imageName}`)} alt="project name example" />
          </div>
        </div>

        <div hidden={!this.state.mouseOver} className="project-back" >
          <div className="project-details">
            <h3>{name}</h3>
            <p>{description}</p>
            <h3>Created With:</h3>
            <p>{technologies}</p>
          </div>
          <div className="project-link" >
            <a className="float-left" href={github} target="_blank" rel="noopener noreferrer" >Github <i className="fas fa-external-link-alt"></i> </a>
            <a className="float-right"  href={demo}  target="_blank" rel="noopener noreferrer" >Demo <i className="fas fa-external-link-alt"></i></a>
          </div>
        </div>

      </div>
    )
  }

};
