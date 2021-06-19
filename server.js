//dependencies
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');


//database mongodb connect
const database = require("./database/connect");
const bodyParser = require('body-parser');
database.connect();

//static web server
app.use(express.static(path.join(__dirname,'dist')));

//routes


//body-parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//Middleware - allow accept json
app.use(express.json({extended:false}));

//REST API
app.use('/api/addmovie', require('./routes/addmovie.js'));
app.use('/api/readmovie', require('./routes/readmovie.js'));
app.use('/api/deletemovie', require('./routes/deletemovie.js'));
app.use('/api/updatemovie', require('./routes/updatemovie.js'));

app.use('*', (request, response) => {
   response.sendFile(path.join(__dirname, 'dist/movie.html'));
   
})


//port
app.listen(3000, () => {
   console.log("Web server is running on port 3000")
   
});
