(function() {
  'use strict';

  angular
    .module('todo')
    .controller('ListController', ListController);

  ListController.$inject = ['listStore'];

  function ListController(listStore) {
    console.log("listStore is ", listStore);

    this.todos = listStore.data;

    this.newToDo = {
      name: "",
      complete: false,
      editing: false
    };

    this.save = function saveToDo(form){
      if (form.$valid){
        this.todos.push(this.newToDo);
        console.log("newTodo=" , this.newToDo);
        console.log("all todos", this.todos);
        listStore.save(this.todos);
        this.newToDo = {};
      } else {
        // error alert if invalid info
      }

    };
  }

}());
