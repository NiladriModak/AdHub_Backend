const express = require("express");
const errorMiddlewear = require("./middlewares/error");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileupload = require("express-fileupload");
const path = require("path");
const cors = require("cors");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();
app.use(
  cors({
    origin: ["https://ad-hub-frontend-wine.vercel.app"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileupload());

const product = require("./routes/ProductRoutes");

app.use(product);

const user = require("./routes/userRoutes");

app.use(user);

// const order = require("./routes/orderRoutes");

// app.use(order);

app.use(errorMiddlewear);

module.exports = app;
