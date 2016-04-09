'use strict';

angular.module('yalistoOrg')
  .controller('QuoteCtrl', function ($scope) {
    $scope.myContacts = [
      {
        'title': 'myContact Item 1',
        'url': '/#/design.html',
        'description': 'Your story excites us, we would love to be your voice. Our design strategy is to provide your public with a visual experience that embraces your intended message, details and standards.',
        'subtitle1': 'Designs Built Right',
        'content1': 'Well crafted and functional sites built from scratch. We’ll create your brand’s biggest online statement that features easy navigation, intuitive layout and graphics that make sense.',
        'subtitle2': 'Content Management System',
        'content2': 'We adapt and build what you imagine that is all search engine friendly, We are all for visual impact and accesibility. Scalable, flexible and secure framework that allows in-context editing for websites that grows with you.',
        'subtitle3': 'Responsive Design',
        'content3': 'No design or vision are to be passed up, our seamless layout are able to provide the optimum visual impact across all devices. May it be for a corporate website, brochure or E-commerce; we are committed to keep the end user experience fulfilled.',
        'logo': 'graphic.svg',
        'upnext': ''
      },
      {
        'title': 'myContact Item 2',
        'url': '/#/responsive.html',
        'description': 'Get your brand accessible and deliver seamless capability for connection and collaboration. Harness the limitless possibilities for connected devices through mobile.',
        'subtitle1': 'Balanced aesthetics and purpose',
        'content1': 'A work of art in itself. Tools that unifies convenience, benefit and advantage with captivating visual integrity.',
        'subtitle2': 'Designed with sense',
        'content2': 'Open a window to a world of content users. Integrate your websites into a system that would be accessible and would render compromises obsolete.',
        'subtitle3': 'Make it work for you',
        'content3': 'We adjust and develop applications that would run on multiple devices. Reach millions, build communities and foster your own brand ambassadors.',
        'logo': 'responsive-design.svg',
        'upnext': ''
      },
      {
        'title': 'myContact Item 3',
        'url': '/#/social.html',
        'description': 'Everything is about content, make sure it is buzzworthy. Because it is what your audience look for and support. We immerse ourselves and get intimate with your brand to create a movement that would create loyal advocates.',
        'subtitle1': 'More than connection',
        'content1': 'As an enterprise, We are founded upon a solid relationship. Interconnection builds brands and we understand that social media is an avenue that strongly showcases that no man is an island.',
        'subtitle2': 'Visibility through Multiplicity',
        'content2': 'There is no template, no foolproof solution; We intend use multiple channels and tools to broadcast your message. We would apply that message to create the advocates that would boost your brand and make it a household name.',
        'subtitle3': 'Embracing Innovation',
        'content3': 'The unending progression of technology and dwindling public attention span means what works now, wont work later. We are relentless, we do not slack, we use trial and error and keep relevant data in check to keep your campaigns fresh, insightful and persuasive.',
        'logo': 'online.svg',
        'upnext': ''
      }
    ];


    angular.forEach($scope.myFocuses, function(myFocuses) {
      myFocuses.rank = Math.random();
    });
  });
