
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
/*    greet: greet,
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
    findi: findItemsOver, */
    most: mostProfitableDepartment
}
///*mochal --reporter mocha-simple-html-reporter --reporter-options output=report.htm */