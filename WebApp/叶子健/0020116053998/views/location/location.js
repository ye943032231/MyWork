/**
 * Created by hxsd on 2016/8/6.
 */
angular.module("myapp").controller("locationCtrl",function($scope,$http){
    // 创建一些scope变量
    $scope.page = 0;    // 用来保存当前请求的页码
    $scope.total = 1;   // 用来保存总页数
    $scope.restaurants = [];

    // 加载餐馆的方法
    $scope.getRestaurants = function () {
        $scope.page++;  // 页数++
        //var url = "https://ionic-in-action-api.herokuapp.com/restaurants?age=" + $scope.page;
        var url = "data/location.json";
        $http.get(url)
            .success(function (response) {
                angular.forEach(response.restaurants, function (restaurant) {
                    $scope.restaurants.push(restaurant);
                });

                // 更新总页面数，基于API发送的值
                $scope.total = response.totalPages; // 示例数据中为30页
            })
            .finally(function () {
                // 广播事件，告诉无限滚动组件everything is done
                $scope.$broadcast("scroll.infiniteScrollComplete");
            });
    };

    $scope.getRestaurants();    // 加载时，从API加载第一页餐馆数据
});