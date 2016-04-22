(function() {
  'use strict';

  angular
    .module('todo')
    .factory('listStore', listStore);

  var todos = [];

  var localStorageKey = "todosList";
  if (!localStorage.getItem(localStorageKey)){
    console.log("Updating Storage");
    localStorage.setItem(localStorageKey, JSON.stringify(todos));
  }

  function ListController (listStore){
    console.log('inside factory');
    return {
      data: JSON.parse(localStorage.getItem(localStorageKey)),
      save: saveToDos
    };
  }

}());
