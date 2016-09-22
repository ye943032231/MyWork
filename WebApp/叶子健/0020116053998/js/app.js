/*** Created by hxsd on 2016/8/4.*/
var myapp = angular.module("myapp",["ionic"]);

//配置路由
myapp.config(function($stateProvider,$urlRouterProvider,$ionicConfigProvider){
    $ionicConfigProvider.backButton.text("");
    $ionicConfigProvider.backButton.previousTitleText("");
    $stateProvider.state("tabs",{
        url:"/tabs",
        abstract:true, //抽象的
        templateUrl:"views/tabs/tabs.html",
        controller:"homeCtrl"
    });
    $stateProvider.state("tabs.home",{
        url:"/home",
        views:{"tab-home":{templateUrl:"views/home/home.html",controller:"homeCtrl"}}
    });
    $stateProvider.state("tabs.about",{
        url:"/about",
        views:{"tab-about":{templateUrl:"views/about/about.html"}}
    });
    $stateProvider.state("tabs.location",{
        url:"/location",
        views:{"tab-location":{templateUrl:"views/location/location.html",controller:"locationCtrl"}}
    });
    $stateProvider.state("tabs.person",{
        url:"/person",
        views:{"tab-person":{templateUrl:"views/person/person.html"}}
    });
    $stateProvider.state("tabs.weather",{
        url:"/weather",
        views:{"tab-weather":{templateUrl:"views/weather/weather.html",controller:"weatherCtrl"}}
    });

    $urlRouterProvider.otherwise("/tabs/home");
});