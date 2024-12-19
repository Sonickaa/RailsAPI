import React, { useState, useEffect } from "react";
import api from "../api/api";

const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if the user is logged in
    const fetchUser = async () => {
      try {
        const response = await api.get("/users/current");
        setUser(response.data);
      } catch (error) {
        console.log("Error fetching user data:", error);
      }
    };

    fetchUser();
  }, []);

  const handleLogout = async () => {
    try {
      await api.delete("/users/sign_out"); // Log out the user by hitting the sign_out endpoint
      setUser(null); // Clear the user from the state
    } catch (error) {
      console.log("Error logging out:", error);
    }
  };

  return (
    <div>
      {user ? (
        <>
          <h1>You are logged in, {user.email}!</h1>
          <button onClick={handleLogout}>Log Out</button>
        </>
      ) : (
        <h1>Please log in</h1>
      )}
    </div>
  );
};

export default Home;
