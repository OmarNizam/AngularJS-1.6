"use strict";

// the app module
var app = angular.module("myApp", []);

// main controller
app.controller("mainCtrl", function (mainSvc) {

    let vm = this;

    this.hello = "world";

    this.fruits = ["Apple", "orange", "grape"];

    this.alertMe = function() {
        alert("something went wrong !!!")
    };

// http get call for get data from live server
    // $http.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
    //     vm.posts = response.data;
    // })

    mainSvc.getPosts().then((response) => {
                    vm.posts = response.data;
                })

});

// custom filter

app.filter('makePlural', function(){
    return function(input) {
        return input + "s";
    }
});

//services and factories

// app.service('mainSvc', function($http) {
//     this.getPosts = function() {
//             return $http.get("https://jsonplaceholder.typicode.com/posts");
//         } 
// });

/** You can use factory insted of service and it will return an Object
    * We can refactory the service to factory
    *  so this code is istead the service & It does the same
 **/
// Factory

app.factory('mainSvc', function($http) {
    var getPosts = function() {
        return $http.get("https://jsonplaceholder.typicode.com/posts");
    };
    return {
        getPosts: getPosts
    }
})
