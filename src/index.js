/*
1. Index File for the backend and frontend
Put Frontend and backend on the same server same Directory
2.The index file can be put inside the Backend directory to run the backend only(remove optional code for the frontend)
Frontend can run on another server(update the FrontEnd/js/env.js file to set the link to connect to backend)
*/

var port = process.env.PORT || 8080; // set the port of our application, process.env.PORT lets the port be set by Heroku
var topicCntlr = require('./BackEnd/controllers/topic.js'); //change the path if the index file is removed

const express = require('express')
const app = express()
var url = require('url');
// Add headers
app.use(express.static('FrontEnd')) //optionally for the frontend, run the frontend on the same server, all the statics files are stroed in the FrontEnd Directory

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
//optionally for the frontend
app.get('/', function (req, res) {
    res.sendfile('FrontEnd/index.html', {
        root: __dirname
    })
});
//Backend dealing with the request from user
function generateJson(topicLst, currentPage, lastPage) {
    var result = {};
    result["topics"] = topicLst;
    result["currentPage"] = currentPage;
    result["lastPage"] = lastPage;
    JSON.stringify(result);
    return result;

}
app.get('/getTopics', function (req, res) {
    console.log("backend dealing with get topics");
    var currentPage = url.parse(req.url, true).query.currentPage;
    var topicLst = topicCntlr.getTopics(currentPage);
    var lastPage = topicCntlr.getLastPage();
    console.log(topicLst);

    res.send(generateJson(topicLst, currentPage, lastPage));
})
// add topic to the list of topics
app.post('/addTopic', function (req, res) {
    var topicJson = "";
    req.on('data', function (data) {
        topicJson += data.toString(); // convert data to string and append it to request body
    });
    req.on('end', function () {
        topicContent = JSON.parse(topicJson).topic; // request is finished receiving data, parse it
        var topicLst = topicCntlr.addTopic(topicContent);

        res.sendfile('FrontEnd/index.html', {
            root: __dirname
        })
    });
})
// increase the upvote of the topic by 1
app.get('/upvoteTopic', function (req, res) {
    var id = url.parse(req.url, true).query.id;
    var currentPage = url.parse(req.url, true).query.currentPage;
    var topicLst = topicCntlr.upvoteTopic(id, currentPage);
    var lastPage = topicCntlr.getLastPage();
    console.log(generateJson(topicLst, currentPage, lastPage));
    res.send(generateJson(topicLst, currentPage, lastPage));
})
// increase the downvote of the topic by 1
app.get('/downvoteTopic', function (req, res) {
    var id = url.parse(req.url, true).query.id;
    var currentPage = url.parse(req.url, true).query.currentPage;
    var topicLst = topicCntlr.downvoteTopic(id, currentPage);
    var lastPage = topicCntlr.getLastPage();
    res.send(generateJson(topicLst, currentPage, lastPage));
})
app.listen(port, function () {
    console.log('App listening on port ' + port)
})
