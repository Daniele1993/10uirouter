angular.module('app').controller('contattiCtrl',function($scope,
                                                         $state,
                                                         contatti
                                                            ){
    $scope.titolo=$state.current.data.titolo;
    $scope.via=$state.current.data.via;
    $scope.citta=$state.current.data.citta;
    $scope.contatti= contatti;
    
})

