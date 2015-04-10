brewsr.controller('HomeCtrl',['$scope','$http','$modal','AlertService','$location','UserService',function($scope,$http,$modal,AlertService,$location,UserService){

    $scope.UserService = UserService;
    $scope.$watchCollection('UserService',function(){
        $scope.currentUser=UserService.currentUser;
    });

    var queryData = $location.search();
    var searchTerm = queryData.q || false;

    var req = {
        url:'/api/post',
        params:{
            'sort':'createdAt desc'
        }
    };

    if(searchTerm){
        req.params.body='%'+searchTerm+'%';
    }

    //$http.get('url')
    // $http(req).success(function(data){
    //     $scope.posts = data;
    // });


}]);