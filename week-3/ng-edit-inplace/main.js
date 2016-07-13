// Create a static user profile with HTML and CSS.
// Add a click handler to each text block.
// When a text block is clicked, hide the text block and display an input in its place. 
// The input should take up the same space as the text block so that the transition from text to editable field is seamless and doesn't throw off the layout.

// When the input is blurred:
// Hide the input.
// Show the text block.
// Update the text block with the new text.
// COMPLETE



angular.module("myApp", [ ])

angular.module("myApp")
    .controller("alphaCtrl", [alphaCtrl])
    
    
function alphaCtrl (){
    var alpha = this
    
    
    alpha.inputs = [ ];
    
    alpha.inputs[0] = "person";
    alpha.inputs[1] = "email@person.com";
    
    alpha.inputs[2] = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    
    alpha.change = [ true, true, true]
    
    alpha.edit = function (which){
        alpha.change[which] = !alpha.change [which]
         
    } 
    
      alpha.newtext = function (which){
        alpha.change[which] = !alpha.change [which]
        alpha.inputs[which] =  alpha.value[which];
    } 
    
 
    // alpha.newtext = function (which){
    //     alpha.inputs(which) = 
    // }
    

    
}