import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected", conn.connection.host);
  } catch (e) {
    console.log("conn error", e.message);
    process.exit();
  }
};
export default connectDB;
