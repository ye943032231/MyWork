/**
 * Created by hxsd on 2016/7/29.
 */
//创建一个新的模块
var mycart = angular.module("mycart",[]);

//在该模块中，创建一个单例的服务对象-购物车对象
//使用angular的factory（）方法
mycart.factory("shopCart",function(){
   //声明一个数组 - 相当于购物车中的购物筐
    var cart = [];

    //声明一个购物车对象
    return  {
      //添加商品到购物车
        add:function(product){
            // 当添加商品时，先看看购物车中有没有该商品
            var flag = false;
            for(var index=0;index<cart.length;index++){
                if(cart[index].product.name == product.name){
                    flag = true;
                    // 这时说明购物车中原来已经有了该商品，我们要做的是将该商品的数量+1
                    cart[index].number += 1;
                    break;
                }
            }

            // 如果购物车中原来没有该商品
            if(!flag){
                var item = {product:product, number:1}; // 构造一个item项
                cart.push(item);        // 将该item放入购物车
            }
        },

        //从购物车中删除指定商品
        remove:function(name){
            for(var index=0;index<cart.length;index++){
                if(cart[index].product.name == name){
                    // 说明找到了要删除的商品
                    cart.splice(index,1);
                    break;
                }
            }
        },

        // 查看购物车
        findAll:function(){
            return cart;
        },

        // 清空购物车
        clear:function(){
            cart.length = 0;
        }
    };
});

//注册一个控制器 - 依赖注入购物车对象
mycart.controller("cartController",function($scope,shopCart){
   var cartData = shopCart.findAll();  // 拿到购物筐

    //方法一：计算购物车中商品的总数量
    $scope.totalNumber = function(){
        var total = 0 ;
        for(var i=0; i<cartData.length; i++){
            total += cartData[i].number;
        }
        return total;
    };

    //方法二：计算购物车中商品的总金额
    $scope.totalMoney = function(){
        var total = 0 ;

        for(var i=0; i<cartData.length; i++){
            total += cartData[i].number*cartData[i].product.price;
        }

        return total;
    }
});