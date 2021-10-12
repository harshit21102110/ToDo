const mongoose= require('mongoose');

const taskSchema = new mongoose.Schema({
    description :{
        type: String,
        required: true 
    },

    category : { 
        type : String ,
        required:true 
    },
    dueDate :
    {
        type : Date,
        required:true 
    }

});

const task = mongoose.model('task',taskSchema);
module.exports= task ;