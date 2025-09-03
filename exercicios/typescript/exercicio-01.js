var userName = 'Denison';
// const userName = 'Mateus'; // ou assim por inferencia
var userAge = 37;
//const userAge = 37;
var isStudent = true;
// const isStudent = false;
var greeting = "Ol\u00E1 ".concat(userName, ". Voce tem ").concat(userAge, " anos. voce eh um ").concat(isStudent ? 'estudante' : 'professor', ".");
console.log(userName, userAge, isStudent);
console.log(greeting);
