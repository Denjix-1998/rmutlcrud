import Users from "@/pages/model/user";

export async function getUsers(req, res) {
  try {
    const users = await Users.find({});
    if (!users) return res.status(404).json({ error: "Data not FOund" });
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ error: "Error While Fetching Data" });
  }
}
const sendErrorResponse = (res, status, message) => {
  return res.status(status).json({ error: message });
};

export async function getUser(req, res) {
  try {
    const { userId } = req.query;

    if (!userId) {
      return sendErrorResponse(res, 400, "User ID is required in the request.");
    }

    const user = await Users.findById(userId);

    if (!user) {
      return sendErrorResponse(res, 404, "User not found.");
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    return sendErrorResponse(res, 500, "Internal server error.");
  }
}

//post
export async function postUser(req, res) {
  try {
    const formData = req.body;
    if (!formData) {
      return res.status(404).json({ error: "Form Data Not Provided...!" });
    }

    // Assuming `Users` is a Mongoose model
    const newUser = await Users.create(formData);

    return res.status(200).json(newUser);
  } catch (error) {
    return res
      .status(404)
      .json({ error: error.message || "An error occurred" });
  }
}

export async function putUser(req, res) {
  const { userId } = req.query;
  const formData = req.body;
  try {
    if (userId && formData) {
      await Users.findByIdAndUpdate(userId, formData);
      res.status(200).json(formData);
    }
    res.status(404).json({ error: "User Not Selected" });
  } catch (error) {
    res.status(404).json({ error: "Error Whlie Updating the Data...!" });
  }
}
export async function deleteUser(req, res) {
  try {
    const { userId } = req.query;
    if (userId) {
      const user = await Users.findByIdAndDelete(userId);
      return res.status(200).json({ deleted: userId });
    }
  } catch (error) {
    res.status(404).json({ error: "Error Whlie Deleting the User..!" });
  }
}
