// UserDetailPage.js

import React from "react";
import { useQuery } from "react-query";
import { getUserById } from "@/lib/helper"; // Assuming you have a function to fetch a user by ID

export default function UserDetailPage({ userId }) {
  const { isLoading, isError, data, error } = useQuery(["user", userId], () =>
    getUserById(userId)
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  // Render your user details using the 'data' object

  return (
    <div>
      <h1>User Detail</h1>
      {/* Render user details here using 'data' */}
    </div>
  );
}
