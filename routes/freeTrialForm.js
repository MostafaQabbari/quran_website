const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const freeTrialCustomer = require("../models/freeTrialCustomer"); 

router.post('/', async(req ,res) =>{
    const {firstName,lastName,email ,courses,phoneNumber} = req.body;
   
       try{  await freeTrialCustomer.create({
          firstName,
          lastName,
          email,
          courses,
          phoneNumber});
        res.status(201).json(freeTrialCustomer);
       }catch(error){
        res.status(400).json(error)
        console.log(error);
       }
    console.log(req.body);
    
    });


module.exports = router;