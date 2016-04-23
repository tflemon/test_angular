var app = angular.module('todoControllers', ['todoServices']);
app.controller('todoListController', ['$scope','ToDoList',
  function($scope, ToDoList) {

    //動作確認用ToDo
      $scope.test2 = [
        { content: "1/1までに初詣に行く", status: 'done'},
        { content: "2/3までに豆まきをする", status: 'done'},
        { content: "8/4までに海水浴に行く", status: 'yet'}
      ];

     // ToDo追加
		$scope.createToDo = function() {
			var create = new ToDoList();
			//TODO useridを取得
			create.content = $scope.new_todo;   //入力したToDoを設定
		 create.$create(function() {
		 console.log("create success : " + create.content);
		 }, function(err) {
			 console.log("create error");
		 }
		 );
		};

    /*//ToDo編集
     var oldContent;     // 編集前のcontent
     $scope.editing = null;
     $scope.editToDo = function (todoForm) {
       if (todoForm.$invalid) {
         $scope.editing.content = oldContent;
       }
       $scope.editing = oldContent = null;
     };
     //編集内容を反映
     $scope.submitEditToDo = function (todo) {
       oldContent = todo.content;
       $scope.editing = todo;
     }; */

     //ToDo編集
      var oldContent;     // 編集前のcontent
      $scope.editing = null;
      $scope.editToDo = function (todoForm) {
        var edit = new ToDoList();
        //TODO useridとtodoidを取得
        edit.$edit(function() {
          console.log("$edit success");
          if (todoForm.$invalid) {
            $scope.editing.content = oldContent;
          }
          $scope.editing = oldContent = null;
        }, function(err) {
          console.log("edit error");
        }
      );
      };
      //編集内容を反映
      $scope.submitEditToDo = function (todo) {
        oldContent = todo.content;
        $scope.editing = todo;
      };

		 /* ToDo編集
		$scope.editToDo = function() {
			//TODO todoidを取得
		 	var edit = new ToDoList();
		 	//TODO useridとtodoidを取得
		 	edit.content = $scope.edit_todo;  //入力(編集)したToDoを設定
		 	edit.$edit(function() {
		 		console.log("edit success : " + edit.content);
		 	}, function(err) {
			 	console.log("edit error");
		 	   }
			);
		};
		*/

		 //ToDo削除
		 $scope.deleteToDo = function() {
			 //TODO userid, todoidを取得
			 var cancel = new ToDoList();
			 //TODO todoidを取得
			 //delete.todoid = '1';
       console.log("cancel success");
		 	cancel.$delete(function() {
				 console.log("cancel success");
		 	}, function(err) {
				 console.log("delete error");
			   }
			);
		};

  }
])//;

.directive('editSelect', [function () {
  return function (scope, $el, attrs) {
    scope.$watch(attrs.mySelect, function (val) {
      if (val) {
        $el[0].select();
      }
    });
  };
}]);
