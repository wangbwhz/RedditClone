/*
Topic data structure defination
*/
var method = Topic.prototype;
var nextId = 1; //keep updated in class level when new topic is added
function Topic(content) {
    this.voteCnt = 0;
    this.id = nextId++;
    this.content = content;
    this.upvoteCnt = 0;
    this.downvoteCnt = 0;
    this.upvoteTopic = function () {
        this.upvoteCnt++;
        
    }
    this.downvoteTopic = function () {
        this.downvoteCnt++;
        
        
    }
    
}

module.exports = Topic;
