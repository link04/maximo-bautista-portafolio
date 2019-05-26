import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './assets/css/index.css';

import Sidebar from './components/Sidebar.js';
import Welcome from './components/Welcome.js';
import About from './components/About.js';
import Skills from './components/Skills.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';

class App extends React.Component {

  state = {
    actualViewScrolled:0
  }

  componentDidMount() {
      document.querySelector('.main').addEventListener('scroll', this.userView , true);
   }

  userView = () => {
    const main = document.querySelector('.main');
      var winScroll = main.scrollTop;
      var height = main.scrollHeight - main.clientHeight;
      var scrolled = (winScroll / height) * 100;
      this.setState({
        actualViewScrolled: scrolled
      })
    }

  activeLink = (linkName) => {
    if(this.state.actualViewScrolled < 20 && linkName === 'welcome'){
      return 'active'
    } else if(this.state.actualViewScrolled >= 20 && this.state.actualViewScrolled <= 40 && linkName === 'about'){
      return 'active'
    } else if(this.state.actualViewScrolled >= 40 && this.state.actualViewScrolled <= 60 && linkName === 'skills'){
      return 'active'
    } else if(this.state.actualViewScrolled >= 60 && this.state.actualViewScrolled <= 85 && linkName === 'projects'){
      return 'active'
    } else if(this.state.actualViewScrolled >= 85 && this.state.actualViewScrolled <= 100 &&  linkName === 'contact'){
      return 'active'
    }
  }

render(){
  // console.log(this.state);
    return (
      <div className="container">
        <Sidebar activeLink={this.activeLink} />
        <div className="main">
          <Welcome />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </div>
    );
  }
}

export default App;
