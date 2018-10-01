// posts-list component

(function () {
    "use strict";
    // each component has module call
    var app = angular.module('myApp');

    // First declare the component (the name must be JS camal case)

    app.component('postsList', {
        templateUrl: 'posts-list/posts-list.html',
        controller: PostsListController,
        controllerAs: 'vm',
        bindings: {
            posts: '<'
        }
    })

    // Second we write the component controller
    function PostsListController(mainSvc) {
        var vm = this;
        // mainSvc.getPosts().then(function (response) {
        //     vm.posts = response.data;
        // })

    }

})();
