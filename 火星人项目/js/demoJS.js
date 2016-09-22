/**
 * Created by hxsd on 2016/8/16.
 */
var myapp = angular.module("myapp", ['ionic']);

//配置路由

myapp.config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    /* $ionicConfigProvider.backButton.text("");
     $ionicConfigProvider.backButton.previousTitleText("");*/
    $stateProvider.state("denglu",{
        url:"/denglu",
        templateUrl:"views/denglu/denglu.html",
        controller:"dengluCtrl"
    });
    $stateProvider.state("loging",{
        url:"/loging",
        templateUrl:"views/loging/loging.html",
        controller:"logingCtrl"
    });
    $stateProvider.state("forgetpd",{
        url:"/forgetpd",
        templateUrl:"views/forgetpd/forgetpd.html",
        controller:"forgetpdCtrl"
    });
    $stateProvider.state("workbox",{
        url:"/workbox",
        templateUrl:"views/workbox/workbox.html",
        controller:"workboxCtrl"
    });
    $stateProvider.state("worksearch",{
        url:"/worksearch",
        templateUrl:"views/worksearch/worksearch.html",
        controller:"worksearchCtrl"
    });
    $stateProvider.state("workoperadz",{
        url:"/workoperadz",
        templateUrl:"views/workoperadz/workoperadz.html",
        controller:"workoperadzCtrl"
    });
    $stateProvider.state("Cgtopvideo",{
        url:"/Cgtopvideo",
        templateUrl:"views/Cgtopvideo/Cgtopvideo.html",
        controller:"CgtopvideoCtrl"
    });
    $stateProvider.state("evaluate",{
        url:"/evaluate",
        templateUrl:"views/evaluate/evaluate.html",
        controller:"evaluateCtrl"
    });
    $stateProvider.state("Settings",{
        url:"/Settings",
        templateUrl:"views/Settings/Settings.html",
        controller:"SettingsCtrl"
    });
    $stateProvider.state("password",{
        url:"/password",
        templateUrl:"views/password/password.html",
        controller:"passwordCtrl"
    });
    $stateProvider.state("grade",{
        url:"/grade",
        templateUrl:"views/grade/grade.html",
        controller:"gradeCtrl"
    });
    $stateProvider.state("score",{
        url:"/score",
        templateUrl:"views/score/score.html",
        controller:"scoreCtrl"
    });
    $stateProvider.state("schooldetails",{
        url:"/schooldetails",
        templateUrl:"views/schooldetails/schooldetails.html",
        controller:"schooldetailsCtrl"
    });
    $stateProvider.state("activedetail",{
        url:"/activedetail",
        templateUrl:"views/activedetail/activedetail.html",
        controller:"activedetailCtrl"
    });
    $stateProvider.state("videoplay",{
        url:"/videoplay",
        templateUrl:"views/videoplay/videoplay.html",
        controller:"videoplayCtrl"
    });
    $stateProvider.state("zhiyeScore",{
        url:"/zhiyeScore",
        templateUrl:"views/zhiyeScore/zhiyeScore.html",
        controller:"zhiyeScoreCtrl"
    });




    $stateProvider.state("tab", {
        url: "/tab",
        abstract: true,//抽象的
        templateUrl: "views/tab/tab.html"
    });

    $stateProvider.state("tab.home", {
        url: "/home",
        views: {
            "tab-home": {
                templateUrl: "views/home/home.html",
                controller: "homeCtrl"
            }
        }
    });


    $stateProvider.state("tab.socCGTop", {
        url: "/socCGTop",
        views: {
            "tab-route": {
                templateUrl: "views/socCGTop/socCGTop.html",
                controller: "socCGTopCtrl"
            }
        }
    });
    $stateProvider.state("tab.activenews", {
        url: "/activenews",
        views: {
            "tab-route": {
                templateUrl: "views/activenews/activenews.html",
                controller: "activenewsCtrl"
            }
        }
    });
    $stateProvider.state("tab.schoolNotice", {
        url: "/schoolNotice",
        views: {
            "tab-route": {
                templateUrl: "views/schoolNotice/schoolNotice.html",
                controller: "schoolNoticeCtrl"
            }
        }
    });
    $stateProvider.state("tab.email", {
        url: "/email",
        views: {
            "tab-route": {
                templateUrl: "views/email/email.html",
                controller: "emailCtrl"
            }
        }
    });


    $stateProvider.state("tab.aide", {
        url: "/aide",
        views: {
            "tab-note": {
                templateUrl: "views/aide/aide.html",
                controller: "aideCtrl"
            }
        }
    });




    $urlRouterProvider.otherwise("/denglu");

});