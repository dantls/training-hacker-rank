function compareTriplets(a, b) {
  let resultado = [0, 0]
  for(let i=0 ; i < a.length ;i++){
     resultado[0] += Number(a[i] > b[i])
     resultado[1] += Number(a[i] < b[i])      
  }
  return resultado
}