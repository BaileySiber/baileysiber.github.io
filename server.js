const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true});

const Message = mongoose.model('Message', {
  name: String,
  email: String,
  subject: String,
  message: String
})

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json())

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "https://www.baileysiber.com");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
  next();
});

var http = require("http");
setInterval(function() {
    http.get("https://bailey-site.herokuapp.com/");
}, 1500000);

app.get('/api/test', function(req, res) {
  res.send('success');
});

app.post('/api/contact', function (req, res) {
  console.log(req.body)
  new Message(req.body)
    .save()
    .then((result) => res.json(result))
    .catch((err) => {
      console.log('did not work!!')
      res.status(500).end(err.message)
    })
});

app.listen(process.env.PORT || 3001, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});


//server.js
