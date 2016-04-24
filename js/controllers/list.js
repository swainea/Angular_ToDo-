(function() {
  'use strict';

  angular
    .module('todo')
    .controller('ListController', ListController);

  ListController.$inject = ['listStore'];

  function ListController(listStore) {
    // console.log("listStore is ", listStore);

    this.todos = listStore.data;

    this.newToDo = {
      name: "",
      complete: false,
      editing: false
    };

    this.save = function saveToDo(form){
      if (form.$valid){
        this.todos.push(this.newToDo);
        // console.log("newTodo=" , this.newToDo);
        // console.log("all todos", this.todos);
        listStore.save(this.todos);
        this.newToDo = {};
      } else {
        // error alert if invalid info
      }

    };

    this.editToDo = function editToDo(event, todo){
      if(event.keyCode === 13){
        todo.editing = false;
      }
    };

    this.deleteToDo = function deleteToDo (todo){
      var index = this.todos.indexOf(todo);
      this.todos.splice(index, 1);
      listStore.save(this.todos);
    };

    this.allActive = true;
    this.activeActive = false;
    this.activeCompleted= false;

    this.show = function showAll() {
      this.allActive = true;
      this.activeActive = false;
      this.activeCompleted = false;
      this.buttonFilter = false;
    };

    this.showActive = function showActive() {
      this.allActive = false;
      this.activeActive = true;
      this.activeCompleted = false;
      this.buttonFilter = {complete: false};
    };

    this.showCompleted = function showCompleted() {
      this.allActive = false;
      this.activeActive = false;
      this.activeCompleted = true;
      this.buttonFilter = {complete: true};
    };
  }

  // this.clearComplete = function clearComplete (todo){
  //   var index = this.todos.indexOf(todo);
  //   this.todos.splice(index, 1);
  //   listStore.save(this.todos);
  // };
}());
