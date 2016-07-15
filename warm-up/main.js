angular.module("CakeApp", [ ])
    .controller("menuController" , 
    ['CheesecakeFactory',
    menuController])
    
    
    .controller("menuOrderController" ,
        [ 
        'CheesecakeFactory',
        menuOrderController])
        
        
        
    .factory('CheesecakeFactory', CheesecakeFactory)


function menuController(CheesecakeFactory) {
   
   console.log("menuController is loaded")
    
    var menu = this
    menu.items = CheesecakeFactory.menuItems;
    menu.title = 'Awesome Sauce'
    
    menu.lowCalories = function (menuItem) {
    return menuItem.calories < 2000    
    }
    
    
}    




function menuOrderController(CheesecakeFactory){
 console.log("menuOrderController is loaded", CheesecakeFactory)
    var menu = this
    menu.items = CheesecakeFactory.menuItems;

    
}







function CheesecakeFactory () {
    
    console.log("factory is loaded")
    
    var menuItems = [
        {
        name: 'Egg Roll',
        calories: 6000,
        deliciousness: 3,
        flavor: 'southwestern',
        price: 50
       
        },
          {
        name: 'strawberry cheesecake',
        calories: 1500,
        deliciousness: 9,
        flavor: 'strawberry',
        price: 9.95 

        },
          {
        name: 'Turtle Cheesecake',
        calories: 1800 ,
        deliciousness: 10,
        flavor: 'Chocolate Turtle',
        price: 13,
        }
        ]
    
    
    
    var MenuTitle = "Lunch & Dinner"
    
    return {
        menuItems: menuItems,
        title: MenuTitle,
        
        
    }
        
    
}