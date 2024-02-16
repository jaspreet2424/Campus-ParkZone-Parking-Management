const express = require("express");
const studentRouter = require("./Routes/Student");
const app = express();
require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { connectDatabase } = require("./Database");
const port = process.env.PORT;

connectDatabase();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    methods: ["GET", "POST", "UPDATE", "DELETE"],
    origin: "http://localhost:5173",
  })
);

app.use('/api' , studentRouter);

app.listen(port, () => {
  console.log(`Parking Management System server is running at port ${port}`);
});
