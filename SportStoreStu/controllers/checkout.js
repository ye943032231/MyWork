/**
 * Created by hxsd on 2016/7/29.
 */
angular.module("myapp").controller("cartSummaryController",function($scope,shopCart){
    $scope.cartData = shopCart.findAll();  //拿到购物车中的购物筐数组

    //计算购物车中所有商品的总金额
    $scope.totalPlay = function(){
        var total = 0;

        for(var i=0;i<$scope.cartData.length;i++){
            total += $scope.cartData[i].product.price * $scope.cartData[i].number;
        }

        return total;
    }

    //从购物车中删除指定商品
    $scope.removeFromCart = function(item){
        shopCart.remove(item.product.name);//根据商品名称从购物车中删除
    }
});