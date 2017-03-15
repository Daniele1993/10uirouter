angular.module('app').config(function(
    $stateProvider

){
    $stateProvider.state('home',{
        url:'/home',
        templateUrl:'home/home.template.html',
        controller:'homeCtrl',
        data:{
            titolo:"Questa è la home page"
        }
    })
    .state('contatti',{
        url:'/contatti',
        templateUrl:'contatti/contatti.template.html',
        controller:'contattiCtrl',
        data:{
            titolo:'forse fuonziona...shhhhh....',
            citta:'ancona',
            cap:60126,
            via:'tusorellaenazoccola'
        },
       
        //viene eseguita prima di accedere alla rotta
        resolve:{
            contatti:function(contattiService){
    
                return contattiService.getContatti();
            

        }
        }

    })
    .state('chisiamo',{
        abstract:'true',
        url:'/chisiamo',
        templateUrl:'chisiamo/chisiamo.template.html',
        controller:'chisiamoCtrl',
        data:{
            titolo:'ciao'
        }

    })
    // stato annidato
    .state('chisiamo.about',{
      url:'/about',
      templateUrl:'chisiamo/chisiamo.about.html', 
    })

    .state('chisiamo.mission',{
      
      url:'/mission',
      templateUrl:'chisiamo/chisiamo.mission.html', 
    })
        
        
});