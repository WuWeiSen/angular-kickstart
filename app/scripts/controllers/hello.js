(function(window, angular) {

    angular.module('angularKickstart')

    .controller('HelloController', function($scope, AppModel, AddressModel, SweetAlert) {
        $scope.getUser = function(){
            AppModel.getUser().then(function(response){
                SweetAlert.swal("姓名 ：" + response.data.user.name);
            },function(err){
                SweetAlert.swal("请先启动MOCK");
            });
        }
        $scope.updateAdderss = function(){
            AddressModel.update({ id: 1 }, {name: 'wws'}, function(response){
                SweetAlert.swal("地址 ：" + response.address.address);
            },function(err){
                SweetAlert.swal("请先启动MOCK");
            });
        }
        var promise = AppModel.testMock();
        promise.then(function(data){
            SweetAlert.swal(data);
        }, function(data) {
            SweetAlert.swal(data);
        })
    })

})(window, window.angular);
