/*
Provide service for data transmisision between front end and backend
*/
angular
    .module('app')
    .service("TopiceService", function ($http) {
        this.getTopics = function () {
            return $http.get(__env.baseUrl + "/getTopics");
        };

        this.addTopic = function (topic) {
            var req = {
                method: 'POST',
                url: __env.baseUrl + '/addTopic',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: {
                    topic
                }
            };
            return $http(req);

        };
        this.getTopics = function () {
            var req = {
                method: 'Get',
                url: __env.baseUrl + '/getTopics',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            };
            return $http(req);

        };
        this.upvoteTopic = function (topicId) {
            var req = {
                method: 'Get',
                url: __env.baseUrl + '/upvoteTopic',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                params:{id:topicId}
               
            };
            return $http(req);
        };
        this.downvoteTopic = function (topicId) {
           var req = {
                method: 'Get',
                url: __env.baseUrl + '/downvoteTopic',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
               params:{id:topicId} 
            };
            return $http(req);
        };
    });
