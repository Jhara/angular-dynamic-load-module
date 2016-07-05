'use strict';

var miApp = angular.module('miAppApp')

miApp.factory('miFabrica', function(){
    var servicio = {
      objeto: {mensaje: 'Saludos desde la fabrica!'},
      msjInicial : function(){ 
          servicio.objeto['mensaje'] = 'Saludos desde la fabrica!';
      }, 
      msjNuevo : function(msj){
          servicio.objeto.mensaje = msj;
      }
    };
 return servicio;
});

var controladorUno = miApp.controller('controladorUno', function($scope, miFabrica){
    $scope.nuevo = function(){
        miFabrica.msjNuevo($scope.nuevoMensaje);
    };
       
  $scope.dato = miFabrica.objeto
});

var controladorUno = miApp.controller('controladorDos', function($scope, miFabrica){
    $scope.nuevo = function(){
        miFabrica.msjNuevo($scope.nuevoMensaje);
    };
  $scope.dato = miFabrica.objeto
});

var controladorTres = miApp.controller('controladorTres', function($scope, miFabrica){
    $scope.reset = function(){ miFabrica.msjInicial(); }; 
});

