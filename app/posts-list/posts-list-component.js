"use strict";

(function(){
    var app = angular.module('postsListModule', []);

    // first we write the component controller
    function PostsListController(mainSvc) {
        var vm = this;
        mainSvc.getPosts().then((response) => {
            vm.posts = response.data;
        })

    }

    // Second declare the component (the name must be JS camal case)

    app.component('postsList', {
        templateUrl: 'posts-list/posts-list.html',
        controller: PostsListController,
        controllerAs: 'vm'
    })

})();
