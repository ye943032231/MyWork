/**
 * Created by hxsd on 2016/7/28.
 */
//声明另一个模块，专门管理各种过滤器
var myfilter = angular.module("customFilter",[]);

//自定义分页过滤器
myfilter.filter("range",function(){
   /*
   参数：products - 要被过滤的商品数组
        currentPage - 要显示的页码
        pageSize - 页面大小
   */
    return function (products,currentPage,pageSize){
        //对传入的参数进行有效性验证
        if(angular.isArray(products) && angular.isNumber(currentPage) && angular.isNumber(pageSize)){
            //计算当前页面显示商品的起始索引值
            var startIndex = (currentPage - 1 ) * pageSize;

            //如果起始索引超过了商品数量，则返回空数组
            if(startIndex >= products.length){
                return [];
            }
            else{
                //截取一页的商品信息返回
                return products.splice(startIndex,pageSize);
            }
        }
        else{
            //如果传入的参数有误，则不对原数据做任何处理
            return products;
        }


    }
});

//自定义计算分页按钮的过滤器 =》 起到转换的作用
myfilter.filter("navCount",function(){
   //参数1：商品数组；参数2：页面大小；
    return function (products,pageSize){
        if(angular.isArray(products) && angular.isNumber(pageSize)){
            var navArr = [];

            //计算导航按钮的数组大小
            var navTotal = Math.ceil(products.length / pageSize);
            for(var i=0; i<navTotal; i++){
                navArr.push(i+1);
            }

            return navArr;
        }
        else{
            return products;
        }
    }
});
