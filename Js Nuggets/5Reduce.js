// Reduce
// iterates, calllback function
// reduce to a single value= number, array, object
// 1st parameter ['acc'] - total all calculation
// 2nd parameter ['curr'] - current iteration/value  
const staff =[
    {name: 'Abdul', position: 'Developer',salary: 500},
    {name: 'A.manan', position: 'Developer',salary: 100},
    {name: 'Sultan', position: 'Developer',salary: 200},
    {name: 'Satti', position: 'Developer',salary: 300},
]
const salaryTotal = staff.reduce((total,person)=>{
console.log(total);
console.log(person.salary);
total += person.salary;
return total
},0)
console.log(salaryTotal)