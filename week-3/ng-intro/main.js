console.log(angular)

angular.module("myApp", [ ]);// []no depend

angular.module("myApp")
        .controller("alphaCtrl", alphaCtrl);
        

function alphaCtrl(){
    var alpha = this;
    alpha.exclaim= "!!!"

    alpha.hover = function(){
        alpha.myStyle = '{color:blue}'
        
    }
    
    
}