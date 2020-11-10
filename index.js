let diff =require("./DateLib/diff.js") ;
let over=require("./DateLib/isTimeUp.js");

let mynow=new Date();
console.log(mynow);

let myexp=new Date("2020-11-10 22:00:00");
console.log(myexp);

let e=diff(myexp,mynow);
// console.log(e.m);
// console.log(e.h);
console.log(`${e.sign} ${e.d} Day, ${e.h} houre and ${e.m} minute`);

let t=over(myexp,mynow);
console.log(t.status?"time is over":`remaning time is ${t.d} day , ${t.h} houre ,${t.m} minute`);