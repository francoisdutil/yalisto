'use strict';

angular.module('yalistoOrg',
['ngAnimate',
'ngCookies',
'ngTouch',
'ngSanitize',
'ngResource',
'ngMaterial',
'ui.router',
'ui.bootstrap',
'ui.select',
'duScroll',
'pascalprecht.translate',
'tmh.dynamicLocale',
'ngDialog',
'ngCart'
])
  .config(function ($stateProvider, $urlRouterProvider, $translateProvider, tmhDynamicLocaleProvider) {
    $stateProvider
      .state('site', {
        abstract:true,
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('site.index', {
        url: "",
        templateUrl: 'app/partials/index.html'
      })

      .state('site.cart', {
        url: 'cart',
        templateUrl: 'app/partials/cart.html'
      })
      .state('site.quote', {
        url: 'quote',
        templateUrl: 'app/components/quote/quote.html',
        controller: 'QuoteCtrl'
      });

    $urlRouterProvider.otherwise('/');

    // Initialize angular-translate
    $translateProvider.useStaticFilesLoader({
      prefix: 'i18n/',
      suffix: '.json'
    });

    $translateProvider.registerAvailableLanguageKeys(['en', 'es', 'fr'], {
      'en_US': 'en',
      'en_UK': 'en',
      'en_AU': 'en',
      'en_CA': 'en',
      'en_GB': 'en',
      'en_NZ': 'en',
      'es_AR': 'es',
      'es_BO': 'es',
      'es_CL': 'es',
      'es_CO': 'es',
      'es_CR': 'es',
      'es_CU': 'es',
      'es_DO': 'es',
      'es_EC': 'es',
      'es_ES': 'es',
      'es_GQ': 'es',
      'es_GT': 'es',
      'es_HN': 'es',
      'es_MX': 'es',
      'es_PA': 'es',
      'es_PE': 'es',
      'es_PR': 'es',
      'es_PY': 'es',
      'es_US': 'es',
      'es_UY': 'es',
      'es_VE': 'es',
      'fr_FR': 'fr',
      'fr_CA': 'fr',
      'fr_BE': 'fr',
      'fr_CH': 'fr'
    });

    $translateProvider.preferredLanguage('en');

    $translateProvider.useCookieStorage();

    tmhDynamicLocaleProvider.localeLocationPattern('../bower_components/angular-i18n/angular-locale_{{locale}}.js');
    tmhDynamicLocaleProvider.useCookieStorage('NG_TRANSLATE_LANG_KEY');


  })
;
