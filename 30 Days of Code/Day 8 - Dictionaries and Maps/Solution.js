function processData(input) {
  const separateInput = separate(input, '\n')
  const dictionary = createDictionary(separateInput)
  verify(dictionary)
 }
 
 function separate(input, separator){
    return input.split(separator)
 }
 
 function createDictionary(data){
   const quantity = data[0]
   const dictionary = {}
   const arrayInputs = [] 
   for (let i = 1; i < data.length; i++) {
     if(i <= quantity){
       const [key, phone] = separate(data[i], ' ')
       dictionary[key] = phone
     }else{
       arrayInputs.push(data[i])
     }
   }
   return {dictionary , arrayInputs}
 }
 function verify({dictionary, arrayInputs}){
   arrayInputs.map((item, index )=> {
     if(dictionary[item]){
       console.log(`${item}=${dictionary[item]}`)
     }else{
       console.log('Not found')
     }
   })
 }