angular.module('app')
    .factory('cardFactory', function () {
        var saved = localStorage.getItem('cards');
        var cards = (localStorage.getItem('cards') !== null)
            ? JSON.parse(saved)
            : [ {id: 1, description: 'Fix bug in player', list_id: 1},
                {id: 2, description: 'Add feature with D3', list_id: 2},
                {id: 3, description: 'Learn AngularJS', list_id: 3} ];

        localStorage.setItem('cards', JSON.stringify(cards));

        var service = {};

        service.getCards = function (list) {
            return _.filter(cards, { list_id: list.id });
        };

        service.createCard = function (list, cardDescription) {
          cards.push({
              id: _.uniqueId('card_'),
              description: cardDescription,
              list_id: list.id
          });
          localStorage.setItem('cards', JSON.stringify(cards));
        };

        service.deleteCard = function (card) {
            _.pull(cards, card);
            localStorage.setItem('cards', JSON.stringify(cards));
        };

        service.updateCard = function (updatingCard) {
            var card = _.findWhere(cards, { id: updatingCard.id });
            card.description = updatingCard.description;
            card.list_id = updatingCard.list_id;
            localStorage.setItem('cards', JSON.stringify(cards));
        };

        return service;

    });











































