// const cart =[
//     {title: 'samsung Galaxy s7', price:'599.9', amount: 1,},
//     {title: 'google pixels', price:'499.9', amount: 2,},
//     {title: 'xiaome Redmi Note 2', price:'599.9', amount: 3,},
//     {title: 'xiaome Redme Note 5', price:'599.9', amount: 5,},
// ]
// let total = cart.reduce((total,cartItem)=>{
//     const {amount,price} = cartItem
//     // count item
//     total.totalItems += amount
//     total.cartTotal += amount*price
//     // total.cartTotal += price
//     return total
// },{
//     totalItems: 0,
//     cartTotal: 0,

// })
// console.log(total)
// // console.log(total.)
const people =[
    {count: 10,position: 'Ethical hacker',salary: 5000},
    {count: 20,position: 'peneterating tester',salary: 3000},
    {count: 5,position: 'Content writer',salary: 10},
    {count: 2,position: 'Web developer',salary: 700},

]
const total = people.reduce((total,person)=>{
    const {salary,count} = person
    // count salary
    total.salaryCount += salary
    total.menCount += count*salary
return total
},{
    salaryCount: 0,
    menCount: 0,
})
console.log(total)