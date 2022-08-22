const  mongoose = require('mongoose')  
const BlogPost = require('./app/models/BlogPost')
const express = require('express')
const app = express()
mongoose.connect('mongodb://localhost:27017/myData', {useNewUrlParser: true,
useUnifiedTopology: true, 
useCreateIndex: true,
 useFindAndModify: false}, (err) => {
    if(!err) console.log('db connected')
    else console.log('error connecting to database')
})


BlogPost.create({
    title :'This is a learning tutorialbook for programming Basic Nodejs',
    body: 'If you want to learn more about JavaScript programming with phong, please visit',
    age : 20
}, (error, blogpost) => {
    console.log(error, blogpost)
})


// update document 
const id = "63033826357a8820fc4e1af9"
BlogPost.findByIdAndUpdate(id,{
    title: 'update',
    body: 'this is a new blog post'
}, (error, blogpost) => {
    console.log(error, blogpost)
})



// lấy toàn bộ document trong database
BlogPost.find({}, (err, blogpost) => {
    console.log(err, blogpost)
})

app.listen(431, () => {    console.log('listening on ') })
