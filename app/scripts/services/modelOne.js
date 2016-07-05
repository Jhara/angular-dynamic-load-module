(function(){
  'use strict';
  angular.module('dynamicLoadingModule.models', [])
  .service('modelOne', function(){
    return {
      "label": "I'm a model one"
    };
  });
})();
