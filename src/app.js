function  greet(a){
    var name = a;
    return "Hello "+ a
}
function isFromBellville(carName){
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
  function fromWhere(num){
  
    if(num.includes("CY")){
    return "Bellville"
    }
    
     else if(num.includes("CJ")){
     return "Paarl"
     }
    
     else if(num.includes("CA")){
       return "Cape Town"
     }
    
     else{
     return "Some other place!"}
  }
  function findItemsOver20(str){
    var cap = str
    if(cap.length == 0){
      return 0
    }
    var product =[];
    for(let value of cap){
      var qu = value
      if(qu.qty > 20){
          product.push({name:qu.name, qty: qu.qty})
        }
    }
      return product
    }
    function findItemsOver(str, sec){
    var cap = str
    var product =[];
    for(let value of cap){
      var qu = value
      if(qu.qty > sec){
          product.push({name:qu.name, qty: qu.qty})
        }
    }
      return product
    }
    function mostProfitableDepartment(data){
      var emptyMap = {}
     for(i = 0; i < data.length; i++){
      var depart = data[i];
       emptyMap[depart.department] = 0 ;
      
     }
      for(i = 0; i < data.length; i++){
      var depart = data[i];
       var current = emptyMap[depart.department] 
       current += depart.sales
      emptyMap[depart.department] = current
     }
      var now = 0
      var text = ""
      for(const dep in emptyMap){
        const c = emptyMap[dep]
        if(c>now){
          now = c;
          text = dep;
          
        }  
      }
        return text
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
    fromw: fromWhere,
    find: findItemsOver20,
    findi: findItemsOver,
    most: mostProfitableDepartment
}
///*mochal --reporter mocha-simple-html-reporter --reporter-options output=report.htm */