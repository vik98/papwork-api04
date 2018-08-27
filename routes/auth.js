const express = require("express");
const router = express.Router();
const passport = require("passport");
const mongoose = require("mongoose");
const Form = mongoose.model("forms");
const User = mongoose.model("users");

router.get("/google", passport.authenticate('google', 
{scope: ['profile', 'email']})
);

router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/dashboard');
  });

router.get("/verify", function(req, res){
    if(req.user){
        res.send(req.user)
    }else{
        res.send("error");
    }
});

router.get("/forms", function(req, res){
    Form.find({userID: req.user.id}, function(err, data){
        // console.log(data);
        res.render("forms", {data:data});
    }).populate('pages.typedQuestion');
});

router.get("/forms/:id", function(req, res){
    console.log(req.id);
    Form.find({_id:req.params.id}, function(err, data){
        res.render("show", {data:data});
        console.log(data);
    }).populate('pages.typedQuestion');
});

router.get("/add", function(req, res){
    const form = {
        userID: req.user.id,
        formName: "papwork",
        pages:[{
            question:[{
                typedQuestion: "What is your asdasdasd"
            },
            {
                typedQuestion: "What is your sadsasdasde"
            }
            ]
        }]
    }
    
    new Form(form)
    .save()
    .then(story=>{
        res.redirect("/")
    });

    
})

router.get("/logout", function(req, res){
    req.logout();
    res.redirect("/");
})

module.exports = router;