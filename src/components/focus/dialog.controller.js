'use strict';

angular.module('yalistoOrg')
.controller('DialogController', function ($scope, $document, ngDialog) {

  
  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.answer = function(answer) {
    $mdDialog.hide(answer);
  };
});
