// pages/UserList.js
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getUsers } from "../lib/helper";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersData = await getUsers();
        setUsers(usersData);
        // console.log(usersData);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.name}{" "}
            <Link href={`/user/${user._id}`} passHref>
              saa
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
