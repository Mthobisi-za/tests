function  greet(a){
    var name = a;
    return "Hello "+ a
}
function isFromBellville(carName){
    console.log(carName)
      if(carName.startsWith("CY")){
          return true
      }
    
        else{
        return false
      }
  
  };
  function regCheck(plate, conf){
    if(plate.endsWith(conf)){
       return true
      }
       
    else{
       return false
       }
  }
function countRegNumber(str){
  return str.split(",").length
  
}
function isWeekday(param1){
	if(param1.startsWith("S")){
      	return false
    }
  
  	else{
    return true
    }
}
function yearsAgo(year_1){
  var newYear = new Date()
  var fullYear = newYear.getFullYear()
  var differentYear = fullYear - year_1
  
  return differentYear
  }
  function countAllPaarl(reg){
    var fg = reg.split(",")
      let num = 0
      for(var i = 0; i < fg.length; i++){
        var word = fg[i].trim()
          if(word.startsWith("CJ")){
            num = num + 1
          }
      }
    return num
  }
  //---------loops
  function countAllFromTown(firStr, secStr){
    var splitted = firStr.split(',')
      var empty = []
      for(var i = 0; i < splitted.length; i++){
        var con = splitted[i].trim()
        if(con.startsWith(secStr)){
          empty.push(con)
        }
      }
    console.log(empty.length)
    return   empty.length
  }
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
  function totalPhoneBill(str){
    var strg = str.split(',')
  let costSms = 0
  let countSms = 0
  let countCall = 0
    for(var i = 0; i < strg.length; i++){
        var word = strg[i].trim()
          if(word.startsWith("sms")){
            countSms = countSms + 1
          }
          if(word.startsWith("call")){
              countCall = countCall + 1
             }
      }
    let sms = 0.65 * countSms
    let call = 2.75 * countCall
    var total = sms + call
    return  "R" + total.toFixed(2)
  }


module.exports ={
    greet: greet,
    bell: isFromBellville,
    total: countRegNumber,
    reg: regCheck,
    week: isWeekday,
    years: yearsAgo,
    all: countAllPaarl,
    from: countAllFromTown,
    ////--------undeclared functions
    trans: transportFee,
    totalp: totalPhoneBill,
//    fromw: fromWhere,
//    find: findItemsOver20,
//    findi: findItemsOver,
//    most: mostProfitableDepartment
}
///*mochal --reporter mocha-simple-html-reporter --reporter-options output=report.htm */