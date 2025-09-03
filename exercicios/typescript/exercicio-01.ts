
const userName: string = 'Denison';
// const userName = 'Mateus'; // ou assim por inferencia

const userAge: number = 37;
//const userAge = 37;

const isStudent: boolean = true;
// const isStudent = false;

const greeting: string = `Olá ${userName}. Voce tem ${userAge} anos. voce eh um ${isStudent ? 'estudante' : 'professor'}.`;

console.log(userName, userAge, isStudent);
console.log(greeting);