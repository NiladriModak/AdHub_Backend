const app = require("./app.js")
const cors =  require ("cors");
const connectdb=require("./config/database.js")
const cloudinary = require("cloudinary");
process.on("uncaughtException",(err)=>{
    console.log(`Error : ${err.message}`);
    console.log("Shutting down server due to uncaughtError");
    process.exit(1);
})

app.use(cors({
    origin:['https://ad-hub-frontend-995v-qw74zjqj5-niladrimodak.vercel.app',"http://localhost:3000"],
    credentials:true,
    optionSuccessStatus: 200,
}))

if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({ path: "secret.env" });
  }
connectdb();
cloudinary.config({
    cloud_name:"dsd8hp9wx",
    api_key:241217624559331,
    api_secret:"0dlZUeXVVZkU45-quw4wLmG2ixc",
})

const server = app.listen('mongodb+srv://nila_boy:nila_boy@cluster0.ssn1p3g.mongodb.net/AdHub?retryWrites=true&w=majority',()=>{
    console.log("Server is working ");
})

//unhandled rejections
process.on("unhandledRejection",(err)=>{
    console.log(`Error : ${err.message} `);
    console.log("Shutting down server due to unhandled error");
    server.close(()=>{
        process.exit();
    });
    
})