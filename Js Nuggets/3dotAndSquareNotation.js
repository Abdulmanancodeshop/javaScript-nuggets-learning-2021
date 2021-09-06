// dot notation.....
const person ={
    name: 'Abdul manan',
}
console.log(person.name);
person.age=43;
console.log(person);
// square notation .....
const items ={
    ['featured-item']:'banana',
}
console.log(items['featured-item']);
console.log(items)
items['computer']='games';
console.log(items);
// ..............................
function menu (key,value){
    items[key]=value;
}
menu('pakistan','Karachi');