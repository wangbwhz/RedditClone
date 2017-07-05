/*
Topic Controller 
Get topis, add topic, upvote Topic and downvote Topic using Model
return updated topic list to the user
*/
var Topics = require("../models/topics.js");
var topicsModel = new Topics();
module.exports.getTopics = function (currentPage) {
    var topicLst = topicsModel.getTopics(currentPage);
    return topicLst;
}
module.exports.getLastPage = function () {
    var lastPage = topicsModel.getLastPage();
    return lastPage;
}
module.exports.addTopic = function (topicContent) {
    var topicLst = topicsModel.addTopic(topicContent);
    return topicLst;
}

module.exports.upvoteTopic = function (id, currentPage) {
    var topicLst = topicsModel.upvoteTopic(id, currentPage);
    return topicLst;
}

module.exports.downvoteTopic = function (id, currentPage) {
    var topicLst = topicsModel.downvoteTopic(id, currentPage);
    return topicLst;
}
