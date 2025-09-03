function add(a, b) {
    return a + b;
}
function greet(name) {
    return "Ola ".concat(name);
}
function logMessage(message) {
    console.log(message);
}
var soma = add(5, 3);
var greeting = greet('Roberto');
logMessage("A soma \u00E9: ".concat(soma));
logMessage(greeting);
