const productRankings=[
    {"name":"AMD_Product-A","rank":1}, {"name":"AMD_Product-B","rank":10}, {"name":"AMD_Product-C","rank":2}, {"name":"AMD_Product-X","rank":4}]
  
  function top2Rank(arr) {
      // clone before sorting, to preserve the original array
      var clone = arr.slice(0); 
      prop = 'rank'
      n = 2
      // sort Ascending
      clone.sort(function(x, y) {
          if (x[prop] == y[prop]) return 0;
          else if (parseInt(x[prop]) > parseInt(y[prop])) return 1;
          else return -1;
      });
      // processed the top 2 ranks
      var targetData = clone.slice(0, n || 1);
  
      //Formatting the output
      var result = {}
      var temp_arr = []
  
      for(var i in targetData) {    
        var item = targetData[i];   
        temp_arr.push(item.name)
      }
      result['top2'] = temp_arr
  return result;
  }
console.log(top2Rank(productRankings))
