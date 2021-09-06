
// promises can be Pending, fulfilled or rejected
// .then is for resolve to get a value
// .catch is for rejectt to get a value
const value =2
const promise = new Promise((resolve,reject)=>{
    const random = Math.floor(Math.random()*3)
    console.log(random)
    if(random===value){

        resolve('you guessed the correct result')
    }
    else{

        reject('you guessed the wrong result')
    }
})
console.log(promise)
promise.then((data)=>console.log(data)).catch((err)=>console.log(err))