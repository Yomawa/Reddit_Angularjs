var app = angular.module('app',[]);
app.controller("FirtController", function($scope, $filter) {
  $scope.vote = 0;
  $scope.date = new Date();
  $scope.isPositiveNegative = null;
  $scope.posts = [{title:"Yosemite", author:"Ivana", image:"", description:"Yosemite Park is awesome"}];
  $scope.newPost = {title:"", author:"", image:"", description:""};
  $scope.addPost = function(newPost){
    $scope.posts.push(newPost);
    $scope.newPost={};
    $scope.postForm.$setPristine();
  };
  //TOGGLE FORM
  // $scope.postForm = false;
  //  $scope.toggleForm = function() {
  //   $scope.postForm = !$scope.postForm;
  //   $timeout(function() {
  //     var title = $window.document.getElementById('title');
  //     if (title) {
  //       title.focus();
  //     }
  //     var author = $window.document.getElementById('author');
  //     if (author) {
  //       author.focus();
  //     }
  //     var image = $window.document.getElementById('image');
  //     if (image) {
  //       image.focus();
  //     }
  //     var description = $window.document.getElementById('description');
  //     if (description) {
  //       description.focus();
  //     }
  //   });
  // };
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
    app.controller("CommentController", function($scope){
      $scope.commentForm = false;
      $scope.toggleForm = function() {
        //debugger
      $scope.commentForm = !$scope.commentForm;
    
    
  };
    });
});

   


