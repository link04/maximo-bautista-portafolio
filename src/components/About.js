import React from 'react';

export default class About extends React.Component {

  render(){

    return(
      <section id="about" className="about" >
        <div class="about-container">
          <div class="title" >
            <h2>About</h2>
          </div>
          <div class="image-container">
            <img src={require('../assets/images/profile1.jpg')} class="rotate270 profile-image" alt="Maximo Bautista" /> </div>
          <div class="bio-content">
            <p>
              Full stack web developer with a passion for finding answers and solutions to issues of life.  With experience in Ruby on Rails, JavaScript, Redux, and React and a background in customer service interactions, I discovered software development through a friend who suggested this was a career I would love. He was right! I bring strong skills in user experience and debugging that helps innovative companies build user-focused and easy-to-use websites and applications. I also make my own video games.
            </p>
          </div>
        </div>
      </section>
    );

  };
};
