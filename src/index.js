import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'antd/dist/antd.css'
import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyA2-kpAHVUrAHrg-U7UG6H5IR9fyhceb7s",
  authDomain: "oauth-demo-85cc9.firebaseapp.com",
  databaseURL: "https://oauth-demo-85cc9.firebaseio.com",
  projectId: "oauth-demo-85cc9",
  storageBucket: "oauth-demo-85cc9.appspot.com",
  messagingSenderId: "200639628733"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
