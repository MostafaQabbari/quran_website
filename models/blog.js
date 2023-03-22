const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    image:{
        type:String,
        required:true
    },
    header:{
        type:String,
        required:true
    },
    paragraph:{
        type:String,
        required:true
    }
})

const Blog = mongoose.model('Blogs',blogSchema);
module.exports=Blog;