// 1.使用commonjs的模块化规范
const {add,mul} = require('./mathUtils')

console.log(add(20,30));
console.log(mul(20,30));

// 2.使用es6的模块化规范
import {name,age,height} from "./js/info";

console.log(name);
console.log(age);
console.log(height);