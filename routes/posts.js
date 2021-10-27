const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Content = require("../models/content");

router.get("/:postId",function (req,res) {

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





module.exports = router;