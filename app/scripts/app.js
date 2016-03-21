angular.module('angularKickstart', [
    'ui.router',
    'ngResource',
    'oc.lazyLoad',
    'ui.bootstrap',
    'oitozero.ngSweetAlert'
    ])
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
        })
        .state('index', {
            url: '/',
            controller: 'DirectivesController',
            templateUrl: 'views/directives.html',
            resolve: {
                load: ['$ocLazyLoad',
                    function($ocLazyLoad) {
                        return lazyDeferred = $ocLazyLoad.load([{
                            files: [
                                './styles/css/city.css'
                            ]
                        }]);
                    }
                ]
            }
        });

    $urlRouterProvider.otherwise(function($injector) {
        var $state = $injector.get("$state");
        $state.go('index');
    });
})
