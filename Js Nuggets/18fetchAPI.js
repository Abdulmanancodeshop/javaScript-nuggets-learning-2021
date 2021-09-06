const url = 'http://www.course-api.con/react-tours-project'
// const url = '2UniqueValues.js'
// fetch(url).then((response)=>{
//     console.log('resolve'+response)
// }).catch((err)=>{
//     console.log('rejected'+err);
// })
// console.log(fetch(url));-
// 1st method ---
// fetch(url)
// .then((resp)=>resp.json())
// .then((data)=>console.log(data))
// .catch((err)=>console.log(err))
// 2nd method---
const getTours = async ()=>{
    try {
        const resp = await fetch(url)
        const data = await data.json()
        console.log(data)
    } catch (error) {
        console.log(error);
    }
}
console.log(getTours())