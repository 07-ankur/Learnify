const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
require("dotenv").config();
const connect = require("./db/db");
const cors = require("cors");

//routes import
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const errorHandler = require("./middlewares/errorHandler");

app.use(
  cors({
    origin: ["http://127.0.0.1:5173", "https://learnify-in.vercel.app"],
  })
);

app.use(express.json());

//routes middleware
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

//server test route
app.get("/", (req, res) => {
  res.status(200).json({ message: "Learnify server is working perferctly" });
});

//error handler
app.use(errorHandler);

//connection to mongodb

connect(process.env.MONGO_URI);

//server listeing
app.listen(port, () => {
  console.log(`Server is running on  ${port}`);
});
