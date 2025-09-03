let userName: string = "Denis";
let idade: number = 12;

// exemplo de função
function welcomeUser(userName: string, age?: number ): void {
    if (age === undefined) {
        console.log(`ola ${userName}`);
        
    } else {
        console.log(`ola ${userName}, voce tem ${age} anos.`);
        
    } 
}

// exemplo de arrays (so tirar as barras para funcionar)
const a = [1, 'carlos', 1, 2.5, 'denis'];
const aNumber = [1,2,3,4,5];
const aString = ['alessandra', 'denis'];

const coordenada = [number, number, number] = [1,2,3];
coordenada.map  ((item) => {
 
}

//const variavel: number = welcomeUser('denis', 12);

//exemplo de objetos
coordenada.push(4); // adiciona o valor 4 ao array coordenada
const x = coordenada[0]
const y = coordenada[1]
const z = coordenada[2]

const coord: {
    x: number,
    y: number,
} = {
    x: 1,
    y: 2,
}


welcomeUser(userName, idade);
welcomeUser(userName);

