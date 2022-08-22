const express = require('express')
const app = express()
const path = require('path')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const BlogPost = require('./app/models/BlogPost')
app.use(bodyParser.json({type : 'application/json'}))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.raw())
app.set('view engine', 'ejs')

mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true})

//Đăng kí thư mục public
app.use(express.static('public'))
// Tạo server 
app.listen(4000,() => {
    console.log('App listening on port 4000')
})

app.get('/', (req, res) => {
    BlogPost.find({}, (err, posts) => {
        console.log(posts)
        res.render('index.html', {
            blogposts : posts})
    })
    res.render('index')
})

app.get('/about', (req, res) => {
    res.render('about');
})
app.get('/contact', (req, res) => {
    res.render('contact');
})
app.get('/post/:id', (req, res) => {
    BlogPost.findById(req.params.id,(err, detailPost) => {
        res.render('post', {
            detailPost})
}) 
})
app.get('/posts/new', (req, res) => {
    res.render('create') 
})

app.get('/posts/store', (req, res) => {
    BlogPost.create(req.body, (err, blog) => {
        res.redirect('/')
    })
})


// kill port : npx kill-port 4000