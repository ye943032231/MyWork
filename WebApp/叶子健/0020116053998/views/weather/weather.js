/**
 * Created by hxsd on 2016/8/3.
 */
angular.module("myapp").controller("weatherCtrl", function ($scope, $http, $ionicLoading) {

    var url = "http://wthrcdn.etouch.cn/weather_mini?city=广州";

    $ionicLoading.show();  //显示延迟加载器

    var oDate=new Date();
    $scope.now_month=oDate.getMonth()+1;

    $http.get(url).success(function (data) {
        $scope.weather = data;
        $ionicLoading.hide(); //数据请求成功 隐藏动画
    }).error(function () {
        $ionicLoading.show({
            template: "请检查您的网络信号~",
            duration: 3000
        });
    });
});