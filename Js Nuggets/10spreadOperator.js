// spread operator...
// allows and iterable to spread/expand individually inside reciever
// split into single items and COPY them

const udemy = 'udemy'
const letters = [...udemy]
console.log(letters)
const boys = ['ahmed','usman','faizan']
const girls = ['asma','laiba','zuria']
const anonymous = 'ali'
console.log(boys)
const freinds = [...boys,anonymous,...girls]
console.log(freinds)
// Reference....
// const newFreinds = freinds
// newFreinds[1] ='sultan'
// console.log(newFreinds);
// console.log(freinds)
// copy...
const newFreinds = [...freinds]
newFreinds[1] ='sultan'
console.log(newFreinds);
console.log(freinds)
// ES2018  ES8 objects
const person = {name: 'ali',last: 'noman',job: 'developer'}
const newPerson = {...person,city: 'Karachi',name: 'Abdul'}
console.log(person)
console.log(newPerson)