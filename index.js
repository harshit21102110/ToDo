const { urlencoded } = require('express');
const express = require('express');

const app =express();
const port =8000;  // Setting up the port 

// Setting up the database 

const db =require('./config/mongoose');
const task = require('./models/task');
app.use(urlencoded());

app.use('/',require('./routes'));  // Any routes directed to routes folder 


// Setting up the view engine

app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('./assets'));   // Static files for templates 

// Setting up the database


app.listen(port,function(err){

    if(err){
        console.log(`Error in starting the server : ${err}`);
    }

    console.log(`The server is up and running at port: ${port}`);

});