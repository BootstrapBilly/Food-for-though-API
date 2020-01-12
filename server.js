//!Imports
//Core node
const path = require("path");

//Custom
const mainRouter = require("./routes/mainRouter");
const authRouter = require("./routes/authRouter");

//External
const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require('mongoose');

//-File configuration

const MONGODBURI = "mongodb://Billy:bjc123@billy-shard-00-00-qqthk.mongodb.net:27017,billy-shard-00-01-qqthk.mongodb.net:27017,billy-shard-00-02-qqthk.mongodb.net:27017/recall?ssl=true&replicaSet=Billy-shard-0&authSource=admin&retryWrites=true&w=majority";

const server = express();

server.use((req,res,next) => {

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
  
})

server.use(bodyParser.json());
server.use(express.static(path.join(__dirname, 'public')));//Allow the html to connect to css pages

server.use(bodyParser.urlencoded({extended: false}));//Set up the body parser

//=Middleware

server.use(mainRouter);
server.use(authRouter);

//* Database connection

mongoose
  .connect(
    MONGODBURI
  )
  .then(result => {
    server.listen(5000);
    console.log("\n\x1b[36mServer running on port 5000\n")
  })
  .catch(err => {
    console.log(err);
  });



