const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    message: String
});



const Blog = mongoose.model("Blog",blogSchema);

module.exports = Blog;