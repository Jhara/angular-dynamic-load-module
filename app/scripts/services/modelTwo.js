(function(){
  'use strict';
  angular.module('dynamicLoadingModule.models', [])
  .service('modelTwo', function(){
    return {
      "label": "I'm a model two"
    };
  });
})();
