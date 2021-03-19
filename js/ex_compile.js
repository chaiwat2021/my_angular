angular.module('AddNewCab', [])

  .controller('cabcontainer', ['$scope','$compile', function($scope, $compile) {

    $scope.count = 0;
    $scope.myFunc = function() {
       
       $scope.count=$scope.count+1;
       var source = angular.element( document.querySelector( '#cabdata' ));
       var container = angular.element( document.querySelector( '#cabcontainer' ));

       var uniqueid='cabdata'+$scope.count;
       var temp= $compile(source.clone().attr('id',uniqueid))($scope);
       container.append(temp);
    };
  }]);
  