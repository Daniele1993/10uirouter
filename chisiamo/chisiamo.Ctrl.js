angular.module('app').controller('chisiamoCtrl',function($scope,$state){
    $scope.titolo=$state.current.data.titolo;
})