/**
 * Created by hxsd on 2016/8/20.
 */
angular.module("myapp").controller("scoreCtrl", function ($scope) {
    $scope.alertOff = false;
    $scope.topOff=function(){
        $scope.alertOff = !$scope.alertOff
    };
    $scope.user = false;
    $scope.escOff=function(){
        $scope.user = !$scope.user
    }
});