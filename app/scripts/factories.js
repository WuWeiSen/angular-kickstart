(function(window, angular) {
    "use strict";

    angular.module('angularKickstart')
        .factory('FULL_API_URL', function(API_HOST) {
            return function(suffixUrl) {
                return API_HOST + suffixUrl;
            };
        })
        .factory('AppModel', function($http, $q, FULL_API_URL) {
            return {
                getUser: function() {
                    return $http.get(FULL_API_URL('/user'),{}, {
                        responseType: 'json'
                    });
                },
                getMenus: function() {
                    return $http.get(FULL_API_URL('/system_menus'), {
                        responseType: 'json'
                    });
                },
                testMock: function() {
                    var deferred = $q.defer(); // 声明延后执行，表示要去监控后面的执行
                    $http({method: 'GET', url: FULL_API_URL('/start_mock')}).
                    success(function(data, status, headers, config) {
                        deferred.resolve("good job!");  // 声明执行成功，即http请求数据成功，可以返回数据了
                    }).  
                    error(function(data, status, headers, config) {
                        deferred.reject("您的MOCK还没启动");   // 声明执行失败，即服务器返回错误  
                    });  
                    return deferred.promise;   // 返回承诺，这里并不是最终数据，而是访问最终数据的API  
                },
            };
        })
        .factory('AddressModel', function($resource, FULL_API_URL) {
            return $resource(FULL_API_URL('/addresses/:id'), null, {
                update: {
                    method: 'PUT'
                },
                setDefault: {
                    method: 'POST',
                    url: FULL_API_URL('/addresses/set_default')
                }
            });
        })
        .factory('CityModel', function($resource, FULL_API_URL) {
            return $resource(FULL_API_URL('/global_hot_cities'), null, {
                getGlobalHotCities: {
                    method: 'GET'
                },
                queryPlateCities: {
                    method: 'GET',
                    url: FULL_API_URL('/plate_cities')
                },
                queryGlobalCities: {
                    method: 'POST',
                    url: FULL_API_URL('/global_cities/search')
                }
            });
        })

})(window, window.angular);
