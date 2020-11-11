let diff =require("./DateLib/diff.js") ;
let over=require("./DateLib/isTimeUp.js");
let getDiff=require("./DateLib/getDiff.js");

let mynow=new Date();
console.log(mynow);

let myexp=new Date("2020-11-12 20:00:00");
console.log(myexp);

let e=diff(myexp,mynow);
// console.log(e.m);
// console.log(e.h);
console.log(`${e.sign} ${e.d} Day, ${e.h} houre and ${e.m} minute and ${e.s} secound`);

let t=over(myexp,mynow);
console.log(t.status?"time is over":`remaning time is ${t.d} day , ${t.h} houre ,${t.m} minute و ${t.s} sec`);


let milisec=myexp.getTime()-mynow.getTime();
console.log(
  milisec,
  getDiff.fetchDay(milisec),
  getDiff.fetchHour(milisec),
  getDiff.fetchMin(milisec),
  getDiff.fetchSec(milisec)
);