const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

//Mongodb Schema

const Content = require("../models/content");


router.get("/",function (req,res) {
      Content.find({},function (err,foundPost) {
      res.render("index",{post: foundPost})
    });
});



module.exports = router;