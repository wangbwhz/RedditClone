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

function PostCntlr($scope, $http, TopiceService, $window,$log) {
    $log.debug("PostCntlr Access");
    $scope.getTopics = function (currentPage) {
        $log.debug("PostCntlr Access getTopics @ page " + currentPage);
        var topicService = TopiceService.getTopics(currentPage);
        topicService.then(function (response) {
            $scope.topics = response.data.topics;
            $scope.currentPage = currentPage;
            $scope.lastPage = response.data.lastPage;
            
            $log.debug("data is " + response.data.topics);
            $log.debug("Current Page is " + response.data.currentPage);
            $log.debug("Last Page is " + response.data.lastPage);
        }, function errorCallback(response) {
            $log.error('error get Topics! ' + response.message);
        });

    }
    $scope.getTopics(1);//By default load page 1
    $scope.addTopic = function () {
        $log.debug("PostCntlr Access addTopic");
        if($scope.topic==undefined) {
            return false;
        }      
        TopiceService.addTopic($scope.topic).then(function successCallback(response) {
            $window.location.href = '/index.html'; //redirect to home page
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            $log.error('Error add Topic! ' + response.message);
        });


    }
    $scope.upvoteTopic = function (topicId) {
        var currentPage = $scope.currentPage;
        $log.debug("PostCntlr Access upvoteTopic " + topicId + " @page " + currentPage);

        TopiceService.upvoteTopic(topicId, currentPage).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            $scope.topics = response.data.topics;
            $scope.currentPage = currentPage;
            $scope.lastPage = response.data.lastPage;
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            $log.error('Error upvote Topic! ' + response.message);
        });

    }
    $scope.downvoteTopic = function (topicId) {
        var currentPage = $scope.currentPage;
        $log.debug("PostCntlr Access downvoteTopic " + topicId + " @page " + currentPage);
        TopiceService.downvoteTopic(topicId, currentPage).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            $scope.topics = response.data.topics;
            $scope.currentPage = currentPage;
            $scope.lastPage = response.data.lastPage;
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            $log.error('Error downvote Topic! ' + response.message);

        });


    }


}
