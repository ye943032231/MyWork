/**
 * Created by hxsd on 2016/8/20.
 */
angular.module("myapp").controller("workoperadzCtrl", function ($scope) {
    $scope.yes=false;
    $scope.clikeMe=function(){
        $scope.dianzan = "images/点赞-点亮状态@2x.png";
        $scope.yes=true;
    };
    $scope.dianzan = "images/点赞-未点.png";
    $scope.sd=false;
    $scope.pic=function(){
        $scope.sd=!$scope.sd
    };
});