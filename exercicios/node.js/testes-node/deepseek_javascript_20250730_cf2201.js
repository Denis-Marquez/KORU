fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        console.log("Status:", response.status); // 200
        console.log("OK?", response.ok); // true
        
        // Diferentes formas de ler o corpo da resposta
        // return response.json(); // Para JSON
        return response.text(); // Para texto bruto
    })
    .then(data => {
        console.log("Corpo da resposta:", data);
    });