angular.module('app').controller('homeCtrl',function($scope,$state){
    $scope.titolo=$state.current.data.titolo;
})