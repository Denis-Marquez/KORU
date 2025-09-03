// Adiciona, remove e alterna classes em um elemento
const elemento = document.getElementById("meuElemento");
if (elemento) {
  elemento.classList.add("destaque"); // Adiciona classe
  elemento.classList.remove("inativo"); // Remove classe
  elemento.classList.toggle("ativo"); // Alterna classe (adiciona se não existir, remove se existir)
}