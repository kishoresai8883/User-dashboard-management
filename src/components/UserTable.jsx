import React from 'react'
import { Link } from "react-router-dom";

const UserTable = ({ users, onEdit, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>
            <Link
              to="/edit"
              className="edit-btn"
              onClick={() => onEdit(user)}
              >
                Edit
            </Link>
            <button onClick={() => onDelete(user.id)}>Delete</button>
          </td>
        </tr>
        ))}
      </tbody>
    </table>
  )
}

export default UserTable
