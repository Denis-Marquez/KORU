// Criando uma Promise
function operacaoAssincrona() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const sucesso = Math.random() > 0.3;
            if (sucesso) {
                resolve("Operação bem-sucedida!");
            } else {
                reject("Erro: Algo deu errado");
            }
        }, 1500);
    });
}

// Usando a Promise
operacaoAssincrona()
    .then(resultado => {
        console.log("Sucesso:", resultado);
        return "Novo valor para próxima then";
    })
    .then(novoValor => {
        console.log("Segundo then:", novoValor);
    })
    .catch(erro => {
        console.error("Falha:", erro);
    })
    .finally(() => {
        console.log("Isso sempre executa, independente de sucesso ou falha");
    });