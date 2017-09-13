const app=angular.module('myapp',[]);
app.controller('AController',function($scope,$http){
    var refresh=function(){
        $http({
            url:'https://zenways-contact.herokuapp.com/api/contacts',
            headers:{
                key:'ZENWAYS01SAGAR'
            }
        }).then(function(response){
            console.log(response.data);
            $scope.contacts=response.data.contacts;
        },function(response){
            console.log(response);
        });
    }
    refresh();

    $scope.submitForm=function(){
        $http({
            url:'https://zenways-contact.herokuapp.com/api/contact',
            headers:{
                key:'ZENWAYS01SAGAR'
            },
            data:$scope.contact,
            method:'POST'
        }).then(function(response){
            refresh();
            $scope.contact={}
            console.log(response);
            alert('Successfully Added Contact')
        },function(response){
            console.log(response);
            alert('Something went wrong');
        });
    }
});