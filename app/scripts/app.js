angular.module('angularKickstart', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('not_found', {
            url: '/not_found',
            templateUrl: 'views/not_found.html'
        })
        .state('hello', {
            url: '/hello',
            controller: 'HelloController',
            templateUrl: 'views/hello.html'
        });

    $urlRouterProvider.otherwise(function($injector) {
        var $state = $injector.get("$state");
        $state.go('not_found');
    });
})
