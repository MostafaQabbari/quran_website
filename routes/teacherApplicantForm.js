const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const teacherApplicant = require("../models/teacherApplicant"); 
const multer = require('multer');



// Define multer middleware to handle file upload
const upload = multer({
    storage: multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, './cv-uploads');
      },
      filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
      },
    }),
    fileFilter: function (req, file, cb) {
      if (file.mimetype !== 'application/pdf') {
        return cb(new Error('Only PDF files are allowed'));
      }
      cb(null, true);
    },
  });



//TODO: must the file name be pdfFile in front-end
router.post('/', upload.single('pdfFile'), (req, res, next) => {
    const formData = new teacherApplicant({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      pdfFilePath: req.file.path,
    });
    console.log(formData);
    formData.save()
    .then((result) => {
      res.status(201).json({ message: "Teacher applicant form created", result: result });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
  });

  

module.exports = router;