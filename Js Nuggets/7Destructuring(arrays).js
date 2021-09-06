const freinds = ['Abdul','manan','satti','waqas','sultan']
const[water, sugar ,rice, salt ] = freinds
console.log(water,sugar,salt,rice)
// --------------
// let first = 'Abdul'
// let second = 'manan'
// let temp = second
// second = first
// first = temp
// console.log(first,second)
// ----------------
let first = 'Abdul'
let second = 'manan'
[second,first] = [first,second]
console.log(first,second)
