// Filter - returns a new Array, can manipulate the size of new array (unlick map), retun based on condition
// find - returns single instance , return first match , undefined
// filter..................
const data =[{name:'Abdul manan',age: 20,salary: 50000},
{name:'Satti',age: 21,salary: 50000},
{name:'Sultan',age: 55,salary: 70000},
{name:'rizwan',age: 27,salary: 100000},];
const fltr = data.filter((dt)=>{
    if(dt.age==55){
        return true;
    }
})
// find ---------
const people = data.find((person)=>{
    return person.salary > 70000; 
})
console.log(people)
console.log(people['age'])
console.log(people['name'])
const findLuckey = data.find((person)=> {
    // return person.age > 21;
    return person.name ==='abdul'
})
console.log(findLuckey);