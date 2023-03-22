const mongoose = require('mongoose');

const courseOptions = ['Tajweed UI-Quran', 'memorization UI-Quran', 'learn Urdu', 'learn Arabic'];

const freeTrialSchema = new mongoose.Schema({

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
    courses:{ 
        type:String,
        requied:true,
        enum: courseOptions
    },
    phoneNumber:{
        type:String,
        requied:true
    }
});
const freeTrialCustomer =mongoose.model("freeTrialCustomer",freeTrialSchema);
module.exports=freeTrialCustomer;