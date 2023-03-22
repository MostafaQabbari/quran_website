const express = require("express");
const router = express.Router();


//this is fuction that return a random (ايه)
router.get('/verse',(req,res)=>{
    const number = Math.floor(Math.random() * 1000) + 1;
    fetch(`https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/verses/${number}.json`, {
        method: "get",
        
        headers: {
          "Content-Type": "application/json",
        }
      }).then((response) => {
        return response.json()
      }).then((result) => {
          res.json(result["text"]);
        })
})

module.exports = router;