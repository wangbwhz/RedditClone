/*
Topic data structure defination
*/
var method = Topic.prototype;
var nextId = 1;//keep updated in class level when new topic is added
function Topic(content,voteCnt) {
    //use the lock to prevent simulutaneous modification of the voteCont(vote count)
    var AsyncLock = require('async-lock');
    var lock = new AsyncLock();

    this.id = nextId++;
    this.content=content;
    if (voteCnt===undefined) {// parameter was omitted in call}
        this.voteCnt= 0;
    }
    else{
        this.voteCnt = voteCnt;
    }  
     this.upVote = function() {
        lock.acquire("key", function(done) {
       this.voteCnt++;
        setTimeout(function() {
            done();
        }, 3000)
    }, function(err, ret) {
    }, {});
    };
     this.downVote = function() {
        lock.acquire("key", function(done) {
        this.voteCnt--;
        setTimeout(function() {
            done();
        }, 3000)
    }, function(err, ret) {
    }, {});
    };
}

//method.getContent = function() {
//    return this._content;
//};
//method.getVoteCnt = function() {
//    return this._voteCnt;
//};

module.exports = Topic;