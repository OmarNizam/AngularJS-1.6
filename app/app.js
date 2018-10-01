/*eslint no-alert: "error"*/

// the app module
(function () {
    "use strict";
    // set the module
    var app = angular.module("myApp", ['ui.router']);

    app.config(function ($locationProvider, $stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'home.html'
            })
            .state('posts', {
                url: '/posts',
                template: '<ui-view></ui-view>'
            })
            .state('posts.incomplete', {
                url: '/incomplete',
                template: '<posts-list posts="vm.incompletePosts"></posts-list>',
                controllerAs: 'vm'
            })
            .state('posts.complete', {
                url: '/complete',
                template: '<posts-list posts="vm.completePosts"></posts-list>',
                controllerAs: 'vm'
            });

        // use the HTML5 History API
        $locationProvider.html5Mode(true);
    })

    // main controller
    app.controller("mainCtrl", function (mainSvc) {
        var vm = this;

        this.hello = "world";

        this.fruits = ["Apple", "orange", "grape"];

        this.alertMe = function () {
            alert("something went wrong !!!");

            mainSvc
                .getPosts()
                .then(
                    function (
                        response
                    ) {
                        vm.incompletePosts = response.data.splice(
                            0,
                            50
                        );
                        vm.completePosts =
                            response.data;
                    }
                );
        };

        // http get call for get data from live server
        // $http.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
        //     vm.posts = response.data;
        // })
    });

    // custom filter

    app.filter('makePlural', function () {
        return function (input) {
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

    app.factory('mainSvc', function ($http) {
        var getPosts = function () {
            return $http.get("https://jsonplaceholder.typicode.com/posts");
        };
        return {
            getPosts: getPosts
        }
    })

})();
