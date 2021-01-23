function plusMinus(arr) {
  const result = {positive:0 , negative:0 , zero: 0}
  const n = arr.length;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] > 0){
      result.positive++
    }else if(arr[i] < 0){
      result.negative++
    }else {
      result.zero++
    }   
  }
  console.log((result.positive/n).toFixed(6))
  console.log((result.negative/n).toFixed(6))
  console.log((result.zero/n).toFixed(6))
}