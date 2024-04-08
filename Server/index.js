const express = require("express");
const studentRouter = require("./Routes/Student");
const guardRouter = require("./Routes/Guards");
const app = express();
require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { connectDatabase } = require("./Database");
const cloudinary = require('cloudinary').v2;
const port = process.env.PORT;


connectDatabase();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    methods: ["GET", "POST", "UPDATE", "DELETE", "PUT"],
    origin: "http://localhost:5173",
  })
);

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET_KEY,
});

app.use("/api", studentRouter);
app.use("/guard", guardRouter);

app.listen(port, () => {
  console.log(`Parking Management System server is running at port ${port}`);
});
