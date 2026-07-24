import mongoose from "mongoose";
import dotenv from "dotenv";
import dns from "dns";

dotenv.config();

// Force IPv4 first
dns.setDefaultResultOrder("ipv4first");

// Set DNS servers
dns.setServers(["8.8.8.8", "1.1.1.1"]);

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB is connected");
  } catch (error) {
    console.log("Database connection failed");
    console.log(error);
  }
}

export default connectDB;