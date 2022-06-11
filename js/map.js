const obj = {
    name: 'Nikita',
    age: 22,
    job: 'Frontend'
}

const entries = [
    ['name', 'Nikita'],
    ['age', 22],
    ['job', 'Frontend']
]

// console.log(Object.entries(obj))
// console.log(Object.fromEntries(entries))

const map = new Map(entries)

// console.log(map.get('job'))

map.set('newField', 55)
    .set(obj, 'Value Of Object')
    .set(NaN, 'NaN &&&')

// console.log(map.get(NaN))

// console.log(map.delete('job'))
// console.log(map)
// console.log(map.size)
// console.log(map.has('name'))
// map.clear()
// console.log(map.size)

// for (let [key, value] of map){
//     console.log(key, value)
// }

// for (let val of map.keys()) {
//     console.log(val)
// }

// map.forEach((value, key, m) => console.log(value, key))



/*---------------*/

// const array = Array.from(map)

// const mapObj = Object.fromEntries(map.entries())

// console.log(mapObj)

/*---------------*/

const users = [
    { name: 'Nikita' },
    { name: 'Alex' },
    { name: 'Oleg' }
]

const visits = new Map()

visits
    .set(users[0], new Date())
    .set(users[1], new Date(new Date().getTime() + 1000 * 60))
    .set(users[2], new Date(new Date().getTime() + 5000 * 60))

function lastVisit(user) {
    return visits.get(user)
}

// console.log(lastVisit(users[1]))