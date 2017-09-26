var app=angular.module('myapp',['ngMessages','myapp2']);
var app2=angular.module('myapp2',[]);
app2.constant('API','dvfv00');
app.controller('MyFormController',function($scope){
    $scope.x=100;
    $scope.arr=[3,8,1,7,5];
})
//my-directive
app.directive('myDirective',function(){
    return {
        template:`
        <div>
            <span>Hii  My Directive {{myNum}}</span><button ng-click="myclick()">Click Me</button>

        </div>
        `,
        restrict:'E', //A or E or AE
        replace:true,
        scope:{
            myNum:'='
        },
        controller:function($scope){
            $scope.myclick=function(){
                alert($scope.myNum)
            }
        }
    }
})

app.directive('myComponent',function(){
    return {
        templateUrl:'directives/mycomponent.html',
        restrict:'E', //A or E or AE
        replace:true,
        scope:{
            myNum:'='
        },
        controller:function($scope){
            $scope.myclick=function(){
                alert($scope.myNum)
            }
        }
    }
})