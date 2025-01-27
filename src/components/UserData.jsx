import React, { useState, useEffect } from 'react'

const UserData = ({ selectedUser, onAdd, onUpdate, onReset}) => {
    const [ userData, setUserData ] = useState({
        id: "",
        name: "",
        email: ""
    })

    useEffect(() => {
        if (selectedUser) {
            setUserData(selectedUser)
        } else {
            setUserData({
                id: "",
                name: "",
                email: ""
            })
        }
    }, [selectedUser])

    const handleChange = (e) => {
        const { name, value } = e.target
        setUserData({
            ...userData,
            [name]: value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        if (!userData.name || !userData.email) {
            alert("Please enter Name and Email")
            return
        }

        if (selectedUser) {
            onUpdate(userData)
        } else {
            onAdd({...userData, id: Date.now()})
        }

        onReset()
        setUserData({ id: "", name: "", email: "" })
    }

  return (
    <form onSubmit={submitHandler}>
        <h2>{selectedUser ? "Edit User" : "Add User"}</h2>
        <input
            type='text'
            name='name'
            value={userData.name}
            placeholder='Name'
            onChange={handleChange}
            required
        />
        <input
            type='email'
            name='email'
            value={userData.email}
            placeholder='Email'
            onChange={handleChange}
            required
        />
        <button type='submit'>{selectedUser ? "Update User" : "Add User"}</button>
        {selectedUser && 
            <button type='button' onClick={onReset}>Cancel</button>}
    </form>
  )
}

export default UserData
