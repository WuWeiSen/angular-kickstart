(function(window, angular) {

    angular.module('angularKickstart')

    .controller('DirectivesController', function($scope) {
        $scope.trimText = '这是一个截断过滤器，后面会补上...';
        $scope.joinArray = [{
            name: '一毛',
            age: '18'
        }, {
            name: '二毛',
            age: '15'
        }, {
            name: '李狗蛋',
            age: '13'
        }];
    })

})(window, window.angular);
