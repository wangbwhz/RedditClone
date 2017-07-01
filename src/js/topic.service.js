angular
    .module('app')
    .service("TopiceService", function ($http) {
    this.getTopics = function () {
        return $http.get(__env.baseUrl+"/getTopics");
    };
this.addTopic = function (topic) {
var req = {
 method: 'POST',
 url: __env.baseUrl+'/addTopic',
 headers: {
'Content-Type': 'application/x-www-form-urlencoded'
 },
 data: {topic}   
        };
        console.log(req);
        return $http(req);

    };
    this.upTopic = function () {
        return $http.get(__env.baseUrl+"/upTopic");
    };
    this.downTopic = function () {
        return $http.get(__env.baseUrl+"/downTopic");
    };
});