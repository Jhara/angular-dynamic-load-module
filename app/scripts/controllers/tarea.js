'use strict';


angular.module('miAppApp')
.controller('TareaCtrl', function($scope, $routeParams, servicioTareas){
  console.log('$routeParams.indexTarea '+$routeParams.indexTarea);
  $scope.tarea = servicioTareas.getTarea($routeParams.indexTarea);

  $scope.tareas = servicioTareas.getTareas();


});
