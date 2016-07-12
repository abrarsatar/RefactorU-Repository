angular.module("PokeApp", [ ]);

angular.module("PokeApp")
    .controller("PallettTown", [palletCtrl] );
    

function palletCtrl(){
    
    var pCtrl = this ;
    pCtrl.welcomeMessage = "Gotta Catch'em All!";
    
    pCtrl.pokemon = [
        "Charmander", 
        "Bulbasaur",
        "squirtle",
        "Vegetable",
        "2Scoops",
        "Jigglypuff"
        
        ];
    
    pCtrl.jigglyPuff = {
        squishiness : 7,
        rage        : 'irate',
        rockstar    : 'jigglypugg'
    };   
    
       pCtrl.clonedPokemon = [
        "Charmander", 
        "Bulbasaur",
        "squirtle",
        "Vegetable",
        "2Scoops",
        "Jigglypuff",
        "Bulbasaur",
        "Bulbasaur",
        "Bulbasaur",
        "squirtle",
        "squirtle",
        "squirtle",
         "Charmander", 
        "Bulbasaur",
        "Charmander", 
        "Bulbasaur",
        ];
        
        pCtrl.trainers = [ 
        
            {
                name    : "Ash",
                badges  : ["Earth", "Wind", "Fire"],
                skill   : 1,
      },
      
               {
                name    : "Misty",
                badges  : ["Water"],
                skill   : 3,
      },
      
               {
                name    : "Brock",
                badges  : ["Rock"],
                skill   : 5,
      },
      ];
    
    
}