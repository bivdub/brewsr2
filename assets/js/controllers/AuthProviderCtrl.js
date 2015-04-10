brewsr.controller('AuthProviderCtrl', ['$scope','$http','$location','$routeParams',  function($scope,$http,$location,$routeParams){

  $scope.provider = $routeParams.provider;

  // $http.get('/auth/'+$scope.provider)
  // .success(function(data) {
  //   console.log('data:', data);
  //   // $http.get('')
  // })
  // .error(function(err) {
  //   console.log(err);
  // });

}]);