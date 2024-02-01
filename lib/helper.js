const BASE_URL = "http://localhost:3000";

export const getUsers = async () => {
  const response = await fetch(`${BASE_URL}/api/users`);

  const json = await response.json();

  return json;
};

export const getUser = async (userId) => {
  try {
    const response = await fetch(`${BASE_URL}/api/users/${userId}`);

    if (!response.ok) {
      throw new Error(`Error fetching user with ID ${userId}`);
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.error("Error in getUser:", error);
    return {}; // Return an empty object in case of an error
  }
};

export async function addUser(formData) {
  try {
    const Options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };

    const response = await fetch(`${BASE_URL}/api/users`, Options);
    const json = await response.json();
    return json;
  } catch (error) {
    return error;
  }
}

export async function updateUser(userId, formData) {
  const Options = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  };

  const response = await fetch(`${BASE_URL}/api/users/${userId}`, Options);
  const json = await response.json();
  return json;
}

export async function deleteUser(userId) {
  const Options = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  };
  const response = await fetch(`${BASE_URL}/api/users/${userId}`, Options);
  const json = await response.json();
  return json;
}

export const getUserById = async (userId) => {
  try {
    const response = await fetch(`/api/users/${userId}`);
    if (!response.ok) {
      throw new Error("Failed to fetch user");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error fetching user: ${error.message}`);
  }
};
// helper.js
export const getUserss = async (userId) => {
  try {
    if (!userId) {
      throw new Error("User ID is undefined");
    }

    // Fetch user data based on the provided ID
    const response = await fetch(`/api/users/${userId}`);
    if (!response.ok) {
      throw new Error("Failed to fetch user");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error fetching user: ${error.message}`);
  }
};
