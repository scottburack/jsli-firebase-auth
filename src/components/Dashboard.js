import React from 'react'
import { Container, FadeIn } from './common'
import firebase from 'firebase'
import { Button } from 'antd'


const Dashboard = () => {

  const signOut = () => {
    firebase.auth().signOut()
  }

  return (
    <Container>
    <FadeIn duration={1}>
      <h2>Dashboard</h2>
      <Button onClick={signOut} type='primary' size='large'>Logout</Button>
    </FadeIn>
    </Container>
  )
}

export default Dashboard
