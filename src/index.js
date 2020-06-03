import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import './assets/css/index.css';

import App from './App';
import * as serviceWorker from './serviceWorker';

window.DD_RUM && window.DD_RUM.init({
  clientToken: 'pubb3ff4bcdd5af1c9c05f965d34edafdd9',
  applicationId: '0234e0ff-65dd-4f50-a443-8aee8686d493',
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
