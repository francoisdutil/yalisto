'use strict';

angular.module('yalistoOrg')
.controller('SlideShowCtrl', function ($scope) {

  $scope.slideshow = {};
  $scope.slideshow.slides = [
  'http://204.197.251.230/assets/upload/images/beaches/3.jpg',
  'http://204.197.251.230/assets/upload/images/guajira/1.jpg',
  'http://204.197.251.230/assets/upload/images/lostCity/7.jpg',
  'http://204.197.251.230/assets/upload/images/guajira/3.jpg',
  'http://204.197.251.230/assets/upload/images/guajira/4.jpg',
  'http://204.197.251.230/assets/upload/images/lostCity/9.jpg',
  'http://204.197.251.230/assets/upload/images/guajira/5.jpg'
  ];
  var logId = 0;
  $scope.slideshow.log = [];
  $scope.slideshow.start = function(slider){
    //console.log(slider);
    $scope.slideshow.log.push({ id: ++logId, message: 'start' });
  };
  $scope.slideshow.before = function(){
    $scope.slideshow.log.push({ id: ++logId, message: 'before' });
  };
  $scope.slideshow.after = function(){
    $scope.slideshow.log.push({ id: ++logId, message: 'after' });
  };
  $scope.slideshow.end = function () {
    $scope.slideshow.log.push({ id: ++logId, message: 'end' });
  };


});
