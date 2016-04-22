(function() {
  'use strict';

  angular
    .module('todo')
    .factory('listStore', listStore);

  var todos = [];

  var localStorageKey = "todosList";
  if (!localStorage.getItem(localStorageKey)){
    console.log("Updating Storage");
    localStorage.setItem(localStorageKey, angular.toJson(todos));
  }

  function listStore (){
    console.log('inside factory');
    return {
      data: JSON.parse(localStorage.getItem(localStorageKey)),
      save: saveToDo
    };
  }

  function saveToDo (todos){
    console.log('should save', todos);
    localStorage.setItem(localStorageKey, angular.toJson(todos));
    // will also need something later to store if items have been completed or not
  }

}());
