var app=angular.module('myapp',[]);
app.controller('MyFormController',function($scope){
    $scope.submitForm=function(){
        console.log($scope.user);
    }
})