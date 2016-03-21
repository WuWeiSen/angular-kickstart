(function(window, angular) {
    "use strict";

    angular.module('angularKickstart')
        .factory('FULL_API_URL', function(API_HOST) {
            return function(suffixUrl) {
                return API_HOST + suffixUrl;
            };
        })
        .factory('AppModel', function($http, FULL_API_URL) {
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
                }
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
