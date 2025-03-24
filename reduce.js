const numbers=[1,2,3,4,5]
const sum=numbers.reduce((accumulater,currentValue)=>{
  return accumulater+currentValue;
},9)
console.log(sum)