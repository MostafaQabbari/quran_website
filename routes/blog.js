const express = require("express");
const mongoose = require("mongoose");
const Blog = require('../models/blog');
const router = express.Router();



router.get('/allblogs',async(req,res)=>{
    const allBlogs = await  Blog.find();
    res.json(allBlogs);
})

router.post('/newblog',async(req,res)=>{
    const { image , header , paragraph} = req.body;
    try{
        await Blog.create({
            image,
            header,
            paragraph,
        })
    }
    catch (error) {
        res.status(400).json(error)
        console.log(error);
    }
})

module.exports=router;