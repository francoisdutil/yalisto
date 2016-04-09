'use strict';

angular.module('yalistoOrg')
  .controller('NavbarCtrl', function ($scope) {
    $scope.date = new Date();

    $scope.mySections = [
      {
        'title': 'Home',
        'id': 'section-home',
        'class': 'section-home',
        'subtitle': 'The Top Section of Home',
        'controller': 'HomeCtrl',
        'template': 'components/home/home.html',
        'logo': 'home.svg'
      },
      {
        'title': 'Focus',
        'id': 'section-focus',
        'class': 'section-focus',
        'subtitle': 'Our main Focus',
        'controller': 'FocusCtrl',
        'template': 'components/focus/focus.html',
        'logo': 'focus.svg'
      },
      {
        'title': 'Other Services',
        'id': 'section-services',
        'class': 'section-services',
        'subtitle': 'section-services',
        'controller': 'ServicesCtrl',
        'template': 'components/services/services.html',
        'logo': 'web.svg'
      },
      {
        'title': 'Our Work',
        'id': 'section-portafolio',
        'class': 'section-portafolio',
        'subtitle': 'section-portafolio',
        'controller': 'PortafolioCtrl',
        'template': 'components/portafolio/portafolio.html',
        'logo': 'web.svg'
      },
      {
        'title': 'Packages',
        'id': 'section-packages',
        'class': 'section-packages',
        'subtitle': 'section-packages',
        'controller': 'PackagesCtrl',
        'template': 'components/packages/packages.html',
        'logo': 'web.svg'
      },
      {
        'title': 'Products',
        'id': 'section-products',
        'class': 'section-products',
        'subtitle': 'section-products',
        'controller': 'ProductsCtrl',
        'template': 'components/products/products.html',
        'logo': 'web.svg'
      },
    {
      'title': 'Mobile',
      'id': 'section-mobile',
      'class': 'section-mobile',
      'subtitle': 'section-mobile',
      'controller': 'MobileCtrl',
      'template': 'components/mobile/mobile.html',
      'logo': 'web.svg'
    },
      {
        'title': 'Contact',
        'id': 'section-contact',
        'class': 'section-contact',
        'subtitle': 'section-contact',
        'controller': 'ContactCtrl',
        'template': 'components/contact/contact.html',
        'logo': 'web.svg'
      }
    ];

  });
