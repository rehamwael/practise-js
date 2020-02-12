function createGreeting(){
    //input
    var hourNow = prompt("enter a Number between 0 - 24");
    var greeting;
    //processing 
    if (hourNow>18 && hourNow <= 24){
        greeting='Good evening!';
    }
    else if (hourNow>12 && hourNow <= 18){
    greeting='Good afternoon!';
    }
    else if (hourNow>0 && hourNow  <= 12){
        greeting='Good morning!';
    }else{
        greeting = 'try another value';
    }

    // output
    return greeting;
}

var showOrder = function(){
 //input 
 var userOrder;
 var orderImage = '';
  //processing 
  while(userOrder !== "house" && userOrder !== "hotel"){
      userOrder = prompt("please enter house or hotel");
  }
  var numberOfImages;
  numberOfImages = prompt("how many images do you want");
  for(var i = 0 ; i < numberOfImages ; i++){
      console.log("index is " + i);
    if(userOrder === "hotel"){
        orderImage = orderImage + '<img src="images/hotel.png">';
     }else if(userOrder === "house"){
         orderImage = orderImage + '<img src= "images/house.png">';
     }
  }

 return orderImage;
 //output
}

document.write('<p>'+ showOrder() +'</p>');

