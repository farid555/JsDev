const toCase = (name) => {
  console.log(name);
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

console.log(toCase("fArID"));

//*********************************** *//

const myArray = ["A", "B", "C", "D", "E", "F", "G"];

const newString = myArray.join();
console.log("string:", newString);
const newArray = newString.split(",");
console.log(newArray);

const myArrayA = ["A", "B", "C", "D"];
const myArrayB = ["E", "F", "G"];

const joinArray = myArrayA.concat(myArrayB);
console.log(joinArray);

const spreadArray = [...myArrayA, ...myArrayB];
console.log(spreadArray);

//*********************************** *//

const equipShelfA = ["baseBall", "football", "volleyball"];
const equipShelfB = ["basketall", "golf balls", "tennisball"];

const clothShelfA = ["tank tops", "t-shirts", "jerseys"];
const clothShelfB = ["sweat tops", "sweat pants", "hoodies"];

console.log(equipShelfA[1]);
//***or***//
console.log(equipShelfB[0]);

const equipDept = [equipShelfA, equipShelfB];
const clothDept = [clothShelfA, clothShelfB];

console.log(equipDept[0][1]);
console.log(clothDept[0][2]);

const sportsStore = [equipDept, clothDept];
console.log(sportsStore[0][1][2]);
console.log(sportsStore[1][1][0]);


//*********************************** *//
