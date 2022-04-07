const express = require('express');//using express as a server
const port = process.env.PORT || 3000;
const app = express();
const path = require('path');
let ejs = require('ejs');

app.set('view engine', 'ejs');//setting up view engine as ejs

app.set('views', './views');//setting path of views folder

app.use(express.urlencoded({extended: true}));// middleware : it reads the form data and parses it into key value

app.use(express.static('./static'));// to access static files

app.use('/uploads',express.static(__dirname+'/uploads')); //accesing uploaded files from uploads folder 

app.use('/',require('./Routes/index.js'));////using index file of routes for all the routes

app.listen(port,function(err){
    if(err){
        console.log("error while loading the page : " , err);
        return;
    }
    console.log("yippiee....server is running on port:",port);
})