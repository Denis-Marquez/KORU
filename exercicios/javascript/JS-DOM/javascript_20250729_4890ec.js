// Obtém todos os elementos <p> na página e altera o texto do primeiro
const paragrafos = document.getElementsByTagName("p");
if (paragrafos.length > 0) {
  paragrafos[0].textContent = "Primeiro parágrafo alterado!";
}