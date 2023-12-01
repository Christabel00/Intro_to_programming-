// let dinosaurs = [
//     "T-Rex",
//     "Velociraptor",
//     "Stegosaurus",
//     "Triceratops",
//     "Brachiosaurus",
//     "Pteranodon",
//     "Apatosaurus",
//     "Diplodocus",
//     "Compsognathus"
//    ];
   //console.log(dinosaurs[5]);

   //MIXING DATA TYPES IN AN ARRAY
//    let dinosaurs = [3, "dinosaurs", "Bella" ,["triceratops",
//    "stegosaurus", 3627.5], 10]; 
// console.log(dinosaurs[3][0]);


//FINDING ARRAY LENGTH
// let dinosaurs = [
//     "T-Rex",
//     "Velociraptor",
//     "Stegosaurus",
//     "Triceratops",
//     "Brachiosaurus",
//     "Pteranodon",
//     "Apatosaurus",
//     "Diplodocus",
//     "Compsognathus"
//    ];
// console.log(dinosaurs.length-1);

//ADDING ELEMENTS TO AN ARRAY
// let animals = [];
// animals.push("Cat");

// animals.push("Dog");

// animals.push("Llama");

// console.log(animals);

//ADDING ELEMENTS AT THE BEGINNING OF AN ARRAY

// let animals = ["Dog" , "cat" , "pig" , "cow"];
// animals.unshift("monkey");
// console.log(animals);

//REMOVING ELEMENTS FROM AN ARRAY
// let animals = ["Bear" , "Cat" , "pig"];

// let lastAnimal = animals.pop();

// console.log(lastAnimal);
// console.log(animals);

// animals.unshift(lastAnimal);

//SHIFT MEthod
// let animals =
// ["Llama", "Polar Bear", "Monkey", "Cat"]
// let firstAnimal = animals.shift();
// console.log(animals);

//ADDING ARRAYS 
// let kids =["Ruvi" , "Bella" , "Kristy"];
// let adults =["Mercy" , "Tina" ,"Thembi"];
// let fruits =["Apple" , "banana"];
// let people = kids.concat(adults , fruits);
// console.log(people); 

//FINDING THE INDEX OF AN ELEMNT IN AN ARRAY
// let students = ["Bella" , "Ruvimbo" , "Mercy"];
// console.log(students.indexOf("Ruvimbo"));

//TURNING An INTO A STRING
// let boringAnimals = ["Monkey", "Cat", "Fish", "Lizard"];
// console.log(boringAnimals.join(" _"));

// let landmarks = [];
// landmarks.push("My house");
// landmarks.push("Front path");
// landmarks.push("Flickering streetlamp");
// landmarks.push("Leaky fire hydrant");
// landmarks.push("Fire station");
// landmarks.push("Cat rescue center");
// landmarks.push("My old school");
// landmarks.push("My friend's house");

// console.log(landmarks);
// landmarks.pop();

//DECISION MAKER
// console.log(Math.random()*12);

// let randomBodyParts = ["Face", "Nose", "Hair"];
// let randomAdjectives = ["Smelly", "Boring", "Stupid"];
// let randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];

// let randomBodyPart = randomBodyParts[Math.floor(Math.random()*3)];
// console.log(randomBodyPart);

// let randomAdjective = randomAdjectives[Math.floor(Math.random()*3)];
// console.log(randomAdjective);

// let randomWord = randomWords[Math.floor(Math.random()*4)];
// console.log(randomWord);

// let randomInsult = "You " + randomBodyPart + "Is " + randomAdjective + " " + randomWord;
// console.log(randomInsult);

// //Programming challenge 
// let bodyPart = ["face" , "mouth" , "legs"];
// let adjective =["funny" , "stupid" , "silly"];
// let animal = ["cat" , "dog" , "cow"];
// let animalBody = ["tail" , "horns" , "feet"];

// let randomBodyPart = bodyPart[Math.floor(Math.random()*3)];
// console.log(randomBodyPart);

// let randomAdjective = adjective[Math.floor(Math.random()*3)];
// console.log(randomAdjective);

// let randomAnimal = animal[Math.floor(Math.random()*3)];
// console.log(randomAnimal);

// let randomAnimalBody = animalBody[Math.floor(Math.random()*3)]
// console.log(randomAnimalBody);

// let randomInsult = "Your " + randomBodyPart + " are " + randomAdjective + " like a  " + randomAnimal + " " + randomAnimalBody;
// console.log(randomInsult);