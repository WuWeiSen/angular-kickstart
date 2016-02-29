(function(window, angular) {

    angular.module('angularKickstart')

    .controller('HelloController', function($scope, AppModel, AddressModel) {
        $scope.getUser = function(){
            AppModel.getUser().then(function(response){
                alert(response.data.user.name);
            },function(err){
                alert(err);
            });
        }
        $scope.updateAdderss = function(){
            AddressModel.update({ id: 1 }, {name: 'wws'}, function(response){
                alert(response.address.username);
            },function(err){
                alert(err);
            });
        }
    })

})(window, window.angular);
