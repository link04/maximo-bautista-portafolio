import React from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/css/index.css';

class App extends React.Component {

  state = {
    actualViewScrolled:0
  }

  componentDidMount() {
      window.addEventListener('scroll', this.userView , true);
   }

  userView = () => {
      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;
      this.setState({
        actualViewScrolled: scrolled
      })
    }

activeLink = (linkName) => {
  if(this.state.actualViewScrolled < 20 && linkName === 'welcome'){
    return linkName
  } else if(this.state.actualViewScrolled >= 20 && this.state.actualViewScrolled <= 35 && linkName === 'about'){
    return linkName
  } else if(this.state.actualViewScrolled < 20 && linkName === 'projects'){
    return linkName
  } else if(this.state.actualViewScrolled < 20 && linkName === 'skills'){
    return linkName
  } else if(this.state.actualViewScrolled < 20 && linkName === 'contact'){
    return linkName
  }
}

render(){
  console.log(this.state.actualViewScrolled);
    return (
      <div className="App">

        { this.state.actualViewScrolled < 20 ?
          null
          :
          <div class="sidebar" >
            <a href="#welcome" className={this.state.actualViewScrolled < 20 ? 'active' : null } >Welcome</a>
            <a href="#about" className={this.state.actualViewScrolled >= 20 && this.state.actualViewScrolled  < 50 ? 'active' : null }  >About</a>
            <a href="#projects" className={this.state.actualViewScrolled >= 20 && this.state.actualViewScrolled  < 50 ? 'active' : null }>projects</a>
            <a href="#skills" className={this.state.actualViewScrolled >= 20 && this.state.actualViewScrolled  < 50 ? 'active' : null } >skills</a>
            <a href="#contact" className={this.state.actualViewScrolled >= 20 && this.state.actualViewScrolled  < 50 ? 'active' : null } >Contact</a>
          </div>
        }

        <div className="main">
          <section id="welcome" className="welcome" >
            {
              console.log(document.querySelector('section.welcome'))
            }
            <p>
              <span className="name-color" >Maximo Bautista</span>
              <br/>
              I'm a Full-stack Web Developer
            </p>

            <div className="next-button " >
              <a  href="#about" >
                <i className="arrow down "></i>
              </a>
            </div>

          </section>
          <section id="about" className="about" >
          </section>
          <section id="abowut" className="about" >
          </section>
          <section id="aboweut" className="about" >
          </section>
          <section id="aboewut" className="about" >
          </section>
        </div>

      </div>
    );
  }
}

export default App;
