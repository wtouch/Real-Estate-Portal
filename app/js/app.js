'use strict';

define(['angular',
	'angularRoute',
	'routeResolver',
	'css!../css/bootstrap.min'
], function(angular, angularRoute) {
	// Declare app level module which depends on views, and components
	var app =  angular.module('realEstate', [
	  'ngRoute',
	  'routeResolverServices'
	]);
	app.config(['$routeProvider', 'routeResolverProvider', '$controllerProvider',
                '$compileProvider', '$filterProvider', '$provide', '$httpProvider',
				function($routeProvider, routeResolverProvider, $controllerProvider, $compileProvider, $filterProvider, $provide, $httpProvider) {
				
				//Change default views and controllers directory using the following:
				routeResolverProvider.routeConfig.setBaseDirectories('modules/', 'modules/');
				
				app.register =
				{
					controller: $controllerProvider.register,
					directive: $compileProvider.directive,
					filter: $filterProvider.register,
					factory: $provide.factory,
					service: $provide.service
				};
				
				//Define routes - controllers will be loaded dynamically
				var route = routeResolverProvider.route;
			
				$routeProvider
					.when('/home', route.resolve({controller:'home', template: 'home', directive: 'vilas'}, 'home/'))
                
				 .when('/response/:type/:status', route.resolve({controller:'response', template: 'response' }, 'response/'))
				 .when('/property', route.resolve({controller:'property', template: 'property' }, 'property/'))
				 .when('/project', route.resolve({controller:'project', template: 'project' }, 'project/'))
				
                .otherwise({ redirectTo: '/home' });
	}]);
	app.run(['$location', '$rootScope', function($location, $rootScope) {
		$rootScope.title = "DEFAULT Title";
	}]);
	return app;
});