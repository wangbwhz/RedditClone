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

function PostCntlr($scope, $http, TopiceService, $window) {
    console.log("PostCntlr Access");
    $scope.getTopics = function (currentPage) {
        console.log("PostCntlr Access getTopics @ page " + currentPage);
        var topicService = TopiceService.getTopics(currentPage);
        topicService.then(function (response) {
            $scope.topics = response.data.topics;
            $scope.currentPage = currentPage;
            $scope.lastPage = response.data.lastPage;

            console.log("data is " + response.data.topics);
            console.log("Current Page is " + response.data.currentPage);
            console.log("Last Page is " + response.data.lastPage);
        }, function errorCallback(response) {
            console.log('Error get Topics! ' + response.message);
        });

    }
    $scope.getTopics(1);
    $scope.addTopic = function () {
        console.log("PostCntlr Access addTopic");
        TopiceService.addTopic($scope.topic).then(function successCallback(response) {
            $window.location.href = '/index.html'; //redirect to home page
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            console.log('Error add Topic! ' + response.message);
        });


    }
    $scope.upvoteTopic = function (topicId) {
        var currentPage = $scope.currentPage;
        console.log("PostCntlr Access upvoteTopic " + topicId + " @page " + currentPage);

        TopiceService.upvoteTopic(topicId, currentPage).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            $scope.topics = response.data.topics;
            $scope.currentPage = currentPage;
            $scope.lastPage = response.data.lastPage;
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            console.log('Error upvote Topic! ' + response.message);
        });

    }
    $scope.downvoteTopic = function (topicId) {
        var currentPage = $scope.currentPage;
        console.log("PostCntlr Access downvoteTopic " + topicId + " @page " + currentPage);
        TopiceService.downvoteTopic(topicId, currentPage).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            $scope.topics = response.data.topics;
            $scope.currentPage = currentPage;
            $scope.lastPage = response.data.lastPage;
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            console.log('Error downvote Topic! ' + response.message);

        });


    }


}
