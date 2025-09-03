function add(a: number, b: number): number {
  return a + b;
}

function greet(name: string): string {
  return `Ola ${name}`;
}

function logMessage(message: string): void {
  console.log(message);
}

const soma = add(5, 3);
const greeting = greet('Roberto');

logMessage(`A soma é: ${soma}`);
logMessage(greeting);