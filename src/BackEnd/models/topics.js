var Topic = require("./topic.js");
/*
Topics data structure defination
*/

var topicLst = []; //in memory data storage for topic related data.
var pageSize = 20;
console.log = function() {};

function Topics() {

}

function compareVoteCnt(a, b) {
    return b.upvoteCnt - a.upvoteCnt;
}

//Order topic by upvoteCnt descending and calulate the vote count
function queryTopics(topicLst, currentPage) {
    var sortedTopicLst = topicLst.slice(0).sort(compareVoteCnt);
    //    console.log("topic.js topicLst variable")
    //    console.log(topicLst)
    //    console.log("topic.js sortedTopicLst variable")
    //    console.log(sortedTopicLst)
    return getTopicsByPage(pageSize, currentPage, sortedTopicLst);
}
//extract data by page
function getTopicsByPage(pageSize, currentPage, topicLst) {
    var totalTopics = topicLst.length;
    if (totalTopics <= pageSize) {
        return topicLst;
    } else {
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = totalTopics;
        if (startIndex + pageSize - 1 > totalTopics - 1) {
            endIndex = totalTopics - 1;
        } else {
            endIndex = startIndex + pageSize - 1;
        }   
        //        console.log("startIndex"+startIndex);
        //        console.log("endIndex"+endIndex);

        return topicLst.slice(startIndex, endIndex + 1);
    }

}
// class methods
Topics.prototype.getTopics = function (currentPage) {
    return queryTopics(topicLst, currentPage);
}
//get number of topics
Topics.prototype.getLastPage = function () {
    if (topicLst.length == 0) return 1; //if empty, last page is 1 and current page is 1
    var lastPage = Math.ceil(topicLst.length / pageSize);
    return lastPage;
}
Topics.prototype.addTopic = function (topicContent) {
    var topic = new Topic(topicContent);
    topicLst.push(topic);
    return topicLst;
}


Topics.prototype.upvoteTopic = function (id, currentPage) {
    topicLst[id - 1].upvoteTopic();
    topicLst[id - 1].updateVoteCnt(); //update vote count
    //    console.log("Upvote currentPage "+currentPage);
    return queryTopics(topicLst, currentPage);
}
Topics.prototype.downvoteTopic = function (id, currentPage) {
    topicLst[id - 1].downvoteTopic();
    topicLst[id - 1].updateVoteCnt(); //update vote count
    //    console.log("Downvote currentPage "+currentPage);
    return queryTopics(topicLst, currentPage);
}

// export the class
module.exports = Topics;
