const express = require("express");
const router = express.Router();
const acceptTeacher = require('../middleware/accept-teacher-middleware');
const teacher = require('../models/teachers');
const bcrypt = require('bcrypt');



router.post("/acceptTeacher",acceptTeacher,async (req,res)=>{
    const {firstName,lastName,email ,password} = req.body;
    
    try {
        await teacher.create({
            firstName,
            lastName,
            email,
            password:bcrypt.hashSync(password,saltRounds)
        })
        
    } catch (error) {
        res.status(400).json(error)
        console.log(error);
    }
    

})

module.exports = router;