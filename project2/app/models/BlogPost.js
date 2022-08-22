const mongoose = require('mongoose')
const BlogPostSchema = new mongoose.Schema({
    title: String,
    body: String,
    age : Number
})

// truy cập vào cơ sở dữ liệu
const BlogPost = new mongoose.model('BlogPost', BlogPostSchema) 
module.exports = BlogPost