'use strict';


angular.module('miAppApp')
.service('servicioTareas', function(){
  var tareas = [];

  var addTarea = function(tarea){
    console.log('addTarea ', tarea);
    tareas.push(tarea);
  }

  var getTareas = function(){
    console.log('tareas.length ', tareas.length);
    return tareas;
  }

  var getTarea = function(index){
    return tareas[index];
  }

  return {
    addTarea: addTarea,
    getTareas: getTareas,
    getTarea: getTarea
  }

})
.controller('TareasCtrl', function($scope, $location, $firebase, servicioTareas){

    var ref = new Firebase('https://mantisapp.firebaseio.com/tareas');
    var sync = $firebase(ref);
    $scope.tareas = sync.$asArray();
    $scope.activo = true;

    $scope.addTarea = function(text){
      var tarea = {text: text, hecho: false};
      $scope.tareas.$add(tarea);
      servicioTareas.addTarea(tarea);
      $scope.newTareaText = '';
    };

    $scope.editar = function(index){
      console.log('getTareas '+servicioTareas.getTareas());
      $location.path('/tareas/'+index);
    }

});
