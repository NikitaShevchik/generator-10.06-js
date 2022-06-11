
// let obj = { name: 'weakmap' }

// // const arr = [obj]

// // obj = null

// // console.log(arr)

// const map = new WeakMap([
//     [obj, 'obj data']
// ])

// // get set delete has

// obj = null

// // console.log(map.get(obj))

// /*---------------*/

// const cache = new WeakMap()

// function cacheUser(user) {
//     if (!cache.has(user)) {
//         cache.set(user, Date.now())
//     } return cache.get(user)
// }

// let oleg = { name: 'Oleg' }
// let alex = { name: 'Alex' }

// cacheUser(oleg)
// cacheUser(alex)

// alex = null

// console.log(cache.has(oleg))
// console.log(cache.has(alex))