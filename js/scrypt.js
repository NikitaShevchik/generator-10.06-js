"use strict"

// function* strGenerator() {
//     yield 'H'
//     yield 'E'
//     yield 'L'
//     yield 'L'
//     yield 'O'
// }

// const str = strGenerator()

// function* numberGen(n = 10) {
//     for (let i=0; i < n; i++) {
//         yield i
//     }
// }

// const count = numberGen(11)


// const iterator = {
//     [Symbol.iterator](n = 10) {
//         let i = 0

//         return {
//             next() {
//                 if (i < n) {
//                     return {
//                         value: ++i,
//                         done: false
//                     }
//                 } return { value: undefined, done: true }
//             }
//         }
//     }
// }


// for (let k of 'Hello') {
//     console.log(k)
// }

// for (let k of [1, 1, 2, 3, 5, 8, 13]) {
//     console.log(k)
// }


// function* iter(n = 10) {
//     for (let i = 0; i < n; i++) {
//         yield i
//     }
// }

// for (let k of iter(6)) {
//     console.log(k)
// }

/*---------МЕТОДЫ МАССИВОВ----------*/



const people = [
    { name: 'Никита', age: 22, budget: 28000 },
    { name: 'Иван', age: 30, budget: 150000 },
    { name: 'Владислав', age: 15, budget: 7000 },
    { name: 'Александр', age: 54, budget: 1500 },
    { name: 'Владимир', age: 17, budget: 16800 },
    { name: 'Олег', age: 42, budget: 7600 },
]

// for (let i = 0; i < people.length; i++){
//     console.log(people[i])
// }

// for (let person of people) {
//     console.log(person)
// }

//HIGHER ORDER FUNCTIONS

// ForEach
// people.forEach(function (person) {
//     console.log(person)
// })

// people.forEach(person => console.log(person))

// Map
// const newPeople = people.map(person => (person.age * 1.1).toFixed(0))
// console.log(newPeople)


// Filter

// const alc = []
// for (let i = 0; i < people.length; i++) {
//     if (people[i].age >= 18) {
//         alc.push(people[i])
//     }
// }
// console.log(alc)
// const alc = people.filter(person => person.age >= 18)
// console.log(alc)




// Reduce

// let sumBudg = 0
// for (let i = 0; i < people.length; i++) {
//     sumBudg += people[i].budget
// }
// let sumBudg = people.reduce((total, person) => total + person.budget, 0)
// console.log(sumBudg)



// Find
// const igor = people.find(person => person.name == 'Олег')
// console.log(igor)




// FindIndex
// const igorIndex = people.findIndex(person => person.name == 'Олег')
// console.log(igorIndex)



/*---------------*/
const amount = people
    .filter(person => person.budget > 10000)
    .map(person => {
        return {
            info: `${person.name} богатое гавно`,
            budget: person.budget
        }
    })
    .reduce((total, person) => total + person.budget, 0)

console.log(amount)