"use strict";

(function(angular){
    // each component has module
    var app = angular.module('myApp');

    // First declare the component (the name must be JS camal case)

    app.component('postsList', {
        templateUrl: 'posts-list/posts-list.html',
        controller: PostsListController,
        controllerAs: 'vm',
        binding: {
            posts: '<'
        }
    })

    // Second we write the component controller
    function PostsListController(mainSvc) {
        let vm = this;
        mainSvc.getPosts().then((response) => {
            vm.posts = response.data;
        })

    }

})(window.angular);
