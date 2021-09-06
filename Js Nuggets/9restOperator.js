// Rest operator ...
// gathers/collects items
// destructuring, functions
// placement is  important, careful with the same name
// we use rest when we declare function, Spread when we invoke function

// ---Arrays---
const fruits = ['apple','banana','orange','lemon']
const [first,second,...restOfFruits]=fruits
console.log(first,second,restOfFruits)
const specificFruits = restOfFruits.find((fruit)=>fruit==='lemon')
console.log(specificFruits)
// ---objects--
const people = {name:'Abdul',last:'manan',job: 'developer'}
const {name,...restProperties} = people
console.log(name,restProperties)
// const specificProperties = restProperties.find((fruit)=>fruit==='job')
console.log(specificFruits)
// ---functions---
const getAverage = (name,...scores)=>{   //rest
    console.log(name);
    console.log(scores)
    const average = scores.reduce((total,items)=>{
        return total += items
    },0)/scores.length
    console.log(average)
}
// getAverage(people.name,89,18,100,500,20)
const testScores = [100,55,12,10,55]
getAverage(people.name,...testScores)   //spread
