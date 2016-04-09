'use strict';

angular.module('yalistoOrg')
  .controller('MainCtrl', ['$scope', '$rootScope', '$modal', '$document', '$location', '$http', 'ngCart', '$anchorScroll', '$translate', 'ngDialog', function ($scope, $rootScope, $modal, $document, $location, $http, ngCart, $anchorScroll, $translate, ngDialog) {

    $scope.addedItems = ngCart.totalItems();

    //$scope.lang = 'en';

    $scope.langMenu = [
      {
      'title': 'English',
      'countryCode': 'en'
      },
      {
      'title': 'Français',
      'countryCode': 'fr'
      },
      {
      'title': 'Español',
      'countryCode': 'es'
      }
    ];

    $scope.gotoSection = function(section) {
      // set the location.hash to the id of
      // the element you wish to scroll to.
      $location.hash(section);

      // call $anchorScroll()
      $anchorScroll();
    };

    $scope.changeLanguage = function (languageKey) {
      $translate.use(languageKey);
      $translate.refresh();
      $scope.lang = languageKey;
      //$rootScope.changeLocale = tmhDynamicLocale.set(languageKey);
      //$rootScope.$locale = $locale;
      //console.log('languageKey: ' + languageKey);
      //console.log('$locale.id: ' + $locale.id);

    };
    $scope.toTheTop = function() {
      $anchorScroll();
    };
    var sectionFocus = angular.element(document.getElementById('section-focus'));
    $scope.toSectionFocus = function() {
      $document.scrollToElementAnimated(sectionFocus);
    };

    var sectionServices = angular.element(document.getElementById('section-services'));
    $scope.toSectionServices = function() {
      $document.scrollToElementAnimated(sectionServices);
    };

    var cart = angular.element(document.getElementById('cart'));
    $scope.viewCart = function() {
      $document.scrollToElementAnimated(cart);
    };

    $scope.click = function() {
      $scope.boolChangeClass = !$scope.boolChangeClass;
      $scope.$apply();
    };

    $scope.mySections = [
    {
      'title': 'feature',
      'id': 'section-feature',
      'class': 'grow-rotate md-blue btn-material-blue',
      'subtitle': 'The Top Section of Feature',
      'controller': 'FeatureCtrl',
      'template': 'components/feature/feature.html',
      'icon': 'mdi-device-devices',
      'action': 'gotoSection(section-feature)',
      'theme': 'md-default-theme',
      'color': 'blue'

    },
    {
      'title': 'focus',
      'id': 'section-focus',
      'class': 'grow-rotate md-red btn-material-red',
      'subtitle': 'Our main Focus',
      'controller': 'FocusCtrl',
      'template': 'components/focus/focus.html',
      'icon': 'mdi-device-gps-fixed',
      'action': 'gotoSection(section-focus)',
      'theme': 'md-red-theme',
      'color': 'red'
    },
    {
      'title': 'services',
      'id': 'section-services',
      'class': 'grow-rotate btn-material-orange',
      'subtitle': 'section-services',
      'controller': 'ServicesCtrl',
      'template': 'components/services/services.html',
      'icon': 'mdi-action-wallet-giftcard',
      'action': 'gotoSection(section-services)',
      'theme': 'md-orange-theme',
      'color': 'orange'
    },
    {
      'title': 'ourWork',
      'id': 'section-ourwork',
      'class': 'grow-rotate btn-material-purple',
      'subtitle': 'section-ourwork',
      'controller': 'OurWorkCtrl',
      'template': 'components/ourwork/ourwork.html',
      'icon': 'mdi-maps-local-library',
      'action': 'gotoSection(section-ourwork)',
      'theme': 'md-purple-theme',
      'color': 'purple'
    },
    {
      'title': 'contact',
      'id': 'section-contact',
      'class': 'grow-rotate btn-material-deep-orange',
      'subtitle': 'section-contact',
      'controller': 'ContactCtrl',
      'template': 'components/contact/contact.html',
      'icon': 'mdi-communication-contacts',
      'action': 'toTheTop()',
      'theme': 'md-deep-orange-theme',
      'color': 'deep-orange'
    }
  ];

  $anchorScroll();

  $scope.openBottomSheet = function() {
    $mdBottomSheet.show({
      template: '<md-bottom-sheet>Hello!</md-bottom-sheet>'
    });
  };

  $scope.fireupMarketingDesignAnimation = function() {
    if(!firedMarketingAnimation) {
      window.animations.marketingAnimation.init();
      firedMarketingAnimation = true;
      return firedMarketingAnimation;
    }
  };

  // Dialogs
  $scope.alert = '';
  $scope.showAlert = function(ev) {
    $mdDialog.show(
      $mdDialog.alert()
      .title('This is an alert title')
      .content('You can specify some description text in here.')
      .ariaLabel('Password notification')
      .ok('Got it!')
      .targetEvent(ev)
    );
  };
  $scope.showConfirm = function(ev) {
    var confirm = $mdDialog.confirm()
    .title('Would you like to delete your debt?')
    .content('All of the banks have agreed to forgive you your debts.')
    .ariaLabel('Lucky day')
    .ok('Please do it!')
    .cancel('Sounds like a scam')
    .targetEvent(ev);
    $mdDialog.show(confirm).then(function() {
      $scope.alert = 'You decided to get rid of your debt.';
    }, function() {
      $scope.alert = 'You decided to keep your debt.';
    });
  };
  $scope.showAdvanced = function(ev) {
    $mdDialog.show({
      controller: 'DialogController',
      templateUrl: 'components/templates/modal.test.html',
      targetEvent: ev,
    })
    .then(function(answer) {
      $scope.alert = 'You said the information was "' + answer + '".';
    }, function() {
      $scope.alert = 'You cancelled the dialog.';
    });
  };

}]);
