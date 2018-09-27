"use strict";

var app = angular.module("myApp", []);

app.controller("mainCtrl", function () {
    this.hello = "world";

    this.fruits = ["Apple", "orange", "grape"];

    this.alertMe = function() {
        alert("something went wrong !!!")
    };


});


// custom filter
app.filter('makePlural', function(){
    return function(input) {
        return input + "s";
    }
});