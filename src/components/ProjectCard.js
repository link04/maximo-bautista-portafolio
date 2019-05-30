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
    return(
      <div className="project-card" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} >

        <div hidden={this.state.mouseOver} className="project-front" >
          <div className="project-title">
            <h3>CraveMe</h3>
          </div>
          <div className="project-image">
            <img src={require('../assets/images/CraveMeImage.png')} alt="project name example" />
          </div>
        </div>

        <div hidden={!this.state.mouseOver} className="project-back" >
          <div className="">
            <h3>CraveMe</h3>
            <p>
              Dating app where users are able to match based on their daily craves and distance,
              they also can chat through the app if both user matches reciprocate
            </p>
          </div>
            <div className="">
              <h3>Created With:</h3>
            <p>React, Redux, Ruby on Rails, Bootstrap</p>
            <div className="project-link float-left" >
              <a href="https://github.com/link04/tic-tac-toe-project" target="_blank" >View Code</a>
            </div>
            <div className="project-link float-right" >
              <a href="https://github.com/link04/tic-tac-toe-project" target="_blank" >View Demo</a>
            </div>

          </div>
        </div>

      </div>
    )
  }

};
