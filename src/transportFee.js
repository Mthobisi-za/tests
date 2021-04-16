function transportFee(time){
    if(time.includes("morning")){
        return "R20"
      }
    
      if(time.includes("afternoon")){
        return "R10"
      }
    
    
      if(time.includes("nightshift")){
        return "free"
      }
  
  
  }
  module.exports = {
    trans: transportFee
  }