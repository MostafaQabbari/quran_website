const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const User = require('../models/user');
const router = express.Router();


router.post('/',async (req,res)=>{
    const {email,password}=req.body;
    const usergDoc =await  User.findOne({email});
    const passOk=bcrypt.compareSync(password, userDoc.password);
    res.json({passOk})
})


module.exports = router;