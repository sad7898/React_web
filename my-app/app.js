const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const uuid = require('uuid');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'build')));
const mongoose = require('mongoose')
const { StringDecoder } = require('string_decoder');
mongoose.connect("mongodb://localhost:27017/user");
var postScheme = new mongoose.Schema({
  topic:String,
  text: String
})
var postCollection = mongoose.model("name",postScheme);

app.get("/api/post",function(req,res){
  postCollection.find({},function(err,post){
    if(err) console.log(err)
    else res.send(post.map((val)=> ({topic: val.topic, id: val._id})));
  });
})


app.post('/post', function (req, res) {
  let Topic = req.body.postTopic+"";
  let newPost = new postCollection({
    topic: Topic,
    text: req.body.postText

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

