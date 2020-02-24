
const person = {
  walk() {
    console.log(`I'm walking! Mommy I'm walking`)
  }

}

const walk = person.walk.bind(person)
walk()