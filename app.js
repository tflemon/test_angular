/*
var app = angular.module("App", ['ngResource']);
	app.controller("index", ["$scope", "$resource", function($scope, $resource, User) {
		var userResource = $resource("./res.php");


		$scope.getUser = function () {
			// Make a GET call and store the result in user.
			 $scope.user = user.query(
				 {id:1}
			 );
		};

		$scope.postUser = function () {
			// Save the user and alert on success or failure.
			console.log($scope.user.name);
			userResource.($scope.user, function () {
				alert("User saved!");
			});
		};
	}]);
*/
var todoServices = angular.module('todoServices', ['ngResource']);

todoServices.factory('ToDoList', ['$resource',
  function($resource) {
    return $resource(
      './res.php',
      {userid : '@userid', todoid : '@todoid'}, {
      // 追加は create 
      create: {method: 'POST'},
      //編集はedit
      edit: {method: 'POST'},
      // 削除は cancel
      cancel: {method: 'DELETE'}
    }
   );
  }
]);

/*
App.factory('Reply', ['$resource',
  function($resource) {
    return $resource('./res.php', {}, {
      save: {method: 'POST'},
      remove: {method: 'DELETE'}
    });
  }
]);
*/