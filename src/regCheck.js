function regCheck(plate, conf){
    if(plate.endsWith(conf)){
       return true
      }
       
    else{
       return false
       }
  }
  module.exports = {
   reg: regCheck
  }