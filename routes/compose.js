const express = require("express");
const router = express.Router();


router.get("/compose",function (req,res) {
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