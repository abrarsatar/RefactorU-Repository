angular.module("myApp", [])

angular.module("myApp")
    .controller("myControl", myControl)
    
function myControl(){
    var alpha = this
    
    alpha.position = {};
    alpha.position.X = "500";
    alpha.position.Y = "600";


alpha.markerLocator = {};
alpha.markerLocator.Y = "600";
alpha.markerLocator.X = "";

alpha.myArray = []


alpha.markerPosition = "position:absolute; " + " top :" + alpha.position.Y +"px;"  + "left:" + alpha.position.X +"px;";

    alpha.remove = function($index){
            alpha.myArray.splice($index,1) ;
    }


  alpha.myLocation = function(x,y) {
      alpha.markerLocator.X = event.x;
      alpha.markerLocator.Y = event.y;
      
       alpha.position.X = alpha.markerLocator.X -14;
       alpha.position.Y = alpha.markerLocator.Y -25;
       

       alpha.myArray.push("position:absolute; " + " top :" + alpha.position.Y +"px;"  + "left:" + alpha.position.X +"px;");
       
            alpha.markerPosition = "position:absolute; " + " top :" + alpha.position.Y +"px; left:" + alpha.position.X +"px;";
            
    }
    
    
    
    
    
    
    
// alpha.note = ["", "", "", "", "", "", ""]
// alpha.setNewText = ["", "", "", "", "", "", ""]

// alpha.visible = "true"    
    
    
//             //     <p                  style = {{n}}       ng-click = "alpha.editText($index)" ng-show = "!alpha.visible" ng-model = "alpha.setNewNote.$index" >{{$index}} {{alpha.note.$index}}  </p>
            
//             // <input type = "form"  style = {{n}}     ng-blur = "alpha.makeNote($index)"  ng-show = "alpha.visible" ng-model = "alpha.setNewText.$index">
   
// // ng-blur = "alpha.makeNote($index)" 
//       alpha.makeNote = function($index){
    
//         alpha.note[$index] = alpha.setNewText[$index]
//         alpha.visible = !alpha.visible

//     } 
    
//     // ng-click = "alpha.editText($index)" 
//     alpha.editText = function($index){
//         alpha.visible = !alpha.visible
        
//     }
    
    
}