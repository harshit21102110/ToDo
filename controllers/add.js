const task = require("../models/task");

module.exports.add= function(req , res){

    task.create({description :req.body.description,
        category :req.body.category,dueDate:req.body.duedate},function(err,req){
        if(err){
          console.log('There was an error in writting to the db');
          return ;
        }  
        console.log('******',req);
        return res.redirect('/');
      
        });
};