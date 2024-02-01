// pages/[id].js
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getUserById } from "@/lib/helper"; // Update the path to your API functions

const UserDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getUserById(id);
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  return (
    <div>
      <h1>User Detail</h1>
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
};

export default UserDetail;
