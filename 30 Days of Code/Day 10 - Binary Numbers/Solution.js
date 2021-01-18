function sequence_count(n) {
  let quantity=[];
  let count=0;
  while(n !== 0){
    if(n % 2){
      count +=1;
    }else {
      if(count)
        quantity.push(count);
      count = 0;
    }
    n = parseInt(n/2)
  }
  if(count)
    quantity.push(count);
  return Math.max(...quantity) 
}
