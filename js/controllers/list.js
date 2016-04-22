(function() {
  'use strict';

  angular
    .module('todo')
    .controller('ListController', ListController);

  ListController.$inject = ['listStore'];

  function ListController (listStore){
    console.log("listStore is ", listStore);
  }

    this.todos = listStore.data; 

}());
