// Home Controller
const task = require('../models/task');
module.exports.home = function(req,res){
    
    task.find({},function(err ,task){
        if(err)
        console.log('There was an error in the DB');
        return res.render('home.ejs',{
            title: "ToDo Application",
            taskList: task
        });
    });
}


module.exports.delete = function(req,res){

    
    var id = req.query;
    console.log(id);
    // checking the number of tasks selected to delete
    var count = Object.keys(id).length;
    for(let i=0; i < count ; i++){
        
        // finding and deleting tasks from the DB one by one using id
        task.findByIdAndDelete(Object.keys(id)[i], function(err){
        if(err){
            console.log('error in deleting task');
            }
        })
    }
    return res.redirect('back'); 


};



