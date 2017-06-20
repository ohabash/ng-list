angular.module('list',["ngRoute", "ngAnimate"])
	.config(function ($routeProvider, $locationProvider){
		$routeProvider
			.when('/', {
				controller: 'ListenController',
				templateUrl: 'partials/views/login.html',
				activeClass: 'login',
				activeJs: 'login'
			})
			.when('/list', {
				controller: 'ListenController',
				templateUrl: 'partials/views/list.html',
				activeClass: 'list',
				activeJs: 'list'
			})
			.otherwise({
				templateUrl:'partials/views/404.html'
			});	
			$locationProvider.html5Mode(true);
	});
	
