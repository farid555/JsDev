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

// **global scope**//

//**var x = 1; // **2015**//

//*const z = 13;

// **local scope**//

function myFun() {
  const z = 5;
  console.log(z);

  // **local scope**//

  {
    let y = 55;
    console.log(y);
  }
}
myFun();

//*********************************** *//

//**Global scope */

var x = 1;
let y = 2;
const z = 3;

console.log(`global: ${x}`);
console.log(`global: ${y}`);
console.log(`global: ${z}`);

function myfunc() {
  var x = 10;
  const z = 5;

  {
    var x = 11; //**var is  function scoped */
    const z = 6; //**const is  block scoped */
    console.log(`block: ${x}`);
    console.log(`block: ${y}`);
    console.log(`block: ${z}`);
  }

  console.log(`function: ${x}`);
  console.log(`function: ${y}`);
  console.log(`function: ${z}`);
}

myfunc();

//***Object***//

const myObj = { name: "Mohammad" };
console.log(myObj);

const anotherObject = {
  alive: true,
  answer: 43,
  hobbies: ["Eat", "Sleep", "Code"],
  beverage: {
    morning: "Cooffe",
    afternoon: "Iced Tea",
  },
  action: function () {
    return "Hello there!";
  },
  earlyMornin: function () {
    return `Time for ${this.beverage.morning}`;
  },
};

console.log(anotherObject.beverage.afternoon);
console.log(anotherObject["beverage"]["morning"]);
console.log(anotherObject.action());
console.log(anotherObject.earlyMornin());

//***Vehical Object***//

const vehical = {
  wheels: 4,
  engine: function () {
    return "Vrrooom!";
  },
};

const truck = Object.create(vehical);
truck.doors = 2;
console.log(truck);
console.log(truck.wheels); //** Inheritance */
console.log(truck.engine());

const car = Object.create(vehical);
car.doors = 4;
car.engine = function () {
  return "Whooooosh!";
};

console.log(car.engine());
console.log(car.wheels);

const tesla = Object.create(car);
console.log(tesla.wheels);

tesla.engine = function () {
  return "Shhhhhh...";
};

console.log(tesla.engine());

//** Object key-value */

const band = {
  vocals: "Robert Plant",
  guitar: "Jimmy Page",
  bass: "Jhone Paul Jones",
  drums: "John Bonham",
};

/delete band.drums; /; /**Delete the Drums Keys */
console.log(band.hasOwnProperty("drums"));

console.log(Object.keys(band)); //**Keys */
console.log(Object.values(band)); //**properties */

for (let job in band) {
  console.log(`On ${job}, it's ${band[job]}!`); //**Keys and properties*/
}

//**destructuring Objects */

const { guitar: myVariable, bass: myBass, vocals, drums } = band;
console.log(myVariable);

console.log(myBass);
console.log(vocals);
console.log(drums);

function sings({ vocals }) {
  return `${vocals} sings!`;
}
console.log(sings(band));
