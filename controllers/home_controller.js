// Home Controller
const task = require('../models/task');
module.exports.home = function(req,res){
    
    task.find({},function(err ,task){
        if(err)
        console.log('There was an error in the DB');
        console.log(task);
        return res.render('home.ejs',{
            title: "ToDo Application",
            taskList: task
        });
    });
}



