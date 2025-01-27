import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import UserTable from './components/UserTable'
import UserData from './components/UserData'

const App = () => {
  const [ users, setUsers ] = useState([])
  const [ selectedUser, setSelectedUser ] = useState(null)

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response) => setUsers(response.data))
    .catch(() => alert("Failed to fetch users"))
  }, [])

  const addUser = (newUser) => {
    axios.post("https://jsonplaceholder.typicode.com/users", newUser)
    .then((response) => {
      setUsers([...users, response.data])
      alert("User added Successfully")
    })
    .catch(() => alert("Failed to add User"))
  };

  const updateUser = (updatedUser) => {
    axios.put(`https://jsonplaceholder.typicode.com/users/${updatedUser.id}`, updatedUser)
    .then(() => {
      setUsers(
        users.map((user) => (user.id === updatedUser.id ? updatedUser: user))
      )
      alert("User Updated Successfully")
    })
    .catch(() => alert("Failed to update user"))
  }

  const deleteUser = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(() => {
      setUsers(
        users.filter((user) => user.id !== id));
        alert("User deleted Successfully")
    })
    .catch(() => alert("Failed to delete User"))
  };

  return (
    <div className='app-container'>
      <h1>User Management Dashboard</h1>
      <UserTable
        users={users}
        onEdit={(user) => setSelectedUser(user)}
        onDelete={deleteUser}/>
      <UserData
        selectedUser={selectedUser}
        onAdd={addUser}
        onUpdate={updateUser}
        onReset={() => setSelectedUser(null)}
      />
    </div>
  )
}

export default App

