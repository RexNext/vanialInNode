var diff =require("./DateLib/diff.js") ;
var over=require("./DateLib/isTimeUp.js");

var mynow=new Date();
console.log(mynow);

var myexp=new Date("2020-11-09 22:00:00");
console.log(myexp);

e=diff(myexp,mynow);
// console.log(e.m);
// console.log(e.h);
console.log(`${e.sign} ${e.d} Day, ${e.h} houre and ${e.m} minute`);

t=over(myexp,mynow);
console.log(t.status?"time is over":`remaning time is ${t.d} day , ${t.h} houre ,${t.m} minute`);