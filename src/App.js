import React from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/css/index.css';

function App() {
  return (
    <div className="App">
      <section className=" welcome">
        <p>
          <span class="name-color" >Maximo Bautista.</span>
          <br/>
          I'm a Full-stack Web Developer
        </p>


        <a
          className="next-button"
          href="#bio"
        >
          Explore More
        </a>
      </section>
      <section className="" id="bio">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </section>
    </div>
  );
}

export default App;
