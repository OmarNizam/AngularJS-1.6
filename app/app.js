"use strict";

// the app module
(function(){
    var app = angular.module("myApp", ['postsListModule', 'ui.router']);

    app.config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'home.html'
            })
            .state('posts', {
                url: '/posts',
                template: '<posts-list></posts-list>'
            })
    })

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

})();
