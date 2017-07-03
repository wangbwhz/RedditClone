var Topic = require("./topic.js");
/*
Topics data structure defination
*/

var topicLst = [];//in memory data storage for topic related data.

function Topics() {
}

function compareVoteCnt(a, b) {
  return b.upvoteCnt-a.upvoteCnt;
}
//calculate vote count=upvoteCnt-downvoteCn
//min of vote count is 0
function calVoteCnt(array){
    for(let topic of array){
        var voteCnt=topic.upvoteCnt-topic.downvoteCnt
        if(voteCnt<0){
            voteCnt=0;
        }
        topic.voteCnt=voteCnt;
    }

    return array;
}
//Order topic by upvoteCnt descending and calulate the vote count
function queryTopics(topicLst){
    calVoteCnt(topicLst);
    return topicLst.slice(0).sort(compareVoteCnt);
}
// class methods
Topics.prototype.getTopics = function() {
    
    console.log(topicLst);
    return queryTopics(topicLst);
}

Topics.prototype.addTopic = function(topicContent) {
    var topic = new Topic(topicContent);
    topicLst.push(topic);
    return topicLst;
};


Topics.prototype.upvoteTopic = function(id) {
    topicLst[id - 1].upvoteTopic();
    return queryTopics(topicLst);
};
Topics.prototype.downvoteTopic = function(id) {
    topicLst[id - 1].downvoteTopic();
    return queryTopics(topicLst);
};

// export the class
module.exports = Topics;