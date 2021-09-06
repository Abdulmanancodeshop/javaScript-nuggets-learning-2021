// const d = new Date();
// function getDate(){

// }
// function setTime(){
//     let d = new Date();
// }
// const date = setInterval(setTime(),1000)
// const container = document.getElementsByClassName(".container");
// const container = document.getElementsByid('container');  
// container.textContent= `<center><h2>${date}<h2></center>`;
// console.log(date);
setInterval(()=>{
    let a = new Date();
    document.querySelector('#container').innerHTML=`<center><h2>${a}</h2></center>`
},1000)