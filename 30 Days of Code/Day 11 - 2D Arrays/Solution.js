function sum(table , line, column){
  let result = 0;
  for (let i = line; i < line + 3; i++) {
    for (let j = column; j < column + 3; j++) {
      if(line +1 === i && column +1 === j){
        result += parseInt(table[i][j])
      }else{
        result += parseInt(table[i][j])
      }
    }
  }
  return result
}

function process_data(table){
  let max = -9999;
  let result = 0;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      result = sum(table, i , j)
      if(result > max){
        max = result
      } 
       
    }
  }
  console.log(max)
}