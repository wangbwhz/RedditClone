/*
Topic Controller 
Get topis, add topic, upvote Topic and downvote Topic using Model
return updated topic list to the user
*/
var Topics = require("../models/topics.js");
var topicsModel = new Topics();


module.exports.getTopics = function () {
    var topicLst = topicsModel.getTopics();
    return JSON.stringify(topicLst);
}
module.exports.addTopic = function () {
    var topicLst = topicsModel.addTopic(topicContent);
    return JSON.stringify(topicLst);
}

module.exports.upvoteTopic = function (id) {
        console.log(id);

    var topicLst = topicsModel.upvoteTopic(id);
    return JSON.stringify(topicLst);
}

module.exports.downvoteTopic = function (id) {
    var topicLst = topicsModel.downvoteTopic(id);
    return JSON.stringify(topicLst);
}
