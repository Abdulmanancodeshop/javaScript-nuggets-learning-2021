const people = [
    {
        name: 'Abdul manan',
        age: 21,
        work: 'Web designer'
    },
    {
        name: 'M. Sultan',
        age: 54,
        work: 'Pak Navy'
    },
    {
        name: 'Satti',
        age: 21,
        work: 'Content writer',
        // color: [{fav: 'yellow'} , {col: 'pink'}]
    }
];
const person = people.map((items)=>{
    return {
        firstName: items.name.toUpperCase(),
        oldAge: items.age,
        position: items.work.toUpperCase()
    }
})
// console.log(person);
const names = people.map((getName)=>`<h3>${getName.name}</h3>`);
const result = document.querySelector('#result');
result.innerHTML = names.join('');
