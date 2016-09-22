/**
 * Created by hxsd on 2016/8/6.
 */
angular.module("myapp").controller("homeCtrl",function($scope,$http,$ionicScrollDelegate){
    $scope.slideChanged = function(index){
        console.log("index:" + index);
    };

    // 作为一个原则：数据绑定的时候，尽可能地绑定到对象上
    $scope.data = {
        page:0
    };
    $scope.pagerClick = function(index){
        $scope.data.page = index;
    };

    $scope.products = [
        {title:"维也纳酒店",desc:"仅168元！价值388元的维也纳3好酒店广州会展中心赤岗路店标准单人房入住1晚。",imgsrc:"images/jd2.jpg"},
        {title:"速8酒店",desc:"仅208元！最高价值338元的速8酒店广州三元里大道店入住1晚，标准单人房/标准双人房2选1。",imgsrc:"images/jd1.jpg"},
        {title:"迎商酒店",desc:"仅68元！最高价值238元的迎商酒店广州西门口地铁站店入住3小时，豪华双床房/豪华大床房2选1。",imgsrc:"images/jd3.jpg"},
        {title:"宝湾酒店",desc:"仅238元！最高价值308元的广州宝湾酒店上下九长寿路地铁站店入住1晚，精品双床房/精品大床房2选1。",imgsrc:"images/jd5.jpg"},
        {title:"时尚公寓",desc:"仅128元！最高价值188元的广州白云时尚公寓新白云机场店入住1晚，豪华双人房/豪华单人房2选1，含早餐、含接站服务。",imgsrc:"images/jd4.jpg"}
    ];


    // 下拉刷新
    $scope.refresh = function(){
        // 向服务器端请求新的数据，替换掉现有的数据
        $http.get("data/data.json").success(function(data){
            $scope.products = data;
        }).finally(function(){
            // 通知框架，刷新结束，停止显示图标
            $scope.$broadcast("scroll.refreshComplete");
        });
    };

    // 无限滚动
    $scope.loadMore = function(){
        // 向服务器端请求一页新的数据，追加到现有数据之后
        $http.get("data/data.json").success(function(data){
            // 使用Array的原型方法push; 等价于  $scope.products.push(data)
            Array.prototype.push.apply($scope.products,data);

        }).finally(function(){
            // 通知框架，加载结束，停止显示图标
            $scope.$broadcast("scroll.infiniteScrollComplete");
        });
    };

    $scope.toTop = function(){
        // 将窗口滚动到顶部
        $ionicScrollDelegate.scrollTop(true);
    };
});
