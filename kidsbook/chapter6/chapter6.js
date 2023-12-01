
// let name = "Nicholas";
// console.log("Hello "  +  name);
// if (name.length>7)
// {

// console.log("Wow your name is long");
// }

// let naam = "Nicko"
// console.log("Hi "  +  naam);
// if (naam>7 )
// { 
//     console.log("Your name is long");
// }
// else {
//  console.log("Aw your name is short"); 
// }
// let lemonChicken = false;
// let beefWithBlackBean = false;
// let sweetAndSourPork = false;

// if (lemonChicken){
//     console.log("Yay i am having lemon chicken!!");
// }
// else if (beefWithBlackBean) {
//     console.log("I am having beef!");
// }
// else if(sweetAndSourPork){
//      console.log("I am having pork!");
// }
// else {
//       console.log("Well i guess i will have rice") ;
// }

// if (lemonChicken){
//     console.log("I am having lemon chicken!!");
// }
//  else if(beefWithBlackBean) {
//     console.log("I am having beef!");
//  }
//  else if(sweetAndSourPork){
//     console.log("I amhaving pork!")
// }
// else {
//     console.log("I am having pap");
// }
 
// let name ="Ruvimbo"
// if (name === "Nthabi"){
//     console.log("Hi stranger");
// }
// else if (name ==="Ruvimbo"){
//     console.log("Hi Rue");
// }

//LOOPS (WHILE LOOPS)
// let sheepCounted =0;
// while (sheepCounted <10) {
//     console.log("I have counted" + sheepCounted + "sheep");
//     sheepCounted++;
// } console.log("ZZzzzzz");

// //FOR LOOPS
// for(let sheepCount =0; sheepCount<10 ; sheepCount++){
//     console.log("I have counted" + sheepCount +"sheep!!");
// }
// let timesToSayHello = 3;
// for (let i = 0; i < timesToSayHello; i++) {
//  console.log("Hello!");
// }

//Using for Loops with Arrays and Strings 

// let animals =["Lion" , "Flamigo" , "Polar bear" , "Cow"];
// for(let i =0; i<animals.length; i++) {
//     console.log("This zoo contains a" + animals[i] );
// }
// let name = "Nick";
// for (let i = 0; i < name.length; i++) {
//  console.log("My name contains the letter " + name[i] + ".");
// }
// for (let x = 2; x < 10000; x = x * 2) {
//  console.log(x);
// }

//PROGRAMMING CHALLENGE
/*let animals = ["Cat", "Fish", 
"Lemur", "Komodo Dragon"]; */

// for (let i=0; i<animals; i++);{
//    console.log("Awesome " + animals[i] ); 
// } 
//PROGRAMMING CHALLENGE 2
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let randomWord = (Math.floor(Math.random()*alphabet.length));
console.log(alphabet[randomWord]); 
let justString = "";
while (justString <= alphabet.length){
    console.log(alphabet[randomWord]);
}