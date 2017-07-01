var Topic = require("./topic.js");
var topicLst=[];

const express = require('express')
const app = express()
// Add headers
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});

app.get('/getTopics', function (req, res) {
   JSON.stringify(topicLst);
   res.send(topicLst);
})

app.post('/addTopic', function (req, res) {
var body = ""; 
req.on('data', function(data) {
    body += data.toString(); // convert data to string and append it to request body
});
    req.on('end', function() {
    value = JSON.parse(body); // request is finished receiving data, parse it
    var topic = new Topic(value.topic);
    topicLst.push(topic);
});
    


})
app.get('/upTopic', function (req, res) {
  
   res.header("Access-Control-Allow-Origin", "*");
   res.send('upTopic');
})
app.get('/downTopic', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");

   res.send('upTopic');
})





app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})