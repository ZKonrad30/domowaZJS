// Zadanie 1
// let anArray = Array.from(Array(101).keys());
// console.log(anArray);

// function checkPrime(number) {
//     if (number <= 1) {
//         return false;
//     } else {
//         for (let i = 2; i < number; i++) {
//             if (number % i == 0) {
//                 return false;
//             }
//         }
//         return true;
//     }
// }

// function primeArray() {
//     let arrayOfParams = [];
//     anArray.forReach(function (element) {
//         const isPrime = checkPrime(element)
//         if (isPrime) {
//             arrayOfParams.push(element);
//         } else {
//             return;
//         };
//     });
//     console.log(arrayOfParams);
// };

// primeArray();

//Zadanie 2

//   const random = Math.floor(Math.random() * 100) + 1;
//   let numberOfTries = [];

//  function guessANumber (number) {
//     console.log(random);
//     if (numberOfTries.includes(number) == true){
//       console.log('You have already used that number!')
//     } else {
//   if (number > random) {
//     console.log('Too large');
//     numberOfTries.push(number);
//   } else if (number < random) {
//     console.log('Too small');
//     numberOfTries.push(number);
//   } else {
//     console.log(`You have guessed it! Number of tries: ${numberOfTries.length}`)
//     return;
//   };
//     };
//       };

//     guessANumber(5);
//     guessANumber(7);
//     guessANumber(7);
//     guessANumber(12);
//     guessANumber(26);
//     guessANumber(47);
//     guessANumber(39);
//     guessANumber(6);
//     guessANumber(78);
//     guessANumber(97);

//Zadanie 3

// const array = [1,2,3,4,5,6];

// let numberOfRotations = function(arr,num) {
//   let counter = 1;

//   (function rotateNumbers () {
//     arr.unshift(arr.pop())
//     console.log(arr);

//       if (counter < num) {
//           counter++;
//           setTimeout(rotateNumbers, 400);
//       }
//   })();
// };

// numberOfRotations(array, 5);

//Zadanie 4

// class FibonacciList {
//   constructor(nNumber,fibArr){
//     this.nNumber = nNumber;
//     this.fibArr = [1,1];
//   }
//   createList() {
//     for(let i = 2; i < this.nNumber; i++){
//       this.fibArr.push((this.fibArr[i-1] + this.fibArr[i-2]));}
//     return this.fibArr;
//   }
// }

// let firstFibList = new FibonacciList(10,[1,1]);
// console.log(firstFibList.createList());

//Zadanie 5

// function onlyNumbers (input) {
//   if(typeof input === 'number') {
//     let arrayOfNumbers = String(input).split("");
//     console.log(arrayOfNumbers);
//   } else {
// let arr = input.split("");
// let nums = arr.filter((element) => {
//   return !isNaN(element);
// });
//   console.log(nums);
//   }
// }

// onlyNumbers('A243b');
// onlyNumbers('1234');

// Zadanie 6

// class Translator {
//   constructor(text,translateMethod){
//       this.text = text;
//       this.translateMethod = translateMethod;
//   }

//   Translate(){
//       return this.translateMethod(this.text);
//   }
// }

// class TranslationsEngine {
//   toPigLatin(text){
//       console.log('Translationg started...')
//       // actual code modification
//       return text + "after modification";
//   }

//   reverseToPigLatin(text){
//       //actual code transformation
//       return text + 'after modification';
//   }
// }

// let translationEngine = new TranslationsEngine();
// let toPigLatinTranslation = new Translator('The quick brown fox', translationEngine.toPigLatin);

// console.log(toPigLatinTranslation.Translate());
// let fromPigLatinToEnglish = new Translator("Hetay uickqay rownbay oxfay", TranslationsEngine.reverseToPigLatin)
// console.log(fromPigLatinToEnglish.Translate());