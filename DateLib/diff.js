
function getDiff(exp,now){
sign="+";
 if(exp<now){
   tmp=exp;
   exp=now;
   now=tmp;
   sign="-";
 }
diff_Secound=Math.floor((exp.getTime()- now.getTime())/1000);
day=Math.floor(diff_Secound  / (60*60*24));

diff_Secound=diff_Secound  % (3600*24);
h= Math.floor(diff_Secound  / 3600);

diff_Secound= Math.floor(diff_Secound  % 3600);
m= Math.floor(diff_Secound  / 60);

diff_secound=Math.floor(diff_Secound % 3600);
let s = Math.floor(diff_Secound / 1000);

return{
  "d":day,
  "h":h,
  "m":m,
  "s":s,
  "sign":sign
}
}

module.exports=getDiff;

