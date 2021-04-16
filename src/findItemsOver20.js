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

    module.exports = {
      find:findItemsOver20
    }