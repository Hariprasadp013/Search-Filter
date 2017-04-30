var app = angular.module("myApp", []);
		app.controller("myCtrl", function($scope) {
		$scope.records = [
		    {desc:"50 Must have Plugins for Twitter Bootstrap",
		     img:"bootstrap"},
		    {desc:"Making a Registration System with PHP and MySQL",
		     img: "php-mysql"},
		    {desc:"Learn AngularJS",
		     img:"angular"},
		    {desc:"How to make a Digital Clock with jQuery",
	             img:"jquery"},
		    {desc:"5 Features You Can Use in ES6 Today",
		    img:"es6"}
		  ];
		});