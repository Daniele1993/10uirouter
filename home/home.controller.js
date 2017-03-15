angular.module('app').controller('homeCtrl',function($scope,$state){
    $scope.titolo=$state.current.data.titolo;

    $scope.listaAmici=[{
        id:1,
        nome:'daniele'
    },{
        id:2,
        nome:'fulvio'
    },{
        id:3,
        nome:'carlo'
    }];
})
