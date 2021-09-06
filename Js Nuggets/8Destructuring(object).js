const nick = {
    first: 'abdul',
    last: 'manan',
    city: 'Karachi',
    sibling: {
        sister: 'laiba',
    }
}
// console.log(nick)
// const {first,last,city,zip} = nick
// console.log(first,last,city,zip)
function printPerson(person){
    const {last,first,sibling:{sister}} =person
    console.log(last,first,sister)
}
printPerson(nick)