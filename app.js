var APP = angular.module('app', ['ngRoute'])

APP.config(function ($routeProvider) {
  $routeProvider
    // .when('profile', {
    //   url: '/profile',
    //   templateUrl: 'profile.html',
    // })
    .when('/login', {
      templateUrl: 'login.html',
      controller: 'loginController'
    })
})

APP.controller('loginController', function ($scope) {
  $scope.logado = false
  $scope.loginObj = {}

  $scope.products = ['Milk', 'Bread', 'Cheese']

  $scope.logar = () => {
    localStorage.setItem('usuarioLogado', JSON.stringify($scope.loginObj))
  }
})
