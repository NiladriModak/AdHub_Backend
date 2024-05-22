const app = require("./app.js");
const cors = require("cors");
const connectdb = require("./config/database.js");
const cloudinary = require("cloudinary");
const helmet = require("helmet");
const morgan = require("morgan");
const express = require("express");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();
// process.on("uncaughtException",(err)=>{
//     console.log(`Error : ${err.message}`);
//     console.log("Shutting down server due to uncaughtError");
//     process.exit(1);
// })

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// app.use(function (request, response, next) {
//     response.header("Access-Control-Allow-Origin", "*");
//     response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

app.use(helmet());
// app.set("trust proxy", 1);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(morgan("dev"));

// if (process.env.NODE_ENV !== "PRODUCTION") {
// require("dotenv").config({ path: "secret.env" });
//   }
connectdb();
cloudinary.config({
  cloud_name: "dsd8hp9wx",
  api_key: 241217624559331,
  api_secret: "0dlZUeXVVZkU45-quw4wLmG2ixc",
});

const server = app.listen("80", () => {
  console.log("Server is working ");
});
