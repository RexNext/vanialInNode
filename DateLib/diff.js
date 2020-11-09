
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

diff_Secound= Math.ceil(diff_Secound  % 3600);
m= Math.ceil(diff_Secound  / 60);

return{
  "d":day,
  "h":h,
  "m":m,
  "sign":sign
}
}

module.exports=getDiff;

