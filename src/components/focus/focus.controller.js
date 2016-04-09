'use strict';

angular.module('yalistoOrg')
  .controller('FocusCtrl', function ($scope, $document, ngDialog, $animate, $timeout) {

    $scope.myInterval = 5000;
    var slides = $scope.slides = [];
    $scope.addSlide = function() {
      var newWidth = 600 + slides.length + 1;
      slides.push({
        image: 'http://placekitten.com/' + newWidth + '/300',
        text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
        ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
      });
    };
    for (var i=0; i<4; i++) {
      $scope.addSlide();
    };

    $timeout(function() {
      $animate.enabled(false, angular.element(".carousel"))
      //alert(angular.element(".carousel").length)
    })

    $scope.toTheTop = function() {
      $document.scrollTopAnimated(0).then(function() {
        console && console.log('You just scrolled to the top!');
      });
    };

    // Modal Test
    $scope.clickToOpen = function () {
      $scope.value = true;
      ngDialog.open({
        template: 'components/templates/modal.test.html',
        className: 'ngdialog-theme-flat',
        scope: $scope
      });
    };

    $scope.myFocuses = [
      {
        'header': 'section-focus.apps.item1.header',
        'image': '/assets/images/responsive.png',
        'description': 'section-focus.apps.item1.content',
        'animate': '',
        'icon': 'hi-icon hi-icon-mobile',
        'color': '#FF9800',
        'material': 'md-light-green-theme md-hue-3',
        'tags': '',
        'url': '/#/design.html',
        'info': '',
        'moreInfo': 'Well crafted and functional sites built from scratch. We’ll create your brand’s biggest online statement that features easy navigation, intuitive layout and graphics that make sense.',
        'subtitle': 'Content Management System',
        'content': 'We adapt and build what you imagine that is all search engine friendly, We are all for visual impact and accesibility. Scalable, flexible and secure framework that allows in-context editing for websites that grows with you.',
        'subtitle1': 'Responsive Design',
        'content1': 'No design or vision are to be passed up, our seamless layout are able to provide the optimum visual impact across all devices. May it be for a corporate website, brochure or E-commerce; we are committed to keep the end user experience fulfilled.',
        'svg': 'responsive-design.svg',
        'class': 'infoBlock imgIcon icon-twitter'
      },
      {
        'header': 'section-focus.apps.item2.header',
        'image': '/assets/images/responsive.png',
        'description': 'section-focus.apps.item2.content',
        'animate': '',
        'icon': 'hi-icon hi-icon-earth',
        'color': '#FF9800',
        'material': 'md-light-green-theme md-hue-3',
        'tags': '',
        'url': '/#/responsive.html',
        'info': '',
        'moreInfo': 'A work of art in itself. Tools that unifies convenience, benefit and advantage with captivating visual integrity.',
        'subtitle': 'Designed with sense',
        'content': 'Open a window to a world of content users. Integrate your websites into a system that would be accessible and would render compromises obsolete.',
        'subtitle1': 'Make it work for you',
        'content1': 'We adjust and develop applications that would run on multiple devices. Reach millions, build communities and foster your own brand ambassadors.',
        'svg': 'yalisto.svg',
        'class': 'infoBlock imgIcon icon-twitter'
      },
      {
        'header': 'section-focus.apps.item3.header',
        'image': '/assets/images/responsive.png',
        'description': 'section-focus.apps.item3.content',
        'animate': '',
        'icon': 'hi-icon hi-icon-link',
        'color': '#FF9800',
        'material': 'md-light-green-theme md-hue-3',
        'tags': '',
        'url': '/#/social.html',
        'info': '',
        'moreInfo': 'As an enterprise, We are founded upon a solid relationship. Interconnection builds brands and we understand that social media is an avenue that strongly showcases that no man is an island.',
        'subtitle': 'Visibility through Multiplicity',
        'content': 'There is no template, no foolproof solution; We intend use multiple channels and tools to broadcast your message. We would apply that message to create the advocates that would boost your brand and make it a household name.',
        'subtitle1': 'Embracing Innovation',
        'content1': 'The unending progression of technology and dwindling public attention span means what works now, wont work later. We are relentless, we do not slack, we use trial and error and keep relevant data in check to keep your campaigns fresh, insightful and persuasive.',
        'svg': 'online.svg',
        'class': 'infoBlock imgIcon icon-twitter'
      }
    ];


    angular.forEach($scope.myFocuses, function(myFocuses) {
      myFocuses.rank = Math.random();
    });
  });
