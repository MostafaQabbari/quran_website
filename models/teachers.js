const mongoose = require('mongoose');



const teacherSchema= new mongoose.Schema({

    firstName:{
        type:String,
        requied:true
    },
    lastName:{
        type:String,
        requied:true
    },
    email:{
        type:String,
        requied:true,
        unique:true
    },
    password:{
        type:String,
        requied:true
    },
 

});
const Teacher = mongoose.model('Teachers', teacherSchema);
module.exports = Teacher;