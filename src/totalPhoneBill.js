 
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
  module.exports = {
    totalp: totalPhoneBill
  }