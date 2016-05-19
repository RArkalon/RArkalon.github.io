angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.home', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.news', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/news.html',
        controller: 'newsCtrl'
      }
    }
  })

  .state('menu.settings', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/settings.html',
        controller: 'settingsCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('menu.detail', {
    url: '/news1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/detail.html',
        controller: 'detailCtrl'
      }
    }
  })

  .state('menu.detail2', {
    url: '/news2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/detail2.html',
        controller: 'detail2Ctrl'
      }
    }
  })

  .state('menu.detail3', {
    url: '/news3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/detail3.html',
        controller: 'detail3Ctrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')

  

});