/* Object destructuring 1 :
let facts = {
    numPlanets: 8, 
    yearNeptuneDiscovered: 1846
}
let { numPlanets, yearNeptuneDiscovered } = facts;

Answer: 
console.log(numPlanets) // returns 8
console.log(yearNeptuneDiscovered) // returns 1846
*/

/* Object destructuring 2 :
let planetFacts = {
    numPlanets: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
};

let {numPlanets, ...discoveryYears} = planetFacts;

console.log(discoveryYears);

Answer:
{yearNeptuneDiscovered: 1846, yearMarsDiscoveredL 1659}
*/

/* Object destructuring 3 :
function getUserData({firstName, favoriteColor="green"}){
    return `Your name is ${firstName} and you like ${favoriteColor}`;
}

Answer:
getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // Your name is Alejandro and you like purple
getUserData({firstName: "Melissa"}) // Your name is Melissa and you like green
getUserData({}) // Your name is undefined and you like green
*/

/* Array destructuring 1 :
let [first, second, third] = ["Maya", "Marisa", "Chi"];

Answer:
console.log(first); // "Maya"
console.log(second); // "Marisa"
console.log(third); // "Chi"
*/

/* Array destructuring 2 :
let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
]

Answer:
console.log(raindrops); // "Raindrops on roses"
console.log(whiskers); // "Whiskers on kitten"
console.log(aFewOfMyFavoriteThings); // (3) ['Bright copper kettle','warm woolen mittens', 'Brown paper packages tied up with strings']
*/ 

/* Array destructuring 3 :
let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

Answer:
console.log(numbers) // (3) [10, 30, 20]
*/

// ES2015 refactoring :
/* 
var obj = {
    numbers: {
    a: 1,
    b: 2
}
};

var a = obj.numbers.a;
var b = obj.numbers.b;

Answer: 
const obj = {
    numbers: {
        a: 1, 
        b: 2
    }
};

const {a, b} = obj.numbers;
*/

/* Array swap :
var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;

Answer:
let arr = [1, 2];
arr[0], arr[1], = arr[1], arr[0]];
*/