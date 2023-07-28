// import os from "os";
function largest(num1, num2, num3){
    // let holder = num1.toString() + num2.toString() + num3.toString();
    let res = Math.max(num1, num2, num3);
    console.log(res);
}
name = 'kamar';
age = 23;
largest(1,2,3);
let date = new Date();
console.log(Date());

let s = 'kamar524baraka';
let pttn = /kamar baraka/;
let dgts = /\d+/g;
let contbarak = /\bbaraka\b/i;
if (dgts.test(s))
    nameA = s.split(dgts);
    let nameS = nameA['join'](' ');
    console.log((nameS));

let jobs = process.argv[2];

let o = {x: 1}, p = {x: 1};
console.log('object' + 10);
