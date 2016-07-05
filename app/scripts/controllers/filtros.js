(function (){
  'use strict';


  angular.module('miAppApp')
  .filter('telAnt', function(){
    return function(telefono){
      return '(0571)-'+telefono;
    };
  })
  .controller('mockCtrl', mockCtrl)
  .controller('EmpleadosCtrl', EmpleadosCtrl);

  function EmpleadosCtrl(){
    var vm = this;

    vm.empleados = [
      {nombre:'Ana', primerApellido:'Guzman', segundoApellido:"Guzman", primerDia:new Date(),
      salario: 12000, telefono:5690898, bono:1.45},
      {nombre:'Adrian', primerApellido:'Romero', segundoApellido:"Perez", primerDia:new Date(),
      salario: 13000, telefono:5690897, bono:9.768877},
      {nombre:'Rodolfo', primerApellido:'Solares', segundoApellido:"Madero", primerDia:new Date(),
      salario: 14000, telefono:5690899, bono:7.4444333}
    ];
    vm.ordenSeleccionado;
    vm.fakeCall = fakeCall;
    vm.ordernarPor = ordernarPor;

    activate();

    function activate(){
      console.log('activate');
      fakeCall();
    }

    function fakeCall(){
      console.log('fakeCall');
    }

    function ordernarPor(orden){
      vm.ordenSeleccionado = orden;
    }
  }

  mockCtrl.$inject = ['$scope'];

  function mockCtrl($scope){

    $scope.fake = function(){
      console.log('fake');
    }

    $scope.fake();

  }


})();
