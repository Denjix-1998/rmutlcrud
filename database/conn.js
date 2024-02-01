import mongoose from "mongoose";
const connectMongo = async () => {
  try {
    const { connection } = await mongoose.connect(
      "mongodb+srv://lnwtor054:nutthapong10@cluster0.myper4w.mongodb.net/?retryWrites=true&w=majority"
    );

    if (connection.readyState == 1) {
      console.log("Database Connected");
    }
  } catch (errors) {
    return Promise.reject(errors);
  }
};
async function getStaticPaths() {
  const users = await Users.find({}, "_id");
  const paths = users.map((user) => ({
    params: { id: user._id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

async function getStaticProps({ params }) {
  const user = await Users.findById(params.id);

  return {
    props: {
      user: user.toObject(),
    },
  };
}

export default connectMongo;
