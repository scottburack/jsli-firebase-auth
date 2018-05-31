import React from 'react'
import { Container, FadeIn } from './common'
import firebase from 'firebase'
import { Button } from 'antd'

const Login = () => {

  const loginWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
  }

  return (
    <Container>
      <FadeIn duration={5}>
      <h2>Login</h2>
      <Button onClick={loginWithGoogle} type='primary' size='large'>Login With Google</Button>
      </FadeIn>
    </Container>

  )
}

export default Login
