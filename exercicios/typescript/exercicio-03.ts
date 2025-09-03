type Person = {
  name: string;
  age: number;
  city: string;
  isEmployed: boolean;
};

const person: Person = {
  name: 'Denison',
  age: 37,
  city: 'RJ',
  isEmployed: true,
};

console.log(person);
console.log(`Name: ${person.name}`);
console.log(`Age: ${person.age}`);
console.log(`City: ${person.city}`);
console.log(`Employed: ${person.isEmployed ? 'Yes' : 'No'}`);