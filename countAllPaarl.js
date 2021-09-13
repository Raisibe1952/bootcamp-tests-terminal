module.exports = function countAllPaarl(regNum){
    var reg=regNum.split(',').map(item=>item.trim());
    var list=0;
    for(var i=0;i<reg.length;i++){
      
      if(reg[i].includes('CJ')) list++;{
            }
    }                              
        return list;
    
   
  }
  
  