"use strict";

var app = angular.module("myApp", []);

app.controller("mainCtrl", function () {
    this.hello = "world";

    this.fruits = ["Apple", "orange", "grapes"];

    this.alertMe = function() {
        alert("something went wrong !!!")
    };


});