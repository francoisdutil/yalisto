'use strict';

angular.module('yalistoOrg').filter('serviceCategory', [
function() {
  return function (services, selectedServiceCategory) {
    if (!angular.isUndefined(services) && !angular.isUndefined(selectedServiceCategory) && selectedServiceCategory.length > 0) {
      var tempServices = [];
      angular.forEach(selectedServiceCategory, function (id) {
        angular.forEach(services, function (service) {
          if (angular.equals(service.category, id)) {
            tempServices.push(service);
          }
        });
      });
      return tempServices;
    } else {
      return services;
    }
  };
}
]);
