'use strict';

angular.module('miAppApp')
.controller('directivaCtrl', function($scope){
   $scope.textoAtt = {titulo: 'Template Directivas', subtitulo:'como Attibuto'};
   $scope.textoElem = {titulo: 'Template Directivas', subtitulo:'como Elemento'};


   var counter = 0;
   $scope.customer = {
     name: 'David',
     street: '1234 Anywhere St.'
   };

   $scope.customers = [
 {
   name: 'David',
   street: '1234 Anywhere St.'
 },
{
  name: 'Tina',
  street: '1800 Crest St.'
},
{
  name: 'Michelle',
  street: '890 Main St.'
}
];

    $scope.addCustomer = function () {
      counter++;
      $scope.customers.push({
        name: 'New Customer' + counter,
        street: counter + ' Cedar Point St.'
      });
    };

   $scope.changeData = function () {
     counter++;
     $scope.customer = {
       name: 'James',
       street: counter + ' Cedar Point St.'
     };
   };




} )
.directive('miEncabezado', function(){
    return {
        scope:{
            textoVariable: '=texto'
        },
        restrict: 'AE',
        templateUrl: '/directivas/mi-encabezado.html'
    }
})
.directive('myIsolatedScopeWithModelAndFunction', function(){
  return {
    restrict: 'AE',
    scope: {
      datasource: '=',
      action: '&'
    },
    template: '<ul><li ng-repeat="prop in datasource">{{ prop }}</li></ul> ' +
              '<button ng-click="action()">Change Data</button>'
  }

});
