angular.module('app').config(function(
    $stateProvider

){
    $stateProvider.state('home',{
        url:'/home',
        templateUrl:'home/home.template.html'
    })
    .state('contatti',{
        url:'/contatti',
        templateUrl:'contatti/contatti.template.html'
    })
    .state('chisiamo',{
        url:'/chisiamo',
        templateUrl:'chisiamo/chisiamo.template.html'
    });

        
        
});