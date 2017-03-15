angular.module('app').service('contattiService',function(){
        var contatti = {
            citta:"Ancona",
            via:"tusorellaenazoccola",
            nazione:"burundi"
        };
        var getContatti=function(){
            return contatti;
        };

    return{
        getContatti:getContatti
    };
});