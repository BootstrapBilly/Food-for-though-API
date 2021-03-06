//!Imports
//Core node
const path = require("path");

//Custom
const favourites_router = require("./routes/favourites");
const portion_router = require("./routes/portion_size");

//External
const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require("helmet")

//-File configuration
dotenv.config();
const MONGODBURI = `mongodb://Billy:${process.env.mongopw}@billy-shard-00-00-qqthk.mongodb.net:27017,billy-shard-00-01-qqthk.mongodb.net:27017,billy-shard-00-02-qqthk.mongodb.net:27017/Food_for_though?ssl=true&replicaSet=Billy-shard-0&authSource=admin&retryWrites=true&w=majority`

const server = express();

server.use((req,res,next) => {

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
  
})

server.use(helmet())

server.use(bodyParser.json());
server.use(express.static(path.join(__dirname, 'public')));//Allow the html to connect to css pages

server.use(bodyParser.urlencoded({extended: false}));//Set up the body parser

//=Middleware

server.use(favourites_router);
server.use(portion_router);

//* Database connection

mongoose
  .connect(
    MONGODBURI
  )
  .then(result => {
    server.listen(process.env.PORT || 4000);
    console.log("\n\x1b[36mServer running on port 4000\n")
  })
  .catch(err => {
    console.log(err);
  });



