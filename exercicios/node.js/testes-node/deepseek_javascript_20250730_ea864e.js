// Exemplo de callback hell (aninhamento excessivo)
function fazerAlgoAssincrono(callback) {
    setTimeout(() => {
        console.log("Operação assíncrona concluída");
        callback(null, "Dados recebidos");
    }, 1000);
}

// Uso do callback
fazerAlgoAssincrono((erro, dados) => {
    if (erro) {
        console.error("Erro:", erro);
    } else {
        console.log("Sucesso:", dados);
        // Outra operação assíncrona (início do callback hell)
        fazerAlgoAssincrono((erro2, dados2) => {
            if (erro2) {
                console.error("Erro:", erro2);
            } else {
                console.log("Sucesso:", dados2);
            }
        });
    }
});