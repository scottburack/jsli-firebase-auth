import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import firebase from 'firebase'

// Components
import Login from './components/Login'
import Dashboard from './components/Dashboard'

// require('firebase/firestore')
//
// const db = firebase.firestore()
//
// const usersRef = db.collection('users')


class App extends Component {

  state = {
    authed: false,
    userInDb: false
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      // if (user) {
      //   usersRef.doc(user.id).get()
      //   .then(doc => {
      //     this.setState( {
      //       userInDb: doc.exists,
      //     })
      //   })
      // }
      this.setState({
        authed: !!user
      })
      // if (user) {
      //   // User is signed in.
      //   alert(user.email)
      // } else {
      //   // No user is signed in.
      //   alert('no user!')
      // }
    });
  }

  render() {
    return (
      <div className="App">
        <h1>oAuth Practice</h1>

        <BrowserRouter>
          <Switch>
            <Route exact path='/' render={() => {
              return this.state.authed ? <Redirect to='/dashboard' /> : <Login />
            }}/>
            <Route path='/dashboard' render={() => {
              return this.state.authed ? <Dashboard /> : <Redirect to='/' />
            }}/>
            <Redirect to='/' />
          </Switch>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
