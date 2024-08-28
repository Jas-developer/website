import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const { user, users, setUser, setUsers } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers((e) => users.push(...e, user));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="text"
          name="name"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          placeholder="Username"
        />
        {/*  */}
        <input
          type="number"
          name="age"
          value={user}
          placeholder="Age"
          onChange={(e) => setUser(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
