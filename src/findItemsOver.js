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

    module.exports ={
      findi: findItemsOver
    }