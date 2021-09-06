const people =[
    {
        name: 'Abdul',
        location: {street: 'bloack 98 flat 11',
        timezone: {offset: '+7:00'}},
    },
    {
        name:'satti',
        location: {street: 'Karachi street'},
    },
    {
        name: 'sultan',
        location: {street: 'abbotabad street',
        timezone:{offset: '+9:00'}},
    },
]
// console.log(people)
people.forEach(person => {
    // console.log(person.name)
    // console.log(person.location && person.location.timezone && person.location.timezone.offset)
    console.log(person?.location?.timezone?.offset || 'hello')  //optional changing in js
});