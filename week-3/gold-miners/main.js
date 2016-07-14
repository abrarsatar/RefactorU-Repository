angular.module("myApp", [])

angular.module("myApp")
    .controller("myControl", myControl)
    
function myControl(){
    var alpha = this

    alpha.position = {}
    alpha.position.X = "500"
    alpha.position.Y = "600"


alpha.markerLocator = {}
alpha.markerLocator.Y = "600"
alpha.markerLocator.X = ""

alpha.myArray = []


alpha.markerPosition = "position:absolute; " + " top :" + alpha.position.Y +"px;"  + "left:" + alpha.position.X +"px;";

    


console.log(alpha.markerPosition) 


  alpha.myLocation = function(x,y) {
      alpha.markerLocator.X = event.x;
      alpha.markerLocator.Y = event.y;
      
       alpha.position.X = alpha.markerLocator.X - 45;
       alpha.position.Y = alpha.markerLocator.Y - 85;
       

       alpha.myArray.push("position:absolute; " + " top :" + alpha.position.Y +"px;"  + "left:" + alpha.position.X +"px;");
       
            alpha.markerPosition = "position:absolute; " + " top :" + alpha.position.Y +"px; left:" + alpha.position.X +"px;";
            
        console.log(alpha.myArray)
        
    }
    
}