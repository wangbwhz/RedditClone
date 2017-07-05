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
}
Topic.prototype.upvoteTopic = function () {
    this.upvoteCnt++;

}
Topic.prototype.downvoteTopic = function () {
    this.downvoteCnt++;
}
Topic.prototype.updateVoteCnt = function () {
        var voteCnt=this.upvoteCnt-this.downvoteCnt
        if(voteCnt<0){
            voteCnt=0;
        }
        this.voteCnt=voteCnt;
}
module.exports = Topic;
