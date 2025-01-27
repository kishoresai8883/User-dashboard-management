import React from 'react'
import UserDetails from './components/UserDetails'
import UserData from './components/UserData'

const App = () => {
  return (
    <div className='app-container'>
      <h1>User Management Dashboard</h1>
      <UserDetails/>
      <UserData/>
    </div>
  )
}

export default App

