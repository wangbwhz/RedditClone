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

function PostCntlr($scope, $http, TopiceService) 
{
    console.log("PostCntlr Access");
     $scope.getTopics=function() 
{
    console.log("PostCntlr Access getTopics");
    console.log($scope.topic);
    var getAllTopics = TopiceService.getTopics();
    getAllTopics.then(function (emp) {
            $scope.topicList = emp.data;
            console.log($scope.topicList);
        }, function () {
            alert('Data not found');
        });   

}
    $scope.addTopic=function() 
{
    console.log("PostCntlr Access addTopic");
    TopiceService.addTopic($scope.topic).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });

   
}
    $scope.upvoteTopic=function() 
{
    console.log("PostCntlr Access DownVote");
    console.log($scope.topic);

}
$scope.downvoteTopic=function()
{
    console.log("PostCntlr Access UpVote");
    console.log($scope.topic);

}
   

}
