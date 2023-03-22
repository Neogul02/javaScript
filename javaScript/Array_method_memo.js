// JavaScript Array.txt
1. 
Array() // 배열
array =[1,2,3];
array[0]; // 1
array[1]; // 2
array[2]; // 3

2. 
Array.length // 배열의 길이를 구합니다
array.length; 

3.
Array.prototype.pop() // 배열의 마지막 요소를 제거하고 그 요소를 반환합니다
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// Expected output: "tomato"

console.log(plants);
// Expected output: ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// Expected output: ["broccoli", "cauliflower", "cabbage"]

4.
Array.prototype.push() // 배열의 끝에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환합니다.
const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count);
// Expected output: 4
console.log(animals);
// Expected output: ["pigs", "goats", "sheep", "cows"]


Array.prototype.concat() // 배열이나 값들을 기존 배열에 합칩니다
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

5.
Array.prototype.reverse() // 배열의 순서를 반전합니다 
const array_number = ['one', 'two', 'three'];
array_number.reverse();
// Expected output:["three", "two", "one"]

6.
Array.prototype.join() // 배열의 모든 요소를 연결해 하나의 문자열로 만듭니다
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(''));
// Expected output: "FireAirWater"

console.log(elements.join('-'));
// Expected output: "Fire-Air-Water"

7.
Array.prototype.map() // 배열 내의 모든 요소 각각에 대하여 주어진 함수를 
                      // 호출한 결과를 모아 새로운 배열을 반환합니다.
// arr.map(callback(currentValue[, index[, array]])[, thisArg])

const array_1 = [1, 4, 9, 16];      

const map1 = array1.map(x => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]
