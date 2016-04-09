'use strict';

angular.module('yalistoOrg')
  .controller('FooterCtrl', function ($scope, $timeout, $mdBottomSheet) {

    $scope.alert = '';
    $scope.showGridBottomSheet = function($event) {
      $scope.alert = '';
      $mdBottomSheet.show({
        templateUrl: 'components/footer/footer.html',
        controller: 'BottomSheetCtrl',
        targetEvent: $event
      }).then(function(clickedItem) {
        $scope.alert = clickedItem.name + ' clicked!';
      });
    };

  });
