class Student extends Person {
  
  constructor(firstName,lastName,id, scores){
      super(firstName,lastName,id) 
      this.scores = scores
      
  }
  calculate(){
      let average = this.scores.reduce((acc, item, _, array) =>{
          return (parseInt(item)/array.length)+ acc;
      },0)

      if(average>=90 && average<=100)
        return `O`
      else if (average>=80 && average < 90)
        return `E`
      else if (average>=70 && average < 80)
        return `A`
      else if (average>=55 && average < 70)
        return `P`
      else if (average>=40 && average < 55)
        return `D`
      else if (average < 40)
        return `T`
    } 
}