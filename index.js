// let myFavoriteHero = "Hulk";
// let x = 50;
// let h = 5;
// let y = 10;
// let z = h + y;
// console.log(z);
// // 1.1;
// const character = { name: "Jack Sparrow", age: 10 };
// character.age = 25;
// console.log(character);
// // 1.2
// let firstName = 'Jon';
// let lastName = 'Snow';
// let age = 24;
// console.log('Soy ' + firstName + ' ' + lastName + "," + ' tengo ' 
// + age + " años " + "y " + "me gustan los lobos.")
// // 1.3
// const toy1 = {name: 'Buss myYear', price: 19};
// const toy2 = {name: 'Rallo mcKing', price: 29};
// console.log('La suma del precio de ambos juguetes es: ' + (toy1.price + toy2.price));
// let globalBasePrice = 10000;
// const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
// const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};
// globalBasePrice = 25000;
// console.log(globalBasePrice);
// car1.finalPrice = car1.basePrice + globalBasePrice;
// car2.finalPrice = car2.basePrice + globalBasePrice;
// console.log(car1)
// console.log(car2)
// 3.1
// let num1 = 10;
// let num2 = 5;
// console.log(num1 * num2)
// // 3.2
// let num3 = 2;
// console.log(num1/num3);
// // 3.3
// let num4 = 9;
// console.log((num1+num2) % num4);
// // 3.4
// let y = 10;
// let z = 5;
// let x = y + z;
// console.log(x)
// // 3.5 he usado la X mayúscula para volver a usar las variables ya hechas
// let X = y * z
// console.log(X)

// 4.1
// const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
// console.log(avengers[0]);
// // 4.2
// avengers[0] = "IRONMAN";
// console.log(avengers)
// // 4.3
// console.log(avengers.length)
// // 4.4
// const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
// rickAndMortyCharacters.push("Morty" , "Summer" );
// console.log(rickAndMortyCharacters [rickAndMortyCharacters.length - 1]);
// // 4.5
// rickAndMortyCharacters.pop();
// rickAndMortyCharacters.push("Lapiz Lopez");
// console.log(rickAndMortyCharacters[0] , rickAndMortyCharacters [rickAndMortyCharacters.length - 1]);
// // 4.6 (NO SÉ SI TENGO QUE CREAR LA NUEVA CONS, EN EL ANTERIOR AÑADÍ  "LAPIZ" PERO ME FALTA EL SUMMER Q EN PASOS ANTERIORES LO ELIMINÉ
// rickAndMortyCharacters.splice(1,1);
// console.log(rickAndMortyCharacters);
// 5.1
const number1 = 10;
const number2 = 20;
const number3 = 2;
if(number1 === 10){
    console.log('number1 es estrictamente igual a 10');
}
if ((number2/number1) == 2){
    console.log('number2 dividido entre number1 es igual a 2');
}
if (number1 !== number2){
    console.log("number1 es estrictamente distinto a number2");
}
if (number3 != number1){
    console.log("number3 es distinto number1");
}
if ((number3 * 5) == number1){
    console.log("number3 por 5 es igual a number1");
}
if ((number3 * 5) == number1 && (number1 * 2) == number2){
    console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
}
if ((number2 / 2) == number1 || (number1 / 5) == number3){
    console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
}
// 6.1
for (let i = 0; i <= 9; i++) {
    console.log(i);
}

