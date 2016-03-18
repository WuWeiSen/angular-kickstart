define([
    'text!./etb-city.html'
], function(tpl) {
    'use strict';
    var PLATES = {
            ASIA: 0,          // 亚洲
            EUROPE: 1,        // 欧洲
            AMERICA: 2,       // 美洲
            AFRICA: 3,        // 非洲
            GREATAMERICA: 4,  // 大美洲
            CHINA: 99         // 国内
        },
        INDEXSTR = {
            FIRST: 'A,B,C,D',
            SECOND: 'E,F,G,H',
            THIRD: 'I,J,K,L',
            FOURTH: 'M,N,O,P',
            FIFTH: 'Q,R,S,T',
            SIXTH: 'U,V,W,X',
            SEVENTH: 'Y,Z'
        },
        directive = function($compile, $document, ErcCityStore) {
            return {
                restrict: 'AE',
                replace: true,
                scope: {
                    value: '='
                },
                compile: function(tElement, tAttrs) {

                    return function link($scope, element, attrs) {
                        var $html = $compile(tpl)($scope);
                        element.replaceWith($html);
                        $scope.config = {};
                        $scope.config['currentPanelName'] = '';
                        $scope.config['isSelect'] = false;
                        $scope.config['isCopy'] = true;
                        $scope.config['placeholder'] = element.attr('placeholder') || '选择城市';
                        $scope.PLATES = PLATES;
                        $scope.INDEXSTR = INDEXSTR;
                        $scope.inputId =  parseInt(10000*Math.random());
                        $scope.chinaHotCities = [];
                        $scope.abroadHotCities = [];
                        $scope.searchCities = [];
                        $scope.citiesCollection = {
                            asia: [],
                            europe: [],
                            america: [],
                            africa: [],
                            greatAmerica: [],
                            china: []
                        }
                        $scope.cacheCity = {
                            asia: {
                                'A': [],
                                'E': [],
                                'I': [],
                                'M': [],
                                'Q': [],
                                'U': [],
                                'Y': []
                            },
                            europe: {
                                'A': [],
                                'E': [],
                                'I': [],
                                'M': [],
                                'Q': [],
                                'U': [],
                                'Y': []
                            },
                            america: {
                                'A': [],
                                'E': [],
                                'I': [],
                                'M': [],
                                'Q': [],
                                'U': [],
                                'Y': []
                            },
                            africa: {
                                'A': [],
                                'E': [],
                                'I': [],
                                'M': [],
                                'Q': [],
                                'U': [],
                                'Y': []
                            },
                            greatAmerica: {
                                'A': [],
                                'E': [],
                                'I': [],
                                'M': [],
                                'Q': [],
                                'U': [],
                                'Y': []
                            },
                            china: {
                                'A': [],
                                'E': [],
                                'I': [],
                                'M': [],
                                'Q': [],
                                'U': [],
                                'Y': []
                            }
                        }
                        $scope.currentTab = {
                            asia: {
                                cacheIndex : 'A',
                                index: INDEXSTR.FIRST
                            },
                            europe: {
                                cacheIndex : 'A',
                                index: INDEXSTR.FIRST
                            },
                            america: {
                                cacheIndex : 'A',
                                index: INDEXSTR.FIRST
                            },
                            africa: {
                                cacheIndex : 'A',
                                index: INDEXSTR.FIRST
                            },
                            greatAmerica: {
                                cacheIndex : 'A',
                                index: INDEXSTR.FIRST
                            },
                            china: {
                                cacheIndex : 'A',
                                index: INDEXSTR.FIRST
                            }
                        }
                        $scope.onSelect = function($item) {
                            $scope.value = angular.copy($item);
                            $scope.config['currentPanelName'] = '';
                            $scope.config['isSelect'] = true;
                            $scope.config['isCopy'] = false;
                        };


                        $scope.switchTab = function(currentTab, code, plateName, cacheIndex){
                            if ($scope.currentTab[plateName]['index'] === currentTab) {
                                return;
                            }
                            $scope.currentTab[plateName]['index'] = currentTab;
                            $scope.currentTab[plateName]['cacheIndex'] = cacheIndex;
                            $scope.showCitise(code, currentTab, plateName, cacheIndex);
                        }
                        ErcCityStore.getGlobalHotCities({}).$promise.then(function(response) {
                            $scope.chinaHotCities = response.data.chinaHotCity;
                            $scope.abroadHotCities = response.data.abroadHotCity;
                        }, function(error) {
                        });

                        $scope.isShow = function(panelName) {
                            return $scope.config['currentPanelName'] === panelName;
                        };

                        $scope.showPanel = function(keyword) {
                            if(!!keyword && !$scope.config['isSelect'] && !$scope.config['isCopy']) {
                                $scope.searchCity(keyword);
                                $scope.config['currentPanelName'] = 'searchPanel';
                             } else {
                                $scope.config['currentPanelName'] = 'selectPanel';
                             }
                        }
                        $('.etb-city-body').on('click',function(event){
                            event.stopPropagation();
                        })
                        $scope.searchCity = function(keyword) {
                            if(!!$scope.value.code){
                                $scope.value.code = null;
                            }
                            $scope.config['isSelect'] = false;
                            $scope.config['isCopy'] = false;
                            if(!!keyword) {
                                ErcCityStore.queryGlobalCities({
                                    keyword:keyword,
                                    limit: 20
                                }).$promise.then(function(response) {
                                    $scope.searchCities = response.data;
                                }, function(error) {
                                });
                                $scope.config['currentPanelName'] = 'searchPanel';
                             } else {
                                $scope.config['currentPanelName'] = 'selectPanel';
                             }
                        }
                        $scope.showCitise = function(code, indexStr, plateName, cacheIndex) {
                            if($scope.cacheCity[plateName][cacheIndex].length > 0 ){
                                $scope.citiesCollection[plateName] = $scope.cacheCity[plateName][cacheIndex];
                            }else {
                                ErcCityStore.queryPlateCities({
                                code: code,
                                indexStr: indexStr
                            }).$promise.then(function(response) {
                                $scope.citiesCollection[plateName] = response.data;
                                $scope.cacheCity[plateName][cacheIndex] = response.data;
                            }, function(error) {
                            });
                            }
                        }
                        var documentClickBind = function(event) {
                            if(event.target.id != ('etbcity-id' + $scope.inputId)){
                                 $scope.$apply(function() {
                                    $scope.config['currentPanelName'] = '';
                                });
                            }
                        };
                        $document.bind('click', documentClickBind);

                        $scope.$on("$destroy",
                            function() {
                                $document.unbind("click");
                            });
                    };
                }
            };
        };
    return ['$compile','$document','ErcCityStore', directive];
});
