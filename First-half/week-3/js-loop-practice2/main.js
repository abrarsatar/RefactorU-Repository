var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];

//   rat cat butterfly marmot
var first = function (animals) {
    var newarray = []
    for (i = 0; i < animals.length - 1; i++){
        newarray.push(animals[i])
        
        
    } return newarray

}
first(animals)


//   rat butterfly ocelot
var second = function(animals) {
        var newarray = [ ]
    for (i = 0; i < animals.length;){
        newarray.push(animals[i]);
        i = i + 2;
        
    }return newarray
}
second(animals)    

//   ocelot marmot butterfly cat rat
var third = function(animals) {
        var newarray = [ ]
    for (i = animals.length; i > 1; i++){
        newarray.push(animals[i]);

    }return newarray
}
third(animals)  



//   rat cat cat butterfly butterfly marmot marmot ocelot
var fourth = function(animals) {
    var newarray = []
      for (i = 0; i < animals.length; i++){
          if (i == 0 || i == animals.length - 1){
            newarray.push(animals[i])
          }else {
            newarray.push(animals[i])
            newarray.push(animals[i])

          }
        
    } return newarray

    
}
fourth(animals)

