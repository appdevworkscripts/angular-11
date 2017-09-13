var app = angular.module("myapp", []);
app.controller("AbcController", function ($scope, MAX_VAL, sum, MyMathfactory) {
    console.log(MAX_VAL)
    console.log(sum(7, 8))
    console.log(MyMathfactory.cube(5))
    $scope.x = 100 / 3;
    $scope.y = 50000 / 6;
    $scope.mytext = "hElLo";
    $scope.mydate = new Date();


    $scope.students = [
        { name: "Pqrrrr", roll: 1223 },
        { name: "Abchdskjcksd", roll: 646 },
        { name: "Mdhsdgvgd", roll: 362 },
        { name: "Shfd", roll: 767 },
        { name: "Pchsdbv", roll: 1245 },
        { name: "Bfchdsg", roll: 976 }
    ]
})

app.filter('titlecase', function () {
    return function (input) {
        return input[0].toUpperCase() + input.slice(1).toLowerCase();
    }
});

app.constant("MAX_VAL", 200000);

app.value('sum', function (a, b) {
    return a + b;
})



app.factory('MyMathfactory', function () {
    return {
        square: function (a) {
            return a * a;
        },
        cube: function (a) {
            return a * a * a;
        }
    }
})

app.service('MyMathservice', function () {
    
    this.square = function (a) {
        return a * a;
    }
    this.cube = function (a) {
        return a * a * a;
    }

})
