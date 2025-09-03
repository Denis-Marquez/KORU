// --- EXEMPLOS DE USO ---
// Cenário 1: Pedido completo com endereço para entrega
var pedidoComEndereco = {
    id: 201,
    cliente: "Ana Beatriz",
    produtos: ["Livro de TypeScript", "Caneca KORU"],
    status: "Enviado",
    endereco: {
        rua: "Rua dos Códigos",
        numero: 123,
        cidade: "São Paulo"
    }
};
// Cenário 2: Pedido sem endereço, para ser retirado na loja
var pedidoParaRetirada = {
    id: 202,
    cliente: "Carlos Andrade",
    produtos: ["Teclado sem fio"],
    status: "Em Preparação",
    // A propriedade 'endereco' foi omitida
};
// Cenário 3: Pedido com endereço, mas com pagamento pendente
var pedidoPendente = {
    id: 203,
    cliente: "Mariana Lima",
    produtos: ["Monitor 24 polegadas"],
    status: "Aguardando Pagamento",
    endereco: {
        rua: "Avenida dos Desenvolvedores",
        numero: 404,
        cidade: "Belo Horizonte"
    }
};
// 3. Execução e Impressão dos Resumos
console.log(imprimirResumoDoPedido(pedidoComEndereco));
console.log(imprimirResumoDoPedido(pedidoParaRetirada));
console.log(imprimirResumoDoPedido(pedidoPendente));
/*
--- SAÍDA ESPERADA NO CONSOLE ---

Pedido #201 para Ana Beatriz (Livro de TypeScript, Caneca KORU) está Enviado. Será entregue em Rua dos Códigos, 123.
Pedido #202 para Carlos Andrade (Teclado sem fio) está Em Preparação. Retirada na loja.
Pedido #203 para Mariana Lima (Monitor 24 polegadas) está Aguardando Pagamento. Será entregue em Avenida dos Desenvolvedores, 404. (Atenção: Pagamento pendente!)

*/ 
