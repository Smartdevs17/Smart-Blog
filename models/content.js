const mongoose = require("mongoose");


const contentSchema = new mongoose.Schema({
    title: String,
    content: String,
    date: String
});

const Content = mongoose.model("Content",contentSchema);

module.exports = Content;