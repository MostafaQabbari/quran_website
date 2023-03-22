const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const tajweedApplicant = require("../models/tajweedApplicant"); 
const multer = require('multer');



// Define multer middleware to handle file upload
const upload = multer({
    storage: multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, './audio-uploads');
      },
      filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
      },
    }),
    fileFilter: function (req, file, cb) {
        if (file.mimetype !== 'audio/mpeg' && file.mimetype !== 'audio/wav') {
          return cb(new Error('Only MP3 and WAV files are allowed'));
        }
        cb(null, true);
      }
      
  });



//TODO: must the file name be audioFile in front-end
router.post('/', upload.single('audioFile'), (req, res, next) => {
    const formData = new tajweedApplicant({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      audioFilePath: req.file.path,
    });
    console.log(formData);
    formData.save()
    .then((result) => {
      res.status(201).json({ message: "tajweed applicant form created", result: result });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
  });

  

module.exports = router;