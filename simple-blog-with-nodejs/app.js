const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const blogRoutes = require('./routes/blogRoutes');


// express app
const app = express();

// connect to mongodb
const dbURI = "mongodb+srv://simpleblog:test1234@simple-blog-tut.7e4dn.mongodb.net/node-tuts?retryWrites=true&w=majority";

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(result => {
        console.log("connect to the database")
        app.listen(3000)
    })
    .catch(err => console.log(err));

// register view engine
app.set('view engine', 'ejs');

//middleware and static files
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));   // for printing 
app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
})

app.get('/', (req, res) => {
    res.redirect('/blogs');
}) 

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

app.use('/blogs', blogRoutes)

app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});