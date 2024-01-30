let dreamCar ={
    make : "bmw",
    model:"19",
    color: "white",
    year: 2022,
    bodyStyle: "sportsCar",
    price : 620
};

//alert("The type of dreamCar is: " + typeof dreamCar);
 alert( document.getElementById("pricetag").innerHTML =dreamCar.price);
 document.getElementById("modelyear").innerHTML=dreamCar.year;
 document.getElementById("body").backgroundColor = dreamCar.color;