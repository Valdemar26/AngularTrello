angular.module('app')
    .controller('listsCtrl', function (listFactory) {

        this.lists = listFactory.getLists();

        /* call method from factories. All manipulation with data in factories */
        this.addList = function () {
            listFactory.addList(this.listName);
            this.listName = ''; // clear input after added data
        };

    });





























