var mynow=new Date();
console.log(mynow);

var myexp=new Date("2020-11-09 20:00:00");
console.log(myexp);


function getDiffNow(exp,now){
 
diff_Secound=Math.ceil((exp.getTime()- now.getTime())/1000);
day=Math.floor(diff_Secound  / (60*60*24));

diff_Secound=diff_Secound  % (3600*24);
h= Math.floor(diff_Secound  / 3600);

diff_Secound= Math.ceil(diff_Secound  % 3600);
m= Math.ceil(diff_Secound  / 60);

return{
  "d":day,
  "h":h,
  "m":m
}
//console.log(`expire time = day=${day},hour=${h},min=${m}`);
}
e=getDiffNow(myexp,mynow);
console.log(e.m);
console.log(e.h);
console.log(e.d);


///  if(exp.getTime()<now.getTime())
//   return{
//   "d":0,
//   "h":0,
//   "m":0
//   }
// console.log(exp.getTime());


//diff_secound = exp-now;
//console.log(new Date(diff_secound).getDay());
//console.log(new Date(diff_secound).getHours());
//////////////
