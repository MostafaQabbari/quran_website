
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const User = require('../models/user');
const router = express.Router();

const saltRounds = 10;

router.post("/",async (req,res)=>{
    const {firstName,lastName,email ,password} = req.body;
    
    try {
        await User.create({
            firstName,
            lastName,
            email,
            password:bcrypt.hashSync(password,saltRounds)
        })
        
    } catch (error) {
        res.status(400).json(error)
        console.log(error);
    }
    console.log(req.body);
    // res.json({firstName,lastName,email ,password})
})

module.exports = router;