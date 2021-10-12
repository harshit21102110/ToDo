const mongoose =require('mongoose');   // get the mongoose library 
mongoose.connect('mongodb://localhost/contact_list_db');    // connect to database
const db =mongoose.connection;
db.on('error',console.error.bind(console,'error Connecting to DB'));  // error in connection 
db.once('open',function(){
    console.log('successfully connected to the database');   // no error in connection
});
