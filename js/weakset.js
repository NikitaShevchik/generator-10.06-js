const users = [
    { name: 'Nikita' },
    { name: 'Alex' },
    { name: 'Oleg' }
]


const visit = new WeakSet()

visit
    .add(users[0])
    .add(users[1])



console.log(visit.has(users[0]))
console.log(visit.has(users[1]))
console.log(visit.has(users[2]))

users.splice(1, 1)

console.log(visit.has(users[0]))
console.log(visit.has(users[1]))
console.log(visit.has(users[2]))