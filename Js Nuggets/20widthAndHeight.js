// width/height - window, any element 
// innerHeight - window
// innerWidth - window
// getBoundingClientRect() - any element

console.log('height',window.innerHeight)
console.log('width',window.innerWidth)

const box = document.querySelector('.box')
const btn = document.querySelector('#btn')
btn.addEventListener('click',()=>{
    const dimension = box.getBoundingClientRect()
    console.log(dimension)
})
