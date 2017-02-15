var MoviesController = function MoviesController() {
    var self = this;
    self.favorites = [{
        title: 'The Shawshank Redemption',
        year: '1994',
        popular: true
    }, {
        title: 'Inception',
        year: '2010',
        popular: false
    }, {
        title: 'The Matrix',
        year: '1999',
        popular: true
    }, {
        title: 'Saving Private Ryan',
        year: '1998',
        popular: true
    }, {
        title: 'The Aviator',
        year: '2004',
        popular: false
    }];
};

angular
    .module('app')
    .controller('MoviesController', MoviesController);
