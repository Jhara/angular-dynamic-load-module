(function(){

  'use strict';

  /**
   * @ngdoc overview
   * @name dynamicLoadingModuleApp
   * @description
   * # miAppApp
   *
   * Main module of the application.
   */
  angular
    .module('dynamicLoadingModuleApp', ['ngRoute', 'oc.lazyLoad', 'dynamicLoadingModule.services'])
    .controller('ControllerMain', ControllerMain)
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html'
        })
        .otherwise({
          redirectTo: '/'
        });
    });

    function ControllerOne($log, shared){
      var vm = this;
      vm.title = "My Controller One"
      vm.model = shared;
      vm.show = show;

      function show(){
        $log.info('show shared ', shared);
      }
    }

    function ControllerMain($log, $injector, $ocLazyLoad, shared){
      var vm = this;
      vm.loadModelOne = loadModelOne;
      vm.loadModelTwo = loadModelTwo;
      vm.model = shared;

      function loadModelOne(){
        $ocLazyLoad.load('scripts/services/modelOne.js').then(function(){
          shared = $injector.get('modelOne');
          return shared;
        }, function(error){
          $log.error("Failed load module", error);
        }).then(function(){
          vm.model = shared;
        });
      }

      function loadModelTwo(){
        $ocLazyLoad.load('scripts/services/modelTwo.js').then(function(){
          shared = $injector.get('modelTwo');
          return shared;
        }, function(error){
          $log.error("Failed load module", error);
        }).then(function(){
          vm.model = shared;
        });
      }

      

    }

})();
