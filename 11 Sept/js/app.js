//npm install -g http-server

const app=angular.module('myapp',['ngRoute']);
app.config(function($routeProvider,$locationProvider){
    $routeProvider.when('/',{
        templateUrl:'views/home.html'
    });
    $routeProvider.when('/aboutus',{
        templateUrl:'views/aboutus.html'
    });
    $routeProvider.when('/contact',{
        templateUrl:'views/contactus.html',
        controller:'ContactController'
    });
    $routeProvider.when('/user/:username',{
        templateUrl:'views/user.html',
        controller:'UserController'
    });
    $routeProvider.when('/404',{
        templateUrl:'views/404.html'
    });
    $routeProvider.otherwise({
        redirectTo:'/404'
    });
    $locationProvider.html5Mode(true);
})


app.controller('ContactController',function($scope){
    console.log('Contact Controller called')
    $scope.submitContact=function(){
        console.log($scope.contact)
    }
});

app.controller('UserController',function($routeParams,$scope){
    console.log($routeParams.username);
    $scope.username=$routeParams.username;
});