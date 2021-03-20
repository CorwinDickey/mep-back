// ==============================================================
// DEPENDENCIES
// ==============================================================
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();  

// ==============================================================
// SERVER CONFIGURATION
// ==============================================================
const APP = express();
const PORT = process.env.PORT
const DB_NAME = "mep"
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/" + DB_NAME

// ==============================================================
// CONTROLLERS
// ==============================================================
const equipmentController = require("./controllers/equipment");
const userController = require("./controllers/user");

// ==============================================================
// MIDDLEWARE
// ==============================================================
const whitelist = [
  "http://localhost:3000",
  "https://mep-back.herokuapp.com/",
  "http://localhost:3003",
  "https://mep-front.herokuapp.com/",
  "https://material-equipment-preservation.us.auth0.com/api/v2/"
];
const corsOptions = {
  origin: function (origin, callback) {
    // console.log(origin)
    if(whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    };
  }
};

APP.use(cors(corsOptions));
APP.use(express.json());
APP.use("/equipment", equipmentController);
APP.use("/user", userController);

// ==============================================================
// DATABASE CONFIGURATION
// ==============================================================
mongoose.connect(MONGODB_URI, 
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }
  ,() => {
    console.log("the connection with mongod is established at:", MONGODB_URI )
  }
);
mongoose.connection.once("open", ()=>{
  console.log("connected to mongoose...");
});

// ==============================================================
// DATABASE ERROR - DISCONNECTION
// ==============================================================
mongoose.connection.on("error", err => console.log(err.message + " is Mongod not running? "));
mongoose.connection.on("disconnected", () => console.log("mongo disconnected"));

// ==============================================================
// LISTENER
// ==============================================================

APP.listen(PORT, () => {
  console.log("listening to M/EP server on port", PORT);
});