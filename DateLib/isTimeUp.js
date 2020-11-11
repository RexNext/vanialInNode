function isTimeUp(exp,now){
sign="+";
 if(exp<now){
    return {
     'status':true,
      "d":0,
      "h":0,
      "m":0,
      "s":0,
      "sign":sign
   }
 }
diff_Secound=Math.floor((exp.getTime()- now.getTime())/1000);
day=Math.floor(diff_Secound  / (60*60*24));

diff_Secound=diff_Secound  % (3600*24);
h= Math.floor(diff_Secound  / 3600);

diff_Secound= Math.ceil(diff_Secound  % 3600);
m= Math.floor(diff_Secound  / 60);

diff_secound=Math.floor(diff_Secound % 3600);
let s = Math.floor(diff_Secound / 3600)%60;
  return{
    "d":day,
    "h":h,
    "m":m,
    "s":s,
    "status":false,
    "sign":sign
  }
}

module.exports=isTimeUp;