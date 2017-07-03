var Topics = require("../models/topics.js");
var topicsModel = new Topics();
var url = require('url');

module.exports.controller = function (app) {
    app.get('/getTopics', function (req, res) {
        var topicLst=topicsModel.getTopics();
        JSON.stringify(topicLst);
        res.send(topicLst);
    })
    // add topic to the list of topics
    app.post('/addTopic', function (req, res) {
        var topicJson = "";
        req.on('data', function (data) {
            topicJson += data.toString(); // convert data to string and append it to request body
        });
        req.on('end', function () {
            topicContent = JSON.parse(topicJson).topic; // request is finished receiving data, parse it
            topicLst=topicsModel.addTopic(topicContent);            
            JSON.stringify(topicLst);
            res.send(topicLst);
        });
    })
    // increase the upvote of the topic by 1
    app.get('/upvoteTopic', function (req, res) {

        var id = url.parse(req.url, true).query.id;
        var topicLst=topicsModel.upvoteTopic(id);            

        JSON.stringify(topicLst);
        res.send(topicLst);
    })
    // increase the downvote of the topic by 1
    app.get('/downvoteTopic', function (req, res) {
        var id = url.parse(req.url, true).query.id;
        var topicLst=topicsModel.downvoteTopic(id);            
        JSON.stringify(topicLst);
        res.send(topicLst);
    })
}
