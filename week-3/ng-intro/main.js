angular.module("myApp", [ ])

angular.module("myApp")
    .controller("alphaCtrl", 
    alphaCtrl
    )
    

function alphaCtrl(){
    var alpha = this
    
    alpha.exclaim = "!!!"
    alpha.sight = true
    
    alpha.confirm = function(){
        var reply = confirm("Are you sure you want to leave this page?")  
        if (reply == false){
            event.preventDefault();
            alpha.sight = false
            
        }
    }
    
    alpha.backshow = false
    alpha.lightbox = function(){
        alpha.backshow = !alpha.backshow
    }
}