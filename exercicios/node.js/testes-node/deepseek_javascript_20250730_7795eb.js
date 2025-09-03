async function buscarDados() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log("Dados com async/await:", data);
        
        return data;
    } catch (error) {
        console.error("Erro no async/await:", error);
    } finally {
        console.log("Finalização do async/await");
    }
}

// Chamando a função async
buscarDados().then(data => {
    console.log("Dados retornados:", data);
});