// src/App.js
import React, { useState, useEffect } from "react";
import {
  getUser,
  addUser,
  updateUser,
  deleteUser,
  getUserById,
  getUserss,
} from "@/lib/helper"; // Update the path to your API functions

function App() {
  const [user, setUser] = useState(null);
  const userId = "65b732a4b3ccd077e3b47eb0"; // Replace with the actual user ID

  useEffect(() => {
    // Using getUser function to fetch user data by ID when the component mounts
    const fetchData = async () => {
      try {
        const userData = await getUser(userId);
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [userId]);

  // You can use other utility functions similarly for CRUD operations

  return (
    <div>
      {user ? (
        <div>
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Salary: {user.salary}</p>
          {/* Include other user properties as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
