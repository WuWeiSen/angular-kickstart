(function(window, angular) {

    angular.module('angularKickstart')

    .controller('DirectivesController', function($scope) {
        $scope.trimText = '这是一个截断过滤器，后面会补上...';
    })

})(window, window.angular);
