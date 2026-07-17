// import express from "express";
// import dotenv from "dotenv";
// import clientRoutes from "./routes/clientRoutes.js";
// import connectDB from "./config/db";

// dotenv.config();

// const app = express();
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("🚀 JalSync Backend is Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
