brewsr.controller('AuthModalCtrl',['$scope','$http','$modalInstance','UserService','AlertService',function($scope,$http,$modalInstance,UserService,AlertService){

    $scope.loginData={email:'',password:''};
    $scope.signupData={};

    $scope.login = function(){
        UserService.login($scope.loginData.email,$scope.loginData.password,
            function(err,data){
                if(err){
                    //server error
                    alert(err);
                }else if(data.user){
                    //successful login
                    $modalInstance.close();
                }else{
                    //login error (bad user or pass)
                    alert(data.error);
                }
            }
        );
    };

    $scope.signup = function(){

        if($scope.signupPassword != $scope.signup.passwordConfirm){
            alert('your password confirmation does not match');
            return;
        }

        var signupData={
            email:$scope.signup.email,
            password:$scope.signup.password,
            userName:$scope.signup.userName
        };

        console.log(signupData);

        $http.post('/api/user',signupData)
        .success(function(data){
            AlertService.add('success','You have been signed up.');
            $modalInstance.close();
        })
        .error(function(err){
            console.log(err);
            alert(err);
        })
    }

}]);