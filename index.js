const express = require('express');


const app =express();
const port =8000;




app.listen(port,function(err){

    if(err){
        console.log(`Error in starting the server : ${err}`);
    }

    console.log(`The server is up and running at port: ${port}`);

});