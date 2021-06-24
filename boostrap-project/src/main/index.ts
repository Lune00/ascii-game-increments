import Person from './Person'

const hello = (world: string = 'world'): string => `Hello you ${world}!`

const person: Person = {
  firstName: 'Foo',
  lastName: 'Bar',
}

console.log(hello(person.firstName))
