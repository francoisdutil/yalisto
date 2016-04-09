'use strict';

angular.module('yalistoOrg')
  .controller('websiteDevelopmentCtrl', [ '$http', '$scope', '$rootScope', '$document', 'ngDialog', '$animate', '$timeout', '$translate', '$filter', 'ngCart', function ($http, $scope, $rootScope, $document, ngDialog, $animate, $timeout, $translate, $filter, ngCart) {

    $scope.myInterval = 5000;

    var slides1 = $scope.slides1 = [];

    $scope.addSlide1 = function() {
      var newWidth = slides1.length + 1;
      slides1.push({
        image: newWidth + '.jpg'
      });
    };
    for (var i=0; i<8; i++) {
      $scope.addSlide1();
    };

    $timeout(function() {
      $animate.enabled(false, angular.element(".carousel"))
      //alert(angular.element(".carousel").length)
    })

    $scope.addedItems = ngCart.totalItems();


    // Find a list of Services
    $scope.find = function() {
      $scope.sortorder = 'name';
      $scope.preflang = $translate.use();
      $scope.services = Services.query();
    };

    // ui-select test
    $scope.disabled = undefined;

    $scope.enable = function() {
      $scope.disabled = false;
    };

    $scope.disable = function() {
      $scope.disabled = true;
    };

    $scope.clear = function() {
      $scope.service.selected = undefined;
      $scope.person.selected = undefined;
      $scope.cat.selected = undefined;
    };

    $scope.removed = function (item, model) {
      $scope.lastRemoved = {
        item: item,
        model: model
      };
    };

    // Modal Test
    $scope.openServiceDetail = function () {
      $scope.value = true;
      ngDialog.open({
        template: 'components/services/modal.service.html',
        className: 'ngdialog-theme-flat',
        scope: $scope
      });
    };

    $scope.cat = {};
    $scope.categoryList = [{
      id: 'webAppDev',
      name: 'section-services.category.webAppDev'
    }, {
      id: 'customAppDev',
      name: 'section-services.category.customAppDev'
    },{
      id: 'mobileAppDev',
      name: 'section-services.category.mobileAppDev'
    },{
      id: 'frontEndApp',
      name: 'section-services.category.frontEndApp'
    },{
      id: 'serverSideApp',
      name: 'section-services.category.serverSideApp'
    },{
      id: 'websiteDesign',
      name: 'section-services.category.websiteDesign'
    },{
      id: 'socialMediaMarketing',
      name: 'section-services.category.socialMediaMarketing'
    },{
      id: 'webStrategyConsulting',
      name: 'section-services.category.webStrategyConsulting'
    },{
      id: 'webManagementTools',
      name: 'section-services.category.webManagementTools'
    },{
      id: 'otherWebServices',
      name: 'section-services.category.otherWebServices'
    }];

    $scope.multipleDemo = {};
    $scope.multipleDemo.selectedCategories = [$scope.categoryList[0], $scope.categoryList[1], $scope.categoryList[2], $scope.categoryList[3], $scope.categoryList[4], $scope.categoryList[5], $scope.categoryList[6], $scope.categoryList[7], $scope.categoryList[8], $scope.categoryList[9]];
    //$scope.selectedServiceCategory = [];
    $scope.selectedServiceCategory = [$scope.categoryList[0], $scope.categoryList[1], $scope.categoryList[2], $scope.categoryList[3], $scope.categoryList[4], $scope.categoryList[5], $scope.categoryList[6], $scope.categoryList[7], $scope.categoryList[8], $scope.categoryList[9]];
    $scope.selectedServiceDuration = [];


    $scope.setSelectedService = function () {
      var id = this.category.id;
      if (contains($scope.selectedServiceCategory, id)) {
        $scope.selectedServiceCategory = without($scope.selectedServiceCategory, id);
      } else {
        $scope.selectedServiceCategory.push(id);
      }
      $scope.category = this.category.id;
      return false;
    };

    $scope.setServiceDuration = function (services, values) {
      var floor = values.low;
      console.log(values);
      return false;
    };

    $scope.services = [
    {
      'id': 'websiteDevelopment',
      'rank': '01',
      'name': 'section-services.name.WebsiteDevelopment',
      'description': 'section-services.description.WebsiteDevelopment',
      'category': 'websiteDesign',
      'action': 'global.action.viewGuideline',
      'count-sections': '8',
      'url': '',
      'logo': 'website.png',
      'price': '500',
      'devDays': '30',
      'keywords': 'offer web design services for businesses, organizations and personal projects services de conception de sites Web pour les entreprises, les organisations et les projets personnels servicios de diseño web para empresas, organizaciones y proyectos personales'
    },
    {
      'id': 'webApplicationDevelopment',
      'rank': '02',
      'name': 'section-services.name.WebApplicationDevelopment',
      'description': 'section-services.description.WebApplicationDevelopment',
      'category': 'webAppDev',
      'action': 'global.action.readMore',
      'count-sections': '8',
      'url': '',
      'logo': 'webcoding.png',
      'price': '500',
      'devDays': '5',
      'keywords': 'Yalisto web app developers will morph your great ideas into workable web solutions Los desarrolladores de aplicaciones web de Yalisto transformarán sus grandes ideas en soluciones web viables Les développeurs applications web de Yalisto vont transformer vos grandes idées en solutions web viables'
    },
    {
      'id': 'mobileWebsiteDesign',
      'rank': '03',
      'name': 'section-services.name.MobileWebsiteDesign',
      'description': 'section-services.description.MobileWebsiteDesign',
      'category': 'mobileAppDev',
      'action': 'global.action.readMore',
      'count-sections': '8',
      'url': '',
      'logo': 'website.png',
      'price': '500',
      'devDays': '5',
      'keywords': 'mobile application development développement applications mobiles desarrollo de aplicaciones móviles'
    },
    {
      'id': 'responsiveWebsiteDesign',
      'rank': '04',
      'name': 'section-services.name.ResponsiveWebsiteDesign',
      'description': 'section-services.description.ResponsiveWebsiteDesign',
      'category': 'websiteDesign',
      'action': 'global.action.readMore',
      'count-sections': '8',
      'url': '',
      'logo': 'website.png',
      'price': '500',
      'devDays': '5',
      'keywords': 'build responsive websites to help you get business from both PC  and smartphone/tablet sites adaptés pour vous aider à réaliser des affaires avec les utilisateurs PC,  smartphone et tablette sitios responsivos para ayudarle a obtener negocio con los usuarios de PC, teléfono inteligente y tableta'
    },
    {
      'id': 'customWebApplication',
      'rank': '05',
      'name': 'section-services.name.CustomWebApplication',
      'description': 'section-services.description.CustomWebApplication',
      'category': 'customAppDev',
      'action': 'global.action.readMore',
      'count-sections': '8',
      'url': '',
      'logo': 'website.png',
      'price': '500',
      'devDays': '5',
      'keywords': 'If you can dream it, we can develop it. The success of your business depends on secure, immediate access to information from any location, any time Si vous pouvez la rêver, nous pouvons la développer. Le succès de votre entreprise dépend de sécurité et de accès immédiat information à partir de importe quel endroit à tout moment Si puedes soñarla, podemos desarrollarla. El éxito de su negocio depende de un acceso seguro e inmediato a la información desde cualquier lugar, a cualquier hora'
    },
    {
      'id': 'documentManagementSystem',
      'rank': '06',
      'name': 'section-services.name.DocumentManagementSystem',
      'description': 'section-services.description.DocumentManagementSystem',
      'category': 'serverSideApp',
      'action': 'global.action.readMore',
      'count-sections': '8',
      'url': '',
      'logo': 'webemail.png',
      'price': '500',
      'devDays': '5',
      'keywords': 'versatility to the client organizational document processing souplesse inégalée à divers besoins de traitement des documents organisation du client diversos requisitos de procesamiento de documentos de la organización del cliente'
    },
    {
      'id': 'eCommerceSystem',
      'rank': '07',
      'name': 'section-services.name.eCommerceSystem',
      'description': 'section-services.description.eCommerceSystem',
      'category': 'customAppDev',
      'action': 'global.action.readMore',
      'count-sections': '8',
      'url': '',
      'logo': 'webdev.png',
      'price': '500',
      'devDays': '7',
      'keywords': 'solution is a fully-functional shopping cart system that can effortlessly incorporate into the client website solution est un système achats en ligne entièrement fonctionnel qui peut facilement incorporer au site Web du client solución es un sistema de carrito de la compra totalmente funcional que puede incorporar fácilmente en el sitio web del cliente'
    },
    {
      'id': 'multilingualWebsiteIntegration',
      'rank': '08',
      'name': 'section-services.name.MultilingualWebsiteIntegration',
      'description': 'section-services.description.MultilingualWebsiteIntegration',
      'category': 'otherWebServices',
      'action': 'global.action.readMore',
      'count-sections': '8',
      'url': '',
      'logo': 'webdesign.png',
      'price': '500',
      'devDays': '5',
      'keywords': 'automate the entire process from end-to-end and offer you the opportunity to achieve levels of speed, accuracy and efficiency multilingual bilingual localization translation language objectif est automatiser ensemble du processus de bout en bout et de vous offrir la possibilité atteindre des niveaux de rapidité, de précision et efficacité multilingue bilingue traduction localisation french spanish français anglais espagnol traducción automatizar todo el proceso de punta a fin y le ofrecerá la oportunidad de alcanzar niveles de velocidad, precisión y eficiencia'
    },
    {
      'id': 'CMS',
      'rank': '09',
      'name': 'section-services.name.CMS',
      'description': 'section-services.description.CMS',
      'category': 'serverSideApp',
      'action': 'global.action.readMore',
      'count-sections': '8',
      'url': '',
      'logo': 'webdev.png',
      'price': '500',
      'devDays': '7',
      'keywords': 'flexible CMS services include the ability to develop a customized system that addresses your specific content management needs services CMS flexibles incluent la possibilité de développer un système personnalisé qui répond à vos besoins spécifiques de gestion de contenu servicios CMS flexibles incluyen la capacidad de desarrollar un sistema personalizado que atienda sus necesidades específicas de gestión de contenidos'
    },
    {
      'id': 'eventsBookingSystem',
      'rank': '10',
      'name': 'section-services.name.EventsBookingSystem',
      'description': 'section-services.description.EventsBookingSystem',
      'category': 'frontEndApp',
      'action': 'global.action.readMore',
      'count-sections': '8',
      'url': '',
      'logo': 'webdev.png',
      'price': '400',
      'devDays': '5',
      'keywords': 'Simple, multi-functional and customizable online Event Management Application for businesses application en ligne simple, multi-fonctionnelle et personnalisée qui aide les entreprises à gérer ses événements Aplicación de gestión en linea sencilla, multi-funcional y personalizable que ayuda a las empresas manejar sus eventos'
    },
    {
      'id': 'bookingReservationSystem',
      'rank': '11',
      'name': 'section-services.name.BookingReservationSystem',
      'description': 'section-services.description.BookingReservationSystem',
      'category': 'customAppDev',
      'action': 'global.action.readMore',
      'count-sections': '8',
      'url': '',
      'logo': 'webdev.png',
      'price': '500',
      'devDays': '7',
      'keywords': 'Online Reservations that works the way you work. Yalisto designs online booking systems that manage reservation requests, reservations, real-time confirmations Système de réservations en ligne qui fonctionne de la façon dont vous travaillez (gestion des demandes de réservation, les réservations, les confirmations en temps réel Sistema de reservas en línea que funciona a su forma de trabajar. Yalisto diseña sistemas de reservas en linea que gestionan las solicitudes de reserva, reservas, confirmaciones en tiempo real'
    },
    {
      'id': 'onlineFormsRegistration',
      'rank': '12',
      'name': 'section-services.name.OnlineFormsRegistration',
      'description': 'section-services.description.OnlineFormsRegistration',
      'category': 'customAppDev',
      'action': 'global.action.readMore',
      'count-sections': '8',
      'url': '',
      'logo': 'webdev.png',
      'price': '250',
      'devDays': '3',
      'keywords': 'custom web form development service includes analysis, design, programming and implementation service de développement de formulaires de sites Web personnalisés comprend analyse, la conception, la programmation et la mise en œuvre servicio de desarrollo de formularios web a medida incluye el análisis, diseño, programación y ejecución'
    },
    {
      'id': 'membershipSystem',
      'rank': '13',
      'name': 'section-services.name.MembershipSystem',
      'description': 'section-services.description.MembershipSystem',
      'category': 'serverSideApp',
      'action': 'global.action.readMore',
      'count-sections': '8',
      'url': '',
      'logo': 'webdev.png',
      'price': '250',
      'devDays': '3',
      'keywords': 'benefits provided to the members, a custom membership web-application can dramatically increase the productivity for the management staff avantages offerts aux membres, la application web peut considérablement augmenter la productivité pour le personnel de gestion beneficios proporcionados a los miembros, la aplicación web puede aumentar drásticamente la productividad para el personal de gestión registrar enregistrer gestion des membres'
    },
    {
      'id': 'adminDashboard',
      'rank': '14',
      'name': 'section-services.name.AdminDashboard',
      'description': 'section-services.description.AdminDashboard',
      'category': 'customAppDev',
      'action': 'global.action.readMore',
      'count-sections': '8',
      'url': '',
      'logo': 'website.png',
      'price': '300',
      'devDays': '4',
      'keywords': 'Comprehensive digital dashboard that let you view, measure and manage  internet marketing efforts in a single, cloud-based platform Tableau de bord numérique complet qui vous permettent de voir, de mesurer et de gérer les efforts de marketing internet dans une seule plate-forme, basée sur le cloud Escritorio digital integral que le permiten ver, medir y administrar los esfuerzos de marketing en Internet en una sola plataforma, basado en cloud'
    },
    {
      'id': 'internalSearchEngine',
      'rank': '15',
      'name': 'section-services.name.InternalSearchEngine',
      'description': 'section-services.description.InternalSearchEngine',
      'category': 'websiteDesign',
      'count-sections': '8',
      'url': '',
      'logo': 'www.png',
      'price': '250',
      'devDays': '3',
      'keywords': 'internal search engine provides users another means to navigate your site. Done well, this improves the users experience and increases the odds of conversion moteur de recherche interne fournit aux utilisateurs un autre moyen de naviguer sur votre site. Bien fait, ceci améliore expérience des utilisateurs et augmente les chances de conversion buscador interno proporciona a los usuarios de otro medio de navegar su sitio. Si se hace bien, esto mejora la experiencia del usuario y aumenta las probabilidades de conversión'
    },
    {
      'id': 'instantMessaging',
      'rank': '16',
      'name': 'section-services.name.InstantMessaging',
      'description': 'section-services.description.InstantMessaging',
      'category': 'webAppDev',
      'action': 'global.action.readMore',
      'count-sections': '8',
      'url': '',
      'logo': 'webdev.png',
      'price': '300',
      'devDays': '4',
      'keywords': 'connected business staff and managers do business through the website instant messaging system direct personnel et les gestionnaires des entreprises connectés font des affaires à travers un système de messagerie instantanée du site Web directement personal y los gerentes de negocios conectados hacen negocios a través del sistema de mensajería instantánea de su sitio web directa'
    },
    {
      'id': 'userSupportHelpDeskSystem',
      'rank': '17',
      'name': 'section-services.name.UserSupportHelpDeskSystem',
      'description': 'section-services.description.UserSupportHelpDeskSystem',
      'category': 'webManagementTools',
      'action': 'global.action.readMore',
      'count-sections': '8',
      'url': '',
      'logo': 'webdev.png',
      'price': '500',
      'devDays': '5',
      'keywords': 'help desk app will increase the productivity and effectiveness even of a small support team. We will setup, customize and deploy securely this service application de soutien aux clients permettra accroître la productivité et efficacité, équipe de soutien. Nous allons configurer, personnaliser et déployer en toute sécurité ce service aplicación servicio de asistencia se incrementará la productividad y eficacia incluso de un pequeño equipo de apoyo. Vamos a configurar, personalizar y desplegar de forma segura este servicio'
    },
    {
      'id': 'sPA',
      'rank': '18',
      'name': 'section-services.name.SPA',
      'description': 'section-services.description.SPA',
      'category': 'webAppDev',
      'action': 'global.action.readMore',
      'count-sections': '8',
      'url': '',
      'logo': 'website.png',
      'price': '500',
      'devDays': '5',
      'keywords': 'modern site delivered as one page to the browser which typically loads faster as the user navigates to different parts of the application site moderne livré comme une page au navigateur qui charge généralement plus rapide lorsque utilisateur navigue dans les différentes parties de application sitio moderno entrega como una sola página en el navegador que se carga más rápido mientras que el usuario navega a diferentes partes de la aplicación'
    },
    {
      'id': 'creativePortfolioDesign',
      'rank': '19',
      'name': 'section-services.name.CreativePortfolioDesign',
      'description': 'section-services.description.CreativePortfolioDesign',
      'category': 'websiteDesign',
      'action': 'global.action.readMore',
      'count-sections': '8',
      'url': '',
      'logo': 'website.png',
      'price': '250',
      'devDays': '4',
      'keywords': 'Get a high quality creative web design for your portfolio web page. Our talented and experienced designers will assist you on all development web design créatif de haute qualité pour votre page Web de portefolio. Nos créateurs talentueux et expérimentés seront vous aider sur tous les aspects de la conception diseño web creativo de alta calidad para la página web de su portafolio. Nuestros diseñadores talentosos y experimentados le ayudarán en todos los aspectos de desarrollo'
    },
    {
      'id': 'blogNewsArticles',
      'rank': '20',
      'name': 'section-services.name.BlogNewsArticles',
      'description': 'section-services.description.BlogNewsArticles',
      'category': 'websiteDesign',
      'action': 'global.action.readMore',
      'count-sections': '8',
      'url': '',
      'logo': 'webemail.png',
      'price': '200',
      'devDays': '3',
      'keywords': 'professional designers will work with you helping create or integrate properly your news, articles or blog content within your website créer ou intégrer correctement le contenu de vos nouvelles, articles ou blog dans votre site Web crear o integrar adecuadamente sus contenidos de noticias, artículos o blog dentro de su sitio web'
    },
    {
      'id': 'SEO',
      'rank': '32',
      'name': 'section-services.name.SEO',
      'description': 'section-services.description.SEO',
      'category': 'otherWebServices',
      'action': 'global.action.readMore',
      'count-sections': '8',
      'url': '',
      'logo': 'webdesign.png',
      'price': '1000',
      'devDays': '90',
      'keywords': 'search engine optimization motor de buscada moteur de recherche google yahoo bing'
    },
    {
      'id': 'socialMediaMarketing',
      'rank': '38',
      'name': 'section-services.name.SocialMediaMarketing',
      'description': 'section-services.description.SocialMediaMarketing',
      'category': 'SocialMediaMarketing',
      'action': 'global.action.readMore',
      'count-sections': '8',
      'url': '',
      'logo': 'webconnect.png',
      'price': '500',
      'devDays': '365',
      'keywords': 'Successful long-term social media campaigns aren’t built in a day. They require careful planning and execution. We can assist you along the process campagnes de médias sociaux qui réussissent à long terme ne sont pas construite en un jour. Elles exigent une planification et une exécution soignée. Nous pouvons vous aider au long du processus Campañas en los medios sociales exitosas a largo plazo no se construyán en un día. Ellas requieren una planificación y ejecución cuidadosa. Podemos ayudarle a lo largo del proceso'
    },
    {
      'id': 'emailNewsletter',
      'rank': '30',
      'name': 'section-services.name.EmailNewsletter',
      'description': 'section-services.description.EmailNewsletter',
      'category': 'websiteDesign',
      'action': 'global.action.readMore',
      'count-sections': '8',
      'url': '',
      'logo': 'webemail.png',
      'price': '300',
      'devDays': '4',
      'keywords': 'campagnes de courriel email campaign campaña de correo marketing noticias news nouvelles'
    },
    {
      'id': 'socialMediaIntegration',
      'rank': '21',
      'name': 'section-services.name.SocialMediaIntegration',
      'description': 'section-services.description.SocialMediaIntegration',
      'category': 'websiteDesign',
      'action': 'global.action.readMore',
      'count-sections': '8',
      'url': '',
      'logo': 'webconnect.png',
      'price': '150',
      'devDays': '3',
      'keywords': 'presence on social media sites présence sur les sites de médias sociaux presencia en las redes sociales'
    },
    {
      'id': 'facebookPageDesign',
      'rank': '37',
      'name': 'section-services.name.FacebookPageDesign',
      'slogan': 'spa',
      'description': 'section-services.description.FacebookPageDesign',
      'category': 'SocialMediaMarketing',
      'action': 'global.action.readMore',
      'count-sections': '8',
      'url': '',
      'logo': 'webconnect.png',
      'price': '250',
      'devDays': '3',
      'keywords': 'Looking at promoting your business as a whole, a single event or a new product? We can create a Facebook page that will engage your target audience, promote your idea, merchandise or event Mirando a la promoción de su negocio en su conjunto, un solo evento o un nuevo producto? Podemos crear una página de Facebook que involucrará a su público objetivo, promover su idea, mercancía o evento Vous cherchez à promouvoir votre entreprise dans son ensemble, un seul événement ou un nouveau produit? Nous pouvons créer une page Facebook qui engagera votre public cible, la promotion de votre idée, de marchandises ou événement.'
    },
    {
      'id': 'thirdPartyAPI',
      'rank': '26',
      'name': 'section-services.name.ThirdPartyAPI',
      'slogan': 'spa',
      'description': 'section-services.description.ThirdPartyAPI',
      'category': 'webAppDev',
      'action': 'global.action.readMore',
      'count-sections': '8',
      'url': '',
      'logo': 'webdev.png',
      'price': '300',
      'devDays': '2',
      'keywords': 'Extending into Mobile. We build intermediary server-side applications, connectors and middleware to seamlessly integrate mobile apps into an existing web solution Nous construisons des applications côté serveur intermédiaires, connecteurs et middleware pour intégrer de façon transparente des applications mobiles dans une solution Web existante aplicaciones de servidor intermediario y sistemas de terceros para integrar sin problemas las aplicaciones móviles en una solución web existente'
    },
    {
      'id': 'databaseMigration',
      'rank': '27',
      'name': 'section-services.name.DatabaseMigration',
      'slogan': 'spa',
      'description': 'section-services.description.DatabaseMigration',
      'category': 'customAppDev',
      'action': 'global.action.readMore',
      'count-sections': '8',
      'url': '',
      'logo': 'webcoding.png',
      'price': '400',
      'devDays': '3',
      'keywords': 'Custom web development services to handle all of your database design & Integration needs Servicios de desarrollo web personalizada para controlar todas sus necesidades de diseño e integración de base de datos services de développement web sur mesure pour développer et gérer la conception et intégration de base de données'
    },
    {
      'id': 'API',
      'rank': '22',
      'name': 'section-services.name.API',
      'description': 'section-services.description.API',
      'category': 'customAppDev',
      'action': 'global.action.readMore',
      'count-sections': '8',
      'url': '',
      'logo': 'webcoding.png',
      'price': '500',
      'devDays': '5',
      'keywords': 'We are a full-service web and UI design studio company. custom application design and API development entreprise de services web et studio de design UI-service complet. Nous sommes très expérimentés dans la conception applications personnalisées et de développement APIs Somos una web y el estudio de diseño de interfaz de usuario de empresa de servicio completo. Tenemos gran experiencia en el diseño de aplicaciones personalizadas y desarrollo de la API.'
    },
    {
      'id': 'backEndDevelopment',
      'rank': '24',
      'name': 'section-services.name.BackEndDevelopment',
      'description': 'section-services.description.BackEndDevelopment',
      'category': 'serverSideApp',
      'action': 'global.action.readMore',
      'count-sections': '8',
      'url': '',
      'logo': 'webdev.png',
      'price': '500',
      'devDays': '10',
      'keywords': 'develop backend applications to store and manipulate data in the background and bring HTML and media content to your mobile app Desarrollamos aplicaciones de back-end para almacenar y manipular datos en segundo plano y llevar HTML y contenido multimedia en su aplicación móvil Développement Back-end serveur servidor Nous développons des applications back-end pour stocker et manipuler des données en arrière plan et apporter HTML et le contenu multimédia à votre application mobile'
    },
    {
      'id': 'domainNameRegistration',
      'rank': '40',
      'name': 'section-services.name.DomainNameRegistration',
      'description': 'section-services.description.DomainNameRegistration',
      'category': 'otherWebServices',
      'action': 'global.action.readMore',
      'count-sections': '8',
      'url': '',
      'logo': 'webservice.png',
      'price': '40',
      'devDays': '2',
      'keywords': 'safe and secure domain name management and registration services '
    },
    {
      'id': 'websiteHosting',
      'rank': '41',
      'name': 'section-services.name.WebsiteHosting',
      'slogan': 'spa',
      'description': 'section-services.description.WebsiteHosting',
      'category': 'otherWebServices',
      'action': 'global.action.readMore',
      'count-sections': '8',
      'url': '',
      'logo': 'webservice.png',
      'price': '500',
      'devDays': '1',
      'keywords': 'Yalisto is a refreshingly different web hosting company which prides itself on providing fast, reliable hosting with exceptional customer service empresa de alojamiento web refrescante y diferente que se enorgullece de ofrecer alojamiento rápido, confiable con un servicio al cliente excepcional fournir hébergement de votre site web rapide et fiable'
    },
    {
      'id': 'websiteRedesign',
      'rank': '36',
      'name': 'section-services.name.WebsiteRedesign',
      'slogan': 'spa',
      'description': 'section-services.description.WebsiteRedesign',
      'category': 'websiteDesign',
      'action': 'global.action.readMore',
      'count-sections': '8',
      'url': '',
      'logo': 'webdesign.png',
      'price': '500',
      'devDays': '5',
      'keywords': 'As first impression of every website counts, so it is time to make your visitor experience a fresh, redesigned & intuitive website to have a strong imprint Rediseño de sitio web refonte de site web '
    },
    {
      'id': 'websiteMaintenance',
      'rank': '35',
      'name': 'section-services.name.WebsiteMaintenance',
      'description': 'section-services.description.WebsiteMaintenance',
      'category': 'otherWebServices',
      'action': 'global.action.readMore',
      'count-sections': '8',
      'url': '',
      'logo': 'webservice.png',
      'price': '250',
      'devDays': '2',
      'keywords': 'Think of us as your in-house website maintenance and improvement team. We take all the weight off your shoulders so you can breathe easier and focus on your business support plan soporte Maintenance de site web amélioration interne et entretien du site Web equipo de mejora y mantenimiento de su sitio web'
    },
    {
      'id': 'annualWebsiteSupport',
      'rank': '39',
      'name': 'section-services.name.AnnualWebsiteSupport',
      'description': 'section-services.description.AnnualWebsiteSupport',
      'category': 'otherWebServices',
      'action': 'global.action.readMore',
      'count-sections': '8',
      'url': '',
      'logo': 'webservice.png',
      'price': '300',
      'devDays': '6',
      'keywords': 'planes de mantenimiento del sitio web cubrir todos los servicios basados en la frecuencia con que necesita mantenimiento del sitio web website maintenance plans plans de maintenance de sites Web'
    },
    {
      'id': 'webApplicationProgramming',
      'rank': '25',
      'name': 'section-services.name.WebApplicationProgramming',
      'description': 'section-services.description.WebApplicationProgramming',
      'category': 'webAppDev',
      'action': 'global.action.readMore',
      'count-sections': '8',
      'url': '',
      'logo': 'webcoding.png',
      'price': '500',
      'devDays': '5',
      'keywords': 'Disfruta de nuestro desarrollo web a medida para integrar todos los procesos especializados de su organización pueda tener custom web development to integrate any specialized processes your organization intégrer tous les processus spécialisés'
    },
    {
      'id': 'onlineStrategyConsulting',
      'rank': '42',
      'name': 'section-services.name.OnlineStrategyConsulting',
      'slogan': 'spa',
      'description': 'section-services.description.OnlineStrategyConsulting',
      'category': 'webStrategyConsulting',
      'action': 'global.action.readMore',
      'count-sections': '8',
      'url': '',
      'logo': 'webconnect.png',
      'price': '100',
      'devDays': '1',
      'keywords': 'Internet marketing strategy is a key component of achieving your website potential and growing your business Votre stratégie de marketing Internet est un élément clé de la réalisation du potentiel de votre site Web et la croissance de votre entreprise Consultoría de estrategia en línea estrategia de marketing en Internet es un componente clave de la realización del potencial de su sitio web'
    },
    {
      'id': 'copyWriting',
      'rank': '33',
      'name': 'section-services.name.CopyWriting',
      'description': 'section-services.description.CopyWriting',
      'category': 'otherWebServices',
      'action': 'global.action.readMore',
      'count-sections': '8',
      'url': '',
      'logo': 'webservice.png',
      'price': '500',
      'devDays': '5',
      'keywords': 'team of professional writers will help you create original content that clearly conveys your company distinct message to your website contenu original qui traduit clairement le message distinct de votre entreprise pour les visiteurs et clients de votre site Web equipo de escritores profesionales le ayudarán a crear contenido original que transmita claramente el mensaje distinto de su empresa a los visitantes y clientes de su sitio web'
    },
    {
      'id': 'googleMapsIntegration',
      'rank': '28',
      'name': 'section-services.name.GoogleMapsIntegration',
      'description': 'section-services.description.GoogleMapsIntegration',
      'category': 'customAppDev',
      'action': 'global.action.readMore',
      'count-sections': '8',
      'url': '',
      'logo': 'webdesign.png',
      'price': '500',
      'devDays': '5',
      'keywords': 'Using location-based information in your web app is a great way to keep the user connected to the surrounding world Geo Mapping and Location Mapeo Geográfico y Ubicación Geo Cartographie et Localisation'
    },
    {
      'id': 'websiteOptimization',
      'rank': '34',
      'name': 'section-services.name.WebsiteOptimization',
      'description': 'section-services.description.WebsiteOptimization',
      'category': 'websiteDesign',
      'action': 'global.action.readMore',
      'count-sections': '8',
      'url': '',
      'logo': 'webdesign.png',
      'price': '300',
      'devDays': '3',
      'keywords': 'Augmenter la vitesse de téléchargement de vos pages Web et accélérer le temps réponse du serveur pour conserver vos visiteurs et accroître la convivialité Boost the download speed of your web pages and accelerate server response time to retain your visitors and increase usability Aumenta la velocidad de descarga de sus páginas web y acelerar el tiempo de respuesta del servidor para retener a sus visitantes e incrementar la facilidad de uso'
    },
    {
      'id': 'customEmailAlerts',
      'rank': '23',
      'name': 'section-services.name.CustomEmailAlerts',
      'description': 'section-services.description.CustomEmailAlerts',
      'category': 'customAppDev',
      'action': 'global.action.readMore',
      'count-sections': '8',
      'url': '',
      'logo': 'webemail.png',
      'price': '500',
      'devDays': '5',
      'keywords': 'custom email alert system especially for your website to meet your specific needs Atteindre facilement vos clients. Notre équipe de développement web peut créer un système alerte email personnalisé spécialement pour votre site sistema de alerta de correo electrónico personalizado especialmente para su sitio web'
    },
    {
      'id': 'reportingTools',
      'rank': '31',
      'name': 'section-services.name.ReportingTools',
      'description': 'section-services.description.ReportingTools',
      'category': 'webManagementTools',
      'action': 'global.action.readMore',
      'count-sections': '8',
      'url': '',
      'logo': 'webservice.png',
      'price': '500',
      'devDays': '10',
      'keywords': 'website databases, we create reporting tools allowing the user to get the data bases de données du site web, nous créons les outils de reporting permettant à utilisateur obtenir les informations bases de datos del sitio web, creamos las herramientas de informes que permiten al usuario obtener los datos'
    },
    {
      'id': 'CRM',
      'rank': '29',
      'name': 'section-services.name.CRM',
      'description': 'section-services.description.CRM',
      'category': 'webManagementTools',
      'action': 'global.action.readMore',
      'count-sections': '8',
      'url': '',
      'logo': 'webservice.png',
      'price': '500',
      'devDays': '30',
      'keywords': 'customer interaction is another opportunity to reinforce customer service, improve retention, build loyalty, obtain another sale and strengthen your brand interaction avec le client est une autre occasion de renforcer le service client, améliorer la rétention, fidéliser, obtenir une autre vente et de renforcer votre marque interacción con el cliente es otra oportunidad para reforzar el servicio al cliente, mejorar la retención, construir la lealtad, obtener otra venta y fortalecer su marca'
    }
  ];

}]);
