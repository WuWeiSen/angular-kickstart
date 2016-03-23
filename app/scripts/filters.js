(function(window, angular) {
    "user strict";

    angular.module('angularKickstart')
        .filter('trim', function(limitToFilter) {
            return function(input, limit) {
                if (!input) {
                    return input;
                }
                if (input.length > limit) {
                    return limitToFilter(input, limit - 3) + '...';
                }
                return input;
            }
        })
        .filter('to_trustedUrl', function($sce) {
            return function(url) {
                return $sce.trustAsResourceUrl(url);
            }
        })
        .filter('to_trustedHtml', function($sce) {
            return function(text) {
                return $sce.trustAsHtml(text);
            }
        });

})(window, window.angular);
