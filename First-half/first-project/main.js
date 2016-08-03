angular.module('myApp', [ ])

angular.module('myApp')
    .controller('alphaController', alphaController )
    
    
    
function alphaController ( ) {
  console.log('alpha is working')
  
  

  var alpha = this
  // alpha.home = true;
  // alpha.profile = false;
  alpha.myValue = 10;
  
  alpha.slider = {
    value: 10
};
  
  alpha.homeClick = function () {
    alpha.home = true;
    alpha.profile = false;
    
  }
  
    
  alpha.profileClick = function () {
    alpha.home = false;
    alpha.profile = true;
    
  }
  
}





