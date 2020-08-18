const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
let bcrypt = require("bcrypt");
let cookieParser = require('cookie-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build')));
const mongoose = require('mongoose')
const key = require('./key.js');
mongoose.connect(key.mongoURI);
const Post = require('./model/post.js');
const User = require('./model/user.js'); 
const inputValidator = require('./register.js');
const { ExtractJwt } = require('passport-jwt');
const passport = require('passport');
const jwt = require("jsonwebtoken");
let errorMessage={};
app.use(cookieParser());
app.use(passport.initialize());
require('./passportConfig.js')(passport);
app.get("/api/post/:q",function(req,res){
  let query = req.params.q;
  console.log(query);
  let result;
  Post.find({topic:query},(err,post) => {
    if (err) console.log(err)
    else query = post.map((val)=> ({topic: val.topic, id: val._id,created: val.created}));
  })
  Post.find({text:query},(err,post) => {
    if (err) console.log(err)
    else query = post.map((val)=> ({topic: val.topic, id: val._id,created: val.created}));
  })
})
app.get("/api/post/",function(req,res){
  Post.find({},function(err,post){
    if(err) console.log(err)
    else {
      console.log(post);
      res.send(post.map((val)=> ({topic: val.topic, id: val._id,created: val.created})))
    };
  });
})
app.post('/post', function (req, res){
  User.findOne({user: "admin"}, (err,userFound) => {
    if (err) console.log(err);
    else{
    let newPost = new Post({
      topic: req.body.postTopic+"",
      text: req.body.postText,
      author: userFound._id
    })
    console.log(userFound);
    newPost.save((err,postSaved) => {
      if(err) console.log(err);
      else {
        console.log(postSaved);
        userFound.post.push(postSaved);
        userFound.save((err,userSavedPost) => {
          if (err) console.log(err);
          else console.log(userSavedPost);
        })
        res.redirect("/forum/GeneralDiss/post");
        
      }
    })
  }
  })
});
app.post("/user/signup",function(req,res){
    let newUser = new User({
      user: req.body.user,
      password: req.body.password,
      email: req.body.email
    })
    let validateToken =  inputValidator(newUser,true);
    if (validateToken.isValid){
    User.findOne({user: newUser.user}, (err,found) => {
      if (err) console.log(err);
      else if (found){
        errorMessage.userDup = "This username is already taken.";
        res.status(404).json(errorMessage);
      }
      else User.findOne({email: newUser.email}, (err,found) => {
        if (err) console.log(err);
        else if (found){
          errorMessage.emailDup = "This email is already taken.";
          res.status(404).json(errorMessage);
        }
        else {
          bcrypt.genSalt(10, (err,salt) => {
              bcrypt.hash(newUser.password,salt, (err,hash) => {
              if (err) throw err;
              else {
                newUser.password = hash;
                newUser.save((err,userSaved) => {
                  if (err) console.log(err);
                  else if (userSaved) {
                    console.log(userSaved);
                    res.redirect("/");
                  }
                  else res.status(404).json(errorMessage);
                })
              }
            })
          })
        }
      })
    })
  }
  else {
    res.json(validateToken.error);
  } 
  })

  app.post("/user/login",function(req,res){
      let loggedUser = new User({
        user: req.body.user,
        password: req.body.password
      })
      let validateLogin = inputValidator(loggedUser,false);
      if (!validateLogin.isValid) res.status(404).json(validateLogin.error);
      User.findOne({user: loggedUser.user},(err,userFound) => {
          if (err) res.status(404).json({inputError: "Some error occured!"});
          if (!userFound) res.status(404).json({inputNotFound:"Invalid Username or Password"});
          else {
            bcrypt.compare(loggedUser.password,userFound.password)
            .then((isMatch) => {
              if (isMatch){
                console.log(userFound._id)
                const payload = {
                  user: userFound.user,
                  id: userFound._id
                };
                jwt.sign(payload,key.secretOrKey,{expiresIn: 300000},(err,token) => {
                  if (err) res.status(404).json({cannotSign:"error when signing jwt"})
                  else  {
                    res.cookie('token', token, { httpOnly: true,maxAge: 360000 });
                    res.json({token})
                  }
                })
              }
              else res.status(404).json({inputNotFound:"Invalid Username or Password"})
            })
          }
        })
      })
      app.get("/user/verifyJwt",function(req,res){
        (jwt.verify(req.cookies.token,key.secretOrKey,(err,decodedToken) =>{
          if (err) res.status(404).json({jwtInvalid: "Invalid token"})
          else {res.json(decodedToken)};
        }));
      })

      app.post('/user/signout',function(req,res){
        res.clearCookie('token');
        res.send("cleared!");
      })

  



app.get('*', function (req, res) {
   res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.listen(process.env.PORT || 8080);
