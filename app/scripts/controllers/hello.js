(function(window, angular) {

    angular.module('angularKickstart')

    .controller('HelloController', function($scope) {
        $scope.helloText = "hello world";
    })

})(window, window.angular);
