class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.location = location
  }

  confrontaEta(altroUtente) {
    if (this.age > altroUtente.age) {
      return `${this.firstName} è più vecchio di ${altroUtente.firstName}`
    } else if (this.age < altroUtente.age) {
      return `${this.firstName} è più giovane di ${altroUtente.firstName}`
    } else {
      return `${this.firstName} ha la stessa età di ${altroUtente.firstName}`
    }
  }
}

const user1 = new User('Mario', 'Rossi', 30, 'Roma')
const user2 = new User('Luigi', 'Verdi', 25, 'Milano')
const user3 = new User('Franco', 'Armani', 36, 'Albania')

console.log(user1)
console.log(user2)
console.log(user3)

console.log(user1.confrontaEta(user3))

/* Esercizo 2*/

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName
    this.ownerName = ownerName
    this.species = species
    this.breed = breed
  }
  sameOwner(anotherPet) {
    return this.ownerName === anotherPet.ownerName
  }
}

const pet1 = new Pet('Fido', 'Marzio', 'Cane', 'Labrador')
const pet2 = new Pet('Stella', 'Luigi', 'Gatto', 'Persiano')
const pet3 = new Pet('Bunny', 'Marzio', 'Coniglio', 'Nano')

console.log(pet1)
console.log(pet2)
console.log(pet3)

console.log(pet1.sameOwner(pet2))
console.log(pet1.sameOwner(pet3))
