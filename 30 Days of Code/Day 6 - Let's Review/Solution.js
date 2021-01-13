function showResult(result){
  result.map(item => {
      const [pair, odd] = item;
      console.log(`${pair} ${odd}`)
  })
}
function processData(input) {
  let result = [];
  let words = input.split('\n');
  for (let i = 1; i < words.length; i++) {
      let odd = '' , pair = '';
      words[i].split('').forEach((caracter, index) => {
          if(index % 2){
              odd = odd.concat(`${caracter}`);
          }else{
              pair = pair.concat(`${caracter}`);
          }
      })
      result.push([pair, odd])
  }
  showResult(result)
}
