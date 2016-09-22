/**
 * Created by hxsd on 2016/8/6.
 */
angular.module("myapp").controller("SettingsCtrl",function($scope){
    $scope.alertOff = false;
    $scope.topOff=function(){
        $scope.alertOff = !$scope.alertOff
    };
    $scope.user = false;
    $scope.escOff=function(){
        $scope.user = !$scope.user
    }
});
