/*
Topic data structure defination
*/
var method = Topic.prototype;
var nextId = 1; //keep updated in class level when new topic is added
function Topic(content, voteCnt) {
    this.id = nextId++;
    this.content = content;
    if (voteCnt === undefined) { // parameter was omitted in call}
        this.voteCnt = 0;
    } else {
        this.voteCnt = voteCnt;
    }
}


Topic.prototype.upvoteTopic=function(){
    this.voteCnt++;
}
Topic.prototype.downvoteTopic=function(){
    if(this.voteCnt>0)
        this.voteCnt--;
}
module.exports = Topic;
