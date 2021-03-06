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
        this.newToDo = {
          name: "",
          complete: false,
          editing: false
        };
      } else {
        console.log("new todo not saved");
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

    this.showAll = function showAll() {
      this.buttonFilter = false;
    };

    this.showActive = function showActive() {
      this.buttonFilter = {complete: false};
    };

    this.showCompleted = function showCompleted() {
      this.buttonFilter = {complete: true};
    };

    this.clearCompleted = function clearCompleted(){
      var i;
      for (i = this.todos.length - 1; i >= 0; i -= 1) {
        if (this.todos[i].complete) {
        this.todos.splice(i, 1);
        listStore.save(this.todos);
        }
      }
    };

    this.itemsLeft = function itemsLeft(){
      var items = 0;
      this.todos.forEach( function itemsCount (todo){
        if(!todo.complete){
          items ++;
        }
      });
        return items;
    };
  }
}());
