const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const uuid = require('uuid');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'build')));
const mongoose = require('mongoose')
const { StringDecoder } = require('string_decoder');
mongoose.connect("mongodb://localhost:27017/post");
var postScheme = new mongoose.Schema({
  topic:String,
  text: String,
  created: {type: Date,default: Date.now}
})
var postCollection = mongoose.model("name",postScheme);
app.get("/api/post/:q",function(req,res){
  let query = req.params.q;
  let result;
  postCollection.find({topic:query},(err,post) => {
    if (err) console.log(err)
    else query = post.map((val)=> ({topic: val.topic, id: val._id,created: val.created}));
  })
  postCollection.find({text:query},(err,post) => {
    if (err) console.log(err)
    else query = post.map((val)=> ({topic: val.topic, id: val._id,created: val.created}));
  })
})
app.get("/api/post/",function(req,res){
  postCollection.find({},function(err,post){
    if(err) console.log(err)
    else res.send(post.map((val)=> ({topic: val.topic, id: val._id,created: val.created})));
  });
})


app.post('/post', function (req, res) {
  let Topic = req.body.postTopic+"";
  let newPost = new postCollection({
    topic: Topic,
    text: req.body.postText,

  })
  newPost.save(function(err,post){
    if (err) console.log("SOMETHING's wrong");
    else {
      console.log("SAVED!   "+post);
      res.redirect("/forum/GeneralDiss/post");
    }
  })
});


app.get('*', function (req, res) {
   res.sendFile(path.join(__dirname, 'build', 'index.html'));

  
});


app.listen(process.env.PORT || 8080);

