




const udemy ='udemy'
// console.log(Array.from(udemy))
const text = document.querySelectorAll('.text');
// console.log(text);
const newArray = Array.from(text).find((item)=>
    item.textContent === 'Person')
console.log(newArray)
const items = Array.from({length:120}, (_, index)=>{
return index
})
const itemsPerPage = 14
const page = Math.ceil(items.length/itemsPerPage)
console.log(page);
const newItems = Array.from({length: page},(_,index)=>{
    const start = index*itemsPerPage;
    const tempItems = items.slice(start,start+itemsPerPage);
    return tempItems
})
console.log(newItems)