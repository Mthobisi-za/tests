function isWeekday(param1){
	if(param1.startsWith("S")){
      	return false
    }
  
  	else{
    return true
    }
}

module.exports = {
  week: isWeekday
}