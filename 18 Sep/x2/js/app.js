var app=angular.module('myapp',['ngMessages']);
app.controller('MyFormController',function($scope){
    $scope.submitForm=function(){
        console.log($scope.user);
    }
})