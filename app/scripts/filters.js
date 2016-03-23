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
        })
        .filter('join', function() {
            return function(val, split, property) {
                var result;
                split =  split || ' ';
                if (_.isArray(val)) {
                    if (_.isString(property)) {
                        result = [];
                        for (var i = 0; i < val.length; i++) {
                            result.push(val[i][property]);
                        }
                        result = result.join(split);
                    }
                } else {
                    return result + ' ';
                }
                return result;
            }
        });

})(window, window.angular);
