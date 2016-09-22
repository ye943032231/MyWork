/**
 * Created by hxsd on 2016/7/28.
 */
//注册一个控制器，负责商品数据绑定
angular.module("myapp").constant("activeClass","btn-primary") //声明一个常量，需要依赖注入到控制器
    .controller("productListController",function($scope,activeClass,shopCart){
       //声明一个变量，保存当前用户选中的商品类别
        $scope.selectedCategory = null;

        //用户点击商品类别响应的函数
        $scope.selectCategory = function(category){
            //存储当前选中的商品类别
            $scope.selectedCategory = category;
        };

        //过滤函数
        $scope.showByCategory = function(product){
            //要么用户选择的是首页，显示所有商品
            //要么用户选择的是某个类别，显示该类别的商品
            return $scope.selectedCategory == null || $scope.selectedCategory == product.category;
        }
        //点击让该button高亮
        $scope.getClass = function(category){
            return category == $scope.selectedCategory ? activeClass : "";
        };

        //选择页面 分页
        $scope.selectPage = function(page){
          $scope.currentPage = page ;
        };

        //高亮分页按钮
        $scope.getActiveNavClass = function(page){
            return page == $scope.currentPage ? activeClass : "";
        }

        //添加购物车响应的函数
        $scope.addToCart = function(product){
          shopCart.add(product); //将商品加入到购物车
        };
});