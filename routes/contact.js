const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");


const Blog = require("../models/blog");


router.get("/",function (req,res) {
    res.render("contact");
});

router.post("/",function (req,res) {
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



module.exports = router;