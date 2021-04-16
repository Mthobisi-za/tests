function yearsAgo(year_1){
    var newYear = new Date()
    var fullYear = newYear.getFullYear()
    var differentYear = fullYear - year_1
    
    return differentYear
    }

    module.exports={
        years: yearsAgo
    }