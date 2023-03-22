//G7qupSY0nSHS4sRC
// const cors = require("cors");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const signup = require('./routes/signup');
const login = require('./routes/login');
const Blog = require('./routes/blog')

// const googleAuth = require('./routes/googleAuth');
const verse = require('./routes/verse');
const acceptTeacher = require('./routes/acceptTeacher');
const freeTrialForm = require('./routes/freeTrialForm');
const teacherApplicantForm = require('./routes/teacherApplicantForm');
const tajweedForm = require('./routes/tajweedForm');
// const courses = require('./routes/courses');

const port = process.env.PORT || 4444;




// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.json());

mongoose.connect('mongodb+srv://Quran:G7qupSY0nSHS4sRC@cluster0.tjhjiy3.mongodb.net/?retryWrites=true&w=majority',{
    serverSelectionTimeoutMS: 5000 
}).then(() => {
    console.log("connected");
}).catch(() => {
    console.log("can't connect"); 
})

app.get('/',(req,res)=>{
    console.log('welcome from home page');
})





// app.use(googleAuth);
app.use('/signup',signup);
app.use('/login',login);
// app.use('/', courses);
app.use(acceptTeacher);
app.use('/bookfreetrial',freeTrialForm);
app.use('/joinasateacher',teacherApplicantForm);
app.use('/tajweedForm',tajweedForm);
app.use('/blog',Blog);
app.use(verse);


app.listen(port);