import React, { useState } from "react";

function Login() {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        name="Username"
        value={userName}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      {/*  */}
      <input
        type="password"
        name="Password"
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
