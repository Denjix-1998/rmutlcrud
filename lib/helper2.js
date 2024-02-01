const BASE_URL = "http://localhost:3000";

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
