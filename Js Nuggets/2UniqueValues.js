const menu = [
    {
        name: 'pancakes',
        catagory: 'breakfast'
    },
    {
        name: 'burger',
        catagory: 'lunch'
    },
    {
        name: 'steak',
        catagory: 'dinner'
    },
    {
        name: 'baccon',
        catagory: 'breakfast'
    },
    {
        name: 'eggs',
        catagory: 'breakfast'
    },
    {
        name: 'biryani',
        catagory: 'lunch'
    },
]
// const catagories = new Set(menu.map((item)=>item.catagory)); //for getting unique value we use set
const catagories = ['add',...new Set(menu.map((item)=>item.catagory))];
console.log(catagories);
const result = document.querySelector('.result');
result.innerHTML= catagories.map((catagory)=>{
    return `<button>${catagory}</button>`; 
}).join(' ');