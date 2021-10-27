//Jshint esversion:6 
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs")
const _ = require("lodash");
const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/blogDB",{useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connect("mongodb+srv://admin-developer:smartdeveloper@cluster0.ad9lh.mongodb.net/cleanerDB",{useNewUrlParser: true, useUnifiedTopology: true});


const db = mongoose.connection;
db.on("error",(error) => {console.error(error)});
db.once("open",()=> {console.log("Connected to DB")});

const app = express();
app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public/"));


//Mongodb Schema
const Blog = require("./models/blog");
const Content = require("./models/content");


const homeRoute = require("./routes/index");
const aboutRoute = require("./routes/about");
const composeRoute = require("./routes/compose");
const contactRoute = require("./routes/contact");
const postRoute = require("./routes/post");
const blogRoute = require("./routes/blog");
const postsRoute = require("./routes/posts");

app.use("/",homeRoute);
app.use("/about",aboutRoute);
app.use("/compose",composeRoute);
app.use("/contact",contactRoute);
app.use("/post",postRoute);
app.use("/blog",blogRoute);
app.use("/posts",postsRoute);






const PORT = process.env.PORT || 3001


app.listen(PORT, function() {
  console.log("Server has started Successfully " + PORT);
});













