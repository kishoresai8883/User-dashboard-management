import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import axios from 'axios'
import UserTable from './components/UserTable'
import UserFormData from './pages/UserFormData'
import './App.css'

const App = () => {
  const [ users, setUsers ] = useState([])
  const [ selectedUser, setSelectedUser ] = useState(null)

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response) => setUsers(response.data))
    .catch(() => alert("Failed to fetch users"))
  }, [])

  // Add User
  const addUser = (newUser) => {
    axios.post("https://jsonplaceholder.typicode.com/users", newUser)
    .then((response) => {
      setUsers([...users, response.data])
      alert("User added Successfully")
    })
    .catch(() => alert("Failed to add User"))
  };

  // Update User
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

  // Delete User
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
    <Router>
      <div className='app-container'>
        <h1>User Management Dashboard</h1>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Link to="/add" className="add-user-btn">Add User</Link>
                <UserTable
                  users={users}
                  onEdit={(user) => setSelectedUser(user)}
                  onDelete={deleteUser}
                />
              </>
            }
          />
          <Route
            path="/add"
            element={<UserFormData onSubmit={addUser} />}
          />
          <Route
            path="/edit"
            element={<UserFormData user={selectedUser} onSubmit={updateUser} />}
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App

