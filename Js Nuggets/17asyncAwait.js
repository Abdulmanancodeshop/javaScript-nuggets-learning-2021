console.log('hi,Abdul manan')
async function hello(){
    console.log('inside hello function')
    const response = await fetch('http://api.github.com/users')
    console.log('before response');
    const users = await response.json()
    console.log('users resolve')
    return users
}
console.log('before calling function')
let a = hello()
console.log(a)
a.then((data)=>console.log(data))
console.log('last line of the script');