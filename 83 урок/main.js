// ==================1 задание============================= //


// const user = {
//   name: 'Kostya',
//   age: 20,
//   city: 'Severodvinsk',
//   isAdmin: false
// }


// ===================2 задание=========================== //


// class Greeting {
//   sayHello(name) {
//     return `Hello ${name}!`
//   }
// }

// const greeting = new Greeting()
// console.log(greeting.sayHello('Kostya'))
// console.log(user)


// ===================3 задание=========================== //


const users = [
  { name: 'John', age: 25, isAdmin: true },
  { name: 'Jake', age: 30, isAdmin: false },
  { name: 'Bob', age: 20, isAdmin: false },
  { name: 'Wilson', age: 35, isAdmin: true }
]

let simpleUsersCount = 0
for (let i = 0; i < users.length; i++) {
  if (users[i].isAdmin) {
    simpleUsersCount++
  }
}

console.log(simpleUsersCount)