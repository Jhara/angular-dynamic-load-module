'use strict';

/**
 * @ngdoc function
 * @name miAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the miAppApp
 */
angular.module('miAppApp')
.factory('PresenceService', ['$rootScope',
function($rootScope) {
var onlineUsers = 0;
// Create our references
var baseUrl = 'https://ng-advent-realtime.firebaseio.com'
var listRef = new Firebase(baseUrl + '/presence/');
// This creates a unique reference for each user
var userRef = listRef.push();
var presenceRef = new Firebase(baseUrl + '/.info/connected');
// Add ourselves to presence list when online.
presenceRef.on('value', function(snap) {
if (snap.val()) {
userRef.set(true);
// Remove ourselves when we disconnect.
userRef.onDisconnect().remove();
}
});
// Get the user count and notify the application
listRef.on('value', function(snap) {
onlineUsers = snap.numChildren();
$rootScope.$broadcast('onOnlineUser');
});
var getOnlineUserCount = function() {
return onlineUsers;
}
return {
getOnlineUserCount: getOnlineUserCount
}
}
])
  .controller('MainCtrl', function ($scope, PresenceService) {

    $scope.totalViewers = 0;
    $scope.$on('onOnlineUser', function() {
    $scope.$apply( function() {
                     $scope.totalViewers =
                    PresenceService.getOnlineUserCount();
    });
  });



  });
