const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");


const Content = require("../models/content");


router.get("/",function (req,res) {
     Content.find({},function (err,foundPost) {
      res.render("blog",{post: foundPost})
    });
});






module.exports = router;