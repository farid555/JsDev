//***IMPORT / Modules*/

import User from "./user.js";
import playGuitar from "./guitars.js";
import { shredding as exam1, plucking as exam2 } from "./guitars.js";


//*** import * as Guitars from "./guitars.js" */

//*** Guitars.default() *///***Because it has export default function */
//*** Guitars.plucking() */
//*** Guitars.shredding() */

console.log(exam1());
console.log(exam2());
console.log(playGuitar());

const me = new User("mohammad@gmail.com", "Mohammad");

console.log(me.greeting());
