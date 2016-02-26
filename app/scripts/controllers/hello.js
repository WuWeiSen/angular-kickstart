(function(window, angular) {

    angular.module('angularKickstart')

    .controller('HelloController', function($scope, AppModel) {
        $scope.helloText = "hello world";
        $scope.getUser = function(){
            AppModel.getUser(function(response){
                alert(response);
            },function(err){
                alert(err);
            });
        }
    })

})(window, window.angular);
