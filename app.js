//Jshint esversion:6 

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs")
const _ = require("lodash");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/blogDB",{useNewUrlParser: true, useUnifiedTopology: true});

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public/"));

const blogSchema = new mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    message: String
});

const contentSchema = new mongoose.Schema({
    title: String,
    content: String,
    date: String
});



const Blog = mongoose.model("Blog",blogSchema);
const Content = mongoose.model("Content",contentSchema);


// Content.find({},function (err,foundPost) {
//     foundPost.forEach(function (post,array) {
//         console.log(post);
//     });
   
// });


app.get("/",function (req,res) {
      Content.find({},function (err,foundPost) {
      res.render("index",{post: foundPost})
    });
    // res.render("index");
});


app.get("/about",function (req,res) {
    res.render("about");
});


app.get("/blog",function (req,res) {
     Content.find({},function (err,foundPost) {
      res.render("blog",{post: foundPost})
    });
    // res.render("blog");
});


app.get("/contact",function (req,res) {
    res.render("contact");
});


app.get("/post",function (req,res) {
    res.render("post");
});


app.get("/compose",function (req,res) {
    res.render("compose");
});

app.post("/compose",function (req,res) {
    const blogTitle = req.body.blogTitle;
    const blogPost = req.body.blogPost;
    const blogDate = req.body.blogDate;

    const post = new Content({
        title: blogTitle,
        content: blogPost,
        date: blogDate
    });

    post.save(function (err) {
        if(!err){
            res.redirect("/")
            // Content.findOne({title: blogTitle},function (err,foundPost) {
            //     res.render("index",{post: foundPost})
            // //   console.log(foundPost); 
            // });

        }
    });

    
});






app.post("/contact",function (req,res) {
        const blog = new Blog({
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message
        });

        blog.save(function (err) {
        if(err){
            console.log(err);
        }else{
            console.log("New blog reader added to DB");
            res.redirect("/");
        }
        });
    

});



app.get("/posts/:postId",function (req,res) {

    const requestedPostId = req.params.postId;

    Content.findOne({title: requestedPostId},function (err,post) {
        res.render("posts",{
            title: post.title,
            content: post.content,
            date: post.date
        });
        // console.log(post);
    })
})













let port = process.env.PORT;
if(port == null || port == ""){
  port = 3000;
}


app.listen(port, function() {
  console.log("Server has started Successfully.");
});



