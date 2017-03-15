angular.module('app').controller('dettaglioCtrl',function($scope,$stateParams){
   
   var id=$stateParams.id;
   $scope.amico =$scope.listaAmici[id-1];
})