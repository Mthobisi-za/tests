
function isFromBellville(carName){
    if(carName.startsWith("CY")){
        return true
    }
  
      else{
      return false
    }

};
module.exports ={
  bell: isFromBellville
}