const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");




const Content = require("../models/content");

router.get("/",function (req,res) {
    res.render("compose");
});


router.post("/",function (req,res) {
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


module.exports = router;