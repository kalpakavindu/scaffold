import mongoose from "mongoose";

/**
 * Connect to Database
 */
export async function connectDatabase() {
  const uri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:27017/?authSource=${process.env.DB_NAME}`;

  try {
    await mongoose.connect(uri);
    console.log(
      "[database] MongoDB connection established: ",
      `mongodb://${process.env.DB_HOST}:27017/${process.env.DB_NAME}`,
    );
  } catch (err) {
    console.error("[database] MongoDB connection failed: ", err.message);
    process.exit(1);
  }
}
