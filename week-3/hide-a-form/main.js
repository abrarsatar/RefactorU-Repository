angular.module("myApp", [ ])

angular.module("myApp")
.controller("alphaCtrl", alpha)
    

function alpha() {
    
    var alpha = this
    
    alpha.myObject = { }
    
    alpha.myObject.Name = "person"
    alpha.myObject.bio = "my bio dasfjadsflk ;jds  dafdsf sdaf dsfa "
    alpha.myObject.fBooks = "my fave books dsfadsf dsaf dsaf "
    alpha.myObject.faveJS = "my faveJS dsafadsf dasf adsf "    
    
    
    alpha.change = true
    
    alpha.newObject = { }
    
    alpha.newObject.Name = ""
    alpha.newObject.bio = ""
    alpha.newObject.fBooks = ""
    alpha.newObject.faveJS = ""
   
   
    alpha.editClick = function (){
       
       alpha.change = !alpha.change;
    
    }
    
    alpha.newText = function (){
       
    alpha.change = !alpha.change;
    alpha.myObject.Name=alpha.newObject.Name;
     alpha.myObject.bio=alpha.newObject.bio;
      alpha.myObject.fBooks=alpha.newObject.fBooks;
       alpha.myObject.faveJS=alpha.newObject.faveJS;

        
        
    }
    
    
    
    
}