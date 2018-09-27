"use strict";

// the app module
var app = angular.module("myApp", []);
// main controller
app.controller("mainCtrl", function ($http) {

    let vm = this;

    this.hello = "world";

    this.fruits = ["Apple", "orange", "grape"];

    this.alertMe = function() {
        alert("something went wrong !!!")
    };

    $http.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
        vm.posts = response.data;
    })

});
// custom filter
app.filter('makePlural', function(){
    return function(input) {
        return input + "s";
    }
});