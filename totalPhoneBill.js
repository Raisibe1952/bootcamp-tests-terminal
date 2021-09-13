module.exports = function totalPhoneBill(phone){
    let sms = 0.65;
    let call = 2.75;
    let total = 0;
    var divide = phone.split(',').map(str=>str.trim());
    
    for(let i=0;i<divide.length;i++){
      if(divide[i]=='call') total+=call;
      else if (divide[i]=='sms') total+=sms;
    }
    return "R"+total.toFixed(2).toString();
   }
   
   
   
 