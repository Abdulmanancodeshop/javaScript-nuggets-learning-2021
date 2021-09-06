function makeUpperCase(value){
    console.log(value.toUpperCase())
}
// makeUpperCase('abdul manan')

function handleName(name,cb){
const fullName = `${name} manan`
cb(fullName)
}
handleName('abdul',makeUpperCase);
 function reverseName(value){
    console.log(value.split('').reverse().join(''))
 }
//  reverseName('satti')
handleName('abdul',reverseName)
// its use in array method , setInterval , event listener etc
const btn = document.querySelector('#btn')
btn.addEventListener('click',function(){
    // btn.textContent = 'hello word'
    document.getElementById('btn').style.background='lightblue'
    // console.log('hello word')
})