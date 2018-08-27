const express = require("express");
const mongoose = require("mongoose");
const passport =  require("passport"); 
const session = require("express-session");
const cookieParser = require("cookie-parser");
const app = express();

require("./models/User");
require("./models/Form");
const prquestiontypes = require("./models/admin-db/PRQuestionTypes.js");
const prquestionsettingtypes = require("./models/admin-db/PRQuestionSettingTypes.js");
const prquestionsettings = require("./models/admin-db/PRQuestionSetting.js");
const prpredefinedquestions = require("./models/admin-db/PRPredefinedQuestions.js");

require("./config/passport")(passport);

const keys = require("./config/keys");

const auth = require("./routes/auth");

mongoose.Promise = global.Promise;

mongoose.connect(keys.mongoURI).then(function(){
    console.log("connected"); 
}).catch(err=> console.log(err));

//  const prt = {
//     _id:1,
//     questionLabel: "Sample",
//     question: "What is your name?",
//     questionDescription: "Name",
//     hintText: "Enter your name",
//     placeholderText: "First Name",
// }

// prpredefinedquestions.create(prt, function(err, res){
//     if(err) throw err
//     console.log(res)
// })

app.use(function(req, res, next){
    res.locals.user = req.user || null;
    next();
})

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.send("ok");
});

app.get("/dashboard", function(req, res){
    console.log(req.user);
    res.send("ok")
});

app.use(cookieParser());
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", auth);

var port  = process.env.PORT || 3000;

app.listen(port, function(){
    console.log("Started at 3000");
});
