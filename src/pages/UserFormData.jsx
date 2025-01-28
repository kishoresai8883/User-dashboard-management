import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserFormData = ({ user = null, onSubmit }) => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (user) setFormData(user);
  }, [user]);

  //Change event handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  //Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert("Please fill in all fields!");
      return;
    }

    onSubmit({ ...formData, id: user ? user.id : Date.now() });
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{user ? "Edit User" : "Add User"}</h2>
      <label for='name'>Name</label>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <label for='email'>Email</label>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <button type="submit">{user ? "Update User" : "Add User"}</button>
    </form>
  );
};

export default UserFormData;