import React, { useState } from "react";
import { loginUser } from "../api/auth"; // Import the loginUser function from auth.js

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await loginUser(email, password); // Call the login function
      console.log("Login successful:", response);
      localStorage.setItem("userToken", response.token); // Store token if needed
    } catch (err) {
      setError("Invalid login credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p>{error}</p>}
      {loading ? <p>Loading...</p> : <button type="submit">Login</button>}
    </form>
  );
}

export default LoginForm;
