const first = document.querySelector('.first')
const second = document.querySelector('.second')
const third = document.querySelector('.third')
const first1 = document.querySelector('.first1')
const second1 = document.querySelector('.second1')
const third1 = document.querySelector('.third1')
const btn = document.querySelector('#btn');

btn.addEventListener('click',function(){
    // console.log('hello word')
    setInterval(() => {
        setTimeout(()=>{
            first.style.color='red'
            setTimeout(()=>{
                second.style.color='green'
                setTimeout(()=>{
                    third.style.color ='blue'
                    setTimeout(()=>{
                        first1.style.color='orange'
                        setTimeout(()=>{
                            second1.style.color='violet'
                            setTimeout(()=>{
                                third1.style.color ='aqua'
        },900)
        },900)
        },900)
        },900)
        },900)    
        },900)
    })
    
    }, 6000);
//     setTimeout(()=>{
//         first.style.color='red'
//         setTimeout(()=>{
//             second.style.color='green'
//             setTimeout(()=>{
//                 third.style.color ='blue'
//                 setTimeout(()=>{
//                     first1.style.color='orange'
//                     setTimeout(()=>{
//                         second1.style.color='violet'
//                         setTimeout(()=>{
//                             third1.style.color ='aqua'
//     },900)
//     },900)
//     },900)
//     },900)
//     },900)    
//     },900)
// })

