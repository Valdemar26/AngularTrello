angular.module('app')
    .factory('listFactory', function () {
        var saved = localStorage.getItem('lists');
        var lists = (localStorage.getItem('lists') !== null)
            ? JSON.parse(saved)
            : [ {id: 1, listName: 'ToDo'}, {id: 2, listName: 'Doing'}, {id: 3, listName: 'Done'} ];
        localStorage.setItem('lists', JSON.stringify(lists));

        var service = {};

        service.getLists = function () {
            return lists;
        };

        service.addList = function (listName) {
            lists.push({
                id: _.uniqueId('list_'),
                listName: listName
            });
            localStorage.setItem('lists', JSON.stringify(lists));
        };

        service.removeList = function (list) {
            _.pull(lists, list);
            localStorage.setItem('lists', JSON.stringify(lists));
        };

        return service;

    });
































