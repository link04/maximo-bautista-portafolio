import React from 'react';

export default class About extends React.Component {

  render(){

    return(
      <section id="about" className="about about-container" >
          <div className="title" >
            <h1>About</h1>
          </div>
          <hr/>
          <div className="about-container ">
            <div className="traits">
              <div>
                <span><i className="fas fa-hammer"></i></span>
                <p>Some say I am the life of the party but also a hard working person.</p>
              </div>
              <div>
                <span><i className="fas fa-bug"></i></span>
                <p>Because of how efficient(stubborn) I am, no bug is safe from debugging.</p>
              </div>
              <div>
                <span><i className="fas fa-search"></i></span>
                <p>My curiosity is what makes me ambitious, I want to be better and I'm willing to find a way.</p>
              </div>
            </div>
            <div  className="about-content" >
            <div className="image-container">
              <img src={require('../assets/images/profile1.jpg')} className="profile-image" alt="Maximo Bautista" />
            </div>
            <div className="bio-content">
                <h3>About Me.</h3>
                <p>
                  Full stack web developer with a passion for finding answers and solutions to issues of life.
                  With experience in Ruby on Rails, JavaScript, React and Redux, and a background in customer service interactions.
                  I possess strong skills in user experience and debugging that helps innovative companies build user-focused and easy-to-use websites and applications.
                 I also made a couple of video games.
                </p>
            </div>
          </div>
          </div>
      </section>
    );

  };
};
