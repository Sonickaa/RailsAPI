import api from "./api"; // Import axios instance from api.js

// Function to log in a user
export const loginUser = async (email, password) => {
  try {
    const response = await api.post("/users/sign_in", {
      user: {
        email: email,
        password: password,
      },
    });
    return response.data; // This will return the authentication details (e.g., token)
  } catch (error) {
    console.error(
      "Login failed:",
      error.response ? error.response.data : error.message
    );
    throw new Error("Invalid login credentials");
  }
};
