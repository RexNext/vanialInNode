var diff =require("./DateLib/diff.js") ;

var mynow=new Date();
console.log(mynow);

var myexp=new Date("2020-11-09 21:00:00");
console.log(myexp);

e=diff(myexp,mynow);
console.log(e.m);
console.log(e.h);
console.log(e.d);