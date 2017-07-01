/*
Controller for the topic 
1. Add Topic
2. Get Topic List
3. Upvote the topic
4. Downvote the topic
*/
angular
    .module('app')
    .controller('PostCntlr', PostCntlr);

function PostCntlr($scope, $http, TopiceService) {
    console.log("PostCntlr Access");
      $scope.phones = [
    {
      name: 'Nexus S',
      snippet: 'Fast just got faster with Nexus S.'
    }, {
      name: 'Motorola XOOM™ with Wi-Fi',
      snippet: 'The Next, Next Generation tablet.'
    }, {
      name: 'MOTOROLA XOOM™',
      snippet: 'The Next, Next Generation tablet.'
    }
  ];
    
    $scope.getTopics = function () {
        console.log("PostCntlr Access getTopics");
        var topicService = TopiceService.getTopics();
        topicService.then(function (data) {
            console.log(data.data);
            $scope.topics=data.data;
        }, function () {
            alert("Dont have topic");
        });

    }
    $scope.getTopics();

    $scope.addTopic = function () {
        console.log("PostCntlr Access addTopic");
        TopiceService.addTopic($scope.topic).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            console.log("Successfully add topic");
            console.log(response.data);
            $scope.topics=response.data;
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });


    }
    $scope.upvoteTopic = function (topicId) {
        console.log("PostCntlr Access upvoteTopic "+topicId);
        TopiceService.upvoteTopic(topicId).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });

    }
    $scope.downvoteTopic = function (topicId) {
       console.log("PostCntlr Access downvoteTopic "+topicId);
        TopiceService.downvoteTopic(topicId).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });


    }


}
