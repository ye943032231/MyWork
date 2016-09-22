/**
 * Created by hxsd on 2016/8/20.
 */
angular.module("myapp").controller("activedetailCtrl",function($scope){
    $scope.alertOff = false;
    $scope.topOff=function(){
        $scope.alertOff = !$scope.alertOff
    }
});