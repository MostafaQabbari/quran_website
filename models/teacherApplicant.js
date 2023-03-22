const mongoose = require('mongoose');



const teacherApplicantSchema= new mongoose.Schema({

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
    pdfFilePath: {
        type:String,
        requied:true
    }


});
const teacherApplicant =mongoose.model("teacherApplicants",teacherApplicantSchema);
module.exports=teacherApplicant;