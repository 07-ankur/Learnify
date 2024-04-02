const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
require("dotenv").config();
const connect = require("./db/db");
const cors = require("cors");

// Routes import
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const blogRoutes = require("./routes/blogRoutes");
const errorHandler = require("./middlewares/errorHandler");

// Allow CORS for specified origin
app.use(cors({
  origin: "http://learnify-server-in.vercel.app",
  credentials: true,
}));

app.use(express.json());

// Routes middleware
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/blog", blogRoutes);

// Server test route
app.get("/", (req, res) => {
  res.status(200).json({ message: "Learnify server is working perfectly" });
});

// Error handler
app.use(errorHandler);

// Connection to MongoDB
connect(process.env.MONGO_URI);

// Server listening
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});