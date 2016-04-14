var myApp = angular.module('mainModule', ['ngResource','ui.bootstrap']);

  myApp.controller('mainController', ['$scope', '$resource',
    function ($scope, $resource) {
      $scope.getWithParams = function (withSuccess) {
        var callURL = (withSuccess ? "resource-server.php" : "invalid-url.php");

        var serverResource = $resource(callURL, {
          param1: "param1 default",  //userid
          param2: "param2 default"   //ToDo
        });
        var getConfig = {};
        //if ($scope.getParam1 !== undefined && $scope.getParam1 != "") {
        //  getConfig.param1 = $scope.getParam1;
        //}
        //if ($scope.getParam2 !== undefined && $scope.getParam2 != "") {
        //  getConfig.param2 = $scope.getParam2;
        //}

        serverResource.get(getConfig,
          function (value, responseHeaders) {
            $scope.getWithParamsResult = "GET SUCCESS\n\n" +
            "value: " + angular.toJson(value,true) + "\n\n";
          },
          function (httpResponse) {
            $scope.getWithParamsResult = "GET ERROR\n\n";
          }
        );
      };
    }
  ]);
