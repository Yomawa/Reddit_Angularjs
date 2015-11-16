var app = angular.module('app',[]);
app.controller("FirtController", function($scope, $filter) {
  $scope.vote = 0;
  $scope.date = new Date();
  $scope.isPositiveNegative = null;
  $scope.posts = [{title:"Yosemite", author:"Ivana", image:"", description:"Yosemite Park is awesome"}];
  $scope.newPost = {title:"", author:"", image:"", description:""};
  $scope.formVisible = false;
  $scope.addPost = function(newPost){
    $scope.posts.push(newPost);
    $scope.newPost={};
    //show form
    $scope.formVisible = !$scope.formVisible;
    $scope.postForm.$setPristine();
  };
   $scope.showForm = function(){
      $scope.formVisible = !$scope.formVisible;
    };
  
   $scope.increaseVote = function(){
      // debugger 
    $scope.vote +=1;
    
      if ($scope.vote >= 1)
      {
        $scope.isPositiveNegative = "green";
      }
    };
     $scope.downVote = function(){
      // debugger 
      $scope.vote -= 1;
      if($scope.vote <= -1) 
      {
        $scope.isPositiveNegative = "red";
      }
    };
    
    // app.controller("CommentController", function($scope){
    //   $scope.comments = [{author:"Maja", text:"dfdf"}];
    //   $scope.newComment = {author:"", text:""};
    //   $scope.addComment = function (newComment){
    //     $scope.comments.push(newComment);
    //   };
    //   $scope.commentForm = false;
    //   $scope.toggleForm = function() {
    //     //debugger
    //   $scope.commentForm = !$scope.commentForm;
    
    //   };
    // });
});

   


