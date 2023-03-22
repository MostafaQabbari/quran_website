const mongoose = require('mongoose');



const tajweedApplicantSchema= new mongoose.Schema({

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
        requied:true
        // ,unique:true
    },
    phoneNumber:{
        type:String,
        requied:true
    },
    audioFilePath: {
        type:String,
        requied:true
    }


});
const tajweedApplicant =mongoose.model("tajweedApplicants",tajweedApplicantSchema);
module.exports=tajweedApplicant;