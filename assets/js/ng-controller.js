var app = angular.module('list');








// ListenContrller
app.controller('ListenController', function ($scope, $rootScope, $location) {
	$scope.PAGE = function (viewLocation) { 
    	return viewLocation === $location.path();
	};
});








// LoginCtrl
app.controller('LoginCtrl', function ($scope, $timeout, $location) {	
  console.log($location)
  this.user = {
    email    : '',
    password : ''
  };
  
  function _isEmailValid(emailInput) {
    return !emailInput.$error.required && !emailInput.$error.email;
  }
  
  function _isPasswordValid(passwordInput) {
    return !passwordInput.$error.required && !passwordInput.$error.maxlength && !passwordInput.$error.minlength;
  }
  
  this.blurInput = function(input) {
    input.$focused = false;  
  };
  
  this.focusInput = function(input) {
    input.$focused = true;  
  };
  
  this.isDirty = function(input) {
    return input.$viewValue.length && !input.$focused;
  };
  
  this.isFormInvalid = function(form) {
    return !_isEmailValid(form.email) || !_isPasswordValid(form.password);
  };
  
  this.isLabelActive = function(input) {
    return input.$focused || input.$viewValue.length;
  };
  
  this.submit = function() {
    var self = this;
    
    this.success = true;
    
    $timeout(function() {
      self.success = false;
    }, 500);
    $location.path('list');
  };
});







var theList = function($scope) {
  $scope.todoList = ["one", "two", "three"];
  $scope.addTask = function() {
    console.log("add clicked: " + $scope.addTaskName);
    console.log("Current list: " + $scope.todoList);
    if ($scope.addTaskName) {
      $scope.todoList.push($scope.addTaskName);
      $scope.addTaskName = "";
    }
  };
  $scope.deleteTask = function(taskName) {
    $scope.todoList = $scope.todoList.filter(function(d) {
      return d != taskName;
    });
  };
};

app.controller("theList", ['$scope', theList]);






